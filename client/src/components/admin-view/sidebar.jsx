import {
  BadgeCheck,
  Box,
  ChartNoAxesCombined,
  LayoutDashboard,
} from "lucide-react";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { IoBagCheckOutline } from "react-icons/io5";

const adminSidebarMenuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/products",
    icon: <LayoutDashboard />,
  },
  {
    id: "products",
    label: "Products",
    path: "/admin/products",
    icon: <Box />,
  },
  {
    id: "orders",
    label: "Orders",
    path: "/admin/products",
    icon: <IoBagCheckOutline size={24} />,
  },
];

function MenuItems({ setOpen }) {
  const navigate = useNavigate();
  const path = useLocation();
  const [active, setActive] = useState(
    path.pathname.split("/")[2] || "dashboard"
  );
  return (
    <nav className="mt-8 flex-col flex gap-4">
      {adminSidebarMenuItems.map((menuItem) => (
        <div
          key={menuItem.id}
          onClick={() => {
            setOpen ? setOpen(false) : null;
          }}
          className={`flex ${
            active === menuItem.label.toLowerCase()
              ? "bg-black text-white select-none cursor-pointer"
              : "cursor-not-allowed"
          } text-base font-semibold items-center gap-4 rounded-md px-3 py-2 text-muted-foreground `}
        >
          {menuItem.icon}
          <span>{menuItem.label}</span>
        </div>
      ))}
    </nav>
  );
}
function Sidebar({ open, setOpen }) {
  const navigate = useNavigate();
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-64">
          <div className="flex flex-col h-full">
            <SheetHeader className="border-b">
              <SheetTitle className="flex gap-2 mt-5 mb-5">
                <ChartNoAxesCombined size={30} />
                <h1 className="text-2xl font-extrabold">Admin Panel</h1>
              </SheetTitle>
            </SheetHeader>
            <MenuItems setOpen={setOpen} />
          </div>
        </SheetContent>
      </Sheet>
      <aside className="hidden w-64 flex-col border-r bg-background p-6 lg:flex">
        <div
          onClick={() => navigate("/admin/products")}
          className="flex cursor-pointer items-center justify-center"
        >
          <h1 className="text-2xl font-extrabold">Admin Panel</h1>
        </div>
        <MenuItems />
      </aside>
    </>
  );
}

export default Sidebar;
