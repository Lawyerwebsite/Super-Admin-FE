
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCalendar, FaUsers } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { HiOutlineArrowDown, HiOutlineArrowUp } from "react-icons/hi";
import { RiAdminFill } from "react-icons/ri";

const ContentCard = () => {
  const [lawyer, setLawyer] = useState([]);
  const [user, setUser] = useState([]);
  const [appointment, setAppointment] = useState([]);
 

  const fetchLawyer = async () => {
    try {
      const res = await axios.get("http://localhost:7000/admin/get");
      console.log(res.data);
      setLawyer(res.data || []);
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchUser = async () => {
    try {
      const res = await axios.get("http://localhost:7000/user/get");
      console.log(res.data);
      
      setUser(res.data || []);
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchAppointment = async () => {
    try {
      const res = await axios.get("http://localhost:7000/appointment/");
      console.log(res.data);
      setAppointment(res.data || []);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchLawyer();
      await fetchUser();
      await fetchAppointment();
    };
    fetchData();
  }, []);

  // Update selldata with lengths
  const selldata = [
    {
      icon: <RiAdminFill />,
      title: "Total Lawyers",
      value: lawyer.length, // Use length here
      changeInValue: 37.8,
      changeDuration: "this week",
      backgroundColor: "#9AF4F9 ",
      iconColor: "#08B58C ",
    },
    {
      icon: <FaUsers />,
      title: "Total Users",
      value: user.length, // Use length here
      changeInValue: 5,
      changeDuration: "this week",
      backgroundColor: "#C8AFEF ",
      iconColor: "#7F069B",
    },
    {
      icon: <FaCalendar />,
      title: "Total Appointments",
      value: appointment.length, // Use length here
      changeInValue: -2,
      changeDuration: "this week",
      backgroundColor: "#6BBBDB ",
      iconColor: "#30069B",
    },
    {
      icon: <FaIndianRupeeSign />,
      title: "Total Revenue ",
      value: 1000, // Static value for demonstration
      changeInValue: -11,
      changeDuration: "this week",
      backgroundColor: "#F371E9 ",
      iconColor: "#A5056A",
    },
  ];

  return (
    <div className="flex gap-3 flex-wrap">
      {selldata.map((data, index) => {
        const arrowClass = data.changeInValue < 0 ? "downward-arrow text-red-500" : "upward-arrow text-green-500";
        const textColorClass = data.changeInValue < 0 ? "text-red-500" : "text-green-500";

        return (
          <div className="grow" key={index}>
            <div className="flex grow rounded-lg border px-3 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div
                className="w-24 h-24 rounded-full relative m-4"
                style={{ backgroundColor: data.backgroundColor }}
              >
                <div
                  className="absolute top-6 left-6 mx-auto flex justify-center items-center text-5xl"
                  style={{ color: data.iconColor }}
                >
                  {data.icon}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <h5 className="text-sm text-neutral-80 text-gray-400">
                  {data.title}
                </h5>
                <p className="text-xl font-bold dark:text-neutral-200">
                  {data.value}
                </p>
                <p
                  className={`text-xs text-neutral-500 dark:text-neutral-300 ${textColorClass}`}
                >
                  <div className={`flex ${arrowClass}`}>
                    <div className="mt-[1.5px]">
                      {data.changeInValue < 0 ? (
                        <HiOutlineArrowDown />
                      ) : (
                        <HiOutlineArrowUp />
                      )}
                    </div>
                    <div>{Math.abs(data.changeInValue)}%</div>
                    <div className="ml-1 text-gray-400">
                      {data.changeDuration}
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContentCard;
