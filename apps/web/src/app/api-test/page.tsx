'use client';

import { useEffect, useState } from 'react';

type EndpointResult = {
    name: string;
    path: string;
    status: number | null;
    data: unknown;
    error?: string;
};

const endpoints = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Router',
        path: '/api/v1',
    },
    {
        name: 'Documentation',
        path: '/api/v1/docs',
    },
    {
        name: 'Test',
        path: '/api/v1/test',
    },
    {
        name: 'Health',
        path: '/health',
    },
];

export default function ApiTestPage() {
    const [results, setResults] = useState<EndpointResult[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function testEndpoints() {
            const API_URL = process.env.NEXT_PUBLIC_API_URL;

            const responses = await Promise.all(
                endpoints.map(async (endpoint) => {
                    try {
                        const response = await fetch(
                            `${API_URL}${endpoint.path}`,
                        );

                        const data = await response.json();

                        return {
                            name: endpoint.name,
                            path: endpoint.path,
                            status: response.status,
                            data,
                        };
                    } catch {
                        return {
                            name: endpoint.name,
                            path: endpoint.path,
                            status: null,
                            data: null,
                            error: 'Request failed',
                        };
                    }
                }),
            );

            setResults(responses);
            setLoading(false);
        }

        testEndpoints();
    }, []);

    if (loading) {
        return (
            <main className="flex min-h-screen items-center justify-center">
                <p>Testing OpenOne API...</p>
            </main>
        );
    }

    return (
        <main className="min-h-screen p-8">
            <h1 className="mb-8 text-3xl font-bold">RepoPulse API Test</h1>

            <div className="space-y-6">
                {results.map((result) => (
                    <section
                        key={result.path}
                        className="rounded-lg border p-5"
                    >
                        <div className="mb-3">
                            <h2 className="text-xl font-semibold">
                                {result.name}
                            </h2>

                            <p className="text-sm text-gray-500">
                                {result.path}
                            </p>

                            <p className="text-sm">
                                Status: {result.status ?? 'Failed'}
                            </p>
                        </div>

                        {result.error ? (
                            <p className="text-red-500">{result.error}</p>
                        ) : (
                            <pre className="overflow-auto rounded-lg bg-gray-100 p-4 text-sm text-gray-700">
                                {JSON.stringify(result.data, null, 2)}
                            </pre>
                        )}
                    </section>
                ))}
            </div>
        </main>
    );
}
