import React, { useState } from "react";

export default function SearchBar({onSearch}) {

  const [ city , setCity ] = useState('')

  const handleInputChange = (e) => {
    setCity(e.target.value)
    console.log(e.target.value)
  }

  return (
    <form
      className="d-flex" 
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
    }}>
      <input
        className="form-control me-2"
        type="text"
        placeholder="Ciudad..."
        onChange={ handleInputChange }
      />
      <input className="btn btn-outline-success" type="submit" value="Agregar" />
    </form>
  );
}
