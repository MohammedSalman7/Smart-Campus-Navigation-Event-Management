import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import StudentDashboard from "../pages/student/Dashboard";
import CampusNavigation from "../pages/student/CampusNavigation";
import Events from "../pages/student/Events";
import MyRegistrations from "../pages/student/MyRegistrations";
import Attendance from "../pages/student/Attendance";
import Profile from "../pages/student/Profile";

import AdminDashboard from "../pages/admin/Dashboard";

import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* Student Routes */}
      <Route
        path="/student/dashboard"
        element={
          <ProtectedRoute role="Student">
            <StudentDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/campus-navigation"
        element={
          <ProtectedRoute role="Student">
            <CampusNavigation />
          </ProtectedRoute>
        }
      />

      <Route
        path="/student/events"
        element={
          <ProtectedRoute role="Student">
            <Events />
          </ProtectedRoute>
        }
      />

      <Route
        path="/student/my-registrations"
        element={
          <ProtectedRoute role="Student">
            <MyRegistrations />
          </ProtectedRoute>
        }
      />

      <Route
        path="/student/attendance"
        element={
          <ProtectedRoute role="Student">
            <Attendance />
          </ProtectedRoute>
        }
      />

      <Route
        path="/student/profile"
        element={
          <ProtectedRoute role="Student">
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* Admin Routes */}
      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute role="Admin">
            <AdminDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRoutes;