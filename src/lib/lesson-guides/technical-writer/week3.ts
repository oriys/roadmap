import type { LessonGuide } from "../types"

export const week3Guides: Record<string, LessonGuide> = {
    "tw-w3-1": {
        lessonId: "tw-w3-1",
        background: [
            "HTTP（超文本传输协议）是 Web 的基础——客户端发起请求，服务器返回响应。理解 HTTP 是写 API 文档的前提。",
            "HTTP 是无状态协议（Stateless），服务器不在两个请求之间保留会话数据。通过 Cookies/Session 可以添加状态功能。",
            "JSON（JavaScript Object Notation）是'a lightweight data-interchange format'，易于人类阅读和编写，是 API 数据交换的事实标准。",
            "HTTP 消息头（Headers）用于发送元数据——描述内容类型、编码、缓存策略、身份验证等信息。"
        ],
        keyDifficulties: [
            "状态码的正确使用：2xx 成功、3xx 重定向、4xx 客户端错误、5xx 服务器错误。常见混淆：401（未认证）vs 403（无权限）、404（不存在）vs 410（已删除）。",
            "请求方法的语义：GET（读取，幂等）、POST（创建）、PUT（全量更新，幂等）、PATCH（部分更新）、DELETE（删除，幂等）。文档要准确描述每个端点使用的方法。",
            "JSON 格式的严格性：键名必须用双引号，不支持注释，尾随逗号非法。文档中的 JSON 示例必须是有效的 JSON。",
            "Header 的描述：哪些 Header 是必需的（如 Authorization）？哪些是可选的？默认值是什么？文档要清晰说明。"
        ],
        handsOnPath: [
            "用 curl 发送一个 GET 请求到公开 API（如 https://api.github.com），观察响应头和响应体，记录状态码、Content-Type 等。",
            "用 curl 发送一个 POST 请求，带上 JSON body 和 Content-Type: application/json 头。观察请求和响应的完整信息。",
            "为一个 API 端点写一份请求/响应文档：包含 URL、方法、请求头、请求体示例、响应状态码、响应体示例。",
            "故意构造一个错误请求（如缺少必需参数），记录错误响应，为错误场景补充文档。"
        ],
        selfCheck: [
            "你能否解释 GET、POST、PUT、PATCH、DELETE 的语义差异？",
            "你能否区分 200、201、204 的使用场景？",
            "你文档中的 JSON 示例是否都是有效的 JSON？是否可以直接复制使用？",
            "你是否清晰描述了每个 API 需要的 Headers？哪些是必需的？",
            "你是否记录了常见的错误响应和对应的状态码？"
        ],
        extensions: [
            "深入学习 HTTP/2 和 HTTP/3 的改进：多路复用、头部压缩、基于 QUIC 的传输。",
            "了解 RESTful API 设计最佳实践：资源命名、版本控制、分页、过滤。",
            "学习 OpenAPI (Swagger) 规范，用结构化方式描述 API。",
            "使用 Postman 或 Insomnia 测试 API，生成可分享的请求集合。"
        ],
        sourceUrls: [
            "https://developer.mozilla.org/en-US/docs/Web/HTTP",
            "https://www.rfc-editor.org/rfc/rfc9110",
            "https://www.json.org/json-en.html"
        ]
    }
}
