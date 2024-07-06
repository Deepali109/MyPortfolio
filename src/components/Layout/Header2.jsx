import React, { useState } from "react";
import Leftdrawer from "./Leftdrawer";
import Drawer from "@mui/material/Drawer";
import { TfiAlignJustify } from "react-icons/tfi";

function Header2() {
  const [dropen, setDropen] = useState(false);
  const handleropen = () => {
    setDropen(true);
  };
  const handlerclose = () => {
    setDropen(false);
  };
  return (
    <div>
      <header className="shodow-md bg-gray-900 w-full h-14 fixed z-10 ">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap ml-3">
            <span className="text-teal-400 text-2xl font-serif">PORTFOLIO</span>
          </h1>
          <div className="">
            <TfiAlignJustify
              size={20}
              color="white"
              className="mr-4 cursor-pointer"
              onClick={handleropen}
            />
            <Drawer
              open={dropen}
              onClose={handlerclose}
              // style={{ backgroundColor: "#0d0f15" }}
              className="w-0"
            >
              <Leftdrawer
                logclose={handlerclose}
                // className="bg-gradient-to-br from-gray-600 to-slate-900 border-2 border-slate-400"
              />
            </Drawer>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header2;
