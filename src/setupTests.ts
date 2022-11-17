import matchers, { TestingLibraryMatchers } from 'npm:@testing-library/jest-dom/matchers';
import { cleanup } from 'npm:@testing-library/react';
import { afterAll, afterEach, beforeAll, expect } from 'npm:vitest';
import { server } from './__mocks__/msw/server.ts';

declare global {
  namespace Vi {
    interface JestAssertion<T = any> extends jest.Matchers<void, T>, TestingLibraryMatchers<T, void> {}
  }
}

expect.extend(matchers);

beforeAll(() => server.listen());

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => server.close());
