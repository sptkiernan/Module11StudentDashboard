import React from "react";
import type { Student } from "../App";

interface Props {
  student: Student;
}

// Pure Component
const StudentCard: React.FC<Props> = React.memo(({ student }) => {
  const getResult = (grade: number): string => {
    return grade >= 75 ? "Passed" : "Failed";
  };

  const studentDetails = {
    result: getResult(student.grade),
    statusText: student.isActive ? "Active" : "Inactive"
  };

  return (
    <div className="student-card">
      <h3>{student.name}</h3>
      <p><strong>Major:</strong> {student.major}</p>
      <p><strong>Grade:</strong> {student.grade}</p>
      <p>
        <strong>Result:</strong>{" "}
        <span className={studentDetails.result === "Passed" ? "passed" : "failed"}>
          {studentDetails.result}
        </span>
      </p>

      <p>
        <strong>Status:</strong>{" "}
        <span className={student.isActive ? "active" : "inactive"}>
          {studentDetails.statusText}
        </span>
      </p>
    </div>
  );
});

export default StudentCard;