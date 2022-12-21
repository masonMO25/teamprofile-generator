import Manager from '../lib/Manager.js';
 
test('Manager', () => {
    const manager = new Manager('Mikey', 404, 'pizza4for4@gmail', 5);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
    expect(manager.getRole()).toEqual("Manager");
});