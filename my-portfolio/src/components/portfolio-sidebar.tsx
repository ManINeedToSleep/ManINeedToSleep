"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { BookOpen, Code, Home, Mail, Menu, Shield, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export function PortfolioSidebar() {
  const pathname = usePathname()
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  const menuItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "Projects", path: "/projects", icon: Code },
    { name: "About", path: "/about", icon: User },
    { name: "Skills", path: "/skills", icon: Shield },
    { name: "Contact", path: "/contact", icon: Mail },
    { name: "Lore", path: "/lore", icon: BookOpen },
  ]

  const isActive = (path: string) => pathname === path

  return (
    <Sidebar variant="floating" collapsible="icon" className="border-r border-amber-800/30">
      <SidebarHeader className="flex items-center justify-center py-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400 to-amber-700"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-black font-serif font-bold">D</div>
          </div>
          <span className="font-serif text-lg text-amber-200">Developer</span>
        </Link>
        <SidebarTrigger className="ml-auto text-amber-400 hover:text-amber-300">
          <Menu />
        </SidebarTrigger>
      </SidebarHeader>

      <SidebarContent className="py-4">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.path}>
              <Link href={item.path} passHref legacyBehavior>
                <SidebarMenuButton
                  asChild
                  isActive={isActive(item.path)}
                  tooltip={item.name}
                  className={cn(
                    "relative overflow-visible",
                    isActive(item.path) ? "text-amber-200" : "text-amber-400/70 hover:text-amber-300",
                  )}
                  onMouseEnter={() => setHoveredItem(item.path)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <a>
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>

                    {/* Animated rune effect when hovered */}
                    {hoveredItem === item.path && (
                      <motion.div
                        className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-amber-400/30"
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        exit={{ opacity: 0, scaleY: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </a>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="py-4 px-2">
        <div className="text-center text-xs text-amber-400/50 font-serif">
          <p>Forged in the Digital Realm</p>
          <p className="mt-1">{new Date().getFullYear()}</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
