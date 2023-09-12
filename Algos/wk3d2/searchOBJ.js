/* 
    Given a search criteria object whose values will only be
    primitives (ints, strings, booleans) and a list of objects.

    return any object that matches all the key value pairs in the search
    criteria object.

    Try without built in methods (remember to check MDN/the .hasOwnProperty from yesterday!)

    Bonus: write a 2nd solution using build in methods to practice functional
    programming.
    For functional remember we can use things like .filter 😉
*/

const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria1 = {
    firstName: "Bob",
    age: 31,
};
const expected1 = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
];

const searchCriteria2 = {
    lastName: "Smith",
};
const expected2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

/**
 * Finds the objects that match the given search criteria.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object} criteria
 * @param {Array<Object>} collection
 * @returns {Array<Object>} The found objects.
 */
function findObjects(criteria, collection) {
    rtnObj = []

    // get keys from search criteria and also get the values that belong to the keys
    let searchKeys = Object.keys(criteria);
    let values = [];
    for (let i=0; i<searchKeys.length; i++){
        values.push(criteria[searchKeys[i]])
    }
    // use the values to search the items array 
    for (let j=0; j<collection.length; j++){
        for (let k=0; k<searchKeys.length; k++){
            if (collection[j][searchKeys[k]] !== values[k]){
                break;
            }
            if (k == searchKeys.length-1){
                rtnObj.push(collection[j])
            }
        }
    }
    // push values into return array
    return rtnObj
    // return array
}

console.log(findObjects(searchCriteria1, items));
console.log(findObjects(searchCriteria2, items));

/*****************************************************************************/

