import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week4Guides: Record<string, LessonGuide> = {
    "jf-w4-1": {
        lessonId: "jf-w4-1",
        background: [
            "【API 设计原则】java.time 包的所有类都是不可变且线程安全的（immutable and thread-safe），解决了旧 Date/Calendar 的线程安全问题。",
            "【LocalDate】处理日期（年月日），不包含时间和时区信息。适用于生日、纪念日等只关心日期的场景。",
            "【LocalTime】处理时间（时分秒纳秒），不包含日期和时区信息。适用于闹钟、营业时间等只关心时间的场景。",
            "【LocalDateTime】组合日期和时间，但不包含时区信息。适用于本地事件时间，如会议时间、航班起飞时间。",
            "【Period vs Duration】Period 表示日期间隔（年/月/日），Duration 表示时间间隔（时/分/秒/纳秒）。Period 用于 LocalDate，Duration 用于 LocalTime/LocalDateTime。"
        ],
        keyDifficulties: [
            "【创建方式】now() 获取当前时间，of(year, month, day) 指定创建，parse(\"2024-01-15\") 从字符串解析。Month 枚举避免月份从 0 开始的问题。",
            "【修改方法返回新对象】plusDays()、minusHours()、withYear() 等方法不修改原对象，而是返回新对象。这是不可变设计的体现。",
            "【链式调用】可以链式修改：localDate.plusDays(1).plusMonths(1).withYear(2025)，每次调用返回新对象。",
            "【比较方法】isBefore()、isAfter()、isEqual() 用于比较。compareTo() 实现 Comparable 接口。不要用 == 比较。"
        ],
        handsOnPath: [
            "创建当前日期时间：LocalDate.now()、LocalTime.now()、LocalDateTime.now();",
            "指定创建：LocalDate.of(2024, Month.JANUARY, 15) 或 LocalDate.of(2024, 1, 15);",
            "从字符串解析：LocalDate.parse(\"2024-01-15\")、LocalTime.parse(\"10:30:00\");",
            "修改日期：date.plusDays(7).minusMonths(1).withYear(2025);",
            "计算间隔：Period.between(startDate, endDate).getYears()、Duration.between(startTime, endTime).toHours();",
            "比较日期：date1.isBefore(date2)、date1.isAfter(date2);"
        ],
        selfCheck: [
            "LocalDate、LocalTime、LocalDateTime 分别表示什么？它们之间如何转换？",
            "为什么 plusDays() 等方法返回新对象而不是修改原对象？",
            "Period 和 Duration 有什么区别？分别用于什么场景？",
            "Month.JANUARY 对应的数值是多少？与旧 Calendar 有什么不同？",
            "如何比较两个 LocalDate？可以用 == 比较吗？"
        ],
        extensions: [
            "学习 YearMonth、MonthDay、Year 等辅助类。",
            "研究 TemporalAdjusters 工具类：获取下个周一、本月最后一天等。",
            "了解 ChronoUnit 枚举：DAYS、MONTHS、YEARS 等时间单位。",
            "探索与旧 API 的互转：Date.toInstant()、LocalDateTime.ofInstant()。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/javase/tutorial/datetime/",
            "https://docs.oracle.com/javase/8/docs/api/java/time/package-summary.html"
        ]
    },
    "jf-w4-2": {
        lessonId: "jf-w4-2",
        background: [
            "【ZonedDateTime】Oracle 文档：Stores a date and time with a time-zone in the ISO-8601 calendar system——完整的日期时间，包含时区信息。格式如 2024-01-15T10:30:00+08:00[Asia/Shanghai]。",
            "【ZoneId】表示时区 ID，如 Asia/Shanghai、America/New_York。ZoneId.systemDefault() 获取系统默认时区，ZoneId.of(\"UTC\") 获取特定时区。",
            "【Instant】Oracle 文档：Represents an instantaneous point on the time-line——时间线上的一个瞬间，本质是自 1970-01-01T00:00:00Z 以来的秒数和纳秒数。与 java.util.Date 最接近。",
            "【ZoneOffset】表示相对于 UTC 的偏移量，如 +08:00。包含的信息比完整时区少（不包含夏令时规则）。",
            "【DateTimeFormatter】线程安全的日期时间格式化器，取代 SimpleDateFormat。提供预定义格式如 ISO_LOCAL_DATE，支持自定义模式。"
        ],
        keyDifficulties: [
            "【时区 vs 偏移量】ZoneId 包含完整时区规则（包括夏令时），ZoneOffset 只是固定偏移量。持久化用 Instant，显示用 ZonedDateTime。",
            "【Instant 转换】Instant 是时区无关的时间戳。通过 ZonedDateTime.ofInstant(instant, zoneId) 转换为特定时区的日期时间。",
            "【格式化与解析】DateTimeFormatter.ofPattern(\"yyyy-MM-dd HH:mm:ss\") 创建自定义格式。format() 格式化，parse() 解析。",
            "【夏令时陷阱】使用 ZoneId 而不是固定偏移量，让系统自动处理夏令时转换。避免手动计算偏移量。"
        ],
        handsOnPath: [
            "创建 ZonedDateTime：ZonedDateTime.now()、ZonedDateTime.of(localDateTime, ZoneId.of(\"Asia/Shanghai\"));",
            "获取时区：ZoneId.systemDefault()、ZoneId.of(\"America/New_York\")、ZoneId.getAvailableZoneIds();",
            "使用 Instant：Instant.now()、instant.toEpochMilli()、Instant.ofEpochMilli(millis);",
            "时区转换：zonedDateTime.withZoneSameInstant(ZoneId.of(\"UTC\"));",
            "格式化日期：DateTimeFormatter.ofPattern(\"yyyy年MM月dd日 HH:mm\").format(localDateTime);",
            "解析日期：LocalDate.parse(\"2024-01-15\", DateTimeFormatter.ISO_LOCAL_DATE);"
        ],
        selfCheck: [
            "ZonedDateTime、ZoneId、ZoneOffset 分别代表什么？",
            "Instant 与 LocalDateTime 有什么区别？什么时候用哪个？",
            "DateTimeFormatter 如何保证线程安全？与 SimpleDateFormat 有什么区别？",
            "为什么推荐使用 ZoneId 而不是 ZoneOffset？",
            "如何将一个时区的时间转换为另一个时区？"
        ],
        extensions: [
            "学习 OffsetDateTime 和 OffsetTime：用于网络协议和数据库访问。",
            "研究 Clock 类：可注入的时间源，方便测试。",
            "了解 java.time.format 包的 DateTimeFormatterBuilder 高级用法。",
            "探索不同日历系统：JapaneseDate、ThaiBuddhistDate 等。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/javase/8/docs/api/java/time/package-summary.html",
            "https://docs.oracle.com/javase/tutorial/datetime/"
        ]
    },
    "jf-w4-3": {
        lessonId: "jf-w4-3",
        background: [
            "【默认方法目的】Oracle 文档：Default methods enable you to add new functionality to interfaces while maintaining binary compatibility——默认方法允许向接口添加新功能同时保持二进制兼容性。",
            "【语法】使用 default 关键字：default void methodName() { /* 实现 */ }。方法隐式为 public。",
            "【接口演进】默认方法解决了接口演进问题：向 Collection 接口添加 forEach()、stream() 等方法，现有实现类无需修改。",
            "【静态方法】接口可以有静态方法：static void helperMethod() { }。通过接口名调用：InterfaceName.helperMethod()。静态方法不被继承。",
            "【Comparator 示例】Comparator 接口展示了默认方法的强大：comparing()、thenComparing()、reversed() 实现流畅的链式调用。"
        ],
        keyDifficulties: [
            "【继承规则】实现类可以：1) 直接继承默认方法 2) 重新声明为抽象 3) 重写默认方法。多接口冲突时必须显式重写。",
            "【与抽象类区别】接口不能有状态（只有 static final 字段），抽象类可以。接口可多实现，抽象类只能单继承。",
            "【钻石问题】当两个接口有同名默认方法时，实现类必须重写该方法解决冲突。可用 InterfaceName.super.method() 调用特定接口的实现。",
            "【设计原则】默认方法适合提供「合理的默认行为」，不适合核心业务逻辑。保持接口简洁，避免过度使用默认方法。"
        ],
        handsOnPath: [
            "定义带默认方法的接口：interface MyInterface { default void greet() { System.out.println(\"Hello\"); } }",
            "实现类重写默认方法：class MyClass implements MyInterface { @Override public void greet() { ... } }",
            "定义接口静态方法：interface Helper { static int calculate(int x) { return x * 2; } }",
            "使用 Comparator 默认方法：Comparator.comparing(Person::getName).thenComparing(Person::getAge).reversed();",
            "解决多接口冲突：InterfaceA.super.method() 调用特定接口的默认方法。"
        ],
        selfCheck: [
            "为什么 Java 8 要引入接口默认方法？解决了什么问题？",
            "接口静态方法与类静态方法有什么区别？静态方法会被继承吗？",
            "当两个接口有同名默认方法时，实现类如何处理？",
            "默认方法与抽象类的抽象方法有什么区别？",
            "Comparator.comparing() 是如何利用默认方法实现链式调用的？"
        ],
        extensions: [
            "研究 Collection 接口在 Java 8 新增的默认方法：forEach()、removeIf()、stream() 等。",
            "学习 Iterable 接口的 forEach() 默认方法实现。",
            "了解接口私有方法（Java 9+）：用于复用默认方法之间的公共代码。",
            "探索函数式接口如何利用默认方法增强功能。"
        ],
        sourceUrls: [
            "https://docs.oracle.com/javase/tutorial/java/IandI/defaultmethods.html",
            "https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html"
        ]
    }
}

