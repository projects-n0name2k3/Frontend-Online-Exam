import { Checkbox } from "@/components/ui/checkbox";
import { Mail } from "lucide-react";
import React from "react";

function SignIn() {
  return (
    <div className="max-w-[1440px] w-full h-screen grid grid-cols-2 overflow-hidden mx-auto font-jakata">
      <div className="col-span-1 bg-[#131619] grid place-items-center">
        <div className="h-[960px] w-[496px] flex flex-col items-center justify-center gap-16">
          <div className="w-full flex flex-col gap-6">
            <p>
              <span className="text-white font-normal text-4xl leading-[44px]">
                Hello,{" "}
              </span>

              <h1 className="font-bold text-4xl leading-[44px]  bg-gradient-to-tr from-[#4D62E5] via-[#87D3EE] to-[#B6F09C] text-transparent bg-clip-text inline-block">
                Digital Fortress
              </h1>
            </p>
            <span className="font-medium text-lg leading-7 tracking-[0.15px] text-[#6F767E] ">
              Log in to platform to start creating magic.
            </span>
          </div>
          <form className="w-full flex flex-col gap-12">
            <div className="flex flex-col gap-6  w-full">
              <div className="w-full relative">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-[#1A1D21] px-2 py-4 rounded-xl pl-12 text-white font-medium text-base leading-6 tracking-[0.15px] focus:outline focus:ring focus:border-[#84dcf5]/24"
                />
                <Mail className="absolute top-4 text-[#686B6E] ml-4" />
              </div>
              <div className="w-full relative">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-[#1A1D21] px-2 py-4 rounded-xl pl-12 text-white font-medium text-base leading-6 tracking-[0.15px] focus:outline focus:ring focus:border-[#84dcf5]/24"
                />

                <img
                  src={
                    "https://res.cloudinary.com/dnqfjopsy/image/upload/v1726116168/rbmfko3zka6vkrkatbsq.png"
                  }
                  className="w-5 h-w-5 text-[#686B6E] absolute top-4 ml-4"
                />
              </div>
            </div>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4 ">
                <Checkbox
                  className="border border-[#363A3D] w-4 h-4"
                  id="remember"
                  name="remember"
                />
                <label
                  htmlFor="remember"
                  className="text-[#CDCECF] font-medium text-base leading-6 tracking-[0.15px]"
                >
                  Remember me
                </label>
              </div>
              <span className=" cursor-pointer font-semibold text-base leading-6 tracking-[0.15px] bg-gradient-to-r from-[#82DBF7]  to-[#B6F09C] text-transparent bg-clip-text inline-block">
                Forgot Password?
              </span>
            </div>
            <button className="w-full bg-[#B6F09C] px-2 py-6 rounded-lg font-semibold text-base leading-6 tracking-[0.15px]">
              Log in
            </button>
            <div className="flex items-center justify-center gap-2">
              <span className="text-base font-semibold leading-6 tracking-[0.15px] text-[#6F767E]">
                Don’t have an account?
              </span>
              <span className=" cursor-pointer font-semibold text-base leading-6 tracking-[0.15px] bg-gradient-to-r from-[#82DBF7]  to-[#B6F09C] text-transparent bg-clip-text inline-block">
                Sign Up
              </span>
            </div>
          </form>
        </div>
      </div>
      <div className="col-span-1 relative">
        <img
          src={
            "https://res.cloudinary.com/dnqfjopsy/image/upload/v1726116482/mx8adrhrmcwdxjcs0hho.png"
          }
          alt=""
          className="w-[1000px] object-cover absolute z-0"
        />
        <div className="absolute z-10 bottom-10 w-[608px] flex flex-col px-10 gap-4">
          <span className="text-[32px] font-semibold text-white leading-10">
            Digital Fortress has been a game-changer for our content creation
            process.
          </span>
          <span className="text-[32px] font-semibold text-white leading-10">
            The AI-powered tools are incredibly user-friendly and have saved us
            countless hours of work.
          </span>
          <div className="flex flex-col">
            <span className="text-[20px] font-semibold leading-8 text-white">
              Lily Alisson
            </span>
            <span className="font-medium text-[#B6F09C] text-sm tracking-[0.15px] leading-5">
              CMO at Digital Fortress
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
