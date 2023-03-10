import Employee from '../lib/Employee.js';

test('employee', () => {
    const employee = new Employee('Ethan', 24, 'weepel@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});