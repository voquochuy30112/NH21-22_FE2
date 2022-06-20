import React from "react";

export default function SuKien({ onClick, value }) {
 return (
   <button className="sukien" onClick={onClick}>
     {value}
   </button>
 );
}