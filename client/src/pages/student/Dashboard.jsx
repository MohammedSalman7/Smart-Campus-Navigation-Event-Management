import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Layout from "../../components/common/Layout";

import {
  getMyEvents,
  getFavorites,
  getNotifications,
  getAttendance,
} from "../../services/dashboardService";

function Dashboard() {
  const { user } = useContext(AuthContext);

  const [stats, setStats] = useState({
    events: 0,
    favorites: 0,
    notifications: 0,
    attendance: 0,
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const myEvents =
          await getMyEvents();

        const favorites =
          await getFavorites();

        const notifications =
          await getNotifications();

        const attendance =
          await getAttendance(
            user._id
          );

        const presentCount =
          attendance.filter(
            (a) =>
              a.status ===
              "Present"
          ).length;

        const attendancePercentage =
          attendance.length > 0
            ? Math.round(
                (presentCount /
                  attendance.length) *
                  100
              )
            : 0;

        setStats({
          events: myEvents.length,
          favorites:
            favorites.length,
          notifications:
            notifications.length,
          attendance:
            attendancePercentage,
        });
      } catch (error) {
        console.log(error);
      }
    };

    if (user) {
      fetchDashboardData();
    }
  }, [user]);

  return (
    <Layout>
      <div className="min-h-[80vh] bg-gradient-to-br from-blue-50 to-gray-100 p-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-8">
          Welcome, {user?.name} 👋
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Registered Events */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 cursor-pointer">
            <h2 className="text-xl font-semibold text-blue-700">
              📅 Registered Events
            </h2>

            <p className="text-4xl font-bold mt-4 text-gray-800">
              {stats.events}
            </p>
          </div>

          {/* Favorite Buildings */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 cursor-pointer">
            <h2 className="text-xl font-semibold text-blue-700">
              ⭐ Favorite Buildings
            </h2>

            <p className="text-4xl font-bold mt-4 text-gray-800">
              {stats.favorites}
            </p>
          </div>

          {/* Attendance */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 cursor-pointer">
            <h2 className="text-xl font-semibold text-blue-700">
              📋 Attendance
            </h2>

            <p className="text-4xl font-bold mt-4 text-green-600">
              {stats.attendance}%
            </p>
          </div>

          {/* Notifications */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 cursor-pointer">
            <h2 className="text-xl font-semibold text-blue-700">
              🔔 Notifications
            </h2>

            <p className="text-4xl font-bold mt-4 text-gray-800">
              {stats.notifications}
            </p>
          </div>

        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;