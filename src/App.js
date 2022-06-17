import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

import { EmployeeForm } from "./features/employee/EmployeeForm";
import { EmployeeView } from "./features/employee/EmployeeView";
import { UserView } from "./features/user/UserView";
import { FeatureContainer } from "./features/featureContainer/FeatureContainer";
import { EmployeeUpdateForm } from "./features/employee/EmployeeUpdateForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FeatureContainer />} />
        <Route path="/employeeform" element={<EmployeeForm />} />
        <Route path="/employeeview" element={<EmployeeView />} />
        <Route path="/employeeupdateform" element={<EmployeeUpdateForm />} />
        <Route path="/userview" element={<UserView />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
