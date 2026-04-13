import React from "react";

interface FilterPanelProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  filter,
  setFilter,
  searchTerm,
  setSearchTerm
}) => {
  return (
    <section className="filter-panel">
      <div className="filter-group">
        <label htmlFor="search">Search by Name:</label>
        <input
          id="search"
          type="text"
          placeholder="Enter student name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="filter-group">
        <label htmlFor="statusFilter">Filter by Status:</label>
        <select
          id="statusFilter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Students</option>
          <option value="active">Active Only</option>
          <option value="inactive">Inactive Only</option>
        </select>
      </div>
    </section>
  );
};

export default FilterPanel;