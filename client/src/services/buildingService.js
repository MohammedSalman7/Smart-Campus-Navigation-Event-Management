import axios from "axios";

const API =
  "http://localhost:5000/api/buildings";

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

export const getBuildings =
  async () => {
    const response =
      await axios.get(
        API,
        getAuthConfig()
      );

    return response.data;
  };