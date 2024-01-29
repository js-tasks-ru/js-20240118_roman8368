/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
function sortStrings(arr, param = 'asc') {
    switch (param) {
        case 'asc':
            return sortStringsAscending(arr);
        case 'desc':
            return sortStringsDescending(arr);
        default:
            return arr;
    }
}

function sortStringsAscending(arr) {
    return arr.sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase(), ['ru', 'en']));
}

function sortStringsDescending(arr) {
    return sortStringsAscending(arr).reverse();
}