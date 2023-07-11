<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(person, index) in people" :key="index">
            <td>{{ person.name }}</td>
            <td>{{ person.age }}</td>
            <td>{{ person.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        people: [
          { name: 'John', age: 25, email: 'john@example.com' },
          { name: 'Jane', age: 30, email: 'jane@example.com' },
          { name: 'Bob', age: 35, email: 'bob@example.com' },
        ],
      };
    },
  };
  </script>
  
  <style>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    padding: 8px;
    border: 1px solid #ccc;
  }
  
  thead {
    background-color: #f2f2f2;
  }
  </style>
  