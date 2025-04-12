import BreadcrumbHeader from "@/components/breadcrumb-header";
import DesktopSidebar from "@/components/Sidebar";
import { ThemeModeToogle } from "@/components/theme-mode-toggle";
import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <DesktopSidebar />
      <div className="flex flex-col flex-1 min-h-screen">
        <header className="flex items-center justify-between px-6 py-4 h-[50px] container">
          <BreadcrumbHeader />
          <div className="gap-1 flex items-center">
            <ThemeModeToogle />
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>

        <hr />

        <div className="overflow-auto">
          <div className="flex-1 container py-4 text-accent-foreground">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout;