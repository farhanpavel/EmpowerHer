import { Adminpanel } from "@/components/Adminpanel/page";
import React from "react";

export default function AdminOverview() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-blue-500 to-teal-500 text-center mb-10  ">
        Admin
      </h1>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Dashboard Summary Section */}
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Dashboard Summary
          </h2>
          <p className="text-white mb-4">
            Welcome to the admin dashboard. Here you can find a summary of
            various metrics and manage different aspects of the system.
          </p>
          <ul className="list-disc list-inside text-white pl-4">
            <li>
              Overview of all users and their involvement in the gender equality
              initiatives.
            </li>
            <li>
              Quick access to manage child marriage and abuse reports, as well
              as student participation in the program.
            </li>
            <li>
              Insights and reports on system impact, donations, and the activity
              of users within the platform.
            </li>
          </ul>
        </div>

        {/* Upcoming Tasks Section */}
        <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-semibold text-white mb-4">
            Upcoming Tasks
          </h2>
          <ul className="list-disc list-inside text-white pl-4">
            <li>
              Review pending child marriage and abuse reports for immediate
              intervention.
            </li>
            <li>
              Generate monthly impact reports on women’s rights, safety, and
              empowerment initiatives.
            </li>
            <li>
              Update system settings to improve user experience and streamline
              reporting features for better advocacy.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
