import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const networkProtocolStages: Stage[] = [
  {
    id: "np-s1",
    title: "阶段一：网络基础",
    duration: "第 1-3 周",
    goal: "理解 OSI/TCP-IP 网络模型，掌握以太网、ARP、IP 协议与子网划分，能使用 ICMP 进行基本网络诊断。",
    weeks: [
      {
        id: "np-w1",
        title: "第 1 周：网络分层模型",
        summary: "理解 OSI 七层模型与 TCP/IP 四层模型，掌握数据封装与解封装流程。",
        overview: "网络分层是理解协议栈的基石。本周从 OSI 参考模型出发，对比 TCP/IP 实际体系，理解各层职责与数据在协议栈中的封装传递过程。",
        keyPoints: [
          "OSI 七层模型是理论参考框架，TCP/IP 四层模型是实际工业标准",
          "每层为上层提供服务、向下层请求服务，层间通过接口通信",
          "数据从应用层向下逐层封装报头，接收端逐层解封还原",
        ],
        lessons: [
          {
            id: "np-w1-1",
            title: "OSI 七层模型",
            detail: "系统学习 OSI 参考模型的七层结构、各层职责与典型协议，理解分层设计的核心思想。",
            keyPoints: [
              "物理层定义电气信号，数据链路层负责帧传输与差错检测。",
              "网络层负责逻辑寻址与路由，传输层提供端到端可靠或不可靠传输。",
              "会话层、表示层、应用层在 TCP/IP 中合并为应用层处理。",
            ],
            resources: [
              { title: "OSI 模型 - MDN", url: "https://developer.mozilla.org/en-US/docs/Glossary/OSI_model" },
              { title: "RFC 1122 - 主机通信层要求", url: "https://www.rfc-editor.org/rfc/rfc1122" },
            ],
          },
          {
            id: "np-w1-2",
            title: "TCP/IP 四层模型",
            detail: "深入理解 TCP/IP 协议族的四层架构、各层核心协议及其与 OSI 模型的对应关系。",
            keyPoints: [
              "链路层对应 OSI 的物理层和数据链路层，处理硬件帧传输。",
              "网络层以 IP 为核心，提供无连接不可靠的数据报传输。",
              "传输层 TCP 提供可靠字节流，UDP 提供无连接数据报服务。",
            ],
            resources: [
              { title: "TCP/IP 协议族概览", url: "https://www.rfc-editor.org/rfc/rfc1180" },
              { title: "互联网协议 - MDN", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview" },
              { title: "RFC 791 - IP 协议", url: "https://www.rfc-editor.org/rfc/rfc791" },
            ],
          },
          {
            id: "np-w1-3",
            title: "数据封装与解封装",
            detail: "掌握数据在协议栈中的封装传递过程，理解 PDU 在各层的名称变化与报头结构。",
            keyPoints: [
              "应用层数据 → 传输层段/数据报 → 网络层数据报 → 链路层帧 → 物理层比特流。",
              "每层添加的报头包含该层协议控制信息（地址、校验、序号等）。",
              "使用 Wireshark 可以直观看到各层封装的报头与负载。",
            ],
            resources: [
              { title: "Wireshark 用户指南", url: "https://www.wireshark.org/docs/wsug_html_chunked/" },
              { title: "数据封装过程", url: "https://en.wikipedia.org/wiki/Encapsulation_(networking)" },
            ],
          },
        ],
      },
      {
        id: "np-w2",
        title: "第 2 周：数据链路层与 ARP",
        summary: "掌握以太网帧结构、MAC 地址机制与 ARP 协议的地址解析过程。",
        overview: "数据链路层负责相邻节点间的可靠帧传输。本周深入以太网帧格式、MAC 地址寻址机制，以及 ARP 协议如何将 IP 地址映射为 MAC 地址。",
        keyPoints: [
          "以太网是局域网最广泛的链路层协议，帧大小通常为 64-1518 字节",
          "MAC 地址是 48 位硬件地址，全球唯一标识网卡",
          "ARP 通过广播请求和单播应答完成 IP 到 MAC 的映射",
        ],
        lessons: [
          {
            id: "np-w2-1",
            title: "以太网协议与帧结构",
            detail: "学习以太网标准演进、帧格式各字段含义，理解 CSMA/CD 与现代交换式以太网的区别。",
            keyPoints: [
              "以太网帧包含目的 MAC、源 MAC、类型/长度、数据和 FCS 校验。",
              "MTU 默认 1500 字节，巨型帧可达 9000 字节以提升吞吐量。",
              "现代交换式以太网使用全双工通信，CSMA/CD 已不再必要。",
            ],
            resources: [
              { title: "IEEE 802.3 以太网标准", url: "https://standards.ieee.org/ieee/802.3/10422/" },
              { title: "以太网帧格式 - Wireshark", url: "https://wiki.wireshark.org/Ethernet" },
            ],
          },
          {
            id: "np-w2-2",
            title: "ARP 协议与地址解析",
            detail: "深入理解 ARP 请求/应答流程、ARP 缓存机制，以及 ARP 欺骗攻击的原理与防范。",
            keyPoints: [
              "ARP 请求以广播帧发送，目标主机以单播帧应答自己的 MAC 地址。",
              "ARP 缓存表存储 IP-MAC 映射，通常 TTL 为 20 分钟。",
              "ARP 欺骗通过伪造应答污染缓存，可用 DAI 或静态绑定防范。",
            ],
            resources: [
              { title: "RFC 826 - ARP 协议", url: "https://www.rfc-editor.org/rfc/rfc826" },
              { title: "ARP 协议详解 - Wireshark", url: "https://wiki.wireshark.org/AddressResolutionProtocol" },
              { title: "ARP 欺骗防护", url: "https://en.wikipedia.org/wiki/ARP_spoofing" },
            ],
          },
          {
            id: "np-w2-3",
            title: "IP 协议与数据报格式",
            detail: "学习 IPv4 数据报首部各字段含义，理解 TTL、分片重组与首部校验和机制。",
            keyPoints: [
              "IPv4 首部 20 字节固定 + 可选字段，包含源/目的 IP、TTL、协议号等。",
              "TTL 每经过一个路由器减 1，防止数据报在网络中无限循环。",
              "当数据报超过链路 MTU 时触发分片，由目的主机负责重组。",
            ],
            resources: [
              { title: "RFC 791 - IPv4 协议", url: "https://www.rfc-editor.org/rfc/rfc791" },
              { title: "IP 数据报 - Wireshark", url: "https://wiki.wireshark.org/Internet_Protocol" },
            ],
          },
        ],
      },
      {
        id: "np-w3",
        title: "第 3 周：IP 寻址与网络诊断",
        summary: "掌握子网划分与 CIDR 表示法，学习 ICMP 协议与基本网络诊断工具。",
        overview: "IP 寻址是网络通信的基础。本周学习子网划分计算、CIDR 无类域间路由，以及使用 ICMP 协议进行 ping、traceroute 等网络诊断。",
        keyPoints: [
          "CIDR 使用前缀长度替代传统分类地址，灵活划分子网",
          "ICMP 是网络层控制协议，用于差错报告和网络探测",
          "IPv6 采用 128 位地址，从根本上解决地址耗尽问题",
        ],
        lessons: [
          {
            id: "np-w3-1",
            title: "子网划分与 CIDR",
            detail: "掌握子网掩码计算、CIDR 无类域间路由表示法，以及 VLSM 可变长子网掩码的应用。",
            keyPoints: [
              "子网掩码的连续 1 表示网络位，连续 0 表示主机位。",
              "CIDR 表示法如 192.168.1.0/24，/24 表示前 24 位为网络前缀。",
              "VLSM 允许不同子网使用不同长度的掩码，提高地址利用率。",
            ],
            resources: [
              { title: "RFC 4632 - CIDR", url: "https://www.rfc-editor.org/rfc/rfc4632" },
              { title: "子网计算器", url: "https://www.subnet-calculator.com/" },
              { title: "IP 地址规划 - Cisco", url: "https://www.cisco.com/c/en/us/support/docs/ip/routing-information-protocol-rip/13788-3.html" },
            ],
          },
          {
            id: "np-w3-2",
            title: "ICMP 协议与网络诊断",
            detail: "学习 ICMP 报文类型与编码，掌握 ping、traceroute 等诊断工具的工作原理。",
            keyPoints: [
              "ICMP Echo Request/Reply（类型 8/0）是 ping 的基础。",
              "traceroute 通过递增 TTL 值触发 ICMP Time Exceeded 消息探测路径。",
              "ICMP Destination Unreachable 报告网络/主机/端口不可达等错误。",
            ],
            resources: [
              { title: "RFC 792 - ICMP 协议", url: "https://www.rfc-editor.org/rfc/rfc792" },
              { title: "ICMP - Wireshark", url: "https://wiki.wireshark.org/Internet_Control_Message_Protocol" },
            ],
          },
          {
            id: "np-w3-3",
            title: "IPv6 基础与过渡技术",
            detail: "学习 IPv6 地址格式、报头简化设计，以及双栈、隧道、NAT64 等 IPv4 到 IPv6 过渡方案。",
            keyPoints: [
              "IPv6 使用 128 位地址，格式为 8 组 16 进制数，支持零压缩表示。",
              "IPv6 报头固定 40 字节，取消校验和与分片字段，提升路由效率。",
              "过渡技术包括双栈部署、6in4/6to4 隧道和 NAT64/DNS64 转换。",
            ],
            resources: [
              { title: "RFC 8200 - IPv6 协议", url: "https://www.rfc-editor.org/rfc/rfc8200" },
              { title: "IPv6 入门 - Google", url: "https://developers.google.com/speed/ipv6" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "np-s2",
    title: "阶段二：传输层与应用层",
    duration: "第 4-6 周",
    goal: "深入理解 TCP/UDP 传输机制，掌握 DNS 解析原理与 HTTP 协议演进历程。",
    weeks: [
      {
        id: "np-w4",
        title: "第 4 周：TCP 协议深入",
        summary: "掌握 TCP 连接管理、流量控制与拥塞控制的核心机制。",
        overview: "TCP 是互联网最重要的传输协议。本周深入学习三次握手、四次挥手的状态机，滑动窗口流量控制，以及慢启动、拥塞避免等拥塞控制算法。",
        keyPoints: [
          "三次握手建立连接确保双方收发能力，四次挥手优雅关闭释放资源",
          "滑动窗口通过接收方通告窗口大小实现流量控制",
          "拥塞控制通过慢启动、拥塞避免、快重传、快恢复动态调整发送速率",
        ],
        lessons: [
          {
            id: "np-w4-1",
            title: "TCP 三次握手与四次挥手",
            detail: "深入理解 TCP 连接建立的三次握手与断开的四次挥手流程，掌握各阶段状态转换与异常处理。",
            keyPoints: [
              "三次握手：SYN → SYN-ACK → ACK，确认双方序列号和收发能力。",
              "四次挥手：FIN → ACK → FIN → ACK，TIME_WAIT 状态持续 2MSL。",
              "SYN Flood 攻击利用半连接队列耗尽资源，SYN Cookie 是有效防御。",
            ],
            resources: [
              { title: "RFC 9293 - TCP 协议", url: "https://www.rfc-editor.org/rfc/rfc9293" },
              { title: "TCP 连接状态 - Wireshark", url: "https://wiki.wireshark.org/TCP_Analyze_Sequence_Numbers" },
              { title: "TCP 状态机详解", url: "https://en.wikipedia.org/wiki/Transmission_Control_Protocol#Protocol_operation" },
            ],
          },
          {
            id: "np-w4-2",
            title: "TCP 流量控制与滑动窗口",
            detail: "学习 TCP 滑动窗口机制、零窗口探测与窗口缩放选项，理解发送方与接收方的协调过程。",
            keyPoints: [
              "接收方通过 ACK 中的窗口字段通告可接收数据量，发送方据此控制发送速率。",
              "零窗口时发送方启动持续计时器，定期发送窗口探测报文。",
              "窗口缩放选项（RFC 7323）将窗口扩大到 1GB，适应高带宽网络。",
            ],
            resources: [
              { title: "RFC 7323 - TCP 窗口缩放", url: "https://www.rfc-editor.org/rfc/rfc7323" },
              { title: "TCP 滑动窗口可视化", url: "https://www2.tkn.tu-berlin.de/teaching/rn/animations/gbn_sr/" },
            ],
          },
          {
            id: "np-w4-3",
            title: "TCP 拥塞控制算法",
            detail: "掌握慢启动、拥塞避免、快重传与快恢复机制，了解 BBR 等现代拥塞控制算法。",
            keyPoints: [
              "慢启动指数增长 cwnd，达到 ssthresh 后切换为拥塞避免线性增长。",
              "快重传收到 3 个重复 ACK 立即重传，快恢复将 ssthresh 减半继续传输。",
              "BBR 基于带宽和 RTT 建模，不依赖丢包信号，在长肥管道中表现优异。",
            ],
            resources: [
              { title: "RFC 5681 - TCP 拥塞控制", url: "https://www.rfc-editor.org/rfc/rfc5681" },
              { title: "BBR 拥塞控制 - Google", url: "https://research.google/pubs/bbr-congestion-based-congestion-control/" },
            ],
          },
        ],
      },
      {
        id: "np-w5",
        title: "第 5 周：UDP、QUIC 与 DNS",
        summary: "理解 UDP 特性与应用场景，学习 QUIC 协议设计与 DNS 域名解析原理。",
        overview: "UDP 以简单高效见长，QUIC 在 UDP 之上构建可靠传输。本周学习无连接传输的优势与局限，QUIC 如何解决队头阻塞，以及 DNS 递归/迭代查询机制。",
        keyPoints: [
          "UDP 无连接、无重传、无拥塞控制，适合实时音视频和游戏",
          "QUIC 基于 UDP 实现多路复用、0-RTT 握手和连接迁移",
          "DNS 采用分层命名空间，通过递归和迭代查询解析域名",
        ],
        lessons: [
          {
            id: "np-w5-1",
            title: "UDP 协议与应用场景",
            detail: "学习 UDP 报文格式、特点与典型应用，理解 UDP 在实时通信和物联网中的优势。",
            keyPoints: [
              "UDP 报头仅 8 字节（源端口、目的端口、长度、校验和），开销极小。",
              "无连接、无序号、无重传机制，应用层需自行处理可靠性。",
              "适合 DNS 查询、DHCP、实时音视频（RTP）和在线游戏等场景。",
            ],
            resources: [
              { title: "RFC 768 - UDP 协议", url: "https://www.rfc-editor.org/rfc/rfc768" },
              { title: "UDP - Wireshark", url: "https://wiki.wireshark.org/UDP" },
            ],
          },
          {
            id: "np-w5-2",
            title: "QUIC 协议原理",
            detail: "深入理解 QUIC 的设计目标、多路复用、连接迁移与 0-RTT 握手机制。",
            keyPoints: [
              "QUIC 在 UDP 之上实现可靠传输，解决 TCP 队头阻塞问题。",
              "连接 ID 替代四元组标识连接，支持网络切换时的连接迁移。",
              "0-RTT 握手允许已知服务器的首包就携带应用数据，降低延迟。",
            ],
            resources: [
              { title: "RFC 9000 - QUIC 协议", url: "https://www.rfc-editor.org/rfc/rfc9000" },
              { title: "QUIC 工作原理 - Cloudflare", url: "https://www.cloudflare.com/learning/performance/what-is-http3/" },
              { title: "RFC 9001 - QUIC TLS", url: "https://www.rfc-editor.org/rfc/rfc9001" },
            ],
          },
          {
            id: "np-w5-3",
            title: "DNS 原理与实践",
            detail: "掌握 DNS 层级结构、递归/迭代查询流程、记录类型与缓存机制，了解 DoH/DoT 加密 DNS。",
            keyPoints: [
              "DNS 采用树形命名空间：根域 → 顶级域 → 二级域 → 子域。",
              "递归查询由 DNS 解析器代客户端完成全部查询，迭代查询返回下一步引荐。",
              "常用记录类型：A（IPv4）、AAAA（IPv6）、CNAME（别名）、MX（邮件）、TXT（文本）。",
            ],
            resources: [
              { title: "RFC 1035 - DNS 实现与规范", url: "https://www.rfc-editor.org/rfc/rfc1035" },
              { title: "DNS 工作原理 - Cloudflare", url: "https://www.cloudflare.com/learning/dns/what-is-dns/" },
            ],
          },
        ],
      },
      {
        id: "np-w6",
        title: "第 6 周：HTTP 协议演进",
        summary: "从 HTTP/1.1 到 HTTP/3，系统学习 HTTP 协议的演进历程与核心改进。",
        overview: "HTTP 是 Web 的基石协议。本周系统学习 HTTP/1.1 的持久连接与管线化，HTTP/2 的二进制帧与多路复用，以及基于 QUIC 的 HTTP/3 如何解决队头阻塞。",
        keyPoints: [
          "HTTP/1.1 引入持久连接和管线化，但仍受队头阻塞限制",
          "HTTP/2 采用二进制帧和多路复用，单连接并行传输多个请求",
          "HTTP/3 基于 QUIC，在传输层彻底消除队头阻塞",
        ],
        lessons: [
          {
            id: "np-w6-1",
            title: "HTTP/1.1 协议详解",
            detail: "掌握 HTTP/1.1 请求响应模型、持久连接、管线化、分块传输编码与缓存控制机制。",
            keyPoints: [
              "Keep-Alive 持久连接复用 TCP 连接，减少握手开销。",
              "管线化允许连续发送请求不等响应，但要求严格按序返回。",
              "Cache-Control、ETag、Last-Modified 实现精细的缓存策略。",
            ],
            resources: [
              { title: "RFC 9110 - HTTP 语义", url: "https://www.rfc-editor.org/rfc/rfc9110" },
              { title: "HTTP/1.1 - MDN", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Connection_management_in_HTTP_1.x" },
            ],
          },
          {
            id: "np-w6-2",
            title: "HTTP/2 多路复用与服务端推送",
            detail: "学习 HTTP/2 的二进制帧层、流与多路复用、头部压缩（HPACK）及服务端推送机制。",
            keyPoints: [
              "二进制帧替代文本协议，帧分为 HEADERS、DATA、SETTINGS 等类型。",
              "多路复用在单个 TCP 连接上并行传输多个流，消除应用层队头阻塞。",
              "HPACK 静态/动态表压缩头部字段，大幅减少冗余数据传输。",
            ],
            resources: [
              { title: "RFC 9113 - HTTP/2", url: "https://www.rfc-editor.org/rfc/rfc9113" },
              { title: "HTTP/2 简介 - Google", url: "https://web.dev/articles/performance-http2" },
              { title: "HTTP/2 - MDN", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/HTTP2" },
            ],
          },
          {
            id: "np-w6-3",
            title: "HTTP/3 与 QUIC 集成",
            detail: "理解 HTTP/3 如何基于 QUIC 传输层消除 TCP 队头阻塞，以及 QPACK 头部压缩机制。",
            keyPoints: [
              "HTTP/3 使用 QUIC 替代 TCP，每个流独立传输，丢包不影响其他流。",
              "QPACK 替代 HPACK，适配 QUIC 的乱序交付特性。",
              "Alt-Svc 头部实现 HTTP/2 到 HTTP/3 的平滑升级协商。",
            ],
            resources: [
              { title: "RFC 9114 - HTTP/3", url: "https://www.rfc-editor.org/rfc/rfc9114" },
              { title: "HTTP/3 解读 - Cloudflare", url: "https://www.cloudflare.com/learning/performance/what-is-http3/" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "np-s3",
    title: "阶段三：安全与高级协议",
    duration: "第 7-9 周",
    goal: "掌握 TLS/SSL 加密通信原理，学习 WebSocket、gRPC、MQTT 等高级协议，理解 VPN 与隧道技术。",
    weeks: [
      {
        id: "np-w7",
        title: "第 7 周：TLS/SSL 安全通信",
        summary: "理解 TLS 握手流程、证书体系与 TLS 1.3 的安全改进。",
        overview: "TLS 是互联网安全通信的基石。本周深入学习 TLS 握手的密钥交换过程、X.509 证书与 PKI 信任链，以及 TLS 1.3 的简化握手与安全增强。",
        keyPoints: [
          "TLS 握手完成身份认证、密钥协商和加密套件选择",
          "X.509 证书通过 CA 签发建立信任链，浏览器验证证书有效性",
          "TLS 1.3 移除不安全算法，将握手从 2-RTT 缩短到 1-RTT",
        ],
        lessons: [
          {
            id: "np-w7-1",
            title: "TLS 握手与密钥交换",
            detail: "深入学习 TLS 1.2/1.3 握手流程，理解 RSA、ECDHE 密钥交换机制与前向保密的重要性。",
            keyPoints: [
              "TLS 1.2 握手：ClientHello → ServerHello → 证书 → 密钥交换 → Finished。",
              "ECDHE 密钥交换提供前向保密：即使长期私钥泄露，历史会话仍安全。",
              "握手完成后使用对称加密（AES-GCM/ChaCha20）进行数据传输。",
            ],
            resources: [
              { title: "RFC 8446 - TLS 1.3", url: "https://www.rfc-editor.org/rfc/rfc8446" },
              { title: "TLS 握手 - Cloudflare", url: "https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/" },
              { title: "TLS - MDN", url: "https://developer.mozilla.org/en-US/docs/Web/Security/Transport_Layer_Security" },
            ],
          },
          {
            id: "np-w7-2",
            title: "数字证书与 PKI 体系",
            detail: "学习 X.509 证书结构、CA 签发流程、证书链验证与 OCSP/CRL 吊销检查机制。",
            keyPoints: [
              "X.509 证书包含公钥、主体名、颁发者、有效期和 CA 数字签名。",
              "证书链：终端证书 → 中间 CA → 根 CA，浏览器内置受信根 CA 列表。",
              "Let's Encrypt 提供免费自动化证书，ACME 协议实现证书自动颁发与续期。",
            ],
            resources: [
              { title: "RFC 5280 - X.509 证书", url: "https://www.rfc-editor.org/rfc/rfc5280" },
              { title: "Let's Encrypt 文档", url: "https://letsencrypt.org/docs/" },
            ],
          },
          {
            id: "np-w7-3",
            title: "TLS 1.3 新特性与最佳实践",
            detail: "了解 TLS 1.3 的简化握手、0-RTT 恢复、废弃不安全算法等关键改进与部署建议。",
            keyPoints: [
              "TLS 1.3 握手仅需 1-RTT，0-RTT 恢复模式可首包发送数据。",
              "移除 RSA 密钥交换、CBC 模式和 SHA-1 等不安全算法。",
              "ESNI/ECH 加密 SNI 字段，防止中间人窥探访问的域名。",
            ],
            resources: [
              { title: "TLS 1.3 概览 - Cloudflare", url: "https://blog.cloudflare.com/rfc-8446-aka-tls-1-3/" },
              { title: "SSL 最佳实践 - SSL Labs", url: "https://github.com/ssllabs/research/wiki/SSL-and-TLS-Deployment-Best-Practices" },
            ],
          },
        ],
      },
      {
        id: "np-w8",
        title: "第 8 周：实时通信与 RPC 协议",
        summary: "学习 WebSocket 双向通信、gRPC 高效 RPC 与 MQTT 物联网协议。",
        overview: "现代应用需要多种通信模式。本周学习 WebSocket 的全双工实时通信、gRPC 基于 HTTP/2 的高性能 RPC，以及 MQTT 为资源受限设备设计的发布/订阅协议。",
        keyPoints: [
          "WebSocket 在 HTTP 升级后建立全双工持久连接，适合实时场景",
          "gRPC 使用 Protocol Buffers 序列化，支持四种流式调用模式",
          "MQTT 采用发布/订阅模型，极低开销适合 IoT 设备",
        ],
        lessons: [
          {
            id: "np-w8-1",
            title: "WebSocket 协议与实时通信",
            detail: "学习 WebSocket 握手升级过程、帧格式、心跳机制与断线重连策略。",
            keyPoints: [
              "WebSocket 通过 HTTP Upgrade 握手从 HTTP 升级为全双工连接。",
              "数据帧分为文本帧和二进制帧，控制帧包括 Ping/Pong 和 Close。",
              "生产环境需实现心跳检测、指数退避重连和消息队列缓冲。",
            ],
            resources: [
              { title: "RFC 6455 - WebSocket 协议", url: "https://www.rfc-editor.org/rfc/rfc6455" },
              { title: "WebSocket API - MDN", url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API" },
            ],
          },
          {
            id: "np-w8-2",
            title: "gRPC 与 Protocol Buffers",
            detail: "学习 gRPC 的架构设计、Protobuf 序列化格式与四种服务方法类型（一元、服务端流、客户端流、双向流）。",
            keyPoints: [
              "gRPC 基于 HTTP/2，原生支持多路复用、头部压缩和双向流。",
              "Protocol Buffers 是紧凑的二进制序列化格式，比 JSON 小 3-10 倍。",
              "四种模式：Unary、Server Streaming、Client Streaming、Bidirectional。",
            ],
            resources: [
              { title: "gRPC 官方文档", url: "https://grpc.io/docs/" },
              { title: "Protocol Buffers 指南", url: "https://protobuf.dev/programming-guides/proto3/" },
              { title: "gRPC 概念", url: "https://grpc.io/docs/what-is-grpc/core-concepts/" },
            ],
          },
          {
            id: "np-w8-3",
            title: "MQTT 与 IoT 协议",
            detail: "学习 MQTT 发布/订阅模型、QoS 等级、保留消息与遗嘱消息机制，了解 CoAP 等 IoT 协议。",
            keyPoints: [
              "MQTT 三种 QoS：0（至多一次）、1（至少一次）、2（恰好一次）。",
              "保留消息让新订阅者立即收到主题最新值，遗嘱消息通知客户端异常离线。",
              "MQTT 5.0 增加了共享订阅、消息过期、请求/响应模式等特性。",
            ],
            resources: [
              { title: "MQTT 规范", url: "https://mqtt.org/mqtt-specification/" },
              { title: "MQTT 入门 - HiveMQ", url: "https://www.hivemq.com/mqtt/mqtt-protocol/" },
            ],
          },
        ],
      },
      {
        id: "np-w9",
        title: "第 9 周：VPN 与隧道技术",
        summary: "理解 VPN 工作原理与隧道封装技术，掌握 IPSec、WireGuard 和 VXLAN 等协议。",
        overview: "VPN 和隧道技术是企业网络安全和虚拟化的核心。本周学习 IPSec 的 IKE 协商与 ESP 加密，WireGuard 的现代化设计，以及 VXLAN 等数据中心隧道协议。",
        keyPoints: [
          "IPSec 通过 IKE 协商安全参数，ESP 提供加密与完整性保护",
          "WireGuard 使用固定加密算法简化配置，内核态运行性能优异",
          "VXLAN 在三层网络上构建二层覆盖网络，支持大规模虚拟化",
        ],
        lessons: [
          {
            id: "np-w9-1",
            title: "IPSec VPN 原理",
            detail: "学习 IPSec 的 AH/ESP 协议、传输模式与隧道模式、IKE 密钥协商的两个阶段。",
            keyPoints: [
              "ESP 提供加密+认证，AH 只提供认证不加密，ESP 更常用。",
              "隧道模式封装整个原始 IP 包，传输模式只保护载荷。",
              "IKE 第一阶段建立安全通道，第二阶段协商 IPSec SA 参数。",
            ],
            resources: [
              { title: "RFC 4301 - IPSec 架构", url: "https://www.rfc-editor.org/rfc/rfc4301" },
              { title: "IPSec - Wireshark", url: "https://wiki.wireshark.org/IPsec" },
            ],
          },
          {
            id: "np-w9-2",
            title: "WireGuard 与现代 VPN",
            detail: "学习 WireGuard 的密码学原语、Cryptokey Routing 设计与简洁配置，对比 OpenVPN 的差异。",
            keyPoints: [
              "WireGuard 仅约 4000 行代码，远少于 OpenVPN/IPSec 的数十万行。",
              "使用 Curve25519、ChaCha20-Poly1305、BLAKE2s 等现代密码学算法。",
              "Cryptokey Routing 将公钥与允许的 IP 绑定，简化配置与路由。",
            ],
            resources: [
              { title: "WireGuard 官方文档", url: "https://www.wireguard.com/" },
              { title: "WireGuard 白皮书", url: "https://www.wireguard.com/papers/wireguard.pdf" },
            ],
          },
          {
            id: "np-w9-3",
            title: "隧道协议：GRE、VXLAN 与 Geneve",
            detail: "学习 GRE 通用路由封装、VXLAN 虚拟扩展局域网与 Geneve 协议，理解数据中心网络虚拟化方案。",
            keyPoints: [
              "GRE 封装任意三层协议在 IP 隧道中传输，简单但无加密。",
              "VXLAN 使用 24 位 VNI 支持 1600 万个虚拟网络，远超 VLAN 的 4096。",
              "Geneve 是可扩展的隧道协议，支持可变长度选项，正在取代 VXLAN。",
            ],
            resources: [
              { title: "RFC 7348 - VXLAN", url: "https://www.rfc-editor.org/rfc/rfc7348" },
              { title: "RFC 8926 - Geneve", url: "https://www.rfc-editor.org/rfc/rfc8926" },
              { title: "VXLAN - Wireshark", url: "https://wiki.wireshark.org/VXLAN" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "np-s4",
    title: "阶段四：网络编程与实践",
    duration: "第 10-12 周",
    goal: "掌握 Socket 编程与高性能 IO 模型，学习网络抓包分析技术，理解 CDN 与网络故障排查方法论。",
    weeks: [
      {
        id: "np-w10",
        title: "第 10 周：Socket 编程与高性能 IO",
        summary: "掌握 TCP/UDP Socket 编程接口与 epoll/io_uring 高性能 IO 模型。",
        overview: "Socket 是网络编程的基础 API。本周从 TCP/UDP Socket 编程入手，学习阻塞/非阻塞 IO 模式，深入 epoll 事件驱动和 io_uring 异步 IO 模型。",
        keyPoints: [
          "Socket API 提供 bind/listen/accept/connect/send/recv 等核心接口",
          "epoll 通过事件通知替代轮询，高效处理大量并发连接",
          "io_uring 通过共享环形缓冲区实现零拷贝异步 IO",
        ],
        lessons: [
          {
            id: "np-w10-1",
            title: "TCP Socket 编程",
            detail: "掌握 TCP 服务端和客户端的 Socket 编程流程，理解阻塞与非阻塞模式的区别与选型。",
            keyPoints: [
              "服务端流程：socket → bind → listen → accept → recv/send → close。",
              "客户端流程：socket → connect → send/recv → close。",
              "非阻塞模式下 IO 操作立即返回，配合 select/poll/epoll 实现多路复用。",
            ],
            resources: [
              { title: "Beej 网络编程指南", url: "https://beej.us/guide/bgnet/" },
              { title: "Linux Socket 手册", url: "https://man7.org/linux/man-pages/man2/socket.2.html" },
              { title: "TCP Socket 教程", url: "https://man7.org/linux/man-pages/man7/tcp.7.html" },
            ],
          },
          {
            id: "np-w10-2",
            title: "UDP Socket 编程",
            detail: "学习 UDP Socket 的无连接通信模型，掌握 sendto/recvfrom 接口与多播编程。",
            keyPoints: [
              "UDP 无需 listen/accept，直接通过 sendto/recvfrom 收发数据报。",
              "多播（Multicast）使用 D 类地址，一次发送即可到达组内所有成员。",
              "UDP Socket 需应用层处理消息边界、乱序和丢包问题。",
            ],
            resources: [
              { title: "UDP 手册", url: "https://man7.org/linux/man-pages/man7/udp.7.html" },
              { title: "多播编程指南", url: "https://www.tldp.org/HOWTO/Multicast-HOWTO.html" },
            ],
          },
          {
            id: "np-w10-3",
            title: "epoll 与 io_uring 高性能 IO",
            detail: "深入理解 epoll 的边沿/水平触发机制与 io_uring 的异步提交/完成模型，对比各 IO 模型性能。",
            keyPoints: [
              "epoll 使用红黑树管理 fd，就绪事件通过链表返回，时间复杂度 O(1)。",
              "边沿触发（ET）只在状态变化时通知，效率高但需一次读完所有数据。",
              "io_uring 通过提交队列（SQ）和完成队列（CQ）实现内核/用户态零拷贝通信。",
            ],
            resources: [
              { title: "epoll 手册", url: "https://man7.org/linux/man-pages/man7/epoll.7.html" },
              { title: "io_uring 入门", url: "https://kernel.dk/io_uring.pdf" },
              { title: "Efficient IO with io_uring", url: "https://unixism.net/loti/" },
            ],
          },
        ],
      },
      {
        id: "np-w11",
        title: "第 11 周：网络抓包与分析",
        summary: "掌握 Wireshark 和 tcpdump 的抓包分析技术，学习网络性能度量工具。",
        overview: "抓包分析是网络工程师的核心技能。本周学习使用 Wireshark 图形化分析协议细节，tcpdump 命令行快速抓包，以及 iperf3、mtr 等性能测量工具。",
        keyPoints: [
          "Wireshark 支持数百种协议解析，显示过滤器精准定位目标流量",
          "tcpdump 适合服务器端快速抓包，BPF 过滤器语法高效灵活",
          "iperf3 测量带宽、延迟和抖动，mtr 结合 ping 与 traceroute 持续监测路径",
        ],
        lessons: [
          {
            id: "np-w11-1",
            title: "Wireshark 抓包分析",
            detail: "学习 Wireshark 的抓包设置、显示过滤器语法、协议解析与流追踪功能，分析 TCP/HTTP 等协议行为。",
            keyPoints: [
              "显示过滤器：tcp.port == 80、http.request.method == GET、ip.addr == x.x.x.x。",
              "TCP 流追踪（Follow TCP Stream）还原完整会话内容。",
              "IO 图表和流量统计帮助识别异常流量模式和性能瓶颈。",
            ],
            resources: [
              { title: "Wireshark 用户指南", url: "https://www.wireshark.org/docs/wsug_html_chunked/" },
              { title: "Wireshark 显示过滤器参考", url: "https://wiki.wireshark.org/DisplayFilters" },
            ],
          },
          {
            id: "np-w11-2",
            title: "tcpdump 命令行抓包",
            detail: "掌握 tcpdump 的 BPF 过滤器语法、常用抓包命令与 pcap 文件的保存和分析。",
            keyPoints: [
              "常用命令：tcpdump -i eth0 -nn -X port 80 抓取 HTTP 流量并显示十六进制。",
              "BPF 过滤器：host、port、net、proto 组合条件精确匹配目标流量。",
              "使用 -w 保存为 pcap 文件后在 Wireshark 中深入分析。",
            ],
            resources: [
              { title: "tcpdump 手册", url: "https://www.tcpdump.org/manpages/tcpdump.1.html" },
              { title: "tcpdump 示例", url: "https://danielmiessler.com/p/tcpdump/" },
              { title: "BPF 过滤器语法", url: "https://www.tcpdump.org/manpages/pcap-filter.7.html" },
            ],
          },
          {
            id: "np-w11-3",
            title: "网络性能分析工具",
            detail: "学习使用 iperf3 测量带宽、mtr 追踪路径、ss/netstat 查看连接状态等网络性能分析工具链。",
            keyPoints: [
              "iperf3 支持 TCP/UDP 带宽测试，可测量吞吐量、延迟、抖动和丢包率。",
              "mtr 结合 ping 和 traceroute，持续监测每一跳的丢包率和延迟变化。",
              "ss 替代 netstat 查看 Socket 统计信息，速度更快且信息更丰富。",
            ],
            resources: [
              { title: "iperf3 文档", url: "https://iperf.fr/iperf-doc.php" },
              { title: "mtr 使用指南", url: "https://www.bitwizard.nl/mtr/" },
            ],
          },
        ],
      },
      {
        id: "np-w12",
        title: "第 12 周：CDN、边缘计算与故障排查",
        summary: "理解 CDN 加速原理与边缘计算架构，掌握系统化网络故障排查方法论。",
        overview: "最后一周将网络知识应用于实际架构与运维。学习 CDN 的内容分发策略、边缘计算的就近处理模型，以及从物理层到应用层的系统化故障排查流程。",
        keyPoints: [
          "CDN 通过边缘节点缓存和智能 DNS 调度将内容就近分发给用户",
          "边缘计算将计算下沉到靠近数据源的位置，降低延迟",
          "网络故障排查应按「物理层 → 链路层 → 网络层 → 传输层 → 应用层」逐层排查",
        ],
        lessons: [
          {
            id: "np-w12-1",
            title: "CDN 原理与边缘计算",
            detail: "学习 CDN 的内容缓存策略、智能 DNS 调度与回源机制，理解边缘计算的架构与应用场景。",
            keyPoints: [
              "CDN 边缘节点缓存静态资源，通过 Anycast 或 DNS 将用户引导到最近节点。",
              "缓存命中率是 CDN 核心指标，合理设置 Cache-Control 和 TTL 至关重要。",
              "边缘计算（如 Cloudflare Workers）在边缘节点执行逻辑，减少回源延迟。",
            ],
            resources: [
              { title: "CDN 工作原理 - Cloudflare", url: "https://www.cloudflare.com/learning/cdn/what-is-a-cdn/" },
              { title: "边缘计算概述 - AWS", url: "https://aws.amazon.com/what-is/edge-computing/" },
              { title: "Cloudflare Workers", url: "https://developers.cloudflare.com/workers/" },
            ],
          },
          {
            id: "np-w12-2",
            title: "负载均衡与反向代理",
            detail: "学习四层/七层负载均衡原理、常见调度算法与 Nginx/HAProxy 等反向代理的配置实践。",
            keyPoints: [
              "四层负载均衡基于 IP+端口转发，七层基于 HTTP 内容做智能路由。",
              "常见调度算法：轮询、加权轮询、最少连接、一致性哈希。",
              "健康检查是负载均衡的关键，需区分主动探测和被动检测。",
            ],
            resources: [
              { title: "Nginx 负载均衡", url: "https://docs.nginx.com/nginx/admin-guide/load-balancer/http-load-balancer/" },
              { title: "HAProxy 文档", url: "https://docs.haproxy.org/" },
            ],
          },
          {
            id: "np-w12-3",
            title: "网络故障排查方法论",
            detail: "掌握从物理层到应用层的系统化故障排查流程，学习常见网络故障的诊断与解决方案。",
            keyPoints: [
              "自底向上排查：物理连接 → ARP/MAC → IP 路由 → TCP 端口 → 应用服务。",
              "关键工具链：ip link/addr → arping → ping/traceroute → ss/curl → 日志分析。",
              "建立网络基线：记录正常时的延迟、带宽和丢包率，异常时对比定位。",
            ],
            resources: [
              { title: "Linux 网络排查指南", url: "https://www.brendangregg.com/blog/2024-03-24/linux-crisis-tools.html" },
              { title: "网络诊断工具 - Cloudflare", url: "https://www.cloudflare.com/learning/network-layer/what-is-traceroute/" },
            ],
          },
        ],
      },
    ],
  },
]

export const networkProtocolKnowledgeCards: KnowledgeCard[] = [
  {
    id: "np-card-osi",
    title: "OSI 与 TCP/IP 模型",
    summary: "网络分层模型是理解所有协议的基础框架。",
    points: [
      "OSI 七层是理论参考，TCP/IP 四层是工业实践标准。",
      "每层协议只关注本层职责，通过接口向上层提供服务。",
      "数据逐层封装报头传输，接收端逐层解封还原应用数据。",
    ],
    practice: "使用 Wireshark 抓取一次 HTTP 请求，逐层分析以太网帧、IP 数据报、TCP 段和 HTTP 报文的报头。",
  },
  {
    id: "np-card-tcp",
    title: "TCP 可靠传输机制",
    summary: "TCP 通过序号、确认、重传和流控实现字节流的可靠有序传输。",
    points: [
      "三次握手确认双方序列号和收发能力，四次挥手优雅释放连接资源。",
      "滑动窗口实现流量控制，慢启动和拥塞避免实现拥塞控制。",
      "快重传和快恢复通过冗余 ACK 快速响应丢包，避免超时等待。",
    ],
    practice: "用 tcpdump 抓取一次完整的 TCP 连接过程，分析 SYN/ACK/FIN 标志和窗口大小变化。",
  },
  {
    id: "np-card-dns",
    title: "DNS 域名解析体系",
    summary: "DNS 将人类可读的域名转换为机器可路由的 IP 地址。",
    points: [
      "DNS 采用分层树形结构：根域 → 顶级域 → 权威域。",
      "递归解析器为客户端完成全部查询，缓存 TTL 控制刷新频率。",
      "DoH/DoT 加密 DNS 查询防止中间人窥探，提升隐私保护。",
    ],
    practice: "使用 dig 命令追踪一次完整的 DNS 解析过程（+trace），观察从根到权威的迭代查询。",
  },
  {
    id: "np-card-http",
    title: "HTTP 协议演进",
    summary: "从 HTTP/1.1 到 HTTP/3，每一代都在解决上一代的性能瓶颈。",
    points: [
      "HTTP/1.1 持久连接减少握手，但管线化仍有队头阻塞。",
      "HTTP/2 二进制帧和多路复用消除应用层队头阻塞。",
      "HTTP/3 基于 QUIC 在传输层消除队头阻塞，支持连接迁移。",
    ],
    practice: "使用 curl --http1.1/--http2/--http3 分别请求同一 URL，对比连接时间和传输性能差异。",
  },
  {
    id: "np-card-tls",
    title: "TLS 安全通信",
    summary: "TLS 为互联网通信提供加密、完整性和身份认证三大安全保障。",
    points: [
      "TLS 握手协商加密套件和密钥，ECDHE 提供前向保密。",
      "X.509 证书通过 CA 信任链实现服务器身份认证。",
      "TLS 1.3 简化握手至 1-RTT，移除所有不安全的旧算法。",
    ],
    practice: "使用 openssl s_client 连接一个 HTTPS 站点，检查证书链和协商的加密套件。",
  },
  {
    id: "np-card-socket",
    title: "Socket 编程模型",
    summary: "Socket 是操作系统提供的网络编程接口，连接应用层与传输层。",
    points: [
      "TCP Socket 提供面向连接的可靠字节流，UDP Socket 提供无连接的数据报。",
      "epoll 事件驱动模型高效处理数万并发连接，是 Linux 高性能服务器的基础。",
      "io_uring 异步 IO 通过共享环形队列实现内核与用户态零拷贝通信。",
    ],
    practice: "编写一个简单的 TCP echo 服务器，分别用阻塞 IO 和 epoll 实现，对比并发处理能力。",
  },
  {
    id: "np-card-wireshark",
    title: "网络抓包分析",
    summary: "抓包分析是理解协议行为和排查网络问题的最直接手段。",
    points: [
      "Wireshark 显示过滤器可按协议、地址、端口等精准筛选目标流量。",
      "tcpdump BPF 过滤器在抓包时过滤，减少抓包文件体积。",
      "TCP 流追踪可还原完整的请求/响应会话内容。",
    ],
    practice: "使用 tcpdump 抓取 DNS 查询和 HTTPS 握手流量，导入 Wireshark 分析协议细节。",
  },
  {
    id: "np-card-troubleshoot",
    title: "网络故障排查",
    summary: "系统化的分层排查流程是快速定位网络问题的关键。",
    points: [
      "自底向上：物理连接 → 链路 ARP → IP 路由 → 传输端口 → 应用服务。",
      "基线对比：记录正常时的延迟、带宽、丢包率，异常时量化偏差。",
      "工具链：ping/mtr 测连通性，ss 查连接状态，curl 验应用层，日志定位根因。",
    ],
    practice: "模拟一个网络故障场景（如防火墙阻断端口），按分层方法论逐步排查并定位问题。",
  },
]

export const networkProtocolExamQuestions: QuizQuestion[] = [
  { id: "np-q1", question: "OSI 模型中，负责逻辑寻址和路由选择的是哪一层？", options: ["数据链路层", "网络层", "传输层", "会话层"], answer: 1, rationale: "网络层（第三层）负责 IP 地址等逻辑寻址和数据报路由选择。" },
  { id: "np-q2", question: "ARP 协议的作用是什么？", options: ["将域名解析为 IP 地址", "将 IP 地址解析为 MAC 地址", "检测网络连通性", "分配 IP 地址"], answer: 1, rationale: "ARP（地址解析协议）通过广播请求将目标 IP 地址映射为对应的 MAC 地址。" },
  { id: "np-q3", question: "CIDR 表示法 10.0.0.0/8 中的 /8 表示什么？", options: ["8 个可用主机", "8 位子网掩码", "前 8 位为网络前缀", "8 个子网"], answer: 2, rationale: "CIDR 中 /8 表示 IP 地址的前 8 位用于标识网络，其余 24 位用于主机。" },
  { id: "np-q4", question: "TCP 三次握手的目的是什么？", options: ["加密数据传输", "确认双方的序列号和收发能力", "分配端口号", "建立 UDP 连接"], answer: 1, rationale: "三次握手通过 SYN/SYN-ACK/ACK 交换确认双方初始序列号和收发能力，建立可靠连接。" },
  { id: "np-q5", question: "TCP 中 TIME_WAIT 状态的持续时间是？", options: ["30 秒", "1 分钟", "2 个 MSL（最大报文生存时间）", "取决于操作系统"], answer: 2, rationale: "TIME_WAIT 持续 2MSL，确保最后的 ACK 能到达对方，并等待网络中残留报文消失。" },
  { id: "np-q6", question: "UDP 相比 TCP 的主要优势是什么？", options: ["提供可靠传输", "报头开销小、无连接延迟、适合实时通信", "支持流量控制", "数据有序到达"], answer: 1, rationale: "UDP 报头仅 8 字节，无连接建立和维护开销，适合对延迟敏感的实时音视频等场景。" },
  { id: "np-q7", question: "QUIC 协议解决了 TCP 的什么关键问题？", options: ["安全性不足", "队头阻塞", "不支持多播", "地址耗尽"], answer: 1, rationale: "QUIC 基于 UDP 实现多个独立流，单个流的丢包不阻塞其他流，消除 TCP 队头阻塞。" },
  { id: "np-q8", question: "DNS 递归查询和迭代查询的区别是什么？", options: ["递归更快", "递归由解析器代客户端完成全部查询，迭代返回下一步引荐", "迭代更安全", "两者完全相同"], answer: 1, rationale: "递归查询中解析器负责完成全部查询过程并返回最终结果，迭代查询只返回下一级 DNS 的地址。" },
  { id: "np-q9", question: "HTTP/2 相比 HTTP/1.1 的最大改进是什么？", options: ["使用 UDP 传输", "二进制帧和多路复用，单连接并行传输", "内置加密", "支持 WebSocket"], answer: 1, rationale: "HTTP/2 用二进制帧替代文本协议，在单个 TCP 连接上多路复用并行传输多个流。" },
  { id: "np-q10", question: "TLS 1.3 握手需要几个 RTT？", options: ["0-RTT", "1-RTT（完整握手）", "2-RTT", "3-RTT"], answer: 1, rationale: "TLS 1.3 完整握手简化为 1-RTT，恢复连接时可使用 0-RTT 模式在首包发送应用数据。" },
  { id: "np-q11", question: "X.509 证书中的 CA 签名有什么作用？", options: ["加密传输数据", "证明证书持有者身份的真实性", "压缩证书大小", "分配域名"], answer: 1, rationale: "CA 用其私钥对证书签名，客户端用 CA 公钥验证签名以确认证书及其持有者身份的真实性。" },
  { id: "np-q12", question: "WebSocket 与 HTTP 的主要区别是什么？", options: ["WebSocket 不使用 TCP", "WebSocket 建立全双工持久连接，HTTP 是请求-响应模式", "HTTP 支持二进制", "WebSocket 更安全"], answer: 1, rationale: "WebSocket 通过 HTTP Upgrade 握手后建立全双工持久连接，服务端可主动推送数据。" },
  { id: "np-q13", question: "gRPC 默认使用的序列化格式是？", options: ["JSON", "XML", "Protocol Buffers", "MessagePack"], answer: 2, rationale: "gRPC 默认使用 Protocol Buffers（protobuf）进行序列化，比 JSON 更紧凑高效。" },
  { id: "np-q14", question: "MQTT QoS 2 提供什么级别的消息传递保证？", options: ["至多一次", "至少一次", "恰好一次", "无保证"], answer: 2, rationale: "MQTT QoS 2 通过四步握手（PUBLISH/PUBREC/PUBREL/PUBCOMP）确保消息恰好传递一次。" },
  { id: "np-q15", question: "IPSec ESP 协议提供哪些安全服务？", options: ["仅加密", "仅认证", "加密与认证", "仅压缩"], answer: 2, rationale: "ESP（封装安全载荷）同时提供数据加密和数据完整性认证，是 IPSec 中最常用的协议。" },
  { id: "np-q16", question: "epoll 相比 select 的核心优势是什么？", options: ["支持 UDP", "不受 fd 数量限制，事件通知机制避免轮询", "更简单的 API", "跨平台支持"], answer: 1, rationale: "epoll 通过事件通知替代轮询，时间复杂度 O(1)，不受文件描述符数量限制。" },
  { id: "np-q17", question: "Wireshark 显示过滤器 tcp.port == 443 表示什么？", options: ["只抓取 443 端口", "显示源或目的端口为 443 的 TCP 数据包", "过滤 UDP 流量", "阻断 443 端口"], answer: 1, rationale: "显示过滤器 tcp.port == 443 匹配源端口或目的端口为 443 的 TCP 数据包并在界面显示。" },
  { id: "np-q18", question: "CDN 提升访问速度的核心原理是什么？", options: ["压缩所有数据", "在靠近用户的边缘节点缓存内容", "升级服务器硬件", "使用 UDP 传输"], answer: 1, rationale: "CDN 将内容缓存到全球分布的边缘节点，通过智能 DNS 将用户引导到最近的节点。" },
  { id: "np-q19", question: "VXLAN 使用多少位的 VNI 标识虚拟网络？", options: ["12 位", "16 位", "24 位", "32 位"], answer: 2, rationale: "VXLAN 使用 24 位 VNI（Virtual Network Identifier），最多支持约 1600 万个虚拟网络。" },
  { id: "np-q20", question: "网络故障排查时，应优先从哪一层开始？", options: ["应用层", "传输层", "物理层", "会话层"], answer: 2, rationale: "应自底向上排查：先检查物理连接是否正常，再逐层向上检查链路、网络、传输和应用层。" },
]

export const networkProtocolRoadmap: RoadmapDefinition = {
  id: "network-protocol",
  label: "网络协议",
  title: "网络协议学习路线",
  durationLabel: "12 周·36 课时",
  description: "从网络分层模型到抓包实战，系统掌握 TCP/IP 协议栈、传输层机制、安全加密、高级协议与网络编程，构建扎实的网络工程能力。",
  heroBadge: "协议原理 · 传输机制 · 安全加密 · 抓包实战",
  stages: networkProtocolStages,
  knowledgeCards: networkProtocolKnowledgeCards,
  examQuestions: networkProtocolExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "开始网络协议之旅，先从 OSI/TCP-IP 分层模型和 IP 基础入手。"
    if (percent < 25) return "继续学习 ARP、子网划分与 ICMP 诊断，打牢网络基础。"
    if (percent < 50) return "深入 TCP/UDP 传输机制和 HTTP 协议演进，理解核心协议原理。"
    if (percent < 75) return "掌握 TLS 安全通信与 WebSocket/gRPC 等高级协议。"
    if (percent < 100) return "完成 Socket 编程与抓包分析实战，构建完整的网络技能体系。"
    return "恭喜完成！你已具备系统化的网络协议知识，可以深入网络架构设计与性能优化！"
  },
  resourceGuide: {
    environment: "安装 Wireshark 抓包工具和 curl/dig 命令行工具，准备一台 Linux 环境用于 Socket 编程和 tcpdump 实践。",
    fallbackKeyPoints: [
      "OSI 七层模型是理论框架，TCP/IP 四层模型是实际标准",
      "TCP 三次握手/四次挥手确保可靠连接建立与释放",
      "HTTP/2 多路复用消除应用层队头阻塞，HTTP/3 基于 QUIC 消除传输层队头阻塞",
      "TLS 握手完成身份认证与密钥协商，ECDHE 提供前向保密",
      "epoll 事件驱动模型是 Linux 高并发网络服务的基础",
    ],
    handsOnSteps: [
      "使用 Wireshark 抓取并分析一次完整的 TCP 三次握手和 HTTP 请求过程",
      "用 dig +trace 追踪一次从根到权威 DNS 服务器的完整解析过程",
      "编写一个基于 epoll 的 TCP echo 服务器，测试并发连接处理能力",
      "使用 openssl s_client 检查 HTTPS 站点的证书链和加密套件",
      "用 tcpdump 抓取 DNS 查询流量，导入 Wireshark 分析报文细节",
    ],
    selfChecks: [
      "能否画出 TCP 三次握手和四次挥手的状态转换图？",
      "是否理解 HTTP/1.1、HTTP/2、HTTP/3 各自解决了什么问题？",
      "能否解释 TLS 握手中 ECDHE 密钥交换的前向保密原理？",
      "是否掌握 Wireshark 显示过滤器和 tcpdump BPF 过滤器的使用？",
      "遇到网络故障时能否按分层方法论系统排查？",
    ],
    extensions: [
      "深入学习 Linux 内核网络栈实现（netfilter、TCP 协议栈源码）",
      "探索 eBPF 在网络可观测性和安全中的应用",
      "研究 DPDK/XDP 用户态网络编程实现高性能数据面",
      "学习 SDN（软件定义网络）与 OpenFlow 协议",
    ],
    lessonQuizAdvice: "建议每学完一个协议后用 Wireshark 抓包验证，将理论知识与实际报文对照加深理解。",
  },
}
