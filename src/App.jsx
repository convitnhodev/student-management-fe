import { Routes, Route, Link } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Student from './pages/Student';
import Marks from './pages/Marks';
import Report from './pages/Report';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import ProfileClass from "./pages/ProfileClass";
import ProfileCourses from "./pages/ProfileCourses";
import Rules from './pages/Rules';
import Teachers from './pages/Teachers';

function App() {
	return (
        <>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/dashboard/*" element={<Dashboard />}>
                    <Route index element={<Home />} />
                    <Route path="student/:id" element={<Student />} />
                    <Route path="marks/:id" element={<Marks />} />
                    <Route path="report" element={<Report />} />
                    <Route path="profile/*">
                        <Route index element={<Profile />} />
                        <Route path="classes" element={<ProfileClass />} />
                        <Route path="courses" element={<ProfileCourses />} />
                        <Route path="rules" element={<Rules />} />
                        <Route path="teachers" element={<Teachers />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
