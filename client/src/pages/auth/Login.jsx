import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });

    // Clear error while typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {
      email: "",
      password: "",
    };

    if (loginData.email.trim() === "") {
      newErrors.email = "Email is required";
    }

    if (loginData.password.trim() === "") {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (
      newErrors.email === "" &&
      newErrors.password === ""
    ) {
      try {
        const data = await loginUser(
          loginData
        );

        console.log(data);

        // Update AuthContext + localStorage
        login(data);

        alert("Login Successful!");

        // Redirect based on role
        if (data.role === "Admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/student/dashboard");
        }
      } catch (error) {
        alert(
          error.response?.data?.message ||
            "Login Failed"
        );
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[400px]">
        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={loginData.email}
              onChange={handleChange}
              className="border p-3 rounded w-full"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleChange}
              className="border p-3 rounded w-full"
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-700 text-white p-3 rounded hover:bg-blue-800"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;