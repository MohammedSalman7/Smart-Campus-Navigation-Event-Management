import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../services/authService";

function Register() {
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Student",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegisterData({
      ...registerData,
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
      name: "",
      email: "",
      password: "",
    };

    if (registerData.name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (registerData.email.trim() === "") {
      newErrors.email = "Email is required";
    }

    if (registerData.password.trim() === "") {
      newErrors.password = "Password is required";
    } else if (registerData.password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    if (
      newErrors.name === "" &&
      newErrors.email === "" &&
      newErrors.password === ""
    ) {
      try {
        const data = await registerUser(
          registerData
        );

        console.log(data);

        alert("Registration Successful!");

        navigate("/login");
      } catch (error) {
        alert(
          error.response?.data?.message ||
            "Registration Failed"
        );
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[450px]">
        <h1 className="text-3xl font-bold text-center mb-6">
          Register
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={registerData.name}
              onChange={handleChange}
              className="border p-3 rounded w-full"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={registerData.email}
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
              value={registerData.password}
              onChange={handleChange}
              className="border p-3 rounded w-full"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password}
              </p>
            )}
          </div>

          <select
            name="role"
            value={registerData.role}
            onChange={handleChange}
            className="border p-3 rounded"
          >
            <option value="Student">Student</option>
            <option value="Admin">Admin</option>
          </select>

          <button
            type="submit"
            className="bg-blue-700 text-white p-3 rounded hover:bg-blue-800"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;