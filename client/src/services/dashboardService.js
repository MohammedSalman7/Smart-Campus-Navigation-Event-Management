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

// ==================== My Events ====================
export const getMyEvents =
  async () => {
    try {
      const response =
        await axiosInstance.get(
          "/events/my-events",
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

// ==================== Favorites ====================
export const getFavorites =
  async () => {
    try {
      const response =
        await axiosInstance.get(
          "/favorites",
          getAuthConfig()
        );

      return response.data;
    } catch (error) {
      throw (
        error.response?.data || {
          message:
            "Failed to fetch favorites",
        }
      );
    }
  };

// ==================== Notifications ====================
export const getNotifications =
  async () => {
    try {
      const response =
        await axiosInstance.get(
          "/notifications",
          getAuthConfig()
        );

      return response.data;
    } catch (error) {
      throw (
        error.response?.data || {
          message:
            "Failed to fetch notifications",
        }
      );
    }
  };

// ==================== Attendance ====================
export const getAttendance =
  async (studentId) => {
    try {
      const response =
        await axiosInstance.get(
          `/attendance/student/${studentId}`,
          getAuthConfig()
        );

      return response.data;
    } catch (error) {
      throw (
        error.response?.data || {
          message:
            "Failed to fetch attendance",
        }
      );
    }
  };