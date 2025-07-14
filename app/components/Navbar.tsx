"use client";

import { DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";

/**
 * Returns Navbar with dropdown to all links and menu button
 * @returns JSX.Element
 */
export default function Navbar() {
    const router = useRouter();
    const handleMenuClick = (url: string) => {
        router.push(url);
    };
    /**
     * Returns basic menu hamburger button using spans
     * @returns JSX.Element
     */
    const MenuButton = () => {
        return (
            <a className="flex space-y-1 flex-col text-center rounded hover:bg-gray-100 p-2">
                <span className="bg-gray-600 rounded block h-1 w-5"></span>
                <span className="bg-gray-600 rounded block h-1 w-5"></span>
                <span className="bg-gray-600 rounded block h-1 w-5"></span>
            </a>
        );
    }

    return(
        <div className="flex place-content-end items-end m-2 p-1">
            <DropdownMenu>
            <DropdownMenuTrigger>{MenuButton()}</DropdownMenuTrigger>
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