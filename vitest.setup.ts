import { vitestMockServer } from "@/mocks";
import "@testing-library/jest-dom/vitest";
import { afterAll, afterEach, beforeAll } from "vitest";

beforeAll(() => vitestMockServer.listen());

afterEach(() => vitestMockServer.resetHandlers());

afterAll(() => vitestMockServer.close());
