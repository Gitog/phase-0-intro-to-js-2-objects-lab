// Write your solution in this file!
var employee = {
    name: "",
    streetAddress: ""
}

function updateEmployeeWithKeyAndValue(employee, key, value) {

    const employeeClone = { ...employee }
    employeeClone[key] = value
    return employeeClone;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee['name'] = 'Sam';
    employee['streetAddress'] = '12 Broadway'
    return employee;
}
// destructivelyUpdateEmployeeWithKeyAndValue("Sam", "12 Broadway");


function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = Object.assign({}, employee)
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}