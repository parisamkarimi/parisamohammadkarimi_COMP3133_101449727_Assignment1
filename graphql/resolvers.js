const Employee = require('../models/Employee');

const resolvers = {
  Query: {
    getEmployees: async () => await Employee.find(),
    getEmployee: async (_, { _id }) => await Employee.findById(_id),
  },
  Mutation: {
    addEmployee: async (_, args) => {
      try {
        const employee = new Employee(args);
        await employee.save();
        return employee;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    updateEmployee: async (_, { _id, ...updateFields }) => {
      try {
        return await Employee.findByIdAndUpdate(_id, updateFields, { new: true });
      } catch (error) {
        throw new Error(error.message);
      }
    },
    deleteEmployee: async (_, { _id }) => {
      try {
        return await Employee.findByIdAndDelete(_id);
      } catch (error) {
        throw new Error(error.message);
      }
    }
  }
};

module.exports = { resolvers };
