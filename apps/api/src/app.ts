import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import router from './routes/index.js';
import { success } from 'zod';

export const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root route
app.get('/', (_req, res) => {
    res.status(200).json({
        success: true,
        message: 'Welcome to RepoPulse API 🚀',
    });
});

app.get('/docs', (_req, res) => {
    res.status(200).json({
        success: 'true',
        message: {
            success: true,
            product: 'RepoPulse API',
            version: 'v1',
            description: 'Repository Intelligence & Health Analytics Platform',
            documentation: {
                baseUrl: 'http://localhost:5000/api/v1',
                authentication: 'Coming Soon',
                status: 'Development',
            },
            sampleAnalysis: {
                repository: {
                    owner: 'facebook',
                    name: 'react',
                    url: 'https://github.com/facebook/react',
                    defaultBranch: 'main',
                    language: 'TypeScript',
                    visibility: 'public',
                    stars: 245632,
                    forks: 51234,
                    watchers: 6890,
                    openIssues: 1123,
                    license: 'MIT',
                    createdAt: '2013-05-24T16:15:54Z',
                    updatedAt: '2026-07-29T18:12:11Z',
                },
                healthScore: {
                    overall: 94,
                    grade: 'A',
                    status: 'Excellent',
                },
                metrics: {
                    busFactor: 8,
                    contributors: {
                        total: 1876,
                        activeLast30Days: 96,
                    },
                    commits: {
                        last30Days: 421,
                        last90Days: 1290,
                    },
                    pullRequests: {
                        open: 142,
                        mergedLast30Days: 231,
                    },
                    issues: {
                        open: 1123,
                        closedLast30Days: 378,
                    },
                    releaseFrequency: 'Every 21 days',
                    averagePRMergeTime: '18 hours',
                    averageIssueCloseTime: '3.2 days',
                },
                riskAnalysis: {
                    dependencyRisk: 'Low',
                    maintainerRisk: 'Low',
                    securityRisk: 'Low',
                    activityRisk: 'Very Low',
                },
                languages: [
                    {
                        name: 'TypeScript',
                        percentage: 78.4,
                    },
                    {
                        name: 'JavaScript',
                        percentage: 16.8,
                    },
                    {
                        name: 'CSS',
                        percentage: 3.1,
                    },
                    {
                        name: 'Other',
                        percentage: 1.7,
                    },
                ],
                insights: [
                    'Repository has excellent maintainer diversity.',
                    'Healthy release cadence maintained.',
                    'Low dependency vulnerability exposure.',
                    'Contributor activity has increased by 14% this month.',
                    'Excellent documentation coverage.',
                ],
            },
            availableEndpoints: [
                {
                    method: 'GET',
                    endpoint: '/',
                    description: 'API Information',
                },
                {
                    method: 'GET',
                    endpoint: '/health',
                    description: 'Health Check',
                },
                {
                    method: 'GET',
                    endpoint: '/docs',
                    description: 'API Documentation',
                },
                {
                    method: 'POST',
                    endpoint: '/api/v1/analyze',
                    description: 'Analyze Repository (Coming Soon)',
                },
                {
                    method: 'GET',
                    endpoint: '/api/v1/repositories/:owner/:repo',
                    description: 'Repository Details (Coming Soon)',
                },
                {
                    method: 'GET',
                    endpoint: '/api/v1/metrics/:owner/:repo',
                    description: 'Repository Metrics (Coming Soon)',
                },
            ],
        },
    });
});

// Health check
app.get('/health', (_req, res) => {
    res.status(200).json({
        success: true,
        message: 'RepoPulse API is running 🚀',
    });
});

// API routes
app.use('/api/v1', router);

// 404 handler (always last)
app.use((_req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
    });
});
