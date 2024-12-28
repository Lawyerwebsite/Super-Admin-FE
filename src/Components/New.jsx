import React from 'react'

const New = () => {
  return (
    <div>
        <div className="min-h-screen bg-gray-100 p-10">
        <h1 className="text-3xl font-semibold mb-6">User Management</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="font-semibold text-lg mb-2">Name:</h2>
              <p>Email: </p>
              <p>Appointments: </p>
              <p className="">Status: </p>
              <div className="mt-4 flex gap-4">
                  <button 
                  
                   className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                    Unblock
                  </button>
            
                <button
                
                 className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                  Delete
                </button>
              </div>
            </div>
          
        </div>
      </div>
    </div>
  )
}

export default New