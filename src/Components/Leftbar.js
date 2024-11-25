import React from "react";

function Leftbar() {
  return (
    <div className="w-full h-dvh bg-white-300 rounded-md shadow-md">
      <div
        className="top w-full h-20 rounded-md m-0 relative"
        style={{
          backgroundImage: 'url("./sky.jpeg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <span
          className="absolute bottom--5 w-12 h-12  rounded-full left-1/2 -translate-x-2/4"
          style={{
            backgroundImage: 'url("./face.jpeg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
            bottom:"-20px"
          }}
        ></span>
      </div>
      <div className="info text-center flex justify-between items-center flex-col text-gray-800 p-2 w-full text-lg my-6">
          <div className="name text-l font-medium">Mariem Abdalwahab</div>
          <div className="username text-gray-700">@maiemElshall</div>
          <div className="description">frontend Developer</div>
          <div className="follow flex px-5 justify-between items-center w-full max-[620px]:flex-col">
          <div className="following flex justify-between items-center flex-col ">
            <span>Following</span>
            <div>1202</div>
          </div>
          <div className="followers flex justify-between items-center flex-col">
          <span>Followers</span>
          <div>112</div>
          </div>
            
          </div>
      </div>
    </div>
  );
}

export default Leftbar;
