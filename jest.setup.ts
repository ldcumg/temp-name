import { jestMockServer } from "./src/mocks";
import "@testing-library/jest-dom";

beforeAll(() => jestMockServer.listen());

afterEach(() => jestMockServer.resetHandlers());

afterAll(() => jestMockServer.close());
