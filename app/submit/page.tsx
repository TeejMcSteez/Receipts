"use client";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Navbar from "../components/Navbar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface SubmissionProps {
  title: string;
  summary: string;
  quotes: JSON;
  tags: JSON;
  sources: JSON;
  opinion: string;
  submitted_by?: string;
  status: string;
  created_at: string;
}

export default function Submit() {
  const [form, setForm] = useState({
    title: "",
    summary: "",
    agencies: [],
    tags: [""],
    quotes: [""],
    sources: [""],
    opinion: "",
  });

  const [message, setMessage] = useState("");
  const [showDialog, setShowDialog] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.error || "Something went wrong!");
    } else {
      setMessage(data.message);
      setShowDialog(true); // Show the alert dialog after success
    }
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit} className="m-2 p-1 space-y-4">
        <Textarea
          value={form.title}
          placeholder="Title"
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <Textarea
          value={form.summary}
          placeholder="Summary"
          onChange={(e) => setForm({ ...form, summary: e.target.value })}
        />
        <Textarea
          value={form.quotes.join(`\n`)}
          placeholder="Quotes (Cite Sources!)"
          onChange={(e) =>
            setForm({ ...form, quotes: e.target.value.split(`\n`) })
          }
        />
        <Textarea
          value={form.sources.join(`\n`)}
          placeholder="Sources"
          onChange={(e) =>
            setForm({ ...form, sources: e.target.value.split("\n") })
          }
        />
        <Textarea
          value={form.opinion}
          placeholder="Opinion"
          onChange={(e) => setForm({ ...form, opinion: e.target.value })}
        />
        <Textarea
          value={form.tags.join('\n')}
          placeholder="Tags"
          onChange={(e) => setForm({ ...form, tags: e.target.value.split("\n") })}
        />

        <Button type="submit">Submit</Button>

        {message && <p className="text-sm text-muted-foreground">{message}</p>}
      </form>

      {/* Controlled AlertDialog */}
      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Please take note</AlertDialogTitle>
            <AlertDialogDescription>
              To remove your submission from the database, email the owner. We are
              working on an automated removal process, but that requires auth and
              that’s way down the road.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setShowDialog(false)}>
              Close
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
