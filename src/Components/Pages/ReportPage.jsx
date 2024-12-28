import React from 'react'
import Sidebar from '../SuperAdminMain/Sidebar'
import Report from '../ReportManagement/Report'


const ReportPage = () => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Sidebar Section */}
      <aside className="w-full md:w-64">
        <Sidebar />
      </aside>

      {/* Main Content Section */}
      <main className="flex-1 p-4 bg-gray-50">
        <Report />
      </main>
    </div>
  )
}

export default ReportPage