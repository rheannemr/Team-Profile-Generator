const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };
    getGithub() {
        return this.github;
    };
    getRole() {
        return 'Engineer';
    };

    newEngineerHTML = () => {
        return `<div class="card" style="width: 18rem; background-color: rgb(186, 183, 184);">
        <div class="card-body">
            <h5 class="card-title">Engineer: ${this.name}</h5>
        </div>
        <ul class="list-group">
            <li class="list-group-item">ID: ${this.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${this.email}">${this.email}</a></li>
            <li class="list-group-item">Github: <a href="https://github.com/${this.github}" target="_blank">${this.github}</a></li>
        </ul>
    </div>`
    }

};

module.exports = Engineer;