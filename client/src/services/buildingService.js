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

// ==================== Get Buildings ====================
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