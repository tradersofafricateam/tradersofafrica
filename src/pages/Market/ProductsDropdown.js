import React from "react"
import "./Market.css"

export default function ProductsDropdown({ handleChange, value }) {
  const onChangeHandler = (e) => {
    handleChange(e.target.value)
  }

  return (
    <label>
      <select className="products-ctn" value={value} onChange={onChangeHandler}>
        <option className="comm-marker-1" value="cashew">
          Cashew nuts
        </option>
        <option className="comm-marker-2" value="sesame">
          Sesame seeds
        </option>
        <option className="comm-marker-3" value="soyabeans">
          Soyabeans
        </option>
        <option className="comm-marker-4" value="groundnuts">
          Groundnuts
        </option>
        <option className="comm-marker-5" value="ginger">
          Ginger
        </option>
      </select>
    </label>
  )
}
