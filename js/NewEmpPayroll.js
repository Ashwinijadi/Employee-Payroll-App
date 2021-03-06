
class EmployeePayrollData {
  id;
  
  get name() {
    return this._name;
  }
  set name(name) {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (nameRegex.test(name))
      this._name = name;
    else throw "name is incorrect";
  }
  get profile() {
    return this._profile;
  }
  set profile(profile) {
    this._profile = profile;
  }

  get gender() {
    return this._gender;
  }
  set gender(gender) {
    this._gender = gender;
  }

  get department() {
    return this._department;
  }
  set department(department) {
    this._department = department;
  }

  get salary() {
    return this._salary;
  }
  set salary(salary) {
    this._salary = salary;
  }

  get note() {
    return this._note;
  }
  set note(note) {
    this._note = note;
  }

  get startDate() {
    return this._startDate;
  }
  set startDate(startDate) {
    let now=new Date();
    if (startDate >now) throw "StartDate is FutureDate!!" ;
    var diff =Math.abs(now.getTime()-startDate.getTime());
    if(diff/(1000*60*60*24)>30)
         throw " StartDate is beyond 30 days";
    this._startDate=startDate;
  }

  toString() {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const empDate = !this.startDate ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
    return "id = " + this.id + " , name : " + this.name + ",gender=" + this.gender + ",profile=" + this.profile + ",department=" + this.department + " , salary : " + this.salary +
      + ", date = " + empDate + ", note : " + this.note;
  }
}
