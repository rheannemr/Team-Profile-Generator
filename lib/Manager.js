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
            <h5 class="card-title">${this.name}</h5>
        </div>
        <ul class="list-group">
            <li class="list-group-item">${this.id}</li>
            <li class="list-group-item">${this.email}</li>
            <li class="list-group-item">${this.officeNumber}</li>
        </ul>
    </div>`
    }

};

module.exports = Manager;