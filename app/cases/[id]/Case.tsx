import getCase from "@/lib/db"
import { notFound } from "next/navigation";

export default async function Case({ id }: { id: string }) {
    const data = await getCase({ id });
    
    if (!data) return notFound();

    return(
        <div>
            <h1>{data.title}</h1>
            <p>{data.summary}</p>
            <p>{data.opinion}</p>
        </div>
    );
}