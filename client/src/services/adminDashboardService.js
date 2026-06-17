import axios from "axios";

const API =
  "http://localhost:5000/api";

const getAuthConfig = () => {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };
};

// Buildings
export const getBuildings =
  async () => {
    const response =
      await axios.get(
        `${API}/buildings`,
        getAuthConfig()
      );

    return response.data;
  };

// Events
export const getEvents =
  async () => {
    const response =
      await axios.get(
        `${API}/events`,
        getAuthConfig()
      );

    return response.data;
  };

// Attendance
export const getAttendanceRecords =
  async () => {
    const response =
      await axios.get(
        `${API}/attendance`,
        getAuthConfig()
      );

    return response.data;
  };