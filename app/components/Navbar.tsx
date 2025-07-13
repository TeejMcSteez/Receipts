"use client";


import { DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem } from "@/components/ui/dropdown-menu";

export default function Navbar() {
    const handleMenuClick = (text: string) => {
        const id = text.toLowerCase();
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return(
        <div className="m-2 p-1">
            <DropdownMenu>
            <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={() => handleMenuClick("Search")}>Search</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}