export const week4Quizzes: Record<string, QuizQuestion[]> = {
    "jf-w4-1": [
        {
            id: "jf-w4-1-q1",
            question: "java.time 包中的类有什么共同特点？",
            options: [
                "都是可变的",
                "都是不可变且线程安全的",
                "都继承自 Date 类",
                "都需要同步访问"
            ],
            answer: 1,
            rationale: "Oracle 文档：All classes are immutable and thread-safe——java.time 的所有类都是不可变且线程安全的，解决了旧 API 的问题。"
        },
        {
            id: "jf-w4-1-q2",
            question: "LocalDate 表示什么？",
            options: [
                "带时区的完整日期时间",
                "只有日期（年月日），无时间和时区",
                "只有时间（时分秒），无日期",
                "时间戳"
            ],
            answer: 1,
            rationale: "LocalDate 只处理日期（年月日），不包含时间和时区信息。适用于生日、纪念日等场景。"
        },
        {
            id: "jf-w4-1-q3",
            question: "LocalDate.of(2024, 1, 15) 中月份 1 代表几月？",
            options: [
                "二月（从 0 开始）",
                "一月（从 1 开始）",
                "取决于时区",
                "需要使用 Month 枚举"
            ],
            answer: 1,
            rationale: "java.time API 的月份从 1 开始计数，1 就是一月。这修正了旧 Calendar API 月份从 0 开始的反直觉设计。"
        },
        {
            id: "jf-w4-1-q4",
            question: "date.plusDays(7) 会怎样？",
            options: [
                "修改 date 对象，增加 7 天",
                "返回新对象，date 不变",
                "抛出异常",
                "返回 null"
            ],
            answer: 1,
            rationale: "java.time 类是不可变的，plusDays() 返回新对象，原对象不变。这是不可变设计的核心体现。"
        },
        {
            id: "jf-w4-1-q5",
            question: "Period 和 Duration 的区别是什么？",
            options: [
                "Period 表示时间，Duration 表示日期",
                "Period 表示日期间隔（年月日），Duration 表示时间间隔（时分秒）",
                "没有区别",
                "Period 用于过去，Duration 用于未来"
            ],
            answer: 1,
            rationale: "Period 表示日期间隔（年/月/日），Duration 表示时间间隔（时/分/秒/纳秒）。Period 用于 LocalDate，Duration 用于 LocalTime。"
        },
        {
            id: "jf-w4-1-q6",
            question: "如何获取当前日期？",
            options: [
                "new LocalDate()",
                "LocalDate.now()",
                "LocalDate.current()",
                "LocalDate.today()"
            ],
            answer: 1,
            rationale: "LocalDate.now() 获取当前日期。LocalDate 没有公共构造函数，必须使用静态工厂方法。"
        },
        {
            id: "jf-w4-1-q7",
            question: "如何从字符串解析日期？",
            options: [
                "LocalDate.valueOf(\"2024-01-15\")",
                "new LocalDate(\"2024-01-15\")",
                "LocalDate.parse(\"2024-01-15\")",
                "LocalDate.from(\"2024-01-15\")"
            ],
            answer: 2,
            rationale: "LocalDate.parse(\"2024-01-15\") 从 ISO-8601 格式字符串解析日期。可以传入 DateTimeFormatter 解析其他格式。"
        },
        {
            id: "jf-w4-1-q8",
            question: "比较两个 LocalDate 应该用什么方法？",
            options: [
                "使用 == 运算符",
                "使用 isBefore()、isAfter()、isEqual()",
                "使用 compare() 方法",
                "转换为字符串比较"
            ],
            answer: 1,
            rationale: "使用 isBefore()、isAfter()、isEqual() 方法比较日期。不要用 == 比较对象。compareTo() 也可用于排序。"
        },
        {
            id: "jf-w4-1-q9",
            question: "LocalDateTime 包含什么信息？",
            options: [
                "只有日期",
                "只有时间",
                "日期和时间，不含时区",
                "日期、时间和时区"
            ],
            answer: 2,
            rationale: "LocalDateTime 组合日期和时间，但不包含时区信息。适用于本地事件时间，如会议时间。"
        },
        {
            id: "jf-w4-1-q10",
            question: "Month.JANUARY 对应的数值是多少？",
            options: [
                "0",
                "1",
                "取决于地区",
                "需要调用 getValue()"
            ],
            answer: 1,
            rationale: "Month.JANUARY.getValue() 返回 1。java.time 月份从 1 开始，修正了旧 Calendar 从 0 开始的问题。"
        },
        {
            id: "jf-w4-1-q11",
            question: "如何将 LocalDate 和 LocalTime 组合成 LocalDateTime？",
            options: [
                "new LocalDateTime(date, time)",
                "LocalDateTime.of(date, time)",
                "date.combine(time)",
                "date + time"
            ],
            answer: 1,
            rationale: "LocalDateTime.of(LocalDate, LocalTime) 将日期和时间组合成 LocalDateTime。或使用 date.atTime(time)。"
        },
        {
            id: "jf-w4-1-q12",
            question: "TemporalAdjusters 的作用是什么？",
            options: [
                "格式化日期",
                "解析日期字符串",
                "提供日期调整策略，如下个周一、本月最后一天",
                "时区转换"
            ],
            answer: 2,
            rationale: "TemporalAdjusters 提供常用的日期调整策略：nextOrSame(DayOfWeek.MONDAY)、lastDayOfMonth() 等。"
        }
    ],
    "jf-w4-2": [
        {
            id: "jf-w4-2-q1",
            question: "ZonedDateTime 包含什么信息？",
            options: [
                "只有日期和时间",
                "只有时区",
                "日期、时间和完整时区信息",
                "只有时间戳"
            ],
            answer: 2,
            rationale: "Oracle 文档：ZonedDateTime stores a date and time with a time-zone——包含完整的日期时间和时区信息。"
        },
        {
            id: "jf-w4-2-q2",
            question: "Instant 代表什么？",
            options: [
                "本地日期时间",
                "时间线上的一个瞬间（时间戳）",
                "时区",
                "日期间隔"
            ],
            answer: 1,
            rationale: "Oracle 文档：Instant represents an instantaneous point on the time-line——时间线上的一个瞬间，本质是 UTC 时间戳。"
        },
        {
            id: "jf-w4-2-q3",
            question: "ZoneId 和 ZoneOffset 的区别是什么？",
            options: [
                "没有区别",
                "ZoneId 包含完整时区规则（含夏令时），ZoneOffset 只是固定偏移量",
                "ZoneOffset 更详细",
                "ZoneId 只能用于亚洲"
            ],
            answer: 1,
            rationale: "ZoneId 包含完整时区规则（包括夏令时），如 Asia/Shanghai。ZoneOffset 只是固定偏移量，如 +08:00。"
        },
        {
            id: "jf-w4-2-q4",
            question: "DateTimeFormatter 相比 SimpleDateFormat 的优势是什么？",
            options: [
                "功能更少但更快",
                "线程安全，不可变",
                "只能格式化不能解析",
                "只支持英文"
            ],
            answer: 1,
            rationale: "DateTimeFormatter 是线程安全的，可以安全地在多线程环境中共享。SimpleDateFormat 不是线程安全的。"
        },
        {
            id: "jf-w4-2-q5",
            question: "如何获取系统默认时区？",
            options: [
                "ZoneId.getDefault()",
                "ZoneId.systemDefault()",
                "TimeZone.getDefault()",
                "ZoneId.local()"
            ],
            answer: 1,
            rationale: "ZoneId.systemDefault() 返回系统默认时区的 ZoneId。"
        },
        {
            id: "jf-w4-2-q6",
            question: "如何将 Instant 转换为特定时区的 ZonedDateTime？",
            options: [
                "instant.toZonedDateTime(zoneId)",
                "ZonedDateTime.ofInstant(instant, zoneId)",
                "instant.atZone(zoneId) 或 ZonedDateTime.ofInstant(instant, zoneId)",
                "new ZonedDateTime(instant, zoneId)"
            ],
            answer: 2,
            rationale: "可以用 instant.atZone(zoneId) 或 ZonedDateTime.ofInstant(instant, zoneId) 将 Instant 转换为 ZonedDateTime。"
        },
        {
            id: "jf-w4-2-q7",
            question: "持久化时间应该用什么类型？",
            options: [
                "LocalDateTime",
                "ZonedDateTime",
                "Instant",
                "String"
            ],
            answer: 2,
            rationale: "Oracle 文档推荐：Instant useful for logging and persistence of a point in time——Instant 是时区无关的时间戳，最适合持久化。"
        },
        {
            id: "jf-w4-2-q8",
            question: "DateTimeFormatter.ofPattern(\"yyyy-MM-dd\") 中 yyyy 代表什么？",
            options: [
                "两位年份",
                "四位年份",
                "世纪",
                "年份的后两位"
            ],
            answer: 1,
            rationale: "yyyy 代表四位年份，如 2024。yy 代表两位年份。MM 是月份，dd 是日期。"
        },
        {
            id: "jf-w4-2-q9",
            question: "如何将 ZonedDateTime 转换到另一个时区但保持同一时刻？",
            options: [
                "zonedDateTime.withZone(newZoneId)",
                "zonedDateTime.withZoneSameInstant(newZoneId)",
                "zonedDateTime.toZone(newZoneId)",
                "zonedDateTime.changeZone(newZoneId)"
            ],
            answer: 1,
            rationale: "withZoneSameInstant(newZoneId) 保持同一时刻但改变时区显示。withZoneSameLocal 保持本地时间但改变时区。"
        },
        {
            id: "jf-w4-2-q10",
            question: "Instant.now().toEpochMilli() 返回什么？",
            options: [
                "当前日期字符串",
                "自 1970-01-01T00:00:00Z 以来的毫秒数",
                "当前时区",
                "当前秒数"
            ],
            answer: 1,
            rationale: "toEpochMilli() 返回自 Unix 纪元（1970-01-01T00:00:00Z）以来的毫秒数，即时间戳。"
        },
        {
            id: "jf-w4-2-q11",
            question: "为什么推荐使用 ZoneId 而不是 ZoneOffset？",
            options: [
                "ZoneId 更短",
                "ZoneId 包含夏令时规则，自动处理夏令时转换",
                "ZoneOffset 已弃用",
                "ZoneId 性能更好"
            ],
            answer: 1,
            rationale: "ZoneId 包含完整的时区规则，包括夏令时。使用 ZoneId 让系统自动处理夏令时转换，避免手动计算错误。"
        },
        {
            id: "jf-w4-2-q12",
            question: "OffsetDateTime 主要用于什么场景？",
            options: [
                "用户界面显示",
                "网络协议和数据库访问",
                "日志记录",
                "定时任务"
            ],
            answer: 1,
            rationale: "Oracle 文档：OffsetDateTime is intended primarily for network protocols and database access——存储偏移量而非时区名，适合协议和数据库。"
        }
    ],
    "jf-w4-3": [
        {
            id: "jf-w4-3-q1",
            question: "接口默认方法的主要目的是什么？",
            options: [
                "替代抽象类",
                "向接口添加新功能同时保持二进制兼容性",
                "提高性能",
                "简化语法"
            ],
            answer: 1,
            rationale: "Oracle 文档：Default methods enable you to add new functionality to interfaces while maintaining binary compatibility——保持向后兼容的同时演进接口。"
        },
        {
            id: "jf-w4-3-q2",
            question: "默认方法的语法是什么？",
            options: [
                "abstract void method() {}",
                "default void method() {}",
                "virtual void method() {}",
                "impl void method() {}"
            ],
            answer: 1,
            rationale: "使用 default 关键字声明默认方法，并提供方法实现：default void method() { /* 实现 */ }。"
        },
        {
            id: "jf-w4-3-q3",
            question: "接口静态方法与类静态方法的区别是什么？",
            options: [
                "没有区别",
                "接口静态方法不被子接口继承",
                "接口静态方法可以被重写",
                "接口静态方法必须是 public"
            ],
            answer: 1,
            rationale: "接口静态方法不被子接口或实现类继承。只能通过 InterfaceName.staticMethod() 调用。"
        },
        {
            id: "jf-w4-3-q4",
            question: "当两个接口有同名默认方法，实现类必须怎么做？",
            options: [
                "选择其中一个接口",
                "显式重写该方法解决冲突",
                "编译器自动选择",
                "抛出运行时异常"
            ],
            answer: 1,
            rationale: "当多个接口有同名默认方法时，实现类必须显式重写该方法。可用 InterfaceName.super.method() 调用特定实现。"
        },
        {
            id: "jf-w4-3-q5",
            question: "在实现类中如何调用特定接口的默认方法？",
            options: [
                "super.method()",
                "InterfaceName.super.method()",
                "InterfaceName.method()",
                "this.InterfaceName.method()"
            ],
            answer: 1,
            rationale: "使用 InterfaceName.super.method() 调用特定接口的默认方法实现，用于解决多接口冲突。"
        },
        {
            id: "jf-w4-3-q6",
            question: "Comparator.comparing() 是什么类型的方法？",
            options: [
                "实例方法",
                "静态方法",
                "默认方法",
                "抽象方法"
            ],
            answer: 1,
            rationale: "Comparator.comparing() 是静态方法，返回一个 Comparator。用于创建基于某个属性的比较器。"
        },
        {
            id: "jf-w4-3-q7",
            question: "Comparator.thenComparing() 是什么类型的方法？",
            options: [
                "静态方法",
                "抽象方法",
                "默认方法",
                "私有方法"
            ],
            answer: 2,
            rationale: "thenComparing() 是默认方法，允许链式调用添加次要排序条件：comparing(A).thenComparing(B)。"
        },
        {
            id: "jf-w4-3-q8",
            question: "默认方法与抽象类的抽象方法有什么区别？",
            options: [
                "默认方法必须有实现，抽象方法没有实现",
                "抽象方法可以有实现",
                "没有区别",
                "默认方法不能被重写"
            ],
            answer: 0,
            rationale: "默认方法必须提供实现，实现类可选择继承或重写。抽象方法没有实现，子类必须提供实现。"
        },
        {
            id: "jf-w4-3-q9",
            question: "接口可以同时有默认方法和静态方法吗？",
            options: [
                "不可以",
                "可以",
                "只有抽象接口可以",
                "取决于 Java 版本"
            ],
            answer: 1,
            rationale: "Java 8+ 的接口可以同时有抽象方法、默认方法和静态方法。这使接口更加灵活。"
        },
        {
            id: "jf-w4-3-q10",
            question: "Collection 接口的 forEach() 方法是什么类型？",
            options: [
                "抽象方法",
                "静态方法",
                "默认方法",
                "不存在这个方法"
            ],
            answer: 2,
            rationale: "forEach() 是 Iterable 接口（Collection 的父接口）的默认方法，Java 8 添加，现有集合类无需修改即可使用。"
        },
        {
            id: "jf-w4-3-q11",
            question: "Java 9 对接口添加了什么新特性？",
            options: [
                "允许 public 字段",
                "私有方法",
                "构造函数",
                "可变字段"
            ],
            answer: 1,
            rationale: "Java 9 允许接口有私有方法（private），用于复用默认方法之间的公共代码，避免代码重复。"
        },
        {
            id: "jf-w4-3-q12",
            question: "以下哪个是使用默认方法的好理由？",
            options: [
                "实现核心业务逻辑",
                "提供合理的默认行为，允许实现类选择重写",
                "替代所有抽象方法",
                "避免创建抽象类"
            ],
            answer: 1,
            rationale: "默认方法适合提供「合理的默认行为」，不适合核心业务逻辑。保持接口简洁，避免过度使用默认方法。"
        }
    ]
}
