"use client";



import { DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";


export default function Navbar() {
    const router = useRouter();
    const handleMenuClick = (url: string) => {
        router.push(url);
    };

    return(
        <div className="m-2 p-1">
            <DropdownMenu>
            <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={() => handleMenuClick("/search")}>Search</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}