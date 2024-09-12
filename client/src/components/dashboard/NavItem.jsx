import React from "react";

function NavItem({ icon, title, active, setActive, isPending }) {
  return (
    <div
      className={`flex items-center justify-between overflow-hidden ${
        active === title && "bg-[#B6F09C]"
      }  p-3 rounded-xl cursor-pointer hover:opacity-60`}
      onClick={() => setActive(title)}
    >
      <div className="flex items-center gap-3">
        <img
          src={icon}
          className={`${
            active === title ? " text-[#1A1D1F]" : "text-[#6F767E]"
          }`}
        />
        <p
          className={`${
            active === title ? "text-[#1A1D1F]" : "text-[#6F767E]"
          } font-medium text-sm leading-5 tracking-[0.15px]`}
        >
          {title}
        </p>
      </div>
      <span
        className={`w-8 h-8 rounded-xl bg-[#B6F09C] grid place-items-center text ${
          isPending ? "block" : "hidden"
        }`}
      >
        <p className="text-lg leading-6 font-medium font-jakata text-[#1A1D1F]">
          2
        </p>
      </span>
    </div>
  );
}

export default NavItem;
