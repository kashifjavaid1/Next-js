"use client"
import React, { useState } from 'react';

export default function Condition() {
  const [students,setstudent]=useState([
    {
      "Name": "kashif",
      "rollnumber": 123,
      "Section": "A"
    },
    {
      "Name": "javaid",
      "rollnumber": 344,
      "Section": "B"
    },
    {
      "Name": "Ahmad",
      "rollnumber": 788,
      "Section": "C"
    },
    {
      "Name": "Umair",
      "rollnumber": 412,
      "Section": "D"
    }
  ])

  const delethandler=(Studentrollnumber)=>{
       const newstudent=students.filter((student)=>{
        return student.rollnumber !== Studentrollnumber
       })
       setstudent(newstudent)
  }
  return (
    <>
      <div className="text-center py-5 text-2xl">Student App</div>
      <table className="container mx-auto border-collapse border border-gray-800">
        <thead>
          <tr>
            <th className="border border-gray-600 p-2">Name</th>
            <th className="border border-gray-600 p-2">Roll Number</th>
            <th className="border border-gray-600 p-2">Section</th>
            <th className="border border-gray-600 p-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-600 p-2">{item.Name}</td>
              <td className="border border-gray-600 p-2">{item.rollnumber}</td>
              <td className="border border-gray-600 p-2">{item.Section}</td>
              <td className="border border-gray-600 p-2" onClick={()=>delethandler(item.rollnumber)} ><button>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
