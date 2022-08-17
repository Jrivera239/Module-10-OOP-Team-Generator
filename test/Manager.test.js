// My Attempt
const Manager = require("../test/Manager");

test("Create an office number.", () => {
    const OfficeNumber = 2;
    const employee = new Manager("Joel", 1, "joelrivera@yahoo.com", OfficeNumber);
    expect(employee.officeNumber).toBe(OfficeNumber);
});

test("create office number.", () => {
    const OfficeNumber = 2;
    const employee = new Manager("Joel", 1, "joelrivera@yahoo.com", OfficeNumber);
    expect(employee.getOfficeNumber()).toBe(OfficeNumber);
});

test("Create role.", () => {
    const manager = "Manager";
    const employee = new Manager("Joel", 1, "joelrivera@yahoo.com", 2);
    expect(employee.getRole()).toBe(manager);
});