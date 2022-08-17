const Employee = require ('./Employee');
class Manager extends Employee
 {
    constructor(officeNumber,id,name,email) 
    {super (name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() 
    {
        return "manager";
    }
    getOfficeNumber() 
    {
        return this.officeNumber;
    }
}
module.exports = Manager;