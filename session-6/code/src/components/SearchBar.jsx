import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ marginBottom: "20px", padding: "5px" }}
    />
  );
};

export default SearchBar;
