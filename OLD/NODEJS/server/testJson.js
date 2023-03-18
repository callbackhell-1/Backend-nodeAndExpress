const obj = {
  name: "John",
  age: 22,
  address: "LA",
};

console.log(obj);
console.log(obj.age);


// convert to json

const jsonData = JSON.stringify(obj);
console.log(jsonData);

// convert JSON to obj

const objData = JSON.parse(jsonData);
console.log(objData);

/* outputs : 
{ name: 'John', age: 22, address: 'LA' }
22
{"name":"John","age":22,"address":"LA"}
{ name: 'John', age: 22, address: 'LA' }
*/