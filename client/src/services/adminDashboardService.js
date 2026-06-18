import axiosInstance from "./axiosInstance";

const getAuthConfig = () => {
  const user = JSON.parse(
    localStorage.getItem("user")
  );

  return {
    headers: {
      Authorization: user?.token
        ? `Bearer ${user.token}`
        : "",
    },
  };
};

// ==================== Buildings ====================
export const getBuildings =
  async () => {
    try {
      const response =
        await axiosInstance.get(
          "/buildings",
          getAuthConfig()
        );

      return response.data;
    } catch (error) {
      throw (
        error.response?.data || {
          message:
            "Failed to fetch buildings",
        }
      );
    }
  };

// ==================== Events ====================
export const getEvents =
  async () => {
    try {
      const response =
        await axiosInstance.get(
          "/events",
          getAuthConfig()
        );

      return response.data;
    } catch (error) {
      throw (
        error.response?.data || {
          message:
            "Failed to fetch events",
        }
      );
    }
  };

// ==================== Attendance ====================
export const getAttendanceRecords =
  async () => {
    try {
      const response =
        await axiosInstance.get(
          "/attendance",
          getAuthConfig()
        );

      return response.data;
    } catch (error) {
      throw (
        error.response?.data || {
          message:
            "Failed to fetch attendance records",
        }
      );
    }
  };