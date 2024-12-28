// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const Appointment = () => {
//   const [appointments, setAppointments] = useState([]);
//   console.log(appointments);

//   useEffect(() => {
//     axios
//       .get("http://localhost:7000/appointment/")
//       .then((res) => setAppointments(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   const updateStatus = (id, status) => {
//     axios
//       .patch(`http://localhost:7000/appointment/${id}`, { status })
//       .then((res) => {
//         setAppointments(
//           appointments.map((app) =>
//             app.id === id ? { ...app, status: res.data.status } : app
//           )
//         );
//       })
//       .catch((err) => console.log(err));
//   };
//   return (
//     <div className="p-6 space-y-6 mt-[60px]  md:mt-0 ">
//       <header className="flex justify-between items-center">
//         <h1 className="text-2xl font-extrabold">Appointments</h1>

//       </header>
//       <hr className="border border-black w-full" />

//       <div className=" bg-white p-6 rounded-lg shadow-md ">
//         <table className="w-full border-collapse border text-left">
//           <thead className="">
//             <tr>
//               <th className="border border-gray-300 bg-blue-800 text-white p-4">
//                 Client Name
//               </th>
//               <th className="border border-gray-300 bg-blue-800 text-white p-3">
//                 Email
//               </th>
//               <th className="border border-gray-300 bg-blue-800 text-white p-3">
//                 Number
//               </th>
//               <th className="border border-gray-300 bg-blue-800 text-white p-3">
//                 Gender
//               </th>
//               <th className="border border-gray-300 bg-blue-800 text-white p-3">
//                 Age
//               </th>
//               <th className="border border-gray-300 bg-blue-800 text-white p-3">
//                 Lawyer Name
//               </th>
//               <th className="border border-gray-300 bg-blue-800 text-white p-3">
//                 Case Type
//               </th>
//               <th className="border border-gray-300 bg-blue-800 text-white p-3">
//                 Date
//               </th>
//               <th className="border border-gray-300 bg-blue-800 text-white p-3">
//                 Time
//               </th>
//                 {/* <th className="border border-gray-300 bg-blue-800 text-white p-3">
//                   Status
//                 </th>
//                 <th className="border border-gray-300 bg-blue-800 text-white p-3">
//                   Actions
//                 </th> */}
//             </tr>
//           </thead>
//           <tbody>
//             {appointments.map((appointment) => (
//               <tr key={appointment.id}>
//                 <td className="border border-gray-300 p-3">
//                   {appointment.clientName}
//                 </td>
//                 <td className="border border-gray-300 p-3">
//                   {appointment.email}
//                 </td>
//                 <td className="border border-gray-300 p-3">
//                   {appointment.number}
//                 </td>
//                 <td className="border border-gray-300 p-3">
//                   {appointment.gender}
//                 </td>
//                 <td className="border border-gray-300 p-3">
//                   {appointment.age}
//                 </td>
//                 <td className="border border-gray-300 p-3">
//                   {appointment.name}
//                 </td>
//                 <td className="border border-gray-300 p-3">
//                   {appointment.title}
//                 </td>
//                 <td className="border border-gray-300 p-3">
//                   {new Date(appointment.date).toLocaleDateString()}
//                 </td>
//                 <td className="border border-gray-300 p-3">
//                   {appointment.time}
//                 </td>
//                 {/* <td
//                   className={`border border-gray-300 p-3 ${
//                     appointment.status === "Pending"
//                       ? "text-yellow-600"
//                       : appointment.status === "Apporved"
//                       ? "text-green-500"
//                       : "text-green-500"
//                   }`}
//                 >
//                   {appointment.status}
//                 </td> */}
//                 {/* <td className="border border-gray-300 p-7 flex gap-2">
//                   <button
//                     onClick={() => updateStatus(appointment.id,"Approved")}
//                     className="bg-green-500 hover:bg-green-600 text-white font-bold py-0 px-2 rounded-full"
//                     // title="Accept"
//                   >
//                     ✓
//                   </button>
//                   <button
//                     onClick={() => updateStatus(appointment.id,"Rejected")}
//                     className="bg-red-500 hover:bg-red-600 text-white font-bold py-0 px-2 rounded-full"
//                     title="Reject"
//                   >
//                     ✕
//                   </button>
//                   <button
//                     onClick={() => handleDelete(appointment.id)}
//                     className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-0 px-2 rounded-full"
//                     title="Delete"
//                   >
//                     🗑
//                   </button>
//                 </td> */}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Appointment;

