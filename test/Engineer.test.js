const Engineer = require("../test/Engineer");

test("Create a github.", () => {
    const testGithub = "Jrivera239";
    const employee = new Engineer
    ("Joel", 1, "joelrivera1989@yahoo.com", testGithub);
    expect(employee.github).toBe(testGithub);
});

test("Gets github info.", () => {
    const testGithub = "Jrivera239";
    const employee = new Engineer
    ("Joel", 1, "joelrivera1989@yahoo.com", testGithub);
    expect(employee.getGithub()).toBe(testGithub);
});

test("Tests Engineer role.", () => {
    const returnValue = "Engineer";
    const employee = new Engineer
    ("Joel", 1, "joelrivera1989@yahoo.com", "Jrivera239");
    expect(employee.getRole()).toBe(returnValue);
});