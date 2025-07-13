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
                <DropdownMenuItem onClick={() => handleMenuClick("/")}>Home</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleMenuClick("/about")}>About</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleMenuClick("/agencies")}>Agencies</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleMenuClick("/cases")}>Cases</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleMenuClick("/tags")}>Tags</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleMenuClick("/tos")}>TOS</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleMenuClick("/submit")}>Submit</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}