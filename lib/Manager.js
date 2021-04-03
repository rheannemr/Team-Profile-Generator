const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    };
    getRole() {
        return 'Manager';

    };

    newManagerHTML = () => {
        return `<div class="card" style="width: 18rem; background-color: rgb(186, 183, 184);">
        <div class="card-body">
            <h5 class="card-title">Manager: ${this.name}</h5>
        </div>
        <ul class="list-group">
            <li class="list-group-item">ID: ${this.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
            <li class="list-group-item">Office Number: ${this.officeNumber}</li>
        </ul>
    </div>`
    }

};

module.exports = Manager;