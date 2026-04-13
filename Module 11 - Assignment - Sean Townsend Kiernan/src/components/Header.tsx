import React from "react";

interface HeaderProps {
  total: number;
  active: number;
  inactive: number;
}

const Header: React.FC<HeaderProps> = ({ total, active, inactive }) => {
  return (
    <header className="dashboard-header">
      <h1>Student Dashboard</h1>
      <p className="subtitle">Track student performance and activity status</p>

      <div className="counts-container">
        <div className="count-card">
          <h3>Total Students</h3>
          <p>{total}</p>
        </div>
        <div className="count-card">
          <h3>Active</h3>
          <p>{active}</p>
        </div>
        <div className="count-card">
          <h3>Inactive</h3>
          <p>{inactive}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;