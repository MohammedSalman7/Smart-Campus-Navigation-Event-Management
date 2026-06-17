import {
  useEffect,
  useState,
} from "react";

import Layout from "../../components/common/Layout";
import {
  getBuildings,
} from "../../services/buildingService";

function CampusNavigation() {
  const [buildings, setBuildings] =
    useState([]);

  useEffect(() => {
    const fetchBuildings =
      async () => {
        try {
          const data =
            await getBuildings();

          setBuildings(data);
        } catch (error) {
          console.log(error);
        }
      };

    fetchBuildings();
  }, []);

  return (
    <Layout>
      <div className="min-h-[80vh] bg-gradient-to-br from-blue-50 to-gray-100 p-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-8">
          Campus Navigation 🗺️
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {buildings.map(
            (building) => (
              <div
                key={building._id}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                <h2 className="text-2xl font-bold text-blue-700 mb-3">
                  {building.name}
                </h2>

                {/* Building Icon */}
                <div className="h-40 bg-blue-100 rounded-lg flex items-center justify-center mb-5">
                  <span className="text-6xl">
                    🏢
                  </span>
                </div>

                <p className="text-gray-700 mb-2">
                  🏢 Code:{" "}
                  <span className="font-semibold">
                    {building.code}
                  </span>
                </p>

                <p className="text-gray-700 mb-4">
                  📝{" "}
                  {building.description}
                </p>

                {/* Departments */}
                <div className="mt-3">
                  <p className="font-semibold mb-3 text-blue-700">
                    📚 Departments
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {building.departments.map(
                      (
                        dept,
                        index
                      ) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {dept}
                        </span>
                      )
                    )}
                  </div>
                </div>

                {/* Google Maps Button */}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${building.latitude},${building.longitude}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
                >
                  🗺️ View on Map
                </a>
              </div>
            )
          )}

        </div>
      </div>
    </Layout>
  );
}

export default CampusNavigation;