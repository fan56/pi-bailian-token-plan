# Pi 百炼 Token Plan 扩展

为 Pi 添加阿里云百炼 Token Plan 的 AI 模型支持。

## 可用模型

| 模型 | 上下文 | 最大输出 | 推理 | 视觉 |
|------|--------|----------|------|------|
| qwen3.8-max-preview | 1M | 65,536 | ✅ | ✅ |
| qwen3.8-max | 1M | 65,536 | ✅ | ✅ |
| qwen3.7-plus | 1M | 65,536 | ✅ | ✅ |
| qwen3.7-max | 262K | 65,536 | ✅ | ❌ |
| qwen3.6-flash | 1M | 65,536 | ✅ | ✅ |
| deepseek-v4-flash-0731 | 1M | 65,536 | ✅ | ❌ |
| deepseek-v4-pro | 262K | 65,536 | ✅ | ❌ |
| glm-5.2 | 202K | 16,384 | ✅ | ❌ |

## 安装

使用 `pi` 从 GitHub 安装：

```bash
pi install https://github.com/fan56/pi-bailian-token-plan
```

安装后扩展会位于 `~/.pi/agent/extensions/pi-bailian-token-plan/` 目录。

## 使用方法

1. **启动 Pi**：
   ```bash
   pi
   ```

2. **登录**：
   - 在 Pi 中输入 `/login`
   - 选择 **“bailian-tp”** 提供商
   - 输入你的 **百炼 Token Plan API 密钥**（以 `sk-` 开头）

3. **选择模型**：
   - 使用 `/model` 命令选择模型
   - 或使用 `Ctrl+P` 循环切换模型

## API 密钥获取

访问 [阿里云百炼控制台 - Token Plan](https://bailian.console.aliyun.com/?tab=tokenPlan) 获取 API 密钥。

## 注意事项

- Token Plan 是订阅制服务，不按 tokens 计费
- API 密钥以 `sk-` 开头
- Base URL: `https://token-plan.cn-beijing.maas.aliyuncs.com/compatible-mode/v1`

## 支持的功能

- ✅ 文本生成
- ✅ 推理模型（支持扩展思考）
- ✅ 视觉理解（部分模型）

## 许可证

MIT License
