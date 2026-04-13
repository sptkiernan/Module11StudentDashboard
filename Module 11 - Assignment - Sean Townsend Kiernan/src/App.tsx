import React from "react";
import StudentList from "./components/StudentList";
import "./App.css";

export interface Student {
  id: number;
  name: string;
  grade: number;
  isActive: boolean;
  major: string;
}

const studentsData: Student[] = [
  { id: 1, name: "Anna", grade: 90, isActive: true, major: "Computer Science" },
  { id: 2, name: "John", grade: 70, isActive: false, major: "Business" },
  { id: 3, name: "Maria", grade: 85, isActive: true, major: "Mathematics" },
  { id: 4, name: "Sam", grade: 60, isActive: true, major: "Biology" },
  { id: 5, name: "Liam", grade: 77, isActive: true, major: "Engineering" },
  { id: 6, name: "Olivia", grade: 92, isActive: false, major: "Psychology" },
  { id: 7, name: "Noah", grade: 68, isActive: true, major: "History" },
  { id: 8, name: "Emma", grade: 81, isActive: true, major: "English" },
  { id: 9, name: "James", grade: 74, isActive: false, major: "Physics" },
  { id: 10, name: "Sophia", grade: 88, isActive: true, major: "Design" }
];

function App() {
  return (
    <div className="app-container">
      <StudentList students={studentsData} />
    </div>
  );
}

export default App;