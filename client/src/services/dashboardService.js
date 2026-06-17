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

// My Events
export const getMyEvents =
  async () => {
    const response =
      await axios.get(
        `${API}/events/my-events`,
        getAuthConfig()
      );

    return response.data;
  };

// Favorites
export const getFavorites =
  async () => {
    const response =
      await axios.get(
        `${API}/favorites`,
        getAuthConfig()
      );

    return response.data;
  };

// Notifications
export const getNotifications =
  async () => {
    const response =
      await axios.get(
        `${API}/notifications`,
        getAuthConfig()
      );

    return response.data;
  };

// Attendance
export const getAttendance =
  async (studentId) => {
    const response =
      await axios.get(
        `${API}/attendance/student/${studentId}`,
        getAuthConfig()
      );

    return response.data;
  };