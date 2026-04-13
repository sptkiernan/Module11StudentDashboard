import React, { useState } from "react";
import type { Student } from "../App";
import StudentCard from "./StudentCard";
import Header from "./Header";
import FilterPanel from "./FilterPanel";

interface Props {
  students: Student[];
}

const StudentList: React.FC<Props> = ({ students }) => {
  const [filter, setFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const activeCount = students.filter((student) => student.isActive).length;
  const inactiveCount = students.filter((student) => !student.isActive).length;

  const filteredStudents = students
    .filter((student) => {
      if (filter === "active") return student.isActive;
      if (filter === "inactive") return !student.isActive;
      return true;
    })
    .filter((student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div>
      <Header
        total={students.length}
        active={activeCount}
        inactive={inactiveCount}
      />

      <FilterPanel
        filter={filter}
        setFilter={setFilter}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <section>
        <h2 className="student-list-heading">Student List</h2>

        {filteredStudents.length > 0 ? (
          <div className="student-grid">
            {filteredStudents.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>
        ) : (
          <p className="no-results">No students found.</p>
        )}
      </section>
    </div>
  );
};

export default StudentList;