import Layout from "../../components/common/Layout";

function Events() {
  return (
    <Layout>
      <div className="min-h-[80vh] bg-gradient-to-br from-blue-50 to-gray-100 p-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-8">
          🎉 Events
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Event Card */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300">

            {/* Event Image Placeholder */}
            <div className="h-40 bg-blue-100 rounded-lg flex items-center justify-center mb-5">
              <span className="text-6xl">
                🎉
              </span>
            </div>

            <h2 className="text-2xl font-bold text-blue-700 mb-3">
              AI Workshop
            </h2>

            <p className="text-gray-700 mb-2">
              📅 Date:
              <span className="font-semibold">
                {" "}30 June 2026
              </span>
            </p>

            <p className="text-gray-700 mb-2">
              📍 Venue:
              <span className="font-semibold">
                {" "}Seminar Hall
              </span>
            </p>

            <p className="text-gray-700 mb-4">
              🏷️ Category:
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm ml-2">
                Technical
              </span>
            </p>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md">
              Register
            </button>

          </div>

        </div>
      </div>
    </Layout>
  );
}

export default Events;