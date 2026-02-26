import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const financialPlanningStages: Stage[] = [
  {
    id: "fp-s1",
    title: "阶段一：理财基础",
    duration: "第 1-3 周",
    goal: "建立正确的财务思维，掌握记账、预算、储蓄与信用管理的基本功。",
    weeks: [
      {
        id: "fp-w1",
        title: "第 1 周：财务思维与金钱观",
        summary: "树立正确的金钱观，理解财务自由的本质与路径。",
        overview: "理财的起点不是技巧，而是思维。本周从金钱心理学出发，理解收入、支出、资产与负债的本质关系，建立长期财务规划的思维框架。",
        keyPoints: [
          "区分资产与负债：资产为你创造现金流，负债从你手中带走现金流",
          "财务自由的核心指标是被动收入覆盖日常开支",
          "延迟满足与复利思维是长期财富积累的基石",
        ],
        lessons: [
          {
            id: "fp-w1-1",
            title: "金钱心理学与财务思维",
            detail: "理解人们对金钱的常见心理偏差，建立理性客观的财务决策框架。",
            keyPoints: [
              "锚定效应和心理账户会导致非理性消费决策",
              "建立「先储蓄后消费」的自动化财务习惯",
              "用净资产而非收入衡量真正的财务健康状况",
            ],
            resources: [
              { title: "Investopedia: Behavioral Finance", url: "https://www.investopedia.com/terms/b/behavioralfinance.asp" },
              { title: "Khan Academy: Financial Literacy", url: "https://www.khanacademy.org/college-careers-more/financial-literacy" },
              { title: "Psychology of Money Summary", url: "https://www.investopedia.com/the-psychology-of-money-review-5184458" },
            ],
          },
          {
            id: "fp-w1-2",
            title: "资产、负债与净资产",
            detail: "掌握资产负债表的基本构成，学会计算个人净资产并设定财务目标。",
            keyPoints: [
              "个人资产负债表：资产（储蓄、投资、房产）减去负债（贷款、信用卡欠款）等于净资产",
              "区分消费性资产（贬值）与生产性资产（增值或产生收入）",
              "定期更新净资产表是衡量财务进步的关键工具",
            ],
            resources: [
              { title: "Investopedia: Net Worth", url: "https://www.investopedia.com/terms/n/networth.asp" },
              { title: "SEC: Personal Financial Statements", url: "https://www.sec.gov/resources-for-investors" },
            ],
          },
          {
            id: "fp-w1-3",
            title: "财务目标设定与规划",
            detail: "运用 SMART 原则设定短期、中期和长期财务目标，制定可执行的行动计划。",
            keyPoints: [
              "短期目标（1 年内）：建立应急资金、还清高息债务",
              "中期目标（1-5 年）：购房首付、教育基金、投资组合建立",
              "长期目标（5 年以上）：退休规划、财务自由、财富传承",
            ],
            resources: [
              { title: "Investopedia: Financial Goals", url: "https://www.investopedia.com/articles/personal-finance/100516/setting-financial-goals.asp" },
              { title: "Khan Academy: Saving & Budgeting", url: "https://www.khanacademy.org/college-careers-more/financial-literacy/xa6995ea67a8e9fdd:budgeting-and-saving" },
              { title: "Morningstar: Financial Planning", url: "https://www.morningstar.com/personal-finance" },
            ],
          },
        ],
      },
      {
        id: "fp-w2",
        title: "第 2 周：记账与预算管理",
        summary: "掌握科学的记账方法和预算管理体系，做到心中有数。",
        overview: "记账是理财的地基。本周学习如何追踪每一笔收支、使用 50/30/20 等预算框架分配资金，以及如何利用工具实现自动化记账。",
        keyPoints: [
          "记账的核心目的是了解资金流向，而非记录每一分钱",
          "50/30/20 规则：50% 必需开支、30% 弹性消费、20% 储蓄与投资",
          "自动化是坚持预算管理的关键，善用银行自动转账和记账工具",
        ],
        lessons: [
          {
            id: "fp-w2-1",
            title: "记账方法与工具选择",
            detail: "对比手工记账、电子表格和专业记账 App 的优劣，选择适合自己的方式。",
            keyPoints: [
              "记账分类应简洁实用：住房、交通、餐饮、娱乐、教育等大类即可",
              "电子表格（Excel/Google Sheets）适合自定义分析和可视化",
              "记账 App（如 Mint、YNAB）可自动同步银行账户，降低记账门槛",
            ],
            resources: [
              { title: "Investopedia: Best Budgeting Apps", url: "https://www.investopedia.com/best-budgeting-apps-5085789" },
              { title: "NerdWallet: How to Budget", url: "https://www.nerdwallet.com/article/finance/how-to-budget" },
            ],
          },
          {
            id: "fp-w2-2",
            title: "预算框架与分配策略",
            detail: "学习 50/30/20、信封预算法和零基预算等主流框架，按需选用并调整。",
            keyPoints: [
              "50/30/20 规则适合大多数人：需求 50%、欲望 30%、储蓄/还债 20%",
              "信封预算法用「固定额度」控制弹性消费，防止超支",
              "零基预算让每一分钱都有去处，适合需要严格控制支出的阶段",
            ],
            resources: [
              { title: "Investopedia: 50/30/20 Rule", url: "https://www.investopedia.com/ask/answers/022916/what-502030-budget-rule.asp" },
              { title: "Khan Academy: Budgeting", url: "https://www.khanacademy.org/college-careers-more/financial-literacy/xa6995ea67a8e9fdd:budgeting-and-saving" },
              { title: "YNAB Method", url: "https://www.ynab.com/the-four-rules" },
            ],
          },
          {
            id: "fp-w2-3",
            title: "开支审计与优化",
            detail: "通过月度开支审计发现不必要支出，优化消费结构并释放更多储蓄空间。",
            keyPoints: [
              "每月审查订阅服务和周期性支出，取消不再使用的服务",
              "区分「固定开支」和「可压缩开支」，优先优化后者",
              "将节省的资金自动转入储蓄或投资账户，实现开支优化的闭环",
            ],
            resources: [
              { title: "Investopedia: Cutting Expenses", url: "https://www.investopedia.com/articles/pf/08/cut-expenses.asp" },
              { title: "NerdWallet: Spending Tracker", url: "https://www.nerdwallet.com/article/finance/tracking-monthly-expenses" },
            ],
          },
        ],
      },
      {
        id: "fp-w3",
        title: "第 3 周：储蓄与信用管理",
        summary: "建立应急资金体系，理解信用评分与债务管理的基本原则。",
        overview: "储蓄是抵御风险的第一道防线，良好的信用记录则是获取低成本资金的基础。本周学习应急资金的建立策略和信用评分的维护方法。",
        keyPoints: [
          "应急资金应覆盖 3-6 个月的基本生活开支",
          "信用评分由还款历史、信用利用率、账龄等因素决定",
          "高息债务（信用卡）应优先偿还，雪球法和雪崩法各有优势",
        ],
        lessons: [
          {
            id: "fp-w3-1",
            title: "应急资金建立策略",
            detail: "确定应急资金的合理规模，制定分阶段积累计划，选择合适的存放工具。",
            keyPoints: [
              "应急资金目标：稳定收入者 3 个月、自由职业者 6 个月的基本开支",
              "分阶段建立：先存 1000 元启动，再逐月递增至目标金额",
              "存放于高息活期（如货币基金或高息储蓄账户），兼顾流动性与收益",
            ],
            resources: [
              { title: "Investopedia: Emergency Fund", url: "https://www.investopedia.com/terms/e/emergency_fund.asp" },
              { title: "NerdWallet: Emergency Fund", url: "https://www.nerdwallet.com/article/banking/emergency-fund-calculator" },
              { title: "Khan Academy: Saving Money", url: "https://www.khanacademy.org/college-careers-more/financial-literacy/xa6995ea67a8e9fdd:budgeting-and-saving" },
            ],
          },
          {
            id: "fp-w3-2",
            title: "信用评分与信用报告",
            detail: "理解信用评分的构成要素和影响因子，学会定期查阅和维护信用报告。",
            keyPoints: [
              "还款历史占信用评分最大权重（约 35%），按时还款是第一要务",
              "信用利用率建议保持在 30% 以下，越低越好",
              "定期查询信用报告，及时纠正错误信息和异常记录",
            ],
            resources: [
              { title: "Investopedia: Credit Score", url: "https://www.investopedia.com/terms/c/credit_score.asp" },
              { title: "SEC: Credit Reports", url: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/how-4" },
            ],
          },
          {
            id: "fp-w3-3",
            title: "债务管理与还款策略",
            detail: "对比雪球法与雪崩法的还款策略，制定个人债务清偿计划并避免债务陷阱。",
            keyPoints: [
              "雪崩法：优先偿还利率最高的债务，总利息支出最少",
              "雪球法：优先偿还余额最小的债务，心理激励效果更强",
              "避免最低还款陷阱，信用卡利息按全额计算而非剩余本金",
            ],
            resources: [
              { title: "Investopedia: Debt Avalanche", url: "https://www.investopedia.com/terms/d/debt-avalanche.asp" },
              { title: "Investopedia: Debt Snowball", url: "https://www.investopedia.com/terms/s/snowball.asp" },
              { title: "NerdWallet: Debt Payoff", url: "https://www.nerdwallet.com/article/finance/what-is-a-debt-management-plan" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "fp-s2",
    title: "阶段二：投资入门",
    duration: "第 4-6 周",
    goal: "理解投资基本概念，掌握股票、基金、债券等主要投资工具及资产配置原理。",
    weeks: [
      {
        id: "fp-w4",
        title: "第 4 周：投资基本概念",
        summary: "理解风险与收益的关系、复利的力量以及投资的基本原则。",
        overview: "投资是让钱为你工作的过程。本周学习风险与收益的权衡、复利的魔力以及投资者应遵循的核心原则，为后续具体品种的学习奠定理论基础。",
        keyPoints: [
          "风险与收益正相关：高收益必然伴随高风险，天下没有免费的午餐",
          "复利是投资中最强大的力量，时间是最重要的变量",
          "分散投资、长期持有、定期再平衡是普通投资者的最优策略",
        ],
        lessons: [
          {
            id: "fp-w4-1",
            title: "风险与收益的基本关系",
            detail: "掌握风险度量方法（标准差、Beta），理解风险溢价的概念和不同资产类别的风险特征。",
            keyPoints: [
              "标准差衡量收益波动性，Beta 衡量相对于市场的波动性",
              "风险溢价：投资者承担额外风险所要求的超额回报",
              "不同资产风险由低到高：货币基金 < 债券 < 股票 < 另类投资",
            ],
            resources: [
              { title: "Investopedia: Risk and Return", url: "https://www.investopedia.com/terms/r/riskreturntradeoff.asp" },
              { title: "Khan Academy: Risk and Reward", url: "https://www.khanacademy.org/economics-finance-domain/core-finance/stock-and-bonds" },
              { title: "Morningstar: Understanding Risk", url: "https://www.morningstar.com/investing-definitions/risk" },
            ],
          },
          {
            id: "fp-w4-2",
            title: "复利的力量与时间价值",
            detail: "理解货币的时间价值和复利增长的数学原理，掌握 72 法则和现值/终值计算。",
            keyPoints: [
              "72 法则：投资翻倍所需年数 ≈ 72 ÷ 年收益率（如 8% 收益约 9 年翻倍）",
              "每月定投比一次性投入更能降低市场波动的影响（定投摊平成本）",
              "越早开始投资，复利效应越显著——20 岁开始比 30 岁开始多出数十年复利",
            ],
            resources: [
              { title: "Investopedia: Compound Interest", url: "https://www.investopedia.com/terms/c/compoundinterest.asp" },
              { title: "SEC: Compound Interest Calculator", url: "https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator" },
            ],
          },
          {
            id: "fp-w4-3",
            title: "投资原则与常见误区",
            detail: "学习价值投资、指数投资等核心投资哲学，识别并避免追涨杀跌等常见误区。",
            keyPoints: [
              "不要试图择时（Market Timing），长期持有被证明优于频繁交易",
              "交易费用和税费会显著侵蚀长期收益，低成本指数基金是优选",
              "投资决策应基于目标和风险承受能力，而非市场情绪或热门推荐",
            ],
            resources: [
              { title: "Investopedia: Investment Principles", url: "https://www.investopedia.com/articles/basics/11/3-s-simple-investing.asp" },
              { title: "Morningstar: Common Mistakes", url: "https://www.morningstar.com/investing-definitions/behavioral-finance" },
              { title: "SEC: Investor Education", url: "https://www.investor.gov/introduction-investing" },
            ],
          },
        ],
      },
      {
        id: "fp-w5",
        title: "第 5 周：股票与基金基础",
        summary: "理解股票和基金的运作机制，学会选择适合自己的投资品种。",
        overview: "股票和基金是最常见的投资工具。本周学习股票估值基础、主动型基金与被动型指数基金的对比，以及 ETF 的优势与选择策略。",
        keyPoints: [
          "股票代表公司所有权的一部分，收益来自股价上涨和分红派息",
          "指数基金通过复制市场指数实现低成本广泛分散，长期表现优于多数主动基金",
          "ETF 兼具股票的流动性和基金的分散性，是普通投资者的理想工具",
        ],
        lessons: [
          {
            id: "fp-w5-1",
            title: "股票投资基础",
            detail: "理解股票市场的运作机制、基本面分析方法以及市盈率等常用估值指标。",
            keyPoints: [
              "市盈率（P/E）是最常用的估值指标：股价 ÷ 每股收益",
              "基本面分析关注公司财务报表：收入增长、利润率、负债率",
              "股息率（Dividend Yield）是衡量股息回报的关键指标",
            ],
            resources: [
              { title: "Investopedia: Stocks Basics", url: "https://www.investopedia.com/stocks-basics-702702" },
              { title: "Khan Academy: Stocks and Bonds", url: "https://www.khanacademy.org/economics-finance-domain/core-finance/stock-and-bonds" },
              { title: "Morningstar: Stock Research", url: "https://www.morningstar.com/stocks" },
            ],
          },
          {
            id: "fp-w5-2",
            title: "基金投资：主动 vs 被动",
            detail: "对比主动管理基金与被动指数基金的费率、业绩和适用场景，理解费率对长期收益的影响。",
            keyPoints: [
              "主动基金试图超越市场但费率高（1%-2%），长期跑赢指数的比例不到 20%",
              "指数基金费率极低（0.03%-0.2%），长期复利下费率差异可达数十万元",
              "核心-卫星策略：指数基金为核心（80%），少量主动基金或个股为卫星（20%）",
            ],
            resources: [
              { title: "Investopedia: Index Funds", url: "https://www.investopedia.com/terms/i/indexfund.asp" },
              { title: "Morningstar: Fund Comparison", url: "https://www.morningstar.com/funds" },
            ],
          },
          {
            id: "fp-w5-3",
            title: "ETF 投资指南",
            detail: "理解 ETF 的结构与交易机制，学习筛选 ETF 的关键指标和构建 ETF 组合的方法。",
            keyPoints: [
              "ETF 在交易所上市，可像股票一样实时买卖，流动性优于传统基金",
              "选择 ETF 的关键指标：跟踪误差、费率、规模和流动性",
              "宽基 ETF（如标普 500 ETF）是新手入门的首选投资品种",
            ],
            resources: [
              { title: "Investopedia: ETFs", url: "https://www.investopedia.com/terms/e/etf.asp" },
              { title: "Morningstar: ETF Screener", url: "https://www.morningstar.com/etfs" },
              { title: "SEC: Exchange-Traded Funds", url: "https://www.investor.gov/introduction-investing/investing-basics/investment-products/mutual-funds-and-exchange-traded-1" },
            ],
          },
        ],
      },
      {
        id: "fp-w6",
        title: "第 6 周：债券与资产配置",
        summary: "理解债券投资与资产配置的核心原理，构建分散化的投资组合。",
        overview: "债券是投资组合中的稳定器，资产配置则决定了投资回报的 90% 以上。本周学习债券基础知识和现代投资组合理论的实际应用。",
        keyPoints: [
          "债券价格与利率反向变动：利率上升时债券价格下跌",
          "资产配置是投资回报最重要的决定因素，远超个股选择",
          "股债比例应根据年龄、风险承受能力和投资期限动态调整",
        ],
        lessons: [
          {
            id: "fp-w6-1",
            title: "债券与固定收益投资",
            detail: "理解债券的基本要素（面值、票息、到期日），掌握久期和信用评级对债券价格的影响。",
            keyPoints: [
              "久期衡量债券价格对利率变化的敏感度，久期越长风险越大",
              "信用评级（AAA 到 D）反映发行人违约风险，评级越低收益率越高",
              "国债、企业债和市政债各有不同的风险收益特征和税收待遇",
            ],
            resources: [
              { title: "Investopedia: Bond Basics", url: "https://www.investopedia.com/terms/b/bond.asp" },
              { title: "Khan Academy: Bonds", url: "https://www.khanacademy.org/economics-finance-domain/core-finance/stock-and-bonds/bonds-tutorial/v/introduction-to-bonds" },
              { title: "SEC: Bonds", url: "https://www.investor.gov/introduction-investing/investing-basics/investment-products/bonds-or-fixed-income-products/bonds" },
            ],
          },
          {
            id: "fp-w6-2",
            title: "资产配置与分散投资",
            detail: "学习现代投资组合理论的核心思想，理解相关性、有效前沿和分散化降低风险的原理。",
            keyPoints: [
              "低相关性资产组合可以在不降低预期收益的前提下降低整体风险",
              "经典配置：年轻投资者股票 80%/债券 20%，随年龄增长逐步调整",
              "全球分散投资可以降低单一国家/市场的系统性风险",
            ],
            resources: [
              { title: "Investopedia: Asset Allocation", url: "https://www.investopedia.com/terms/a/assetallocation.asp" },
              { title: "Morningstar: Portfolio Construction", url: "https://www.morningstar.com/investing-definitions/asset-allocation" },
            ],
          },
          {
            id: "fp-w6-3",
            title: "投资组合再平衡",
            detail: "掌握投资组合再平衡的时机选择和操作方法，理解再平衡对长期收益的影响。",
            keyPoints: [
              "再平衡是将偏离目标配置的组合恢复到原始比例的过程",
              "常见策略：定期再平衡（每年/半年）或阈值再平衡（偏离 5% 时触发）",
              "再平衡本质是「卖高买低」，可以提升风险调整后的长期收益",
            ],
            resources: [
              { title: "Investopedia: Rebalancing", url: "https://www.investopedia.com/terms/r/rebalancing.asp" },
              { title: "Morningstar: Rebalancing Guide", url: "https://www.morningstar.com/personal-finance/how-to-rebalance-your-portfolio" },
              { title: "SEC: Investor Bulletin", url: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-5" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "fp-s3",
    title: "阶段三：进阶规划",
    duration: "第 7-9 周",
    goal: "掌握保险、税务、退休和房产领域的核心规划知识，构建全面的财务安全网。",
    weeks: [
      {
        id: "fp-w7",
        title: "第 7 周：保险规划",
        summary: "理解保险的本质与主要险种，学会为自己和家庭配置合理的保险方案。",
        overview: "保险是风险管理的核心工具，是财务规划中不可或缺的一环。本周学习寿险、医疗险和意外险的功能差异，建立「先保障后投资」的配置理念。",
        keyPoints: [
          "保险的本质是风险转移，用确定的小额支出对冲不确定的大额损失",
          "优先配置顺序：医疗险 > 意外险 > 寿险 > 重疾险",
          "保费支出建议控制在年收入的 5%-10%，避免过度保险",
        ],
        lessons: [
          {
            id: "fp-w7-1",
            title: "保险基础与寿险规划",
            detail: "理解保险的基本原理和寿险类型（定期寿险 vs 终身寿险），根据家庭责任配置保额。",
            keyPoints: [
              "定期寿险保费低保额高，适合收入替代和负债覆盖",
              "终身寿险兼具保障和储蓄功能，但费率远高于定期寿险",
              "寿险保额建议为年收入的 5-10 倍，覆盖贷款和家庭至少 5 年的开支",
            ],
            resources: [
              { title: "Investopedia: Life Insurance", url: "https://www.investopedia.com/terms/l/lifeinsurance.asp" },
              { title: "NerdWallet: Life Insurance Guide", url: "https://www.nerdwallet.com/article/insurance/life-insurance" },
              { title: "Insurance Information Institute", url: "https://www.iii.org/article/what-are-the-different-types-of-life-insurance" },
            ],
          },
          {
            id: "fp-w7-2",
            title: "医疗险与重疾险",
            detail: "对比基本医疗保险与商业医疗险的覆盖范围，理解重疾险的赔付机制和选购要点。",
            keyPoints: [
              "基本医疗保险覆盖范围有限，百万医疗险可补充大额医疗费用",
              "重疾险确诊即赔，弥补患病期间的收入损失和康复费用",
              "注意免赔额、等待期、既往症排除等关键条款",
            ],
            resources: [
              { title: "Investopedia: Health Insurance", url: "https://www.investopedia.com/terms/h/healthinsurance.asp" },
              { title: "Healthcare.gov: Coverage Basics", url: "https://www.healthcare.gov/coverage/what-marketplace-plans-cover/" },
            ],
          },
          {
            id: "fp-w7-3",
            title: "意外险与保险组合优化",
            detail: "理解意外险的保障范围和理赔条件，学会根据人生阶段调整保险组合。",
            keyPoints: [
              "意外险保费低廉，杠杆率高，建议人人配置",
              "单身阶段侧重自身保障，成家后需增加家庭责任覆盖",
              "定期检视保险组合，根据收入变化和人生事件及时调整",
            ],
            resources: [
              { title: "Investopedia: Accident Insurance", url: "https://www.investopedia.com/terms/a/accident-health-insurance.asp" },
              { title: "NerdWallet: Insurance Checklist", url: "https://www.nerdwallet.com/article/insurance/insurance-checklist" },
              { title: "III: Insurance Basics", url: "https://www.iii.org/insurance-basics" },
            ],
          },
        ],
      },
      {
        id: "fp-w8",
        title: "第 8 周：税务筹划基础",
        summary: "理解个人税务体系，学会合法合规地进行税务优化。",
        overview: "税务是影响实际投资收益的重要因素。本周学习个人所得税的计算逻辑、常见的合法节税策略以及投资收益的税务处理方法。",
        keyPoints: [
          "理解边际税率与有效税率的区别，避免「多赚多亏」的认知误区",
          "充分利用专项扣除和税优账户（如养老金、教育金账户）",
          "投资收益的税务处理：短期 vs 长期资本利得的税率差异",
        ],
        lessons: [
          {
            id: "fp-w8-1",
            title: "个人所得税基础",
            detail: "理解累进税率制度、应纳税所得额的计算方法和各类收入的税务处理。",
            keyPoints: [
              "累进税率意味着只有超出部分按更高税率征收，不会「越级全额」计税",
              "工资薪金、劳务报酬、经营所得等不同收入类型适用不同计税方式",
              "年度汇算清缴可能产生退税，不要遗忘申报",
            ],
            resources: [
              { title: "Investopedia: Income Tax", url: "https://www.investopedia.com/terms/i/incometax.asp" },
              { title: "Khan Academy: Taxes", url: "https://www.khanacademy.org/economics-finance-domain/core-finance/taxes-topic" },
              { title: "IRS: Understanding Taxes", url: "https://www.irs.gov/individuals" },
            ],
          },
          {
            id: "fp-w8-2",
            title: "合法节税策略",
            detail: "掌握专项附加扣除、税优账户和公益捐赠等主要节税工具的使用方法。",
            keyPoints: [
              "专项附加扣除：子女教育、继续教育、住房贷款利息、住房租金、赡养老人等",
              "税优账户（如 401k、IRA）中的投资可延税增长，大幅提升复利效果",
              "公益捐赠在限额内可抵扣应纳税所得额",
            ],
            resources: [
              { title: "Investopedia: Tax Deductions", url: "https://www.investopedia.com/terms/t/tax-deduction.asp" },
              { title: "IRS: Tax Credits and Deductions", url: "https://www.irs.gov/credits-and-deductions-for-individuals" },
            ],
          },
          {
            id: "fp-w8-3",
            title: "投资收益的税务处理",
            detail: "理解资本利得税、股息税和利息税的计算规则，学会在投资决策中考虑税务影响。",
            keyPoints: [
              "长期资本利得（持有超过 1 年）税率通常低于短期资本利得",
              "税收损失收割（Tax-Loss Harvesting）：卖出亏损投资抵消其他收益",
              "在税优账户中持有高税负资产（如债券），在普通账户中持有低税负资产（如长持股票）",
            ],
            resources: [
              { title: "Investopedia: Capital Gains Tax", url: "https://www.investopedia.com/terms/c/capital_gains_tax.asp" },
              { title: "Morningstar: Tax-Efficient Investing", url: "https://www.morningstar.com/personal-finance/tax-planning" },
              { title: "SEC: Investment Taxes", url: "https://www.investor.gov/introduction-investing/investing-basics/investment-products" },
            ],
          },
        ],
      },
      {
        id: "fp-w9",
        title: "第 9 周：退休规划与房产投资",
        summary: "制定退休储蓄计划，理解房产投资的财务逻辑与贷款策略。",
        overview: "退休规划和房产是人生最大的两笔财务决策。本周学习如何估算退休所需资金、选择合适的退休账户，以及购房的财务分析框架。",
        keyPoints: [
          "退休资金需求 = 年支出 × 25（基于 4% 安全提取率）",
          "房产投资需综合考虑首付、月供、维护成本和机会成本",
          "租房 vs 买房的决策取决于当地的租售比和个人流动性需求",
        ],
        lessons: [
          {
            id: "fp-w9-1",
            title: "退休规划与养老金",
            detail: "估算退休所需资金总额，了解社保养老金的替代率和商业养老保险的补充作用。",
            keyPoints: [
              "4% 法则：每年从退休组合中提取 4%，资金大概率可持续 30 年以上",
              "社保养老金替代率约 40%-60%，缺口需通过个人储蓄和投资弥补",
              "越早开始退休储蓄，每月所需金额越少——30 岁开始是最佳平衡点",
            ],
            resources: [
              { title: "Investopedia: Retirement Planning", url: "https://www.investopedia.com/terms/r/retirement-planning.asp" },
              { title: "NerdWallet: Retirement Calculator", url: "https://www.nerdwallet.com/investing/retirement-calculator" },
              { title: "Morningstar: Retirement", url: "https://www.morningstar.com/retirement" },
            ],
          },
          {
            id: "fp-w9-2",
            title: "房产投资财务分析",
            detail: "学习购房决策的财务分析框架，计算真实的持有成本和投资回报率。",
            keyPoints: [
              "购房真实成本 = 房贷利息 + 物业费 + 维修费 + 机会成本 + 交易税费",
              "租售比（年租金/房价）低于 3% 时租房可能更经济",
              "杠杆放大收益也放大风险：房价下跌 20% 对于 5 倍杠杆意味着本金归零",
            ],
            resources: [
              { title: "Investopedia: Real Estate Investing", url: "https://www.investopedia.com/terms/r/realestate.asp" },
              { title: "Khan Academy: Housing", url: "https://www.khanacademy.org/economics-finance-domain/core-finance/housing" },
            ],
          },
          {
            id: "fp-w9-3",
            title: "房贷策略与还款优化",
            detail: "对比等额本息与等额本金还款方式，学习提前还贷和再融资的决策框架。",
            keyPoints: [
              "等额本息月供固定适合收入稳定者，等额本金前期压力大但总利息少",
              "提前还贷适合贷款利率高于投资收益率的情况",
              "利率下行期可通过再融资（转贷）降低利息支出",
            ],
            resources: [
              { title: "Investopedia: Mortgage Basics", url: "https://www.investopedia.com/terms/m/mortgage.asp" },
              { title: "NerdWallet: Mortgage Calculator", url: "https://www.nerdwallet.com/mortgages/mortgage-calculator" },
              { title: "Khan Academy: Mortgages", url: "https://www.khanacademy.org/economics-finance-domain/core-finance/housing/mortgages-tutorial/v/introduction-to-mortgage-loans" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "fp-s4",
    title: "阶段四：高级财务管理",
    duration: "第 10-12 周",
    goal: "掌握家庭财务全景规划、财富传承、投资心理和创业财务管理的高级技能。",
    weeks: [
      {
        id: "fp-w10",
        title: "第 10 周：家庭财务规划",
        summary: "建立家庭财务全景视图，制定覆盖各人生阶段的综合财务方案。",
        overview: "家庭是财务规划的基本单元。本周学习如何整合夫妻双方的财务状况、规划子女教育基金和应对人生重大事件的财务准备。",
        keyPoints: [
          "家庭财务规划应覆盖收支管理、保险保障、投资增值和遗产传承四大维度",
          "子女教育基金建议从出生即开始定投，利用 18 年复利积累",
          "人生重大事件（结婚、生子、购房）需要提前至少 1-2 年的财务准备",
        ],
        lessons: [
          {
            id: "fp-w10-1",
            title: "家庭财务规划全景",
            detail: "整合家庭全部资产和负债，建立家庭财务仪表盘，制定家庭年度财务计划。",
            keyPoints: [
              "家庭财务仪表盘：月现金流、净资产趋势、保障覆盖率、投资组合表现",
              "夫妻双方应统一财务目标和风险偏好，建立联合账户和个人账户的合理分配",
              "每季度召开家庭财务会议，回顾目标进展并调整计划",
            ],
            resources: [
              { title: "Investopedia: Family Financial Planning", url: "https://www.investopedia.com/articles/pf/07/familybudget.asp" },
              { title: "NerdWallet: Family Budget", url: "https://www.nerdwallet.com/article/finance/how-to-budget" },
              { title: "Morningstar: Family Finance", url: "https://www.morningstar.com/personal-finance" },
            ],
          },
          {
            id: "fp-w10-2",
            title: "子女教育基金规划",
            detail: "估算子女教育总成本，设计教育基金的投资策略并选择合适的账户类型。",
            keyPoints: [
              "教育金规划越早越好，18 年每月定投 1000 元（年化 7%）约可积累 40 万元",
              "随入学日期临近，投资组合应从激进型逐步转向保守型",
              "529 计划等教育专用账户享受税收优惠，值得优先考虑",
            ],
            resources: [
              { title: "Investopedia: 529 Plans", url: "https://www.investopedia.com/terms/1/529-plan.asp" },
              { title: "SEC: Saving for Education", url: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/saving" },
            ],
          },
          {
            id: "fp-w10-3",
            title: "人生事件的财务准备",
            detail: "为结婚、生育、子女教育、父母养老等人生重大事件制定专项财务准备方案。",
            keyPoints: [
              "结婚基金：提前 1-2 年准备，包含婚礼费用和新家安置费用",
              "生育财务规划：产检、分娩费用 + 育儿第一年至少准备 3-5 万元",
              "父母养老规划：了解父母保险和退休金情况，评估潜在的经济支持需求",
            ],
            resources: [
              { title: "Investopedia: Financial Milestones", url: "https://www.investopedia.com/articles/personal-finance/100715/what-do-financial-milestones-your-20s.asp" },
              { title: "NerdWallet: Planning for Baby", url: "https://www.nerdwallet.com/article/finance/having-a-baby-financial-checklist" },
              { title: "Morningstar: Life Events", url: "https://www.morningstar.com/personal-finance" },
            ],
          },
        ],
      },
      {
        id: "fp-w11",
        title: "第 11 周：财富传承与投资心理",
        summary: "学习遗产规划基础和行为金融学，避免情绪化投资决策。",
        overview: "财富的积累终需合理传承，而投资中最大的敌人往往是自己的情绪。本周学习遗产规划的基本工具和行为金融学的核心发现。",
        keyPoints: [
          "遗产规划应尽早开始，核心工具包括遗嘱、信托和保险",
          "行为金融学揭示：损失厌恶、过度自信和从众效应是投资者最常见的心理偏差",
          "建立系统化的投资流程和规则可以有效对抗情绪化决策",
        ],
        lessons: [
          {
            id: "fp-w11-1",
            title: "遗产规划基础",
            detail: "了解遗嘱、信托和保险在财富传承中的作用，掌握基本的遗产规划框架。",
            keyPoints: [
              "遗嘱是遗产分配的法律基础，无遗嘱将按法定继承顺序分配",
              "信托可以实现定向传承、资产保护和税务优化等多重目标",
              "人寿保险赔付通常不计入遗产税基数，是高效的传承工具",
            ],
            resources: [
              { title: "Investopedia: Estate Planning", url: "https://www.investopedia.com/terms/e/estateplanning.asp" },
              { title: "NerdWallet: Estate Planning", url: "https://www.nerdwallet.com/article/investing/estate-planning-basics" },
              { title: "SEC: Inheritance", url: "https://www.investor.gov/additional-resources/general-resources/glossary/estate-planning" },
            ],
          },
          {
            id: "fp-w11-2",
            title: "行为金融与投资心理",
            detail: "识别投资中的常见心理偏差，建立纪律化的投资决策流程来对抗情绪干扰。",
            keyPoints: [
              "损失厌恶：同等金额的损失带来的痛苦约是同等收益快乐的 2 倍",
              "过度自信偏差：大多数投资者高估自己的选股和择时能力",
              "锚定效应和确认偏差让投资者执着于买入价格和利好消息",
            ],
            resources: [
              { title: "Investopedia: Behavioral Finance", url: "https://www.investopedia.com/terms/b/behavioralfinance.asp" },
              { title: "Morningstar: Investor Behavior", url: "https://www.morningstar.com/investing-definitions/behavioral-finance" },
            ],
          },
          {
            id: "fp-w11-3",
            title: "投资纪律与情绪管理",
            detail: "制定个人投资政策声明（IPS），建立系统化投资流程防止情绪化操作。",
            keyPoints: [
              "投资政策声明（IPS）明确投资目标、风险承受力、资产配置和再平衡规则",
              "设定自动化定投和止损规则，减少人为决策的次数和情绪影响",
              "保持投资日志记录每次买卖决策的理由，定期复盘提升投资纪律",
            ],
            resources: [
              { title: "Investopedia: Investment Policy Statement", url: "https://www.investopedia.com/terms/i/ips.asp" },
              { title: "Morningstar: Staying Disciplined", url: "https://www.morningstar.com/personal-finance" },
              { title: "SEC: Smart Investing", url: "https://www.investor.gov/introduction-investing/getting-started/investing-smartly" },
            ],
          },
        ],
      },
      {
        id: "fp-w12",
        title: "第 12 周：创业与副业的财务管理",
        summary: "掌握创业和副业收入的财务管理方法，建立个人财务管理的终身框架。",
        overview: "越来越多的人拥有多元收入来源。本周学习创业和副业的财务管理要点，以及如何建立可持续终身的个人财务管理体系。",
        keyPoints: [
          "创业和副业收入应与个人财务严格分离，使用独立账户管理",
          "自由职业者需自行预留税款和社保缴纳，避免年终税务意外",
          "定期审视财务规划全景，将理财变成终身习惯而非短期项目",
        ],
        lessons: [
          {
            id: "fp-w12-1",
            title: "创业财务管理基础",
            detail: "学习创业初期的财务规划要点，包括启动资金估算、现金流管理和融资策略选择。",
            keyPoints: [
              "创业前至少准备 6-12 个月个人生活费用的安全垫",
              "现金流是创业生死线：收入确认和支出控制比利润更重要",
              "融资选择：自有资金 > 家人朋友 > 天使投资 > 银行贷款，各有利弊",
            ],
            resources: [
              { title: "Investopedia: Starting a Business", url: "https://www.investopedia.com/articles/pf/08/make-money-in-business.asp" },
              { title: "SBA: Finance Your Business", url: "https://www.sba.gov/business-guide/plan-your-business/fund-your-business" },
              { title: "NerdWallet: Small Business Finance", url: "https://www.nerdwallet.com/article/small-business/small-business-finance" },
            ],
          },
          {
            id: "fp-w12-2",
            title: "副业收入管理与税务",
            detail: "掌握副业收入的记账方法、税务申报要求和合法节税策略。",
            keyPoints: [
              "副业收入无论多少都应如实申报，避免税务风险",
              "合理列支业务费用（设备、办公、交通）可以降低应税所得",
              "副业收入达到一定规模时，考虑注册个体工商户或公司以获取更优税率",
            ],
            resources: [
              { title: "Investopedia: Side Hustle Taxes", url: "https://www.investopedia.com/articles/personal-finance/090415/7-best-tips-managing-side-income.asp" },
              { title: "IRS: Self-Employment Tax", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employment-tax-social-security-and-medicare-taxes" },
            ],
          },
          {
            id: "fp-w12-3",
            title: "终身财务管理框架",
            detail: "建立个人财务管理的终身框架和年度检视流程，实现财务管理的持续优化。",
            keyPoints: [
              "年度财务检视清单：净资产变化、投资组合表现、保险覆盖率、遗产规划更新",
              "每个人生阶段的财务重心不同：积累期 → 增长期 → 保全期 → 传承期",
              "持续学习和适应变化是终身财务管理的核心——市场、政策和个人情况都在变",
            ],
            resources: [
              { title: "Investopedia: Financial Planning", url: "https://www.investopedia.com/terms/f/financial_plan.asp" },
              { title: "Morningstar: Year-End Checklist", url: "https://www.morningstar.com/personal-finance" },
              { title: "SEC: Financial Planning Tips", url: "https://www.investor.gov/introduction-investing/getting-started" },
            ],
          },
        ],
      },
    ],
  },
]

export const financialPlanningKnowledgeCards: KnowledgeCard[] = [
  {
    id: "fp-card-budgeting",
    title: "预算管理核心",
    summary: "预算是理财的基石，帮助你掌控每一分钱的去向。",
    points: [
      "50/30/20 规则：50% 必需开支、30% 弹性消费、20% 储蓄与投资。",
      "自动化是坚持预算的关键：工资到账后自动转储蓄和投资。",
      "月度开支审计发现隐性消费，持续优化支出结构。",
    ],
    practice: "用 50/30/20 规则制定本月预算，追踪两周实际支出并与预算对比分析偏差。",
  },
  {
    id: "fp-card-compound",
    title: "复利的力量",
    summary: "复利是投资中最强大的力量，时间是它最好的朋友。",
    points: [
      "72 法则：投资翻倍年数 ≈ 72 ÷ 年化收益率。",
      "每月定投 1000 元，年化 8%，30 年后约 150 万元。",
      "费率差异在长期复利下被急剧放大，选择低费率产品至关重要。",
    ],
    practice: "用复利计算器模拟不同起始金额、收益率和时间的投资终值，体会时间和费率的巨大影响。",
  },
  {
    id: "fp-card-allocation",
    title: "资产配置原理",
    summary: "资产配置决定了投资回报的 90% 以上，远超个股选择。",
    points: [
      "低相关性资产组合可以在不降低收益的前提下降低整体风险。",
      "经典股债配比：100 - 年龄 = 股票比例（如 30 岁配 70% 股票 + 30% 债券）。",
      "定期再平衡本质是「卖高买低」，提升风险调整后的长期收益。",
    ],
    practice: "根据自己的年龄和风险偏好设计一个包含 3-5 种资产类别的投资组合，计算预期收益和波动率。",
  },
  {
    id: "fp-card-insurance",
    title: "保险配置策略",
    summary: "保险是风险管理的核心，用确定的小额支出对冲不确定的大额损失。",
    points: [
      "优先配置顺序：医疗险 > 意外险 > 寿险 > 重疾险。",
      "保费支出控制在年收入的 5%-10%，避免过度保险影响投资。",
      "定期寿险性价比远高于终身寿险，保额建议为年收入的 5-10 倍。",
    ],
    practice: "盘点自己和家庭的现有保障，对照优先级评估是否存在保障缺口，制定补充方案。",
  },
  {
    id: "fp-card-tax",
    title: "税务筹划要点",
    summary: "合法节税是理财不可忽视的一环，直接影响实际投资收益。",
    points: [
      "边际税率 ≠ 有效税率：只有超出部分按更高档次征收。",
      "充分利用专项扣除和税优账户（401k/IRA），延税增长大幅提升复利效果。",
      "税收损失收割可用投资亏损抵消其他资本利得，降低当年税负。",
    ],
    practice: "计算自己的有效税率，列出所有可享受的扣除和优惠，估算每年可节省的税额。",
  },
  {
    id: "fp-card-retirement",
    title: "退休规划框架",
    summary: "退休规划的核心是确保被动收入覆盖退休后的生活支出。",
    points: [
      "4% 法则：退休所需资金 = 年支出 × 25。",
      "社保替代率约 40%-60%，缺口需靠个人储蓄和投资弥补。",
      "越早开始退休储蓄，每月所需金额越少——时间是最大的杠杆。",
    ],
    practice: "估算自己退休后的年支出，用 4% 法则计算目标金额，再倒推每月需定投的数额。",
  },
  {
    id: "fp-card-behavioral",
    title: "投资心理偏差",
    summary: "认识并克服心理偏差是成为成熟投资者的关键一步。",
    points: [
      "损失厌恶：等额损失的痛苦约为等额收益快乐的 2 倍，导致过早止盈过晚止损。",
      "过度自信：大多数人高估自己的选股能力，频繁交易反而降低收益。",
      "从众效应：追涨杀跌是投资者亏损的最常见原因。",
    ],
    practice: "回顾过去一年的投资决策，标记每次买卖背后是理性分析还是情绪驱动，统计胜率差异。",
  },
  {
    id: "fp-card-estate",
    title: "财富传承规划",
    summary: "财富传承需要提前规划，核心工具包括遗嘱、信托和保险。",
    points: [
      "遗嘱是遗产分配的法律基础，无遗嘱将按法定继承顺序分配。",
      "信托可实现定向传承、资产保护和税务优化等多重目标。",
      "人寿保险赔付通常不计入遗产税基数，是高效的传承工具。",
    ],
    practice: "列出自己所有资产和受益人，草拟一份简单的遗产分配方案并咨询专业人士。",
  },
]

export const financialPlanningExamQuestions: QuizQuestion[] = [
  { id: "fp-q1", question: "50/30/20 预算规则中，20% 应分配给？", options: ["餐饮消费", "娱乐活动", "储蓄与投资", "交通出行"], answer: 2, rationale: "50/30/20 规则中 50% 用于必需开支，30% 用于弹性消费，20% 用于储蓄和投资。" },
  { id: "fp-q2", question: "应急资金建议覆盖多少个月的生活开支？", options: ["1 个月", "3-6 个月", "12 个月", "24 个月"], answer: 1, rationale: "一般建议应急资金覆盖 3-6 个月的基本生活开支，自由职业者建议取上限。" },
  { id: "fp-q3", question: "72 法则用于估算什么？", options: ["退休年龄", "投资翻倍所需年数", "通货膨胀率", "税率计算"], answer: 1, rationale: "72 法则：投资翻倍所需年数 ≈ 72 ÷ 年化收益率，例如 8% 收益率约 9 年翻倍。" },
  { id: "fp-q4", question: "信用评分中权重最大的因素是？", options: ["账户数量", "信用利用率", "还款历史", "新开账户"], answer: 2, rationale: "还款历史占信用评分约 35% 的权重，是影响信用评分最重要的单一因素。" },
  { id: "fp-q5", question: "雪崩法还款策略的核心原则是？", options: ["优先还余额最小的债务", "优先还利率最高的债务", "平均分配还款金额", "只还最低还款额"], answer: 1, rationale: "雪崩法优先偿还利率最高的债务，虽然心理激励不如雪球法，但总利息支出最少。" },
  { id: "fp-q6", question: "利率上升时，债券价格会？", options: ["上涨", "下跌", "不变", "取决于发行人"], answer: 1, rationale: "债券价格与利率反向变动。利率上升时，新债券提供更高票息，旧债券相对贬值。" },
  { id: "fp-q7", question: "指数基金长期表现优于多数主动基金的主要原因是？", options: ["指数基金风险更高", "主动基金的高费率侵蚀了收益", "指数基金持有更多股票", "政府对指数基金有补贴"], answer: 1, rationale: "主动基金 1%-2% 的年费率在长期复利下显著侵蚀收益，使得多数主动基金长期跑输低费率的指数基金。" },
  { id: "fp-q8", question: "ETF 相比传统开放式基金的主要优势是？", options: ["费率更高", "可在交易所实时买卖，流动性更强", "收益保证更高", "不受市场波动影响"], answer: 1, rationale: "ETF 在交易所上市交易，可像股票一样实时买卖，流动性优于需要在收盘后按净值申赎的传统基金。" },
  { id: "fp-q9", question: "资产配置中，低相关性资产组合的好处是？", options: ["提高最大收益", "在不降低预期收益的前提下降低整体风险", "消除所有风险", "提高交易频率"], answer: 1, rationale: "现代投资组合理论证明，低相关性资产组合可以在维持预期收益的同时降低整体波动风险。" },
  { id: "fp-q10", question: "4% 法则用于估算什么？", options: ["每年投资收益率", "退休所需资金总额", "保险保费比例", "税率计算方法"], answer: 1, rationale: "4% 法则表示每年从退休组合中提取 4%，资金大概率可持续 30 年以上。因此退休所需资金 = 年支出 × 25。" },
  { id: "fp-q11", question: "保险配置的优先顺序应该是？", options: ["寿险 > 理财险 > 意外险 > 医疗险", "医疗险 > 意外险 > 寿险 > 重疾险", "重疾险 > 寿险 > 医疗险 > 意外险", "理财险 > 重疾险 > 寿险 > 意外险"], answer: 1, rationale: "优先配置保障型保险：医疗险覆盖大额医疗支出，意外险杠杆最高，寿险覆盖家庭责任，重疾险补充收入损失。" },
  { id: "fp-q12", question: "定期寿险相比终身寿险的主要优势是？", options: ["保障终身", "保费低保额高，性价比更优", "具有现金价值", "可以分红"], answer: 1, rationale: "定期寿险在保障期限内保费远低于终身寿险，能以更低成本获得更高保额，适合收入替代和负债覆盖。" },
  { id: "fp-q13", question: "边际税率和有效税率的区别是？", options: ["完全相同", "边际税率是最后一元收入的税率，有效税率是总税额与总收入的比率", "有效税率总是更高", "边际税率只适用于企业"], answer: 1, rationale: "边际税率是对最后一元收入征收的税率，有效税率是实际缴纳总税额占总收入的百分比，有效税率通常低于边际税率。" },
  { id: "fp-q14", question: "税收损失收割（Tax-Loss Harvesting）的作用是？", options: ["增加投资收益", "卖出亏损投资以抵消其他资本利得，降低税负", "获得政府补贴", "提高信用评分"], answer: 1, rationale: "税收损失收割是指卖出已亏损的投资来抵消其他已实现的资本利得，从而降低当年应缴的资本利得税。" },
  { id: "fp-q15", question: "购房时，租售比低于多少时租房可能更经济？", options: ["1%", "3%", "5%", "10%"], answer: 1, rationale: "当年租金/房价比（租售比）低于 3% 时，意味着购房的投资回报率较低，租房可能在经济上更划算。" },
  { id: "fp-q16", question: "等额本息与等额本金相比？", options: ["等额本息总利息更少", "等额本金月供固定", "等额本金前期月供高但总利息少", "两者总利息完全相同"], answer: 2, rationale: "等额本金每月偿还固定本金加递减利息，前期月供较高但总利息支出少于等额本息。" },
  { id: "fp-q17", question: "行为金融学中，损失厌恶是指？", options: ["人们喜欢冒险", "同等金额的损失带来的痛苦约为同等收益快乐的 2 倍", "人们只关注收益", "投资者总是理性的"], answer: 1, rationale: "损失厌恶是行为金融学的核心发现之一，人们对损失的敏感度约为收益的 2 倍，导致过早止盈和过晚止损。" },
  { id: "fp-q18", question: "投资政策声明（IPS）的核心内容是？", options: ["股票推荐清单", "明确投资目标、风险承受力、资产配置和再平衡规则", "预测市场走势", "记录每日股价"], answer: 1, rationale: "IPS 是投资者的个人投资宪章，明确投资目标、风险偏好、资产配置比例和再平衡触发条件，防止情绪化决策。" },
  { id: "fp-q19", question: "创业前建议准备多少个月的个人生活费用？", options: ["1-2 个月", "3 个月", "6-12 个月", "不需要准备"], answer: 2, rationale: "创业初期可能没有稳定收入，建议至少准备 6-12 个月个人生活费用作为安全垫，避免财务压力影响创业决策。" },
  { id: "fp-q20", question: "信托在财富传承中的主要优势是？", options: ["费率最低", "可实现定向传承、资产保护和税务优化", "操作最简单", "不需要法律文件"], answer: 1, rationale: "信托可以根据设立人意愿实现定向传承、保护资产不被债务追索，并在部分地区享受税务优惠，是高净值人群常用的传承工具。" },
]

export const financialPlanningRoadmap: RoadmapDefinition = {
  id: "financial-planning" as RoadmapDefinition["id"],
  label: "理财规划",
  title: "理财规划学习路线",
  durationLabel: "12 周·36 课时",
  description: "从理财基础到高级财务管理，系统掌握记账预算、投资工具、保险税务、退休规划和财富传承，构建终身受用的个人财务管理体系。",
  heroBadge: "12 周·36 课时",
  stages: financialPlanningStages,
  knowledgeCards: financialPlanningKnowledgeCards,
  examQuestions: financialPlanningExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "开始理财之旅，先建立正确的财务思维和金钱观。"
    if (percent < 25) return "继续学习记账预算和储蓄策略，打好理财基础。"
    if (percent < 50) return "深入投资基础知识，掌握股票、基金、债券和资产配置。"
    if (percent < 75) return "学习保险、税务和退休规划，构建全面的财务安全网。"
    if (percent < 100) return "完善家庭财务规划、财富传承和投资心理管理。"
    return "恭喜完成！你已掌握全面的理财规划技能，持续实践优化个人财务！"
  },
  resourceGuide: {
    environment: "准备一个电子表格（Excel/Google Sheets）用于记账和财务分析，注册一个模拟投资账户进行实操练习。",
    fallbackKeyPoints: [
      "预算管理是理财的地基，50/30/20 规则简单有效",
      "复利是最强大的投资力量，越早开始越好",
      "资产配置决定投资回报的 90% 以上，远超个股选择",
      "保险是风险管理的核心，先保障后投资",
      "克服心理偏差、建立投资纪律是长期成功的关键",
    ],
    handsOnSteps: [
      "用电子表格制定个人月度预算并追踪两周实际支出",
      "计算个人净资产并设定短期、中期和长期财务目标",
      "用复利计算器模拟不同情景下的投资终值",
      "设计一个包含 3-5 种资产类别的投资组合方案",
      "盘点现有保险保障，评估是否存在保障缺口",
    ],
    selfChecks: [
      "能否清晰地列出自己的资产、负债和净资产？",
      "是否理解复利和 72 法则的实际应用？",
      "能否解释指数基金为何长期优于多数主动基金？",
      "是否了解自己的保险保障覆盖情况和缺口？",
      "能否识别自己投资中的心理偏差并制定应对策略？",
    ],
    extensions: [
      "阅读《聪明的投资者》深入理解价值投资理念",
      "学习 Python 或 Excel VBA 构建个人财务分析模型",
      "考取 AFP/CFP 等理财规划师认证提升专业能力",
      "加入投资社区交流实践经验，但独立思考做决策",
    ],
    lessonQuizAdvice: "每周完成理论学习后做测验，重点理解财务决策背后的逻辑和权衡，而非死记硬背公式。",
  },
}
