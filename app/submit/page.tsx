"use client";

import handler from "@/lib/submit";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Navbar from "../components/Navbar";

interface SubmissionProps {
    title: string, 
    summary: string, 
    quotes: JSON,
    tags: JSON,
    sources: JSON,
    opinion: string,
    submitted_by?: string,
    status: string,
    created_at: string
}

export default function Submit() {
    const [form, setForm] = useState({
        title: '',
        summary: '',
        agencies: [],
        tags: [],
        quotes: [''],
        sources: [''],
        opinion: ''
    });

    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });

        const data = await res.json();

        if (!res.ok) {
            setMessage(data.error || 'Something went wrong!');
        } else {
            setMessage(data.message);
        }
    }

    return(
        <>
        <Navbar />
            <form onSubmit={handleSubmit} className="m-2 p-1">
                <Textarea value={form.title} placeholder="Title" onChange={e => setForm({ ...form, title: e.target.value })}/>
                <Textarea value={form.summary} placeholder="Summary" onChange={e => setForm({ ...form, summary: e.target.value })}/>
                <Textarea value={form.quotes.join(`\n`)} placeholder="Quotes (Cite Sources!)" onChange={e => setForm({ ...form, quotes: e.target.value.split(`\n`) })}/>
                <Textarea value={form.sources.join(`\n`)} placeholder="Sources" onChange={e => setForm({ ...form, sources: e.target.value.split('\n') })}/>
                <Textarea value={form.opinion} placeholder="Opinion" onChange={e => setForm({ ...form, opinion: e.target.value })}/>

                <Button type="submit" >Submit</Button>

                {message && <p>{message}</p>}
            </form>
        </>
    );
}