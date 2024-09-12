import NavItem from "@/components/dashboard/NavItem";
import { Checkbox } from "@/components/ui/checkbox";
import { icons, images } from "@/constants";
import {
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  Pen,
  Search,
  Trash2,
} from "lucide-react";
import React, { useState } from "react";

const initData = [
  {
    id: 1,
    lastAssessed: "22 Jan 2022",
    isCheck: true,
  },
  {
    id: 2,
    lastAssessed: "20 Jan 2022",
    isCheck: true,
  },

  {
    id: 3,
    lastAssessed: "24 Jan 2022",
    isCheck: true,
  },
  {
    id: 4,
    lastAssessed: "26 Jan 2022",
    isCheck: false,
  },
  {
    id: 5,
    lastAssessed: "18 Jan 2022",
    isCheck: false,
  },
  {
    id: 6,
    lastAssessed: "28 Jan 2022",
    isCheck: true,
  },
  {
    id: 7,
    lastAssessed: "16 Jan 2022",
    isCheck: true,
  },
  {
    id: 8,
    lastAssessed: "16 Jan 2022",
    isCheck: true,
  },
  {
    id: 9,
    lastAssessed: "16 Jan 2022",
    isCheck: true,
  },
];

function Dashboard() {
  const [active, setActive] = useState("Dashboard");
  const [toggleWidth, setToggleWidth] = useState(false);
  return (
    <div className="max-w-[1440px] h-[1024px]  mx-auto flex gap-2 bg-[#131619] p-2 font-jakata">
      <div
        className={`${
          toggleWidth ? "w-24" : "w-[312px]"
        } bg-[#0D0F10]  rounded-2xl flex flex-col gap-9 px-6 py-8 transition-all duration-300`}
      >
        <div
          className={`flex items-center justify-between ${
            toggleWidth ? "hidden" : "block"
          }`}
        >
          <img src={images.header} />
          <span
            className="w-8 h-8 rounded-full grid place-items-center bg-[#1A1D21] cursor-pointer"
            onClick={() => setToggleWidth(!toggleWidth)}
          >
            <ChevronLeft className="text-white" size={20} />
          </span>
        </div>
        <div
          className={`flex flex-col gap-3 items-center ${
            toggleWidth ? "block" : "hidden"
          }`}
        >
          <img src={images.Logo} />
          <span
            className="w-8 h-8 rounded-full grid place-items-center bg-[#1A1D21] cursor-pointer"
            onClick={() => setToggleWidth(!toggleWidth)}
          >
            <ChevronRight className="text-white" size={20} />
          </span>
        </div>
        <div className="w-full h-[1px] bg-[#282828]"></div>
        <div className="flex flex-col gap-2 ">
          <NavItem
            icon={icons.health}
            title={"Dashboard"}
            active={active}
            setActive={setActive}
          />
          <NavItem
            icon={icons.clipboardText}
            title={"Task"}
            active={active}
            setActive={setActive}
          />
          <NavItem
            icon={icons.wifiSquare}
            title={"Project"}
            active={active}
            setActive={setActive}
          />
          <NavItem
            icon={icons.calendar}
            title={"Schedule"}
            active={active}
            setActive={setActive}
            isPending={true}
          />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <header className="flex items-center w-full justify-between p-6 bg-[#0D0F10] self-start rounded-2xl">
          <div className="w-[340px] relative">
            <input
              type="text"
              placeholder="Search anything"
              className="w-full bg-[#1A1D21] p-3 rounded-xl pl-12 text-white font-normal text-base leading-6"
            />

            <Search className="text-[#6F767E] absolute top-3 ml-4" />
          </div>
          <div className="flex items-center gap-8">
            <img src={icons.message} />
            <div className="relative">
              <img src={icons.noti} />
              <span className="w-3 h-3 rounded-full bg-[#FE5A5A] absolute -top-1 -right-1"></span>
            </div>
            <img src={images.profile} className="w-12 h-12 rounded-full" />
          </div>
        </header>
        <p className="font-semibold text-4xl leading-10 text-white py-4">
          Dashboard
        </p>
        <div className="w-full bg-[#0D0F10] flex flex-col rounded-2xl">
          <div className="flex border-b border-muted-foreground">
            <div className="basis-1/3 flex flex-col">
              <div className="flex gap-3 items-center px-3 py-6 h-11">
                <img src={icons.headerCheckbox} className="w-5 h-5" />
                <div className="flex items-center gap-1">
                  <p className="text-[#667085] font-semibold text-xs leading-[18px]">
                    Project
                  </p>
                  <ArrowDown className="text-[#667085]" size={16} />
                </div>
              </div>
              <div></div>
            </div>
            <div className="basis-[13%] flex flex-col">
              <div className="flex gap-3 items-center px-3 py-6 h-11">
                <p className="text-[#667085] font-semibold text-xs leading-[18px]">
                  Last assessed
                </p>
              </div>
            </div>
            <div className="basis-1/2 flex flex-col">
              <div className="flex gap-3 items-center px-3 py-6 h-11">
                <p className="text-[#667085] font-semibold text-xs leading-[18px]">
                  License use
                </p>
              </div>
            </div>
            <div className="basis-[13%] flex flex-col">
              <div className="flex gap-3 items-center px-3 py-6 h-11"></div>
            </div>
          </div>
          {initData.map((data) => (
            <div className="flex border-b border-muted-foreground">
              <div className="basis-1/3 flex flex-col">
                <div className="h-[72px] w-full flex items-center gap-3 px-4 py-6">
                  {data.isCheck ? (
                    <img src={icons.itemChecked} className="w-5 h-5" />
                  ) : (
                    <img src={icons.itemCheckBox} className="w-5 h-5" />
                  )}
                  <img src={images.Avatar} className="w-10 h-10 rounded-full" />
                  <div className="flex flex-col ">
                    <p className="text-white text-sm leading-5 font-medium">
                      Sisyphus
                    </p>
                    <p className="text-[#6F767E] text-sm leading-5 font-normal">
                      sisyphus.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="basis-[13%] flex flex-col">
                <div className="flex gap-3 items-center px-3 py-6 h-[72px] ">
                  <p className="text-[#6F767E] font-normal text-sm leading-5 w-full ">
                    {data.lastAssessed}
                  </p>
                </div>
              </div>
              <div className="basis-1/2 flex flex-col">
                <div className="flex gap-1 items-center px-3 py-6 h-[72px]">
                  <div className="flex items-center gap-[6px] bg-[#0E5A3A] rounded-2xl py-[2px] pr-2 pl-[6px]">
                    <img src={icons.greenDot} className="w-2 h-2" />
                    <p className="text-[#46E8A5] font-medium text-xs leading-[18px] text-center">
                      Active
                    </p>
                  </div>
                  <div className="flex items-center gap-[6px] bg-[#423419] rounded-2xl py-[2px] px-2">
                    <p className="text-[#FFD666] font-medium text-xs leading-[18px] text-center">
                      Customer data
                    </p>
                  </div>
                  <div className="flex items-center gap-[6px] bg-[#422721] rounded-2xl py-[2px] px-2">
                    <p className="text-[#FFAC82] font-medium text-xs leading-[18px] text-center">
                      Admin
                    </p>
                  </div>
                </div>
              </div>
              <div className="basis-[13%] flex flex-col">
                <div className="flex gap-1 items-center px-3 py-6 h-[72px] text-[#6F767E]">
                  <button className="p-[10px]">
                    <Trash2 className="w-5 h-5" />
                  </button>
                  <button className="p-[10px]">
                    <Pen className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="flex border-b border-muted-foreground">
            <div className="basis-1/3 flex flex-col">
              <div className="flex gap-3 items-center px-3 py-6 h-11">
                <Checkbox className="w-5 h-5" />
                <div className="flex items-center gap-1">
                  <p className="text-[#667085] font-semibold text-xs leading-[18px]">
                    Project
                  </p>
                  <ArrowDown className="text-[#667085]" size={16} />
                </div>
              </div>
              <div></div>
            </div>
            <div className="basis-[13%] flex flex-col">
              <div className="flex gap-3 items-center px-3 py-6 h-11">
                <p className="text-[#667085] font-semibold text-xs leading-[18px]">
                  Last assessed
                </p>
              </div>
            </div>
            <div className="basis-1/2 flex flex-col">
              <div className="flex gap-3 items-center px-3 py-6 h-11">
                <p className="text-[#667085] font-semibold text-xs leading-[18px]">
                  License use
                </p>
              </div>
            </div>
            <div className="basis-[13%] flex flex-col">
              <div className="flex gap-3 items-center px-3 py-6 h-11"></div>
            </div>
          </div>
          <div className="flex border-b border-muted-foreground">
            <div className="basis-1/3 flex flex-col">
              <div className="h-[72px] w-full flex items-center gap-3 px-4 py-6">
                <Checkbox className="w-5 h-5" />
                <img src={images.Avatar} className="w-10 h-10 rounded-full" />
                <div className="flex flex-col ">
                  <p className="text-white text-sm leading-5 font-medium">
                    Sisyphus
                  </p>
                  <p className="text-[#6F767E] text-sm leading-5 font-normal">
                    sisyphus.com
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-[13%] flex flex-col">
              <div className="flex gap-3 items-center px-3 py-6 h-[72px] ">
                <p className="text-[#6F767E] font-normal text-sm leading-5 w-full ">
                  22 Jan 2022
                </p>
              </div>
            </div>
            <div className="basis-1/2 flex flex-col">
              <div className="flex gap-1 items-center px-3 py-6 h-[72px]">
                <div className="flex items-center gap-[6px] bg-[#0E5A3A] rounded-2xl py-[2px] pr-2 pl-[6px]">
                  <img src={icons.greenDot} className="w-2 h-2" />
                  <p className="text-[#46E8A5] font-medium text-xs leading-[18px] text-center">
                    Active
                  </p>
                </div>
                <div className="flex items-center gap-[6px] bg-[#423419] rounded-2xl py-[2px] px-2">
                  <p className="text-[#FFD666] font-medium text-xs leading-[18px] text-center">
                    Customer data
                  </p>
                </div>
                <div className="flex items-center gap-[6px] bg-[#422721] rounded-2xl py-[2px] px-2">
                  <p className="text-[#FFAC82] font-medium text-xs leading-[18px] text-center">
                    Admin
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-[13%] flex flex-col">
              <div className="flex gap-1 items-center px-3 py-6 h-[72px] text-[#6F767E]">
                <button className="p-[10px]">
                  <Trash2 className="w-5 h-5" />
                </button>
                <button className="p-[10px]">
                  <Pen className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex border-b border-muted-foreground">
            <div className="basis-1/3 flex flex-col">
              <div className="h-[72px] w-full flex items-center gap-3 px-4 py-6">
                <Checkbox className="w-5 h-5" />
                <img src={images.Avatar} className="w-10 h-10 rounded-full" />
                <div className="flex flex-col ">
                  <p className="text-white text-sm leading-5 font-medium">
                    Sisyphus
                  </p>
                  <p className="text-[#6F767E] text-sm leading-5 font-normal">
                    sisyphus.com
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-[13%] flex flex-col">
              <div className="flex gap-3 items-center px-3 py-6 h-[72px] ">
                <p className="text-[#6F767E] font-normal text-sm leading-5 w-full ">
                  20 Jan 2022
                </p>
              </div>
            </div>
            <div className="basis-1/2 flex flex-col">
              <div className="flex gap-1 items-center px-3 py-6 h-[72px]">
                <div className="flex items-center gap-[6px] bg-[#0E5A3A] rounded-2xl py-[2px] pr-2 pl-[6px]">
                  <img src={icons.greenDot} className="w-2 h-2" />
                  <p className="text-[#46E8A5] font-medium text-xs leading-[18px] text-center">
                    Active
                  </p>
                </div>
                <div className="flex items-center gap-[6px] bg-[#423419] rounded-2xl py-[2px] px-2">
                  <p className="text-[#FFD666] font-medium text-xs leading-[18px] text-center">
                    Customer data
                  </p>
                </div>
                <div className="flex items-center gap-[6px] bg-[#422721] rounded-2xl py-[2px] px-2">
                  <p className="text-[#FFAC82] font-medium text-xs leading-[18px] text-center">
                    Admin
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-[13%] flex flex-col">
              <div className="flex gap-1 items-center px-3 py-6 h-[72px] text-[#6F767E]">
                <button className="p-[10px]">
                  <Trash2 className="w-5 h-5" />
                </button>
                <button className="p-[10px]">
                  <Pen className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex border-b border-muted-foreground">
            <div className="basis-1/3 flex flex-col">
              <div className="h-[72px] w-full flex items-center gap-3 px-4 py-6">
                <Checkbox className="w-5 h-5" />
                <img src={images.Avatar} className="w-10 h-10 rounded-full" />
                <div className="flex flex-col ">
                  <p className="text-white text-sm leading-5 font-medium">
                    Sisyphus
                  </p>
                  <p className="text-[#6F767E] text-sm leading-5 font-normal">
                    sisyphus.com
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-[13%] flex flex-col">
              <div className="flex gap-3 items-center px-3 py-6 h-[72px] ">
                <p className="text-[#6F767E] font-normal text-sm leading-5 w-full ">
                  24 Jan 2022
                </p>
              </div>
            </div>
            <div className="basis-1/2 flex flex-col">
              <div className="flex gap-1 items-center px-3 py-6 h-[72px]">
                <div className="flex items-center gap-[6px] bg-[#0E5A3A] rounded-2xl py-[2px] pr-2 pl-[6px]">
                  <img src={icons.greenDot} className="w-2 h-2" />
                  <p className="text-[#46E8A5] font-medium text-xs leading-[18px] text-center">
                    Active
                  </p>
                </div>
                <div className="flex items-center gap-[6px] bg-[#423419] rounded-2xl py-[2px] px-2">
                  <p className="text-[#FFD666] font-medium text-xs leading-[18px] text-center">
                    Customer data
                  </p>
                </div>
                <div className="flex items-center gap-[6px] bg-[#422721] rounded-2xl py-[2px] px-2">
                  <p className="text-[#FFAC82] font-medium text-xs leading-[18px] text-center">
                    Admin
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-[13%] flex flex-col">
              <div className="flex gap-1 items-center px-3 py-6 h-[72px] text-[#6F767E]">
                <button className="p-[10px]">
                  <Trash2 className="w-5 h-5" />
                </button>
                <button className="p-[10px]">
                  <Pen className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex border-b border-muted-foreground">
            <div className="basis-1/3 flex flex-col">
              <div className="h-[72px] w-full flex items-center gap-3 px-4 py-6">
                <Checkbox className="w-5 h-5" />
                <img src={images.Avatar} className="w-10 h-10 rounded-full" />
                <div className="flex flex-col ">
                  <p className="text-white text-sm leading-5 font-medium">
                    Sisyphus
                  </p>
                  <p className="text-[#6F767E] text-sm leading-5 font-normal">
                    sisyphus.com
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-[13%] flex flex-col">
              <div className="flex gap-3 items-center px-3 py-6 h-[72px] ">
                <p className="text-[#6F767E] font-normal text-sm leading-5 w-full ">
                  26 Jan 2022
                </p>
              </div>
            </div>
            <div className="basis-1/2 flex flex-col">
              <div className="flex gap-1 items-center px-3 py-6 h-[72px]">
                <div className="flex items-center gap-[6px] bg-[#0E5A3A] rounded-2xl py-[2px] pr-2 pl-[6px]">
                  <img src={icons.greenDot} className="w-2 h-2" />
                  <p className="text-[#46E8A5] font-medium text-xs leading-[18px] text-center">
                    Active
                  </p>
                </div>
                <div className="flex items-center gap-[6px] bg-[#423419] rounded-2xl py-[2px] px-2">
                  <p className="text-[#FFD666] font-medium text-xs leading-[18px] text-center">
                    Customer data
                  </p>
                </div>
                <div className="flex items-center gap-[6px] bg-[#422721] rounded-2xl py-[2px] px-2">
                  <p className="text-[#FFAC82] font-medium text-xs leading-[18px] text-center">
                    Admin
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-[13%] flex flex-col">
              <div className="flex gap-1 items-center px-3 py-6 h-[72px] text-[#6F767E]">
                <button className="p-[10px]">
                  <Trash2 className="w-5 h-5" />
                </button>
                <button className="p-[10px]">
                  <Pen className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex border-b border-muted-foreground">
            <div className="basis-1/3 flex flex-col">
              <div className="h-[72px] w-full flex items-center gap-3 px-4 py-6">
                <Checkbox className="w-5 h-5" />
                <img src={images.Avatar} className="w-10 h-10 rounded-full" />
                <div className="flex flex-col ">
                  <p className="text-white text-sm leading-5 font-medium">
                    Sisyphus
                  </p>
                  <p className="text-[#6F767E] text-sm leading-5 font-normal">
                    sisyphus.com
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-[13%] flex flex-col">
              <div className="flex gap-3 items-center px-3 py-6 h-[72px] ">
                <p className="text-[#6F767E] font-normal text-sm leading-5 w-full ">
                  18 Jan 2022
                </p>
              </div>
            </div>
            <div className="basis-1/2 flex flex-col">
              <div className="flex gap-1 items-center px-3 py-6 h-[72px]">
                <div className="flex items-center gap-[6px] bg-[#0E5A3A] rounded-2xl py-[2px] pr-2 pl-[6px]">
                  <img src={icons.greenDot} className="w-2 h-2" />
                  <p className="text-[#46E8A5] font-medium text-xs leading-[18px] text-center">
                    Active
                  </p>
                </div>
                <div className="flex items-center gap-[6px] bg-[#423419] rounded-2xl py-[2px] px-2">
                  <p className="text-[#FFD666] font-medium text-xs leading-[18px] text-center">
                    Customer data
                  </p>
                </div>
                <div className="flex items-center gap-[6px] bg-[#422721] rounded-2xl py-[2px] px-2">
                  <p className="text-[#FFAC82] font-medium text-xs leading-[18px] text-center">
                    Admin
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-[13%] flex flex-col">
              <div className="flex gap-1 items-center px-3 py-6 h-[72px] text-[#6F767E]">
                <button className="p-[10px]">
                  <Trash2 className="w-5 h-5" />
                </button>
                <button className="p-[10px]">
                  <Pen className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex border-b border-muted-foreground">
            <div className="basis-1/3 flex flex-col">
              <div className="h-[72px] w-full flex items-center gap-3 px-4 py-6">
                <Checkbox className="w-5 h-5" />
                <img src={images.Avatar} className="w-10 h-10 rounded-full" />
                <div className="flex flex-col ">
                  <p className="text-white text-sm leading-5 font-medium">
                    Sisyphus
                  </p>
                  <p className="text-[#6F767E] text-sm leading-5 font-normal">
                    sisyphus.com
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-[13%] flex flex-col">
              <div className="flex gap-3 items-center px-3 py-6 h-[72px] ">
                <p className="text-[#6F767E] font-normal text-sm leading-5 w-full ">
                  28 Jan 2022
                </p>
              </div>
            </div>
            <div className="basis-1/2 flex flex-col">
              <div className="flex gap-1 items-center px-3 py-6 h-[72px]">
                <div className="flex items-center gap-[6px] bg-[#0E5A3A] rounded-2xl py-[2px] pr-2 pl-[6px]">
                  <img src={icons.greenDot} className="w-2 h-2" />
                  <p className="text-[#46E8A5] font-medium text-xs leading-[18px] text-center">
                    Active
                  </p>
                </div>
                <div className="flex items-center gap-[6px] bg-[#423419] rounded-2xl py-[2px] px-2">
                  <p className="text-[#FFD666] font-medium text-xs leading-[18px] text-center">
                    Customer data
                  </p>
                </div>
                <div className="flex items-center gap-[6px] bg-[#422721] rounded-2xl py-[2px] px-2">
                  <p className="text-[#FFAC82] font-medium text-xs leading-[18px] text-center">
                    Admin
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-[13%] flex flex-col">
              <div className="flex gap-1 items-center px-3 py-6 h-[72px] text-[#6F767E]">
                <button className="p-[10px]">
                  <Trash2 className="w-5 h-5" />
                </button>
                <button className="p-[10px]">
                  <Pen className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex border-b border-muted-foreground">
            <div className="basis-1/3 flex flex-col">
              <div className="h-[72px] w-full flex items-center gap-3 px-4 py-6">
                <Checkbox className="w-5 h-5" />
                <img src={images.Avatar} className="w-10 h-10 rounded-full" />
                <div className="flex flex-col ">
                  <p className="text-white text-sm leading-5 font-medium">
                    Sisyphus
                  </p>
                  <p className="text-[#6F767E] text-sm leading-5 font-normal">
                    sisyphus.com
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-[13%] flex flex-col">
              <div className="flex gap-3 items-center px-3 py-6 h-[72px] ">
                <p className="text-[#6F767E] font-normal text-sm leading-5 w-full ">
                  16 Jan 2022
                </p>
              </div>
            </div>
            <div className="basis-1/2 flex flex-col">
              <div className="flex gap-1 items-center px-3 py-6 h-[72px]">
                <div className="flex items-center gap-[6px] bg-[#0E5A3A] rounded-2xl py-[2px] pr-2 pl-[6px]">
                  <img src={icons.greenDot} className="w-2 h-2" />
                  <p className="text-[#46E8A5] font-medium text-xs leading-[18px] text-center">
                    Active
                  </p>
                </div>
                <div className="flex items-center gap-[6px] bg-[#423419] rounded-2xl py-[2px] px-2">
                  <p className="text-[#FFD666] font-medium text-xs leading-[18px] text-center">
                    Customer data
                  </p>
                </div>
                <div className="flex items-center gap-[6px] bg-[#422721] rounded-2xl py-[2px] px-2">
                  <p className="text-[#FFAC82] font-medium text-xs leading-[18px] text-center">
                    Admin
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-[13%] flex flex-col">
              <div className="flex gap-1 items-center px-3 py-6 h-[72px] text-[#6F767E]">
                <button className="p-[10px]">
                  <Trash2 className="w-5 h-5" />
                </button>
                <button className="p-[10px]">
                  <Pen className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex border-b border-muted-foreground">
            <div className="basis-1/3 flex flex-col">
              <div className="h-[72px] w-full flex items-center gap-3 px-4 py-6">
                <Checkbox className="w-5 h-5" />
                <img src={images.Avatar} className="w-10 h-10 rounded-full" />
                <div className="flex flex-col ">
                  <p className="text-white text-sm leading-5 font-medium">
                    Sisyphus
                  </p>
                  <p className="text-[#6F767E] text-sm leading-5 font-normal">
                    sisyphus.com
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-[13%] flex flex-col">
              <div className="flex gap-3 items-center px-3 py-6 h-[72px] ">
                <p className="text-[#6F767E] font-normal text-sm leading-5 w-full ">
                  16 Jan 2022
                </p>
              </div>
            </div>
            <div className="basis-1/2 flex flex-col">
              <div className="flex gap-1 items-center px-3 py-6 h-[72px]">
                <div className="flex items-center gap-[6px] bg-[#0E5A3A] rounded-2xl py-[2px] pr-2 pl-[6px]">
                  <img src={icons.greenDot} className="w-2 h-2" />
                  <p className="text-[#46E8A5] font-medium text-xs leading-[18px] text-center">
                    Active
                  </p>
                </div>
                <div className="flex items-center gap-[6px] bg-[#423419] rounded-2xl py-[2px] px-2">
                  <p className="text-[#FFD666] font-medium text-xs leading-[18px] text-center">
                    Customer data
                  </p>
                </div>
                <div className="flex items-center gap-[6px] bg-[#422721] rounded-2xl py-[2px] px-2">
                  <p className="text-[#FFAC82] font-medium text-xs leading-[18px] text-center">
                    Admin
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-[13%] flex flex-col">
              <div className="flex gap-1 items-center px-3 py-6 h-[72px] text-[#6F767E]">
                <button className="p-[10px]">
                  <Trash2 className="w-5 h-5" />
                </button>
                <button className="p-[10px]">
                  <Pen className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex border-b border-muted-foreground">
            <div className="basis-1/3 flex flex-col">
              <div className="h-[72px] w-full flex items-center gap-3 px-4 py-6">
                <Checkbox className="w-5 h-5" />
                <img src={images.Avatar} className="w-10 h-10 rounded-full" />
                <div className="flex flex-col ">
                  <p className="text-white text-sm leading-5 font-medium">
                    Sisyphus
                  </p>
                  <p className="text-[#6F767E] text-sm leading-5 font-normal">
                    sisyphus.com
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-[13%] flex flex-col">
              <div className="flex gap-3 items-center px-3 py-6 h-[72px] ">
                <p className="text-[#6F767E] font-normal text-sm leading-5 w-full ">
                  16 Jan 2022
                </p>
              </div>
            </div>
            <div className="basis-1/2 flex flex-col">
              <div className="flex gap-1 items-center px-3 py-6 h-[72px]">
                <div className="flex items-center gap-[6px] bg-[#0E5A3A] rounded-2xl py-[2px] pr-2 pl-[6px]">
                  <img src={icons.greenDot} className="w-2 h-2" />
                  <p className="text-[#46E8A5] font-medium text-xs leading-[18px] text-center">
                    Active
                  </p>
                </div>
                <div className="flex items-center gap-[6px] bg-[#423419] rounded-2xl py-[2px] px-2">
                  <p className="text-[#FFD666] font-medium text-xs leading-[18px] text-center">
                    Customer data
                  </p>
                </div>
                <div className="flex items-center gap-[6px] bg-[#422721] rounded-2xl py-[2px] px-2">
                  <p className="text-[#FFAC82] font-medium text-xs leading-[18px] text-center">
                    Admin
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-[13%] flex flex-col">
              <div className="flex gap-1 items-center px-3 py-6 h-[72px] text-[#6F767E]">
                <button className="p-[10px]">
                  <Trash2 className="w-5 h-5" />
                </button>
                <button className="p-[10px]">
                  <Pen className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div> */}
          <div className="flex items-center justify-between px-6 pt-[11px] pb-4">
            <button className="text-sm leading-5 font-medium py-2 px-[14px] bg-[#131619] border border-[#282828] text-white rounded-lg">
              Previous
            </button>
            <p className="text-[#6F767E] text-sm font-medium leading-5">
              Page 1 of 10
            </p>
            <button className="text-sm leading-5 font-medium py-2 px-[14px] bg-[#131619] border border-[#282828] text-white rounded-lg">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
