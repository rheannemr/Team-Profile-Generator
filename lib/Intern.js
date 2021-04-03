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
        return `<div class="card" style="width: 18rem; background-color: rgb(186, 183, 184);">
        <div class="card-body">
            <h5 class="card-title">Intern: ${this.name}</h5>
        </div>
        <ul class="list-group">
            <li class="list-group-item">ID: ${this.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
            <li class="list-group-item">School: ${this.school}</li>
        </ul>
    </div>`
    }

};

module.exports = Intern;