import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const nginxStages: Stage[] = [
  {
    id: "nginx-s1",
    title: "阶段一：基础概念与静态服务",
    duration: "第 1-3 周",
    goal: "理解 Web 服务器原理与 Nginx 架构，掌握配置语法基础并能部署静态文件服务。",
    weeks: [
      {
        id: "nginx-w1",
        title: "第 1 周：Web 服务器原理",
        summary: "理解 HTTP 协议基础与 Web 服务器的核心工作机制。",
        overview: "Web 服务器是互联网基础设施的核心组件。本周从 HTTP 请求/响应模型出发，理解 Web 服务器如何处理客户端连接，以及 Nginx 在主流服务器中的定位与优势。",
        keyPoints: [
          "HTTP 是无状态的请求/响应协议，理解状态码、头部和报文结构是基础",
          "Web 服务器的核心职责是监听端口、解析请求、返回响应",
          "Nginx 以高并发、低内存消耗和模块化设计著称",
        ],
        lessons: [
          {
            id: "nginx-w1-1",
            title: "HTTP 协议基础",
            detail: "掌握 HTTP/1.1 请求方法、状态码、头部字段与报文结构，为理解 Nginx 配置打下协议基础。",
            keyPoints: [
              "常用请求方法：GET 获取资源、POST 提交数据、PUT 更新、DELETE 删除。",
              "状态码分类：2xx 成功、3xx 重定向、4xx 客户端错误、5xx 服务端错误。",
              "Content-Type、Cache-Control、Connection 等头部字段直接影响 Nginx 行为。",
            ],
            resources: [
              { title: "MDN HTTP 概览", url: "https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview" },
              { title: "HTTP/1.1 规范 RFC 7230", url: "https://datatracker.ietf.org/doc/html/rfc7230" },
              { title: "HTTP 状态码参考", url: "https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status" },
            ],
          },
          {
            id: "nginx-w1-2",
            title: "Web 服务器概览",
            detail: "对比 Nginx、Apache、Caddy 等主流 Web 服务器的架构差异与适用场景，理解 Nginx 的核心优势。",
            keyPoints: [
              "Apache 采用多进程/多线程模型，每个连接占用一个线程。",
              "Nginx 采用事件驱动的异步非阻塞模型，单进程可处理数万并发。",
              "Nginx 兼具 Web 服务器、反向代理、负载均衡器三重角色。",
            ],
            resources: [
              { title: "Nginx 官方简介", url: "https://nginx.org/en/" },
              { title: "Nginx vs Apache", url: "https://docs.nginx.com/nginx/admin-guide/web-server/" },
            ],
          },
          {
            id: "nginx-w1-3",
            title: "安装与启停管理",
            detail: "在不同操作系统上安装 Nginx，掌握启动、停止、重载配置与版本管理等基本运维操作。",
            keyPoints: [
              "Linux 可用包管理器安装（apt/yum）或从源码编译以定制模块。",
              "nginx -s reload 平滑重载配置，不中断正在处理的连接。",
              "nginx -t 在应用配置前检查语法错误，是运维必备操作。",
            ],
            resources: [
              { title: "Nginx 安装指南", url: "https://nginx.org/en/docs/install.html" },
              { title: "命令行参数", url: "https://nginx.org/en/docs/switches.html" },
              { title: "初学者指南", url: "https://nginx.org/en/docs/beginners_guide.html" },
            ],
          },
        ],
      },
      {
        id: "nginx-w2",
        title: "第 2 周：Nginx 架构",
        summary: "深入理解 Nginx 的 Master/Worker 进程模型与事件驱动机制。",
        overview: "Nginx 的高性能源于其精巧的架构设计。本周深入 Master/Worker 进程模型、事件驱动机制和模块化体系，理解 Nginx 为何能高效处理海量并发连接。",
        keyPoints: [
          "Master 进程管理配置加载与 Worker 生命周期，Worker 处理实际请求",
          "基于 epoll/kqueue 的事件驱动模型实现非阻塞 I/O",
          "模块化架构使 Nginx 可通过编译或动态加载扩展功能",
        ],
        lessons: [
          {
            id: "nginx-w2-1",
            title: "Master/Worker 进程模型",
            detail: "理解 Nginx 的 Master 进程与 Worker 进程的职责分工、信号通信机制与平滑升级原理。",
            keyPoints: [
              "Master 进程以 root 运行，负责读取配置、绑定端口和管理 Worker。",
              "Worker 进程以非特权用户运行，独立处理客户端请求。",
              "通过信号机制实现热重载（HUP）、优雅停止（QUIT）和二进制热升级。",
            ],
            resources: [
              { title: "Nginx 工作原理", url: "https://nginx.org/en/docs/beginners_guide.html" },
              { title: "控制 Nginx", url: "https://nginx.org/en/docs/control.html" },
            ],
          },
          {
            id: "nginx-w2-2",
            title: "事件驱动与非阻塞 I/O",
            detail: "理解 Nginx 基于 epoll/kqueue 的事件驱动模型，掌握连接处理的异步非阻塞机制。",
            keyPoints: [
              "每个 Worker 使用事件循环处理数千并发连接，无需多线程切换开销。",
              "epoll（Linux）和 kqueue（FreeBSD/macOS）是高效的 I/O 多路复用机制。",
              "worker_connections 指令控制单个 Worker 的最大并发连接数。",
            ],
            resources: [
              { title: "连接处理方法", url: "https://nginx.org/en/docs/events.html" },
              { title: "Nginx 架构详解", url: "https://www.nginx.com/blog/inside-nginx-how-we-designed-for-performance-scale/" },
            ],
          },
          {
            id: "nginx-w2-3",
            title: "模块化体系",
            detail: "了解 Nginx 的核心模块、标准模块与第三方模块体系，掌握模块的编译与动态加载方式。",
            keyPoints: [
              "核心模块（core）处理事件循环和进程管理，HTTP 模块处理 Web 请求。",
              "静态模块在编译时链接，动态模块通过 load_module 指令按需加载。",
              "常用第三方模块包括 lua-nginx-module、headers-more、njs 等。",
            ],
            resources: [
              { title: "Nginx 模块索引", url: "https://nginx.org/en/docs/" },
              { title: "动态模块", url: "https://docs.nginx.com/nginx/admin-guide/dynamic-modules/dynamic-modules/" },
              { title: "第三方模块列表", url: "https://www.nginx.com/resources/wiki/modules/" },
            ],
          },
        ],
      },
      {
        id: "nginx-w3",
        title: "第 3 周：配置语法与静态服务",
        summary: "掌握 Nginx 配置文件结构与语法，部署高效的静态文件服务。",
        overview: "配置是 Nginx 运维的核心技能。本周学习配置文件的层级结构、指令继承规则与变量系统，并实践静态文件服务的常见配置。",
        keyPoints: [
          "配置文件由指令和块组成，块可嵌套形成 main→events→http→server→location 层级",
          "子块继承父块的指令值，可在子块中覆盖",
          "内置变量（如 $uri、$args、$remote_addr）是动态配置的基础",
        ],
        lessons: [
          {
            id: "nginx-w3-1",
            title: "配置文件结构与语法",
            detail: "掌握 nginx.conf 的层级结构、指令类型、include 机制和变量系统。",
            keyPoints: [
              "全局块（main）→ events 块 → http 块 → server 块 → location 块的层级关系。",
              "使用 include 拆分配置文件，如 sites-enabled/*.conf 模式管理多站点。",
              "指令分为简单指令（以分号结尾）和块指令（花括号包围）。",
            ],
            resources: [
              { title: "配置文件结构", url: "https://nginx.org/en/docs/beginners_guide.html#conf_structure" },
              { title: "核心模块指令", url: "https://nginx.org/en/docs/ngx_core_module.html" },
            ],
          },
          {
            id: "nginx-w3-2",
            title: "Server 与虚拟主机",
            detail: "配置基于域名和端口的虚拟主机，理解 server_name 匹配规则与 listen 指令参数。",
            keyPoints: [
              "server_name 支持精确匹配、通配符和正则表达式三种方式。",
              "listen 指令可指定端口、IP、default_server 和 SSL 参数。",
              "多个 server 块共存时，Nginx 按优先级顺序匹配请求。",
            ],
            resources: [
              { title: "server_name 匹配", url: "https://nginx.org/en/docs/http/server_names.html" },
              { title: "虚拟主机配置", url: "https://nginx.org/en/docs/http/request_processing.html" },
            ],
          },
          {
            id: "nginx-w3-3",
            title: "静态文件服务",
            detail: "配置 Nginx 高效提供静态文件服务，掌握 root/alias、目录索引、MIME 类型与压缩等关键设置。",
            keyPoints: [
              "root 指令拼接 URI 路径，alias 替换匹配前缀，用法有本质区别。",
              "开启 gzip 压缩文本资源可降低 60%-80% 的传输体积。",
              "设置 expires 和 Cache-Control 头部实现客户端缓存策略。",
            ],
            resources: [
              { title: "静态内容服务", url: "https://docs.nginx.com/nginx/admin-guide/web-server/serving-static-content/" },
              { title: "gzip 模块", url: "https://nginx.org/en/docs/http/ngx_http_gzip_module.html" },
              { title: "HTTP 头部模块", url: "https://nginx.org/en/docs/http/ngx_http_headers_module.html" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "nginx-s2",
    title: "阶段二：反向代理与负载均衡",
    duration: "第 4-6 周",
    goal: "掌握反向代理配置、upstream 负载均衡算法、健康检查与 SSL/TLS 加密传输。",
    weeks: [
      {
        id: "nginx-w4",
        title: "第 4 周：反向代理配置",
        summary: "掌握 proxy_pass 反向代理核心配置与请求转发机制。",
        overview: "反向代理是 Nginx 最核心的应用场景。本周学习 proxy_pass 指令的 URI 拼接规则、头部传递策略与超时控制，构建可靠的代理网关。",
        keyPoints: [
          "proxy_pass 的 URI 拼接规则因是否带尾部斜杠而不同",
          "proxy_set_header 传递客户端真实 IP 和 Host 信息到后端",
          "超时参数（connect/send/read）防止后端阻塞拖垮代理层",
        ],
        lessons: [
          {
            id: "nginx-w4-1",
            title: "proxy_pass 基础",
            detail: "掌握 proxy_pass 指令的 URI 拼接规则、协议支持与基本反向代理配置模式。",
            keyPoints: [
              "proxy_pass 后带 URI 时替换匹配前缀，不带时透传原始 URI。",
              "支持 HTTP、HTTPS、Unix Socket 等多种后端协议。",
              "location 与 proxy_pass 的组合决定最终转发的请求路径。",
            ],
            resources: [
              { title: "proxy_pass 指令", url: "https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_pass" },
              { title: "反向代理指南", url: "https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/" },
            ],
          },
          {
            id: "nginx-w4-2",
            title: "请求头与超时控制",
            detail: "配置代理请求头传递策略与超时参数，确保后端获取正确的客户端信息和可靠的连接管理。",
            keyPoints: [
              "proxy_set_header X-Real-IP 和 X-Forwarded-For 传递客户端真实 IP。",
              "proxy_set_header Host $host 确保后端识别正确的虚拟主机。",
              "proxy_connect_timeout / proxy_read_timeout / proxy_send_timeout 控制各阶段超时。",
            ],
            resources: [
              { title: "代理模块指令", url: "https://nginx.org/en/docs/http/ngx_http_proxy_module.html" },
              { title: "proxy_set_header", url: "https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_set_header" },
            ],
          },
          {
            id: "nginx-w4-3",
            title: "缓冲与响应处理",
            detail: "理解 Nginx 代理缓冲机制，配置 proxy_buffering 和 proxy_buffer_size 优化代理性能。",
            keyPoints: [
              "开启 proxy_buffering 时 Nginx 先接收完整后端响应再发给客户端。",
              "proxy_buffer_size 控制读取后端响应头的缓冲区大小。",
              "proxy_busy_buffers_size 控制可同时发送给客户端的缓冲区大小。",
            ],
            resources: [
              { title: "代理缓冲", url: "https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_buffering" },
              { title: "优化代理性能", url: "https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/#passing-a-request-to-a-proxied-server" },
            ],
          },
        ],
      },
      {
        id: "nginx-w5",
        title: "第 5 周：负载均衡",
        summary: "掌握 upstream 定义与负载均衡算法，实现高可用后端集群。",
        overview: "负载均衡是高可用架构的核心。本周学习 upstream 的配置语法、多种负载均衡算法的原理与适用场景，以及健康检查机制。",
        keyPoints: [
          "upstream 定义后端服务器组，proxy_pass 引用 upstream 名称",
          "内置算法包括轮询、加权轮询、ip_hash 和 least_conn",
          "被动健康检查通过 max_fails 和 fail_timeout 自动摘除故障节点",
        ],
        lessons: [
          {
            id: "nginx-w5-1",
            title: "upstream 与轮询算法",
            detail: "配置 upstream 定义后端服务器组，理解默认轮询和加权轮询的调度逻辑。",
            keyPoints: [
              "upstream 块在 http 上下文中定义，通过名称被 proxy_pass 引用。",
              "默认使用加权轮询（weighted round-robin），weight 值越大分配越多。",
              "server 指令支持 backup（备份）和 down（下线）标记。",
            ],
            resources: [
              { title: "upstream 模块", url: "https://nginx.org/en/docs/http/ngx_http_upstream_module.html" },
              { title: "负载均衡指南", url: "https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/" },
            ],
          },
          {
            id: "nginx-w5-2",
            title: "高级负载均衡算法",
            detail: "掌握 ip_hash、least_conn、hash 等高级调度算法的原理与会话保持策略。",
            keyPoints: [
              "ip_hash 基于客户端 IP 的哈希值分配，实现会话粘滞。",
              "least_conn 将请求分配到活跃连接数最少的服务器。",
              "hash 指令支持自定义键（如 $request_uri）实现一致性哈希。",
            ],
            resources: [
              { title: "负载均衡算法", url: "https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/#choosing-a-load-balancing-method" },
              { title: "hash 指令", url: "https://nginx.org/en/docs/http/ngx_http_upstream_module.html#hash" },
            ],
          },
          {
            id: "nginx-w5-3",
            title: "健康检查机制",
            detail: "配置被动健康检查自动摘除故障节点，了解主动健康检查（Nginx Plus）的工作方式。",
            keyPoints: [
              "被动检查：max_fails 设定失败阈值，fail_timeout 设定恢复周期。",
              "Nginx 开源版仅支持被动检查，Plus 版提供主动 HTTP/TCP 探测。",
              "第三方模块 nginx_upstream_check_module 可为开源版添加主动检查。",
            ],
            resources: [
              { title: "被动健康检查", url: "https://nginx.org/en/docs/http/ngx_http_upstream_module.html#server" },
              { title: "健康检查指南", url: "https://docs.nginx.com/nginx/admin-guide/load-balancer/http-health-check/" },
            ],
          },
        ],
      },
      {
        id: "nginx-w6",
        title: "第 6 周：SSL/TLS 与 HTTPS",
        summary: "配置 SSL/TLS 证书实现 HTTPS 加密传输与安全加固。",
        overview: "HTTPS 是现代 Web 的安全标准。本周学习 TLS 握手流程、证书配置、协议与密码套件优化，以及 HTTP/2 的启用与调优。",
        keyPoints: [
          "TLS 握手通过非对称加密协商对称密钥，后续通信使用对称加密",
          "ssl_certificate 和 ssl_certificate_key 指定证书链和私钥路径",
          "HTTP/2 基于 TLS 提供多路复用和头部压缩，显著提升性能",
        ],
        lessons: [
          {
            id: "nginx-w6-1",
            title: "SSL/TLS 基础与证书管理",
            detail: "理解 TLS 握手流程，掌握证书申请（Let's Encrypt）、配置与自动续期方案。",
            keyPoints: [
              "使用 Let's Encrypt + Certbot 免费获取可信 SSL 证书并自动续期。",
              "ssl_certificate 应包含完整证书链（服务器证书 + 中间证书）。",
              "ssl_certificate_key 私钥文件权限应严格限制为 600。",
            ],
            resources: [
              { title: "HTTPS 配置", url: "https://nginx.org/en/docs/http/configuring_https_servers.html" },
              { title: "Let's Encrypt 指南", url: "https://letsencrypt.org/getting-started/" },
              { title: "Certbot 文档", url: "https://certbot.eff.org/instructions" },
            ],
          },
          {
            id: "nginx-w6-2",
            title: "TLS 协议与安全加固",
            detail: "优化 TLS 协议版本、密码套件与安全头部配置，达到 A+ 安全评级。",
            keyPoints: [
              "禁用 TLSv1.0/1.1，仅允许 TLSv1.2 和 TLSv1.3 协议。",
              "ssl_prefer_server_ciphers on 优先使用服务端密码套件顺序。",
              "配置 HSTS、OCSP Stapling 和 ssl_session_cache 提升安全性与性能。",
            ],
            resources: [
              { title: "SSL 模块指令", url: "https://nginx.org/en/docs/http/ngx_http_ssl_module.html" },
              { title: "Mozilla SSL 配置生成器", url: "https://ssl-config.mozilla.org/" },
            ],
          },
          {
            id: "nginx-w6-3",
            title: "HTTP/2 配置",
            detail: "启用 HTTP/2 协议，利用多路复用和头部压缩提升 Web 应用传输效率。",
            keyPoints: [
              "在 listen 指令中添加 http2 参数即可启用 HTTP/2 支持。",
              "HTTP/2 多路复用允许在单连接上并行传输多个请求/响应。",
              "HTTP/2 的 Server Push 可预推送关联资源减少往返延迟。",
            ],
            resources: [
              { title: "HTTP/2 模块", url: "https://nginx.org/en/docs/http/ngx_http_v2_module.html" },
              { title: "HTTP/2 配置指南", url: "https://docs.nginx.com/nginx/admin-guide/web-server/http2/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "nginx-s3",
    title: "阶段三：高级配置",
    duration: "第 7-9 周",
    goal: "掌握 location 匹配规则、rewrite 重写、限流访问控制、缓存策略与 WebSocket 代理。",
    weeks: [
      {
        id: "nginx-w7",
        title: "第 7 周：Location 匹配与 Rewrite",
        summary: "深入理解 location 匹配优先级规则与 rewrite 重写/重定向机制。",
        overview: "location 和 rewrite 是 Nginx 配置中最复杂也最强大的部分。本周系统学习匹配优先级、正则捕获与重写指令，掌握 URL 路由的核心能力。",
        keyPoints: [
          "location 匹配优先级：精确(=) > 前缀(^~) > 正则(~/~*) > 普通前缀",
          "rewrite 指令使用 PCRE 正则表达式执行 URL 重写",
          "return 指令比 rewrite 更高效，适合简单的重定向场景",
        ],
        lessons: [
          {
            id: "nginx-w7-1",
            title: "location 匹配规则",
            detail: "掌握 location 的精确匹配、前缀匹配、正则匹配的优先级顺序与调试方法。",
            keyPoints: [
              "= 精确匹配优先级最高，命中后立即停止搜索。",
              "^~ 前缀匹配命中后跳过正则匹配阶段。",
              "正则匹配（~ 区分大小写、~* 不区分）按配置文件中的顺序首次命中。",
            ],
            resources: [
              { title: "location 指令", url: "https://nginx.org/en/docs/http/ngx_http_core_module.html#location" },
              { title: "请求处理流程", url: "https://nginx.org/en/docs/http/request_processing.html" },
              { title: "location 匹配详解", url: "https://docs.nginx.com/nginx/admin-guide/web-server/web-server/#locations" },
            ],
          },
          {
            id: "nginx-w7-2",
            title: "rewrite 与重定向",
            detail: "使用 rewrite 指令实现 URL 重写与外部重定向，掌握 flag 标志（last/break/redirect/permanent）的区别。",
            keyPoints: [
              "rewrite regex replacement [flag]：用正则匹配并替换 URI。",
              "last 重新发起 location 匹配，break 在当前 location 继续处理。",
              "redirect（302）和 permanent（301）触发外部重定向返回给客户端。",
            ],
            resources: [
              { title: "rewrite 模块", url: "https://nginx.org/en/docs/http/ngx_http_rewrite_module.html" },
              { title: "rewrite 指南", url: "https://www.nginx.com/blog/creating-nginx-rewrite-rules/" },
            ],
          },
          {
            id: "nginx-w7-3",
            title: "try_files 与错误处理",
            detail: "使用 try_files 实现优雅的文件查找回退逻辑，配置自定义错误页面与内部重定向。",
            keyPoints: [
              "try_files 按顺序检查文件是否存在，最后一个参数作为回退处理。",
              "SPA 应用常用 try_files $uri $uri/ /index.html 实现前端路由支持。",
              "error_page 指令定义自定义错误页面，配合 internal 限制仅内部访问。",
            ],
            resources: [
              { title: "try_files 指令", url: "https://nginx.org/en/docs/http/ngx_http_core_module.html#try_files" },
              { title: "错误页面配置", url: "https://nginx.org/en/docs/http/ngx_http_core_module.html#error_page" },
            ],
          },
        ],
      },
      {
        id: "nginx-w8",
        title: "第 8 周：限流与访问控制",
        summary: "配置请求限流、连接限制与访问控制策略保护后端服务。",
        overview: "面对恶意流量和突发请求，限流与访问控制是保护后端的第一道防线。本周学习 Nginx 的限速模块、IP 黑白名单与基于地理位置的访问控制。",
        keyPoints: [
          "limit_req 基于漏桶算法限制请求速率，burst 允许突发请求",
          "limit_conn 限制单 IP 或单 server 的并发连接数",
          "allow/deny 指令配合 geo 模块实现灵活的访问控制",
        ],
        lessons: [
          {
            id: "nginx-w8-1",
            title: "请求限速（limit_req）",
            detail: "使用 limit_req_zone 和 limit_req 基于漏桶算法实现请求速率限制，防御暴力攻击和 API 滥用。",
            keyPoints: [
              "limit_req_zone 定义共享内存区、键（通常是 $binary_remote_addr）和速率。",
              "burst 参数设置突发请求队列长度，nodelay 立即处理不排队。",
              "可按 location 粒度设置不同限速策略，如 API 和静态资源分别限速。",
            ],
            resources: [
              { title: "limit_req 模块", url: "https://nginx.org/en/docs/http/ngx_http_limit_req_module.html" },
              { title: "限速指南", url: "https://www.nginx.com/blog/rate-limiting-nginx/" },
            ],
          },
          {
            id: "nginx-w8-2",
            title: "连接限制与带宽控制",
            detail: "使用 limit_conn 限制并发连接数，使用 limit_rate 控制响应传输速率。",
            keyPoints: [
              "limit_conn_zone 定义共享内存区，limit_conn 设置最大并发连接数。",
              "limit_rate 限制每个连接的响应传输速率（字节/秒）。",
              "limit_rate_after 在传输指定大小后开始限速，兼顾首屏体验。",
            ],
            resources: [
              { title: "limit_conn 模块", url: "https://nginx.org/en/docs/http/ngx_http_limit_conn_module.html" },
              { title: "带宽限制", url: "https://nginx.org/en/docs/http/ngx_http_core_module.html#limit_rate" },
            ],
          },
          {
            id: "nginx-w8-3",
            title: "IP 黑白名单与 Geo 模块",
            detail: "使用 allow/deny 指令和 geo 模块实现基于 IP 和地理位置的访问控制策略。",
            keyPoints: [
              "allow/deny 按顺序匹配，规则设计需注意默认拒绝原则。",
              "geo 模块可根据客户端 IP 设置变量，结合 if 实现条件访问控制。",
              "geoip2 模块支持基于 MaxMind 数据库的精确地理位置判断。",
            ],
            resources: [
              { title: "access 模块", url: "https://nginx.org/en/docs/http/ngx_http_access_module.html" },
              { title: "geo 模块", url: "https://nginx.org/en/docs/http/ngx_http_geo_module.html" },
              { title: "geoip 模块", url: "https://nginx.org/en/docs/http/ngx_http_geoip_module.html" },
            ],
          },
        ],
      },
      {
        id: "nginx-w9",
        title: "第 9 周：缓存与 WebSocket",
        summary: "配置代理缓存提升性能，实现 WebSocket 长连接代理。",
        overview: "缓存是性能优化的利器，WebSocket 是实时通信的基础。本周学习 Nginx 的代理缓存机制与 WebSocket 代理配置，提升应用性能与实时交互能力。",
        keyPoints: [
          "proxy_cache 使用磁盘缓存后端响应，减少后端压力",
          "缓存键和过期策略直接影响缓存命中率",
          "WebSocket 代理需设置 Upgrade 和 Connection 头部",
        ],
        lessons: [
          {
            id: "nginx-w9-1",
            title: "代理缓存配置",
            detail: "使用 proxy_cache_path 和 proxy_cache 指令配置磁盘缓存，减轻后端压力并加速响应。",
            keyPoints: [
              "proxy_cache_path 定义缓存路径、大小、层级和共享内存区。",
              "proxy_cache_key 决定缓存的唯一标识，通常包含 $scheme$host$request_uri。",
              "proxy_cache_valid 设置不同状态码的缓存时间。",
            ],
            resources: [
              { title: "代理缓存指南", url: "https://docs.nginx.com/nginx/admin-guide/content-cache/content-caching/" },
              { title: "proxy_cache 指令", url: "https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache" },
            ],
          },
          {
            id: "nginx-w9-2",
            title: "缓存策略与失效控制",
            detail: "掌握缓存刷新、绕过策略和分片缓存，实现精细化的缓存管理。",
            keyPoints: [
              "proxy_cache_bypass 和 proxy_no_cache 控制缓存的绕过与跳过。",
              "proxy_cache_purge（Plus 版）或第三方模块支持主动缓存清除。",
              "stale-while-revalidate 策略在缓存过期时先返回旧数据再异步更新。",
            ],
            resources: [
              { title: "缓存策略", url: "https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache_bypass" },
              { title: "缓存清除", url: "https://docs.nginx.com/nginx/admin-guide/content-cache/content-caching/#purging-content-from-the-cache" },
            ],
          },
          {
            id: "nginx-w9-3",
            title: "WebSocket 代理",
            detail: "配置 Nginx 反向代理 WebSocket 长连接，处理协议升级与超时设置。",
            keyPoints: [
              "WebSocket 通过 HTTP Upgrade 机制从 HTTP 协议升级为全双工连接。",
              "需设置 proxy_set_header Upgrade $http_upgrade 和 Connection 'upgrade'。",
              "proxy_read_timeout 控制空闲连接超时，默认 60s 可能需要增大。",
            ],
            resources: [
              { title: "WebSocket 代理", url: "https://nginx.org/en/docs/http/websocket.html" },
              { title: "WebSocket 配置指南", url: "https://docs.nginx.com/nginx/admin-guide/web-server/websocket/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "nginx-s4",
    title: "阶段四：生产实践",
    duration: "第 10-12 周",
    goal: "掌握高可用架构、性能调优、日志监控与 OpenResty/Lua 扩展，构建生产级 API 网关。",
    weeks: [
      {
        id: "nginx-w10",
        title: "第 10 周：高可用与性能调优",
        summary: "使用 Keepalived 实现 Nginx 高可用，系统调优 Nginx 性能参数。",
        overview: "单点 Nginx 是高可用架构的瓶颈。本周学习 Keepalived + VIP 实现 Nginx 主备切换，并从操作系统和 Nginx 层面进行全方位性能调优。",
        keyPoints: [
          "Keepalived 通过 VRRP 协议在主备 Nginx 间漂移 VIP 实现故障转移",
          "worker_processes auto 匹配 CPU 核数是性能调优的起点",
          "操作系统层面的文件描述符、TCP 参数调优同样关键",
        ],
        lessons: [
          {
            id: "nginx-w10-1",
            title: "Keepalived 高可用架构",
            detail: "使用 Keepalived 配合 VIP 实现 Nginx 主备自动切换，消除网关层单点故障。",
            keyPoints: [
              "VRRP（虚拟路由冗余协议）在主节点故障时将 VIP 漂移到备节点。",
              "配置健康检查脚本监测 Nginx 进程，故障时降低 VRRP 优先级触发切换。",
              "双主模式（互为主备）可提升 VIP 资源利用率。",
            ],
            resources: [
              { title: "Keepalived 官方文档", url: "https://www.keepalived.org/manpage.html" },
              { title: "高可用架构指南", url: "https://docs.nginx.com/nginx/admin-guide/high-availability/" },
            ],
          },
          {
            id: "nginx-w10-2",
            title: "Nginx 性能调优",
            detail: "从 Worker 进程、连接管理、缓冲区和文件 I/O 等维度系统优化 Nginx 性能。",
            keyPoints: [
              "worker_processes auto + worker_cpu_affinity 绑定 CPU 减少上下文切换。",
              "开启 sendfile、tcp_nopush 和 tcp_nodelay 优化文件传输效率。",
              "keepalive_timeout 和 keepalive_requests 控制长连接复用策略。",
            ],
            resources: [
              { title: "性能调优指南", url: "https://www.nginx.com/blog/tuning-nginx/" },
              { title: "核心模块指令", url: "https://nginx.org/en/docs/ngx_core_module.html" },
            ],
          },
          {
            id: "nginx-w10-3",
            title: "操作系统级调优",
            detail: "调整 Linux 内核参数和文件描述符限制，为 Nginx 高并发提供系统层面支撑。",
            keyPoints: [
              "调整 worker_rlimit_nofile 和 ulimit -n 提高文件描述符上限。",
              "优化 net.core.somaxconn 和 net.ipv4.tcp_tw_reuse 等内核 TCP 参数。",
              "使用 sysctl 调整 net.core.netdev_max_backlog 提升网络收包能力。",
            ],
            resources: [
              { title: "Linux 内核调优", url: "https://www.nginx.com/blog/tuning-nginx/#tuning-your-linux-configuration" },
              { title: "worker_rlimit_nofile", url: "https://nginx.org/en/docs/ngx_core_module.html#worker_rlimit_nofile" },
            ],
          },
        ],
      },
      {
        id: "nginx-w11",
        title: "第 11 周：日志分析与监控",
        summary: "构建 Nginx 日志分析与实时监控体系，提升运维可观测性。",
        overview: "日志和监控是生产环境运维的眼睛。本周学习自定义日志格式、日志分析方案以及 Prometheus + Grafana 实时监控 Nginx 的方法。",
        keyPoints: [
          "access_log 和 error_log 是排查问题与分析流量的核心数据源",
          "自定义 log_format 记录请求耗时、上游响应时间等关键指标",
          "stub_status 和 Prometheus exporter 提供实时监控指标",
        ],
        lessons: [
          {
            id: "nginx-w11-1",
            title: "日志配置与格式",
            detail: "自定义 access_log 格式，配置条件日志、日志缓冲与日志轮转策略。",
            keyPoints: [
              "log_format 自定义变量组合，常加 $request_time 和 $upstream_response_time。",
              "条件日志（map + if）可过滤健康检查等无用日志。",
              "使用 logrotate 或 access_log 的 buffer/flush 参数控制日志写入性能。",
            ],
            resources: [
              { title: "日志模块", url: "https://nginx.org/en/docs/http/ngx_http_log_module.html" },
              { title: "日志配置指南", url: "https://docs.nginx.com/nginx/admin-guide/monitoring/logging/" },
            ],
          },
          {
            id: "nginx-w11-2",
            title: "日志分析与可视化",
            detail: "使用 GoAccess、ELK 或 Loki 构建 Nginx 日志分析方案，从日志中提取运营洞察。",
            keyPoints: [
              "GoAccess 可实时解析 Nginx 日志并生成终端或 HTML 报告。",
              "ELK（Elasticsearch + Logstash + Kibana）适合大规模日志检索与分析。",
              "JSON 格式日志便于结构化解析，提升检索与告警效率。",
            ],
            resources: [
              { title: "GoAccess 日志分析", url: "https://goaccess.io/" },
              { title: "Nginx JSON 日志", url: "https://docs.nginx.com/nginx/admin-guide/monitoring/logging/#setting-up-the-access-log" },
            ],
          },
          {
            id: "nginx-w11-3",
            title: "实时监控与告警",
            detail: "使用 stub_status 和 Prometheus Nginx Exporter 采集指标，搭建 Grafana 监控面板。",
            keyPoints: [
              "stub_status 模块暴露活跃连接数、请求计数等基础指标。",
              "nginx-prometheus-exporter 将 stub_status 数据转为 Prometheus 格式。",
              "关键监控指标：请求速率、错误率、上游响应时间、活跃连接数。",
            ],
            resources: [
              { title: "stub_status 模块", url: "https://nginx.org/en/docs/http/ngx_http_stub_status_module.html" },
              { title: "Nginx Exporter", url: "https://github.com/nginxinc/nginx-prometheus-exporter" },
              { title: "Grafana Nginx 面板", url: "https://grafana.com/grafana/dashboards/" },
            ],
          },
        ],
      },
      {
        id: "nginx-w12",
        title: "第 12 周：OpenResty 与 API 网关",
        summary: "使用 OpenResty/Lua 扩展 Nginx 能力，构建生产级 API 网关。",
        overview: "OpenResty 将 Lua 嵌入 Nginx 事件循环，赋予其可编程能力。本周学习 Lua 脚本扩展、API 网关核心功能实现，以及 Kong/APISIX 等开源方案的架构与实践。",
        keyPoints: [
          "OpenResty 在 Nginx 请求处理的各个阶段嵌入 Lua 代码",
          "lua-resty-* 库生态提供 Redis、MySQL、JWT 等开箱即用的能力",
          "Kong 和 APISIX 是基于 OpenResty 的主流 API 网关方案",
        ],
        lessons: [
          {
            id: "nginx-w12-1",
            title: "OpenResty 基础与 Lua 脚本",
            detail: "安装 OpenResty 环境，掌握 content_by_lua、access_by_lua 等指令在请求处理各阶段嵌入 Lua 逻辑。",
            keyPoints: [
              "OpenResty 将 LuaJIT 嵌入 Nginx Worker，在事件循环中执行 Lua 代码。",
              "请求阶段包括 rewrite、access、content、log 等，可分别挂载 Lua 逻辑。",
              "cosocket API 提供非阻塞的 TCP/UDP 通信，不阻塞 Worker 进程。",
            ],
            resources: [
              { title: "OpenResty 官方文档", url: "https://openresty.org/en/getting-started.html" },
              { title: "lua-nginx-module", url: "https://github.com/openresty/lua-nginx-module" },
              { title: "OpenResty 最佳实践", url: "https://moonbingbing.gitbooks.io/openresty-best-practices/content/" },
            ],
          },
          {
            id: "nginx-w12-2",
            title: "API 网关核心功能",
            detail: "基于 Nginx/OpenResty 实现 API 网关的核心功能：路由分发、认证鉴权、限流熔断与请求转换。",
            keyPoints: [
              "路由分发：基于 URI、Header、参数等条件将请求路由到不同后端。",
              "认证鉴权：使用 Lua 实现 JWT 验证、API Key 校验和 OAuth2 代理。",
              "限流熔断：结合 lua-resty-limit-traffic 实现精细化流量控制。",
            ],
            resources: [
              { title: "lua-resty-limit-traffic", url: "https://github.com/openresty/lua-resty-limit-traffic" },
              { title: "lua-resty-jwt", url: "https://github.com/SkyLothar/lua-resty-jwt" },
            ],
          },
          {
            id: "nginx-w12-3",
            title: "Kong 与 APISIX 实践",
            detail: "对比 Kong 和 Apache APISIX 两大开源 API 网关的架构特点、插件体系与生产部署方案。",
            keyPoints: [
              "Kong 基于 OpenResty，插件生态成熟，使用 PostgreSQL/Cassandra 存储配置。",
              "APISIX 基于 OpenResty + etcd，支持动态路由和热加载插件。",
              "两者均支持限流、认证、可观测性等核心网关插件，选型需考虑团队技术栈。",
            ],
            resources: [
              { title: "Kong 官方文档", url: "https://docs.konghq.com/" },
              { title: "Apache APISIX", url: "https://apisix.apache.org/docs/apisix/getting-started/" },
              { title: "API 网关选型对比", url: "https://www.nginx.com/learn/api-gateway/" },
            ],
          },
        ],
      },
    ],
  },
]

export const nginxKnowledgeCards: KnowledgeCard[] = [
  {
    id: "nginx-card-architecture",
    title: "Master/Worker 架构",
    summary: "Nginx 的高性能源于精巧的进程模型和事件驱动设计。",
    points: [
      "Master 进程管理配置和 Worker 生命周期，Worker 独立处理请求。",
      "基于 epoll/kqueue 的事件循环使单 Worker 可处理数千并发连接。",
      "信号机制实现配置热重载和二进制热升级，无需中断服务。",
    ],
    practice: "启动 Nginx 后用 ps 查看进程树，发送 HUP 信号观察配置热重载过程。",
  },
  {
    id: "nginx-card-location",
    title: "Location 匹配规则",
    summary: "location 匹配优先级是 Nginx 配置的核心难点。",
    points: [
      "匹配优先级：精确(=) > 前缀(^~) > 正则(~/~*) > 普通前缀。",
      "正则匹配按配置文件中出现的顺序，首次命中即停止。",
      "使用 nginx -T 查看完整配置，结合 error_log debug 调试匹配过程。",
    ],
    practice: "编写包含 =、^~、~ 和普通前缀的多个 location 块，用 curl 测试匹配结果。",
  },
  {
    id: "nginx-card-proxy",
    title: "反向代理要点",
    summary: "反向代理是 Nginx 最核心的生产应用场景。",
    points: [
      "proxy_pass 带 URI 时替换匹配前缀，不带时透传原始 URI。",
      "必须设置 X-Real-IP 和 X-Forwarded-For 传递客户端真实 IP。",
      "合理配置超时参数防止后端慢响应拖垮代理层。",
    ],
    practice: "配置 Nginx 代理到本地 Node.js 应用，验证请求头传递和超时行为。",
  },
  {
    id: "nginx-card-loadbalance",
    title: "负载均衡策略",
    summary: "选择合适的负载均衡算法是高可用架构的关键。",
    points: [
      "轮询适合无状态服务，ip_hash 适合需要会话保持的场景。",
      "least_conn 适合请求处理时间差异大的后端集群。",
      "配合 max_fails 和 fail_timeout 实现被动健康检查与故障摘除。",
    ],
    practice: "配置 upstream 集群，分别测试轮询和 ip_hash 算法的请求分发效果。",
  },
  {
    id: "nginx-card-ssl",
    title: "HTTPS 安全配置",
    summary: "正确的 TLS 配置是 Web 安全的基础。",
    points: [
      "使用 Let's Encrypt 免费获取证书并配置自动续期。",
      "禁用 TLSv1.0/1.1，优先使用 TLSv1.3 和前向保密密码套件。",
      "启用 HSTS 和 OCSP Stapling 进一步提升安全性和性能。",
    ],
    practice: "为测试域名配置 HTTPS，使用 SSL Labs 测试并优化到 A+ 评级。",
  },
  {
    id: "nginx-card-ratelimit",
    title: "限流与防护",
    summary: "限流是保护后端服务免受恶意流量冲击的第一道防线。",
    points: [
      "limit_req 基于漏桶算法限制请求速率，burst 参数允许突发流量。",
      "limit_conn 限制并发连接数，防止单客户端耗尽资源。",
      "结合 geo 模块实现基于 IP 的差异化限速策略。",
    ],
    practice: "为 API 接口配置 limit_req 限速，使用 ab 或 wrk 压测验证限流效果。",
  },
  {
    id: "nginx-card-cache",
    title: "代理缓存机制",
    summary: "合理使用代理缓存可大幅减轻后端压力并加速响应。",
    points: [
      "proxy_cache_path 定义缓存路径和大小，proxy_cache_key 控制缓存标识。",
      "proxy_cache_valid 按状态码设置不同的缓存过期时间。",
      "添加 X-Cache-Status 头部便于调试缓存命中情况。",
    ],
    practice: "配置代理缓存，通过响应头 X-Cache-Status 验证 HIT/MISS/EXPIRED 状态。",
  },
  {
    id: "nginx-card-openresty",
    title: "OpenResty 扩展",
    summary: "OpenResty 赋予 Nginx 可编程能力，是构建 API 网关的基础。",
    points: [
      "Lua 代码在 Nginx 事件循环中执行，不阻塞 Worker 进程。",
      "lua-resty-* 库提供 Redis、MySQL、JWT 等非阻塞客户端。",
      "Kong 和 APISIX 是基于 OpenResty 的成熟 API 网关方案。",
    ],
    practice: "使用 OpenResty 编写一个简单的 API 网关，实现 JWT 验证和请求限流。",
  },
]

export const nginxExamQuestions: QuizQuestion[] = [
  { id: "nginx-q1", question: "Nginx 采用什么样的进程模型？", options: ["多线程模型", "Master/Worker 进程模型", "单进程单线程模型", "Actor 模型"], answer: 1, rationale: "Nginx 使用 Master 进程管理配置和 Worker 生命周期，Worker 进程基于事件驱动独立处理请求。" },
  { id: "nginx-q2", question: "Nginx 高并发能力的核心机制是？", options: ["多线程并发", "基于 epoll/kqueue 的事件驱动非阻塞 I/O", "多进程 fork", "协程调度"], answer: 1, rationale: "Nginx Worker 使用 epoll/kqueue 事件循环实现非阻塞 I/O，单进程即可处理数千并发连接。" },
  { id: "nginx-q3", question: "nginx -s reload 的作用是？", options: ["重启 Nginx 进程", "平滑重载配置，不中断正在处理的连接", "清空缓存", "回退到上一个配置"], answer: 1, rationale: "reload 向 Master 发送 HUP 信号，Master 启动新 Worker 加载新配置，旧 Worker 处理完当前请求后退出。" },
  { id: "nginx-q4", question: "root 指令和 alias 指令的区别是？", options: ["完全相同", "root 拼接 URI 路径，alias 替换匹配前缀", "alias 更高效", "root 只能在 http 块使用"], answer: 1, rationale: "root 将 URI 拼接到指定路径后，alias 则用指定路径替换 location 匹配的前缀部分。" },
  { id: "nginx-q5", question: "proxy_pass 后带 URI（如 proxy_pass http://backend/）的效果是？", options: ["透传原始 URI", "替换 location 匹配的前缀部分", "丢弃查询参数", "添加额外前缀"], answer: 1, rationale: "proxy_pass 后带 URI 时，Nginx 会将 location 匹配的前缀替换为 proxy_pass 中指定的 URI。" },
  { id: "nginx-q6", question: "为什么需要设置 proxy_set_header X-Real-IP？", options: ["提升性能", "将客户端真实 IP 传递给后端，因为后端默认只看到 Nginx 的 IP", "启用负载均衡", "防止缓存"], answer: 1, rationale: "反向代理后，后端直接看到的是 Nginx 的 IP 而非客户端 IP，需通过自定义头部传递。" },
  { id: "nginx-q7", question: "upstream 中 ip_hash 算法的作用是？", options: ["加密客户端 IP", "基于客户端 IP 哈希分配到固定后端，实现会话粘滞", "限制客户端 IP", "随机分配请求"], answer: 1, rationale: "ip_hash 根据客户端 IP 的哈希值始终将请求分配到同一后端服务器，适合需要会话保持的场景。" },
  { id: "nginx-q8", question: "SSL/TLS 配置中应禁用哪些协议版本？", options: ["TLSv1.3", "TLSv1.2", "TLSv1.0 和 TLSv1.1", "所有 TLS 版本"], answer: 2, rationale: "TLSv1.0 和 TLSv1.1 存在已知安全漏洞，应只启用 TLSv1.2 和 TLSv1.3。" },
  { id: "nginx-q9", question: "location 匹配中，优先级最高的修饰符是？", options: ["~ 正则匹配", "^~ 前缀匹配", "= 精确匹配", "无修饰符的前缀匹配"], answer: 2, rationale: "= 精确匹配优先级最高，精确命中后立即停止搜索其他 location。" },
  { id: "nginx-q10", question: "rewrite 指令中 last 和 break 标志的区别是？", options: ["完全相同", "last 重新匹配 location，break 在当前 location 继续处理", "break 退出 Nginx", "last 返回客户端重定向"], answer: 1, rationale: "last 会用重写后的 URI 重新发起 location 匹配，break 则在当前 location 中继续执行后续指令。" },
  { id: "nginx-q11", question: "try_files $uri $uri/ /index.html 的含义是？", options: ["返回 404", "依次查找文件、目录，都不存在则回退到 /index.html", "重定向到首页", "缓存所有文件"], answer: 1, rationale: "try_files 按顺序检查 URI 对应的文件和目录是否存在，均不存在时使用最后一个参数作为内部重定向。" },
  { id: "nginx-q12", question: "limit_req 指令中 burst 参数的作用是？", options: ["限制请求体大小", "设置突发请求队列长度，允许短时超额请求排队等待", "限制带宽", "设置超时时间"], answer: 1, rationale: "burst 定义了超过限速后允许排队等待的请求数量，配合 nodelay 可立即处理不排队。" },
  { id: "nginx-q13", question: "配置 WebSocket 代理时，必须设置的头部是？", options: ["Content-Type", "Upgrade 和 Connection", "Accept-Encoding", "X-Forwarded-For"], answer: 1, rationale: "WebSocket 通过 HTTP Upgrade 机制升级协议，必须传递 Upgrade 和 Connection 头部给后端。" },
  { id: "nginx-q14", question: "proxy_cache_key 的作用是？", options: ["加密缓存内容", "定义缓存的唯一标识，决定缓存是否命中", "设置缓存大小", "控制缓存过期"], answer: 1, rationale: "proxy_cache_key 决定请求的缓存标识，相同 key 的请求共享同一份缓存内容。" },
  { id: "nginx-q15", question: "Keepalived 实现 Nginx 高可用的核心机制是？", options: ["DNS 轮询", "通过 VRRP 协议在主备间漂移 VIP", "负载均衡", "共享文件系统"], answer: 1, rationale: "Keepalived 使用 VRRP 协议管理虚拟 IP（VIP），主节点故障时自动将 VIP 漂移到备节点。" },
  { id: "nginx-q16", question: "sendfile 指令开启后的效果是？", options: ["发送邮件", "绕过用户空间缓冲区直接在内核空间传输文件，提升性能", "限制文件上传", "加密文件传输"], answer: 1, rationale: "sendfile 利用内核的 sendfile() 系统调用，避免数据在用户空间和内核空间之间拷贝。" },
  { id: "nginx-q17", question: "stub_status 模块的作用是？", options: ["加速静态文件", "暴露 Nginx 的活跃连接数、请求计数等基础运行指标", "限制并发连接", "管理 SSL 证书"], answer: 1, rationale: "stub_status 模块提供一个简单的状态页面，显示活跃连接、已接受连接、已处理请求等指标。" },
  { id: "nginx-q18", question: "OpenResty 的核心价值是？", options: ["替代 Apache", "将 LuaJIT 嵌入 Nginx 事件循环，实现高性能可编程网关", "提供 GUI 管理界面", "自动生成配置"], answer: 1, rationale: "OpenResty 在 Nginx 的请求处理阶段嵌入 Lua 代码，利用非阻塞 cosocket 实现高性能可编程逻辑。" },
  { id: "nginx-q19", question: "Nginx 中 worker_connections 参数的含义是？", options: ["Worker 进程数量", "单个 Worker 进程能同时处理的最大连接数", "最大 TCP 端口数", "日志缓冲大小"], answer: 1, rationale: "worker_connections 设置每个 Worker 进程可同时打开的最大连接数，总并发 = worker_processes × worker_connections。" },
  { id: "nginx-q20", question: "生产环境中 Nginx 日志最佳实践是？", options: ["关闭所有日志", "使用 JSON 格式日志并集中收集分析", "只记录错误日志", "日志存储在容器内部"], answer: 1, rationale: "JSON 格式日志便于结构化解析和检索，配合 ELK 或 Loki 集中收集分析是生产标准实践。" },
]

export const nginxRoadmap: RoadmapDefinition = {
  id: "nginx",
  label: "Nginx 网关",
  title: "Nginx 网关学习路线",
  durationLabel: "12 周·36 课时",
  description: "从 Web 服务器基础到生产级 API 网关，系统掌握 Nginx 配置、反向代理、负载均衡、安全加固、性能调优与 OpenResty 扩展，构建企业级网关能力。",
  heroBadge: "反向代理 · 负载均衡 · 安全加固 · API 网关",
  stages: nginxStages,
  knowledgeCards: nginxKnowledgeCards,
  examQuestions: nginxExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "开始 Nginx 之旅，先理解 Web 服务器原理与 Nginx 架构。"
    if (percent < 25) return "继续掌握配置语法基础和静态文件服务。"
    if (percent < 50) return "深入反向代理与负载均衡，配置 SSL/TLS 加密。"
    if (percent < 75) return "学习 location 匹配、限流与缓存等高级配置。"
    if (percent < 100) return "完善高可用架构、性能调优与 OpenResty 扩展。"
    return "恭喜完成！你已具备企业级 Nginx 网关实践能力，继续深入 API 网关与服务网格！"
  },
  resourceGuide: {
    environment: "安装 Nginx 或 OpenResty，准备 VS Code + Nginx 语法高亮扩展，配合 curl 和浏览器调试。",
    fallbackKeyPoints: [
      "Master/Worker 进程模型与事件驱动机制是高并发的基础",
      "location 匹配优先级：精确(=) > 前缀(^~) > 正则 > 普通前缀",
      "proxy_pass 带 URI 与不带 URI 的路径拼接规则不同",
      "limit_req 基于漏桶算法限速，burst 允许突发流量",
      "生产环境必须配置 HTTPS、日志轮转和健康检查",
    ],
    handsOnSteps: [
      "安装 Nginx 并配置多个虚拟主机提供静态文件服务",
      "配置反向代理和 upstream 负载均衡，验证请求分发",
      "申请 Let's Encrypt 证书并启用 HTTPS 和 HTTP/2",
      "配置 limit_req 限速和代理缓存，使用压测工具验证效果",
      "搭建 Keepalived + Nginx 主备高可用架构",
    ],
    selfChecks: [
      "能否解释 Nginx 的 Master/Worker 进程模型和事件驱动机制？",
      "是否掌握 location 匹配优先级和 proxy_pass URI 拼接规则？",
      "SSL/TLS 配置是否达到安全基线（禁用旧协议、启用 HSTS）？",
      "能否配置限流和缓存策略保护后端服务？",
      "是否理解 OpenResty 的架构和 API 网关的核心功能？",
    ],
    extensions: [
      "学习 Kong 或 APISIX 构建企业级 API 网关",
      "探索 Envoy Proxy 和 Service Mesh 架构",
      "研究 Nginx Unit 应用服务器和 njs 脚本模块",
      "深入学习 HTTP/3（QUIC）协议与 Nginx QUIC 分支",
    ],
    lessonQuizAdvice: "每周完成配置实操后做测验，重点理解指令语义和匹配规则而非死记配置模板。",
  },
}
