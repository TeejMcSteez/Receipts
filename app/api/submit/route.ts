// app/api/submit/route.ts
import { NextRequest, NextResponse } from "next/server";
import supabase from "@/lib/supabase";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { title, summary, agencies, tags, quotes, sources, opinion } = body;

  if (!title || !summary) {
    return NextResponse.json({ error: "Missing input fields" }, { status: 400 });
  }

  const { error } = await supabase.from("submissions").insert([
    {
      title,
      summary,
      quotes,
      tags,
      sources,
      opinion,
      status: "pending",
    },
  ]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: "Submission received, pending review" }, { status: 200 });
}
