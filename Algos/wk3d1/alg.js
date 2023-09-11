function entries(obj) {

    const newArr = []
    
    Object.getOwnPropertyNames(obj).forEach((value) => {
      // Assign values to empty array
    newArr.push([value, obj[value]])
    })
    // return array
    return newArr
}