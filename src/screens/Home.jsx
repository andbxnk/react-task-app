import React from "react";
import Footer from "../components/Footer";
import task from "../assets/task.png";
import { useState } from "react";

export default function Home() {
  const [secureCode, setSecureCode] = useState("");

  const handleTaskClick = () => {
    if (secureCode === "") {
      alert("กรุณาใส่ Secure Code");
      return;
    }

    if (secureCode.toLowerCase() === "dtisau") {
      window.location.href = "./showalltask";
    } else {
      alert("Secure Code ไม่ถูกต้อง");
    }
  };

  return (
    <>
      <div className="w-6/12 border-gray-300 shadow-md rounded p-5 mx-auto mt-20 flex flex-col items-center">
        <img src={task} alt="Task" className="w-40 mb-4" />

        <h1 className="text-3xl font-bold text-gray-800">Task Application</h1>

        <input
          type="text"
          value={secureCode}
          onChange={(e) => setSecureCode(e.target.value)}
          placeholder="Enter Secure Code"
          className="p-2 border border-gray-800 mt-5 rounded w-100"
        />

        <button
          onClick={handleTaskClick}
          className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white px-4 py-2 rounded mt-7"
        >
          เข้าใช้งาน Task Application
        </button>
        <Footer />
      </div>
    </>
  );
}
