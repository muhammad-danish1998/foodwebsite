import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeaderToggle = (props) => {
//  const [toggleValue , setToggleValue] =  useState(0);
const initalValue = window.location.pathname === "/signup" ? props.value2 : props.value1;
  const [selectedValue, setSelectedValue] = useState(initalValue);
  const navigate = useNavigate();
  const handleToggleChange = () => {
    if (selectedValue === props.value1) {
      setSelectedValue(props.value2);
      navigate("/signup");
    } else {
      navigate("/signin");
      setSelectedValue(props.value1);
    }
  }
  return (
    <div>
      <label
        for="Toggle3"
        className="inline-flex items-center p-2 rounded-md cursor-pointer text-black  "
      >
        <input checked={selectedValue === props.value2} onChange={() => handleToggleChange()} id="Toggle3" type="checkbox" className="hidden peer "  />
        <span className="px-4 py-2 flex items-center justify-center  mt-2 rounded-l-md text-lg bg-black h-8 text-white peer-checked:bg-gray-300">
      {props.value1}
        </span>
        <span className="px-4 py-2 flex items-center justify-center mt-2 rounded-r-md text-lg bg-gray-300 h-8 peer-checked:text-white peer-checked:bg-black" >
          {props.value2}
        </span>
      </label>
    </div>
  );
};

export default HeaderToggle;
