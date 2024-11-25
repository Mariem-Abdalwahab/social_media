import React from "react";

function Rightbar() {
  return (
    <div className="w-full h-dvh bg-white-300 rounded-md shadow-md">
      <span
          className=" bg-cover bg-center rounded-md h-20 w-full block"
          style={{
            backgroundImage: 'url("./art.jpg")',      
          }}
        ></span>
      <p className="p-5 text-balance leading-tight max-[490px]:p-2 max-[490px]:text-xs" style={{ wordWrap: "break-word"}}>Lorem ipsum odor amet, consectetuer adipiscing elit. Feugiat class class placerat magnis placerat conubia. Habitasse molestie ultricies hendrerit eget etiam.</p>
    </div>
  );
}

export default Rightbar;
