import express, { Request, Response } from 'express';
import { createServer } from '@vercel/node';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Hello from Express + Vercel!' });
});

// Export handler for Vercel
export default createServer(app);