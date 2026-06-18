import axiosInstance from "./axiosInstance";

const getAuthConfig = () => {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return {
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  };
};

// My Events
export const getMyEvents =
  async () => {
    const response =
      await axiosInstance.get(
        "/events/my-events",
        getAuthConfig()
      );

    return response.data;
  };

// Favorites
export const getFavorites =
  async () => {
    const response =
      await axiosInstance.get(
        "/favorites",
        getAuthConfig()
      );

    return response.data;
  };

// Notifications
export const getNotifications =
  async () => {
    const response =
      await axiosInstance.get(
        "/notifications",
        getAuthConfig()
      );

    return response.data;
  };

// Attendance
export const getAttendance =
  async (studentId) => {
    const response =
      await axiosInstance.get(
        `/attendance/student/${studentId}`,
        getAuthConfig()
      );

    return response.data;
  };