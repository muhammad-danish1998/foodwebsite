import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PopupDeliver from "./PopupDeliver";

const HeaderToggle = (props) => {
//  const [toggleValue , setToggleValue] =  useState(0);
const initalValue = window.location.pathname === "/signup" ? props.value2 : props.value1;
  const [selectedValue, setSelectedValue] = useState(initalValue);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleToggleChange = () => {
    if (selectedValue === props.value1) {
      setSelectedValue(props.value2);
      navigate("/delivery");
    } else {
      navigate("/pickup");
      setSelectedValue(props.value1);
    }
  }

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <label
        htmlFor="Toggle3"
        className="inline-flex items-center p-2 rounded-md cursor-pointer text-black  "
      >
        <input checked={selectedValue === props.value2} onChange={() => setShowModal(true)} id="Toggle3" type="checkbox" className="hidden peer "  />
        <span className="px-4 py-2 flex items-center justify-center  mt-2 rounded-l-md text-lg bg-black h-8 text-white peer-checked:bg-gray-300">
      {props.value1}
        </span>
        <span className="px-4 py-2 flex items-center justify-center mt-2 rounded-r-md text-lg bg-gray-300 h-8 peer-checked:text-white peer-checked:bg-black" >
          {props.value2}
        </span>
      </label>

          <PopupDeliver
              currentRestaurantImg=""
              onClose={handleClose}
              visible={showModal}
            />
    </div>
  );
};

export default HeaderToggle;
