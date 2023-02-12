import React, { useState } from "react";

const SearchInput = ({ onSearch, placeholder }) => {
  const [search, setSearch] = useState("");
  const onInputChange = (value) => {
    setSearch(value);
    onSearch(value);
  };
  return (
    <form>
      <div className="custom__search">
        <i className="fas fa-search" style={{ color: "#5C5C5C" }}></i>
        <input
          type="text"
          className="form-control custom-style"
          id=""
          placeholder={placeholder}
          value={search}
          onChange={(e) => onInputChange(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchInput;
