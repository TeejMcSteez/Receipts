import Navbar from "../components/Navbar";
import ReceiptsPage from "./paginate";
import Cases from "./cases";

// All cases list
export default function CasesPage() {
    return(
        <>
            <Navbar />
            <ReceiptsPage />
            <Cases />
        </>
    );
}