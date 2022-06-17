import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [
    {
      id: "1",
      name: "Vimu Kale",
      email: "vimurk111@gmail.com",
      address: {
        street: "123 st",
        city: "New York",
      },
    },
    {
      id: "2",
      name: "Ajinkya Bhagat",
      email: "ajinkya@gmail.com",
      address: {
        street: "123 st",
        city: "New Jersy",
      },
    },
    {
      id: "3",
      name: "Prachi Demote",
      email: "prachi@gmail.com",
      address: {
        street: "123 st",
        city: "New Hamton",
      },
    },
  ],
  //   employee: {
  //     name: "",
  //     email: "",
  //     address: {
  //       street: "",
  //       city: "",
  //     },
  //   },
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees = [action.payload, ...state.employees];
    },
    updateEmployee: (state, action) => {
      state.employees = state.employees.map((emp) =>
        emp.id === action.payload.id ? action.payload : emp
      );
    },
    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter(
        (emp) => emp.id !== action.payload
      );
    },
  },
});

export const { addEmployee, updateEmployee, deleteEmployee } =
  employeeSlice.actions;

export default employeeSlice.reducer;
