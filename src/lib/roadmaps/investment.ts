import type { Stage, KnowledgeCard, QuizQuestion, RoadmapDefinition } from "../types"

export const investmentStages: Stage[] = [
  // ═══════════════════════════════════════════════════════════════
  // 阶段一：个人财务基础（第 1-3 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "inv-personal-finance",
    title: "阶段一：个人财务基础",
    duration: "第 1-3 周",
    goal: "建立健康的财务习惯，为投资打下坚实基础。",
    weeks: [
      {
        id: "inv-w1",
        title: "第 1 周：财务规划入门",
        summary: "学习预算管理和财务目标设定的基本方法。",
        overview: "本周从个人财务评估开始，帮助你全面了解自己的收支和资产负债状况，再学习多种预算编制方法，最后设定清晰可行的短中长期财务目标。",
        keyPoints: [
          "预算是财务管理的基础工具。",
          "了解自己的收支情况是第一步。",
          "设定 SMART 财务目标指引方向。",
        ],
        lessons: [
          {
            id: "inv-w1-1",
            title: "个人财务评估",
            detail: "了解自己的财务现状，包括收入、支出、资产和负债。",
            keyPoints: [
              "净资产 = 资产 - 负债，是衡量财务健康的关键指标。",
              "现金流 = 收入 - 支出，正现金流是积累财富的基础。",
              "定期审视财务状况，至少每季度一次。",
              "使用财务跟踪工具记录每笔收支。",
            ],
            resources: [
              { title: "Personal Finance 101 - Investopedia", url: "https://www.investopedia.com/personal-finance-4427760" },
              { title: "Net Worth Calculator - NerdWallet", url: "https://www.nerdwallet.com/article/finance/net-worth-calculator" },
              { title: "Consumer Financial Protection Bureau", url: "https://www.consumerfinance.gov/consumer-tools/money-as-you-grow/" },
            ],
          },
          {
            id: "inv-w1-2",
            title: "预算编制方法",
            detail: "学习 50/30/20 法则、零基预算和信封法等不同的预算编制方法，根据自身收入和消费习惯找到最适合的方式。",
            keyPoints: [
              "50/30/20 法则：50% 必需支出、30% 个人消费、20% 储蓄。",
              "零基预算：每一分钱都要有去处。",
              "信封法：将现金分配到不同用途的信封中。",
              "选择适合自己生活方式的预算方法。",
            ],
            resources: [
              { title: "50/30/20 Budget Rule - NerdWallet", url: "https://www.nerdwallet.com/article/finance/nerdwallet-budget-calculator" },
              { title: "Zero-Based Budgeting - Ramsey", url: "https://www.ramseysolutions.com/budgeting/how-to-make-a-zero-based-budget" },
              { title: "Budgeting Guide - CFPB", url: "https://www.consumerfinance.gov/consumer-tools/spending-tracker/" },
            ],
          },
          {
            id: "inv-w1-3",
            title: "财务目标设定",
            detail: "运用 SMART 原则设定短期、中期和长期财务目标，明确时间节点与金额，为投资规划提供清晰方向。",
            keyPoints: [
              "SMART 目标：具体、可衡量、可实现、相关、有时限。",
              "短期目标：1 年内，如建立应急基金。",
              "中期目标：1-5 年，如购房首付。",
              "长期目标：5 年以上，如退休储蓄。",
            ],
            resources: [
              { title: "Financial Goal Setting - Vanguard", url: "https://investor.vanguard.com/investor-resources-education/education/set-financial-goals" },
              { title: "SMART Goals - MindTools", url: "https://www.mindtools.com/a4wo118/smart-goals" },
              { title: "Financial Planning Guide - Fidelity", url: "https://www.fidelity.com/viewpoints/personal-finance/financial-planning-checklist" },
            ],
          },
        ],
      },
      {
        id: "inv-w2",
        title: "第 2 周：应急基金与债务管理",
        summary: "建立财务安全网，制定债务偿还策略。",
        overview: "本周聚焦财务安全基础：学习建立充足的应急基金以应对突发状况，掌握雪球法和雪崩法等债务偿还策略，并了解信用评分对长期借贷成本的影响。",
        keyPoints: [
          "应急基金是抵御财务风险的第一道防线。",
          "高息债务是财富积累的最大敌人。",
          "良好的信用记录影响长期财务成本。",
        ],
        lessons: [
          {
            id: "inv-w2-1",
            title: "建立应急基金",
            detail: "了解应急基金在财务安全中的关键作用，学习确定目标金额、选择存放工具和建立自动储蓄计划的方法。",
            keyPoints: [
              "目标金额：3-6 个月的生活必需支出。",
              "存放位置：高收益储蓄账户或货币市场基金。",
              "自动储蓄：设置每月自动转账。",
              "只用于真正的紧急情况：失业、医疗、重大维修。",
            ],
            resources: [
              { title: "Emergency Fund Guide - CFPB", url: "https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/" },
              { title: "Emergency Fund - Vanguard", url: "https://investor.vanguard.com/investor-resources-education/emergency-fund" },
              { title: "Emergency Savings - Ramsey", url: "https://www.ramseysolutions.com/saving/quick-guide-to-your-emergency-fund" },
            ],
          },
          {
            id: "inv-w2-2",
            title: "债务偿还策略",
            detail: "学习雪球法和雪崩法等有效的债务偿还策略，制定优先还款计划，加速摆脱高利率负债。",
            keyPoints: [
              "雪球法：先还最小额债务，建立信心。",
              "雪崩法：先还最高利率债务，节省利息。",
              "债务合并：将多笔债务合并为一笔低息贷款。",
              "避免新增消费债务，区分好债与坏债。",
            ],
            resources: [
              { title: "Debt Snowball vs Avalanche - NerdWallet", url: "https://www.nerdwallet.com/article/finance/what-is-a-debt-avalanche" },
              { title: "Debt Payoff Strategies - Investopedia", url: "https://www.investopedia.com/articles/personal-finance/080716/debt-avalanche-vs-debt-snowball-which-best-you.asp" },
              { title: "Debt Management - CFPB", url: "https://www.consumerfinance.gov/consumer-tools/debt-collection/" },
            ],
          },
          {
            id: "inv-w2-3",
            title: "信用管理",
            detail: "了解信用评分的计算因素和信用记录对贷款利率、租房审批等方面的重要影响，掌握提升信用分数的方法。",
            keyPoints: [
              "信用评分因素：还款历史、信用使用率、账龄、信用类型。",
              "保持信用使用率低于 30%。",
              "按时还款是最重要的信用建设行为。",
              "定期检查信用报告，及时发现错误。",
            ],
            resources: [
              { title: "Credit Score Basics - Experian", url: "https://www.experian.com/blogs/ask-experian/credit-education/score-basics/" },
              { title: "Free Credit Report - AnnualCreditReport", url: "https://www.annualcreditreport.com/" },
              { title: "Credit Building Tips - CFPB", url: "https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/" },
            ],
          },
        ],
      },
      {
        id: "inv-w3",
        title: "第 3 周：保险与风险保障",
        summary: "了解保险在财务规划中的作用。",
        overview: "本周学习保险的基本原理和风险转移机制，了解人寿险、健康险等人身保障类保险的选择方法，以及房屋保险、车险等财产保险的配置要点。",
        keyPoints: [
          "保险是风险转移的重要工具。",
          "只购买真正需要的保险。",
          "保险是保障而非投资。",
        ],
        lessons: [
          {
            id: "inv-w3-1",
            title: "保险基础知识",
            detail: "了解保险的风险转移原理，区分人寿、健康、财产和责任等主要保险类型及其适用场景。",
            keyPoints: [
              "保险原理：用确定的小额保费转移不确定的大额损失。",
              "保险类型：人寿、健康、财产、责任。",
              "免赔额与保费的权衡：高免赔额降低保费。",
              "避免过度保险和保障缺口。",
            ],
            resources: [
              { title: "Insurance Basics - Investopedia", url: "https://www.investopedia.com/insurance-4427716" },
              { title: "Types of Insurance - NerdWallet", url: "https://www.nerdwallet.com/article/insurance/types-of-insurance" },
              { title: "Insurance Guide - NAIC", url: "https://content.naic.org/consumer" },
            ],
          },
          {
            id: "inv-w3-2",
            title: "人寿与健康保险",
            detail: "了解定期寿险与终身寿险的区别，掌握保额计算方法和健康险的选择要点，构建完善的人身保障体系。",
            keyPoints: [
              "定期寿险 vs 终身寿险：根据需求选择。",
              "寿险保额：一般为年收入的 10-15 倍。",
              "健康保险：了解自付额、共付额、网络限制。",
              "重疾险与医疗险的区别和搭配。",
            ],
            resources: [
              { title: "Life Insurance Guide - Investopedia", url: "https://www.investopedia.com/terms/l/lifeinsurance.asp" },
              { title: "Health Insurance Basics - Healthcare.gov", url: "https://www.healthcare.gov/glossary/" },
              { title: "Life Insurance Calculator - NerdWallet", url: "https://www.nerdwallet.com/article/insurance/how-much-life-insurance-do-i-need" },
            ],
          },
          {
            id: "inv-w3-3",
            title: "财产与责任保险",
            detail: "学习配置房屋保险、车险和责任险等财产类保险，有效保护个人资产免受自然灾害和意外事故的损失。",
            keyPoints: [
              "房屋保险：保护房产和个人财物。",
              "车险：责任险是必需，全险视车龄而定。",
              "伞形保险：额外的责任保障。",
              "租房者保险：保护个人财物。",
            ],
            resources: [
              { title: "Homeowners Insurance - Investopedia", url: "https://www.investopedia.com/terms/h/homeowners-insurance.asp" },
              { title: "Auto Insurance Guide - NerdWallet", url: "https://www.nerdwallet.com/article/insurance/car-insurance" },
              { title: "Umbrella Insurance - Investopedia", url: "https://www.investopedia.com/terms/u/umbrella-insurance-policy.asp" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段二：投资基础知识（第 4-6 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "inv-fundamentals",
    title: "阶段二：投资基础知识",
    duration: "第 4-6 周",
    goal: "理解投资的核心概念和基本原理。",
    weeks: [
      {
        id: "inv-w4",
        title: "第 4 周：投资入门",
        summary: "了解投资的本质和基本原理。",
        overview: "本周正式进入投资领域：理解投资与投机、储蓄的区别，掌握货币时间价值的核心概念，并深入学习复利效应如何驱动长期财富积累。",
        keyPoints: [
          "投资是用当前资源换取未来更大回报。",
          "复利是财富增长的核心引擎。",
          "时间是投资者最大的盟友。",
        ],
        lessons: [
          {
            id: "inv-w4-1",
            title: "什么是投资",
            detail: "理解投资与投机、储蓄的本质区别，掌握股票、债券、基金等基本投资类型的定义与核心特征。",
            keyPoints: [
              "投资 vs 投机：长期价值创造 vs 短期价格波动。",
              "投资 vs 储蓄：承担风险换取更高回报。",
              "投资目的：财富增值、抵御通胀、实现财务目标。",
              "常见误区：追求快速致富、跟风投资。",
            ],
            resources: [
              { title: "Investing Basics - Investopedia", url: "https://www.investopedia.com/terms/i/investing.asp" },
              { title: "Investing 101 - SEC", url: "https://www.investor.gov/introduction-investing" },
              { title: "Beginner's Guide - Vanguard", url: "https://investor.vanguard.com/investor-resources-education/understanding-investment-types" },
            ],
          },
          {
            id: "inv-w4-2",
            title: "货币时间价值",
            detail: "理解货币时间价值的核心概念：今天的一元钱因为投资机会和通胀因素，其实际购买力远高于未来的一元钱。",
            keyPoints: [
              "现值（PV）：未来现金流的当前价值。",
              "终值（FV）：当前投资的未来价值。",
              "折现率：将未来价值转换为现值的利率。",
              "应用：贷款、投资决策、退休规划。",
            ],
            resources: [
              { title: "Time Value of Money - Investopedia", url: "https://www.investopedia.com/terms/t/timevalueofmoney.asp" },
              { title: "Present Value Calculator", url: "https://www.calculator.net/present-value-calculator.html" },
              { title: "TVM Explained - Corporate Finance Institute", url: "https://corporatefinanceinstitute.com/resources/valuation/time-value-of-money/" },
            ],
          },
          {
            id: "inv-w4-3",
            title: "复利的力量",
            detail: "深入理解复利的数学公式和 72 法则，掌握复利如何通过时间的力量指数级地推动长期财富增长。",
            keyPoints: [
              "复利公式：FV = PV × (1 + r)^n",
              "72 法则：72 ÷ 年化收益率 = 资产翻倍所需年数。",
              "开始越早，复利效应越强大。",
              "定期投资 + 复利 = 长期财富积累的秘诀。",
            ],
            resources: [
              { title: "Compound Interest - Investopedia", url: "https://www.investopedia.com/terms/c/compoundinterest.asp" },
              { title: "Compound Interest Calculator - SEC", url: "https://www.investor.gov/financial-tools-calculators/calculators/compound-interest-calculator" },
              { title: "Rule of 72 - Investopedia", url: "https://www.investopedia.com/terms/r/ruleof72.asp" },
            ],
          },
        ],
      },
      {
        id: "inv-w5",
        title: "第 5 周：风险与收益",
        summary: "理解投资风险的类型和风险收益权衡。",
        overview: "本周深入探讨投资风险的本质：学习系统性风险与非系统性风险的分类，评估个人风险承受能力，掌握标准差、Beta 等风险度量工具和风险收益权衡方法。",
        keyPoints: [
          "风险与收益正相关是投资的基本定律。",
          "了解自己的风险承受能力至关重要。",
          "分散投资是降低风险的主要手段。",
        ],
        lessons: [
          {
            id: "inv-w5-1",
            title: "投资风险类型",
            detail: "了解市场风险、利率风险、通胀风险和流动性风险等影响投资回报的各种系统性和非系统性风险因素。",
            keyPoints: [
              "市场风险：整体市场下跌影响所有资产。",
              "信用风险：债务人无法履行还款义务。",
              "流动性风险：无法以合理价格快速变现。",
              "通胀风险：购买力随时间下降。",
              "利率风险：利率变化影响债券价格。",
            ],
            resources: [
              { title: "Types of Investment Risk - Investopedia", url: "https://www.investopedia.com/articles/investing/082614/types-risk-every-investor-should-know.asp" },
              { title: "Understanding Risk - SEC", url: "https://www.investor.gov/introduction-investing/investing-basics/what-risk" },
              { title: "Risk Management - CFA Institute", url: "https://www.cfainstitute.org/en/research/foundation/2020/risk-profiling-and-tolerance" },
            ],
          },
          {
            id: "inv-w5-2",
            title: "风险承受能力",
            detail: "通过问卷和情景分析评估自己的风险承受能力，结合年龄、收入和投资期限确定合适的投资风险水平。",
            keyPoints: [
              "风险承受能力：财务能力承受损失的程度。",
              "风险偏好：心理上对风险的态度。",
              "投资期限：时间越长，承担风险能力越强。",
              "年龄法则：100 - 年龄 = 股票配置比例（参考）。",
            ],
            resources: [
              { title: "Risk Tolerance - Investopedia", url: "https://www.investopedia.com/terms/r/risktolerance.asp" },
              { title: "Risk Assessment - Vanguard", url: "https://investor.vanguard.com/tools-calculators/investor-questionnaire" },
              { title: "Risk Profiling - FINRA", url: "https://www.finra.org/investors/investing/investing-basics/asset-allocation" },
            ],
          },
          {
            id: "inv-w5-3",
            title: "风险与收益权衡",
            detail: "学习用标准差和夏普比率等指标量化风险与收益的关系，理解高风险高收益的投资基本定律及其应用。",
            keyPoints: [
              "高风险高收益：股票 > 债券 > 现金。",
              "标准差：衡量收益波动性的指标。",
              "夏普比率：每单位风险获得的超额收益。",
              "不要为了收益承担超出能力的风险。",
            ],
            resources: [
              { title: "Risk-Return Tradeoff - Investopedia", url: "https://www.investopedia.com/terms/r/riskreturntradeoff.asp" },
              { title: "Sharpe Ratio - Investopedia", url: "https://www.investopedia.com/terms/s/sharperatio.asp" },
              { title: "Standard Deviation - Investopedia", url: "https://www.investopedia.com/terms/s/standarddeviation.asp" },
            ],
          },
        ],
      },
      {
        id: "inv-w6",
        title: "第 6 周：投资工具概览",
        summary: "了解主要的投资工具及其特点。",
        overview: "本周全面介绍三大核心投资工具：股票代表公司所有权并提供资本增值机会，债券作为固定收益产品提供稳定回报，共同基金与 ETF 则让普通投资者轻松实现分散投资。",
        keyPoints: [
          "不同投资工具有不同的风险收益特征。",
          "基金是普通投资者的理想选择。",
          "选择适合自己目标的投资工具。",
        ],
        lessons: [
          {
            id: "inv-w6-1",
            title: "股票基础",
            detail: "了解股票代表公司所有权的含义，掌握股息收入和资本增值两种收益来源以及股票的分类方式。",
            keyPoints: [
              "股票代表公司所有权的一部分。",
              "收益来源：股息收入 + 资本增值。",
              "普通股 vs 优先股：投票权与分红优先级。",
              "股票风险较高，但长期收益潜力最大。",
            ],
            resources: [
              { title: "Stocks Basics - Investopedia", url: "https://www.investopedia.com/terms/s/stock.asp" },
              { title: "How Stocks Work - SEC", url: "https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks" },
              { title: "Stock Investing Guide - Motley Fool", url: "https://www.fool.com/investing/how-to-invest/stocks/" },
            ],
          },
          {
            id: "inv-w6-2",
            title: "债券基础",
            detail: "理解债券作为固定收益工具的运作机制，掌握票息、到期收益率和信用评级等核心概念及投资特点。",
            keyPoints: [
              "债券是借款人的债务凭证。",
              "收益来源：利息收入（票息）+ 到期还本。",
              "债券类型：国债、企业债、市政债。",
              "债券价格与利率反向变动。",
            ],
            resources: [
              { title: "Bonds Basics - Investopedia", url: "https://www.investopedia.com/terms/b/bond.asp" },
              { title: "Bond Investing - SEC", url: "https://www.investor.gov/introduction-investing/investing-basics/investment-products/bonds-or-fixed-income-products" },
              { title: "Bond Types - Fidelity", url: "https://www.fidelity.com/learning-center/investment-products/fixed-income-bonds/what-are-bonds" },
            ],
          },
          {
            id: "inv-w6-3",
            title: "基金与 ETF",
            detail: "了解共同基金和 ETF 的结构差异、费用比较和交易方式，学会利用基金产品实现低成本分散投资。",
            keyPoints: [
              "基金：集合投资者资金，由专业经理管理。",
              "ETF：交易所交易基金，可像股票一样买卖。",
              "指数基金：跟踪特定指数，费用低廉。",
              "主动 vs 被动：大多数主动基金跑不赢指数。",
            ],
            resources: [
              { title: "Mutual Funds - Investopedia", url: "https://www.investopedia.com/terms/m/mutualfund.asp" },
              { title: "ETF Basics - Investopedia", url: "https://www.investopedia.com/terms/e/etf.asp" },
              { title: "Index Funds - Vanguard", url: "https://investor.vanguard.com/investment-products/index-funds" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段三：股票市场基础（第 7-9 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "inv-stock-market",
    title: "阶段三：股票市场基础",
    duration: "第 7-9 周",
    goal: "深入了解股票市场的运作机制。",
    weeks: [
      {
        id: "inv-w7",
        title: "第 7 周：股票市场运作",
        summary: "了解股票市场的结构和参与者。",
        overview: "本周学习股票市场的运作机制：了解交易所的功能与组织形式，理解一级市场和二级市场的区别，认识散户、机构投资者和做市商等市场参与者的角色与影响力。",
        keyPoints: [
          "股票市场是资本配置的重要场所。",
          "一级市场与二级市场功能不同。",
          "了解市场参与者有助于理解市场行为。",
        ],
        lessons: [
          {
            id: "inv-w7-1",
            title: "证券交易所",
            detail: "了解纽约证券交易所、纳斯达克、上海证券交易所等全球主要交易所的运作模式、交易时间和上市标准。",
            keyPoints: [
              "纽交所（NYSE）：全球最大，采用专家做市商制度。",
              "纳斯达克（NASDAQ）：电子交易，科技股集中。",
              "上交所、深交所：中国 A 股市场。",
              "港交所：连接中国与国际资本市场。",
            ],
            resources: [
              { title: "Stock Exchanges - Investopedia", url: "https://www.investopedia.com/terms/s/stockmarket.asp" },
              { title: "NYSE vs NASDAQ - Investopedia", url: "https://www.investopedia.com/articles/basics/03/103103.asp" },
              { title: "Global Stock Exchanges", url: "https://www.investopedia.com/financial-edge/1212/the-worlds-top-10-stock-exchanges.aspx" },
            ],
          },
          {
            id: "inv-w7-2",
            title: "一级与二级市场",
            detail: "理解一级市场（IPO 发行）和二级市场（投资者间交易）的运作机制，掌握证券市场的整体架构。",
            keyPoints: [
              "一级市场：公司首次发行证券（IPO）。",
              "二级市场：投资者之间交易已发行证券。",
              "IPO 流程：承销、定价、配售、上市。",
              "二级市场提供流动性和价格发现功能。",
            ],
            resources: [
              { title: "Primary vs Secondary Market - Investopedia", url: "https://www.investopedia.com/terms/p/primarymarket.asp" },
              { title: "IPO Process - SEC", url: "https://www.sec.gov/education/capitalraising/building-blocks/initial-public-offering" },
              { title: "How IPOs Work - Investopedia", url: "https://www.investopedia.com/terms/i/ipo.asp" },
            ],
          },
          {
            id: "inv-w7-3",
            title: "市场参与者",
            detail: "了解散户投资者、机构投资者、做市商和监管机构等市场参与者的角色定位及其对价格形成的影响。",
            keyPoints: [
              "散户投资者：个人投资者，交易量小。",
              "机构投资者：基金、保险、养老金，主导市场。",
              "做市商：提供流动性，赚取买卖价差。",
              "监管机构：SEC（美国）、证监会（中国）。",
            ],
            resources: [
              { title: "Market Participants - Investopedia", url: "https://www.investopedia.com/terms/i/institutionalinvestor.asp" },
              { title: "Market Makers - Investopedia", url: "https://www.investopedia.com/terms/m/marketmaker.asp" },
              { title: "SEC Role - SEC.gov", url: "https://www.sec.gov/about/mission" },
            ],
          },
        ],
      },
      {
        id: "inv-w8",
        title: "第 8 周：市场指数与分析",
        summary: "学习市场指数和经济指标分析。",
        overview: "本周学习宏观分析基础：了解道琼斯、标普 500 等主要指数的构成与意义，理解经济周期四阶段对不同行业的影响，掌握 GDP、CPI 等关键经济指标的解读方法。",
        keyPoints: [
          "指数是衡量市场整体表现的标尺。",
          "经济周期影响市场走势。",
          "宏观经济指标是投资决策的重要参考。",
        ],
        lessons: [
          {
            id: "inv-w8-1",
            title: "主要市场指数",
            detail: "了解道琼斯、标普 500、纳斯达克等全球主要股票指数的编制方法、成分股构成及其作为市场晴雨表的意义。",
            keyPoints: [
              "道琼斯工业指数：30 只美国大盘股。",
              "标普 500：500 家美国大公司，市值加权。",
              "纳斯达克综合指数：科技股占比高。",
              "沪深 300、恒生指数、MSCI 新兴市场。",
            ],
            resources: [
              { title: "Stock Market Indexes - Investopedia", url: "https://www.investopedia.com/terms/m/marketindex.asp" },
              { title: "S&P 500 Explained - Investopedia", url: "https://www.investopedia.com/terms/s/sp500.asp" },
              { title: "DJIA Explained - Investopedia", url: "https://www.investopedia.com/terms/d/djia.asp" },
            ],
          },
          {
            id: "inv-w8-2",
            title: "经济周期",
            detail: "理解扩张、顶峰、收缩和低谷四个经济周期阶段的特征，掌握不同行业在各阶段的表现差异和配置策略。",
            keyPoints: [
              "四个阶段：扩张、顶峰、收缩、低谷。",
              "不同行业在不同周期阶段表现各异。",
              "周期性股票 vs 防御性股票。",
              "领先、同步、滞后经济指标。",
            ],
            resources: [
              { title: "Business Cycle - Investopedia", url: "https://www.investopedia.com/terms/b/businesscycle.asp" },
              { title: "Economic Indicators - Investopedia", url: "https://www.investopedia.com/terms/e/economic_indicator.asp" },
              { title: "Sector Rotation - Fidelity", url: "https://www.fidelity.com/learning-center/trading-investing/markets-sectors/intro-to-sectors" },
            ],
          },
          {
            id: "inv-w8-3",
            title: "宏观经济指标",
            detail: "学习解读 GDP 增长率、CPI 通胀率、失业率和利率等关键经济指标，判断宏观经济走势对投资市场的影响。",
            keyPoints: [
              "GDP：经济总量和增长率。",
              "通胀指标：CPI、PPI、PCE。",
              "就业数据：失业率、非农就业。",
              "利率政策：美联储、央行货币政策。",
            ],
            resources: [
              { title: "GDP Explained - Investopedia", url: "https://www.investopedia.com/terms/g/gdp.asp" },
              { title: "CPI Explained - BLS", url: "https://www.bls.gov/cpi/" },
              { title: "Federal Reserve - Fed", url: "https://www.federalreserve.gov/monetarypolicy.htm" },
            ],
          },
        ],
      },
      {
        id: "inv-w9",
        title: "第 9 周：交易基础",
        summary: "学习股票交易的实操知识。",
        overview: "本周进入实操环节：学习如何选择券商和开设证券账户，掌握市价单、限价单等不同订单类型的使用场景，了解佣金、价差和税务等交易成本对投资收益的影响。",
        keyPoints: [
          "选择合适的券商是投资的第一步。",
          "理解不同订单类型能更好地执行交易。",
          "交易成本会侵蚀长期收益。",
        ],
        lessons: [
          {
            id: "inv-w9-1",
            title: "证券账户开设",
            detail: "了解券商选择标准和开户流程，掌握个人账户与退休账户等不同账户类型的特点及日常管理方法。",
            keyPoints: [
              "券商选择：费用、平台、研究工具、客服。",
              "账户类型：个人账户、退休账户（IRA/401k）。",
              "保证金账户 vs 现金账户：杠杆风险。",
              "账户安全：双因素认证、密码管理。",
            ],
            resources: [
              { title: "How to Open Brokerage Account - Investopedia", url: "https://www.investopedia.com/how-to-open-a-brokerage-account-4707709" },
              { title: "Best Brokers - NerdWallet", url: "https://www.nerdwallet.com/best/investing/online-brokers-for-beginners" },
              { title: "Margin vs Cash Account - Investopedia", url: "https://www.investopedia.com/ask/answers/100314/whats-difference-between-cash-account-and-margin-account.asp" },
            ],
          },
          {
            id: "inv-w9-2",
            title: "订单类型",
            detail: "掌握市价单、限价单、止损单和止损限价单等各种订单类型的特点，学会根据不同交易场景选择合适的下单方式。",
            keyPoints: [
              "市价单：立即以当前价格成交。",
              "限价单：以指定价格或更优价格成交。",
              "止损单：价格触及设定点时自动卖出。",
              "止损限价单：结合止损和限价功能。",
            ],
            resources: [
              { title: "Order Types - Investopedia", url: "https://www.investopedia.com/investing/basics-trading-stock-know-your-orders/" },
              { title: "Limit Orders - SEC", url: "https://www.investor.gov/introduction-investing/investing-basics/how-stock-markets-work/types-orders" },
              { title: "Stop Loss Orders - Investopedia", url: "https://www.investopedia.com/terms/s/stop-lossorder.asp" },
            ],
          },
          {
            id: "inv-w9-3",
            title: "交易成本与税务",
            detail: "了解佣金、买卖价差、基金管理费等投资费用构成，以及资本利得税和股息税对投资净收益的实际影响。",
            keyPoints: [
              "佣金：多数券商已实现零佣金交易。",
              "买卖价差：隐性交易成本。",
              "基金费率：管理费、销售费用。",
              "资本利得税：短期 vs 长期税率差异。",
            ],
            resources: [
              { title: "Trading Costs - Investopedia", url: "https://www.investopedia.com/terms/t/transactioncosts.asp" },
              { title: "Expense Ratios - Investopedia", url: "https://www.investopedia.com/terms/e/expenseratio.asp" },
              { title: "Capital Gains Tax - Investopedia", url: "https://www.investopedia.com/terms/c/capital_gains_tax.asp" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段四：基本面分析（第 10-12 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "inv-fundamental-analysis",
    title: "阶段四：基本面分析",
    duration: "第 10-12 周",
    goal: "掌握财务报表分析和公司估值方法。",
    weeks: [
      {
        id: "inv-w10",
        title: "第 10 周：财务报表分析",
        summary: "学习阅读和分析公司财务报表。",
        overview: "本周学习基本面分析的基石：掌握资产负债表的结构与核心科目，学会分析利润表中的收入、成本和盈利趋势，理解现金流量表揭示的企业真实资金状况。",
        keyPoints: [
          "三张表相互关联，反映公司全貌。",
          "财务报表是了解公司的窗口。",
          "关注财务数据的趋势和质量。",
        ],
        lessons: [
          {
            id: "inv-w10-1",
            title: "资产负债表",
            detail: "学习阅读资产负债表，理解公司的资产结构、负债水平和所有者权益构成，评估企业的财务基础和偿债能力。",
            keyPoints: [
              "基本等式：资产 = 负债 + 所有者权益。",
              "流动资产 vs 非流动资产：变现能力。",
              "关注资产质量：应收账款、存货周转。",
              "负债结构：短期 vs 长期债务。",
            ],
            resources: [
              { title: "Balance Sheet - Investopedia", url: "https://www.investopedia.com/terms/b/balancesheet.asp" },
              { title: "Reading Balance Sheet - SEC", url: "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/how-read" },
              { title: "Balance Sheet Analysis - CFI", url: "https://corporatefinanceinstitute.com/resources/accounting/balance-sheet/" },
            ],
          },
          {
            id: "inv-w10-2",
            title: "利润表",
            detail: "通过利润表分析公司的收入结构、成本控制能力和净利润趋势，评估企业的持续盈利能力和增长潜力。",
            keyPoints: [
              "收入增长：是否持续、来源是否多元。",
              "毛利率：反映产品竞争力和定价能力。",
              "营业利润：核心业务盈利能力。",
              "净利润 vs 经营现金流：盈利质量。",
            ],
            resources: [
              { title: "Income Statement - Investopedia", url: "https://www.investopedia.com/terms/i/incomestatement.asp" },
              { title: "Profit Margins - Investopedia", url: "https://www.investopedia.com/terms/p/profitmargin.asp" },
              { title: "Revenue Analysis - CFI", url: "https://corporatefinanceinstitute.com/resources/accounting/income-statement/" },
            ],
          },
          {
            id: "inv-w10-3",
            title: "现金流量表",
            detail: "通过现金流量表理解公司经营、投资和融资活动的现金流入与流出，验证利润质量和企业真实资金状况。",
            keyPoints: [
              "三类现金流：经营、投资、融资活动。",
              "经营现金流是核心：利润的现金验证。",
              "自由现金流 = 经营现金流 - 资本支出。",
              "现金流与利润的差异揭示盈利质量。",
            ],
            resources: [
              { title: "Cash Flow Statement - Investopedia", url: "https://www.investopedia.com/terms/c/cashflowstatement.asp" },
              { title: "Free Cash Flow - Investopedia", url: "https://www.investopedia.com/terms/f/freecashflow.asp" },
              { title: "Cash Flow Analysis - CFI", url: "https://corporatefinanceinstitute.com/resources/accounting/cash-flow-statement/" },
            ],
          },
        ],
      },
      {
        id: "inv-w11",
        title: "第 11 周：财务比率与估值",
        summary: "学习使用财务比率评估公司。",
        keyPoints: [
          "比率分析是比较不同公司的有效工具。",
          "估值比率帮助判断股价是否合理。",
          "结合多个比率进行综合分析。",
        ],
        lessons: [
          {
            id: "inv-w11-1",
            title: "盈利能力指标",
            detail: "运用 ROE、ROA 和利润率等核心财务比率，系统分析公司的盈利能力、运营效率和资产利用水平。",
            keyPoints: [
              "ROE（净资产收益率）：股东权益回报。",
              "ROA（总资产收益率）：资产利用效率。",
              "毛利率、营业利润率、净利率。",
              "杜邦分析：分解 ROE 的驱动因素。",
            ],
            resources: [
              { title: "ROE - Investopedia", url: "https://www.investopedia.com/terms/r/returnonequity.asp" },
              { title: "ROA - Investopedia", url: "https://www.investopedia.com/terms/r/returnonassets.asp" },
              { title: "DuPont Analysis - Investopedia", url: "https://www.investopedia.com/terms/d/dupontanalysis.asp" },
            ],
          },
          {
            id: "inv-w11-2",
            title: "估值指标",
            detail: "学习市盈率、市净率和市销率等常用估值指标的计算方法，判断股票价格是否被高估或低估。",
            keyPoints: [
              "市盈率（P/E）：股价相对于每股收益。",
              "市净率（P/B）：股价相对于每股净资产。",
              "市销率（P/S）：股价相对于每股销售额。",
              "EV/EBITDA：企业价值相对于税息折旧摊销前利润。",
            ],
            resources: [
              { title: "P/E Ratio - Investopedia", url: "https://www.investopedia.com/terms/p/price-earningsratio.asp" },
              { title: "P/B Ratio - Investopedia", url: "https://www.investopedia.com/terms/p/price-to-bookratio.asp" },
              { title: "EV/EBITDA - Investopedia", url: "https://www.investopedia.com/terms/e/ev-ebitda.asp" },
            ],
          },
          {
            id: "inv-w11-3",
            title: "偿债与流动性指标",
            detail: "通过流动比率、速动比率和资产负债率等指标评估公司的短期偿债能力、长期财务风险和流动性状况。",
            keyPoints: [
              "流动比率：流动资产 / 流动负债，>1 为佳。",
              "速动比率：（流动资产 - 存货）/ 流动负债。",
              "资产负债率：总负债 / 总资产。",
              "利息覆盖率：营业利润 / 利息支出。",
            ],
            resources: [
              { title: "Current Ratio - Investopedia", url: "https://www.investopedia.com/terms/c/currentratio.asp" },
              { title: "Quick Ratio - Investopedia", url: "https://www.investopedia.com/terms/q/quickratio.asp" },
              { title: "Debt Ratios - Investopedia", url: "https://www.investopedia.com/terms/d/debtratio.asp" },
            ],
          },
        ],
      },
      {
        id: "inv-w12",
        title: "第 12 周：价值投资",
        summary: "学习价值投资的核心理念和方法。",
        keyPoints: [
          "价值投资关注内在价值而非市场价格。",
          "安全边际是价值投资的核心原则。",
          "耐心是价值投资者的重要品质。",
        ],
        lessons: [
          {
            id: "inv-w12-1",
            title: "价值投资理念",
            detail: "理解格雷厄姆和巴菲特倡导的价值投资核心思想，学习安全边际、市场先生比喻和逆向投资的理念。",
            keyPoints: [
              "格雷厄姆和多德开创了价值投资。",
              "市场先生比喻：市场是服务你的伙伴。",
              "内在价值：基于未来现金流的公司价值。",
              "长期持有：让时间发挥复利作用。",
            ],
            resources: [
              { title: "Value Investing - Investopedia", url: "https://www.investopedia.com/terms/v/valueinvesting.asp" },
              { title: "Benjamin Graham - Investopedia", url: "https://www.investopedia.com/terms/b/benjamin-graham.asp" },
              { title: "Intelligent Investor Summary", url: "https://www.investopedia.com/articles/07/ben_graham.asp" },
            ],
          },
          {
            id: "inv-w12-2",
            title: "内在价值估算",
            detail: "学习折现现金流模型和股息折现模型等内在价值计算方法，掌握合理估算公司长期投资价值的技能。",
            keyPoints: [
              "DCF 模型：折现未来自由现金流。",
              "股息折现模型：适用于稳定分红公司。",
              "清算价值：资产减负债的最低价值。",
              "估值永远是估计，需要保守假设。",
            ],
            resources: [
              { title: "DCF Model - Investopedia", url: "https://www.investopedia.com/terms/d/dcf.asp" },
              { title: "Intrinsic Value - Investopedia", url: "https://www.investopedia.com/terms/i/intrinsicvalue.asp" },
              { title: "Dividend Discount Model - Investopedia", url: "https://www.investopedia.com/terms/d/ddm.asp" },
            ],
          },
          {
            id: "inv-w12-3",
            title: "安全边际与投资实践",
            detail: "将安全边际和护城河分析等价值投资理念应用于实际选股，构建长期持有的优质价值投资组合。",
            keyPoints: [
              "安全边际：以低于内在价值的价格买入。",
              "护城河：可持续竞争优势。",
              "避免永久性资本损失是第一原则。",
              "分散投资：不把鸡蛋放在一个篮子里。",
            ],
            resources: [
              { title: "Margin of Safety - Investopedia", url: "https://www.investopedia.com/terms/m/marginofsafety.asp" },
              { title: "Economic Moat - Investopedia", url: "https://www.investopedia.com/terms/e/economicmoat.asp" },
              { title: "Warren Buffett Strategy - Investopedia", url: "https://www.investopedia.com/articles/01/071801.asp" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段五：技术分析（第 13-15 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "inv-technical-analysis",
    title: "阶段五：技术分析",
    duration: "第 13-15 周",
    goal: "掌握技术分析的基本工具和方法。",
    weeks: [
      {
        id: "inv-w13",
        title: "第 13 周：图表基础",
        summary: "学习读懂价格图表和识别趋势。",
        keyPoints: [
          "图表是价格历史的可视化呈现。",
          "趋势是技术分析的核心概念。",
          "支撑和阻力是重要的价格水平。",
        ],
        lessons: [
          {
            id: "inv-w13-1",
            title: "K 线图基础",
            detail: "学习 K 线图（蜡烛图）的四要素：开盘价、收盘价、最高价和最低价，掌握阳线阴线的含义及基本读图方法。",
            keyPoints: [
              "K 线四要素：开盘、收盘、最高、最低。",
              "阳线（实体白/绿）：收盘 > 开盘。",
              "阴线（实体黑/红）：收盘 < 开盘。",
              "影线长度反映买卖双方的博弈。",
            ],
            resources: [
              { title: "Candlestick Charts - Investopedia", url: "https://www.investopedia.com/terms/c/candlestick.asp" },
              { title: "Candlestick Introduction - StockCharts", url: "https://chartschool.stockcharts.com/table-of-contents/chart-analysis/candlestick-charts/introduction-to-candlesticks" },
              { title: "Reading Candlesticks - Investopedia", url: "https://www.investopedia.com/trading/candlestick-charting-what-is-it/" },
            ],
          },
          {
            id: "inv-w13-2",
            title: "趋势与趋势线",
            detail: "学习识别上升趋势、下降趋势和横盘整理，掌握绘制趋势线的方法和趋势交易的基本原则。",
            keyPoints: [
              "上升趋势：更高的高点和更高的低点。",
              "下降趋势：更低的高点和更低的低点。",
              "横盘整理：价格在区间内波动。",
              "趋势线：连接高点或低点的直线。",
            ],
            resources: [
              { title: "Trend Lines - Investopedia", url: "https://www.investopedia.com/terms/t/trendline.asp" },
              { title: "Identifying Trends - StockCharts", url: "https://chartschool.stockcharts.com/table-of-contents/chart-analysis/trend-lines" },
              { title: "Trend Analysis - Investopedia", url: "https://www.investopedia.com/terms/t/trendanalysis.asp" },
            ],
          },
          {
            id: "inv-w13-3",
            title: "支撑与阻力",
            detail: "学习识别支撑位和阻力位等关键价格水平，理解买卖力量在这些区域的博弈以及突破与回踩的交易信号。",
            keyPoints: [
              "支撑：买方力量集中的价格区域。",
              "阻力：卖方力量集中的价格区域。",
              "支撑阻力互换：突破后角色转换。",
              "心理价位：整数关口的重要性。",
            ],
            resources: [
              { title: "Support and Resistance - Investopedia", url: "https://www.investopedia.com/trading/support-and-resistance-basics/" },
              { title: "Support Resistance - StockCharts", url: "https://chartschool.stockcharts.com/table-of-contents/chart-analysis/support-and-resistance" },
              { title: "Trading Levels - Investopedia", url: "https://www.investopedia.com/articles/technical/061801.asp" },
            ],
          },
        ],
      },
      {
        id: "inv-w14",
        title: "第 14 周：技术指标",
        summary: "学习常用技术指标的应用。",
        keyPoints: [
          "指标是对价格和成交量的数学处理。",
          "不同指标适用于不同市场环境。",
          "避免指标过多导致分析瘫痪。",
        ],
        lessons: [
          {
            id: "inv-w14-1",
            title: "移动平均线",
            detail: "学习简单移动平均线和指数移动平均线的计算原理，掌握均线交叉、金叉死叉等趋势判断信号的实际应用。",
            keyPoints: [
              "简单移动平均（SMA）：等权重平均。",
              "指数移动平均（EMA）：近期数据权重更高。",
              "常用周期：20、50、200 日均线。",
              "金叉死叉：短期均线上穿/下穿长期均线。",
            ],
            resources: [
              { title: "Moving Averages - Investopedia", url: "https://www.investopedia.com/terms/m/movingaverage.asp" },
              { title: "SMA vs EMA - Investopedia", url: "https://www.investopedia.com/ask/answers/difference-between-simple-exponential-moving-average/" },
              { title: "MA Trading Strategies - StockCharts", url: "https://chartschool.stockcharts.com/table-of-contents/technical-indicators-and-overlays/moving-averages" },
            ],
          },
          {
            id: "inv-w14-2",
            title: "RSI 与动量指标",
            detail: "学习 RSI 相对强弱指标的计算方法，掌握超买超卖区域判断和 MACD 等动量指标的综合分析技巧。",
            keyPoints: [
              "RSI：衡量价格变动的速度和幅度。",
              "超买区（>70）和超卖区（<30）。",
              "背离：价格与 RSI 走势不一致。",
              "MACD：趋势和动量的综合指标。",
            ],
            resources: [
              { title: "RSI - Investopedia", url: "https://www.investopedia.com/terms/r/rsi.asp" },
              { title: "MACD - Investopedia", url: "https://www.investopedia.com/terms/m/macd.asp" },
              { title: "RSI Trading - StockCharts", url: "https://chartschool.stockcharts.com/table-of-contents/technical-indicators-and-overlays/rsi" },
            ],
          },
          {
            id: "inv-w14-3",
            title: "成交量分析",
            detail: "理解成交量在技术分析中验证趋势的重要作用，学习量价配合与量价背离信号对买卖决策的指导意义。",
            keyPoints: [
              "量价配合：价升量增、价跌量缩为健康。",
              "量价背离：可能预示趋势反转。",
              "OBV（能量潮）：累计成交量指标。",
              "成交量是价格变动的验证。",
            ],
            resources: [
              { title: "Volume Analysis - Investopedia", url: "https://www.investopedia.com/terms/v/volume.asp" },
              { title: "OBV - Investopedia", url: "https://www.investopedia.com/terms/o/onbalancevolume.asp" },
              { title: "Volume Indicators - StockCharts", url: "https://chartschool.stockcharts.com/table-of-contents/technical-indicators-and-overlays/on-balance-volume-obv" },
            ],
          },
        ],
      },
      {
        id: "inv-w15",
        title: "第 15 周：图形形态",
        summary: "学习识别常见的价格形态。",
        keyPoints: [
          "形态是市场参与者心理的反映。",
          "反转形态预示趋势可能改变。",
          "持续形态表示趋势可能继续。",
        ],
        lessons: [
          {
            id: "inv-w15-1",
            title: "K 线形态",
            detail: "识别锤子线、吞没形态等重要的单根和多根 K 线形态，理解其在趋势反转或延续中的预测意义。",
            keyPoints: [
              "锤子线/上吊线：长下影线，可能反转。",
              "吞没形态：大实体吞没前一根 K 线。",
              "十字星：开盘价等于收盘价，犹豫不决。",
              "早晨之星/黄昏之星：三根 K 线反转形态。",
            ],
            resources: [
              { title: "Candlestick Patterns - Investopedia", url: "https://www.investopedia.com/articles/active-trading/062315/using-bullish-candlestick-patterns-buy-stocks.asp" },
              { title: "16 Candlestick Patterns - IG", url: "https://www.ig.com/en/trading-strategies/16-candlestick-patterns-every-trader-should-know-180615" },
              { title: "Candlestick Encyclopedia - StockCharts", url: "https://chartschool.stockcharts.com/table-of-contents/chart-analysis/candlestick-charts" },
            ],
          },
          {
            id: "inv-w15-2",
            title: "反转形态",
            detail: "学习识别头肩顶底、双顶双底等经典趋势反转图形形态，掌握形态确认条件和目标价位的计算方法。",
            keyPoints: [
              "头肩顶/底：最可靠的反转形态之一。",
              "双顶/双底（M 顶/W 底）。",
              "圆弧顶/底：缓慢的趋势转换。",
              "颈线突破确认形态完成。",
            ],
            resources: [
              { title: "Head and Shoulders - Investopedia", url: "https://www.investopedia.com/terms/h/head-shoulders.asp" },
              { title: "Double Top/Bottom - Investopedia", url: "https://www.investopedia.com/terms/d/doubletop.asp" },
              { title: "Chart Patterns - StockCharts", url: "https://chartschool.stockcharts.com/table-of-contents/chart-analysis/chart-patterns" },
            ],
          },
          {
            id: "inv-w15-3",
            title: "持续形态",
            detail: "学习识别三角形、旗形和楔形等趋势延续图形形态，理解价格整理后继续原有趋势的交易机会。",
            keyPoints: [
              "三角形：对称、上升、下降三角形。",
              "旗形和楔形：短期整理后继续原趋势。",
              "矩形：水平整理区间。",
              "形态的目标价位计算。",
            ],
            resources: [
              { title: "Triangle Patterns - Investopedia", url: "https://www.investopedia.com/terms/t/triangle.asp" },
              { title: "Flag Pattern - Investopedia", url: "https://www.investopedia.com/terms/f/flag.asp" },
              { title: "Continuation Patterns - StockCharts", url: "https://chartschool.stockcharts.com/table-of-contents/chart-analysis/chart-patterns/continuation-patterns" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // 阶段六：投资组合管理（第 16-18 周）
  // ═══════════════════════════════════════════════════════════════
  {
    id: "inv-portfolio-management",
    title: "阶段六：投资组合管理",
    duration: "第 16-18 周",
    goal: "学习构建和管理投资组合。",
    weeks: [
      {
        id: "inv-w16",
        title: "第 16 周：资产配置",
        summary: "学习资产配置的原理和策略。",
        keyPoints: [
          "资产配置决定了投资组合的大部分收益。",
          "不同资产类别有不同的风险收益特征。",
          "定期再平衡维持目标配置。",
        ],
        lessons: [
          {
            id: "inv-w16-1",
            title: "资产类别",
            detail: "了解股票、债券、现金、房地产和大宗商品等主要资产类别的风险收益特征和在组合中的配置角色。",
            keyPoints: [
              "股票：高风险高收益，长期增长。",
              "债券：中等风险，稳定收益。",
              "现金：最低风险，抵御通胀能力弱。",
              "另类投资：房地产、大宗商品、加密货币。",
            ],
            resources: [
              { title: "Asset Classes - Investopedia", url: "https://www.investopedia.com/terms/a/assetclasses.asp" },
              { title: "Asset Allocation - Vanguard", url: "https://investor.vanguard.com/investor-resources-education/portfolio-management/asset-allocation" },
              { title: "Alternative Investments - CFA Institute", url: "https://www.cfainstitute.org/en/membership/professional-development/refresher-readings/alternative-investments" },
            ],
          },
          {
            id: "inv-w16-2",
            title: "配置策略",
            detail: "学习战略资产配置和战术资产配置等不同方法，根据个人目标和市场环境制定合理的资产比例方案。",
            keyPoints: [
              "战略配置：基于长期目标的固定比例。",
              "战术配置：根据市场状况短期调整。",
              "年龄法则：100 - 年龄 = 股票比例。",
              "目标日期基金：自动调整配置。",
            ],
            resources: [
              { title: "Strategic Asset Allocation - Investopedia", url: "https://www.investopedia.com/terms/s/strategicassetallocation.asp" },
              { title: "Tactical Allocation - Investopedia", url: "https://www.investopedia.com/terms/t/tacticalassetallocation.asp" },
              { title: "Target Date Funds - Investopedia", url: "https://www.investopedia.com/terms/t/target-date_fund.asp" },
            ],
          },
          {
            id: "inv-w16-3",
            title: "组合再平衡",
            detail: "学习根据市场变化和目标偏离程度判断何时需要再平衡投资组合，掌握定期再平衡和阈值再平衡的实操方法。",
            keyPoints: [
              "为什么再平衡：维持风险水平，买低卖高。",
              "定时再平衡：每季度或每年一次。",
              "阈值再平衡：偏离目标 5% 时调整。",
              "税务考量：利用税收优惠账户再平衡。",
            ],
            resources: [
              { title: "Rebalancing - Investopedia", url: "https://www.investopedia.com/terms/r/rebalancing.asp" },
              { title: "Portfolio Rebalancing - Vanguard", url: "https://investor.vanguard.com/investor-resources-education/portfolio-management/rebalancing-your-portfolio" },
              { title: "Rebalancing Strategies - Fidelity", url: "https://www.fidelity.com/viewpoints/investing-ideas/portfolio-rebalancing" },
            ],
          },
        ],
      },
      {
        id: "inv-w17",
        title: "第 17 周：风险管理",
        summary: "学习投资组合的风险管理方法。",
        keyPoints: [
          "风险管理是投资成功的关键。",
          "分散投资是免费的午餐。",
          "止损是保护资本的重要工具。",
        ],
        lessons: [
          {
            id: "inv-w17-1",
            title: "分散投资",
            detail: "理解现代投资组合理论中分散投资降低风险的原理，学习跨资产类别、地区和行业的多维度分散方法。",
            keyPoints: [
              "现代投资组合理论：相关性决定分散效果。",
              "跨资产类别分散：股票、债券、另类。",
              "跨地域分散：国内、国际、新兴市场。",
              "跨行业分散：避免集中于单一行业。",
            ],
            resources: [
              { title: "Diversification - Investopedia", url: "https://www.investopedia.com/terms/d/diversification.asp" },
              { title: "Modern Portfolio Theory - Investopedia", url: "https://www.investopedia.com/terms/m/modernportfoliotheory.asp" },
              { title: "Correlation - Investopedia", url: "https://www.investopedia.com/terms/c/correlation.asp" },
            ],
          },
          {
            id: "inv-w17-2",
            title: "风险度量",
            detail: "学习使用波动率、Beta 值和最大回撤等指标量化投资组合风险，建立系统化的风险评估框架。",
            keyPoints: [
              "波动率：收益的标准差。",
              "Beta：相对于市场的系统性风险。",
              "VaR（风险价值）：最大可能损失。",
              "最大回撤：从高点到低点的最大跌幅。",
            ],
            resources: [
              { title: "Beta - Investopedia", url: "https://www.investopedia.com/terms/b/beta.asp" },
              { title: "Value at Risk - Investopedia", url: "https://www.investopedia.com/terms/v/var.asp" },
              { title: "Maximum Drawdown - Investopedia", url: "https://www.investopedia.com/terms/m/maximum-drawdown-mdd.asp" },
            ],
          },
          {
            id: "inv-w17-3",
            title: "止损与仓位管理",
            detail: "学习止损设置、仓位管理和对冲等保护资本的实用技巧，确保单一投资失误不会造成致命损失。",
            keyPoints: [
              "止损设置：基于波动率或固定百分比。",
              "仓位大小：单一持仓不超过总资产 5-10%。",
              "凯利公式：最优仓位计算。",
              "永远不要让小亏损变成大亏损。",
            ],
            resources: [
              { title: "Stop Loss - Investopedia", url: "https://www.investopedia.com/terms/s/stop-lossorder.asp" },
              { title: "Position Sizing - Investopedia", url: "https://www.investopedia.com/terms/p/positionsizing.asp" },
              { title: "Kelly Criterion - Investopedia", url: "https://www.investopedia.com/articles/trading/04/091504.asp" },
            ],
          },
        ],
      },
      {
        id: "inv-w18",
        title: "第 18 周：投资策略整合",
        summary: "整合所学知识，建立完整的投资体系。",
        keyPoints: [
          "定投是普通投资者的最佳策略。",
          "投资计划需要长期坚持执行。",
          "持续学习和调整是成功的关键。",
        ],
        lessons: [
          {
            id: "inv-w18-1",
            title: "定期定额投资",
            detail: "学习美元成本平均法的定投策略原理，理解定期定额投资如何平滑市场波动并降低择时风险。",
            keyPoints: [
              "美元成本平均法：定期投入固定金额。",
              "平滑波动：高价少买、低价多买。",
              "降低择时风险：无需预测市场。",
              "自动化：设置自动投资减少情绪干扰。",
            ],
            resources: [
              { title: "Dollar Cost Averaging - Investopedia", url: "https://www.investopedia.com/terms/d/dollarcostaveraging.asp" },
              { title: "DCA Strategy - Vanguard", url: "https://investor.vanguard.com/investor-resources-education/education/dollar-cost-averaging" },
              { title: "Automatic Investing - Fidelity", url: "https://www.fidelity.com/mutual-funds/investing-ideas/automatic-investing" },
            ],
          },
          {
            id: "inv-w18-2",
            title: "投资计划制定",
            detail: "根据个人目标、时间框架和风险承受能力，制定涵盖资产配置和再平衡规则的完整投资策略计划。",
            keyPoints: [
              "明确目标：退休、教育、购房等。",
              "确定时间框架和风险承受能力。",
              "选择合适的账户类型和投资工具。",
              "制定书面投资政策声明（IPS）。",
            ],
            resources: [
              { title: "Investment Plan - Investopedia", url: "https://www.investopedia.com/terms/i/investmentpolicy.asp" },
              { title: "IPS Guide - CFA Institute", url: "https://www.cfainstitute.org/en/membership/professional-development/refresher-readings/writing-ips" },
              { title: "Financial Planning - Vanguard", url: "https://investor.vanguard.com/financial-advisor/financial-planning" },
            ],
          },
          {
            id: "inv-w18-3",
            title: "持续学习与调整",
            detail: "建立定期回顾投资组合和记录交易决策的复盘习惯，通过持续学习和反思不断提升投资能力。",
            keyPoints: [
              "定期回顾：至少每季度检视投资组合。",
              "记录投资决策和结果。",
              "从错误中学习：分析失败的投资。",
              "保持阅读：持续跟踪市场和学习新知。",
            ],
            resources: [
              { title: "Investment Review - Morningstar", url: "https://www.morningstar.com/portfolios" },
              { title: "Investment Journal - Investopedia", url: "https://www.investopedia.com/terms/t/tradingjournal.asp" },
              { title: "Continuous Learning - CFA Institute", url: "https://www.cfainstitute.org/en/membership/professional-development" },
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
export const investmentKnowledgeCards: KnowledgeCard[] = [
  {
    id: "inv-kc-1",
    title: "复利法则",
    summary: "复利是财富增长的核心引擎。",
    points: [
      "复利公式：FV = PV × (1 + r)^n",
      "72 法则：72 ÷ 年化收益率 = 翻倍年数",
      "时间是复利最重要的因素",
      "早开始比高收益更重要",
    ],
    practice: "计算如果每月投资 1000 元，年化收益 8%，20 年后的总价值。",
  },
  {
    id: "inv-kc-2",
    title: "风险与收益",
    summary: "高风险高收益是投资的基本定律。",
    points: [
      "风险与收益正相关",
      "股票 > 债券 > 现金（风险和收益）",
      "分散投资降低非系统性风险",
      "不要承担无法承受的风险",
    ],
    practice: "评估自己的风险承受能力，确定股债配置比例。",
  },
  {
    id: "inv-kc-3",
    title: "资产配置",
    summary: "资产配置决定投资组合的大部分收益。",
    points: [
      "战略配置：长期目标驱动",
      "年龄法则：100 - 年龄 = 股票比例",
      "跨资产、跨地域、跨行业分散",
      "定期再平衡维持目标配置",
    ],
    practice: "根据自己的年龄和目标，设计一个资产配置方案。",
  },
  {
    id: "inv-kc-4",
    title: "价值投资核心",
    summary: "以低于内在价值的价格买入优质公司。",
    points: [
      "内在价值 = 未来现金流的折现值",
      "安全边际：买入价 < 内在价值",
      "护城河：可持续的竞争优势",
      "长期持有，让时间发挥作用",
    ],
    practice: "选择一家公司，尝试用 DCF 方法估算其内在价值。",
  },
  {
    id: "inv-kc-5",
    title: "财务报表三表",
    summary: "三张表相互关联，反映公司全貌。",
    points: [
      "资产负债表：资产 = 负债 + 权益",
      "利润表：收入 - 成本 = 利润",
      "现金流量表：经营 + 投资 + 融资",
      "自由现金流 = 经营现金流 - 资本支出",
    ],
    practice: "下载一家上市公司的年报，分析其三张财务报表。",
  },
  {
    id: "inv-kc-6",
    title: "关键估值指标",
    summary: "估值指标帮助判断股价是否合理。",
    points: [
      "P/E：市盈率，股价 / 每股收益",
      "P/B：市净率，股价 / 每股净资产",
      "ROE：净资产收益率，净利润 / 净资产",
      "同行业比较才有意义",
    ],
    practice: "比较同行业三家公司的 P/E 和 ROE，分析差异原因。",
  },
  {
    id: "inv-kc-7",
    title: "技术分析基础",
    summary: "价格图表反映市场参与者的心理。",
    points: [
      "趋势：上升、下降、横盘",
      "支撑与阻力：关键价格水平",
      "量价配合：成交量验证价格变动",
      "技术分析是概率而非确定性",
    ],
    practice: "打开一只股票的日 K 线图，识别趋势和支撑阻力位。",
  },
  {
    id: "inv-kc-8",
    title: "定投策略",
    summary: "定投是普通投资者的最佳策略。",
    points: [
      "美元成本平均法：定期定额投资",
      "高价少买、低价多买，平滑波动",
      "无需预测市场，降低择时风险",
      "自动化执行，避免情绪干扰",
    ],
    practice: "设置一个每月自动投资指数基金的计划。",
  },
]

// ═══════════════════════════════════════════════════════════════
// 考试题目
// ═══════════════════════════════════════════════════════════════
export const investmentExamQuestions: QuizQuestion[] = [
  {
    id: "inv-q1",
    question: "50/30/20 预算法则中，20% 应该用于什么？",
    options: ["必需支出", "个人消费", "储蓄和投资", "娱乐"],
    answer: 2,
    rationale: "50/30/20 法则：50% 必需支出、30% 个人消费、20% 储蓄和投资。",
  },
  {
    id: "inv-q2",
    question: "应急基金应该保持多少个月的生活支出？",
    options: ["1-2 个月", "3-6 个月", "12 个月", "24 个月"],
    answer: 1,
    rationale: "标准建议是保持 3-6 个月的生活必需支出作为应急基金。",
  },
  {
    id: "inv-q3",
    question: "根据 72 法则，年化收益率 8% 需要多少年资产翻倍？",
    options: ["6 年", "8 年", "9 年", "12 年"],
    answer: 2,
    rationale: "72 法则：72 ÷ 8 = 9 年。",
  },
  {
    id: "inv-q4",
    question: "以下哪种风险可以通过分散投资来降低？",
    options: ["市场风险", "系统性风险", "非系统性风险", "通胀风险"],
    answer: 2,
    rationale: "非系统性风险（个别公司风险）可以通过分散投资降低，系统性风险无法通过分散消除。",
  },
  {
    id: "inv-q5",
    question: "ETF 与共同基金的主要区别是？",
    options: ["ETF 费用更高", "ETF 可以像股票一样实时交易", "共同基金更分散", "共同基金没有管理费"],
    answer: 1,
    rationale: "ETF 在交易所上市，可以像股票一样实时买卖，而共同基金只能在收盘后以净值交易。",
  },
  {
    id: "inv-q6",
    question: "以下哪个不是一级市场的活动？",
    options: ["IPO", "配股", "投资者之间买卖股票", "债券发行"],
    answer: 2,
    rationale: "投资者之间买卖已发行的证券发生在二级市场，一级市场是证券首次发行的市场。",
  },
  {
    id: "inv-q7",
    question: "市盈率（P/E）的计算公式是？",
    options: ["股价 / 每股净资产", "股价 / 每股收益", "净利润 / 净资产", "每股收益 / 股价"],
    answer: 1,
    rationale: "市盈率（P/E）= 股价 / 每股收益（EPS）。",
  },
  {
    id: "inv-q8",
    question: "ROE（净资产收益率）衡量的是什么？",
    options: ["资产利用效率", "股东权益的回报率", "销售利润率", "债务偿还能力"],
    answer: 1,
    rationale: "ROE = 净利润 / 股东权益，衡量股东投入资本获得的回报。",
  },
  {
    id: "inv-q9",
    question: "价值投资的核心原则是什么？",
    options: ["追涨杀跌", "以低于内在价值的价格买入", "频繁交易", "只投资成长股"],
    answer: 1,
    rationale: "价值投资的核心是在有安全边际的情况下，以低于内在价值的价格买入。",
  },
  {
    id: "inv-q10",
    question: "自由现金流的计算公式是？",
    options: ["净利润 - 股息", "经营现金流 - 资本支出", "收入 - 成本", "资产 - 负债"],
    answer: 1,
    rationale: "自由现金流 = 经营活动现金流 - 资本支出，表示公司可自由支配的现金。",
  },
  {
    id: "inv-q11",
    question: "K 线图中，阳线表示什么？",
    options: ["收盘价低于开盘价", "收盘价高于开盘价", "价格没有变化", "成交量增加"],
    answer: 1,
    rationale: "阳线表示收盘价高于开盘价，即价格上涨。",
  },
  {
    id: "inv-q12",
    question: "RSI 指标超过 70 通常意味着什么？",
    options: ["超卖", "超买", "趋势开始", "成交量放大"],
    answer: 1,
    rationale: "RSI > 70 通常被视为超买区域，可能预示价格回调。",
  },
  {
    id: "inv-q13",
    question: "头肩顶形态预示什么？",
    options: ["趋势继续上涨", "趋势可能反转下跌", "横盘整理", "成交量放大"],
    answer: 1,
    rationale: "头肩顶是经典的顶部反转形态，预示上涨趋势可能结束并转为下跌。",
  },
  {
    id: "inv-q14",
    question: "现代投资组合理论的核心观点是什么？",
    options: ["集中投资", "分散投资可以在不降低收益的情况下降低风险", "只投资债券", "避免所有风险"],
    answer: 1,
    rationale: "现代投资组合理论表明，通过投资相关性低的资产可以在保持收益的同时降低风险。",
  },
  {
    id: "inv-q15",
    question: "定期定额投资（定投）的主要优势是什么？",
    options: ["保证收益", "降低择时风险", "无需分散投资", "短期获利"],
    answer: 1,
    rationale: "定投通过在不同时点买入，平均成本，降低了单次大额投资的择时风险。",
  },
  {
    id: "inv-q16",
    question: "债券价格与利率的关系是？",
    options: ["正相关", "反相关", "无关", "取决于债券类型"],
    answer: 1,
    rationale: "债券价格与利率呈反向关系：利率上升，债券价格下降；利率下降，债券价格上升。",
  },
  {
    id: "inv-q17",
    question: "以下哪个不属于流动性指标？",
    options: ["流动比率", "速动比率", "资产负债率", "现金比率"],
    answer: 2,
    rationale: "资产负债率是偿债能力/杠杆指标，不是流动性指标。",
  },
  {
    id: "inv-q18",
    question: "Beta 值大于 1 的股票意味着什么？",
    options: ["波动性低于市场", "波动性高于市场", "没有波动性", "与市场完全相同"],
    answer: 1,
    rationale: "Beta > 1 表示股票的波动性高于市场，当市场上涨 1%，该股票预期上涨超过 1%。",
  },
  {
    id: "inv-q19",
    question: "夏普比率衡量的是什么？",
    options: ["总收益率", "每单位风险的超额收益", "最大回撤", "年化波动率"],
    answer: 1,
    rationale: "夏普比率 = (投资收益 - 无风险收益) / 波动率，衡量风险调整后的收益。",
  },
  {
    id: "inv-q20",
    question: "\"不要把所有鸡蛋放在一个篮子里\" 体现的投资原则是？",
    options: ["集中投资", "分散投资", "价值投资", "技术分析"],
    answer: 1,
    rationale: "这句话体现了分散投资的原则，通过投资多个不相关资产降低风险。",
  },
]

// ═══════════════════════════════════════════════════════════════
// 主题定义
// ═══════════════════════════════════════════════════════════════
export const investmentRoadmap: RoadmapDefinition = {
  id: "investment",
  label: "投资",
  title: "投资理财",
  durationLabel: "18 周完整学习路线",
  description:
    "从个人财务基础开始，系统学习投资理论与实践。涵盖预算管理、投资工具、股票市场、基本面分析、技术分析和投资组合管理，帮助你建立完整的投资知识体系和实践能力。",
  heroBadge: "18 周 · 54 主题",
  stages: investmentStages,
  knowledgeCards: investmentKnowledgeCards,
  examQuestions: investmentExamQuestions,
  suggestion: (percent: number) => {
    if (percent === 0) return "开始你的投资学习之旅！先从个人财务基础开始。"
    if (percent < 25) return "继续学习投资基础知识，理解风险与收益的关系。"
    if (percent < 50) return "深入学习股票市场和基本面分析方法。"
    if (percent < 75) return "技术分析和组合管理是进阶技能，继续加油！"
    if (percent < 100) return "即将完成！整合所学知识，建立自己的投资体系。"
    return "恭喜完成！投资是终身学习的旅程，持续实践和学习。"
  },
  resourceGuide: {
    environment:
      "建议开设模拟交易账户进行实践学习。推荐使用 Yahoo Finance、TradingView 等工具跟踪市场和分析股票。",
    fallbackKeyPoints: [
      "复利是财富增长的核心引擎，早开始最重要",
      "风险与收益正相关，不要承担无法承受的风险",
      "分散投资是降低风险的有效方法",
      "价值投资关注内在价值和安全边际",
      "定投是普通投资者的最佳策略",
    ],
    handsOnSteps: [
      "制定个人预算并跟踪一个月的收支",
      "建立 3-6 个月的应急基金",
      "开设证券账户并尝试模拟交易",
      "分析一家公司的财务报表和估值",
      "设置并执行每月定投计划",
    ],
    selfChecks: [
      "能否解释复利和货币时间价值？",
      "能否评估自己的风险承受能力？",
      "能否阅读和分析基本财务报表？",
      "能否使用技术指标分析股票？",
      "能否设计一个适合自己的资产配置方案？",
    ],
    extensions: [
      "考取 CFA 或基金从业资格",
      "深入学习期权和衍生品",
      "学习 Python 进行量化投资分析",
      "研究行为金融学和市场心理学",
    ],
    lessonQuizAdvice: "投资学习需要理论与实践结合，每学完一周内容，尝试在实际市场中应用所学知识。",
  },
}
