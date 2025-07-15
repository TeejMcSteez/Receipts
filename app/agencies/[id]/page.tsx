import AgencyDisplay from "./Agency";
import Navbar from "@/app/components/Navbar";

export default async function SlugPage({ params }: any) {
    const props = await params;

    return(
        <div>
            <Navbar />
            <AgencyDisplay id={props.id}/>
        </div>
    );
}