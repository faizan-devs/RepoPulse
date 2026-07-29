import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import router from './routes/index.js';

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
