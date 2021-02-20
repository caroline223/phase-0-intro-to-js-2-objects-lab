// Write your solution in this file!

const employee = {
    name: 'Caroline',
    streetAddress: '121 Orange Street'
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({}, employee, {name: 'Sam', streetAddress: '11 Broadway'})   
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign(employee, {name: 'Sam', streetAddress: '12 Broadway'})
};

function deleteFromEmployeeByKey(employee, key){
    var newEmployee = Object.assign({}, employee)
    delete newEmployee[key];
    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key){
    var newEmployee = Object.assign(employee, key)
    delete newEmployee[key];
    return newEmployee;
};