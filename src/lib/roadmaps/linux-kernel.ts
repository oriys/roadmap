import type { KnowledgeCard, QuizQuestion, RoadmapDefinition, Stage } from "../types"

export const linuxKernelStages: Stage[] = [
  {
    id: "lk-foundation",
    title: "阶段一：基础准备",
    duration: "第 1-2 周",
    goal: "掌握 Linux 系统基础知识和 C 语言编程能力，为内核学习打下坚实基础。",
    weeks: [
      {
        id: "lk-w1",
        title: "第 1 周：Linux 系统基础",
        summary: "深入理解 Linux 操作系统的基本概念和用户空间操作。",
        keyPoints: [
          "Linux 的发展历史和开源哲学是理解内核社区文化的基础。",
          "系统调用是用户空间与内核空间通信的唯一桥梁。",
          "进程、文件描述符、信号是 Linux 编程的核心抽象。",
        ],
        lessons: [
          {
            id: "lk-w1-1",
            title: "Linux 发展历史与架构",
            detail: "了解 Linux 的起源、开源许可证 (GPL) 和宏内核架构特点。",
            resources: [
              { title: "Linux 内核官网", url: "https://www.kernel.org/" },
              { title: "The Linux Kernel Archives", url: "https://www.kernel.org/doc/html/latest/" },
              { title: "Linux 维基百科", url: "https://en.wikipedia.org/wiki/Linux_kernel" },
            ],
          },
          {
            id: "lk-w1-2",
            title: "用户空间与内核空间",
            detail: "理解特权级别、系统调用机制和用户态/内核态切换。",
            resources: [
              { title: "Linux Insides - 系统调用", url: "https://0xax.gitbooks.io/linux-insides/content/SysCall/" },
              { title: "System Calls 详解", url: "https://man7.org/linux/man-pages/man2/syscalls.2.html" },
              { title: "The Linux Programming Interface", url: "https://man7.org/tlpi/" },
            ],
          },
          {
            id: "lk-w1-3",
            title: "进程与线程基础",
            detail: "掌握进程创建 (fork/exec)、线程 (pthread)、进程状态和调度基础。",
            resources: [
              { title: "Linux Process Management", url: "https://tldp.org/LDP/tlk/kernel/processes.html" },
              { title: "fork() 手册页", url: "https://man7.org/linux/man-pages/man2/fork.2.html" },
              { title: "POSIX Threads", url: "https://man7.org/linux/man-pages/man7/pthreads.7.html" },
            ],
          },
          {
            id: "lk-w1-4",
            title: "文件系统与 I/O",
            detail: "理解 VFS 概念、文件描述符、缓冲 I/O 与直接 I/O。",
            resources: [
              { title: "Linux VFS 概述", url: "https://www.kernel.org/doc/html/latest/filesystems/vfs.html" },
              { title: "File I/O 手册", url: "https://man7.org/linux/man-pages/man2/open.2.html" },
              { title: "Linux 文件系统层次", url: "https://refspecs.linuxfoundation.org/FHS_3.0/fhs/index.html" },
            ],
          },
        ],
      },
      {
        id: "lk-w2",
        title: "第 2 周：C 语言与开发工具",
        summary: "强化 C 语言能力，熟悉内核开发常用的工具链。",
        keyPoints: [
          "内核使用 C 语言和少量汇编编写，需要深入理解指针和内存布局。",
          "GCC 扩展和内核宏是阅读内核源码的关键。",
          "Git 和 Makefile 是参与内核开发的必备技能。",
        ],
        lessons: [
          {
            id: "lk-w2-1",
            title: "高级 C 语言特性",
            detail: "掌握指针运算、结构体对齐、位操作、volatile 和内存屏障。",
            resources: [
              { title: "Expert C Programming", url: "https://www.oreilly.com/library/view/expert-c-programming/0131774298/" },
              { title: "C99 标准", url: "https://www.open-std.org/jtc1/sc22/wg14/www/docs/n1256.pdf" },
              { title: "Linux Kernel Coding Style", url: "https://www.kernel.org/doc/html/latest/process/coding-style.html" },
            ],
          },
          {
            id: "lk-w2-2",
            title: "GCC 扩展与内核宏",
            detail: "学习 __attribute__、typeof、container_of 等内核常用技巧。",
            resources: [
              { title: "GCC 扩展文档", url: "https://gcc.gnu.org/onlinedocs/gcc/C-Extensions.html" },
              { title: "container_of 详解", url: "https://radek.io/posts/magical-container_of-macro/" },
              { title: "内核常用宏", url: "https://www.kernel.org/doc/html/latest/core-api/kernel-api.html" },
            ],
          },
          {
            id: "lk-w2-3",
            title: "开发环境搭建",
            detail: "配置内核开发环境、交叉编译工具链和调试环境。",
            resources: [
              { title: "Kernel Build System", url: "https://www.kernel.org/doc/html/latest/kbuild/index.html" },
              { title: "QEMU 文档", url: "https://www.qemu.org/docs/master/" },
              { title: "Buildroot", url: "https://buildroot.org/docs.html" },
            ],
          },
          {
            id: "lk-w2-4",
            title: "Git 与内核工作流",
            detail: "掌握 Git 分支管理、补丁生成与邮件列表协作流程。",
            resources: [
              { title: "Git 官方文档", url: "https://git-scm.com/doc" },
              { title: "Submitting Patches", url: "https://www.kernel.org/doc/html/latest/process/submitting-patches.html" },
              { title: "Git format-patch", url: "https://git-scm.com/docs/git-format-patch" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "lk-core",
    title: "阶段二：内核核心子系统",
    duration: "第 3-5 周",
    goal: "深入理解进程管理、内存管理和文件系统三大核心子系统的实现原理。",
    weeks: [
      {
        id: "lk-w3",
        title: "第 3 周：进程管理",
        summary: "掌握内核如何管理进程的创建、调度和终止。",
        keyPoints: [
          "task_struct 是进程的内核表示，包含进程的所有元数据。",
          "CFS（完全公平调度器）是 Linux 默认的进程调度器。",
          "进程上下文切换涉及保存/恢复寄存器状态和地址空间切换。",
        ],
        lessons: [
          {
            id: "lk-w3-1",
            title: "task_struct 结构",
            detail: "深入分析进程描述符的关键字段和组织方式。",
            resources: [
              { title: "task_struct 源码", url: "https://elixir.bootlin.com/linux/latest/source/include/linux/sched.h" },
              { title: "Linux Process Descriptor", url: "https://www.kernel.org/doc/html/latest/scheduler/sched-design-CFS.html" },
              { title: "Understanding the Linux Kernel", url: "https://www.oreilly.com/library/view/understanding-the-linux/0596005652/" },
            ],
          },
          {
            id: "lk-w3-2",
            title: "进程调度器",
            detail: "理解 CFS 调度器的设计理念、红黑树和虚拟运行时间。",
            resources: [
              { title: "CFS 调度器设计", url: "https://www.kernel.org/doc/html/latest/scheduler/sched-design-CFS.html" },
              { title: "Scheduling Classes", url: "https://www.kernel.org/doc/html/latest/scheduler/sched-nice-design.html" },
              { title: "EEVDF 调度器", url: "https://lwn.net/Articles/925371/" },
            ],
          },
          {
            id: "lk-w3-3",
            title: "进程创建与销毁",
            detail: "分析 fork、clone、exit 系统调用的内核实现。",
            resources: [
              { title: "fork 实现", url: "https://elixir.bootlin.com/linux/latest/source/kernel/fork.c" },
              { title: "Copy-on-Write", url: "https://www.kernel.org/doc/html/latest/admin-guide/mm/concepts.html" },
              { title: "clone3 系统调用", url: "https://man7.org/linux/man-pages/man2/clone3.2.html" },
            ],
          },
          {
            id: "lk-w3-4",
            title: "中断与上下文切换",
            detail: "理解硬件中断处理、软中断和进程切换机制。",
            resources: [
              { title: "Linux Interrupts", url: "https://0xax.gitbooks.io/linux-insides/content/Interrupts/" },
              { title: "Context Switch", url: "https://www.kernel.org/doc/html/latest/x86/entry_64.html" },
              { title: "Softirqs 和 Tasklets", url: "https://www.kernel.org/doc/html/latest/core-api/genericirq.html" },
            ],
          },
        ],
      },
      {
        id: "lk-w4",
        title: "第 4 周：内存管理",
        summary: "深入理解 Linux 内存管理子系统的设计与实现。",
        keyPoints: [
          "虚拟内存提供进程隔离和按需分页机制。",
          "页表和 TLB 是虚拟地址到物理地址转换的核心硬件支持。",
          "SLAB/SLUB 分配器高效管理小对象内存分配。",
        ],
        lessons: [
          {
            id: "lk-w4-1",
            title: "虚拟内存与地址空间",
            detail: "掌握进程地址空间布局、mm_struct 和 vm_area_struct。",
            resources: [
              { title: "Memory Management 文档", url: "https://www.kernel.org/doc/html/latest/admin-guide/mm/index.html" },
              { title: "Virtual Memory", url: "https://www.kernel.org/doc/html/latest/mm/index.html" },
              { title: "进程地址空间", url: "https://elixir.bootlin.com/linux/latest/source/include/linux/mm_types.h" },
            ],
          },
          {
            id: "lk-w4-2",
            title: "页表与分页机制",
            detail: "理解多级页表、页表项格式和 TLB 管理。",
            resources: [
              { title: "Page Tables", url: "https://www.kernel.org/doc/html/latest/mm/page_tables.html" },
              { title: "x86 Paging", url: "https://wiki.osdev.org/Paging" },
              { title: "Huge Pages", url: "https://www.kernel.org/doc/html/latest/admin-guide/mm/hugetlbpage.html" },
            ],
          },
          {
            id: "lk-w4-3",
            title: "物理内存分配",
            detail: "学习伙伴系统、页帧分配和内存区域 (zones)。",
            resources: [
              { title: "Buddy Allocator", url: "https://www.kernel.org/doc/html/latest/core-api/mm-api.html" },
              { title: "Memory Zones", url: "https://www.kernel.org/doc/html/latest/mm/zone.html" },
              { title: "Page Allocator", url: "https://elixir.bootlin.com/linux/latest/source/mm/page_alloc.c" },
            ],
          },
          {
            id: "lk-w4-4",
            title: "SLAB 分配器",
            detail: "理解 SLAB/SLUB 分配器的设计原理和 kmalloc 实现。",
            resources: [
              { title: "SLUB Allocator", url: "https://www.kernel.org/doc/html/latest/mm/slub.html" },
              { title: "kmalloc 源码", url: "https://elixir.bootlin.com/linux/latest/source/mm/slab.c" },
              { title: "The Slab Allocator", url: "https://www.kernel.org/doc/gorman/html/understand/understand011.html" },
            ],
          },
        ],
      },
      {
        id: "lk-w5",
        title: "第 5 周：文件系统",
        summary: "掌握 VFS 架构和具体文件系统的实现原理。",
        keyPoints: [
          "VFS（虚拟文件系统）为所有文件系统提供统一接口。",
          "inode 和 dentry 是 VFS 的核心数据结构。",
          "页缓存和 bio 层是文件 I/O 性能的关键。",
        ],
        lessons: [
          {
            id: "lk-w5-1",
            title: "VFS 架构",
            detail: "理解 VFS 的抽象层次、超级块、inode 和 dentry 缓存。",
            resources: [
              { title: "VFS 文档", url: "https://www.kernel.org/doc/html/latest/filesystems/vfs.html" },
              { title: "VFS 源码", url: "https://elixir.bootlin.com/linux/latest/source/fs/" },
              { title: "Linux VFS Tutorial", url: "https://www.kernel.org/doc/html/latest/filesystems/index.html" },
            ],
          },
          {
            id: "lk-w5-2",
            title: "Ext4 文件系统",
            detail: "深入分析 Ext4 的磁盘布局、日志和扩展属性。",
            resources: [
              { title: "Ext4 文档", url: "https://www.kernel.org/doc/html/latest/filesystems/ext4/index.html" },
              { title: "Ext4 Disk Layout", url: "https://ext4.wiki.kernel.org/index.php/Ext4_Disk_Layout" },
              { title: "Ext4 源码", url: "https://elixir.bootlin.com/linux/latest/source/fs/ext4/" },
            ],
          },
          {
            id: "lk-w5-3",
            title: "块层与 I/O 调度",
            detail: "理解 bio 结构、请求队列和 I/O 调度器。",
            resources: [
              { title: "Block Layer", url: "https://www.kernel.org/doc/html/latest/block/index.html" },
              { title: "I/O Schedulers", url: "https://www.kernel.org/doc/html/latest/block/switching-sched.html" },
              { title: "blk-mq", url: "https://www.kernel.org/doc/html/latest/block/blk-mq.html" },
            ],
          },
          {
            id: "lk-w5-4",
            title: "页缓存机制",
            detail: "掌握页缓存、回写机制和文件预读。",
            resources: [
              { title: "Page Cache", url: "https://www.kernel.org/doc/html/latest/filesystems/caching/fscache.html" },
              { title: "Writeback", url: "https://www.kernel.org/doc/html/latest/admin-guide/mm/writeback.html" },
              { title: "Address Space", url: "https://elixir.bootlin.com/linux/latest/source/include/linux/fs.h" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "lk-advanced",
    title: "阶段三：高级主题",
    duration: "第 6-8 周",
    goal: "掌握设备驱动、网络协议栈和内核同步机制等高级主题。",
    weeks: [
      {
        id: "lk-w6",
        title: "第 6 周：设备驱动",
        summary: "学习 Linux 设备驱动模型和驱动开发基础。",
        keyPoints: [
          "Linux 设备模型通过 kobject、device、driver 统一管理设备。",
          "字符设备、块设备和网络设备是三种主要设备类型。",
          "中断处理分为上半部（快速响应）和下半部（延迟处理）。",
        ],
        lessons: [
          {
            id: "lk-w6-1",
            title: "Linux 设备模型",
            detail: "理解 kobject、kset、设备树和 sysfs 接口。",
            resources: [
              { title: "Driver Model", url: "https://www.kernel.org/doc/html/latest/driver-api/driver-model/index.html" },
              { title: "sysfs 文档", url: "https://www.kernel.org/doc/html/latest/filesystems/sysfs.html" },
              { title: "Device Tree", url: "https://www.kernel.org/doc/html/latest/devicetree/index.html" },
            ],
          },
          {
            id: "lk-w6-2",
            title: "字符设备驱动",
            detail: "实现一个完整的字符设备驱动，包括 open、read、write、ioctl。",
            resources: [
              { title: "Linux Device Drivers", url: "https://lwn.net/Kernel/LDD3/" },
              { title: "Char Device", url: "https://www.kernel.org/doc/html/latest/driver-api/miscdev.html" },
              { title: "LDD3 示例代码", url: "https://github.com/martinezjavier/ldd3" },
            ],
          },
          {
            id: "lk-w6-3",
            title: "中断处理机制",
            detail: "学习中断请求、中断处理程序和工作队列。",
            resources: [
              { title: "IRQ 子系统", url: "https://www.kernel.org/doc/html/latest/core-api/genericirq.html" },
              { title: "Workqueue", url: "https://www.kernel.org/doc/html/latest/core-api/workqueue.html" },
              { title: "Threaded IRQ", url: "https://lwn.net/Articles/302043/" },
            ],
          },
          {
            id: "lk-w6-4",
            title: "DMA 与内存映射",
            detail: "掌握 DMA 操作和用户空间内存映射 (mmap)。",
            resources: [
              { title: "DMA API", url: "https://www.kernel.org/doc/html/latest/core-api/dma-api.html" },
              { title: "mmap 实现", url: "https://www.kernel.org/doc/html/latest/driver-api/device-io.html" },
              { title: "DMA-BUF", url: "https://www.kernel.org/doc/html/latest/driver-api/dma-buf.html" },
            ],
          },
        ],
      },
      {
        id: "lk-w7",
        title: "第 7 周：网络协议栈",
        summary: "深入理解 Linux 网络子系统的设计与实现。",
        keyPoints: [
          "sk_buff 是网络数据包在内核中的表示。",
          "Netfilter 框架提供数据包过滤和 NAT 功能。",
          "Socket 层将网络协议抽象为文件描述符操作。",
        ],
        lessons: [
          {
            id: "lk-w7-1",
            title: "网络子系统架构",
            detail: "理解网络协议栈的分层结构和数据流向。",
            resources: [
              { title: "Networking 文档", url: "https://www.kernel.org/doc/html/latest/networking/index.html" },
              { title: "Linux Network Internals", url: "https://www.oreilly.com/library/view/understanding-linux-network/0596002556/" },
              { title: "网络子系统源码", url: "https://elixir.bootlin.com/linux/latest/source/net/" },
            ],
          },
          {
            id: "lk-w7-2",
            title: "sk_buff 结构",
            detail: "分析 sk_buff 的内存布局和数据包处理流程。",
            resources: [
              { title: "sk_buff 详解", url: "https://www.kernel.org/doc/html/latest/networking/skbuff.html" },
              { title: "sk_buff 源码", url: "https://elixir.bootlin.com/linux/latest/source/include/linux/skbuff.h" },
              { title: "SKB 操作 API", url: "https://www.kernel.org/doc/html/latest/networking/kapi.html" },
            ],
          },
          {
            id: "lk-w7-3",
            title: "Netfilter 与 iptables",
            detail: "学习 Netfilter 钩子、连接跟踪和规则匹配。",
            resources: [
              { title: "Netfilter 文档", url: "https://www.netfilter.org/documentation/" },
              { title: "nftables", url: "https://www.netfilter.org/projects/nftables/index.html" },
              { title: "Connection Tracking", url: "https://www.kernel.org/doc/html/latest/networking/nf_conntrack-sysctl.html" },
            ],
          },
          {
            id: "lk-w7-4",
            title: "Socket 实现",
            detail: "理解 socket 系统调用和 TCP/UDP 协议实现。",
            resources: [
              { title: "Socket 文档", url: "https://www.kernel.org/doc/html/latest/networking/msg_zerocopy.html" },
              { title: "TCP 实现", url: "https://elixir.bootlin.com/linux/latest/source/net/ipv4/tcp.c" },
              { title: "io_uring 网络", url: "https://www.kernel.org/doc/html/latest/userspace-api/io_uring.html" },
            ],
          },
        ],
      },
      {
        id: "lk-w8",
        title: "第 8 周：同步与并发",
        summary: "掌握内核同步原语和并发编程技术。",
        keyPoints: [
          "内核中禁用抢占和中断是最基本的同步手段。",
          "自旋锁适用于短临界区，互斥锁允许睡眠。",
          "RCU 提供读写无锁的高效并发访问。",
        ],
        lessons: [
          {
            id: "lk-w8-1",
            title: "原子操作与内存屏障",
            detail: "理解原子变量、编译器屏障和 CPU 内存屏障。",
            resources: [
              { title: "Atomic 操作", url: "https://www.kernel.org/doc/html/latest/core-api/atomic_ops.html" },
              { title: "Memory Barriers", url: "https://www.kernel.org/doc/html/latest/core-api/memory-barriers.html" },
              { title: "Memory Model", url: "https://www.kernel.org/doc/html/latest/locking/ww-mutex-design.html" },
            ],
          },
          {
            id: "lk-w8-2",
            title: "自旋锁与互斥锁",
            detail: "掌握 spinlock、mutex 和读写锁的使用场景。",
            resources: [
              { title: "Locking 文档", url: "https://www.kernel.org/doc/html/latest/locking/index.html" },
              { title: "Spinlock API", url: "https://www.kernel.org/doc/html/latest/locking/spinlocks.html" },
              { title: "Mutex 设计", url: "https://www.kernel.org/doc/html/latest/locking/mutex-design.html" },
            ],
          },
          {
            id: "lk-w8-3",
            title: "RCU 机制",
            detail: "深入理解 Read-Copy-Update 的原理和应用。",
            resources: [
              { title: "RCU 文档", url: "https://www.kernel.org/doc/html/latest/RCU/index.html" },
              { title: "RCU API", url: "https://www.kernel.org/doc/html/latest/RCU/rcu.html" },
              { title: "What is RCU", url: "https://lwn.net/Articles/262464/" },
            ],
          },
          {
            id: "lk-w8-4",
            title: "死锁检测与调试",
            detail: "学习 lockdep 工具和常见死锁模式。",
            resources: [
              { title: "Lockdep", url: "https://www.kernel.org/doc/html/latest/locking/lockdep-design.html" },
              { title: "Lock Debugging", url: "https://www.kernel.org/doc/html/latest/locking/locktorture.html" },
              { title: "Debugging Tips", url: "https://www.kernel.org/doc/html/latest/dev-tools/index.html" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "lk-practice",
    title: "阶段四：实践与贡献",
    duration: "第 9-10 周",
    goal: "掌握内核调试技术，学习如何向 Linux 内核社区贡献代码。",
    weeks: [
      {
        id: "lk-w9",
        title: "第 9 周：内核调试与追踪",
        summary: "掌握内核调试工具和性能分析技术。",
        keyPoints: [
          "printk 是最基本但最常用的调试手段。",
          "KGDB 和 QEMU 可以进行源码级内核调试。",
          "ftrace、perf 和 eBPF 是现代内核追踪的三驾马车。",
        ],
        lessons: [
          {
            id: "lk-w9-1",
            title: "内核日志与 printk",
            detail: "掌握内核日志级别、动态调试和 dmesg 分析。",
            resources: [
              { title: "printk 文档", url: "https://www.kernel.org/doc/html/latest/core-api/printk-basics.html" },
              { title: "Dynamic Debug", url: "https://www.kernel.org/doc/html/latest/admin-guide/dynamic-debug-howto.html" },
              { title: "Kernel Log Levels", url: "https://www.kernel.org/doc/html/latest/admin-guide/kernel-parameters.html" },
            ],
          },
          {
            id: "lk-w9-2",
            title: "KGDB 与 QEMU 调试",
            detail: "配置内核调试环境，使用 GDB 进行源码级调试。",
            resources: [
              { title: "KGDB 文档", url: "https://www.kernel.org/doc/html/latest/dev-tools/kgdb.html" },
              { title: "QEMU + GDB", url: "https://www.kernel.org/doc/html/latest/dev-tools/gdb-kernel-debugging.html" },
              { title: "Debugging with QEMU", url: "https://www.qemu.org/docs/master/system/gdb.html" },
            ],
          },
          {
            id: "lk-w9-3",
            title: "ftrace 与追踪系统",
            detail: "使用 ftrace 进行函数追踪、事件追踪和延迟分析。",
            resources: [
              { title: "ftrace 文档", url: "https://www.kernel.org/doc/html/latest/trace/ftrace.html" },
              { title: "Trace Events", url: "https://www.kernel.org/doc/html/latest/trace/events.html" },
              { title: "trace-cmd", url: "https://trace-cmd.org/" },
            ],
          },
          {
            id: "lk-w9-4",
            title: "eBPF 与性能分析",
            detail: "学习 eBPF 原理和 bpftrace/BCC 工具使用。",
            resources: [
              { title: "eBPF 文档", url: "https://www.kernel.org/doc/html/latest/bpf/index.html" },
              { title: "bpftrace", url: "https://github.com/bpftrace/bpftrace" },
              { title: "BCC Tools", url: "https://github.com/iovisor/bcc" },
            ],
          },
        ],
      },
      {
        id: "lk-w10",
        title: "第 10 周：内核贡献实践",
        summary: "学习 Linux 内核社区的工作方式和贡献流程。",
        keyPoints: [
          "内核开发遵循严格的编码规范和提交要求。",
          "补丁通过邮件列表提交和审核。",
          "从简单的文档或清理补丁开始是最佳入门方式。",
        ],
        lessons: [
          {
            id: "lk-w10-1",
            title: "内核构建与配置",
            detail: "掌握内核编译流程、配置选项和模块管理。",
            resources: [
              { title: "Kernel Build", url: "https://www.kernel.org/doc/html/latest/kbuild/index.html" },
              { title: "Kconfig", url: "https://www.kernel.org/doc/html/latest/kbuild/kconfig-language.html" },
              { title: "Module Build", url: "https://www.kernel.org/doc/html/latest/kbuild/modules.html" },
            ],
          },
          {
            id: "lk-w10-2",
            title: "补丁提交流程",
            detail: "学习 checkpatch、git format-patch 和邮件列表礼仪。",
            resources: [
              { title: "Submitting Patches", url: "https://www.kernel.org/doc/html/latest/process/submitting-patches.html" },
              { title: "checkpatch", url: "https://www.kernel.org/doc/html/latest/dev-tools/checkpatch.html" },
              { title: "Email Clients", url: "https://www.kernel.org/doc/html/latest/process/email-clients.html" },
            ],
          },
          {
            id: "lk-w10-3",
            title: "代码审查与协作",
            detail: "理解内核代码审查流程和如何响应反馈。",
            resources: [
              { title: "Development Process", url: "https://www.kernel.org/doc/html/latest/process/development-process.html" },
              { title: "Maintainer Handbook", url: "https://www.kernel.org/doc/html/latest/maintainer/index.html" },
              { title: "LKML", url: "https://lkml.org/" },
            ],
          },
          {
            id: "lk-w10-4",
            title: "第一个内核补丁",
            detail: "从 Staging 驱动或文档开始，完成第一个补丁提交。",
            resources: [
              { title: "Staging Drivers", url: "https://www.kernel.org/doc/html/latest/staging/index.html" },
              { title: "First Patch Tutorial", url: "https://kernelnewbies.org/FirstKernelPatch" },
              { title: "Kernel Newbies", url: "https://kernelnewbies.org/" },
            ],
          },
        ],
      },
    ],
  },
]

export const linuxKernelKnowledgeCards: KnowledgeCard[] = [
  {
    id: "lk-k1",
    title: "用户空间 vs 内核空间",
    summary: "理解特权级别划分是学习内核的第一步。",
    points: [
      "x86 架构下，内核运行在 Ring 0，用户程序运行在 Ring 3。",
      "系统调用是用户程序请求内核服务的唯一合法途径。",
      "内核空间可以访问所有内存，用户空间只能访问自己的地址空间。",
    ],
    practice: "使用 strace 追踪一个简单程序，观察它触发的系统调用。",
  },
  {
    id: "lk-k2",
    title: "进程与线程的内核视角",
    summary: "内核统一使用 task_struct 表示进程和线程。",
    points: [
      "Linux 中线程是共享地址空间的进程（通过 clone 实现）。",
      "每个 task_struct 都有独立的内核栈。",
      "进程组、会话和命名空间提供不同层次的隔离。",
    ],
    practice: "阅读 task_struct 结构定义，理解关键字段的作用。",
  },
  {
    id: "lk-k3",
    title: "虚拟内存三层模型",
    summary: "虚拟内存系统涉及硬件、内核和用户三个层面。",
    points: [
      "MMU 和页表负责地址转换，TLB 提供缓存加速。",
      "内核维护 mm_struct 和 VMA 描述进程地址空间。",
      "用户通过 mmap/brk 请求内存，触发缺页时才分配物理页。",
    ],
    practice: "查看 /proc/[pid]/maps 文件，分析进程的内存布局。",
  },
  {
    id: "lk-k4",
    title: "VFS 抽象层",
    summary: "VFS 让不同文件系统共用同一套接口。",
    points: [
      "superblock、inode、dentry、file 是 VFS 的四大对象。",
      "每种文件系统实现 file_operations、inode_operations 等回调。",
      "dentry 缓存（dcache）显著加速路径名查找。",
    ],
    practice: "查看 /proc/filesystems 和 /proc/mounts 理解挂载机制。",
  },
  {
    id: "lk-k5",
    title: "中断上下文 vs 进程上下文",
    summary: "内核代码执行在两种不同的上下文中。",
    points: [
      "进程上下文有明确的 current 进程，可以睡眠。",
      "中断上下文没有进程身份，不能睡眠。",
      "软中断和工作队列用于延迟处理，但执行上下文不同。",
    ],
    practice: "编写一个字符设备驱动，区分哪些操作可以睡眠。",
  },
  {
    id: "lk-k6",
    title: "锁的选择指南",
    summary: "选择正确的同步原语是避免问题的关键。",
    points: [
      "中断上下文必须使用自旋锁（且禁用中断）。",
      "长临界区、可睡眠操作使用互斥锁。",
      "读多写少场景考虑 RCU 或读写锁。",
    ],
    practice: "分析一段内核代码，解释为什么使用特定的锁类型。",
  },
  {
    id: "lk-k7",
    title: "sk_buff 数据结构",
    summary: "sk_buff 是网络子系统的核心数据结构。",
    points: [
      "数据包在协议栈中上下传递时操作同一个 skb。",
      "head/data/tail/end 指针支持高效的头部/尾部操作。",
      "skb_clone 和 skb_copy 处理数据共享。",
    ],
    practice: "追踪一个 ping 包从网卡驱动到用户空间的完整路径。",
  },
  {
    id: "lk-k8",
    title: "设备模型三剑客",
    summary: "bus、device、driver 构成 Linux 设备模型。",
    points: [
      "总线类型定义匹配规则（PCI、USB、Platform 等）。",
      "device 和 driver 注册后由总线进行匹配和绑定。",
      "sysfs 暴露设备模型结构供用户空间查看。",
    ],
    practice: "使用 ls /sys/bus/ 浏览系统中的总线和设备。",
  },
  {
    id: "lk-k9",
    title: "RCU 核心思想",
    summary: "Read-Copy-Update 实现无锁读取。",
    points: [
      "读者无需加锁，使用 rcu_read_lock 标记临界区。",
      "写者创建副本修改，通过 grace period 等待读者退出后替换。",
      "适用于读多写少、允许短暂过期数据的场景。",
    ],
    practice: "在内核源码中找到 RCU 的使用示例，理解其应用场景。",
  },
  {
    id: "lk-k10",
    title: "内核调试工具箱",
    summary: "掌握调试工具是高效开发的关键。",
    points: [
      "printk/pr_* 是最常用的调试手段，注意日志级别。",
      "ftrace 可以追踪函数调用，定位性能瓶颈。",
      "eBPF 是现代内核可观测性的首选技术。",
    ],
    practice: "使用 ftrace 追踪一个系统调用的完整执行路径。",
  },
]

export const linuxKernelExamQuestions: QuizQuestion[] = [
  {
    id: "lk-q1",
    question: "Linux 内核是什么类型的内核架构？",
    options: [
      "微内核 (Microkernel)",
      "宏内核 (Monolithic Kernel)",
      "混合内核 (Hybrid Kernel)",
      "外内核 (Exokernel)",
    ],
    answer: 1,
    rationale: "Linux 是宏内核架构，所有核心功能（进程管理、内存管理、文件系统等）都运行在内核空间，通过模块机制提供一定的灵活性。",
  },
  {
    id: "lk-q2",
    question: "系统调用从用户空间进入内核空间时，x86-64 Linux 使用哪条指令？",
    options: [
      "int 0x80",
      "syscall",
      "sysenter",
      "call",
    ],
    answer: 1,
    rationale: "x86-64 架构使用 syscall 指令进入内核，它比传统的 int 0x80 更快。32 位系统可能使用 sysenter。",
  },
  {
    id: "lk-q3",
    question: "task_struct 结构用于表示什么？",
    options: [
      "仅进程",
      "仅线程",
      "进程和线程",
      "仅内核线程",
    ],
    answer: 2,
    rationale: "Linux 内核使用统一的 task_struct 表示进程和线程。线程在内核看来是共享某些资源的轻量级进程。",
  },
  {
    id: "lk-q4",
    question: "Linux 默认的进程调度器是？",
    options: [
      "O(1) 调度器",
      "CFS (完全公平调度器)",
      "BFS (脑残调度器)",
      "Round Robin",
    ],
    answer: 1,
    rationale: "从 Linux 2.6.23 开始，CFS 成为默认调度器，使用红黑树和虚拟运行时间实现公平调度。",
  },
  {
    id: "lk-q5",
    question: "copy-on-write (COW) 技术主要用于优化哪个系统调用？",
    options: [
      "exec()",
      "fork()",
      "read()",
      "mmap()",
    ],
    answer: 1,
    rationale: "fork() 使用 COW 技术，父子进程共享物理页，只有在写入时才复制，避免了大量不必要的内存复制。",
  },
  {
    id: "lk-q6",
    question: "Linux 物理内存管理使用哪种算法分配页帧？",
    options: [
      "First Fit",
      "Best Fit",
      "Buddy System（伙伴系统）",
      "Bitmap",
    ],
    answer: 2,
    rationale: "Linux 使用伙伴系统管理物理页帧，可以高效分配 2^n 个连续页，并且有效减少外部碎片。",
  },
  {
    id: "lk-q7",
    question: "SLAB/SLUB 分配器主要用于？",
    options: [
      "分配大块连续内存",
      "高效分配小型内核对象",
      "管理用户空间内存",
      "实现交换分区",
    ],
    answer: 1,
    rationale: "SLAB/SLUB 分配器构建在伙伴系统之上，通过对象缓存高效管理内核中频繁分配的小对象（如 task_struct、inode 等）。",
  },
  {
    id: "lk-q8",
    question: "VFS（虚拟文件系统）的主要目的是？",
    options: [
      "提供更快的磁盘访问",
      "为不同文件系统提供统一接口",
      "实现文件加密",
      "管理网络文件共享",
    ],
    answer: 1,
    rationale: "VFS 是一个抽象层，让用户程序可以用相同的系统调用（open、read、write 等）访问不同类型的文件系统。",
  },
  {
    id: "lk-q9",
    question: "inode 不包含以下哪项信息？",
    options: [
      "文件大小",
      "文件权限",
      "文件名",
      "数据块位置",
    ],
    answer: 2,
    rationale: "inode 存储文件的元数据（大小、权限、时间戳、数据块位置等），但不包含文件名。文件名存储在目录项（dentry）中。",
  },
  {
    id: "lk-q10",
    question: "在中断上下文中，以下哪种操作是禁止的？",
    options: [
      "读取内存",
      "调用 schedule() 睡眠",
      "修改全局变量",
      "使用自旋锁",
    ],
    answer: 1,
    rationale: "中断上下文没有进程上下文，不能睡眠。睡眠会导致调度器找不到可切换的进程，造成系统死锁。",
  },
  {
    id: "lk-q11",
    question: "spinlock（自旋锁）与 mutex 的主要区别是？",
    options: [
      "spinlock 更慢",
      "spinlock 等待时不释放 CPU，mutex 会睡眠让出 CPU",
      "mutex 不能用于 SMP 系统",
      "spinlock 支持递归加锁",
    ],
    answer: 1,
    rationale: "spinlock 在等待锁时会忙等（自旋），不释放 CPU，适用于短临界区。mutex 在锁被占用时会让当前进程睡眠，适用于长临界区。",
  },
  {
    id: "lk-q12",
    question: "RCU（Read-Copy-Update）的主要优势是？",
    options: [
      "写操作更快",
      "读操作几乎无开销",
      "减少内存使用",
      "简化代码逻辑",
    ],
    answer: 1,
    rationale: "RCU 允许读者无锁并发访问，只需要标记临界区，开销极低。写者需要等待 grace period 确保没有读者后才能回收旧数据。",
  },
  {
    id: "lk-q13",
    question: "sk_buff 结构在 Linux 网络协议栈中的作用是？",
    options: [
      "存储 socket 信息",
      "表示网络数据包",
      "管理网络连接",
      "实现 IP 路由",
    ],
    answer: 1,
    rationale: "sk_buff 是网络数据包在内核中的表示，包含数据指针、协议头信息和元数据，在协议栈中上下传递。",
  },
  {
    id: "lk-q14",
    question: "Netfilter 框架的主要功能是？",
    options: [
      "实现 TCP/IP 协议",
      "提供数据包过滤和网络地址转换 (NAT)",
      "加速网络传输",
      "管理网络设备",
    ],
    answer: 1,
    rationale: "Netfilter 在协议栈的多个位置提供钩子点，允许模块（如 iptables/nftables）进行包过滤、NAT、连接跟踪等操作。",
  },
  {
    id: "lk-q15",
    question: "Linux 设备模型中，kobject 的作用是？",
    options: [
      "表示物理设备",
      "提供设备模型的基础对象，支持引用计数和 sysfs",
      "管理设备中断",
      "实现设备 I/O",
    ],
    answer: 1,
    rationale: "kobject 是设备模型的基础构建块，提供引用计数、sysfs 表示和父子关系管理，device、driver 等都嵌入 kobject。",
  },
  {
    id: "lk-q16",
    question: "字符设备和块设备的主要区别是？",
    options: [
      "字符设备更快",
      "块设备支持随机访问和缓冲，字符设备按字节流访问",
      "字符设备只能读不能写",
      "块设备不支持 ioctl",
    ],
    answer: 1,
    rationale: "块设备（如硬盘）支持随机访问、使用页缓存，以固定大小块为单位。字符设备（如串口）按字节流顺序访问，通常不使用缓冲。",
  },
  {
    id: "lk-q17",
    question: "DMA (直接内存访问) 的主要优势是？",
    options: [
      "简化驱动开发",
      "允许设备直接访问内存，无需 CPU 参与数据传输",
      "增加数据传输的可靠性",
      "减少内存使用",
    ],
    answer: 1,
    rationale: "DMA 允许设备直接与内存交换数据，CPU 只需设置传输参数，传输完成后收到中断通知，大大减少 CPU 负载。",
  },
  {
    id: "lk-q18",
    question: "printk 与 printf 的主要区别是？",
    options: [
      "printk 更慢",
      "printk 运行在内核空间，输出到内核日志缓冲区",
      "printk 不支持格式化",
      "printk 只能输出字符串",
    ],
    answer: 1,
    rationale: "printk 是内核专用的打印函数，输出到环形日志缓冲区，可以通过 dmesg 查看。它支持日志级别和特殊格式化指示符。",
  },
  {
    id: "lk-q19",
    question: "ftrace 主要用于？",
    options: [
      "文件系统调试",
      "内核函数追踪和性能分析",
      "网络包捕获",
      "内存泄漏检测",
    ],
    answer: 1,
    rationale: "ftrace 是 Linux 内置的追踪框架，可以追踪函数调用、记录事件、测量延迟，是性能分析和调试的重要工具。",
  },
  {
    id: "lk-q20",
    question: "eBPF 相比传统内核模块的优势是？",
    options: [
      "执行更快",
      "安全沙箱运行，无需编译内核模块",
      "功能更强大",
      "使用更简单",
    ],
    answer: 1,
    rationale: "eBPF 程序在内核沙箱中运行，由验证器确保安全，可以动态加载无需重启，广泛用于观测、网络和安全场景。",
  },
  {
    id: "lk-q21",
    question: "提交内核补丁时，应该发送到哪里？",
    options: [
      "GitHub Pull Request",
      "内核邮件列表 (LKML) 和子系统维护者",
      "kernel.org 网站",
      "直接发给 Linus Torvalds",
    ],
    answer: 1,
    rationale: "内核开发使用邮件列表工作流，补丁通过 git format-patch 生成，发送到 LKML 和相关子系统维护者进行审核。",
  },
  {
    id: "lk-q22",
    question: "checkpatch.pl 脚本的作用是？",
    options: [
      "编译内核",
      "检查补丁是否符合内核编码规范",
      "测试内核功能",
      "生成补丁文件",
    ],
    answer: 1,
    rationale: "checkpatch.pl 是内核自带的脚本，用于检查补丁是否符合编码规范，发现格式问题、风格问题和潜在错误。",
  },
  {
    id: "lk-q23",
    question: "Linux 内核使用的版本控制系统是？",
    options: [
      "SVN",
      "Git",
      "Mercurial",
      "CVS",
    ],
    answer: 1,
    rationale: "Linux 内核使用 Git 进行版本控制，Git 最初就是 Linus Torvalds 为内核开发而创建的。",
  },
  {
    id: "lk-q24",
    question: "container_of 宏的作用是？",
    options: [
      "创建容器对象",
      "通过成员指针获取包含它的结构体指针",
      "检查对象类型",
      "管理内存容器",
    ],
    answer: 1,
    rationale: "container_of 是内核中最常用的宏之一，给定结构体成员的地址，可以计算出包含该成员的结构体的起始地址。",
  },
  {
    id: "lk-q25",
    question: "内核中的 likely() 和 unlikely() 宏的作用是？",
    options: [
      "实现条件编译",
      "提示编译器分支预测，优化代码布局",
      "检查空指针",
      "实现断言",
    ],
    answer: 1,
    rationale: "这些宏使用 GCC 的 __builtin_expect 提示编译器哪个分支更可能执行，帮助生成更优的指令布局和分支预测。",
  },
]

export const linuxKernelRoadmap: RoadmapDefinition = {
  id: "linux-kernel",
  label: "Linux 内核",
  title: "Linux 内核开发学习路线",
  durationLabel: "完整学习路线",
  description: "从 Linux 基础到内核核心子系统，再到驱动开发和社区贡献的系统化学习路线，帮助你深入理解操作系统内核并参与开源贡献。",
  heroBadge: "内核开发",
  stages: linuxKernelStages,
  knowledgeCards: linuxKernelKnowledgeCards,
  examQuestions: linuxKernelExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "从 Linux 系统基础和 C 语言开始，这是内核学习的必要基础。"
    if (percent < 30) return "深入理解进程和内存管理，多阅读源码并动手实验。"
    if (percent < 50) return "文件系统和设备驱动是理解内核模块化设计的关键。"
    if (percent < 70) return "网络子系统和同步机制较复杂，结合实际项目学习效果更好。"
    if (percent < 90) return "开始尝试向内核提交简单补丁，参与社区是最好的学习方式。"
    return "恭喜完成路线！可以选择深耕某个子系统，或者开始维护自己的内核模块！"
  },
  resourceGuide: {
    environment: "准备 Linux 开发环境（推荐 Ubuntu/Fedora），安装编译工具链（gcc、make、flex、bison 等），配置 QEMU 用于内核调试。",
    fallbackKeyPoints: [
      "内核源码是最好的学习资料，善用 Elixir Cross Referencer 在线阅读。",
      "每学习一个概念就写代码验证，哪怕只是简单的内核模块。",
      "理解数据结构比记忆 API 更重要，链表、红黑树在内核中无处不在。",
    ],
    handsOnSteps: [
      "编译一个最小化内核并在 QEMU 中启动。",
      "编写一个 Hello World 内核模块。",
      "实现一个简单的字符设备驱动。",
      "使用 ftrace 追踪一个系统调用的执行路径。",
    ],
    selfChecks: [
      "能否解释用户空间和内核空间的区别？",
      "能否描述一个系统调用从用户程序到内核的完整流程？",
      "能否说明自旋锁和互斥锁的使用场景？",
      "能否读懂 container_of 宏的实现原理？",
    ],
    extensions: [
      "深入某个子系统：调度器、内存管理或网络协议栈。",
      "学习 Rust for Linux 项目，探索内核的未来发展。",
      "阅读 LWN.net 跟踪内核社区的最新动态。",
      "参与 Outreachy 或 GSoC 获得指导性的内核贡献经验。",
    ],
    lessonQuizAdvice: "内核学习重在理解原理而非记忆细节，面试时更看重对设计决策的理解和问题分析能力。",
  },
}
