import Layout from "../../components/common/Layout";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Profile() {
  const { user } =
    useContext(AuthContext);

  return (
    <Layout>
      <div className="min-h-[80vh] bg-gradient-to-br from-blue-50 to-gray-100 p-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-8">
          👤 Profile
        </h1>

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">

          {/* Profile Avatar */}
          <div className="flex justify-center mb-6">
            <div className="h-32 w-32 rounded-full bg-blue-100 flex items-center justify-center">
              <span className="text-6xl">
                👤
              </span>
            </div>
          </div>

          {/* User Details */}
          <div className="space-y-5">

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-lg text-gray-700">
                <span className="font-semibold text-blue-700">
                  👤 Name:
                </span>{" "}
                {user?.name}
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-lg text-gray-700">
                <span className="font-semibold text-blue-700">
                  📧 Email:
                </span>{" "}
                {user?.email}
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-lg text-gray-700">
                <span className="font-semibold text-blue-700">
                  🎓 Role:
                </span>{" "}
                {user?.role}
              </p>
            </div>

          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;