let isUpdate = false;
let employeePayrollObj = {};

window.addEventListener("DOMContentLoaded", (event) => {
  const name = document.querySelector("#name");
  const textError = document.querySelector(".text-error");
  name.addEventListener("input", function () {
    if (name.value.length == 0) {
      textError.textContent = "";
      return;
    }
    try {
      new EmployeePayrollData().name = name.value;
      textError.textContent = "";
    } catch (e) {
      textError.textContent = e;
    }
  });

  const idvalue = document.querySelector("#id");
  const numberError = document.querySelector(".num-error");
  idvalue.addEventListener("input", function () {
    if (idvalue.value.length == 0) {
      numberError.textContent = "";
      return;
    }
    try {
      new EmployeePayrollData().id = id.value;
      numberError.textContent = "";
    } catch (e) {
      numberError.textContent = e;
    }
  });

  const salary = document.querySelector("#salary");
  const output = document.querySelector(".salary-output");
  output.textContent = salary.value;
  salary.addEventListener("input", function () {
    output.textContent = salary.value;
  });
  checkForUpdate();
});
const save = () => {
  try {
    let employeePayrollData = createEmployeePayroll();
    createAndUpdateStorage(employeePayrollData);
  } catch (e) {
    return;
  }
}

function createAndUpdateStorage(employeePayrollData) {
  let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
  if (employeePayrollList != undefined) {
    employeePayrollList.push(employeePayrollData);
  } else {
    employeePayrollList = [employeePayrollData];
  }
  alert(employeePayrollList.toString());
  localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));
}

const createEmployeePayroll = () => {
  let employeePayrollData = new EmployeePayrollData();
  employeePayrollData.id = getInputValueById('#id');
  employeePayrollData.name = getInputValueById('#name');
  employeePayrollData.profile = getSelectedValues('[name=profile]').pop();
  employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
  employeePayrollData.department = getSelectedValues('[name=department]');
  employeePayrollData.salary = getInputValueById('#salary');
  employeePayrollData.note = getInputValueById('#notes');
  let date = getInputValueById('#month') + " " + getInputValueById('#day') + " " + getInputValueById('#year');
  employeePayrollData.startDate = new Date(date);
  alert(employeePayrollData.toString());
  return employeePayrollData;
}

const getInputValueById = (id) => {
  let value = document.querySelector(id).value;
  return value;
}

const getSelectedValues = (propertyValue) => {
  let allItems = document.querySelectorAll(propertyValue);
  let selItems = [];
  allItems.forEach(item => {
    if (item.checked)
      selItems.push(item.value);
  });
  return selItems;
}

const resetForm = () => {
  setValue('#name', '');
  unsetSelectedValues('[name=profile]');
  unsetSelectedValues('[name=gender]');
  unsetSelectedValues('[name=department]');
  setValue('#salary', '');
  setTextValue('.salary-output', getInputValueById('#salary'));
  setValue('#notes', '');
  setValue('#day', '0');
  setValue('#month', '0');
  setValue('#year', '0');
}

const unsetSelectedValues = (propertyValue) => {
  let allItems = document.querySelectorAll(propertyValue);
  allItems.forEach(item => {
    item.checked = false;
  });
}
const setTextValue = (id, value) => {
  const element = document.querySelector(id);
  element.textContent = value;
}

const setValue = (id, value) => {
  const element = document.querySelector(id);
  element.value = value;
}
const checkForUpdate = () => {
  const employeePayrollJSON = localStorage.getItem('editEmp');
  isUpdate = employeePayrollJSON ? true : false;
  if (!isUpdate) return;
  empPayrollObj = JSON.parse(employeePayrollJSON);
  setForm();
}

const setForm = () => {
  setValue('#name', empPayrollObj._name);
  setSelectedValues('[name=profile]', empPayrollObj._profilePic);
  setSelectedValues('[name=gender]', empPayrollObj._gender);
  setSelectedValues('[name=department]', empPayrollObj._department);
  setValue('#salary', empPayrollObj._salary);
  setTextValue('.salary-output', empPayrollObj._salary);
  setValue('#notes', empPayrollObj._notes);
  console.log(empPayrollObj._startDate);
  let date = stringifyDate(empPayrollObj._startDate).split(" ");
  console.log(date);
  setValue('#day', date[0]);
  setValue('#month', date[1]);
  setValue('#year', date[2]);
}

const setSelectedValues = (propertyValue, value) => {
  let allItems = document.querySelectorAll(propertyValue);
  allItems.forEach(item => {
    if (Array.isArray(value)) {
      if (value.includes(item.value)) {
        item.checked = true;
      }
    } else if (item.value === value) item.checked = true;
  });
}