import React, { useState } from "react";
import { Iconly } from "react-iconly";

const SearchInput = ({ onSearch, placeholder }) => {
  const [search, setSearch] = useState("");
  const onInputChange = (value) => {
    setSearch(value);
    onSearch(value);
  };
  return (
    <form>
      <div className="custom__search">
        <Iconly
          name="Search"
          set="light"
          primaryColor="#5C5C5C"
          size="medium"
        />
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
