export function GlobalBackground() {
    return (
        <>
            {/* Clean gradient base for modern SaaS look */}
            <div className="fixed inset-0 z-[-10] bg-gradient-to-b from-slate-50 via-white to-slate-50" />
            
            {/* Subtle grid pattern */}
            <div className="fixed inset-0 z-[-9] opacity-[0.4] bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </>
    );
}

