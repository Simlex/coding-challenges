"use client"

import type React from "react"
import Image from "next/image"
import {
  LayoutDashboard,
  Building2,
  Users,
  User,
  CreditCard,
  FileText,
  Package,
  List,
  Shield,
  History,
  Settings,
  LogOut,
  Home,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import images from "@/public/images"

interface SidebarItemProps {
  icon: React.ReactNode
  label: string
  active?: boolean
}

function SidebarItem({ icon, label, active }: SidebarItemProps) {
  return (
    <Button
      variant="ghost"
      className={cn("w-full justify-start gap-2 pl-4", active ? "bg-slate-200/50 font-medium" : "font-normal")}
    >
      {icon}
      <span>{label}</span>
    </Button>
  )
}

export default function Sidebar() {
  return (
    <div className="w-56 bg-white border-r flex flex-col h-full">
      <div className="p-4 border-b">
        <div className="flex items-center gap-2">
          <div className="relative h-10 w-[60%] flex flex-col justify-items-start">
            <Image src={images.lapo} alt="LAPO Logo" fill className="object-contain" />
          </div>
        </div>
      </div>

      <div className="flex-1 py-4 overflow-auto hideScrollbar">
        <div className="px-3 mb-5">
          <SidebarItem icon={<Home size={18} />} label="Dashboard" active />
        </div>

        <div className="px-3 mb-2">
          <p className="text-[10px] font-medium text-muted-foreground mb-2 px-4">MAIN MENU</p>
          <div className="space-y-1">
            <SidebarItem icon={<Building2 size={18} />} label="Branches" />
            <SidebarItem icon={<Users size={18} />} label="Roles" />
            <SidebarItem icon={<User size={18} />} label="Users" />
            <SidebarItem icon={<CreditCard size={18} />} label="Card Scheme" />
            <SidebarItem icon={<CreditCard size={18} className="-rotate-45" />} label="Card Profile" />
            <SidebarItem icon={<FileText size={18} />} label="Card Request" />
            <SidebarItem icon={<Package size={18} />} label="Stock" />
            <SidebarItem icon={<CreditCard size={18} />} label="Cards" />
            <SidebarItem icon={<List size={18} />} label="Authorization List" />
            <SidebarItem icon={<Shield size={18} />} label="Authorization Queue" />
            <SidebarItem icon={<History size={18} />} label="Trail" />
            <SidebarItem icon={<Settings size={18} />} label="Account" />
          </div>
        </div>
      </div>

      <div className="p-4 border-t">
        <Button variant="ghost" className="w-full justify-start gap-2 text-red-500">
          <LogOut size={18} />
          <span>Logout</span>
        </Button>
        <div className="mt-4 flex items-center justify-items-start">
          <p className="text-[10px] text-muted-foreground">POWERED BY</p>
        </div>
        <div className="flex justify-items-start mt-2">
          <div className="relative h-12 w-[50%]">
            <Image src={images.card_infra} alt="Cardintra Logo" fill className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  )
}
