window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml=" <th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>"
  let empPayrollData=createEmployeePayrollJSON()[0];
    const innerHtml = `${headerHtml}
    <tr>
        <td><img class="profile" alt="" src="${empPayrollData._profile}"></td>
        <td>${empPayrollData._name}</td>
        <td>${empPayrollData._gender}</td>
        <td>
            <div class='dept-label'>${empPayrollData._department[0]}</div>
            <div class='dept-label'>${empPayrollData._department[1]}</div>
        </td>
        <td>${empPayrollData._salary}</td>
        <td>${empPayrollData._startDate}</td>
        <td><img name=${empPayrollData._id} onclick="remove(this)" alt="delete" src="/assets/delete-black-18dp.svg">
            <img id="1" alt="edit" onclick="update(this)" src="/assets/create-black-18dp.svg">
        </td>
    </tr>
`;
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

