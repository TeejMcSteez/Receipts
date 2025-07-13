import { Input } from "@/components/ui/input";
import { useState } from "react"


export default function Search() {
    const [q, setQ] = useState("");

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Searching for: ", q);
        // Fetch/filter logic
    }

    return (
        <form onSubmit={handleSearch} className="flex items-center gap-2">
        <Input
            type="text"
            placeholder="Search..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="max-w-sm"
        />
        <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-neutral-800 transition"
        >
            Go
        </button>
        </form>
    );
}