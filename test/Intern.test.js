const Intern = require("../test/Intern");

test("Create school.", () => {
    const School = "School Name";
    const employee = new Intern
    ("Joel", 2, "joelrivera@yahoo.com", School);
    expect(employee.School).toBe(School);
});

test("School name.", () => {
    const School = "School Name";
    const employee = new Intern
    ("Joel", 2, "joelrivera@yahoo.com", testSchool);
    expect(employee.getSchool()).toBe(School);
});

test("create role.", () => {
    const returnValue = "Intern";
    const employee = new Intern
    ("Joel", 2, "joelrivera@yahoo.com", "School Name");
    expect(employee.getRole()).toBe(returnValue);
});
