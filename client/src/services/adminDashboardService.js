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

// Buildings
export const getBuildings =
  async () => {
    const response =
      await axiosInstance.get(
        "/buildings",
        getAuthConfig()
      );

    return response.data;
  };

// Events
export const getEvents =
  async () => {
    const response =
      await axiosInstance.get(
        "/events",
        getAuthConfig()
      );

    return response.data;
  };

// Attendance
export const getAttendanceRecords =
  async () => {
    const response =
      await axiosInstance.get(
        "/attendance",
        getAuthConfig()
      );

    return response.data;
  };