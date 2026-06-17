import Layout from "../../components/common/Layout";

function Attendance() {
  return (
    <Layout>
      <div className="min-h-[80vh] bg-gradient-to-br from-blue-50 to-gray-100 p-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-8">
          📋 Attendance
        </h1>

        <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 text-center">

          {/* Attendance Icon */}
          <div className="h-32 w-32 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
            <span className="text-6xl">
              📋
            </span>
          </div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Attendance Percentage
          </h2>

          <p className="text-6xl text-green-600 font-bold">
            100%
          </p>

          <p className="text-gray-500 mt-4">
            Excellent! Keep maintaining your attendance.
          </p>

        </div>
      </div>
    </Layout>
  );
}

export default Attendance;