import Case from "./Case"
import Navbar from "@/app/components/Navbar"

interface CaseProps {
    params: {
        id: string
    }
}

export default async function CaseDisplay({ params }: CaseProps) {
    const props = await params;

    return (
        <div>
            <Navbar />
            <Case id={props.id}/>
        </div>
    );
}