/**
 * This function is used to search string inside an object
 * @param {Object} obj 
 * @param {String} qry 
 * @returns {Object}
 */
function objSearch(obj, qry) {
  let schema = null;

  function addToSchema(key, index) {
    if (!schema) {
      schema = {};
    }

    schema[key] = index;
  }

  // Iterate each property of the object
  Object.keys(obj).forEach((key) => {
    // If the value is string, find match with the search query
    if (typeof obj[key] === "string") {
      const index = `${obj[key]}`.toLocaleLowerCase().indexOf(qry.trim().toLocaleLowerCase());

      // If match found save the returned index (Integer)
      if (index > -1) {
        addToSchema(key, index);
      }
    } else {
      // Recursion of the same function if property type is object (assumed)
      const locRes = objSearch(obj[key], qry);

      // Save the returned schema of matched index
      if (locRes) {
        addToSchema(key, locRes);
      }
    }
  });
  return schema;
}

/**
 * This function is used to search string inside an array of object
 * @param {Array} list 
 * @param {String} sch 
 * @returns {Object}
 */
export function searchEngine(list, sch) {
  const newList = [];
  const schema = [];

  // Iterate the array
  list.forEach((item) => {
    // Search the string inside the each object
    const res = objSearch(item, sch);

    // If match found save the particular array in the new list
    // Save the returned search result schema
    if (res) {
      newList.push(item);
      schema.push(res);
    }
  });

  return {
    newList,
    schema,
  };
}