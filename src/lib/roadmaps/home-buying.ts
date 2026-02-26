import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const homeBuyingStages: Stage[] = [
  // ═══════════════════════════════════════════════════════════════
  // 阶段一：购房准备（第 1-2 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "hb-preparation",
    title: "阶段一：购房准备",
    duration: "第 1-2 周",
    goal: "了解自身财务状况和购房资格，明确购房需求和目标区域。",
    weeks: [
      {
        id: "hb-w1",
        title: "第 1 周：财务规划与资格审核",
        summary: "评估个人财务状况，确认购房资格和预算。",
        overview: "本周从收入、负债、信用评估入手，帮助你全面了解自身购房能力，明确限购资格与公积金额度，制定合理的购房预算方案。",
        keyPoints: [
          "购房前必须全面评估个人财务状况。",
          "了解当地限购限贷政策是第一步。",
          "合理预算包括首付、税费、装修等全部费用。",
        ],
        lessons: [
          {
            id: "hb-w1-1",
            title: "个人财务评估",
            detail: "全面评估个人收入、支出、资产和负债，确定购房能力。",
            keyPoints: [
              "计算家庭月收入和稳定性，银行流水是重要凭证。",
              "评估现有资产：存款、理财、其他房产等。",
              "梳理负债情况：信用卡、消费贷、车贷等。",
              "月供不应超过家庭月收入的 50%。",
            ],
            resources: [
              { title: "个人财务健康检查 - 知乎", url: "https://zhuanlan.zhihu.com/p/82379769" },
              { title: "购房能力评估 - 房天下", url: "https://m.fang.com/zhishi/xf/qg_126267.html" },
              { title: "购房预算计算器 - 贝壳找房", url: "https://www.ke.com/calculator/" },
            ],
          },
          {
            id: "hb-w1-2",
            title: "购房预算制定",
            detail: "制定全面的购房预算，包括所有相关费用。",
            keyPoints: [
              "首付：首套房最低 15%，二套房最低 25%。",
              "税费：契税 1%-3%、印花税、维修基金等。",
              "其他费用：中介费、评估费、装修费、家具家电。",
              "预留 10-20% 的应急资金。",
            ],
            resources: [
              { title: "购房费用全解析 - 腾讯新闻", url: "https://news.qq.com/rain/a/20250111A063VR00" },
              { title: "购房税费计算 - 华律网", url: "https://www.66law.cn/laws/147156.aspx" },
              { title: "首付比例政策 - 中国政府网", url: "https://www.gov.cn/zhengce/202405/content_6951945.htm" },
            ],
          },
          {
            id: "hb-w1-3",
            title: "购房资格查询",
            detail: "了解当地限购政策，确认自己是否具备购房资格。",
            keyPoints: [
              "户籍限制：本地户籍和外地户籍政策不同。",
              "社保/个税要求：部分城市要求连续缴纳社保。",
              "已有房产数量：限购套数因城市而异。",
              "家庭认定：以家庭为单位计算房产数量。",
            ],
            resources: [
              { title: "各城市限购政策 - 安居客", url: "https://www.anjuke.com/fangjia/" },
              { title: "购房资格查询 - 贝壳找房", url: "https://www.ke.com/" },
              { title: "限购政策解读 - 房天下", url: "https://m.fang.com/zhishi/xf/qg_994996.html" },
            ],
          },
          {
            id: "hb-w1-4",
            title: "了解当前市场政策",
            detail: "掌握最新的房地产政策和市场动态。",
            keyPoints: [
              "关注央行利率政策和公积金政策调整。",
              "了解地方性购房补贴和优惠政策。",
              "关注市场供需变化和价格走势。",
              "注意政策窗口期，合理安排购房时机。",
            ],
            resources: [
              { title: "房贷利率最新政策 - 中新网", url: "https://www.chinanews.com.cn/cj/2025/01-02/10346220.shtml" },
              { title: "公积金政策 - 新华网", url: "http://www.news.cn/fortune/20240904/91ac02ae9e7442e5ae76351a3379feb4/c.html" },
              { title: "房产政策解读 - 21经济网", url: "https://www.21jingji.com/" },
            ],
          },
        ],
      },
      {
        id: "hb-w2",
        title: "第 2 周：市场与需求分析",
        summary: "明确购房需求，选择目标区域和房产类型。",
        overview: "本周梳理家庭人口结构、通勤需求和教育资源等因素，分析不同区域的优劣势，帮助你锁定最适合的目标片区与户型。",
        keyPoints: [
          "购房需求要结合家庭实际情况分析。",
          "地段是房产价值的核心因素。",
          "不同房产类型各有优劣，需综合考虑。",
        ],
        lessons: [
          {
            id: "hb-w2-1",
            title: "了解房地产市场",
            detail: "学习房地产市场的基本知识和运作规律。",
            keyPoints: [
              "一手房 vs 二手房：各有优劣，需综合考虑。",
              "期房 vs 现房：期房价格低但有交付风险。",
              "房价构成：土地成本、建安成本、利润、税费。",
              "关注区域发展规划对房价的影响。",
            ],
            resources: [
              { title: "房地产市场入门 - 知乎", url: "https://zhuanlan.zhihu.com/p/20928435" },
              { title: "一手房二手房对比 - 链家", url: "https://www.lianjia.com/" },
              { title: "房价走势分析 - 安居客", url: "https://www.anjuke.com/fangjia/" },
            ],
          },
          {
            id: "hb-w2-2",
            title: "明确购房需求",
            detail: "根据家庭情况确定房屋面积、户型、配套等需求。",
            keyPoints: [
              "家庭人口结构：考虑未来 5-10 年的居住需求。",
              "通勤需求：距离工作地点的交通便利性。",
              "教育需求：学区房对应的入学政策。",
              "生活配套：医院、商场、公园等设施。",
            ],
            resources: [
              { title: "购房需求分析 - 房天下", url: "https://m.fang.com/zhishi/xf/qg_406928.html" },
              { title: "户型选择指南 - 贝壳找房", url: "https://www.ke.com/kandian/" },
              { title: "学区房攻略 - 链家", url: "https://www.lianjia.com/" },
            ],
          },
          {
            id: "hb-w2-3",
            title: "选择目标区域",
            detail: "综合考虑工作、生活、投资等因素选择购房区域。",
            keyPoints: [
              "核心区 vs 新区：成熟度与发展潜力的权衡。",
              "交通规划：地铁、高速等交通设施影响房价。",
              "产业布局：产业聚集区域就业机会多。",
              "城市规划：政府规划文件是重要参考。",
            ],
            resources: [
              { title: "区域选择策略 - 知乎", url: "https://zhuanlan.zhihu.com/p/78890878" },
              { title: "城市规划查询 - 各地规划局官网", url: "http://www.mohurd.gov.cn/" },
              { title: "地铁规划对房价影响 - 房天下", url: "https://m.fang.com/" },
            ],
          },
          {
            id: "hb-w2-4",
            title: "了解房产类型",
            detail: "掌握不同房产类型的特点和适用场景。",
            keyPoints: [
              "住宅：70 年产权，可落户可贷款。",
              "公寓：40/50 年产权，商水商电，不限购。",
              "别墅：容积率低，居住舒适度高。",
              "小产权房：无法办理产权证，风险极大。",
            ],
            resources: [
              { title: "房产类型详解 - 百度百科", url: "https://baike.baidu.com/item/住宅" },
              { title: "公寓与住宅区别 - 房天下", url: "https://m.fang.com/zhishi/zf/qg_974894.html" },
              { title: "产权年限解读 - 华律网", url: "https://www.66law.cn/" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段二：看房选房（第 3-4 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "hb-house-hunting",
    title: "阶段二：看房选房",
    duration: "第 3-4 周",
    goal: "掌握新房和二手房的看房技巧，学会评估房源价值。",
    weeks: [
      {
        id: "hb-w3",
        title: "第 3 周：新房购买攻略",
        summary: "学习新房选购的核心要点和开发商评估方法。",
        overview: "本周聚焦新房市场，学习如何评估开发商资质和项目品质，掌握五证二书核验流程，避免踩坑烂尾楼和虚假宣传。",
        keyPoints: [
          "五证齐全是购买新房的前提条件。",
          "开发商信誉决定了交付质量和风险。",
          "样板房与实际交付可能存在差异。",
        ],
        lessons: [
          {
            id: "hb-w3-1",
            title: "开发商资质审查",
            detail: "学习如何评估开发商的信誉和实力。",
            keyPoints: [
              "查询开发商资质等级：一级、二级、三级资质。",
              "了解开发商历史项目的口碑和交付情况。",
              "关注开发商财务状况，警惕资金链断裂风险。",
              "查询企业信用信息：国家企业信用信息公示系统。",
            ],
            resources: [
              { title: "开发商资质查询 - 住建部", url: "https://www.mohurd.gov.cn/" },
              { title: "企业信用查询 - 国家企业信用信息公示系统", url: "https://www.gsxt.gov.cn/" },
              { title: "开发商评估方法 - 房天下", url: "https://m.fang.com/zhishi/xf/qg_325562.html" },
            ],
          },
          {
            id: "hb-w3-2",
            title: "五证二书核验",
            detail: "了解购房时必须核验的五证二书等法律文件，确保项目合法合规。",
            keyPoints: [
              "五证：国有土地使用证、建设用地规划许可证、建设工程规划许可证、建筑工程施工许可证、商品房预售许可证。",
              "二书：住宅质量保证书、住宅使用说明书。",
              "预售许可证是最关键的证件，必须核验真伪。",
              "可在当地住建局官网查询预售许可信息。",
            ],
            resources: [
              { title: "五证二书详解 - 房天下", url: "https://m.fang.com/zhishi/xf/qg_144358.html" },
              { title: "商品房预售许可查询 - 各地住建局", url: "http://www.mohurd.gov.cn/" },
              { title: "购房证件核验 - 华律网", url: "https://www.66law.cn/laws/312917.aspx" },
            ],
          },
          {
            id: "hb-w3-3",
            title: "样板房与实体考察",
            detail: "学习如何正确看样板房和实地考察楼盘。",
            keyPoints: [
              "样板房可能存在尺寸放大、材质升级等情况。",
              "关注楼间距、采光、通风等实际居住体验。",
              "考察周边环境：噪音、气味、交通等。",
              "了解小区规划：车位比、绿化率、物业品牌。",
            ],
            resources: [
              { title: "样板房看房技巧 - 知乎", url: "https://zhuanlan.zhihu.com/p/78890878" },
              { title: "楼盘考察要点 - 房天下", url: "https://m.fang.com/zhishi/xf/qg_325562.html" },
              { title: "看房注意事项 - 贝壳找房", url: "https://www.ke.com/kandian/" },
            ],
          },
          {
            id: "hb-w3-4",
            title: "新房楼盘比较",
            detail: "建立系统的楼盘比较方法，做出理性决策。",
            keyPoints: [
              "制作对比表格：价格、位置、配套、品质等维度。",
              "计算性价比：单价、总价、得房率、梯户比。",
              "关注优惠政策：开盘折扣、特价房源。",
              "预估未来价值：地段发展潜力、保值增值能力。",
            ],
            resources: [
              { title: "楼盘对比方法 - 安居客", url: "https://www.anjuke.com/" },
              { title: "得房率计算 - 房天下", url: "https://m.fang.com/" },
              { title: "购房决策指南 - 知乎", url: "https://zhuanlan.zhihu.com/p/82379769" },
            ],
          },
        ],
      },
      {
        id: "hb-w4",
        title: "第 4 周：二手房购买攻略",
        summary: "掌握二手房交易的关键环节和风险防范。",
        overview: "本周深入二手房交易流程，学习产权核查、房屋估价和中介选择的技巧，掌握如何防范交易中的常见法律和资金风险。",
        keyPoints: [
          "产权清晰是二手房交易的核心前提。",
          "房屋实际状况需要仔细核查。",
          "资金安全必须通过监管账户保障。",
        ],
        lessons: [
          {
            id: "hb-w4-1",
            title: "产权调查",
            detail: "学习如何核查二手房的产权状况。",
            keyPoints: [
              "拉产调：查询房屋产权归属、是否有抵押查封。",
              "核实产权人：与房产证、身份证信息一致。",
              "共有人确认：夫妻共有、继承共有等情况。",
              "产权年限：了解土地使用权剩余年限。",
            ],
            resources: [
              { title: "产权调查方法 - 链家", url: "https://www.lianjia.com/" },
              { title: "二手房产权核查 - 贝壳找房", url: "https://m.ke.com/kandian/MjY2NDY3Mjk=.html" },
              { title: "产权风险防范 - 华律网", url: "https://www.66law.cn/" },
            ],
          },
          {
            id: "hb-w4-2",
            title: "房屋状况检查",
            detail: "全面检查二手房的实际状况和潜在问题。",
            keyPoints: [
              "房屋结构：是否有违建、改动承重墙等。",
              "装修状况：水电、防水、墙面、地面等。",
              "设施设备：门窗、厨卫、暖气、空调等。",
              "周边环境：噪音、采光、邻居情况。",
            ],
            resources: [
              { title: "二手房验房要点 - 知乎", url: "https://zhuanlan.zhihu.com/p/80083912" },
              { title: "房屋检查清单 - 房天下", url: "https://m.fang.com/zhishi/esf/qg_107723.html" },
              { title: "二手房常见问题 - 安居客", url: "https://m.anjuke.com/qa/view/52651516" },
            ],
          },
          {
            id: "hb-w4-3",
            title: "价格谈判技巧",
            detail: "掌握二手房价格谈判的策略和方法。",
            keyPoints: [
              "了解市场行情：同小区、同户型成交价参考。",
              "找到议价空间：房屋缺陷、业主急售等因素。",
              "分步报价：不要一开始就亮出底价。",
              "保持理性：设定心理价位，不被情绪左右。",
            ],
            resources: [
              { title: "二手房议价技巧 - 知乎", url: "https://zhuanlan.zhihu.com/p/80083912" },
              { title: "成交价查询 - 贝壳找房", url: "https://www.ke.com/" },
              { title: "谈判策略 - 链家", url: "https://www.lianjia.com/" },
            ],
          },
          {
            id: "hb-w4-4",
            title: "中介选择与合作",
            detail: "学习如何选择靠谱的房产中介并有效合作。",
            keyPoints: [
              "选择正规中介：查验营业执照和备案信息。",
              "中介费标准：一般为成交价的 1-3%。",
              "签订居间合同：明确服务内容和责任。",
              "保留沟通记录：重要承诺要书面确认。",
            ],
            resources: [
              { title: "中介选择指南 - 房天下", url: "https://m.fang.com/" },
              { title: "中介服务标准 - 住建部", url: "https://www.mohurd.gov.cn/" },
              { title: "中介费谈判 - 知乎", url: "https://zhuanlan.zhihu.com/p/78890878" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段三：贷款与资金（第 5-6 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "hb-mortgage",
    title: "阶段三：贷款与资金",
    duration: "第 5-6 周",
    goal: "全面了解房贷产品，选择最优贷款方案。",
    weeks: [
      {
        id: "hb-w5",
        title: "第 5 周：贷款基础知识",
        summary: "了解各类房贷产品的特点和适用场景。",
        overview: "本周全面了解公积金贷款、商业贷款和组合贷款的利率差异与适用条件，学会根据自身情况选择最优贷款方案和还款方式。",
        keyPoints: [
          "公积金贷款利率最低，应优先使用。",
          "商业贷款额度高但利率相对较高。",
          "组合贷款可以兼顾额度和利率。",
        ],
        lessons: [
          {
            id: "hb-w5-1",
            title: "房贷类型详解",
            detail: "了解不同类型房贷的特点和区别。",
            keyPoints: [
              "公积金贷款：利率低，但额度有限。",
              "商业贷款：额度高，审批快，利率较高。",
              "组合贷款：公积金 + 商贷，兼顾优势。",
              "贷款期限：最长 30 年，需考虑退休年龄。",
            ],
            resources: [
              { title: "房贷类型对比 - 新华网", url: "http://www.news.cn/fortune/20240904/91ac02ae9e7442e5ae76351a3379feb4/c.html" },
              { title: "贷款计算器 - 深圳住建局", url: "https://zjj.sz.gov.cn/ztfw/zfgjj/dkjsq/" },
              { title: "房贷政策解读 - 人民银行", url: "http://www.pbc.gov.cn/" },
            ],
          },
          {
            id: "hb-w5-2",
            title: "公积金贷款",
            detail: "深入了解公积金贷款的政策和申请条件。",
            keyPoints: [
              "缴存要求：连续缴存 6-12 个月（各地不同）。",
              "贷款额度：与缴存余额和年限挂钩。",
              "利率优势：首套 5 年以上 2.6%，远低于商贷。",
              "提取使用：可提取公积金支付首付或还贷。",
            ],
            resources: [
              { title: "公积金贷款政策 - 人民银行", url: "http://www.pbc.gov.cn/goutongjiaoliu/113456/113469/5356307/index.html" },
              { title: "公积金贷款计算器 - 中央国家机关住房资金管理中心", url: "https://www.zzz.gov.cn/dkjsq/calculator.html" },
              { title: "公积金利率调整 - 广西财经", url: "https://m.gxfin.com/article/finance/xw/default/2025-05-08/6239456.html" },
            ],
          },
          {
            id: "hb-w5-3",
            title: "商业贷款",
            detail: "掌握商业贷款的申请流程和注意事项。",
            keyPoints: [
              "贷款条件：稳定收入、良好征信、抵押物。",
              "收入证明：月收入需达到月供的 2 倍。",
              "利率定价：LPR + 加点，可选浮动或固定。",
              "贷款成数：首套最高 85%，二套最高 75%。",
            ],
            resources: [
              { title: "商贷利率政策 - 21经济网", url: "https://www.21jingji.com/article/20240813/herald/2b31f275b55813a359ca0c7c7d742009.html" },
              { title: "LPR利率查询 - 人民银行", url: "http://www.pbc.gov.cn/" },
              { title: "贷款申请指南 - 银行官网", url: "https://www.icbc.com.cn/" },
            ],
          },
          {
            id: "hb-w5-4",
            title: "组合贷款",
            detail: "了解组合贷款的优势和申请要点。",
            keyPoints: [
              "适用场景：公积金额度不足以覆盖贷款需求。",
              "贷款比例：公积金部分 + 商贷部分。",
              "审批流程：需同时满足公积金和商贷条件。",
              "还款方式：可能需要在两个账户分别还款。",
            ],
            resources: [
              { title: "组合贷款详解 - 房天下", url: "https://m.fang.com/" },
              { title: "组合贷款计算 - 贝壳找房", url: "https://www.ke.com/calculator/" },
              { title: "贷款方案对比 - 链家", url: "https://www.lianjia.com/" },
            ],
          },
        ],
      },
      {
        id: "hb-w6",
        title: "第 6 周：贷款实操",
        summary: "掌握贷款申请的具体流程和资金安全。",
        overview: "本周进入贷款实操阶段，学习征信准备、材料提交、银行面签等具体流程，掌握资金监管与安全支付的关键注意事项。",
        keyPoints: [
          "贷款额度受收入、征信、房产多因素影响。",
          "还款方式选择影响总利息支出。",
          "资金监管是保障交易安全的关键。",
        ],
        lessons: [
          {
            id: "hb-w6-1",
            title: "贷款资格与额度",
            detail: "了解银行如何评估贷款资格和确定额度。",
            keyPoints: [
              "征信记录：两年内无连续 3 次或累计 6 次逾期。",
              "收入认定：工资流水、纳税证明、营业收入。",
              "负债率：现有负债不超过收入的 50%。",
              "房产评估：银行会对房产进行估值。",
            ],
            resources: [
              { title: "征信查询 - 人民银行征信中心", url: "https://ipcrs.pbccrc.org.cn/" },
              { title: "贷款额度计算 - 银行官网", url: "https://www.icbc.com.cn/" },
              { title: "贷款审批要点 - 房天下", url: "https://m.fang.com/" },
            ],
          },
          {
            id: "hb-w6-2",
            title: "利率与还款方式",
            detail: "掌握不同还款方式的特点和选择策略。",
            keyPoints: [
              "等额本息：月供固定，前期利息占比高。",
              "等额本金：月供递减，总利息较少。",
              "利率选择：LPR 浮动 vs 固定利率。",
              "提前还款：了解违约金规定和最佳时机。",
            ],
            resources: [
              { title: "还款方式对比 - 贝壳找房", url: "https://www.ke.com/calculator/" },
              { title: "房贷利率计算器 - 银行官网", url: "https://www.icbc.com.cn/" },
              { title: "提前还款策略 - 知乎", url: "https://zhuanlan.zhihu.com/" },
            ],
          },
          {
            id: "hb-w6-3",
            title: "贷款申请流程",
            detail: "详细了解房贷申请的步骤和所需材料。",
            keyPoints: [
              "材料准备：身份证、户口本、收入证明、银行流水。",
              "面签环节：携带购房合同到银行面签。",
              "审批周期：一般 2-4 周，公积金可能更长。",
              "放款时间：审批通过后 1-2 周内放款。",
            ],
            resources: [
              { title: "贷款材料清单 - 银行官网", url: "https://www.icbc.com.cn/" },
              { title: "贷款流程详解 - 房天下", url: "https://m.fang.com/" },
              { title: "面签注意事项 - 链家", url: "https://www.lianjia.com/" },
            ],
          },
          {
            id: "hb-w6-4",
            title: "资金监管与安全",
            detail: "了解交易资金的安全保障措施，掌握资金监管账户和支付凭证管理。",
            keyPoints: [
              "资金监管：通过银行监管账户进行资金交割。",
              "首付支付：必须支付到预售资金监管账户。",
              "尾款放款：银行直接放款至卖方账户。",
              "风险防范：避免私下转账，保留支付凭证。",
            ],
            resources: [
              { title: "资金监管服务 - 贝壳找房", url: "https://www.ke.com/" },
              { title: "交易安全指南 - 链家", url: "https://www.lianjia.com/" },
              { title: "资金安全提示 - 住建局", url: "https://www.mohurd.gov.cn/" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段四：签约与交易（第 7-8 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "hb-contract",
    title: "阶段四：签约与交易",
    duration: "第 7-8 周",
    goal: "掌握购房合同签订和产权过户的关键要点。",
    weeks: [
      {
        id: "hb-w7",
        title: "第 7 周：合同签订",
        summary: "学习购房合同的核心条款和签约注意事项。",
        overview: "本周学习如何逐条审核购房合同，理解面积约定、交房标准、违约责任等核心条款，掌握补充协议的谈判技巧。",
        keyPoints: [
          "合同是保障购房者权益的法律文件。",
          "定金具有法律约束力，不可随意退还。",
          "补充协议与主合同具有同等法律效力。",
        ],
        lessons: [
          {
            id: "hb-w7-1",
            title: "购房合同要点",
            detail: "掌握购房合同中的关键条款和审查要点。",
            keyPoints: [
              "标的物描述：面积、位置、户型必须准确。",
              "价款支付：付款方式、时间、账户明确。",
              "交付条件：交房时间、标准、违约责任。",
              "产权登记：办证时限和责任主体。",
            ],
            resources: [
              { title: "购房合同详解 - 百度百科", url: "https://baike.baidu.com/item/购房合同/1961980" },
              { title: "合同条款解读 - 华律网", url: "https://www.66law.cn/" },
              { title: "合同签署要点 - 无锡日报", url: "https://www.wxrb.com/doc/2023/12/22/325838.shtml" },
            ],
          },
          {
            id: "hb-w7-2",
            title: "补充协议条款",
            detail: "了解补充协议的作用和常见条款。",
            keyPoints: [
              "交房标准细化：装修标准、设备品牌型号。",
              "面积误差处理：超出 3% 的处理方式。",
              "不可抗力条款：疫情、政策等影响的约定。",
              "特殊承诺事项：学区、车位、配套等。",
            ],
            resources: [
              { title: "补充协议要点 - 房天下", url: "https://m.fang.com/zhishi/xf/qg_71284.html" },
              { title: "合同风险提示 - 知乎", url: "https://zhuanlan.zhihu.com/" },
              { title: "购房法律要点 - 江永县司法局", url: "http://www.jiangyong.gov.cn/jysfj/0200/202010/ad534aad961e4be48adede7225f4ba54.shtml" },
            ],
          },
          {
            id: "hb-w7-3",
            title: "定金与订金区别",
            detail: "理解定金和订金的法律含义和实际影响。",
            keyPoints: [
              "定金：具有担保性质，违约方需承担责任。",
              "买方违约：定金不予退还。",
              "卖方违约：需双倍返还定金。",
              "订金：预付款性质，可退还，无违约责任。",
            ],
            resources: [
              { title: "定金订金区别 - 知乎", url: "https://zhuanlan.zhihu.com/p/82379769" },
              { title: "定金法律规定 - 华律网", url: "https://www.66law.cn/" },
              { title: "购房定金指南 - 房天下", url: "https://m.fang.com/" },
            ],
          },
          {
            id: "hb-w7-4",
            title: "合同风险规避",
            detail: "识别和规避购房合同中的常见风险。",
            keyPoints: [
              "格式条款陷阱：注意排除或限制购房者权利的条款。",
              "模糊条款：交付标准、违约金比例要明确。",
              "霸王条款：开发商单方面变更权利等。",
              "阴阳合同：价格不实存在法律风险。",
            ],
            resources: [
              { title: "合同陷阱防范 - 房天下", url: "https://m.fang.com/zhishi/xf/qg_71284.html" },
              { title: "购房风险提示 - 消费者协会", url: "https://www.cca.org.cn/" },
              { title: "合同审查要点 - 华律网", url: "https://www.66law.cn/" },
            ],
          },
        ],
      },
      {
        id: "hb-w8",
        title: "第 8 周：过户与税费",
        summary: "掌握房产过户流程和税费计算。",
        overview: "本周掌握从网签到不动产权证办理的完整过户流程，学会计算契税、增值税和个人所得税，确保产权顺利转移。",
        keyPoints: [
          "过户是产权转移的关键环节。",
          "税费计算需要考虑房屋性质和持有年限。",
          "不动产登记是产权的最终确认。",
        ],
        lessons: [
          {
            id: "hb-w8-1",
            title: "过户流程详解",
            detail: "了解房产过户的完整流程和所需材料。",
            keyPoints: [
              "网签备案：合同在房管局系统备案。",
              "资金监管：买方资金进入监管账户。",
              "缴税过户：双方到不动产登记中心办理。",
              "领取产证：一般 5-15 个工作日。",
            ],
            resources: [
              { title: "过户流程详解 - 杭州看房网", url: "https://m.kan3721.com/news-26719.html" },
              { title: "过户材料清单 - 百度百科", url: "https://baike.baidu.com/item/二手房的交易流程/1651279" },
              { title: "过户办理指南 - 链家", url: "https://www.lianjia.com/" },
            ],
          },
          {
            id: "hb-w8-2",
            title: "税费计算",
            detail: "掌握契税、增值税、个人所得税等购房相关税费的计算方法与减免条件。",
            keyPoints: [
              "契税：首套 90㎡以下 1%，90㎡以上 1.5%；非首套 3%。",
              "增值税：满 2 年免征，不满 2 年按 5.6%。",
              "个人所得税：满五唯一免征，否则 1%。",
              "其他费用：印花税、登记费、评估费等。",
            ],
            resources: [
              { title: "购房税费详解 - 房天下", url: "https://m.fang.com/" },
              { title: "契税计算器 - 贝壳找房", url: "https://www.ke.com/calculator/" },
              { title: "税费政策 - 国家税务总局", url: "https://www.chinatax.gov.cn/" },
            ],
          },
          {
            id: "hb-w8-3",
            title: "不动产登记",
            detail: "了解不动产登记的法律意义和办理流程。",
            keyPoints: [
              "不动产登记是物权变动的生效要件。",
              "登记簿效力高于房产证。",
              "办理地点：当地不动产登记中心。",
              "查询方式：可在线或现场查询登记信息。",
            ],
            resources: [
              { title: "不动产登记查询 - 自然资源部", url: "http://www.mnr.gov.cn/" },
              { title: "登记办理指南 - 法大大", url: "https://www.fadada.com/notice/detail-1934.html" },
              { title: "产权登记详解 - 华律网", url: "https://www.66law.cn/" },
            ],
          },
          {
            id: "hb-w8-4",
            title: "产权证办理",
            detail: "掌握产权证办理的时限和注意事项。",
            keyPoints: [
              "新房：交房后 90 日内应取得产权证。",
              "二手房：过户后即可领取新产权证。",
              "核对信息：面积、位置、产权人等。",
              "抵押登记：贷款购房需办理抵押登记。",
            ],
            resources: [
              { title: "产权证办理流程 - 和讯网", url: "https://m.hexun.com/house/2024-07-31/213792492.html" },
              { title: "房产证注意事项 - 房天下", url: "https://m.fang.com/zhishi/xf/qg_1078361.html" },
              { title: "首套房办证流程 - 乐居买房", url: "https://baike.leju.com/wx-6896737901716234551.html" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段五：收房与验房（第 9-10 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "hb-inspection",
    title: "阶段五：收房与验房",
    duration: "第 9-10 周",
    goal: "掌握专业的验房技巧，确保房屋质量符合标准。",
    weeks: [
      {
        id: "hb-w9",
        title: "第 9 周：新房收房",
        summary: "学习新房收房的流程和验收标准。",
        overview: "本周学习新房收房的完整流程，从材料与工具准备到三书一表核查，再到墙面、水电、面积等各项质量验收要点。",
        keyPoints: [
          "三书一表是收房的必备文件。",
          "先验房再收房，发现问题及时记录。",
          "验收合格后再签字确认。",
        ],
        lessons: [
          {
            id: "hb-w9-1",
            title: "收房准备工作",
            detail: "做好收房前的材料、费用、工具和验房知识等各项准备工作。",
            keyPoints: [
              "材料准备：身份证、购房合同、入住通知书。",
              "费用准备：契税、维修基金、物业费等。",
              "工具准备：卷尺、水平仪、小锤、手电筒。",
              "知识准备：了解验房标准和常见问题。",
            ],
            resources: [
              { title: "收房准备清单 - 房天下", url: "https://m.fang.com/zhishi/xf/qd_3783.html" },
              { title: "收房流程详解 - 安团网", url: "https://www.antuan.com/zhuangxiugonglue/artical_12095.html" },
              { title: "验房工具准备 - 惠民之家", url: "https://www.fz0752.com/issue/content.shtml?IC_ID=691" },
            ],
          },
          {
            id: "hb-w9-2",
            title: "三书一表核查",
            detail: "了解收房时必须核验的三书一表等交房文件，确认工程质量合格。",
            keyPoints: [
              "住宅质量保证书：开发商对房屋质量的承诺。",
              "住宅使用说明书：房屋结构和使用注意事项。",
              "建筑工程质量认定书：质量合格证明。",
              "竣工验收备案表：政府验收合格的证明。",
            ],
            resources: [
              { title: "三书一表详解 - 华律网", url: "https://m.66law.cn/laws/312917.aspx" },
              { title: "收房文件核验 - Q房网", url: "https://baike.qfang.com/mf/r25" },
              { title: "交房标准解读 - 链家", url: "https://page.lianjia.com/subject/18427.html" },
            ],
          },
          {
            id: "hb-w9-3",
            title: "房屋质量验收",
            detail: "掌握房屋主体结构和装修质量的验收方法。",
            keyPoints: [
              "墙面：空鼓、裂缝、平整度检查。",
              "地面：平整度、空鼓、裂缝检查。",
              "门窗：开关顺畅、密封性、五金件检查。",
              "防水：厨卫防水层验收，建议做闭水试验。",
            ],
            resources: [
              { title: "验房十大注意事项 - 爱空间", url: "https://m.ikongjian.com/cd/jzgl/25482.html" },
              { title: "质量验收标准 - 房天下", url: "https://m.fang.com/zhishi/xf/qd_3783.html" },
              { title: "验房流程详解 - 中新网", url: "https://news.centanet.com/m/sy/detail/12068.html/" },
            ],
          },
          {
            id: "hb-w9-4",
            title: "面积与设施验收",
            detail: "核实房屋实测面积与合同面积的偏差，验收水电和配套设施是否达标。",
            keyPoints: [
              "面积核实：对照实测面积报告，误差不超过 3%。",
              "水电验收：水压、电压、插座、开关测试。",
              "设施验收：燃气、暖气、空调等设备检查。",
              "配套核实：小区配套是否与宣传一致。",
            ],
            resources: [
              { title: "面积误差处理 - 房天下", url: "https://m.fang.com/" },
              { title: "水电验收标准 - 华龙网", url: "https://news.cqnews.net/" },
              { title: "设施验收要点 - 安团网", url: "https://www.antuan.com/" },
            ],
          },
        ],
      },
      {
        id: "hb-w10",
        title: "第 10 周：问题处理",
        summary: "学习处理验房问题和办理入住手续。",
        overview: "本周学习验房发现问题后的维权与整改流程，完成物业费用结算、钥匙交接、户口迁移和水电开户等入住手续。",
        keyPoints: [
          "发现问题要书面记录并要求整改。",
          "物业交接需确认各项费用结清。",
          "保留好验房记录作为维权依据。",
        ],
        lessons: [
          {
            id: "hb-w10-1",
            title: "常见质量问题",
            detail: "识别和记录常见的房屋质量问题。",
            keyPoints: [
              "结构问题：承重墙裂缝、楼板变形等严重问题。",
              "渗漏问题：屋面、外墙、厨卫渗水。",
              "门窗问题：安装歪斜、密封不良、五金损坏。",
              "装修问题：空鼓、开裂、色差等表面问题。",
            ],
            resources: [
              { title: "质量问题汇总 - 爱空间", url: "https://m.ikongjian.com/cd/jzgl/25482.html" },
              { title: "验房问题处理 - 我知间", url: "https://www.myzhijian.com/?p=17806" },
              { title: "常见问题解析 - 房天下", url: "https://m.fang.com/" },
            ],
          },
          {
            id: "hb-w10-2",
            title: "整改与维权",
            detail: "学习验房发现问题后的记录、书面通知和整改维权的正确方法。",
            keyPoints: [
              "问题记录：拍照、录像，填写验房表。",
              "书面通知：向开发商发出书面整改通知。",
              "整改期限：约定合理的整改完成时间。",
              "拒收条件：严重质量问题可拒绝收房。",
            ],
            resources: [
              { title: "维权指南 - 消费者协会", url: "https://www.cca.org.cn/" },
              { title: "收房维权 - 华律网", url: "https://www.66law.cn/" },
              { title: "整改流程 - 房天下", url: "https://m.fang.com/" },
            ],
          },
          {
            id: "hb-w10-3",
            title: "物业交接",
            detail: "完成水电气费用结算、钥匙移交和装修登记等物业交接手续。",
            keyPoints: [
              "费用结算：水电气费、物业费的起算时间。",
              "钥匙交接：入户门、信箱、车库等钥匙。",
              "资料移交：房屋使用说明、保修卡等。",
              "装修登记：了解装修规定和手续。",
            ],
            resources: [
              { title: "物业交接清单 - Q房网", url: "https://baike.qfang.com/mf/r25" },
              { title: "交接注意事项 - 房天下", url: "https://m.fang.com/" },
              { title: "物业服务内容 - 住建部", url: "https://www.mohurd.gov.cn/" },
            ],
          },
          {
            id: "hb-w10-4",
            title: "入住手续办理",
            detail: "完成户口迁移、水电开户、燃气开通等入住所需的各项手续。",
            keyPoints: [
              "户口迁移：了解落户条件和办理流程。",
              "水电开户：到相关部门办理开户手续。",
              "燃气开通：预约燃气公司上门开通。",
              "宽带网络：选择运营商办理宽带安装。",
            ],
            resources: [
              { title: "入住手续指南 - 链家", url: "https://www.lianjia.com/" },
              { title: "户口迁移政策 - 公安局", url: "https://www.mps.gov.cn/" },
              { title: "水电开户流程 - 供电公司", url: "https://www.sgcc.com.cn/" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段六：装修与入住（第 11-12 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "hb-renovation",
    title: "阶段六：装修与入住",
    duration: "第 11-12 周",
    goal: "掌握装修规划和物业管理知识，顺利完成入住。",
    weeks: [
      {
        id: "hb-w11",
        title: "第 11 周：装修规划",
        summary: "制定装修计划，选择装修方案和施工团队。",
        keyPoints: [
          "装修预算要留有余地，避免超支。",
          "装修公司选择要看资质和口碑。",
          "装修合同要明确责任和标准。",
        ],
        lessons: [
          {
            id: "hb-w11-1",
            title: "装修预算制定",
            detail: "制定合理的装修预算和资金分配。",
            keyPoints: [
              "预算构成：设计、材料、人工、家具家电。",
              "分配原则：隐蔽工程不省，装饰材料可省。",
              "预留费用：至少预留 10-15% 的机动资金。",
              "费用控制：确定装修档次，量入为出。",
            ],
            resources: [
              { title: "装修预算指南 - 业之峰", url: "https://www.yzf.com.cn/gonglue" },
              { title: "装修费用构成 - 装信通", url: "https://www.zx123.cn/2012/1225/69266.html" },
              { title: "预算制定方法 - 知乎", url: "https://zhuanlan.zhihu.com/p/447985832" },
            ],
          },
          {
            id: "hb-w11-2",
            title: "设计风格选择",
            detail: "确定适合自己的装修风格和设计方案。",
            keyPoints: [
              "风格类型：现代简约、北欧、新中式、轻奢等。",
              "空间规划：根据生活习惯设计功能分区。",
              "预算匹配：不同风格装修成本差异大。",
              "设计沟通：明确表达需求，多看案例参考。",
            ],
            resources: [
              { title: "装修风格详解 - 尚美饰家", url: "https://m.smsj.com/strategy/54276-23617.html" },
              { title: "设计方案参考 - 土巴兔", url: "https://www.to8to.com/" },
              { title: "风格选择指南 - 装修那些事", url: "https://www.zhuangxiuweb.com/baike/352.html" },
            ],
          },
          {
            id: "hb-w11-3",
            title: "装修公司选择",
            detail: "学习如何选择靠谱的装修公司或施工队。",
            keyPoints: [
              "资质审核：营业执照、装修资质、行业口碑。",
              "案例考察：实地参观在建工地和已完工项目。",
              "报价对比：至少对比 3 家，警惕低价陷阱。",
              "工艺了解：关注施工工艺和材料品牌。",
            ],
            resources: [
              { title: "装修公司选择 - 爱空间", url: "https://www.ikongjian.com/zixun/49688.html" },
              { title: "装修避坑指南 - 家博会门票网", url: "https://www.jbhmp.com/gonglue/fangwuzhuangxiu/1318.html" },
              { title: "装修公司评价 - 大众点评", url: "https://www.dianping.com/" },
            ],
          },
          {
            id: "hb-w11-4",
            title: "装修合同签订",
            detail: "掌握装修合同的关键条款和签约要点。",
            keyPoints: [
              "工程范围：明确包含和不包含的项目。",
              "材料约定：品牌、型号、规格、数量。",
              "工期约定：开工日期、完工日期、延期责任。",
              "付款方式：分阶段付款，验收合格再付尾款。",
            ],
            resources: [
              { title: "装修合同要点 - 装信通", url: "https://www.zx123.cn/" },
              { title: "合同签订指南 - 知乎", url: "https://zhuanlan.zhihu.com/" },
              { title: "装修维权 - 消费者协会", url: "https://www.cca.org.cn/" },
            ],
          },
        ],
      },
      {
        id: "hb-w12",
        title: "第 12 周：入住准备",
        summary: "完成装修验收和物业相关事宜，准备入住。",
        keyPoints: [
          "装修验收要仔细，发现问题及时整改。",
          "了解物业服务内容和收费标准。",
          "做好新房保养和维护工作。",
        ],
        lessons: [
          {
            id: "hb-w12-1",
            title: "装修施工管理",
            detail: "掌握装修过程中的监督和管理要点。",
            keyPoints: [
              "水电改造：拍照留存，便于后期维修。",
              "隐蔽工程：验收合格再封闭。",
              "材料进场：核对品牌型号，拒绝以次充好。",
              "节点验收：每个阶段完成后及时验收。",
            ],
            resources: [
              { title: "装修21个步骤 - 爱空间", url: "https://www.ikongjian.com/zixun/49688.html" },
              { title: "施工监督要点 - 装信通", url: "https://www.zx123.cn/" },
              { title: "装修流程图解 - 业之峰", url: "https://www.yzf.com.cn/gonglue" },
            ],
          },
          {
            id: "hb-w12-2",
            title: "验收与整改",
            detail: "完成水电、木工、油漆等各项装修竣工验收，并及时处理遗留问题。",
            keyPoints: [
              "水电验收：开关插座、水压、排水畅通。",
              "木工验收：柜门平整、五金件牢固。",
              "油漆验收：墙面平整、无色差、无流挂。",
              "整体验收：清洁、通风、检测甲醛。",
            ],
            resources: [
              { title: "装修验收标准 - 尚美饰家", url: "https://www.smsj.com/" },
              { title: "竣工验收清单 - 土巴兔", url: "https://www.to8to.com/" },
              { title: "甲醛检测 - 环保局", url: "https://www.mee.gov.cn/" },
            ],
          },
          {
            id: "hb-w12-3",
            title: "物业管理知识",
            detail: "了解物业服务内容和业主权利义务。",
            keyPoints: [
              "物业费构成：管理费、公共设施维护、保洁等。",
              "业主委员会：参与小区公共事务决策。",
              "公共维修基金：用于共用部位的大修。",
              "投诉渠道：了解物业问题的反映途径。",
            ],
            resources: [
              { title: "物业管理条例 - 住建部", url: "https://www.mohurd.gov.cn/" },
              { title: "业主权利义务 - 法律知识", url: "https://www.66law.cn/" },
              { title: "物业服务标准 - 中国物业管理协会", url: "http://www.ecpmi.org.cn/" },
            ],
          },
          {
            id: "hb-w12-4",
            title: "后续维护事项",
            detail: "掌握新房的日常维护和保养知识。",
            keyPoints: [
              "保修期限：一般结构 5 年，设备 2 年。",
              "维修渠道：物业报修、开发商保修。",
              "定期维护：水电检查、门窗保养。",
              "邻里关系：遵守公约，和谐相处。",
            ],
            resources: [
              { title: "房屋保修规定 - 住建部", url: "https://www.mohurd.gov.cn/" },
              { title: "日常维护指南 - 房天下", url: "https://m.fang.com/" },
              { title: "家居保养知识 - 知乎", url: "https://zhuanlan.zhihu.com/" },
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
export const homeBuyingKnowledgeCards: KnowledgeCard[] = [
  {
    id: "hb-kc-1",
    title: "购房资格与限购",
    summary: "了解限购政策是购房的第一步。",
    points: [
      "限购政策因城市而异，需查询当地规定",
      "户籍、社保、已有房产数量是主要限制因素",
      "以家庭为单位计算房产数量",
      "部分城市对外地户籍有社保缴纳要求",
    ],
    practice: "查询你所在城市的最新限购政策，确认自己是否具备购房资格。",
  },
  {
    id: "hb-kc-2",
    title: "首付与贷款比例",
    summary: "首付比例直接影响购房门槛和月供压力。",
    points: [
      "首套房首付最低 15%（2024 年新政）",
      "二套房首付最低 25%",
      "月供不应超过家庭月收入的 50%",
      "贷款年限最长 30 年，需考虑退休年龄",
    ],
    practice: "根据你的收入和存款，计算能够承受的最高房价。",
  },
  {
    id: "hb-kc-3",
    title: "五证二书",
    summary: "五证二书是新房合法销售的必备文件。",
    points: [
      "五证：国有土地使用证、建设用地规划许可证、建设工程规划许可证、建筑工程施工许可证、商品房预售许可证",
      "二书：住宅质量保证书、住宅使用说明书",
      "预售许可证是最关键的证件",
      "可在住建局官网查询证件真伪",
    ],
    practice: "在看房时，要求销售出示五证原件并核实真伪。",
  },
  {
    id: "hb-kc-4",
    title: "公积金贷款优势",
    summary: "公积金贷款利率低，应优先使用。",
    points: [
      "首套 5 年以上利率 2.6%，远低于商贷",
      "需连续缴存 6-12 个月（各地不同）",
      "贷款额度与缴存余额和年限挂钩",
      "可提取公积金支付首付或还贷",
    ],
    practice: "查询你的公积金账户余额和可贷款额度。",
  },
  {
    id: "hb-kc-5",
    title: "定金与订金区别",
    summary: "定金具有法律约束力，不可混淆。",
    points: [
      "定金：具有担保性质，违约需承担责任",
      "买方违约：定金不予退还",
      "卖方违约：需双倍返还定金",
      "订金：预付款性质，可退还，无违约责任",
    ],
    practice: "签订认购书时，仔细确认是\"定金\"还是\"订金\"。",
  },
  {
    id: "hb-kc-6",
    title: "契税计算",
    summary: "契税是购房的主要税费之一。",
    points: [
      "首套 90㎡以下：1%",
      "首套 90㎡以上：1.5%",
      "非首套或非普通住宅：3%",
      "契税按房屋成交价或评估价计算",
    ],
    practice: "计算你准备购买房屋需要缴纳的契税金额。",
  },
  {
    id: "hb-kc-7",
    title: "二手房产权调查",
    summary: "产权清晰是二手房交易的核心前提。",
    points: [
      "拉产调查询产权归属和抵押情况",
      "核实产权人与房产证、身份证一致",
      "确认是否有共有人需要签字",
      "了解土地使用权剩余年限",
    ],
    practice: "学习如何在不动产登记中心查询房屋产权信息。",
  },
  {
    id: "hb-kc-8",
    title: "验房关键点",
    summary: "先验房再收房，发现问题及时记录。",
    points: [
      "墙面：空鼓、裂缝、平整度",
      "地面：平整度、空鼓、裂缝",
      "门窗：开关顺畅、密封性、五金件",
      "防水：厨卫做闭水试验",
    ],
    practice: "准备验房工具：卷尺、水平仪、小锤、手电筒。",
  },
  {
    id: "hb-kc-9",
    title: "装修预算分配",
    summary: "合理的预算分配是装修成功的基础。",
    points: [
      "隐蔽工程（水电）不能省",
      "主材质量要保证",
      "装饰性材料可以省",
      "预留 10-15% 机动资金",
    ],
    practice: "制定一份详细的装修预算表，包含各项费用明细。",
  },
  {
    id: "hb-kc-10",
    title: "满五唯一",
    summary: "\"满五唯一\"可免征个税和增值税。",
    points: [
      "满五：房产证满 5 年",
      "唯一：卖方家庭唯一住房",
      "满足条件可免征个人所得税",
      "满 2 年可免征增值税",
    ],
    practice: "购买二手房时，询问房屋是否满足\"满五唯一\"条件。",
  },
]

// ═══════════════════════════════════════════════════════════════
// 考试题目
// ═══════════════════════════════════════════════════════════════
export const homeBuyingExamQuestions: QuizQuestion[] = [
  {
    id: "hb-q1",
    question: "根据 2024 年最新政策，首套房最低首付比例是多少？",
    options: ["10%", "15%", "20%", "30%"],
    answer: 1,
    rationale: "2024 年 5 月政策调整后，首套房最低首付比例从 20% 降至 15%。",
  },
  {
    id: "hb-q2",
    question: "以下哪个不属于购房\"五证\"？",
    options: ["国有土地使用证", "建设工程规划许可证", "住宅质量保证书", "商品房预售许可证"],
    answer: 2,
    rationale: "住宅质量保证书属于\"二书\"，不属于\"五证\"。五证包括国有土地使用证、建设用地规划许可证、建设工程规划许可证、建筑工程施工许可证、商品房预售许可证。",
  },
  {
    id: "hb-q3",
    question: "公积金贷款首套房 5 年以上的利率是多少？",
    options: ["2.1%", "2.6%", "3.1%", "3.6%"],
    answer: 1,
    rationale: "2025 年 5 月调整后，公积金贷款首套房 5 年以上利率为 2.6%。",
  },
  {
    id: "hb-q4",
    question: "\"定金\"和\"订金\"的主要区别是什么？",
    options: ["金额不同", "定金有法律约束力，订金无", "订金有法律约束力，定金无", "没有区别"],
    answer: 1,
    rationale: "定金具有担保性质，违约方需承担责任；订金是预付款性质，可退还，无违约责任。",
  },
  {
    id: "hb-q5",
    question: "首套房面积 90 平米以下的契税税率是多少？",
    options: ["0.5%", "1%", "1.5%", "3%"],
    answer: 1,
    rationale: "首套房面积 90 平米以下契税为 1%，90 平米以上为 1.5%。",
  },
  {
    id: "hb-q6",
    question: "二手房交易中，\"满五唯一\"指的是什么？",
    options: ["房龄满 5 年", "房产证满 5 年且是卖方家庭唯一住房", "贷款满 5 年", "装修满 5 年"],
    answer: 1,
    rationale: "\"满五唯一\"指房产证满 5 年且是卖方家庭唯一住房，满足条件可免征个人所得税。",
  },
  {
    id: "hb-q7",
    question: "以下哪种还款方式前期还款压力较小？",
    options: ["等额本金", "等额本息", "先息后本", "一次性还本付息"],
    answer: 1,
    rationale: "等额本息每月还款额固定，前期月供压力较等额本金小；等额本金前期月供高，逐月递减。",
  },
  {
    id: "hb-q8",
    question: "新房交付时，\"三书一表\"中的\"一表\"是指什么？",
    options: ["价格表", "竣工验收备案表", "预售许可表", "房屋面积表"],
    answer: 1,
    rationale: "\"三书一表\"中的\"一表\"是竣工验收备案表，是政府验收合格的证明。",
  },
  {
    id: "hb-q9",
    question: "一般情况下，月供占家庭收入的比例不应超过多少？",
    options: ["30%", "50%", "70%", "没有限制"],
    answer: 1,
    rationale: "为保证生活质量和财务安全，月供不应超过家庭月收入的 50%。",
  },
  {
    id: "hb-q10",
    question: "以下哪种房产类型产权年限最长？",
    options: ["商业公寓", "写字楼", "普通住宅", "商铺"],
    answer: 2,
    rationale: "普通住宅产权 70 年，商业公寓和商铺一般为 40 年，写字楼一般为 50 年。",
  },
  {
    id: "hb-q11",
    question: "验房时检查墙面空鼓应该使用什么工具？",
    options: ["卷尺", "水平仪", "小锤", "手电筒"],
    answer: 2,
    rationale: "用小锤轻敲墙面，声音空洞表示存在空鼓问题。",
  },
  {
    id: "hb-q12",
    question: "二手房产权调查时，\"拉产调\"主要查询什么信息？",
    options: ["房屋装修情况", "物业费缴纳情况", "产权归属和抵押情况", "邻居信息"],
    answer: 2,
    rationale: "拉产调是在不动产登记中心查询房屋产权归属、是否有抵押查封等信息。",
  },
  {
    id: "hb-q13",
    question: "房屋面积误差超过多少可以要求退房？",
    options: ["1%", "2%", "3%", "5%"],
    answer: 2,
    rationale: "根据规定，面积误差超过 3% 时，买方可以选择退房。",
  },
  {
    id: "hb-q14",
    question: "以下哪个不是影响公积金贷款额度的因素？",
    options: ["缴存余额", "缴存年限", "房屋装修标准", "月缴存额"],
    answer: 2,
    rationale: "公积金贷款额度主要与缴存余额、缴存年限、月缴存额等因素相关，与房屋装修标准无关。",
  },
  {
    id: "hb-q15",
    question: "二手房交易中，资金监管的主要目的是什么？",
    options: ["增加交易费用", "延长交易时间", "保障资金安全", "方便银行放贷"],
    answer: 2,
    rationale: "资金监管通过银行监管账户进行资金交割，避免钱房两空的风险，保障买卖双方的资金安全。",
  },
  {
    id: "hb-q16",
    question: "装修预算中，以下哪项费用不应该节省？",
    options: ["装饰品", "窗帘", "水电隐蔽工程", "灯具"],
    answer: 2,
    rationale: "水电等隐蔽工程一旦完成很难改动，质量问题会影响后续使用，不应该节省。",
  },
  {
    id: "hb-q17",
    question: "新房收房时，厨卫防水验收应该做什么测试？",
    options: ["压力测试", "闭水试验", "通风测试", "亮度测试"],
    answer: 1,
    rationale: "厨卫防水验收应做闭水试验，放水 24-48 小时，检查楼下是否有渗漏。",
  },
  {
    id: "hb-q18",
    question: "购房合同中，以下哪项条款需要特别关注？",
    options: ["开发商广告内容", "销售人员口头承诺", "违约责任条款", "样板房装修标准"],
    answer: 2,
    rationale: "违约责任条款是保障购房者权益的重要内容，需要明确违约的责任主体和赔偿标准。口头承诺不具有法律效力。",
  },
  {
    id: "hb-q19",
    question: "一般情况下，新房结构保修期限是多少年？",
    options: ["1 年", "2 年", "5 年", "终身"],
    answer: 2,
    rationale: "根据规定，房屋主体结构保修期限为 5 年，设备设施一般为 2 年。",
  },
  {
    id: "hb-q20",
    question: "购买二手房时，\"满两年\"可以免征什么税？",
    options: ["契税", "增值税", "个人所得税", "印花税"],
    answer: 1,
    rationale: "房产证满 2 年可以免征增值税，满五唯一可以免征个人所得税。契税由买方缴纳，与房产证年限无关。",
  },
  {
    id: "hb-q21",
    question: "以下哪种情况属于\"阴阳合同\"？",
    options: ["签订两份相同的合同", "买卖双方价格有差异", "合同约定价格与实际成交价不符", "合同有补充协议"],
    answer: 2,
    rationale: "阴阳合同是指签订两份不同价格的合同，一份用于报税，一份反映真实成交价，存在法律风险。",
  },
  {
    id: "hb-q22",
    question: "商品房预售许可证应该向哪个部门查询真伪？",
    options: ["工商局", "住建局", "税务局", "房管局"],
    answer: 1,
    rationale: "商品房预售许可证由住建局颁发，可在当地住建局官网查询真伪。",
  },
  {
    id: "hb-q23",
    question: "装修合同中，付款方式应该如何约定？",
    options: ["一次性全额付款", "预付 50%，完工付 50%", "分阶段付款，验收合格再付尾款", "完工后一次性付款"],
    answer: 2,
    rationale: "分阶段付款可以更好地约束施工质量，验收合格再付尾款可以保障业主权益。",
  },
  {
    id: "hb-q24",
    question: "以下哪项不属于物业费的常见构成？",
    options: ["管理人员工资", "公共区域清洁", "房屋大修基金", "电梯维护"],
    answer: 2,
    rationale: "房屋大修基金（公共维修基金）是单独缴纳的，不属于物业费构成。物业费主要包括管理费、公共设施维护、保洁等。",
  },
  {
    id: "hb-q25",
    question: "征信报告中，连续逾期多少次可能影响房贷审批？",
    options: ["1 次", "2 次", "3 次", "5 次"],
    answer: 2,
    rationale: "银行一般规定两年内不能有连续 3 次或累计 6 次逾期记录，否则可能影响房贷审批。",
  },
]

// ═══════════════════════════════════════════════════════════════
// 主题定义
// ═══════════════════════════════════════════════════════════════
export const homeBuyingRoadmap: RoadmapDefinition = {
  id: "home-buying",
  label: "买房",
  title: "买房全攻略",
  durationLabel: "12 周完整学习路线",
  description:
    "从购房准备到入住装修，系统学习买房全流程。涵盖财务规划、看房选房、贷款申请、合同签订、收房验房和装修入住等关键环节，帮助你做出明智的购房决策，避免常见陷阱。",
  heroBadge: "12 周 · 48 主题",
  stages: homeBuyingStages,
  knowledgeCards: homeBuyingKnowledgeCards,
  examQuestions: homeBuyingExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "开始你的购房学习之旅！先从财务规划开始。"
    if (percent < 25) return "继续学习看房选房技巧，了解新房和二手房的区别。"
    if (percent < 50) return "深入学习贷款知识和合同签订要点。"
    if (percent < 75) return "掌握收房验房技巧，保障房屋质量。"
    if (percent < 100) return "即将完成！学习装修规划和入住准备。"
    return "恭喜完成！你已掌握买房全流程知识，祝你购房顺利！"
  },
  resourceGuide: {
    environment:
      "建议使用贝壳找房、链家等平台查看房源和成交数据。准备好计算器和表格工具，用于预算和对比分析。",
    fallbackKeyPoints: [
      "购房前必须全面评估个人财务状况",
      "五证齐全是购买新房的前提条件",
      "公积金贷款利率最低，应优先使用",
      "合同是保障购房者权益的法律文件",
      "先验房再收房，发现问题及时记录",
    ],
    handsOnSteps: [
      "查询你所在城市的限购政策和购房资格",
      "评估个人财务状况，制定购房预算",
      "实地看房，对比不同楼盘的优劣",
      "咨询银行了解贷款条件和额度",
      "准备验房工具，学习验房标准",
    ],
    selfChecks: [
      "能否计算自己的购房预算和承受能力？",
      "能否识别新房和二手房的主要风险点？",
      "能否区分公积金贷款和商业贷款的优劣？",
      "能否审查购房合同的关键条款？",
      "能否独立完成基本的房屋验收？",
    ],
    extensions: [
      "学习房产投资和资产配置",
      "了解房产税和遗产规划",
      "研究不同城市的房产市场特点",
      "关注房地产政策动态和市场趋势",
    ],
    lessonQuizAdvice: "购房知识需要结合实际情况理解，建议在学习过程中实地看房，将理论与实践结合。",
  },
}
