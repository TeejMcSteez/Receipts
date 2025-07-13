import { getReceipt } from "@/lib/db"

interface Receipt {
    id: string,
    title: string,
    summary: string,
    quotes: string[],
    tags: string[],
    sources: string[],
    opinion: string,
    submitted_by: string,
    status?: string,
    created_at: string
}

export default async function Case({params}: {params: {slug: string}}) {
    const receipt: Receipt[] = await getReceipt({ caseId: params.slug });
    
    return (
        <div className="max-w-4xl mx-auto p-6 space-y-4">
        {receipt.map((item) => (
            <div key={item.id}>
                <h1 className="text-3xl font-bold">{item.title}</h1>
                <p className="text-muted-foreground">{item.summary}</p>
                <article className="prose dark:prose-invert">{item.quotes}</article>
                {item.sources.map((source: string, i: number) => (
                    <p key={i}>Source {i}: {source}</p>
                ))}
            </div>
        ))}
        </div>
    );

}