import axios from "axios";
import React, { useEffect, useState } from "react";

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7000/appointment/")
      .then((res) => setAppointments(res.data))
      .catch((err) => console.error(err));
  }, []);

  const updateStatus = (id, status) => {
    axios
      .patch(`http://localhost:7000/appointment/${id}`, { status })
      .then((res) => {
        setAppointments((prevAppointments) =>
          prevAppointments.map((app) =>
            app.id === id ? { ...app, status: res.data.status } : app
          )
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="p-4 space-y-6 mt-16 md:mt-0 bg-gray-50 min-h-screen">
      <header className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl font-extrabold text-blue-800">Appointments</h1>
      </header>
      <hr className="border border-gray-300 w-full" />

      <div className="bg-white p-4 rounded-lg shadow-md overflow-auto">
        <table className="w-full text-sm border-collapse border">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-3 border border-gray-300">Client Id</th>
              <th className="p-3 border border-gray-300">Client Name</th>
              <th className="p-3 border border-gray-300">Email</th>
              <th className="p-3 border border-gray-300">Number</th>
              <th className="p-3 border border-gray-300">Lawyer Name</th>
              <th className="p-3 border border-gray-300">Case Type</th>
              <th className="p-3 border border-gray-300">Date</th>
              <th className="p-3 border border-gray-300">Time</th>
            </tr>
          </thead>
          <tbody>
            {appointments.length > 0 ? (
              appointments.map((appointment,index) => (
                <tr key={appointment.id} className="even:bg-gray-100">
                  <td className="p-3 border border-gray-300">
                    {index+1}
                  </td>
                  <td className="p-3 border border-gray-300">
                    {appointment.name}
                  </td>
                  <td className="p-3 border border-gray-300">
                    {appointment.email}
                  </td>
                  <td className="p-3 border border-gray-300">
                    {appointment.number}
                  </td>
                  
                  <td className="p-3 border border-gray-300">
                    {appointment.lawyerName}
                  </td>
                  <td className="p-3 border border-gray-300">
                    {appointment.title}
                  </td>
                  <td className="p-3 border border-gray-300">
                    {new Date(appointment.date).toLocaleDateString()}
                  </td>
                  <td className="p-3 border border-gray-300">
                    {appointment.time}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="9"
                  className="text-center p-4 border border-gray-300"
                >
                  No appointments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointment;

//// card import axios from "axios";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import {
//   AiOutlineMail,
//   AiOutlinePhone,
//   AiOutlineUser,
//   AiOutlineMan,
//   AiOutlineClockCircle,
// } from "react-icons/ai";
// import { BsCalendar } from "react-icons/bs";
// import {  MdOutlineCases } from "react-icons/md";  // Corrected the import for MdOutlineCase

// const Appointment = () => {
//   const [appointments, setAppointments] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:7000/appointment/")
//       .then((res) => setAppointments(res.data))
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div className="p-4 space-y-6 mt-16 md:mt-0 bg-gray-50 min-h-screen">
//       <header className="flex flex-col md:flex-row justify-between items-center gap-4">
//         <h1 className="text-2xl font-extrabold text-blue-800">Appointments</h1>
//       </header>
//       <hr className="border border-gray-300 w-full" />

//       <div className="space-y-4">
//         {appointments.length > 0 ? (
//           appointments.map((appointment) => (
//             <div
//               key={appointment.id}
//               className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-4"
//             >
//               {/* Client Details */}
//               <div className="flex items-center gap-3">
//                 <AiOutlineUser className="text-blue-600 text-xl" />
//                 <h2 className="text-lg font-semibold text-blue-800">
//                   {appointment.clientName}
//                 </h2>
//               </div>

//               {/* Other Details */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="flex flex-col items-center gap-3">
//                    <p>Email:</p>

//                    <div className="flex space-x-2">
//                   <AiOutlineMail className="text-blue-600 text-xl" />
//                   <p className="text-gray-600">{appointment.email}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <AiOutlinePhone className="text-blue-600 text-xl" />
//                   <p className="text-gray-600">{appointment.number}</p>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <AiOutlineMan className="text-blue-600 text-xl" />
//                   <p className="text-gray-600">Gender: {appointment.gender}</p>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <AiOutlineClockCircle className="text-blue-600 text-xl" />
//                   <p className="text-gray-600">Age: {appointment.age}</p>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <MdOutlineCases className="text-blue-600 text-xl"/>
//                   {/* <MdOutlineCases className="text-blue-600 text-xl" />  */}
//                   <p className="text-gray-600">
//                     Case Type: {appointment.title}
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <AiOutlineUser className="text-blue-600 text-xl" />
//                   <p className="text-gray-600">Lawyer: {appointment.name}</p>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <BsCalendar className="text-blue-600 text-xl" />
//                   <p className="text-gray-600">
//                     Date: {new Date(appointment.date).toLocaleDateString()}
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <AiOutlineClockCircle className="text-blue-600 text-xl" />
//                   <p className="text-gray-600">Time: {appointment.time}</p>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="text-center text-gray-500">
//             No appointments found.
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Appointment;
