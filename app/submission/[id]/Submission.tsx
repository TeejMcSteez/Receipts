import { getReceipt } from "@/lib/db";
import { notFound } from "next/navigation";

export default async function Submission({ id }: { id: string }) {
    const data = await getReceipt({caseId: id});

    if (!data) return notFound();

    return(
        <div className="mx-auto space-y-6 text-center">
            <header className="space-y-4">
                <h1 className="text-4xl font-bold">{data.title}</h1>
                <p className="text-muted-foreground">{data.summary}</p>
            </header>
            <section>
                <h2 className="text-2xl font-semibold mb-2">Quotes</h2>
                <article className="prose dark:prose-invert">{data.quotes}</article>
            </section>
            <section>
                <h2 className="text-2xl font-semibold mb-2">Sources</h2>
                <p className="break-words">{data.sources}</p>
            </section>
            <section>
                <h2 className="text-2xl font-semibold mb-2">Personal Opinion</h2>
                <p className="italic">{data.opinion}</p>
            </section>
        </div>

    );
}