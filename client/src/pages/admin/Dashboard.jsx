import {
  useContext,
  useEffect,
  useState,
} from "react";

import Layout from "../../components/common/Layout";
import { AuthContext } from "../../context/AuthContext";

import {
  getBuildings,
  getEvents,
  getAttendanceRecords,
} from "../../services/adminDashboardService";

function Dashboard() {
  const { user } =
    useContext(AuthContext);

  const [stats, setStats] =
    useState({
      buildings: 0,
      events: 0,
      attendance: 0,
      students: 1,
    });

  useEffect(() => {
    const fetchData =
      async () => {
        try {
          const buildings =
            await getBuildings();

          const events =
            await getEvents();

          const attendance =
            await getAttendanceRecords();

          setStats({
            buildings:
              buildings.length,
            events:
              events.length,
            attendance:
              attendance.length,
            students: 1,
          });
        } catch (error) {
          console.log(error);
        }
      };

    fetchData();
  }, []);

  return (
    <Layout>
      <div className="min-h-[80vh] bg-gradient-to-br from-blue-50 to-gray-100 p-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-8">
          Welcome, {user?.name} 👋
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Buildings */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 cursor-pointer">
            <h2 className="text-xl font-semibold text-blue-700">
              🏢 Total Buildings
            </h2>

            <p className="text-4xl font-bold mt-4 text-gray-800">
              {stats.buildings}
            </p>
          </div>

          {/* Students */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 cursor-pointer">
            <h2 className="text-xl font-semibold text-blue-700">
              👨‍🎓 Total Students
            </h2>

            <p className="text-4xl font-bold mt-4 text-gray-800">
              {stats.students}
            </p>
          </div>

          {/* Events */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 cursor-pointer">
            <h2 className="text-xl font-semibold text-blue-700">
              🎉 Total Events
            </h2>

            <p className="text-4xl font-bold mt-4 text-gray-800">
              {stats.events}
            </p>
          </div>

          {/* Attendance */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 cursor-pointer">
            <h2 className="text-xl font-semibold text-blue-700">
              📋 Attendance Records
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-600">
              {stats.attendance}
            </p>
          </div>

        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;