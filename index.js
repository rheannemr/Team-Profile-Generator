const inquirer = require('inquirer')

const fs = require('fs')

function Employee(name, id) {
    this.name = name;
    this.id = id;
    this.buildHtml = function buildHtml() {
        console.log(this.name);
        console.log(this.id;
        console.log(this.role);
    }
};

function Manager(name, id, role) {
    this.role = role;
    Employee.call(this, name, id);
}

const manager = new Manager()

manager.buildHtml();