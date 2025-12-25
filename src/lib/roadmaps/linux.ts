import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const linuxStages: Stage[] = [
  // ═══════════════════════════════════════════════════════════════
  // 阶段一：Linux 基础（第 1-3 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "linux-foundation",
    title: "阶段一：Linux 基础",
    duration: "第 1-3 周",
    goal: "掌握 Linux 命令行基础、文件系统与权限管理、用户与组管理。",
    weeks: [
      {
        id: "linux-w1",
        title: "第 1 周：命令行基础",
        summary: "熟练使用 Linux 命令行，掌握基础命令与 Shell 操作。",
        keyPoints: [
          "命令行是 Linux 管理的核心技能。",
          "管道和重定向实现命令组合与数据流控制。",
          "文本处理工具是日常运维的利器。",
        ],
        lessons: [
          {
            id: "linux-w1-1",
            title: "Shell 与基础命令",
            detail: "理解 Shell 工作原理与常用命令。",
            keyPoints: [
              "Bash 是最常用的 Shell，Zsh 和 Fish 是现代替代。",
              "文件操作：ls、cd、cp、mv、rm、mkdir、touch。",
              "查看文件：cat、less、head、tail、wc。",
              "查找：find、locate、which、whereis。",
            ],
            resources: [
              { title: "GNU Bash Manual", url: "https://www.gnu.org/software/bash/manual/" },
              { title: "Linux Command Library", url: "https://linuxcommandlibrary.com/" },
              { title: "TLDR Pages", url: "https://tldr.sh/" },
            ],
          },
          {
            id: "linux-w1-2",
            title: "管道与重定向",
            detail: "使用管道和重定向组合命令。",
            keyPoints: [
              "标准流：stdin（0）、stdout（1）、stderr（2）。",
              "重定向：>（覆盖）、>>（追加）、2>&1（合并错误）。",
              "管道（|）：将一个命令的输出作为另一个命令的输入。",
              "tee：同时输出到文件和屏幕。",
            ],
            resources: [
              { title: "Bash Redirections", url: "https://www.gnu.org/software/bash/manual/html_node/Redirections.html" },
              { title: "Pipelines", url: "https://www.gnu.org/software/bash/manual/html_node/Pipelines.html" },
              { title: "Linux I/O Redirection", url: "https://linuxcommand.org/lc3_lts0070.php" },
            ],
          },
          {
            id: "linux-w1-3",
            title: "文本处理工具",
            detail: "使用 grep、sed、awk 处理文本。",
            keyPoints: [
              "grep：正则表达式搜索，-E 扩展正则，-r 递归。",
              "sed：流编辑器，替换、删除、插入行。",
              "awk：字段处理，$1、$2 访问列，NR 行号，NF 字段数。",
              "cut、sort、uniq、tr：常用文本处理工具。",
            ],
            resources: [
              { title: "GNU Grep Manual", url: "https://www.gnu.org/software/grep/manual/" },
              { title: "GNU Sed Manual", url: "https://www.gnu.org/software/sed/manual/" },
              { title: "GNU Awk Manual", url: "https://www.gnu.org/software/gawk/manual/" },
            ],
          },
        ],
      },
      {
        id: "linux-w2",
        title: "第 2 周：文件系统与权限",
        summary: "理解 Linux 文件系统层次结构与权限模型。",
        keyPoints: [
          "FHS 定义了 Linux 目录结构标准。",
          "权限控制访问，所有者/组/其他三级别。",
          "特殊权限（SUID/SGID/Sticky）用于特定场景。",
        ],
        lessons: [
          {
            id: "linux-w2-1",
            title: "文件系统层次结构",
            detail: "理解 Linux 目录结构与文件系统。",
            keyPoints: [
              "/：根目录，所有文件的起点。",
              "/etc：配置文件，/var：可变数据，/home：用户目录。",
              "/usr：用户程序，/opt：可选软件，/tmp：临时文件。",
              "/proc、/sys：虚拟文件系统，内核与硬件信息。",
            ],
            resources: [
              { title: "Filesystem Hierarchy Standard", url: "https://refspecs.linuxfoundation.org/FHS_3.0/fhs-3.0.html" },
              { title: "Linux Directory Structure", url: "https://www.pathname.com/fhs/" },
              { title: "Understanding /proc", url: "https://tldp.org/LDP/Linux-Filesystem-Hierarchy/html/proc.html" },
            ],
          },
          {
            id: "linux-w2-2",
            title: "文件权限与所有权",
            detail: "管理文件权限与所有权。",
            keyPoints: [
              "权限位：r（4）、w（2）、x（1），三组 owner/group/others。",
              "chmod：修改权限，数字模式（755）或符号模式（u+x）。",
              "chown：修改所有者，chgrp：修改组。",
              "umask：设置默认权限掩码。",
            ],
            resources: [
              { title: "File Permissions", url: "https://www.gnu.org/software/coreutils/manual/html_node/File-permissions.html" },
              { title: "chmod", url: "https://man7.org/linux/man-pages/man1/chmod.1.html" },
              { title: "Linux Permissions Guide", url: "https://linuxcommand.org/lc3_lts0090.php" },
            ],
          },
          {
            id: "linux-w2-3",
            title: "特殊权限与 ACL",
            detail: "使用特殊权限和访问控制列表。",
            keyPoints: [
              "SUID（4）：以文件所有者身份执行，如 /usr/bin/passwd。",
              "SGID（2）：继承目录组，协作目录常用。",
              "Sticky bit（1）：只有所有者可删除，如 /tmp。",
              "ACL：细粒度权限控制，getfacl、setfacl。",
            ],
            resources: [
              { title: "Special Permissions", url: "https://www.redhat.com/sysadmin/suid-sgid-sticky-bit" },
              { title: "ACL Guide", url: "https://wiki.archlinux.org/title/Access_Control_Lists" },
              { title: "setfacl", url: "https://man7.org/linux/man-pages/man1/setfacl.1.html" },
            ],
          },
        ],
      },
      {
        id: "linux-w3",
        title: "第 3 周：用户与组管理",
        summary: "掌握 Linux 用户、组与认证管理。",
        keyPoints: [
          "用户和组是 Linux 访问控制的基础。",
          "PAM 提供灵活的认证框架。",
          "sudo 实现权限委派和审计。",
        ],
        lessons: [
          {
            id: "linux-w3-1",
            title: "用户与组管理",
            detail: "创建和管理用户与组。",
            keyPoints: [
              "useradd/usermod/userdel：用户管理命令。",
              "groupadd/groupmod/groupdel：组管理命令。",
              "/etc/passwd：用户信息，/etc/shadow：密码哈希。",
              "/etc/group：组信息，/etc/gshadow：组密码。",
            ],
            resources: [
              { title: "User Management", url: "https://www.redhat.com/sysadmin/linux-user-management" },
              { title: "useradd", url: "https://man7.org/linux/man-pages/man8/useradd.8.html" },
              { title: "Managing Users", url: "https://wiki.archlinux.org/title/Users_and_groups" },
            ],
          },
          {
            id: "linux-w3-2",
            title: "PAM 认证框架",
            detail: "理解可插拔认证模块。",
            keyPoints: [
              "PAM：Pluggable Authentication Modules。",
              "配置文件：/etc/pam.d/ 下按服务配置。",
              "模块类型：auth、account、password、session。",
              "常用模块：pam_unix、pam_ldap、pam_google_authenticator。",
            ],
            resources: [
              { title: "Linux-PAM", url: "http://www.linux-pam.org/Linux-PAM-html/" },
              { title: "PAM Configuration", url: "https://www.redhat.com/sysadmin/pam-configuration-file" },
              { title: "Understanding PAM", url: "https://wiki.archlinux.org/title/PAM" },
            ],
          },
          {
            id: "linux-w3-3",
            title: "sudo 与权限委派",
            detail: "配置 sudo 实现安全的权限提升。",
            keyPoints: [
              "sudo：以其他用户（通常 root）身份执行命令。",
              "/etc/sudoers：sudo 配置文件，用 visudo 编辑。",
              "规则语法：user host=(runas) commands。",
              "NOPASSWD：免密执行，谨慎使用。",
            ],
            resources: [
              { title: "Sudo Manual", url: "https://www.sudo.ws/docs/man/sudoers.man/" },
              { title: "Sudo Configuration", url: "https://www.redhat.com/sysadmin/sudo-configuration" },
              { title: "Sudoers Examples", url: "https://wiki.archlinux.org/title/Sudo" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段二：系统管理（第 4-6 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "linux-system",
    title: "阶段二：系统管理",
    duration: "第 4-6 周",
    goal: "掌握进程管理、systemd 服务管理、软件包管理与日志管理。",
    weeks: [
      {
        id: "linux-w4",
        title: "第 4 周：进程管理",
        summary: "理解 Linux 进程模型与管理工具。",
        keyPoints: [
          "进程是程序的运行实例，有唯一 PID。",
          "进程有不同状态：运行、睡眠、停止、僵尸。",
          "信号是进程间通信的基本机制。",
        ],
        lessons: [
          {
            id: "linux-w4-1",
            title: "进程基础",
            detail: "理解 Linux 进程模型。",
            keyPoints: [
              "进程属性：PID、PPID、UID、GID、优先级。",
              "进程状态：R（运行）、S（睡眠）、D（不可中断）、Z（僵尸）、T（停止）。",
              "前台与后台：&、jobs、fg、bg、nohup。",
              "进程树：pstree 查看父子关系。",
            ],
            resources: [
              { title: "Process Management", url: "https://tldp.org/LDP/intro-linux/html/chap_04.html" },
              { title: "Process States", url: "https://man7.org/linux/man-pages/man5/proc.5.html" },
              { title: "Linux Processes", url: "https://www.redhat.com/sysadmin/linux-process-management" },
            ],
          },
          {
            id: "linux-w4-2",
            title: "进程监控与管理",
            detail: "使用工具监控和管理进程。",
            keyPoints: [
              "ps：查看进程，aux 显示所有进程详情。",
              "top/htop：实时进程监控。",
              "kill/killall/pkill：发送信号终止进程。",
              "nice/renice：调整进程优先级（-20 到 19）。",
            ],
            resources: [
              { title: "ps Manual", url: "https://man7.org/linux/man-pages/man1/ps.1.html" },
              { title: "htop", url: "https://htop.dev/" },
              { title: "Process Signals", url: "https://man7.org/linux/man-pages/man7/signal.7.html" },
            ],
          },
          {
            id: "linux-w4-3",
            title: "资源限制与 cgroups",
            detail: "限制进程资源使用。",
            keyPoints: [
              "ulimit：用户级资源限制（文件数、内存等）。",
              "/etc/security/limits.conf：持久化限制配置。",
              "cgroups v2：内核级资源控制，CPU、内存、I/O。",
              "systemd 集成 cgroups：通过 slice 管理资源。",
            ],
            resources: [
              { title: "Resource Limits", url: "https://man7.org/linux/man-pages/man5/limits.conf.5.html" },
              { title: "Cgroups v2", url: "https://docs.kernel.org/admin-guide/cgroup-v2.html" },
              { title: "Control Groups", url: "https://www.redhat.com/sysadmin/cgroups-part-one" },
            ],
          },
        ],
      },
      {
        id: "linux-w5",
        title: "第 5 周：systemd 服务管理",
        summary: "掌握 systemd 服务与系统管理。",
        keyPoints: [
          "systemd 是现代 Linux 的初始化系统和服务管理器。",
          "Unit 文件定义服务配置和依赖关系。",
          "Target 替代传统运行级别概念。",
        ],
        lessons: [
          {
            id: "linux-w5-1",
            title: "systemd 基础",
            detail: "理解 systemd 架构与基本操作。",
            keyPoints: [
              "systemctl：服务管理主命令。",
              "常用操作：start、stop、restart、status、enable、disable。",
              "Unit 类型：service、socket、timer、target、mount。",
              "依赖关系：Requires、Wants、After、Before。",
            ],
            resources: [
              { title: "systemd Documentation", url: "https://systemd.io/" },
              { title: "systemctl", url: "https://man7.org/linux/man-pages/man1/systemctl.1.html" },
              { title: "systemd Guide", url: "https://www.freedesktop.org/software/systemd/man/latest/" },
            ],
          },
          {
            id: "linux-w5-2",
            title: "编写 Unit 文件",
            detail: "创建自定义 systemd 服务。",
            keyPoints: [
              "[Unit]：描述、依赖关系。",
              "[Service]：ExecStart、Type（simple/forking/oneshot）、Restart。",
              "[Install]：WantedBy、RequiredBy。",
              "路径：/etc/systemd/system/（自定义）、/usr/lib/systemd/system/（包）。",
            ],
            resources: [
              { title: "Unit Files", url: "https://www.freedesktop.org/software/systemd/man/latest/systemd.unit.html" },
              { title: "Service Units", url: "https://www.freedesktop.org/software/systemd/man/latest/systemd.service.html" },
              { title: "Writing Unit Files", url: "https://www.redhat.com/sysadmin/systemd-unit-files" },
            ],
          },
          {
            id: "linux-w5-3",
            title: "Timer 与 Socket 激活",
            detail: "使用 systemd timer 和 socket 激活。",
            keyPoints: [
              "Timer：替代 cron，支持日历和单调时间。",
              "OnCalendar：类 cron 表达式，如 *-*-* 00:00:00。",
              "Socket 激活：按需启动服务，节省资源。",
              "systemd-analyze：分析启动时间和依赖。",
            ],
            resources: [
              { title: "Timer Units", url: "https://www.freedesktop.org/software/systemd/man/latest/systemd.timer.html" },
              { title: "Socket Units", url: "https://www.freedesktop.org/software/systemd/man/latest/systemd.socket.html" },
              { title: "Timers vs Cron", url: "https://wiki.archlinux.org/title/Systemd/Timers" },
            ],
          },
        ],
      },
      {
        id: "linux-w6",
        title: "第 6 周：软件包与日志管理",
        summary: "掌握软件包管理与 journald 日志系统。",
        keyPoints: [
          "不同发行版有不同的包管理器。",
          "journald 是 systemd 的日志组件。",
          "日志分析是故障排查的关键技能。",
        ],
        lessons: [
          {
            id: "linux-w6-1",
            title: "软件包管理",
            detail: "使用不同发行版的包管理器。",
            keyPoints: [
              "APT（Debian/Ubuntu）：apt install/remove/update/upgrade。",
              "DNF/YUM（RHEL/Fedora）：dnf install/remove/update。",
              "仓库配置：/etc/apt/sources.list、/etc/yum.repos.d/。",
              "依赖解决：自动处理依赖关系。",
            ],
            resources: [
              { title: "APT User's Guide", url: "https://www.debian.org/doc/manuals/apt-guide/" },
              { title: "DNF Documentation", url: "https://dnf.readthedocs.io/" },
              { title: "Package Management", url: "https://www.redhat.com/sysadmin/package-managers" },
            ],
          },
          {
            id: "linux-w6-2",
            title: "journald 日志系统",
            detail: "使用 journald 管理系统日志。",
            keyPoints: [
              "journalctl：查询 systemd 日志。",
              "过滤：-u（服务）、-p（优先级）、--since/--until（时间）。",
              "持久化：/etc/systemd/journald.conf，Storage=persistent。",
              "日志轮转：SystemMaxUse、SystemKeepFree。",
            ],
            resources: [
              { title: "journalctl", url: "https://man7.org/linux/man-pages/man1/journalctl.1.html" },
              { title: "journald.conf", url: "https://www.freedesktop.org/software/systemd/man/latest/journald.conf.html" },
              { title: "Journal Guide", url: "https://wiki.archlinux.org/title/Systemd/Journal" },
            ],
          },
          {
            id: "linux-w6-3",
            title: "rsyslog 与日志分析",
            detail: "配置 rsyslog 和分析日志。",
            keyPoints: [
              "rsyslog：传统 syslog 守护进程，支持远程日志。",
              "设施和优先级：kern、auth、mail、local0-7 × emerg-debug。",
              "日志文件：/var/log/messages、/var/log/secure、/var/log/syslog。",
              "日志分析工具：grep、awk、logwatch、GoAccess。",
            ],
            resources: [
              { title: "rsyslog Documentation", url: "https://www.rsyslog.com/doc/" },
              { title: "Syslog Protocol", url: "https://datatracker.ietf.org/doc/html/rfc5424" },
              { title: "Log Analysis", url: "https://www.redhat.com/sysadmin/analyze-linux-logs" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段三：存储管理（第 7-9 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "linux-storage",
    title: "阶段三：存储管理",
    duration: "第 7-9 周",
    goal: "掌握磁盘分区、文件系统、LVM 与网络存储。",
    weeks: [
      {
        id: "linux-w7",
        title: "第 7 周：磁盘与文件系统",
        summary: "理解磁盘分区与 Linux 文件系统。",
        keyPoints: [
          "GPT 是现代分区表标准，取代 MBR。",
          "ext4 是最常用的 Linux 文件系统。",
          "XFS 是 RHEL 默认，适合大文件和高并发。",
        ],
        lessons: [
          {
            id: "linux-w7-1",
            title: "磁盘分区",
            detail: "管理磁盘分区表和分区。",
            keyPoints: [
              "MBR vs GPT：MBR 最大 2TB，GPT 支持更大磁盘。",
              "fdisk：MBR 分区工具，gdisk/parted：GPT 工具。",
              "分区类型：主分区、扩展分区、逻辑分区（MBR）。",
              "lsblk、blkid：查看块设备和分区信息。",
            ],
            resources: [
              { title: "fdisk", url: "https://man7.org/linux/man-pages/man8/fdisk.8.html" },
              { title: "parted", url: "https://www.gnu.org/software/parted/manual/" },
              { title: "GPT vs MBR", url: "https://wiki.archlinux.org/title/Partitioning" },
            ],
          },
          {
            id: "linux-w7-2",
            title: "文件系统类型",
            detail: "理解不同文件系统的特点。",
            keyPoints: [
              "ext4：成熟稳定，日志文件系统，最大 16TB 文件。",
              "XFS：高性能，大文件优化，在线扩展。",
              "Btrfs：CoW、快照、压缩、子卷。",
              "ZFS：数据完整性、RAID-Z、快照、去重。",
            ],
            resources: [
              { title: "ext4", url: "https://ext4.wiki.kernel.org/" },
              { title: "XFS", url: "https://xfs.wiki.kernel.org/" },
              { title: "Btrfs", url: "https://btrfs.readthedocs.io/" },
            ],
          },
          {
            id: "linux-w7-3",
            title: "文件系统管理",
            detail: "创建、挂载和维护文件系统。",
            keyPoints: [
              "mkfs：创建文件系统，mkfs.ext4、mkfs.xfs。",
              "mount/umount：挂载和卸载文件系统。",
              "/etc/fstab：开机自动挂载配置。",
              "fsck：文件系统检查和修复。",
            ],
            resources: [
              { title: "mount", url: "https://man7.org/linux/man-pages/man8/mount.8.html" },
              { title: "fstab", url: "https://man7.org/linux/man-pages/man5/fstab.5.html" },
              { title: "Filesystem Management", url: "https://www.redhat.com/sysadmin/linux-filesystem-management" },
            ],
          },
        ],
      },
      {
        id: "linux-w8",
        title: "第 8 周：LVM 与 RAID",
        summary: "使用 LVM 和 RAID 实现灵活的存储管理。",
        keyPoints: [
          "LVM 提供逻辑卷的灵活管理。",
          "RAID 通过冗余提高可靠性或性能。",
          "Stratis 是 RHEL 的新存储管理方案。",
        ],
        lessons: [
          {
            id: "linux-w8-1",
            title: "LVM 逻辑卷管理",
            detail: "使用 LVM 管理存储。",
            keyPoints: [
              "PV（物理卷）→ VG（卷组）→ LV（逻辑卷）。",
              "pvcreate/vgcreate/lvcreate：创建 LVM 组件。",
              "lvextend/lvreduce：动态调整逻辑卷大小。",
              "快照：lvcreate -s，用于备份和测试。",
            ],
            resources: [
              { title: "LVM Guide", url: "https://tldp.org/HOWTO/LVM-HOWTO/" },
              { title: "LVM Administrator's Guide", url: "https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/configuring_and_managing_logical_volumes" },
              { title: "LVM Wiki", url: "https://wiki.archlinux.org/title/LVM" },
            ],
          },
          {
            id: "linux-w8-2",
            title: "软件 RAID",
            detail: "使用 mdadm 配置软件 RAID。",
            keyPoints: [
              "RAID 级别：0（条带）、1（镜像）、5（分布式奇偶校验）、10。",
              "mdadm：创建、管理、监控软件 RAID。",
              "mdadm --create：创建 RAID 阵列。",
              "/etc/mdadm.conf：RAID 配置持久化。",
            ],
            resources: [
              { title: "mdadm", url: "https://man7.org/linux/man-pages/man8/mdadm.8.html" },
              { title: "RAID Guide", url: "https://raid.wiki.kernel.org/" },
              { title: "Software RAID", url: "https://wiki.archlinux.org/title/RAID" },
            ],
          },
          {
            id: "linux-w8-3",
            title: "Stratis 存储管理",
            detail: "使用 Stratis 简化存储管理（RHEL）。",
            keyPoints: [
              "Stratis：Red Hat 的现代存储管理方案。",
              "池（Pool）：管理物理存储设备。",
              "文件系统：自动精简配置，快照支持。",
              "stratis pool/filesystem：管理命令。",
            ],
            resources: [
              { title: "Stratis", url: "https://stratis-storage.github.io/" },
              { title: "Stratis Guide", url: "https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/managing_file_systems/managing-layered-local-storage-with-stratis_managing-file-systems" },
              { title: "Getting Started with Stratis", url: "https://www.redhat.com/sysadmin/stratis-storage-management" },
            ],
          },
        ],
      },
      {
        id: "linux-w9",
        title: "第 9 周：网络存储",
        summary: "配置和使用网络存储（NFS、iSCSI）。",
        keyPoints: [
          "NFS 是 Linux 最常用的网络文件系统。",
          "iSCSI 通过网络提供块级存储。",
          "autofs 实现按需挂载。",
        ],
        lessons: [
          {
            id: "linux-w9-1",
            title: "NFS 服务器与客户端",
            detail: "配置 NFS 共享文件系统。",
            keyPoints: [
              "NFS v4：当前标准，更好的安全性和性能。",
              "/etc/exports：服务器端导出配置。",
              "exportfs：管理导出目录。",
              "客户端挂载：mount -t nfs server:/path /mnt。",
            ],
            resources: [
              { title: "NFS Server", url: "https://wiki.archlinux.org/title/NFS" },
              { title: "NFS Guide", url: "https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/managing_file_systems/exporting-nfs-shares_managing-file-systems" },
              { title: "NFS HOWTO", url: "https://tldp.org/HOWTO/NFS-HOWTO/" },
            ],
          },
          {
            id: "linux-w9-2",
            title: "iSCSI 配置",
            detail: "配置 iSCSI 目标和发起程序。",
            keyPoints: [
              "iSCSI：通过 IP 网络传输 SCSI 命令。",
              "Target（服务端）：targetcli 配置。",
              "Initiator（客户端）：iscsiadm 发现和登录。",
              "IQN：iSCSI Qualified Name，唯一标识。",
            ],
            resources: [
              { title: "iSCSI Guide", url: "https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/managing_storage_devices/configuring-an-iscsi-target_managing-storage-devices" },
              { title: "targetcli", url: "https://linux-iscsi.org/wiki/Targetcli" },
              { title: "iSCSI Wiki", url: "https://wiki.archlinux.org/title/ISCSI" },
            ],
          },
          {
            id: "linux-w9-3",
            title: "autofs 自动挂载",
            detail: "配置按需自动挂载。",
            keyPoints: [
              "autofs：按需挂载，空闲后自动卸载。",
              "/etc/auto.master：主配置文件。",
              "直接映射 vs 间接映射。",
              "适用于 NFS、CIFS 等网络文件系统。",
            ],
            resources: [
              { title: "autofs", url: "https://wiki.archlinux.org/title/Autofs" },
              { title: "autofs Guide", url: "https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/managing_file_systems/mounting-nfs-shares_managing-file-systems#mounting-an-nfs-share-with-autofs_mounting-nfs-shares" },
              { title: "Autofs HOWTO", url: "https://tldp.org/HOWTO/Automount.html" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段四：网络配置（第 10-12 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "linux-networking",
    title: "阶段四：网络配置",
    duration: "第 10-12 周",
    goal: "掌握 Linux 网络配置、防火墙与常用网络服务。",
    weeks: [
      {
        id: "linux-w10",
        title: "第 10 周：网络基础配置",
        summary: "配置 Linux 网络接口与路由。",
        keyPoints: [
          "NetworkManager 是现代 Linux 的网络管理工具。",
          "ip 命令是 iproute2 套件的核心工具。",
          "DNS 解析涉及多个配置文件。",
        ],
        lessons: [
          {
            id: "linux-w10-1",
            title: "网络接口配置",
            detail: "配置 IP 地址、子网掩码和网关。",
            keyPoints: [
              "ip addr：查看和配置 IP 地址。",
              "ip link：管理网络接口。",
              "NetworkManager/nmcli：高级网络管理。",
              "配置文件：/etc/sysconfig/network-scripts/（RHEL）、/etc/netplan/（Ubuntu）。",
            ],
            resources: [
              { title: "ip command", url: "https://man7.org/linux/man-pages/man8/ip.8.html" },
              { title: "NetworkManager", url: "https://networkmanager.dev/docs/" },
              { title: "Netplan", url: "https://netplan.io/" },
            ],
          },
          {
            id: "linux-w10-2",
            title: "路由与网关",
            detail: "配置静态路由和默认网关。",
            keyPoints: [
              "ip route：查看和管理路由表。",
              "默认网关：ip route add default via <gateway>。",
              "静态路由：ip route add <network> via <gateway>。",
              "路由持久化：配置文件或 nmcli。",
            ],
            resources: [
              { title: "ip-route", url: "https://man7.org/linux/man-pages/man8/ip-route.8.html" },
              { title: "Linux Routing", url: "https://tldp.org/LDP/nag2/x-087-2-issues.routing.html" },
              { title: "Static Routes", url: "https://www.redhat.com/sysadmin/configure-linux-static-route" },
            ],
          },
          {
            id: "linux-w10-3",
            title: "DNS 配置",
            detail: "配置 DNS 解析。",
            keyPoints: [
              "/etc/resolv.conf：传统 DNS 配置文件。",
              "systemd-resolved：现代 DNS 解析服务。",
              "/etc/hosts：本地主机名解析。",
              "/etc/nsswitch.conf：名称服务切换配置。",
            ],
            resources: [
              { title: "resolv.conf", url: "https://man7.org/linux/man-pages/man5/resolv.conf.5.html" },
              { title: "systemd-resolved", url: "https://www.freedesktop.org/software/systemd/man/latest/systemd-resolved.service.html" },
              { title: "DNS Configuration", url: "https://wiki.archlinux.org/title/Domain_name_resolution" },
            ],
          },
        ],
      },
      {
        id: "linux-w11",
        title: "第 11 周：防火墙配置",
        summary: "使用 firewalld 和 nftables 配置防火墙。",
        keyPoints: [
          "firewalld 提供动态防火墙管理。",
          "nftables 是 iptables 的现代替代。",
          "Zone 概念简化防火墙规则管理。",
        ],
        lessons: [
          {
            id: "linux-w11-1",
            title: "firewalld 基础",
            detail: "使用 firewalld 管理防火墙。",
            keyPoints: [
              "Zone：预定义安全级别（public、trusted、drop 等）。",
              "firewall-cmd：命令行管理工具。",
              "服务：预定义端口和协议组合。",
              "--permanent：持久化配置，--reload 生效。",
            ],
            resources: [
              { title: "firewalld", url: "https://firewalld.org/documentation/" },
              { title: "firewall-cmd", url: "https://man7.org/linux/man-pages/man1/firewall-cmd.1.html" },
              { title: "Firewalld Guide", url: "https://www.redhat.com/sysadmin/beginners-guide-firewalld" },
            ],
          },
          {
            id: "linux-w11-2",
            title: "nftables 配置",
            detail: "使用 nftables 编写防火墙规则。",
            keyPoints: [
              "nftables：取代 iptables/ip6tables/arptables/ebtables。",
              "表（table）、链（chain）、规则（rule）。",
              "nft add/list/delete：管理命令。",
              "/etc/nftables.conf：配置文件。",
            ],
            resources: [
              { title: "nftables Wiki", url: "https://wiki.nftables.org/" },
              { title: "nft", url: "https://man7.org/linux/man-pages/man8/nft.8.html" },
              { title: "nftables Guide", url: "https://wiki.archlinux.org/title/Nftables" },
            ],
          },
          {
            id: "linux-w11-3",
            title: "NAT 与端口转发",
            detail: "配置网络地址转换和端口转发。",
            keyPoints: [
              "SNAT/MASQUERADE：源地址转换，共享上网。",
              "DNAT：目标地址转换，端口映射。",
              "firewalld：--add-masquerade、--add-forward-port。",
              "nftables：nat 表，prerouting/postrouting 链。",
            ],
            resources: [
              { title: "NAT with firewalld", url: "https://firewalld.org/documentation/howto/add-nat.html" },
              { title: "nftables NAT", url: "https://wiki.nftables.org/wiki-nftables/index.php/Performing_Network_Address_Translation_(NAT)" },
              { title: "Port Forwarding", url: "https://www.redhat.com/sysadmin/port-forwarding-firewalld" },
            ],
          },
        ],
      },
      {
        id: "linux-w12",
        title: "第 12 周：网络服务",
        summary: "配置常用网络服务（SSH、HTTP、DNS）。",
        keyPoints: [
          "SSH 是远程管理的标准协议。",
          "Nginx/Apache 是最常用的 Web 服务器。",
          "BIND/Unbound 提供 DNS 服务。",
        ],
        lessons: [
          {
            id: "linux-w12-1",
            title: "SSH 服务配置",
            detail: "配置安全的 SSH 服务。",
            keyPoints: [
              "sshd_config：SSH 服务器配置文件。",
              "密钥认证：ssh-keygen、ssh-copy-id。",
              "安全加固：禁用密码、限制用户、端口修改。",
              "SSH 跳板：ProxyJump、SSH 代理转发。",
            ],
            resources: [
              { title: "sshd_config", url: "https://man.openbsd.org/sshd_config" },
              { title: "SSH Keys", url: "https://wiki.archlinux.org/title/SSH_keys" },
              { title: "SSH Hardening", url: "https://www.ssh.com/academy/ssh/sshd_config" },
            ],
          },
          {
            id: "linux-w12-2",
            title: "Web 服务器配置",
            detail: "配置 Nginx 或 Apache Web 服务器。",
            keyPoints: [
              "Nginx：高性能、反向代理、负载均衡。",
              "Apache：.htaccess、mod_rewrite、成熟生态。",
              "虚拟主机：一台服务器托管多个站点。",
              "TLS/SSL：Let's Encrypt 免费证书。",
            ],
            resources: [
              { title: "Nginx Documentation", url: "https://nginx.org/en/docs/" },
              { title: "Apache Documentation", url: "https://httpd.apache.org/docs/" },
              { title: "Let's Encrypt", url: "https://letsencrypt.org/docs/" },
            ],
          },
          {
            id: "linux-w12-3",
            title: "DNS 服务器配置",
            detail: "配置 BIND 或 Unbound DNS 服务器。",
            keyPoints: [
              "BIND：权威 DNS 服务器，区域文件配置。",
              "Unbound：递归解析器，DNSSEC 验证。",
              "区域文件：SOA、NS、A、AAAA、CNAME、MX 记录。",
              "DNS 缓存：加速解析，减少上游查询。",
            ],
            resources: [
              { title: "BIND", url: "https://bind9.readthedocs.io/" },
              { title: "Unbound", url: "https://unbound.docs.nlnetlabs.nl/en/latest/" },
              { title: "DNS Guide", url: "https://wiki.archlinux.org/title/BIND" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段五：安全加固（第 13-15 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "linux-security",
    title: "阶段五：安全加固",
    duration: "第 13-15 周",
    goal: "掌握 Linux 安全加固、SELinux/AppArmor 与入侵检测。",
    weeks: [
      {
        id: "linux-w13",
        title: "第 13 周：SELinux 与 AppArmor",
        summary: "使用强制访问控制增强系统安全。",
        keyPoints: [
          "SELinux 是 RHEL 系的默认 MAC 系统。",
          "AppArmor 是 Ubuntu/SUSE 的默认 MAC 系统。",
          "MAC 提供超越传统权限的访问控制。",
        ],
        lessons: [
          {
            id: "linux-w13-1",
            title: "SELinux 基础",
            detail: "理解和配置 SELinux。",
            keyPoints: [
              "模式：Enforcing、Permissive、Disabled。",
              "上下文：user:role:type:level，type 最重要。",
              "布尔值：getsebool/setsebool 调整策略。",
              "故障排查：ausearch、sealert、restorecon。",
            ],
            resources: [
              { title: "SELinux User's Guide", url: "https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/using_selinux" },
              { title: "SELinux Wiki", url: "https://selinuxproject.org/" },
              { title: "SELinux Coloring Book", url: "https://people.redhat.com/duffy/selinux/selinux-coloring-book_A4-Stapled.pdf" },
            ],
          },
          {
            id: "linux-w13-2",
            title: "SELinux 策略管理",
            detail: "管理和自定义 SELinux 策略。",
            keyPoints: [
              "semanage：管理登录、端口、文件上下文。",
              "semanage port：添加自定义端口标签。",
              "semanage fcontext：自定义文件上下文。",
              "audit2allow：从审计日志生成策略模块。",
            ],
            resources: [
              { title: "semanage", url: "https://man7.org/linux/man-pages/man8/semanage.8.html" },
              { title: "Custom SELinux Policy", url: "https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/using_selinux/writing-a-custom-selinux-policy_using-selinux" },
              { title: "audit2allow", url: "https://man7.org/linux/man-pages/man1/audit2allow.1.html" },
            ],
          },
          {
            id: "linux-w13-3",
            title: "AppArmor 配置",
            detail: "使用 AppArmor 限制程序权限。",
            keyPoints: [
              "配置文件：/etc/apparmor.d/ 下的策略文件。",
              "模式：enforce（强制）、complain（投诉）。",
              "aa-genprof：生成新配置文件。",
              "aa-logprof：根据日志更新配置文件。",
            ],
            resources: [
              { title: "AppArmor Wiki", url: "https://gitlab.com/apparmor/apparmor/-/wikis/Documentation" },
              { title: "Ubuntu AppArmor", url: "https://ubuntu.com/server/docs/security-apparmor" },
              { title: "AppArmor Guide", url: "https://wiki.archlinux.org/title/AppArmor" },
            ],
          },
        ],
      },
      {
        id: "linux-w14",
        title: "第 14 周：系统加固",
        summary: "实施系统级安全加固措施。",
        keyPoints: [
          "内核参数调优可增强安全性。",
          "SSH 加固是远程管理安全的关键。",
          "服务最小化减少攻击面。",
        ],
        lessons: [
          {
            id: "linux-w14-1",
            title: "内核安全参数",
            detail: "使用 sysctl 配置内核安全参数。",
            keyPoints: [
              "sysctl：运行时内核参数配置。",
              "/etc/sysctl.d/：持久化配置目录。",
              "网络加固：禁用 IP 转发、ICMP 重定向。",
              "内存保护：ASLR、exec-shield。",
            ],
            resources: [
              { title: "sysctl", url: "https://man7.org/linux/man-pages/man8/sysctl.8.html" },
              { title: "Kernel Hardening", url: "https://wiki.archlinux.org/title/Security#Kernel_hardening" },
              { title: "Sysctl Security", url: "https://www.kernel.org/doc/Documentation/networking/ip-sysctl.txt" },
            ],
          },
          {
            id: "linux-w14-2",
            title: "SSH 安全加固",
            detail: "强化 SSH 服务安全配置。",
            keyPoints: [
              "禁用密码认证：PasswordAuthentication no。",
              "禁用 root 登录：PermitRootLogin no。",
              "限制用户：AllowUsers、AllowGroups。",
              "使用 Ed25519 密钥：更安全更快。",
            ],
            resources: [
              { title: "SSH Hardening", url: "https://www.sshaudit.com/hardening_guides.html" },
              { title: "Mozilla SSH Guidelines", url: "https://infosec.mozilla.org/guidelines/openssh" },
              { title: "CIS SSH Benchmark", url: "https://www.cisecurity.org/benchmark/distribution_independent_linux" },
            ],
          },
          {
            id: "linux-w14-3",
            title: "服务最小化与加固",
            detail: "减少攻击面，加固必要服务。",
            keyPoints: [
              "禁用不必要服务：systemctl disable/mask。",
              "端口扫描：ss -tulpn 查看监听端口。",
              "chroot/容器：隔离服务运行环境。",
              "安全基线：CIS Benchmark、STIGs。",
            ],
            resources: [
              { title: "CIS Benchmarks", url: "https://www.cisecurity.org/cis-benchmarks" },
              { title: "RHEL Security Guide", url: "https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/security_hardening" },
              { title: "Linux Hardening", url: "https://wiki.archlinux.org/title/Security" },
            ],
          },
        ],
      },
      {
        id: "linux-w15",
        title: "第 15 周：入侵检测与审计",
        summary: "配置入侵检测和系统审计。",
        keyPoints: [
          "auditd 记录系统安全事件。",
          "AIDE 检测文件系统变更。",
          "Fail2ban 防止暴力破解。",
        ],
        lessons: [
          {
            id: "linux-w15-1",
            title: "auditd 系统审计",
            detail: "使用 auditd 记录安全事件。",
            keyPoints: [
              "auditd：Linux 审计守护进程。",
              "audit.rules：定义审计规则。",
              "ausearch/aureport：搜索和报告审计日志。",
              "监控敏感文件、系统调用、用户活动。",
            ],
            resources: [
              { title: "auditd", url: "https://man7.org/linux/man-pages/man8/auditd.8.html" },
              { title: "Audit System", url: "https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/security_hardening/auditing-the-system_security-hardening" },
              { title: "Linux Auditing", url: "https://wiki.archlinux.org/title/Audit_framework" },
            ],
          },
          {
            id: "linux-w15-2",
            title: "AIDE 文件完整性",
            detail: "使用 AIDE 检测文件变更。",
            keyPoints: [
              "AIDE：Advanced Intrusion Detection Environment。",
              "aide --init：初始化数据库。",
              "aide --check：检查文件变更。",
              "/etc/aide.conf：配置监控规则。",
            ],
            resources: [
              { title: "AIDE", url: "https://aide.github.io/" },
              { title: "AIDE Manual", url: "https://aide.github.io/doc/" },
              { title: "File Integrity", url: "https://www.redhat.com/sysadmin/file-integrity-aide" },
            ],
          },
          {
            id: "linux-w15-3",
            title: "Fail2ban 入侵防护",
            detail: "使用 Fail2ban 防止暴力破解。",
            keyPoints: [
              "Fail2ban：监控日志，封禁可疑 IP。",
              "Jail：定义监控的服务和封禁规则。",
              "/etc/fail2ban/jail.local：自定义配置。",
              "Filter：日志匹配规则。",
            ],
            resources: [
              { title: "Fail2ban", url: "https://www.fail2ban.org/" },
              { title: "Fail2ban Wiki", url: "https://github.com/fail2ban/fail2ban/wiki" },
              { title: "Fail2ban Guide", url: "https://wiki.archlinux.org/title/Fail2ban" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段六：自动化与性能（第 16-18 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "linux-automation",
    title: "阶段六：自动化与性能",
    duration: "第 16-18 周",
    goal: "掌握 Shell 脚本、Ansible 自动化与性能调优。",
    weeks: [
      {
        id: "linux-w16",
        title: "第 16 周：Shell 脚本编程",
        summary: "编写自动化运维脚本。",
        keyPoints: [
          "Bash 脚本是 Linux 自动化的基础。",
          "条件判断和循环控制脚本流程。",
          "函数提高代码复用性。",
        ],
        lessons: [
          {
            id: "linux-w16-1",
            title: "Bash 脚本基础",
            detail: "掌握 Bash 脚本基本语法。",
            keyPoints: [
              "Shebang：#!/bin/bash 指定解释器。",
              "变量：赋值无空格，$var 或 ${var} 引用。",
              "特殊变量：$0（脚本名）、$1-$n（参数）、$#（参数数）、$?（退出码）。",
              "引号：单引号保留字面值，双引号允许变量展开。",
            ],
            resources: [
              { title: "Bash Manual", url: "https://www.gnu.org/software/bash/manual/" },
              { title: "Shell Scripting Tutorial", url: "https://www.shellscript.sh/" },
              { title: "Advanced Bash", url: "https://tldp.org/LDP/abs/html/" },
            ],
          },
          {
            id: "linux-w16-2",
            title: "控制流与函数",
            detail: "使用条件、循环和函数。",
            keyPoints: [
              "条件：if/elif/else、test/[/[[、case。",
              "循环：for、while、until、break、continue。",
              "函数：function name() {}，局部变量 local。",
              "退出码：exit N，0 成功，非 0 失败。",
            ],
            resources: [
              { title: "Bash Conditional", url: "https://www.gnu.org/software/bash/manual/html_node/Conditional-Constructs.html" },
              { title: "Bash Loops", url: "https://www.gnu.org/software/bash/manual/html_node/Looping-Constructs.html" },
              { title: "Bash Functions", url: "https://www.gnu.org/software/bash/manual/html_node/Shell-Functions.html" },
            ],
          },
          {
            id: "linux-w16-3",
            title: "脚本最佳实践",
            detail: "编写健壮可维护的脚本。",
            keyPoints: [
              "set -euo pipefail：严格模式，出错即退。",
              "ShellCheck：静态分析工具，检查常见错误。",
              "日志记录：logger 或自定义日志函数。",
              "错误处理：trap 捕获信号和错误。",
            ],
            resources: [
              { title: "ShellCheck", url: "https://www.shellcheck.net/" },
              { title: "Bash Best Practices", url: "https://bertvv.github.io/cheat-sheets/Bash.html" },
              { title: "Google Shell Style Guide", url: "https://google.github.io/styleguide/shellguide.html" },
            ],
          },
        ],
      },
      {
        id: "linux-w17",
        title: "第 17 周：Ansible 自动化",
        summary: "使用 Ansible 实现配置管理自动化。",
        keyPoints: [
          "Ansible 是无代理的配置管理工具。",
          "Playbook 定义自动化任务。",
          "Role 实现配置的模块化和复用。",
        ],
        lessons: [
          {
            id: "linux-w17-1",
            title: "Ansible 基础",
            detail: "理解 Ansible 架构与基本概念。",
            keyPoints: [
              "无代理：通过 SSH 连接目标主机。",
              "Inventory：定义管理的主机和组。",
              "Ad-hoc 命令：ansible host -m module -a args。",
              "模块：file、copy、template、yum、apt、service。",
            ],
            resources: [
              { title: "Ansible Documentation", url: "https://docs.ansible.com/" },
              { title: "Getting Started", url: "https://docs.ansible.com/ansible/latest/getting_started/index.html" },
              { title: "Ansible Modules", url: "https://docs.ansible.com/ansible/latest/collections/index_module.html" },
            ],
          },
          {
            id: "linux-w17-2",
            title: "Playbook 编写",
            detail: "编写 Ansible Playbook 自动化任务。",
            keyPoints: [
              "YAML 格式：缩进敏感，列表用 -。",
              "Play：定义目标主机和任务列表。",
              "任务：name、module、args、when、loop。",
              "变量：vars、vars_files、host_vars、group_vars。",
            ],
            resources: [
              { title: "Playbook Guide", url: "https://docs.ansible.com/ansible/latest/playbook_guide/index.html" },
              { title: "Playbook Keywords", url: "https://docs.ansible.com/ansible/latest/reference_appendices/playbooks_keywords.html" },
              { title: "Playbook Examples", url: "https://github.com/ansible/ansible-examples" },
            ],
          },
          {
            id: "linux-w17-3",
            title: "Roles 与最佳实践",
            detail: "使用 Roles 组织 Ansible 代码。",
            keyPoints: [
              "Role 结构：tasks、handlers、templates、files、vars、defaults。",
              "ansible-galaxy：Role 分享和下载。",
              "Ansible Vault：加密敏感数据。",
              "幂等性：多次执行结果相同。",
            ],
            resources: [
              { title: "Roles", url: "https://docs.ansible.com/ansible/latest/playbook_guide/playbooks_reuse_roles.html" },
              { title: "Ansible Galaxy", url: "https://galaxy.ansible.com/" },
              { title: "Best Practices", url: "https://docs.ansible.com/ansible/latest/tips_tricks/ansible_tips_tricks.html" },
            ],
          },
        ],
      },
      {
        id: "linux-w18",
        title: "第 18 周：性能调优",
        summary: "使用现代工具进行性能分析与调优。",
        keyPoints: [
          "eBPF 是现代 Linux 性能观测的核心技术。",
          "性能分析需要系统性方法论。",
          "调优应基于数据，避免盲目优化。",
        ],
        lessons: [
          {
            id: "linux-w18-1",
            title: "性能分析方法论",
            detail: "系统性的性能分析方法。",
            keyPoints: [
              "USE 方法：Utilization、Saturation、Errors。",
              "性能指标：CPU、内存、磁盘 I/O、网络。",
              "基础工具：top、vmstat、iostat、netstat/ss。",
              "瓶颈定位：自顶向下，逐层分析。",
            ],
            resources: [
              { title: "USE Method", url: "https://www.brendangregg.com/usemethod.html" },
              { title: "Linux Performance", url: "https://www.brendangregg.com/linuxperf.html" },
              { title: "Performance Analysis", url: "https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/monitoring_and_managing_system_status_and_performance" },
            ],
          },
          {
            id: "linux-w18-2",
            title: "eBPF 性能工具",
            detail: "使用 eBPF 工具进行深度性能分析。",
            keyPoints: [
              "eBPF：内核级可编程，低开销高性能。",
              "BCC 工具：execsnoop、opensnoop、biolatency。",
              "bpftrace：高级 eBPF 追踪语言。",
              "perf：Linux 性能分析的瑞士军刀。",
            ],
            resources: [
              { title: "BCC Tools", url: "https://github.com/iovisor/bcc" },
              { title: "bpftrace", url: "https://github.com/bpftrace/bpftrace" },
              { title: "eBPF.io", url: "https://ebpf.io/" },
            ],
          },
          {
            id: "linux-w18-3",
            title: "系统调优实践",
            detail: "实施系统级性能调优。",
            keyPoints: [
              "CPU 调优：调度器、CPU 亲和性、频率调节。",
              "内存调优：vm.swappiness、透明大页、NUMA。",
              "I/O 调优：调度器（mq-deadline、bfq）、readahead。",
              "网络调优：缓冲区大小、拥塞控制算法。",
            ],
            resources: [
              { title: "Tuned", url: "https://tuned-project.org/" },
              { title: "Kernel Tuning", url: "https://www.kernel.org/doc/Documentation/sysctl/" },
              { title: "Performance Tuning", url: "https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9/html/monitoring_and_managing_system_status_and_performance/tuning-the-system-for-performance_monitoring-and-managing-system-status-and-performance" },
            ],
          },
        ],
      },
    ],
  },
]

// ═══════════════════════════════════════════════════════════════
// 知识卡片
// ═══════════════════════════════════════════════════════════════
export const linuxKnowledgeCards: KnowledgeCard[] = [
  {
    id: "linux-kc-1",
    title: "文件权限模型",
    summary: "Linux 使用 owner/group/others 三级权限模型。",
    points: [
      "r（4）读、w（2）写、x（1）执行",
      "chmod 755 = rwxr-xr-x",
      "SUID/SGID/Sticky 是特殊权限",
      "ACL 提供更细粒度的权限控制",
    ],
    practice: "设置一个共享目录，组成员可写，其他人只读，新文件继承组。",
  },
  {
    id: "linux-kc-2",
    title: "systemd 服务管理",
    summary: "systemd 是现代 Linux 的初始化系统和服务管理器。",
    points: [
      "systemctl start/stop/restart/status 管理服务",
      "Unit 文件定义服务配置和依赖",
      "Timer 替代 cron 定时任务",
      "journalctl 查看服务日志",
    ],
    practice: "编写一个自定义 systemd 服务，设置开机自启和自动重启。",
  },
  {
    id: "linux-kc-3",
    title: "LVM 逻辑卷管理",
    summary: "LVM 提供灵活的存储管理能力。",
    points: [
      "PV → VG → LV 三层抽象",
      "支持动态扩展和缩小",
      "快照功能支持备份和测试",
      "条带化提升 I/O 性能",
    ],
    practice: "创建 LVM 卷组，创建逻辑卷并动态扩展。",
  },
  {
    id: "linux-kc-4",
    title: "firewalld Zone",
    summary: "firewalld 使用 Zone 概念管理防火墙规则。",
    points: [
      "Zone 定义预设的安全级别",
      "常用：public、trusted、drop、internal",
      "服务（service）预定义端口组合",
      "--permanent 持久化，--reload 生效",
    ],
    practice: "配置 firewalld 允许 HTTP/HTTPS 并开启端口转发。",
  },
  {
    id: "linux-kc-5",
    title: "SELinux 上下文",
    summary: "SELinux 使用上下文标签进行访问控制。",
    points: [
      "格式：user:role:type:level",
      "type 是最重要的部分",
      "ls -Z、ps -Z 查看上下文",
      "restorecon 恢复默认上下文",
    ],
    practice: "配置 Web 服务器使用非标准端口，解决 SELinux 阻止问题。",
  },
  {
    id: "linux-kc-6",
    title: "Ansible Playbook",
    summary: "Playbook 是 Ansible 自动化的核心。",
    points: [
      "YAML 格式，声明式配置",
      "幂等性：多次执行结果相同",
      "Roles 实现代码模块化",
      "Vault 加密敏感数据",
    ],
    practice: "编写 Playbook 自动化部署 Web 服务器并配置防火墙。",
  },
  {
    id: "linux-kc-7",
    title: "eBPF 性能观测",
    summary: "eBPF 是现代 Linux 性能分析的核心技术。",
    points: [
      "内核级可编程，低开销",
      "BCC 提供丰富的工具集",
      "bpftrace 支持自定义追踪",
      "Falco、Tetragon 用于安全监控",
    ],
    practice: "使用 BCC 工具分析系统调用和 I/O 延迟。",
  },
  {
    id: "linux-kc-8",
    title: "USE 性能方法论",
    summary: "USE 方法是系统性的性能分析框架。",
    points: [
      "Utilization：资源使用率",
      "Saturation：资源饱和度",
      "Errors：错误计数",
      "对每个资源检查这三个指标",
    ],
    practice: "使用 USE 方法分析一个性能问题，定位瓶颈资源。",
  },
]

// ═══════════════════════════════════════════════════════════════
// 考试题目
// ═══════════════════════════════════════════════════════════════
export const linuxExamQuestions: QuizQuestion[] = [
  {
    id: "linux-q1",
    question: "Linux 中 chmod 755 对应的符号权限是？",
    options: ["rwxrw-rw-", "rwxr-xr-x", "rwx------", "rw-r--r--"],
    answer: 1,
    rationale: "755 = 7(rwx) + 5(r-x) + 5(r-x)，即所有者读写执行，组和其他用户读和执行。",
  },
  {
    id: "linux-q2",
    question: "SUID 权限位的数字表示是？",
    options: ["1000", "2000", "4000", "8000"],
    answer: 2,
    rationale: "特殊权限位：SUID=4000，SGID=2000，Sticky=1000。",
  },
  {
    id: "linux-q3",
    question: "查看 systemd 服务日志的命令是？",
    options: ["systemctl logs", "journalctl", "syslog", "dmesg"],
    answer: 1,
    rationale: "journalctl 是 systemd 的日志查看工具，可以使用 -u 参数指定服务。",
  },
  {
    id: "linux-q4",
    question: "systemd Timer 单元用于替代什么？",
    options: ["systemctl", "init", "cron", "at"],
    answer: 2,
    rationale: "systemd Timer 可以替代传统的 cron 定时任务，提供更灵活的调度能力。",
  },
  {
    id: "linux-q5",
    question: "LVM 中 VG 是什么的缩写？",
    options: ["Virtual Group", "Volume Group", "Vendor Group", "Variable Group"],
    answer: 1,
    rationale: "LVM 三层结构：PV（Physical Volume）→ VG（Volume Group）→ LV（Logical Volume）。",
  },
  {
    id: "linux-q6",
    question: "哪个文件系统是 RHEL 9 的默认文件系统？",
    options: ["ext4", "XFS", "Btrfs", "ZFS"],
    answer: 1,
    rationale: "XFS 是 Red Hat Enterprise Linux 的默认文件系统，适合大文件和高并发场景。",
  },
  {
    id: "linux-q7",
    question: "firewalld 中用于持久化配置的参数是？",
    options: ["--save", "--persistent", "--permanent", "--store"],
    answer: 2,
    rationale: "--permanent 将规则保存到配置文件，需要 --reload 或重启生效。",
  },
  {
    id: "linux-q8",
    question: "nftables 取代了哪个防火墙工具？",
    options: ["firewalld", "ufw", "iptables", "pf"],
    answer: 2,
    rationale: "nftables 是 iptables 的现代替代，统一了 iptables、ip6tables、arptables、ebtables。",
  },
  {
    id: "linux-q9",
    question: "SELinux 的三种模式不包括哪个？",
    options: ["Enforcing", "Permissive", "Disabled", "Restrictive"],
    answer: 3,
    rationale: "SELinux 有三种模式：Enforcing（强制）、Permissive（宽容）、Disabled（禁用）。",
  },
  {
    id: "linux-q10",
    question: "恢复 SELinux 文件默认上下文的命令是？",
    options: ["semanage", "restorecon", "chcon", "seinfo"],
    answer: 1,
    rationale: "restorecon 根据策略恢复文件的默认 SELinux 上下文。chcon 是临时修改。",
  },
  {
    id: "linux-q11",
    question: "AppArmor 的配置文件位于哪个目录？",
    options: ["/etc/apparmor/", "/etc/apparmor.d/", "/etc/security/apparmor/", "/var/lib/apparmor/"],
    answer: 1,
    rationale: "AppArmor 的配置文件存放在 /etc/apparmor.d/ 目录下。",
  },
  {
    id: "linux-q12",
    question: "Fail2ban 主要用于防止什么类型的攻击？",
    options: ["SQL 注入", "XSS", "暴力破解", "DDoS"],
    answer: 2,
    rationale: "Fail2ban 监控日志文件，检测失败的登录尝试，自动封禁可疑 IP，防止暴力破解。",
  },
  {
    id: "linux-q13",
    question: "Bash 脚本中 $? 表示什么？",
    options: ["脚本名", "参数个数", "上一命令退出码", "当前 PID"],
    answer: 2,
    rationale: "$? 保存上一个命令的退出状态码，0 表示成功，非 0 表示失败。",
  },
  {
    id: "linux-q14",
    question: "Ansible 通过什么协议连接目标主机？",
    options: ["HTTP", "SSH", "WinRM", "RPC"],
    answer: 1,
    rationale: "Ansible 是无代理的，默认通过 SSH 连接 Linux 主机（Windows 使用 WinRM）。",
  },
  {
    id: "linux-q15",
    question: "Ansible 中用于加密敏感数据的功能是？",
    options: ["Ansible Crypt", "Ansible Vault", "Ansible Secret", "Ansible Safe"],
    answer: 1,
    rationale: "Ansible Vault 用于加密敏感数据，如密码、密钥等。",
  },
  {
    id: "linux-q16",
    question: "eBPF 全称是什么？",
    options: [
      "Enhanced Berkeley Packet Filter",
      "Extended Berkeley Packet Filter",
      "Embedded Berkeley Packet Filter",
      "Efficient Berkeley Packet Filter",
    ],
    answer: 1,
    rationale: "eBPF 是 Extended Berkeley Packet Filter 的缩写，是现代 Linux 内核的可编程框架。",
  },
  {
    id: "linux-q17",
    question: "USE 性能方法论中 U 代表什么？",
    options: ["Usage", "Utilization", "User", "Update"],
    answer: 1,
    rationale: "USE = Utilization（使用率）+ Saturation（饱和度）+ Errors（错误）。",
  },
  {
    id: "linux-q18",
    question: "BCC 性能工具基于什么技术？",
    options: ["SystemTap", "DTrace", "eBPF", "perf"],
    answer: 2,
    rationale: "BCC（BPF Compiler Collection）是基于 eBPF 的性能分析工具集。",
  },
  {
    id: "linux-q19",
    question: "Linux 中查看打开文件数限制的命令是？",
    options: ["lsof", "ulimit", "sysctl", "limits"],
    answer: 1,
    rationale: "ulimit -n 查看当前用户的打开文件数限制，ulimit -a 查看所有限制。",
  },
  {
    id: "linux-q20",
    question: "NFS 版本 4 相比版本 3 的主要改进是？",
    options: ["更快的速度", "更好的安全性和状态管理", "更小的开销", "更简单的配置"],
    answer: 1,
    rationale: "NFS v4 引入了更好的安全性（Kerberos 集成）、有状态协议、复合操作等改进。",
  },
]

// ═══════════════════════════════════════════════════════════════
// 主题定义
// ═══════════════════════════════════════════════════════════════
export const linuxRoadmap: RoadmapDefinition = {
  id: "linux",
  label: "Linux 系统管理",
  title: "Linux 系统管理",
  durationLabel: "18 个主题",
  description:
    "从 Linux 命令行基础出发，深入文件系统、用户管理、systemd 服务管理，掌握 LVM 存储、网络配置与防火墙，学习 SELinux/AppArmor 安全加固，使用 Ansible 实现自动化运维，掌握 eBPF 等现代性能分析工具。",
  heroBadge: "Shell · systemd · LVM · SELinux · Ansible · eBPF",
  stages: linuxStages,
  knowledgeCards: linuxKnowledgeCards,
  examQuestions: linuxExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "开始 Linux 学习之旅！先从命令行基础和文件权限开始。"
    if (percent < 25) return "继续深入系统管理，掌握 systemd 和软件包管理。"
    if (percent < 50) return "存储管理是运维核心技能，重点掌握 LVM 和文件系统。"
    if (percent < 75) return "网络和安全是进阶内容，深入理解防火墙和 SELinux。"
    if (percent < 100) return "即将完成！自动化和性能调优是高级运维必备。"
    return "恭喜完成！你已掌握 Linux 系统管理的完整知识体系。"
  },
  resourceGuide: {
    environment:
      "推荐使用虚拟机（VirtualBox/VMware）或云服务器实践。建议同时学习 RHEL 系（CentOS Stream/Rocky/Alma）和 Debian 系（Ubuntu/Debian）。",
    fallbackKeyPoints: [
      "文件权限：owner/group/others，chmod/chown/ACL",
      "systemd：服务管理、Timer 定时任务、journald 日志",
      "LVM：PV → VG → LV 三层抽象，支持动态扩展",
      "SELinux：Enforcing/Permissive/Disabled，上下文标签",
      "eBPF：现代性能观测核心技术，BCC/bpftrace 工具",
    ],
    handsOnSteps: [
      "配置 SSH 密钥认证并加固 sshd 配置",
      "创建 LVM 逻辑卷并动态扩展文件系统",
      "配置 firewalld Zone 和端口转发",
      "编写 Ansible Playbook 自动化部署服务",
      "使用 BCC 工具分析系统性能",
    ],
    selfChecks: [
      "能否解释 chmod 755 的含义？",
      "能否编写 systemd Unit 文件？",
      "能否排查 SELinux 阻止问题？",
      "能否使用 Ansible 自动化配置管理？",
      "能否使用 USE 方法分析性能问题？",
    ],
    extensions: [
      "深入学习 Linux 内核原理",
      "学习容器技术（Docker、Podman）",
      "探索 Kubernetes 集群管理",
      "研究 Linux 安全认证（RHCSA/RHCE）",
    ],
    lessonQuizAdvice: "每周完成后测验，重点关注权限模型、systemd、SELinux 和性能工具。",
  },
}
