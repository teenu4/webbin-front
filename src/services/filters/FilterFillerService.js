
const FILTER_MAPPING = {
    'Categories': 'categoryId',
    'Elements': 'elementId',
    'Patterns': 'patternId'
}

const FilterFillerService = {

    getFilters(activeFilters) {
        let result = {};
        Object.keys(activeFilters).forEach(key => {
            result[FILTER_MAPPING[key]] = [];
            activeFilters[key].map(h =>
                result[FILTER_MAPPING[key]].push(h.id));
        });
        return result;
    }

};

export default FilterFillerService;