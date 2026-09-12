import Link from 'next/link';
import Navbar from '../components/navbar';

const signals = [
    {
        title: 'Repository Health',
        description:
            'Understand the overall health and maintenance state of a repository.',
        metric: '87',
        suffix: '/100',
    },
    {
        title: 'Bus Factor',
        description:
            'Identify contributor concentration and potential knowledge-sharing risks.',
        metric: '4',
        suffix: ' key contributors',
    },
    {
        title: 'Engineering Activity',
        description:
            'Turn commits, issues and pull requests into meaningful development signals.',
        metric: '+18',
        suffix: '% activity',
    },
];

const activity = [32, 46, 38, 61, 48, 72, 57, 82, 68, 91, 76, 96];

export default function Home() {
    return (
        <main className="min-h-screen overflow-hidden bg-[#070707] text-white">
            {/* =========================================================
                HERO
            ========================================================= */}
            <section className="relative min-h-[820px] border-b border-white/[0.08]">
                {/* =====================================================
                    REPOPULSE BACKGROUND SYSTEM
                ===================================================== */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    {/* Base grid */}
                    <div
                        className="absolute inset-0 opacity-[0.22]"
                        style={{
                            backgroundImage: `
                                linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)
                            `,
                            backgroundSize: '72px 72px',
                            maskImage:
                                'radial-gradient(ellipse at center, black 20%, transparent 75%)',
                        }}
                    />

                    {/* Moving perspective grid */}
                    <div className="absolute inset-x-[-25%] top-[43%] h-[700px] opacity-[0.22] [transform:perspective(700px)_rotateX(62deg)]">
                        <div
                            className="absolute inset-0 animate-repopulse-grid"
                            style={{
                                backgroundImage: `
                                    linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)
                                `,
                                backgroundSize: '72px 72px',
                            }}
                        />
                    </div>

                    {/* Central atmosphere */}
                    <div className="absolute left-1/2 top-[40%] h-[650px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[130px]" />

                    {/* Analysis core */}
                    <div className="absolute left-1/2 top-[43%] -translate-x-1/2 -translate-y-1/2">
                        {/* Outer pulse */}
                        <div className="absolute -inset-36 rounded-full border border-white/[0.035] animate-repopulse-ring" />

                        {/* Orbit */}
                        <div className="absolute -inset-24 rounded-full border border-white/[0.06]" />

                        {/* Rotating dashed orbit */}
                        <div className="absolute -inset-16 rounded-full border border-dashed border-white/[0.09] animate-repopulse-spin" />

                        {/* Core glow */}
                        <div className="absolute -inset-10 rounded-full bg-white/[0.04] blur-2xl" />

                        {/* Core */}
                        <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/15 bg-[#0a0a0a] shadow-[0_0_100px_rgba(255,255,255,0.08)]">
                            <div className="h-3 w-3 rounded-full bg-white shadow-[0_0_30px_rgba(255,255,255,0.9)] animate-repopulse-core" />
                        </div>
                    </div>

                    {/* =================================================
                        DATA CONNECTIONS
                    ================================================= */}
                    <svg
                        className="absolute left-1/2 top-[43%] h-[520px] w-[1100px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-70"
                        viewBox="0 0 1100 520"
                        fill="none"
                    >
                        {/* Left top */}
                        <path
                            d="M70 110 C300 110 320 260 550 260"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeDasharray="5 9"
                            className="animate-data-flow text-zinc-400"
                        />

                        {/* Left bottom */}
                        <path
                            d="M70 410 C300 410 320 260 550 260"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeDasharray="5 9"
                            className="animate-data-flow text-zinc-400"
                        />

                        {/* Right top */}
                        <path
                            d="M1030 110 C800 110 780 260 550 260"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeDasharray="5 9"
                            className="animate-data-flow text-zinc-400"
                        />

                        {/* Right bottom */}
                        <path
                            d="M1030 410 C800 410 780 260 550 260"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeDasharray="5 9"
                            className="animate-data-flow text-zinc-400"
                        />

                        {/* Core rings */}
                        <circle
                            cx="550"
                            cy="260"
                            r="76"
                            stroke="currentColor"
                            strokeWidth="1"
                            opacity="0.12"
                        />

                        <circle
                            cx="550"
                            cy="260"
                            r="110"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeDasharray="2 12"
                            opacity="0.08"
                        />
                    </svg>

                    {/* =================================================
                        DATA NODES
                    ================================================= */}
                    <DataNode
                        className="left-[8%] top-[25%]"
                        label="GitHub"
                        value="1,284 events"
                        delay=""
                    />

                    <DataNode
                        className="right-[8%] top-[25%]"
                        label="Contributors"
                        value="42 active"
                        delay="[animation-delay:1s]"
                    />

                    <DataNode
                        className="bottom-[24%] left-[12%]"
                        label="Pull Requests"
                        value="186 analyzed"
                        delay="[animation-delay:2s]"
                    />

                    <DataNode
                        className="bottom-[24%] right-[12%]"
                        label="Issues"
                        value="18 open"
                        delay="[animation-delay:3s]"
                    />

                    {/* Small event particles */}
                    <div className="absolute left-[20%] top-[38%] h-1.5 w-1.5 rounded-full bg-white/50 animate-repopulse-particle" />

                    <div className="absolute right-[22%] top-[46%] h-1.5 w-1.5 rounded-full bg-white/50 animate-repopulse-particle-reverse" />

                    <div className="absolute left-[27%] top-[58%] h-1 w-1 rounded-full bg-white/40 animate-repopulse-particle-slow" />

                    {/* Scan beam */}
                    <div className="absolute left-0 right-0 top-[18%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent animate-repopulse-scan" />

                    {/* Edge fading */}
                    <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#070707] to-transparent" />

                    <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#070707] to-transparent" />

                    <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#070707] to-transparent" />
                </div>

                {/* =====================================================
                    CONTENT
                ===================================================== */}
                <div className="relative z-10">
                    <Navbar />

                    <div className="mx-auto flex max-w-5xl flex-col items-center px-6 pt-20 text-center lg:pt-20">
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs text-zinc-400 backdrop-blur-xl">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
                            GitHub repository intelligence
                        </div>

                        <h1 className="mt-7 max-w-5xl text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                            Turn repository activity into{' '}
                            <span className="text-zinc-500">
                                engineering intelligence.
                            </span>
                        </h1>

                        <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                            RepoPulse analyzes your GitHub repositories,
                            contributors, commits, issues and pull requests to
                            reveal the signals that matter for repository
                            health.
                        </p>

                        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/dashboard"
                                className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black shadow-[0_0_40px_rgba(255,255,255,0.08)] transition hover:bg-zinc-200"
                            >
                                Analyze a repository →
                            </Link>

                            <Link
                                href="/how-it-works"
                                className="rounded-lg border border-white/10 bg-black/50 px-6 py-3 text-sm font-semibold text-zinc-300 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                            >
                                See how it works
                            </Link>
                        </div>

                        {/* Product pipeline */}
                        <div className="mt-16 flex flex-wrap items-center justify-center gap-2 text-[11px]">
                            {[
                                'GitHub data',
                                'Repository analysis',
                                'Engineering signals',
                                'Action',
                            ].map((item, index, array) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-2"
                                >
                                    <span className="rounded-md border border-white/10 bg-black/60 px-3 py-2 text-zinc-500 backdrop-blur-xl">
                                        {item}
                                    </span>

                                    {index < array.length - 1 && (
                                        <span className="text-zinc-700">→</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                POSITIONING
            ========================================================= */}
            <section className="border-b border-white/[0.08] bg-[#0a0a0a]">
                <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                        <div>
                            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-700">
                                Repository intelligence
                            </p>

                            <p className="mt-2 text-sm text-zinc-500">
                                From raw repository events to a clearer
                                engineering picture.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-x-8 gap-y-3 text-[11px] text-zinc-600">
                            <span>Health</span>
                            <span>Contributors</span>
                            <span>Activity</span>
                            <span>Risk signals</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                PROBLEM
            ========================================================= */}
            <section className="relative border-b border-white/[0.08] py-28 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
                        <div>
                            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-700">
                                The problem
                            </p>

                            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                                GitHub gives you activity.
                                <br />
                                <span className="text-zinc-500">
                                    RepoPulse gives you context.
                                </span>
                            </h2>
                        </div>

                        <div>
                            <p className="max-w-2xl text-base leading-8 text-zinc-500">
                                A repository can have thousands of commits and
                                still have unhealthy contributor concentration,
                                declining maintenance or a growing issue
                                backlog.
                            </p>

                            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-500">
                                RepoPulse brings those signals together so
                                engineers can understand what is actually
                                happening inside a codebase.
                            </p>

                            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
                                {[
                                    ['01', 'Collect'],
                                    ['02', 'Analyze'],
                                    ['03', 'Score'],
                                    ['04', 'Act'],
                                ].map(([number, title]) => (
                                    <div
                                        key={number}
                                        className="bg-[#0b0b0b] p-5"
                                    >
                                        <span className="font-mono text-[10px] text-zinc-700">
                                            {number}
                                        </span>

                                        <p className="mt-6 text-sm font-medium text-zinc-300">
                                            {title}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                SIGNALS
            ========================================================= */}
            <section className="border-b border-white/[0.08] bg-[#0b0b0d] py-28 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <div className="max-w-2xl">
                            <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-700">
                                Engineering signals
                            </p>

                            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                                See the signals behind your repository.
                            </h2>
                        </div>

                        <Link
                            href="/docs"
                            className="text-sm text-zinc-500 transition hover:text-white"
                        >
                            Read the documentation →
                        </Link>
                    </div>

                    <div className="mt-12 grid gap-4 md:grid-cols-3">
                        {signals.map((signal, index) => (
                            <div
                                key={signal.title}
                                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#09090b] p-7 transition duration-500 hover:-translate-y-1 hover:border-white/20"
                            >
                                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white/[0.025] blur-3xl transition duration-500 group-hover:bg-white/[0.05]" />

                                <div className="relative">
                                    <div className="flex items-center justify-between">
                                        <span className="font-mono text-[10px] text-zinc-700">
                                            0{index + 1}
                                        </span>

                                        <span className="text-zinc-700 transition group-hover:text-zinc-400">
                                            ↗
                                        </span>
                                    </div>

                                    <h3 className="mt-12 text-lg font-semibold">
                                        {signal.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-zinc-600">
                                        {signal.description}
                                    </p>

                                    <div className="mt-10 flex items-baseline gap-2">
                                        <span className="text-4xl font-semibold tracking-tight">
                                            {signal.metric}
                                        </span>

                                        <span className="text-xs text-zinc-600">
                                            {signal.suffix}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================================
                DASHBOARD PREVIEW
            ========================================================= */}
            <section className="border-b border-white/[0.08] py-28 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-700">
                            One workspace
                        </p>

                        <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                            Everything important in one view.
                        </h2>

                        <p className="mt-5 text-sm leading-7 text-zinc-500">
                            Monitor repository health, activity, contributors
                            and engineering signals without jumping between
                            different GitHub views.
                        </p>
                    </div>

                    <div className="relative mt-16">
                        <div className="absolute -inset-8 rounded-[40px] bg-white/[0.02] blur-3xl" />

                        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#09090b] shadow-2xl">
                            {/* Browser */}
                            <div className="flex items-center gap-2 border-b border-white/[0.08] px-5 py-3">
                                <span className="h-2.5 w-2.5 rounded-full bg-zinc-800" />
                                <span className="h-2.5 w-2.5 rounded-full bg-zinc-800" />
                                <span className="h-2.5 w-2.5 rounded-full bg-zinc-800" />

                                <div className="ml-5 rounded-md border border-white/[0.08] bg-black/40 px-4 py-1.5 font-mono text-[10px] text-zinc-600">
                                    app.repopulse.dev/dashboard
                                </div>
                            </div>

                            <div className="grid min-h-[500px] md:grid-cols-[210px_1fr]">
                                {/* Sidebar */}
                                <aside className="hidden border-r border-white/[0.08] p-5 md:block">
                                    <div className="flex items-center gap-2 px-3 pb-6">
                                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white text-[10px] font-bold text-black">
                                            R
                                        </div>

                                        <span className="text-xs font-semibold">
                                            RepoPulse
                                        </span>
                                    </div>

                                    <div className="space-y-1">
                                        {[
                                            'Overview',
                                            'Repositories',
                                            'Analytics',
                                            'Activity',
                                        ].map((item, index) => (
                                            <div
                                                key={item}
                                                className={`rounded-md px-3 py-2 text-xs ${
                                                    index === 0
                                                        ? 'bg-white/[0.07] text-zinc-200'
                                                        : 'text-zinc-600'
                                                }`}
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-10 border-t border-white/[0.08] pt-5">
                                        <p className="px-3 text-[9px] uppercase tracking-widest text-zinc-700">
                                            Insights
                                        </p>

                                        <div className="mt-3 space-y-1">
                                            <div className="px-3 py-2 text-xs text-zinc-600">
                                                Health
                                            </div>

                                            <div className="px-3 py-2 text-xs text-zinc-600">
                                                Contributors
                                            </div>

                                            <div className="px-3 py-2 text-xs text-zinc-600">
                                                Risk
                                            </div>
                                        </div>
                                    </div>
                                </aside>

                                {/* Dashboard */}
                                <div className="p-6 lg:p-8">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-mono text-[9px] uppercase tracking-widest text-zinc-700">
                                                Workspace
                                            </p>

                                            <h3 className="mt-1 text-lg font-semibold">
                                                Engineering overview
                                            </h3>
                                        </div>

                                        <span className="rounded-md border border-white/[0.08] px-3 py-1.5 font-mono text-[9px] text-zinc-600">
                                            UPDATED 4M AGO
                                        </span>
                                    </div>

                                    {/* Metrics */}
                                    <div className="mt-7 grid gap-3 sm:grid-cols-4">
                                        {[
                                            ['Health', '87'],
                                            ['Repositories', '12'],
                                            ['Contributors', '42'],
                                            ['Issues', '18'],
                                        ].map(([label, value]) => (
                                            <div
                                                key={label}
                                                className="rounded-lg border border-white/[0.08] bg-[#0c0c0c] p-4"
                                            >
                                                <p className="text-[10px] text-zinc-600">
                                                    {label}
                                                </p>

                                                <p className="mt-3 text-xl font-semibold">
                                                    {value}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Chart */}
                                    <div className="mt-5 grid gap-4 lg:grid-cols-[1.6fr_1fr]">
                                        <div className="rounded-lg border border-white/[0.08] p-5">
                                            <div className="flex items-center justify-between">
                                                <p className="text-[10px] text-zinc-600">
                                                    Repository activity
                                                </p>

                                                <span className="font-mono text-[9px] text-zinc-700">
                                                    30 DAYS
                                                </span>
                                            </div>

                                            <div className="mt-8 flex h-36 items-end gap-2">
                                                {activity.map(
                                                    (height, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex-1 rounded-sm bg-zinc-800 transition hover:bg-zinc-600"
                                                            style={{
                                                                height: `${height}%`,
                                                            }}
                                                        />
                                                    ),
                                                )}
                                            </div>
                                        </div>

                                        {/* Signals */}
                                        <div className="rounded-lg border border-white/[0.08] p-5">
                                            <p className="text-[10px] text-zinc-600">
                                                Engineering signals
                                            </p>

                                            <div className="mt-5 space-y-4">
                                                {[
                                                    [
                                                        'Repository activity',
                                                        'Healthy',
                                                    ],
                                                    ['Bus factor', 'Good'],
                                                    ['Issue backlog', 'Watch'],
                                                    ['Maintenance', 'Healthy'],
                                                ].map(([label, status]) => (
                                                    <div
                                                        key={label}
                                                        className="flex items-center justify-between border-b border-white/[0.06] pb-3"
                                                    >
                                                        <span className="text-xs text-zinc-500">
                                                            {label}
                                                        </span>

                                                        <span className="text-[10px] text-zinc-400">
                                                            {status}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                CTA
            ========================================================= */}
            <section className="relative overflow-hidden py-32">
                <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[100px]" />

                <div className="relative mx-auto max-w-3xl px-6 text-center">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-700">
                        Start with one repository
                    </p>

                    <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                        Know what is happening inside your codebase.
                    </h2>

                    <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-500">
                        Connect a GitHub repository and turn its activity into
                        engineering signals you can actually use.
                    </p>

                    <Link
                        href="/dashboard"
                        className="mt-9 inline-flex rounded-lg bg-white px-6 py-3 text-sm font-semibold text-black shadow-[0_0_40px_rgba(255,255,255,0.08)] transition hover:bg-zinc-200"
                    >
                        Analyze a repository →
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/[0.08]">
                <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 py-8 text-xs text-zinc-600 sm:flex-row lg:px-8">
                    <div>
                        <span className="font-medium text-zinc-400">
                            RepoPulse
                        </span>

                        <span className="ml-3">
                            Repository intelligence for engineering teams.
                        </span>
                    </div>

                    <div className="flex gap-6">
                        <Link
                            href="/how-it-works"
                            className="transition hover:text-zinc-300"
                        >
                            How it works
                        </Link>

                        <Link
                            href="/about"
                            className="transition hover:text-zinc-300"
                        >
                            About
                        </Link>

                        <Link
                            href="/docs"
                            className="transition hover:text-zinc-300"
                        >
                            Docs
                        </Link>

                        <Link
                            href="/dashboard"
                            className="transition hover:text-zinc-300"
                        >
                            Dashboard
                        </Link>
                    </div>
                </div>
            </footer>
        </main>
    );
}

/* =============================================================
   REUSABLE DATA NODE
============================================================= */

function DataNode({
    className,
    label,
    value,
    delay,
}: {
    className: string;
    label: string;
    value: string;
    delay: string;
}) {
    return (
        <div
            className={`animate-repopulse-float absolute hidden rounded-xl border border-white/10 bg-[#0b0b0b]/75 px-4 py-3 shadow-2xl backdrop-blur-xl md:block ${className} ${delay}`}
        >
            <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />

                <p className="font-mono text-[9px] uppercase tracking-widest text-zinc-600">
                    {label}
                </p>
            </div>

            <p className="mt-2 text-xs text-zinc-300">{value}</p>
        </div>
    );
}
