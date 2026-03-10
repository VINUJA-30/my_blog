import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "tests",
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  reporter: "list",
  use: {
    actionTimeout: 0,
    baseURL: "http://localhost:5173",
    trace: "on-first-retry",
    ...devices["Desktop Chrome"],
  },
});
