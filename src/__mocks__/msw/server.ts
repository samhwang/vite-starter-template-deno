import { setupServer } from 'npm:msw/node';
import { handlers } from './handlers.ts';

export const server = setupServer(...handlers);
