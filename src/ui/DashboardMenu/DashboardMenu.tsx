"use client";
import { Button } from "@/components/ui/button";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { AiFillProduct } from "react-icons/ai";
import { FaCloudUploadAlt, FaProductHunt } from "react-icons/fa";

import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import Link from "next/link";
import { BiOutline } from "react-icons/bi";
import { FaLink, FaServicestack } from "react-icons/fa6";
import {
  MdContactMail,
  MdDashboard,
  MdLogout,
  MdManageAccounts,
} from "react-icons/md";
import { SiHyperskill } from "react-icons/si";

const DashboardMenu = () => {
  const { user, getPermissions } = useKindeBrowserClient();
  const { permissions } = getPermissions();
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5px-3 py-2 text-sm font-semibold text-gray-900  ">
          <div className="">
            <Image
              width={100}
              height={100}
              src={
                user?.picture ||
                "https://lh3.googleusercontent.com/a/ACg8ocKqL8Ir2kCtsbnP4tmTbIhYr8YxfVGfXpgUK0dkpUOoDsiSUjM_=s96-c"
              }
              alt="user"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-slate-100 dark:bg-slate-900 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          {permissions?.includes("create:post") && (
            <>
              <MenuItem>
                <span className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-slate-200 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden border-b mb-1 dark:border-slate-100/20 border-slate-800/10">
                  <MdManageAccounts className="mr-1 text-lg" /> My Account
                </span>
              </MenuItem>
              <MenuItem>
                <Link
                  href="/dashboard"
                  className="px-4 py-2 text-sm flex items-center text-gray-700 dark:hover:bg-slate-800 hover:bg-slate-200 dark:text-slate-200 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  <MdDashboard className="mr-1 text-lg" /> Dashboard
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="/dashboard/projects"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 dark:hover:bg-slate-800 hover:bg-slate-200 dark:text-slate-200 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  <FaProductHunt className="mr-1 text-lg" />
                  My Projects
                </Link>
              </MenuItem>

              <MenuItem>
                <Link
                  href="/dashboard/projects/add"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 dark:hover:bg-slate-800 hover:bg-slate-200 dark:text-slate-200 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  <AiFillProduct className="mr-1 text-lg" /> Add Projects
                </Link>
              </MenuItem>

              {/* latter */}
              <MenuItem>
                <Link
                  href="/dashboard/projects/add"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 dark:hover:bg-slate-800 hover:bg-slate-200 dark:text-slate-200 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  <MdContactMail className="mr-1 text-lg" /> Contacts
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="/dashboard/projects/add"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 dark:hover:bg-slate-800 hover:bg-slate-200 dark:text-slate-200 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  <SiHyperskill className="mr-1 text-lg" /> Add Skill
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="/dashboard/projects/add"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 dark:hover:bg-slate-800 hover:bg-slate-200 dark:text-slate-200 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  <FaServicestack className="mr-1 text-lg" /> Add Service
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="/dashboard/projects/add"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 dark:hover:bg-slate-800 hover:bg-slate-200 dark:text-slate-200 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  <BiOutline className="mr-1 text-lg" /> Change Bio
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="/dashboard/projects/add"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 dark:hover:bg-slate-800 hover:bg-slate-200 dark:text-slate-200 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  <FaLink className="mr-1 text-lg" /> Resume URL
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  href="/dashboard/projects/add"
                  className="flex items-center px-4 py-2 text-sm text-gray-700 dark:hover:bg-slate-800 hover:bg-slate-200 dark:text-slate-200 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                >
                  <FaCloudUploadAlt className="mr-1 text-lg" /> Generate Image
                </Link>
              </MenuItem>
            </>
          )}

          {/* logout */}
          <MenuItems className="w-full px-2 my-1">
            <LogoutLink>
              <Button className="w-full" variant={"destructive"}>
                <MdLogout className="mr-2 text-xl" />
                Sign Out
              </Button>
            </LogoutLink>
          </MenuItems>
        </div>
      </MenuItems>
    </Menu>
  );
};

export default DashboardMenu;
