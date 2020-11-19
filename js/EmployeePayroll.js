
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

    const start = document.querySelector("#startDate");
    const day = document.querySelector("#day");
    const month = document.querySelector("#month");
    const year = document.querySelector("#year");
    const dateError = document.querySelector(".date-error");
    start.addEventListener("input",function() {
      if(start<=new Date() || start=="undefined")
        try {
            new EmployeePayrollData().startDate = new Date(
                Date.UTC(year.value, month.value-1, day.value)
            );
            dateError.textContent = "";
        } catch (e) {
            dateError.textContent = e;
        }
    });
  });