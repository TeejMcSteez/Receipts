import { Input } from "@/components/ui/input";
import { useState } from "react"
import { getFuzzySearch } from "@/lib/db";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { toast } from "sonner";

type FuzzyResult = {
    source: string;
    id: string;
    title: string;
    summary: string | null;
    score: number;
}

export default function Search() {
    const [q, setQ] = useState("");
    const [results, setResults] = useState<FuzzyResult[]>([]);

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Searching for: ", q);
        // Fetch/filter logic
        const search = await getFuzzySearch({ text: q });
        console.log(search);
        if (!search.length) {
            toast("Nothing Found!");
        } else {
            setResults(search);
        }
    }

    return (
        <div>
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
            {results.length > 0 && (
            <div className="mt-4 space-y-2">
                {results.map((r) => (
                <Card key={r.id}>
                    <CardContent className="p-4 space-y-1">
                    <Link href={`/submission/${r.id}`}>
                        <h3 className="text-lg font-semibold hover:underline">{r.title}</h3>
                    </Link>
                    {r.summary && (
                        <p className="text-sm text-muted-foreground">{r.summary}</p>
                    )}
                    <p className="text-xs text-gray-500">From: {r.source}</p>
                    </CardContent>
                </Card>
                ))}
            </div>
            )}


        </div>
    );
}