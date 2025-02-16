const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Employee {
    _id: ID!
    firstname: String!
    lastname: String!
    email: String!
    gender: String!
    designation: String!
    salary: Float!
    date_of_joining: String!
    department: String!
    employee_photo: String
  }

  type Query {
    getEmployees: [Employee]
    getEmployee(_id: ID!): Employee
  }

  type Mutation {
    addEmployee(
      firstname: String!
      lastname: String!
      email: String!
      gender: String!
      designation: String!
      salary: Float!
      date_of_joining: String!
      department: String!
      employee_photo: String
    ): Employee

    updateEmployee(
      _id: ID!
      firstname: String
      lastname: String
      email: String
      gender: String
      designation: String
      salary: Float
      date_of_joining: String
      department: String
      employee_photo: String
    ): Employee

    deleteEmployee(_id: ID!): Employee
  }
`;

module.exports = { typeDefs };

