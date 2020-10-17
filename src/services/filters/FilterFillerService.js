import { gql } from "apollo-boost";

const FILTER_MAPPING = {
    'Categories': { keyName: 'categoryId', singular: 'Category' },
    'Elements': { keyName: 'elementId', singular: 'Element' },
    'Patterns': { keyName: 'patternId', singular: 'Pattern' }
}

const FilterFillerService = {

    getEditedActiveFilters(activeFilters, id, name, filterType) {
        let current = Object.assign({}, activeFilters);
        if (id === null) {
            console.log(filterType);
            delete current[filterType];
            console.log(current);
            return current;
        }
        if (current[filterType] === undefined) {
            current[filterType] = []
        }
        const value = { id: id, name: name };
        const index = current[filterType].findIndex(i => i.id === id);
        if (index === -1) {
            current[filterType].push(value);
        } else {
            current[filterType].splice(index, 1);
            if (current[filterType].length === 0) delete current[filterType];
        }
        return current;
    },

    getFilterVariable(activeFilters, additional = {}) {
        let result = {};
        Object.keys(activeFilters).forEach(key => {
            result[FILTER_MAPPING[key].keyName] = [];
            activeFilters[key].map(h =>
                result[FILTER_MAPPING[key].keyName].push(h.id));
        });
        return Object.assign(result, additional);
    },

    getSidebarQuery(type) {
        const query = `query($filter: ${FILTER_MAPPING[type].singular}Filter!) {
            all${type}(filter: $filter) {
              id
              name
              count
            }
          
        }`;
        return gql(query);
    }



};

export default FilterFillerService;