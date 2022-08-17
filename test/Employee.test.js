const Employee = require("./Employee.test");

test("Can create new employee.", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
})

test("Testing name.", () => {
    const name = "Joel";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
})

test("Gets name through getName method.", () => {
   
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
})

test("Testing ID.", () => {
    const employee = new Employee("Joel", id);
    expect(employee.id).toBe(id);
})

test("Can test ID through getID method.", () => {
    const employee = new Employee("Joel", testID);
    expect(employee.getId()).toBe(testID);
})

test("Testing email.", () => {
    const employee = new Employee("Joel", 3, email);
    expect(employee.email).toBe(email);
})

test("Can test email through getEmail method.", () => {
    const employee = new Employee("Joel", 3, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
})

test("Testing role.", () => {
    const employee = new Employee("Joel", 3, "joelrivera@yahoo.com");
    expect(employee.getRole()).toBe(returnValue);
})

