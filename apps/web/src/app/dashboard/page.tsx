const repositories = [
    {
        name: 'repopulse',
        description: 'Repository intelligence platform',
        score: 91,
        contributors: 4,
        commits: 284,
        issues: 12,
    },
    {
        name: 'openone',
        description: 'AI productivity workspace',
        score: 84,
        contributors: 3,
        commits: 176,
        issues: 8,
    },
];

export default function DashboardPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white">
            <div className="flex min-h-screen">
                {/* Sidebar */}
                <aside className="hidden w-64 shrink-0 border-r border-zinc-800 bg-[#0a0a0a] md:block">
                    <div className="border-b border-zinc-800 px-6 py-5">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-sm font-bold text-black">
                                R
                            </div>

                            <span className="font-semibold">RepoPulse</span>
                        </div>
                    </div>

                    <nav className="space-y-1 p-4">
                        <p className="px-3 pb-2 text-xs uppercase tracking-wider text-zinc-600">
                            Workspace
                        </p>

                        <button className="w-full rounded-lg bg-zinc-900 px-3 py-2.5 text-left text-sm">
                            Overview
                        </button>

                        <button className="w-full rounded-lg px-3 py-2.5 text-left text-sm text-zinc-500 transition hover:bg-zinc-900 hover:text-white">
                            Repositories
                        </button>

                        <button className="w-full rounded-lg px-3 py-2.5 text-left text-sm text-zinc-500 transition hover:bg-zinc-900 hover:text-white">
                            Analytics
                        </button>

                        <button className="w-full rounded-lg px-3 py-2.5 text-left text-sm text-zinc-500 transition hover:bg-zinc-900 hover:text-white">
                            Activity
                        </button>
                    </nav>

                    <div className="absolute bottom-0 w-64 border-t border-zinc-800 p-4">
                        <div className="rounded-lg px-3 py-2 text-sm text-zinc-500">
                            Settings
                        </div>
                    </div>
                </aside>

                {/* Main */}
                <section className="min-w-0 flex-1">
                    {/* Header */}
                    <header className="flex items-center justify-between border-b border-zinc-800 px-6 py-5 lg:px-8">
                        <div>
                            <p className="text-sm text-zinc-500">Workspace</p>
                            <h1 className="mt-1 text-xl font-semibold">
                                Overview
                            </h1>
                        </div>

                        <button className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200">
                            + Add repository
                        </button>
                    </header>

                    {/* Content */}
                    <div className="mx-auto max-w-7xl p-6 lg:p-8">
                        {/* Overview cards */}
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            <MetricCard
                                label="Repositories"
                                value="2"
                                description="Connected repositories"
                            />

                            <MetricCard
                                label="Avg. Health"
                                value="87"
                                description="Across repositories"
                            />

                            <MetricCard
                                label="Contributors"
                                value="7"
                                description="Active contributors"
                            />

                            <MetricCard
                                label="Open Issues"
                                value="20"
                                description="Across repositories"
                            />
                        </div>

                        {/* Repository section */}
                        <section className="mt-10">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-lg font-semibold">
                                        Repositories
                                    </h2>
                                    <p className="mt-1 text-sm text-zinc-500">
                                        Monitor the health of your repositories.
                                    </p>
                                </div>

                                <button className="text-sm text-zinc-400 transition hover:text-white">
                                    View all →
                                </button>
                            </div>

                            <div className="mt-5 overflow-hidden rounded-xl border border-zinc-800">
                                <div className="hidden grid-cols-[2fr_1fr_1fr_1fr_100px] border-b border-zinc-800 px-5 py-3 text-xs uppercase tracking-wider text-zinc-600 md:grid">
                                    <span>Repository</span>
                                    <span>Health</span>
                                    <span>Contributors</span>
                                    <span>Issues</span>
                                    <span></span>
                                </div>

                                {repositories.map((repo) => (
                                    <div
                                        key={repo.name}
                                        className="grid gap-4 border-b border-zinc-800 p-5 last:border-b-0 md:grid-cols-[2fr_1fr_1fr_1fr_100px] md:items-center"
                                    >
                                        <div>
                                            <h3 className="font-medium">
                                                {repo.name}
                                            </h3>

                                            <p className="mt-1 text-sm text-zinc-600">
                                                {repo.description}
                                            </p>
                                        </div>

                                        <div>
                                            <span className="text-sm font-medium">
                                                {repo.score}/100
                                            </span>

                                            <div className="mt-2 h-1.5 w-20 overflow-hidden rounded-full bg-zinc-800">
                                                <div
                                                    className="h-full rounded-full bg-zinc-400"
                                                    style={{
                                                        width: `${repo.score}%`,
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <span className="text-sm text-zinc-400">
                                            {repo.contributors}
                                        </span>

                                        <span className="text-sm text-zinc-400">
                                            {repo.issues}
                                        </span>

                                        <button className="text-left text-sm text-zinc-500 hover:text-white md:text-right">
                                            Inspect →
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Bottom grid */}
                        <div className="mt-8 grid gap-6 lg:grid-cols-2">
                            {/* Activity */}
                            <section className="rounded-xl border border-zinc-800 p-6">
                                <div>
                                    <h2 className="font-semibold">
                                        Repository activity
                                    </h2>
                                    <p className="mt-1 text-sm text-zinc-600">
                                        Recent engineering activity
                                    </p>
                                </div>

                                <div className="mt-8 flex h-40 items-end gap-2">
                                    {[
                                        35, 50, 42, 65, 48, 80, 60, 72, 90, 64,
                                        78, 95,
                                    ].map((height, index) => (
                                        <div
                                            key={index}
                                            className="flex-1 rounded-sm bg-zinc-700"
                                            style={{ height: `${height}%` }}
                                        />
                                    ))}
                                </div>

                                <div className="mt-4 flex justify-between text-xs text-zinc-700">
                                    <span>12 weeks ago</span>
                                    <span>Today</span>
                                </div>
                            </section>

                            {/* Signals */}
                            <section className="rounded-xl border border-zinc-800 p-6">
                                <h2 className="font-semibold">
                                    Engineering signals
                                </h2>

                                <div className="mt-6 space-y-5">
                                    <Signal
                                        title="Bus factor"
                                        value="Good"
                                        description="Contributor knowledge is well distributed."
                                    />

                                    <Signal
                                        title="Repository activity"
                                        value="Healthy"
                                        description="Consistent development activity detected."
                                    />

                                    <Signal
                                        title="Issue backlog"
                                        value="Watch"
                                        description="Issue count has increased recently."
                                    />
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

function MetricCard({
    label,
    value,
    description,
}: {
    label: string;
    value: string;
    description: string;
}) {
    return (
        <div className="rounded-xl border border-zinc-800 bg-[#0c0c0c] p-5">
            <p className="text-sm text-zinc-500">{label}</p>

            <p className="mt-3 text-3xl font-semibold tracking-tight">
                {value}
            </p>

            <p className="mt-2 text-xs text-zinc-600">{description}</p>
        </div>
    );
}

function Signal({
    title,
    value,
    description,
}: {
    title: string;
    value: string;
    description: string;
}) {
    return (
        <div className="flex items-start justify-between gap-4 border-b border-zinc-800 pb-5 last:border-0 last:pb-0">
            <div>
                <p className="text-sm font-medium">{title}</p>
                <p className="mt-1 text-xs leading-5 text-zinc-600">
                    {description}
                </p>
            </div>

            <span className="shrink-0 text-xs text-zinc-400">{value}</span>
        </div>
    );
}
