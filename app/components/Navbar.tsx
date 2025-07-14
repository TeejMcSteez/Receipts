"use client";



import { DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";


export default function Navbar() {
    const router = useRouter();
    const handleMenuClick = (url: string) => {
        router.push(url);
    };

    return(
        <div className="m-2 p-1">
            <DropdownMenu>
            <DropdownMenuTrigger><Button variant={'ghost'} className="text-xl ">Menu</Button></DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={() => handleMenuClick("/")}>Home</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleMenuClick("/about")}>About</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleMenuClick("/agencies")}>Agencies</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleMenuClick("/cases")}>Cases</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleMenuClick("/tags")}>Tags</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleMenuClick("/tos")}>TOS</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => handleMenuClick("/submit")}>Submit</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}