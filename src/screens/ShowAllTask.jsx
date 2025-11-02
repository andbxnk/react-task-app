import React from 'react'
import Footer from './../components/Footer.jsx'
import task from './../assets/task.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabase } from './../libs/supabaseClient.js'
 
export default function ShowAllTask() {
  const [tasks, setTasks] = useState([])
 
  //จะทำงานตอนที่เพจถูกเปิดขึ้นมา (rendered)
  useEffect(()=>{
    //ดึงข้อมูลงานทั้งหมดจาก Supabase
    try{
      //สร้างฟังก์ชันสำหรับดึงข้อมูล
      const fetchTasks = async () => {
        //ดึงข้อมูลจาก supabase (Postgres Database)
        const { data, error } = await supabase
                                      .from('Task_Tb')          //ระบุชื่อตาราง
                                      .select("*")              //ระบุว่าจะดึงข้อมูลคอลัมน์อะไรบ้าง
                                      .order('created_at', { ascending: false }) //เรียงลำดับข้อมูลจากใหม่ไปเก่า
        //ตรวจสอบว่ามี error หรือไม่
        if(error){
          alert("เกิดข้อผิดพลาดในการดึงข้อมูลงาน กรุณาลองใหม่อีกครั้ง!!!")
          throw error
        }else{
          //นำข้อมูลที่ดึงมา data ไปเก็บไว้ที่ state tasks ที่สร้างไว้
          setTasks(data)
        }
      }
 
      //เรียกใช้ฟังก์ชันดึงข้อมูลให้ทำงาน
      fetchTasks()
    }catch(error){
      alert("เกิดข้อผิดพลาดในการดึงข้อมูลงาน กรุณาลองใหม่อีกครั้ง!!!")
      console.log("Error fetching tasks:", error)
    }
  },[])
 
  return (
    <div>
      <div className="w-8/12 border-gray-300 shadow-md rounded p-5
                      mx-auto mt-20 flex flex-col items-center">
 
        <img src={task} alt="Task" className="w-30 mb-4" />  
 
        <h1 className="text-2xl font-bold text-gray-800 text-center">
          Task Application
          <br />
          -- ข้อมูลงานทั้งหมด --
        </h1>      
 
        {/* ส่วนของปุ่มเปิดไปหน้า /addtask  */}
        <div className="w-full flex justify-end mt-4 mb-7">
          <Link to="/addtask" className="bg-blue-500 hover:bg-blue-600
                                           cursor-pointer p-3 text-white rounded">
            เพิ่มงานใหม่
          </Link>
        </div>
 
        {/* ส่วนของการแสดงข้อมูลงานทั้งหมดจาก Supabase */}
        <div className="w-full">
          <table className="w-full border border-gray-700 text-sm">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2 border border-gray-700">รูป</th>
                <th className="p-2 border border-gray-700">ชื่องาน</th>
                <th className="p-2 border border-gray-700">รายละเอียดงาน</th>
                <th className="p-2 border border-gray-700">สถานะงาน</th>
                <th className="p-2 border border-gray-700">วันที่สร้างงาน</th>
                <th className="p-2 border border-gray-700">วันที่อัพเดทงาน</th>
                <th className="p-2 border border-gray-700">จัดการ</th>                
              </tr>
            </thead>
            <tbody>
              {
                tasks.map((task)=>(
                  <tr key={task.id}>
                    <td className="p-2 border border-gray-700"></td>
                    <td className="p-2 border border-gray-700">{task.title}</td>
                    <td className="p-2 border border-gray-700">{task.detail}</td>
                    <td className="p-2 border border-gray-700"></td>
                    <td className="p-2 border border-gray-700"></td>
                    <td className="p-2 border border-gray-700"></td>
                    <td className="p-2 border border-gray-700"></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
 
      <Footer />
    </div>
  )
}
 