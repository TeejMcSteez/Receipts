import supabase from "./supabase";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') return res.status(405).send('Method not Allowed');

    const { title, summary, agencies, tags, quotes, sources, opinion } = req.body;

    // Basic Validation, needs improvement or third party/lib validation
    if (!title || !summary || !quotes?.length || !sources?.length) {
        return res.status(400).json({ error: "Missing input fields" });

    }

    const { error } =  await supabase.from('submissions').insert([{
        title,
        summary,
        agencies,
        tags,
        quotes,
        sources,
        opinion,
        status: 'pending'
    }]);

    if (error) return res.status(500).json({ error: error.message });
    res.status(200).json({ message: 'Submission received, pending review' });
}