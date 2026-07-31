import { Router } from 'express';
import { success } from 'zod';

const router = Router();

router.get('/', (_req, res) => {
    res.json({
        success: 'true',
        message: 'API v1',
    });
});

router.get('/test', (_req, res) => {
    res.json({
        success: 'true',
        message: '600ms last latency',
    });
});

export default router;
