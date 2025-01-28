"use client";
import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import Link from "next/link";
// import { ChevronDownIcon } from '@heroicons/react/20/solid'

const DashboardMenu = () => {
  const { user } = useKindeBrowserClient();
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
          {/* <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" /> */}
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md dark:bg-slate-900 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <span className="block px-4 py-2 text-sm text-gray-700 dark:text-slate-200 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden border-b mb-1 border-slate-100/20">
              My Account
            </span>
          </MenuItem>
          <MenuItem>
            <Link
              href="/dashboard"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-800 dark:text-slate-200 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Dashboard
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              href="/dashboard/projects"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-800 dark:text-slate-200 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Projects
            </Link>
          </MenuItem>

          <MenuItem>
            <Link
              href="/dashboard/projects/add"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-800 dark:text-slate-200 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Add Projects
            </Link>
          </MenuItem>
          <MenuItems className="w-full px-2 my-1">
            <LogoutLink>
              <Button className="w-full" variant={"destructive"}>
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
