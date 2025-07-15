import Navbar from "@/app/components/Navbar";
import Submission from "./Submission";

export default async function SubmissionPage({ params }: any) {
  const props = await params;

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
        <Navbar />
        <Submission id={props.id}/>
    </main>
  );
}
