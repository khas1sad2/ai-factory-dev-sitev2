// This file likely contains a sidebar or navigation component.
// The content below is an illustrative example, focusing on the fix.
// Your actual file content may vary, but the change will be on line 8 (or similar).

import { PanelLeftIcon } from "lucide-react";

// FIX: Changed 'useIsMobile' to 'useMobile' to match the exported name from the hook.
import { useMobile } from "@/hooks/use-mobile";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// ... other imports

interface SidebarProps {
  // Define any props for your Sidebar component here
}

export function Sidebar({}: SidebarProps) {
  // FIX: Use the correctly imported hook name 'useMobile'
  const isMobile = useMobile();

  return (
    <aside className={cn(
      "flex flex-col h-full border-r border-border bg-background transition-all duration-300",
      isMobile ? "w-full max-w-xs" : "w-64" // Example responsive styling
    )}>
      <div className="flex items-center justify-between p-4 border-b border-border">
        <h2 className="text-lg font-semibold">Sidebar</h2>
        {isMobile && (
          <Button variant="ghost" size="icon" aria-label="Toggle sidebar">
            <PanelLeftIcon className="h-5 w-5" />
          </Button>
        )}
      </div>
      <div className="p-4">
        <Input placeholder="Search..." className="w-full" />
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {/* Example Navigation Links */}
        <Button variant="ghost" className="w-full justify-start">
          Dashboard
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          Settings
        </Button>
        <Button variant="ghost" className="w-full justify-start">
          Users
        </Button>
      </nav>
      {/* ... other sidebar content */}
    </aside>
  );
}