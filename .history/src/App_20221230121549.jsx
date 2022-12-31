import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Marks from "./pages/Marks";
import Report from "./pages/Report";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Class from "./pages/Class";
import SearchStudent from "./pages/SearchStudent";
import Student from "./pages/Student";
import Notify from "./pages/Notify";
function handleRole() {
  console.log(localStorage.getItem("role"));
  if (localStorage.getItem("role") === 3) {
    return <Route path="notify" element={<Notify />} />;
  }
}
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="student" element={<SearchStudent />} />
          <Route path="student/:id" element={<Student />} />
          <Route path="marks/:id" element={<Marks />} />
          <Route path="report" element={<Report />} />
          {handleRole()}
          <Route path="profile" element={<Profile />} />
          <Route path="class/add" element={<Class />} />
          <Route path="class/:id" element={<Class />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
