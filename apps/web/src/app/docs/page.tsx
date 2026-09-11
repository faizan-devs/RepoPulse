import Link from 'next/link';

const sections = [
    {
        title: 'Getting Started',
        items: ['Introduction', 'Quickstart'],
    },
    {
        title: 'Core Concepts',
        items: ['Repository Health', 'Bus Factor', 'Engineering Signals'],
    },
    {
        title: 'Guides',
        items: ['Connect GitHub', 'Analyze a Repository', 'Understand Metrics'],
    },
    {
        title: 'Reference',
        items: ['API', 'Data Model'],
    },
];

const metrics = [
    ['Health Score', '91', 'Repository health'],
    ['Bus Factor', '4', 'Key contributors'],
    ['Contributors', '42', 'Active participants'],
    ['Activity', '+18%', 'Development trend'],
];

export default function DocsPage() {
    return (
        <main className="min-h-screen bg-[#080808] text-white">
            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#080808]/90 backdrop-blur-xl">
                <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 lg:px-8">
                    <div className="flex items-center gap-5">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-bold text-black">
                                R
                            </div>

                            <span className="font-semibold tracking-tight">
                                RepoPulse
                            </span>
                        </Link>

                        <div className="hidden h-5 w-px bg-white/10 sm:block" />

                        <span className="hidden text-sm text-zinc-500 sm:block">
                            Documentation
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            href="/how-it-works"
                            className="hidden text-sm text-zinc-500 transition hover:text-white md:block"
                        >
                            How it works
                        </Link>

                        <Link
                            href="/"
                            className="hidden text-sm text-zinc-500 transition hover:text-white md:block"
                        >
                            Home
                        </Link>

                        <Link
                            href="/dashboard"
                            className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium transition hover:border-white/20 hover:bg-white/[0.08]"
                        >
                            Dashboard
                        </Link>
                    </div>
                </div>
            </header>

            <div className="mx-auto flex max-w-[1440px]">
                {/* Sidebar */}
                <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 overflow-y-auto border-r border-white/[0.08] px-5 py-10 lg:block">
                    <div className="mb-8 rounded-xl border border-white/10 bg-white/[0.025] p-4">
                        <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-emerald-400" />
                            <span className="text-xs font-medium text-zinc-400">
                                Documentation
                            </span>
                        </div>

                        <p className="mt-3 text-xs leading-5 text-zinc-600">
                            Repository intelligence and engineering signals.
                        </p>
                    </div>

                    <nav className="space-y-8">
                        {sections.map((section) => (
                            <div key={section.title}>
                                <h3 className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-700">
                                    {section.title}
                                </h3>

                                <div className="space-y-1">
                                    {section.items.map((item, index) => (
                                        <a
                                            key={item}
                                            href={`#${item
                                                .toLowerCase()
                                                .replaceAll(' ', '-')}`}
                                            className={`block rounded-lg px-3 py-2 text-sm transition ${
                                                index === 0 &&
                                                section.title ===
                                                    'Getting Started'
                                                    ? 'bg-white/[0.07] text-white'
                                                    : 'text-zinc-500 hover:bg-white/[0.04] hover:text-zinc-200'
                                            }`}
                                        >
                                            {item}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </nav>
                </aside>

                {/* Main */}
                <article className="min-w-0 flex-1 px-5 py-10 sm:px-8 lg:px-14 lg:py-14">
                    <div className="mx-auto max-w-4xl">
                        {/* Intro */}
                        <section id="introduction">
                            <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-600">
                                <span>Documentation</span>
                                <span>/</span>
                                <span className="text-zinc-400">
                                    Introduction
                                </span>
                            </div>

                            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
                                Repository intelligence,
                                <br />
                                <span className="text-zinc-500">
                                    explained clearly.
                                </span>
                            </h1>

                            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                                RepoPulse analyzes GitHub repositories and turns
                                engineering activity into structured signals
                                that help developers understand project health.
                            </p>

                            {/* Status */}
                            <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
                                {[
                                    ['Source', 'GitHub'],
                                    ['Analysis', 'Repository signals'],
                                    ['Output', 'Engineering insights'],
                                ].map(([label, value]) => (
                                    <div
                                        key={label}
                                        className="bg-[#0c0c0c] p-5"
                                    >
                                        <p className="text-[10px] uppercase tracking-widest text-zinc-700">
                                            {label}
                                        </p>

                                        <p className="mt-2 text-sm text-zinc-300">
                                            {value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Quickstart */}
                        <section
                            id="quickstart"
                            className="mt-20 border-t border-white/[0.08] pt-14"
                        >
                            <p className="font-mono text-xs text-zinc-700">
                                01 / GETTING STARTED
                            </p>

                            <h2 className="mt-4 text-2xl font-semibold">
                                Quickstart
                            </h2>

                            <p className="mt-4 max-w-2xl leading-7 text-zinc-500">
                                Connect a GitHub repository and allow RepoPulse
                                to analyze its repository activity.
                            </p>

                            <div className="mt-7 overflow-hidden rounded-2xl border border-white/10 bg-[#0c0c0c]">
                                <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-3">
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-700">
                                        Terminal
                                    </span>

                                    <span className="text-[10px] text-zinc-700">
                                        pnpm
                                    </span>
                                </div>

                                <pre className="overflow-x-auto p-5 font-mono text-sm leading-7 text-zinc-400">
                                    <code>{`git clone https://github.com/your-username/your-repository.git

cd your-repository

pnpm install

pnpm dev`}</code>
                                </pre>
                            </div>
                        </section>

                        {/* Health */}
                        <section
                            id="repository-health"
                            className="mt-20 border-t border-white/[0.08] pt-14"
                        >
                            <p className="font-mono text-xs text-zinc-700">
                                02 / CORE CONCEPT
                            </p>

                            <h2 className="mt-4 text-2xl font-semibold">
                                Repository Health
                            </h2>

                            <p className="mt-4 max-w-2xl leading-7 text-zinc-500">
                                Repository Health provides a high-level view of
                                how actively maintained and healthy a repository
                                appears to be.
                            </p>

                            <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
                                {metrics.map(([name, value, detail]) => (
                                    <div
                                        key={name}
                                        className="bg-[#0c0c0c] p-5"
                                    >
                                        <p className="text-xs text-zinc-600">
                                            {name}
                                        </p>

                                        <p className="mt-3 text-3xl font-semibold tracking-tight">
                                            {value}
                                        </p>

                                        <p className="mt-1 text-[11px] text-zinc-700">
                                            {detail}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Bus Factor */}
                        <section
                            id="bus-factor"
                            className="mt-20 border-t border-white/[0.08] pt-14"
                        >
                            <p className="font-mono text-xs text-zinc-700">
                                03 / CORE CONCEPT
                            </p>

                            <h2 className="mt-4 text-2xl font-semibold">
                                Bus Factor
                            </h2>

                            <p className="mt-4 max-w-2xl leading-7 text-zinc-500">
                                Bus factor describes how concentrated important
                                repository knowledge is among contributors. A
                                low bus factor can indicate dependency on a
                                small number of people.
                            </p>

                            <div className="mt-8 rounded-2xl border border-white/10 bg-[#0c0c0c] p-6">
                                <div className="flex items-end justify-between">
                                    <div>
                                        <p className="text-xs text-zinc-600">
                                            Key contributors
                                        </p>

                                        <p className="mt-2 text-4xl font-semibold">
                                            4
                                        </p>
                                    </div>

                                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
                                        Good distribution
                                    </span>
                                </div>

                                <div className="mt-8 flex h-20 items-end gap-2">
                                    {[
                                        45, 70, 58, 82, 52, 66, 40, 75, 60, 88,
                                    ].map((height, index) => (
                                        <div
                                            key={index}
                                            className="flex-1 rounded-t-sm bg-zinc-800"
                                            style={{
                                                height: `${height}%`,
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Engineering signals */}
                        <section
                            id="engineering-signals"
                            className="mt-20 border-t border-white/[0.08] pt-14"
                        >
                            <p className="font-mono text-xs text-zinc-700">
                                04 / CORE CONCEPT
                            </p>

                            <h2 className="mt-4 text-2xl font-semibold">
                                Engineering Signals
                            </h2>

                            <p className="mt-4 max-w-2xl leading-7 text-zinc-500">
                                RepoPulse combines repository activity into
                                signals that can help developers identify
                                potential areas of concern.
                            </p>

                            <div className="mt-8 space-y-2">
                                {[
                                    'Contributor distribution',
                                    'Commit activity',
                                    'Issue activity',
                                    'Pull request activity',
                                    'Repository maintenance',
                                ].map((signal, index) => (
                                    <div
                                        key={signal}
                                        className="flex items-center justify-between rounded-xl border border-white/10 bg-[#0c0c0c] px-5 py-4"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="font-mono text-xs text-zinc-700">
                                                0{index + 1}
                                            </span>

                                            <span className="text-sm text-zinc-300">
                                                {signal}
                                            </span>
                                        </div>

                                        <span className="text-xs text-zinc-700">
                                            Signal
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Connect GitHub */}
                        <section
                            id="connect-github"
                            className="mt-20 border-t border-white/[0.08] pt-14"
                        >
                            <p className="font-mono text-xs text-zinc-700">
                                05 / GUIDE
                            </p>

                            <h2 className="mt-4 text-2xl font-semibold">
                                Connect GitHub
                            </h2>

                            <p className="mt-4 max-w-2xl leading-7 text-zinc-500">
                                Connect your GitHub account to provide RepoPulse
                                with the repository information required for
                                analysis.
                            </p>

                            <div className="mt-8 rounded-2xl border border-white/10 bg-[#0c0c0c] p-6">
                                <ol className="space-y-5">
                                    {[
                                        'Authenticate with GitHub.',
                                        'Select a repository.',
                                        'Start repository analysis.',
                                    ].map((step, index) => (
                                        <li
                                            key={step}
                                            className="flex gap-4 text-sm text-zinc-400"
                                        >
                                            <span className="font-mono text-xs text-zinc-700">
                                                0{index + 1}
                                            </span>

                                            <span>{step}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </section>

                        {/* Analyze */}
                        <section
                            id="analyze-a-repository"
                            className="mt-20 border-t border-white/[0.08] pt-14"
                        >
                            <p className="font-mono text-xs text-zinc-700">
                                06 / GUIDE
                            </p>

                            <h2 className="mt-4 text-2xl font-semibold">
                                Analyze a Repository
                            </h2>

                            <p className="mt-4 max-w-2xl leading-7 text-zinc-500">
                                After selecting a repository, RepoPulse collects
                                the relevant repository signals and presents
                                them through the dashboard.
                            </p>
                        </section>

                        {/* Metrics */}
                        <section
                            id="understand-metrics"
                            className="mt-20 border-t border-white/[0.08] pt-14"
                        >
                            <p className="font-mono text-xs text-zinc-700">
                                07 / GUIDE
                            </p>

                            <h2 className="mt-4 text-2xl font-semibold">
                                Understand Metrics
                            </h2>

                            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10">
                                <div className="grid grid-cols-2 bg-[#101010] px-5 py-3 text-[10px] uppercase tracking-widest text-zinc-700">
                                    <span>Metric</span>
                                    <span>Purpose</span>
                                </div>

                                {[
                                    [
                                        'Health Score',
                                        'High-level repository health',
                                    ],
                                    [
                                        'Bus Factor',
                                        'Contributor knowledge concentration',
                                    ],
                                    [
                                        'Contributors',
                                        'Contribution participation',
                                    ],
                                    [
                                        'Activity',
                                        'Development activity over time',
                                    ],
                                ].map(([metric, purpose]) => (
                                    <div
                                        key={metric}
                                        className="grid grid-cols-2 border-t border-white/[0.08] px-5 py-4 text-sm"
                                    >
                                        <span className="text-zinc-300">
                                            {metric}
                                        </span>

                                        <span className="text-zinc-600">
                                            {purpose}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* API */}
                        <section
                            id="api"
                            className="mt-20 border-t border-white/[0.08] pt-14"
                        >
                            <p className="font-mono text-xs text-zinc-700">
                                08 / REFERENCE
                            </p>

                            <h2 className="mt-4 text-2xl font-semibold">API</h2>

                            <p className="mt-4 max-w-2xl leading-7 text-zinc-500">
                                RepoPulse will expose API endpoints for
                                repository analysis, metrics and engineering
                                signals.
                            </p>

                            <div className="mt-7 rounded-xl border border-white/10 bg-[#0c0c0c] p-5 font-mono text-sm">
                                <span className="text-zinc-600">GET</span>{' '}
                                <span className="text-zinc-300">
                                    /api/repositories/:id
                                </span>
                            </div>
                        </section>

                        {/* Data model */}
                        <section
                            id="data-model"
                            className="mt-20 border-t border-white/[0.08] pt-14"
                        >
                            <p className="font-mono text-xs text-zinc-700">
                                09 / REFERENCE
                            </p>

                            <h2 className="mt-4 text-2xl font-semibold">
                                Data Model
                            </h2>

                            <p className="mt-4 max-w-2xl leading-7 text-zinc-500">
                                Repository, contributor, activity and analysis
                                data will be represented through a structured
                                data model as the platform evolves.
                            </p>
                        </section>

                        {/* Bottom nav */}
                        <div className="mt-20 flex items-center justify-between border-t border-white/[0.08] pt-8">
                            <Link
                                href="/how-it-works"
                                className="text-sm text-zinc-500 transition hover:text-white"
                            >
                                ← How it works
                            </Link>

                            <Link
                                href="/dashboard"
                                className="text-sm text-zinc-500 transition hover:text-white"
                            >
                                Dashboard →
                            </Link>
                        </div>
                    </div>
                </article>

                {/* Right TOC */}
                <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-56 shrink-0 py-12 pr-6 xl:block">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-700">
                        On this page
                    </p>

                    <nav className="mt-5 space-y-3 border-l border-white/[0.08] pl-4 text-xs">
                        {[
                            ['Introduction', 'introduction'],
                            ['Quickstart', 'quickstart'],
                            ['Repository Health', 'repository-health'],
                            ['Bus Factor', 'bus-factor'],
                            ['Engineering Signals', 'engineering-signals'],
                            ['Metrics', 'understand-metrics'],
                            ['API', 'api'],
                        ].map(([label, id], index) => (
                            <a
                                key={id}
                                href={`#${id}`}
                                className={`block transition hover:text-white ${
                                    index === 0
                                        ? 'text-zinc-300'
                                        : 'text-zinc-600'
                                }`}
                            >
                                {label}
                            </a>
                        ))}
                    </nav>
                </aside>
            </div>
        </main>
    );
}
