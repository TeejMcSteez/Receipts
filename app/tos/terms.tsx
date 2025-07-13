"use client";

export default function Terms() {
    return (
        <div className="max-w-2xl mx-auto bg-white/80 border border-gray-200 rounded-lg shadow-md p-8 mt-8 mb-16">
            <h1 className="text-3xl font-bold mb-4 mt-2">Purpose</h1>
            <p className="mb-8 text-base leading-relaxed">
                This site is here to share documented cases of government misconduct, questionable decisions, and oversight failures.<br />
                We only use publicly available information like court documents, official reports, and investigative journalism.<br />
                Every entry cites its source.<br /><br />
                We are not here to defame anyone or anything. We are here to document what's already out there so people don't have to dig through 400-page PDFs or forgotten news articles.
            </p>

            <h1 className="text-2xl font-semibold mb-3 mt-8">Content Disclaimer</h1>
            <p className="mb-4 text-base leading-relaxed">
                This site is for informational purposes only.<br />
                We do not guarantee every detail is 100% current or correct because, let's be honest, even government documents aren't.<br /><br />
                We separate:
            </p>
            <ul className="list-disc list-inside mb-4 ml-4 text-base">
                <li>Facts</li>
                <li>Opinions</li>
            </ul>
            <div className="mb-4">
                <span className="font-semibold">Facts</span> – Direct quotes from public records linked to sources.<br />
                <span className="font-semibold">💭 Opinions</span>: Clearly labeled and marked with disclaimers like this one.
            </div>
            <p className="mb-8 text-base leading-relaxed">
                If you think we got something wrong, contact us with proof and we'll fix it. No drama needed.
            </p>

            <h1 className="text-2xl font-semibold mb-3 mt-8">User Contributions</h1>
            <p className="mb-4 text-base leading-relaxed">Users may submit information, but:</p>
            <ul className="list-disc list-inside mb-4 ml-4 text-base">
                <li>Submissions must stick to verifiable facts (no wild claims)</li>
                <li>No personal attacks or private info about living individuals</li>
                <li>All entries are reviewed before going live</li>
            </ul>
            <p className="mb-8 text-base leading-relaxed">
                We reserve the right to reject or edit submissions that don't meet these standards.<br />
                If rejected, users also have the right to request deletion of submission upon which the entry will be removed from our database.
            </p>

            <h1 className="text-2xl font-semibold mb-3 mt-8">Liability</h1>
            <h2 className="text-lg font-medium mb-2">We are not liable for:</h2>
            <ul className="list-disc list-inside mb-4 ml-4 text-base">
                <li>Errors or omissions in content.</li>
                <li>External links (we can't control them, it's the internet—be smart)</li>
                <li>User-submitted content that hasn't yet been moderated.</li>
            </ul>
            <footer className="italic text-sm text-gray-600 mb-8">In legalese: "We disclaim all warranties, express or implied, to the fullest extent permitted by the law."</footer>

            <h1 className="text-2xl font-semibold mb-3 mt-8">No Government Endorsement</h1>
            <p className="mb-8 text-base leading-relaxed">This site is not affiliated with or endorsed by any government agency or official. . . Obviously.</p>

            <h1 className="text-2xl font-semibold mb-3 mt-8">Updates</h1>
            <p className="mb-8 text-base leading-relaxed">We might update this page occasionally. If we do, we'll put the date at the top so you're not left guessing like most TOS agreements.</p>

            <h2 className="text-lg font-medium mb-2">Special Note to Lawyers</h2>
            <p className="mb-2 text-base leading-relaxed">Hi. This document avoids traditional legalese because we value clarity over jargon. Courts in multiple jurisdictions (see Hill v. Gateway 2000) have upheld agreements written in plain language as enforceable.</p>
            <p className="mb-2 text-base leading-relaxed">If you're reading this because your client's feelings are hurt:</p>
            <ul className="list-decimal list-inside mb-4 ml-4 text-base">
                <li>Recheck the citations</li>
                <li>
                    Then re-read the Content Disclaimer above.<br />
                    We only summarize what's already in the public domain.
                </li>
            </ul>
            <p className="mb-2 text-base leading-relaxed">If you still want to send a scary letter, email us. We prefer fixing errors to wasting everyone's time and money.</p>
        </div>
    );
}