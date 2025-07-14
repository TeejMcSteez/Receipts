import { notFound } from "next/navigation";
import { getReceipt } from "@/lib/db";
import Navbar from "@/app/components/Navbar";

interface PageProps {
  params: {
    id: string;
  };
}

export default async function SubmissionPage({ params }: PageProps) {
    const id = await params;
    const data = await getReceipt({ caseId: id.id });

  if (!data) return notFound();

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
        <div>
            <Navbar />
        </div>  
      <header className="space-y-2">
        <h1 className="text-4xl font-bold">{data.title}</h1>
        <p className="text-muted-foreground">{data.summary}</p>
      </header>

      {data.quotes && (
        <section>
          <h2 className="text-2xl font-semibold mb-2">Quotes</h2>
          <article className="prose dark:prose-invert">{data.quotes}</article>
        </section>
      )}

      {data.sources && (
        <section>
          <h2 className="text-2xl font-semibold mb-2">Sources</h2>
          <p className="break-words">{data.sources}</p>
        </section>
      )}

      {data.opinion && (
        <section>
          <h2 className="text-2xl font-semibold mb-2">Personal Opinion</h2>
          <p className="italic">{data.opinion}</p>
        </section>
      )}
    </main>
  );
}
