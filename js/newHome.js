let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList=getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent=empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage=()=>{
    return localStorage.getItem('EmployeePayrollList') ?
    JSON.parse(localStorage.getItem('EmployeePayrollList')):[];
}

const createInnerHtml = () => {
    const headerHtml=" <th></th><th>Name</th><th>Gender</th><th>Department</th><th>"+
    "<Salary</th><th>Start Date</th><th>Actions</th>"
    if(empPayrollList.length==0) return;
        let innerHtml = `${headerHtml}`;
    for(const empPayrollData of empPayrollList){
        innerHtml =`${innerHtml}
    <tr>
        <td><img class="profile" alt="" src="${empPayrollData._profile}"></td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>${getDeptHtml(empPayrollData._department)}</td>
        <td>${empPayrollData._salary}</td>
        <td>${stringifyDate(empPayrollData._startDate)}</td>
        <td><img id=${empPayrollData._id} onclick="remove(this)" alt="delete" src="/assets/delete-black-18dp.svg">
            <img id=${empPayrollData._id} alt="edit" onclick="update(this)" src="/assets/create-black-18dp.svg">
        </td>
    </tr>
`;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}

const createEmployeePayrollJSON = () => {
    let empPayrollListLocal = [{
            _name: 'Narayan Mahadevan',
            _gender: 'male',
            _department: [
                'HR',
                'Finance'
            ],
            _salary: '500000',
            _startDate: '29 Oct 2019',
            _note: '',
            _id: new Date().getTime(),
            _profile: '/assets/Ellipse -3.png'
        },
        {
            _name: 'Keerthi Kumar',
            _gender: 'female',
            _department: [
                'Sales'
            ],
            _salary: '400000',
            _startDate: '29 Oct 2019',
            _note: '',
            _id: new Date().getTime() + 1,
            _profile: '/assets/Ellipse -1.png'
        }
    ];
    return empPayrollListLocal;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}

const remove = (node) => {
    let empPayrollData = empPayrollList.find(empData => empData._id == node.id);
    if (!empPayrollData) return;
    const index = empPayrollList.map(empData => empData._id).indexOf(empPayrollData._id);
    empPayrollList.splice(index, 1);
    localStorage.setItem("EmployeePayrollList", JSON.stringify(empPayrollList));
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
}
