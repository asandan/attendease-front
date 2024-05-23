import { LINKS, ACCESS_TYPES } from "@/shared/util";
import { LogOut, Settings } from "lucide-react";
import Link from "next/link";
import { useLogout } from "../../shared/hooks";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { useToast } from "../ui/use-toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export const NavBar = (props: any) => {
  const logOut = useLogout();
  const { toast } = useToast();
  const { pathname } = useRouter();
  const session = useSession() as any;

  const userRole =
    ACCESS_TYPES[session?.data?.user?.role as keyof typeof ACCESS_TYPES];

  const handleLogOut = () => {
    logOut();
    toast({
      title: "Signing out...",
      description: "You have been signed out.",
      variant: "positive",
    });
  };

  return (
    <div className="w-[56px] h-[100vh]">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r border-[#1c1c1c] bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
          <button
            onClick={handleLogOut}
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-black text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <LogOut color="#fff" size="16px" />
            <span className="sr-only">Sign Out</span>
          </button>
          {LINKS.map(({ accessType, url, icon, title }) => {
            const isActive = pathname === url;

            return userRole === accessType ||
              accessType === ACCESS_TYPES.ALL ? (
              <Tooltip key={url}>
                <TooltipTrigger asChild>
                  <Link
                    href={url}
                    className={`flex h-9 w-9 items-center p-[5px] justify-center rounded-lg ${
                      isActive && "bg-[#2f2f33]"
                    } text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8`}
                  >
                    {icon}
                    <span className="sr-only">{title}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">{title}</TooltipContent>
              </Tooltip>
            ) : (
              <></>
            );
          })}
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </nav>
      </aside>
    </div>
  );
};
