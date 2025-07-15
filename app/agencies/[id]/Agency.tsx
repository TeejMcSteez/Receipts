import { getAgency } from "@/lib/db";
import { notFound } from "next/navigation";

export default async function AgencyDisplay({ id }: { id: string }) {
    const data = await getAgency({ id: id });

    if (!data) return notFound();

    return(
        <div className="flex flex-col space-y-6 m-1 p-1 text-center">
            <h1 className="text-xl">{data.name}</h1>
            <p className="text-shadow-lg">{data.description}</p>
        </div>
    );
}