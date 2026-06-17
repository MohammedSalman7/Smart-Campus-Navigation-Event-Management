import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const { user, logout } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        
        {/* Logo */}
        <h2 className="text-2xl font-bold tracking-wide">
          🎓 Smart Campus
        </h2>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-5 items-center text-sm md:text-base">

          <Link
            to="/"
            className="hover:text-yellow-300 transition duration-300"
          >
            Home
          </Link>

          {!user ? (
            <>
              <Link
                to="/login"
                className="hover:text-yellow-300 transition duration-300"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="hover:text-yellow-300 transition duration-300"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              {/* Student Links */}
              {user.role === "Student" && (
                <>
                  <Link
                    to="/student/dashboard"
                    className="hover:text-yellow-300 transition duration-300"
                  >
                    Dashboard
                  </Link>

                  <Link
                    to="/student/events"
                    className="hover:text-yellow-300 transition duration-300"
                  >
                    Events
                  </Link>

                  <Link
                    to="/student/my-registrations"
                    className="hover:text-yellow-300 transition duration-300"
                  >
                    Registrations
                  </Link>

                  <Link
                    to="/student/attendance"
                    className="hover:text-yellow-300 transition duration-300"
                  >
                    Attendance
                  </Link>

                  <Link
                    to="/student/profile"
                    className="hover:text-yellow-300 transition duration-300"
                  >
                    Profile
                  </Link>

                  <Link
                    to="/campus-navigation"
                    className="hover:text-yellow-300 transition duration-300"
                  >
                    Navigation
                  </Link>
                </>
              )}

              {/* Admin Links */}
              {user.role === "Admin" && (
                <Link
                  to="/admin/dashboard"
                  className="hover:text-yellow-300 transition duration-300"
                >
                  Dashboard
                </Link>
              )}

              {/* User Name */}
              <span className="bg-blue-800 px-3 py-1 rounded-lg text-sm">
                👋 Hi, {user.name}
              </span>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 shadow-md"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;