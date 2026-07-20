import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

// 百炼 Token Plan 模型定义
const TOKEN_PLAN_MODELS = [
  // 千问系列
  {
    id: "qwen3.8-max-preview",
    name: "qwen3.8-max-preview",
    reasoning: true,
    input: ["text", "image"] as const,
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 1_000_000,
    maxTokens: 65_536,
    compat: {
      supportsDeveloperRole: false,
      supportsReasoningEffort: false,
      maxTokensField: "max_tokens",
      requiresToolResultName: true,
      requiresMistralToolIds: true,
      thinkingFormat: "qwen",
    },
  },
  {
    id: "qwen3.7-plus",
    name: "qwen3.7-plus",
    reasoning: true,
    input: ["text", "image"] as const,
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 1_000_000,
    maxTokens: 65_536,
    compat: {
      supportsDeveloperRole: false,
      supportsReasoningEffort: false,
      maxTokensField: "max_tokens",
      requiresToolResultName: true,
      requiresMistralToolIds: true,
      thinkingFormat: "qwen",
    },
  },
  {
    id: "qwen3.7-max",
    name: "qwen3.7-max",
    reasoning: true,
    input: ["text"] as const,
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 262_144,
    maxTokens: 65_536,
    compat: {
      supportsDeveloperRole: false,
      supportsReasoningEffort: false,
      maxTokensField: "max_tokens",
      requiresToolResultName: true,
      requiresMistralToolIds: true,
      thinkingFormat: "qwen",
    },
  },
  {
    id: "qwen3.6-flash",
    name: "qwen3.6-flash",
    reasoning: true,
    input: ["text", "image"] as const,
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 1_000_000,
    maxTokens: 65_536,
    compat: {
      supportsDeveloperRole: false,
      supportsReasoningEffort: false,
      maxTokensField: "max_tokens",
      requiresToolResultName: true,
      requiresMistralToolIds: true,
      thinkingFormat: "qwen",
    },
  },
  {
    id: "qwen3.7-flash",
    name: "qwen3.7-flash",
    reasoning: true,
    input: ["text", "image"] as const,
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 1_000_000,
    maxTokens: 65_536,
    compat: {
      supportsDeveloperRole: false,
      supportsReasoningEffort: false,
      maxTokensField: "max_tokens",
      requiresToolResultName: true,
      requiresMistralToolIds: true,
      thinkingFormat: "qwen",
    },
  },

  // DeepSeek
  {
    id: "deepseek-v4-pro",
    name: "deepseek-v4-pro",
    reasoning: true,
    input: ["text"] as const,
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 262_144,
    maxTokens: 65_536,
    compat: {
      supportsDeveloperRole: false,
      supportsReasoningEffort: false,
      maxTokensField: "max_tokens",
      requiresToolResultName: true,
      requiresMistralToolIds: true,
      thinkingFormat: "qwen",
    },
  },

  // 智谱 AI
  {
    id: "glm-5.2",
    name: "glm-5.2",
    reasoning: true,
    input: ["text"] as const,
    cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    contextWindow: 202_752,
    maxTokens: 16_384,
    compat: {
      supportsDeveloperRole: false,
      supportsReasoningEffort: false,
      maxTokensField: "max_tokens",
      requiresToolResultName: true,
      requiresMistralToolIds: true,
      thinkingFormat: "qwen",
    },
  },
];

// 注册百炼 Token Plan 提供商
export default function registerTokenPlanProvider(pi: ExtensionAPI): void {
  pi.registerProvider("bailian-tp", {
    baseUrl: "https://token-plan.cn-beijing.maas.aliyuncs.com/compatible-mode/v1",
    apiKey: "$BAILIAN_TP_API_KEY",
    api: "openai-completions",
    models: TOKEN_PLAN_MODELS,
  });
}
