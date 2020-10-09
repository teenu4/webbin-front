import { gql } from "apollo-boost";

const FILTER_MAPPING = {
    'Categories': { keyName: 'categoryId', singular: 'Category' },
    'Elements': { keyName: 'elementId', singular: 'Element' },
    'Patterns': { keyName: 'patternId', singular: 'Pattern' }
}

const FilterFillerService = {

    getFilterVariable(activeFilters) {
        let result = {};
        Object.keys(activeFilters).forEach(key => {
            result[FILTER_MAPPING[key].keyName] = [];
            activeFilters[key].map(h =>
                result[FILTER_MAPPING[key].keyName].push(h.id));
        });
        return result;
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