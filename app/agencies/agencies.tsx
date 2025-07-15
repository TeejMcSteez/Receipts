import { getAgencies } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function AgenciesDiplay() {
    const data = await getAgencies();

    if (!data) return notFound();

    return(
        <>
            {data.map((agency, i) => (
                <div className="flex flex-col space-y-6 m-1 p-1" key={i}>
                    <h1 className="text-xl">🔗<Link href={`/agencies/${agency.id}`} className="hover:underline">{agency.name}</Link></h1>
                    <p className="text-muted-foreground">{agency.description}</p>
                </div>
            ))}
        </>
    );
}