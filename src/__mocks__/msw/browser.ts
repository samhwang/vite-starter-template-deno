import { setupWorker } from 'npm:msw';
import { handlers } from './handlers.ts';

export const worker = setupWorker(...handlers);
