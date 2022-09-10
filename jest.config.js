const nextJest = require("next/jest");

const nextConfig = nextJest({
  dir: "./",
});

const customConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jsdom",
};

module.exports = nextConfig(customConfig);
