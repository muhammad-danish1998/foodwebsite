import React from "react";

const HeaderToggle = (props) => {
  console.log(props.name)
  return (
    <div>
      <label
        for="Toggle3"
        className="inline-flex items-center p-2 rounded-md cursor-pointer text-black  "
      >
        <input id="Toggle3" type="checkbox" className="hidden peer " />
        <span className="px-4 py-2 flex items-center justify-center  mt-2 rounded-l-md text-lg bg-black h-8 text-white peer-checked:bg-gray-300">
      {props.value1}
        </span>
        <span className="px-4 py-2 flex items-center justify-center mt-2 rounded-r-md text-lg bg-gray-300 h-8 peer-checked:text-white peer-checked:bg-black">
          {props.value2}
        </span>
      </label>
    </div>
  );
};

export default HeaderToggle;
