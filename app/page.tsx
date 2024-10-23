"use client";

import {
  BadgeCheck,
  Bell,
  BookmarkMinus,
  Calendar,
  ChartNoAxesColumn,
  ChevronDown,
  CreditCard,
  House,
  Kanban,
  LifeBuoy,
  LogOut,
  Mail,
  MessagesSquare,
  Settings,
  Sparkles,
  User,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Search } from "@/components/ui/search";
import CalendarComponent from "@/components/calendar-card";

const data = {
  user: {
    name: "Jhone Doe",
    avatar: "/images/avatar.png",
  },
  navMain: [
    {
      title: "Home",
      url: "#",
      icon: House,
    },
    {
      title: "Dashboard",
      url: "#",
      icon: ChartNoAxesColumn,
    },
    {
      title: "Inbox",
      url: "#",
      icon: Mail,
    },
    {
      title: "Products",
      url: "#",
      icon: Kanban,
    },
    {
      title: "Invoices",
      url: "#",
      icon: BookmarkMinus,
    },
    {
      title: "Customers",
      url: "#",
      icon: User,
    },
    {
      title: "Chat Room",
      url: "#",
      icon: MessagesSquare,
    },
    {
      title: "Calendar",
      url: "#",
      icon: Calendar,
      isSelect: true,
    },
    {
      title: "Help Center",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
    },
  ],
};

export default function Page() {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" className="bg">
        <SidebarContent className="bg-[#3D3B53] text-white">
          <SidebarGroup className="p-0">
            <SidebarHeader className="h-[70px] bg-[#43425D] p-0 pl-3">
              <div className="my-auto ml-4">
                <h1 className="text-base font-bold text-white group-data-[collapsible=icon]:hidden">
                  IMPEKABLE
                </h1>
              </div>
            </SidebarHeader>

            <SidebarMenu className="mt-2">
              {data.navMain.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    tooltip={item.title}
                    className={cn(
                      "hover:bg-[#43425D] hover:text-white rounded-none w-full p-7 active:bg-white/5 active:text-white",
                      item.isSelect &&
                        "border-l-[4px] border-[#A3A0FB] bg-[#43425D] hover:none active:bg-[#43425D] active:text-white"
                    )}
                  >
                    {item.icon && (
                      <item.icon
                        strokeWidth={2.5}
                        className=" text-[#A5A4BF]"
                      />
                    )}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="flex h-[69px] shadow-lg items-center shrink-0 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex gap-2 px-2 justify-between w-full  bg-white">
            <div className="flex items-center">
              <SidebarTrigger className="-ml-1 text-gray-400 hover:text-gray-600" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Search
                className="h-min  border-none w-80 text-gray-400 "
                placeholder="Search transactions, invoices or help"
              ></Search>
            </div>

            <div className="flex items-center">
              <Separator orientation="vertical" className="mr-2 h-6" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="w-auto text-gray-700">
                  <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                  >
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-medium text-gray-700">
                        {data.user.name}
                      </span>
                    </div>

                    <ChevronDown className="ml-auto size-4" strokeWidth={2} />
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage
                        src={data.user.avatar}
                        alt={data.user.name}
                      />
                      <AvatarFallback className="rounded-lg">JD</AvatarFallback>
                    </Avatar>
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                  side="bottom"
                  align="end"
                  sideOffset={4}
                >
                  <DropdownMenuLabel className="p-0 font-normal">
                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                      <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage
                          src={data.user.avatar}
                          alt={data.user.name}
                        />
                        <AvatarFallback className="rounded-lg">
                          JD
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">
                          {data.user.name}
                        </span>
                      </div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Sparkles />
                      Upgrade to Pro
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <BadgeCheck />
                      Account
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCard />
                      Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Bell />
                      Notifications
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-8 pl-20 bg-[#F0F0F7]">
          <h2 className="text-[#43425D] text-3xl">Calendar</h2>
          <CalendarComponent />

          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
