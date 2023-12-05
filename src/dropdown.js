import {  useState } from "react";
import Style from './dropdown.module.css';

function Dropdown() {

  const list = ["Paris", "UK", "USA", "Russia"];

  //  hook for showing the selected item and option
  const [selectedOption, setSelectedOption] = useState("");
  const [optionArray, setOptionArray] = useState([]);
  
  // This fn will call, when we we will enter on the select button
  const handleMouseOver = ()=>{
    setOptionArray(list);
  }
  // This fn will call , when we click outside of that select button
  const handleClick = ()=>{
    setOptionArray([]);
  }
  // This fn  keep track of the selected Item
  const handleOptionClick = (data)=>{
    setSelectedOption(data);
  }

  //  UI
  return (
    <>
      <div onClick={handleClick}>
        <h1 className="select">Select Your Favourite Destination</h1>
        <div>
          <h2>{selectedOption}</h2>
          <div onMouseOver={handleMouseOver} className={Style.initialOption}>Select</div>
          <div className={Style.options}>
              {optionArray.map((data)=> (
                  <div onClick={() => handleOptionClick(data)} className={Style.singleOption}>{data}</div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dropdown;