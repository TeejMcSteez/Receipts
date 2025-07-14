import { Card, CardContent } from "@/components/ui/card";
import { getCases } from "@/lib/db";
import NextLink from "next/link";
import { Link as LinkIcon } from "lucide-react";  // if you want the icon

export default async function Cases() {
  const cases = await getCases();

  return (
    <div className="space-y-4 p-6">
      {cases.map((c) => (
        <Card key={c.id}>
          <CardContent className="flex items-center gap-2">
            {/* Icon + title link */}
            <LinkIcon className="w-5 h-5" />
            <NextLink href={`/cases/${c.id}`}>
              <h2 className="text-xl font-semibold hover:underline">
                {c.title}
              </h2>
            </NextLink>
          </CardContent>
          <CardContent>
            <p>{c.summary}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
