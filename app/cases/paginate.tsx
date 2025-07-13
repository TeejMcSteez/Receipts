import { getAllReceipts } from "@/lib/db";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default async function ReceiptsPage() {
  const receipts = await getAllReceipts();

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">All Cases</h1>

      <div className="space-y-4">
        {receipts.map((r) => (
          <Card key={r.id}>
            <CardContent className="p-4 space-y-1">
              <Link href={`/receipts/${r.id}`}>
                <h2 className="text-xl font-semibold hover:underline">{r.title}</h2>
              </Link>
              <p className="text-muted-foreground line-clamp-3">{r.summary}</p>
              <p className="text-sm text-muted-foreground">
                {new Date(r.created_at).toLocaleDateString()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
