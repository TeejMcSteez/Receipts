import getCase from "@/lib/db"
import { notFound } from "next/navigation";

export default async function Case({ id }: { id: string }) {
    const data = await getCase({ id });
    
    if (!data) return notFound();

    return(
        <div className="text-center space-y-6">
            <header className="space-y-4">
                <h1 className="text-2xl font-bold">{data.title}</h1>
            </header>
            <section>
                <p className="prose dark:prose-invert">{data.summary}</p>
            </section>
            <section>
                <p className="italic text-muted-foreground">{data.opinion}</p>
            </section>
        </div>
    );
}