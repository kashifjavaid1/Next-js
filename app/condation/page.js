"use client"
import { useState } from "react";

export default function Condition() {
  const [students, setStudents] = useState([
    {
      "Name": "kashif",
      "rollNumber": 532,
      "Section": "D"
    },
    {
      "Name": "Ali",
      "rollNumber": 596,
      "Section": "E"
    },
    {
      "Name": "umair",
      "rollNumber": 446,
      "Section": "A"
    },
    {
      "Name": "Usama",
      "rollNumber": 456,
      "Section": "B"
    }
  ]);

  const deleteHandler = (studentRollNumber) => {
    const newStudents = students.filter((student) => {
      return studentRollNumber !== student.rollNumber;
    });
    setStudents(newStudents);
  };

  return (
    <div className="container mx-auto py-12">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">RollNumber</th>
            <th className="py-2 px-4 border-b">Section</th>
            <th className="py-2 px-4 border-b">Delete</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item, index) => (
            <tr key={index}>
              <td className="text-center py-2 px-4 border-b">{item.Name}</td>
              <td className="text-center py-2 px-4 border-b">{item.rollNumber}</td>
              <td className="text-center py-2 px-4 border-b">{item.Section}</td>
              <td className="text-center py-2 px-4 border-b">
                <button onClick={() => deleteHandler(item.rollNumber)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

