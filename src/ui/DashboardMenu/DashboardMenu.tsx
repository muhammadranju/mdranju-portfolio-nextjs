"use client";
import { Button } from "@/components/ui/button";
import { AiFillProduct } from "react-icons/ai";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  FaCloudUploadAlt,
  FaProductHunt,
  FaServicestack,
} from "react-icons/fa";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import Link from "next/link";
import { forwardRef, ReactNode } from "react";
import { BiOutline } from "react-icons/bi";
import { FaLink } from "react-icons/fa6";
import {
  MdContactMail,
  MdDashboard,
  MdLogout,
  MdManageAccounts,
} from "react-icons/md";
import { SiHyperskill } from "react-icons/si";
interface NavLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}
interface MenuLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const NavLinks: NavLink[] = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: MdDashboard,
  },
  {
    name: "Projects",
    href: "/dashboard/projects",
    icon: FaProductHunt,
  },
  {
    name: "Add Projects",
    href: "/dashboard/projects/add",
    icon: AiFillProduct,
  },
  {
    name: "Add Skill",
    href: "/dashboard/add-skills",
    icon: SiHyperskill,
  },
  {
    name: "Add Service",
    href: "/dashboard/add-service",
    icon: FaServicestack,
  },

  {
    name: "contacts",
    href: "/dashboard/contacts",
    icon: BiOutline,
  },
  {
    name: "Change Bio",
    href: "/dashboard/change-bio",
    icon: BiOutline,
  },
  {
    name: "Resume URL",
    href: "/dashboard/resume-url",
    icon: FaLink,
  },
  {
    name: "Generate Image",
    href: "/dashboard/generate-image",
    icon: FaCloudUploadAlt,
  },
];

const MenuLink = forwardRef<HTMLAnchorElement, MenuLinkProps>(
  ({ href, children, className, ...rest }, ref) => {
    return (
      <Link href={href} passHref legacyBehavior>
        <a ref={ref} className={className} {...rest}>
          {children}
        </a>
      </Link>
    );
  }
);

MenuLink.displayName = "MenuLink";

const DashboardMenu = () => {
  const { user, getPermissions } = useKindeBrowserClient();
  const permissions = getPermissions?.()?.permissions ?? [];

  // Helper function to get display name from nav link name
  const getDisplayName = (linkName: string) => {
    const nameMap: Record<string, string> = {
      dashboard: "Dashboard",
      projects: "My Projects",
      "add project": "Add Projects",
      "add skill": "Add Skill",
      "add service": "Add Service",
      contacts: "Contacts",
      "resume url": "Resume",
      "generate image": "Generate Image",
      "change bio": "Change Bio",
    };
    return nameMap[linkName.toLowerCase()] || linkName;
  };

  // Helper function to get icon from nav link name (for any missing icons)
  const getIcon = (
    linkName: string,
    IconComp?: React.ComponentType<{ className?: string }>
  ): React.ReactNode => {
    const iconMap: Record<
      string,
      React.ComponentType<{ className?: string }>
    > = {
      dashboard: MdDashboard,
      projects: FaProductHunt,
      skills: SiHyperskill,
      contact: MdContactMail,
      resume: FaLink,
      "generate image": FaCloudUploadAlt,
      // Add more as needed, e.g., for services: FaServicestack, bio: BiOutline
    };
    const IconComponent = iconMap[linkName.toLowerCase()] || IconComp;
    if (!IconComponent) return null;
    return <IconComponent className="mr-1 text-lg" />;
  };

  return (
    <Menu as="div" className="relative inline-block text-left z-50">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900">
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
        className="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-slate-100 dark:bg-slate-900 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          {permissions?.includes("create:post") && (
            <>
              <MenuItem>
                <span className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-slate-200 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden border-b mb-1 dark:border-slate-100/20 border-slate-800/10">
                  <MdManageAccounts className="mr-1 text-lg" /> My Account
                </span>
              </MenuItem>
              {/* Dynamically mapped nav links */}
              {NavLinks.map((link) => (
                <MenuItem key={link.name}>
                  <MenuLink
                    href={link.href}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 dark:hover:bg-slate-800 hover:bg-slate-200 dark:text-slate-200 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    {getIcon(link.name, link.icon)}
                    {getDisplayName(link.name)}
                  </MenuLink>
                </MenuItem>
              ))}
            </>
          )}

          {/* logout */}
          <MenuItem>
            <LogoutLink>
              <Button className="w-full" variant={"destructive"}>
                <MdLogout className="mr-2 text-xl" />
                Sign Out
              </Button>
            </LogoutLink>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};

export default DashboardMenu;
