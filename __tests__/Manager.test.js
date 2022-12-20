import { Manager } from "./lib/Manager.js";
 
test('creates an Manager object', () => {
    const manager = new Manager('Mikey', 404, 'pizza4for4@gmail', 5);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('Mikey', 404, 'pizza4for4@gmail');

    expect(manager.getRole()).toEqual("Manager");
}); 