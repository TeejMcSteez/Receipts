import Case from "./Case"
import Navbar from "@/app/components/Navbar"

export default async function CaseDisplay({ params }: any) {
    const props = await params;

    return (
        <div>
            <Navbar />
            <Case id={props.id}/>
        </div>
    );
}