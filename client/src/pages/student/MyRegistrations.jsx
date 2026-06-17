import Layout from "../../components/common/Layout";

function MyRegistrations() {
  return (
    <Layout>
      <div className="p-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-8">
          📋 My Registrations
        </h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">
            AI Workshop
          </h2>

          <p className="mt-2">
            📍 Seminar Hall
          </p>

          <p>
            ✅ Registered
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default MyRegistrations;