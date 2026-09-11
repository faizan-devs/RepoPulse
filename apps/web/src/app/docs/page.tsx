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

export default function DocsPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white">
            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-zinc-800 bg-[#0a0a0a]/95 backdrop-blur">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-bold text-black">
                                R
                            </div>

                            <span className="font-semibold tracking-tight">
                                RepoPulse
                            </span>
                        </Link>

                        <div className="hidden h-5 w-px bg-zinc-800 sm:block" />

                        <span className="hidden text-sm text-zinc-500 sm:block">
                            Documentation
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link
                            href="/"
                            className="hidden text-sm text-zinc-500 transition hover:text-white sm:block"
                        >
                            Home
                        </Link>

                        <Link
                            href="/dashboard"
                            className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium transition hover:border-zinc-500 hover:bg-zinc-900"
                        >
                            Dashboard
                        </Link>
                    </div>
                </div>
            </header>

            <div className="mx-auto flex max-w-7xl">
                {/* Sidebar */}
                <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 overflow-y-auto border-r border-zinc-800 px-6 py-10 lg:block">
                    <nav className="space-y-8">
                        {sections.map((section) => (
                            <div key={section.title}>
                                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-600">
                                    {section.title}
                                </h3>

                                <div className="space-y-1">
                                    {section.items.map((item, index) => (
                                        <a
                                            key={item}
                                            href={`#${item
                                                .toLowerCase()
                                                .replaceAll(' ', '-')}`}
                                            className={`block rounded-md px-3 py-2 text-sm transition ${
                                                index === 0 &&
                                                section.title ===
                                                    'Getting Started'
                                                    ? 'bg-zinc-900 text-white'
                                                    : 'text-zinc-500 hover:bg-zinc-900 hover:text-white'
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

                {/* Documentation */}
                <article className="min-w-0 flex-1 px-6 py-12 lg:px-16 lg:py-16">
                    <div className="mx-auto max-w-3xl">
                        {/* Introduction */}
                        <section id="introduction">
                            <p className="text-sm font-medium uppercase tracking-widest text-zinc-600">
                                Documentation
                            </p>

                            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                                RepoPulse
                            </h1>

                            <p className="mt-6 text-lg leading-8 text-zinc-400">
                                RepoPulse is a repository intelligence platform
                                that analyzes GitHub repositories and turns
                                engineering activity into useful signals.
                            </p>
                        </section>

                        {/* Quickstart */}
                        <section
                            id="quickstart"
                            className="mt-16 border-t border-zinc-800 pt-12"
                        >
                            <h2 className="text-2xl font-semibold">
                                Quickstart
                            </h2>

                            <p className="mt-4 leading-7 text-zinc-500">
                                Get started by connecting a GitHub repository
                                and letting RepoPulse analyze its activity.
                            </p>

                            <div className="mt-6 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
                                <div className="border-b border-zinc-800 px-4 py-3 text-xs text-zinc-600">
                                    Terminal
                                </div>

                                <pre className="overflow-x-auto p-5 text-sm leading-7 text-zinc-400">
                                    <code>{`git clone https://github.com/your-username/your-repository.git

cd your-repository

pnpm install

pnpm dev`}</code>
                                </pre>
                            </div>
                        </section>

                        {/* Repository Health */}
                        <section
                            id="repository-health"
                            className="mt-16 border-t border-zinc-800 pt-12"
                        >
                            <h2 className="text-2xl font-semibold">
                                Repository Health
                            </h2>

                            <p className="mt-4 leading-7 text-zinc-500">
                                Repository Health provides a high-level view of
                                how actively maintained and healthy a repository
                                appears to be.
                            </p>

                            <div className="mt-6 rounded-xl border border-zinc-800 bg-[#0c0c0c] p-6">
                                <div className="flex items-end justify-between">
                                    <div>
                                        <p className="text-sm text-zinc-500">
                                            Example health score
                                        </p>

                                        <p className="mt-2 text-4xl font-semibold">
                                            87
                                            <span className="text-lg text-zinc-600">
                                                /100
                                            </span>
                                        </p>
                                    </div>

                                    <span className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400">
                                        Healthy
                                    </span>
                                </div>
                            </div>
                        </section>

                        {/* Bus Factor */}
                        <section
                            id="bus-factor"
                            className="mt-16 border-t border-zinc-800 pt-12"
                        >
                            <h2 className="text-2xl font-semibold">
                                Bus Factor
                            </h2>

                            <p className="mt-4 leading-7 text-zinc-500">
                                Bus factor describes how concentrated important
                                repository knowledge is among contributors. A
                                low bus factor can indicate a dependency on a
                                small number of people.
                            </p>

                            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                <div className="rounded-xl border border-zinc-800 p-5">
                                    <p className="text-sm text-zinc-500">
                                        Example
                                    </p>

                                    <p className="mt-2 text-2xl font-semibold">
                                        4
                                    </p>

                                    <p className="mt-1 text-xs text-zinc-600">
                                        Key contributors
                                    </p>
                                </div>

                                <div className="rounded-xl border border-zinc-800 p-5">
                                    <p className="text-sm text-zinc-500">
                                        Signal
                                    </p>

                                    <p className="mt-2 text-2xl font-semibold">
                                        Good
                                    </p>

                                    <p className="mt-1 text-xs text-zinc-600">
                                        Knowledge distribution
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Engineering Signals */}
                        <section
                            id="engineering-signals"
                            className="mt-16 border-t border-zinc-800 pt-12"
                        >
                            <h2 className="text-2xl font-semibold">
                                Engineering Signals
                            </h2>

                            <p className="mt-4 leading-7 text-zinc-500">
                                RepoPulse combines repository activity into
                                signals that can help developers identify
                                potential areas of concern.
                            </p>

                            <div className="mt-6 space-y-3">
                                {[
                                    'Contributor distribution',
                                    'Commit activity',
                                    'Issue activity',
                                    'Pull request activity',
                                    'Repository maintenance',
                                ].map((signal) => (
                                    <div
                                        key={signal}
                                        className="rounded-lg border border-zinc-800 px-5 py-4 text-sm text-zinc-400"
                                    >
                                        {signal}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Connect GitHub */}
                        <section
                            id="connect-github"
                            className="mt-16 border-t border-zinc-800 pt-12"
                        >
                            <h2 className="text-2xl font-semibold">
                                Connect GitHub
                            </h2>

                            <p className="mt-4 leading-7 text-zinc-500">
                                Connect your GitHub account to give RepoPulse
                                access to the repository information required
                                for analysis.
                            </p>

                            <div className="mt-6 rounded-xl border border-zinc-800 bg-[#0c0c0c] p-6">
                                <ol className="space-y-4 text-sm text-zinc-500">
                                    <li>
                                        <span className="mr-3 font-mono text-zinc-600">
                                            01
                                        </span>
                                        Authenticate with GitHub.
                                    </li>

                                    <li>
                                        <span className="mr-3 font-mono text-zinc-600">
                                            02
                                        </span>
                                        Select a repository.
                                    </li>

                                    <li>
                                        <span className="mr-3 font-mono text-zinc-600">
                                            03
                                        </span>
                                        Start repository analysis.
                                    </li>
                                </ol>
                            </div>
                        </section>

                        {/* Analyze */}
                        <section
                            id="analyze-a-repository"
                            className="mt-16 border-t border-zinc-800 pt-12"
                        >
                            <h2 className="text-2xl font-semibold">
                                Analyze a Repository
                            </h2>

                            <p className="mt-4 leading-7 text-zinc-500">
                                After selecting a repository, RepoPulse collects
                                the relevant repository signals and presents
                                them through the dashboard.
                            </p>
                        </section>

                        {/* Metrics */}
                        <section
                            id="understand-metrics"
                            className="mt-16 border-t border-zinc-800 pt-12"
                        >
                            <h2 className="text-2xl font-semibold">
                                Understand Metrics
                            </h2>

                            <div className="mt-6 overflow-hidden rounded-xl border border-zinc-800">
                                <div className="grid grid-cols-2 border-b border-zinc-800 bg-zinc-950 px-5 py-3 text-xs uppercase tracking-wider text-zinc-600">
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
                                        className="grid grid-cols-2 border-b border-zinc-800 px-5 py-4 text-sm last:border-0"
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
                            className="mt-16 border-t border-zinc-800 pt-12"
                        >
                            <h2 className="text-2xl font-semibold">API</h2>

                            <p className="mt-4 leading-7 text-zinc-500">
                                RepoPulse will expose API endpoints for
                                repository analysis, metrics and engineering
                                signals.
                            </p>

                            <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-950 p-5 font-mono text-sm">
                                <div className="text-zinc-500">
                                    GET{' '}
                                    <span className="text-zinc-300">
                                        /api/repositories/:id
                                    </span>
                                </div>
                            </div>
                        </section>

                        {/* Data Model */}
                        <section
                            id="data-model"
                            className="mt-16 border-t border-zinc-800 pt-12"
                        >
                            <h2 className="text-2xl font-semibold">
                                Data Model
                            </h2>

                            <p className="mt-4 leading-7 text-zinc-500">
                                Repository, contributor, activity and analysis
                                data will be represented through a structured
                                data model as the platform evolves.
                            </p>
                        </section>

                        {/* Footer navigation */}
                        <div className="mt-20 flex justify-between border-t border-zinc-800 pt-8">
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
                                Open Dashboard →
                            </Link>
                        </div>
                    </div>
                </article>

                {/* Right TOC */}
                <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-52 shrink-0 py-12 xl:block">
                    <p className="text-xs font-semibold uppercase tracking-wider text-zinc-600">
                        On this page
                    </p>

                    <nav className="mt-4 space-y-3 border-l border-zinc-800 pl-4 text-xs">
                        <a
                            href="#introduction"
                            className="block text-zinc-400 hover:text-white"
                        >
                            Introduction
                        </a>

                        <a
                            href="#quickstart"
                            className="block text-zinc-600 hover:text-white"
                        >
                            Quickstart
                        </a>

                        <a
                            href="#repository-health"
                            className="block text-zinc-600 hover:text-white"
                        >
                            Repository Health
                        </a>

                        <a
                            href="#bus-factor"
                            className="block text-zinc-600 hover:text-white"
                        >
                            Bus Factor
                        </a>

                        <a
                            href="#engineering-signals"
                            className="block text-zinc-600 hover:text-white"
                        >
                            Engineering Signals
                        </a>

                        <a
                            href="#understand-metrics"
                            className="block text-zinc-600 hover:text-white"
                        >
                            Metrics
                        </a>

                        <a
                            href="#api"
                            className="block text-zinc-600 hover:text-white"
                        >
                            API
                        </a>
                    </nav>
                </aside>
            </div>
        </main>
    );
}
