const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
    };
    getSchool() {
        return this.school;
    };
    getRole() {
        return 'Intern';
    };

    newInternHTML = () => {
        return `<div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${this.name}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">${this.id}</li>
            <li class="list-group-item">${this.email}</li>
            <li class="list-group-item">${this.school}</li>
        </ul>
    </div>`
    }

};

module.exports = Intern;