import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
    res.json({
        message: 'API v1',
    });
});

router.get('/latency', (_req, res) => {
    res.json({
        message: '600ms last latency',
    });
});

export default router;
