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

export const getBuildings =
  async () => {
    const response =
      await axiosInstance.get(
        "/buildings",
        getAuthConfig()
      );

    return response.data;
  };