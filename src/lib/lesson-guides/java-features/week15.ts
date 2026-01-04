import type { LessonGuide } from "../types"
import type { QuizQuestion } from "@/lib/types"

export const week15Guides: Record<string, LessonGuide> = {
    "jf-w15-1": {
        lessonId: "jf-w15-1",
        background: [
            "【SequencedCollection】JEP 431：A collection with a clearly established encounter order——有明确遍历顺序的集合。",
            "【首尾访问】JEP 431：getFirst() / getLast() access endpoints——统一的首尾元素访问方法。",
            "【双端操作】JEP 431：addFirst() / addLast() insert at endpoints——在首尾添加元素。",
            "【反向视图】JEP 431：reversed() provides a reverse-ordered view——返回反向顺序的视图。",
            "【Java 21 正式】Sequenced Collections 在 Java 21 成为正式特性（JEP 431）。"
        ],
        keyDifficulties: [
            "【视图语义】reversed() 返回的是视图，不是新集合，修改会反映到原集合。",
            "【UnsupportedOperationException】不可变集合调用 addFirst/addLast 会抛出异常。",
            "【接口层次】SequencedCollection extends Collection，新增顺序相关方法。",
            "【现有类改造】List、Deque、SortedSet 等现在实现 SequencedCollection。"
        ],
        handsOnPath: [
            "获取首尾：list.getFirst(); list.getLast();",
            "添加首尾：list.addFirst(elem); list.addLast(elem);",
            "移除首尾：list.removeFirst(); list.removeLast();",
            "反向视图：list.reversed().forEach(System.out::println);",
            "反向流：list.reversed().stream().forEach(...);",
            "反向迭代：for (var e : list.reversed()) { ... }"
        ],
        selfCheck: [
            "SequencedCollection 解决了什么问题？",
            "getFirst() 和 getLast() 与之前的方法有何区别？",
            "reversed() 返回的是新集合还是视图？",
            "哪些常用集合现在实现了 SequencedCollection？",
            "对不可变集合调用 addFirst() 会怎样？"
        ],
        extensions: [
            "研究 SequencedCollection 在集合框架中的位置。",
            "了解 reversed() 视图的性能特征。",
            "探索 SequencedCollection 与 Stream 的配合。",
            "学习 SequencedCollection 的设计动机。"
        ],
        sourceUrls: [
            "https://openjdk.org/jeps/431",
            "https://dev.java/learn/sequenced-collections/"
        ]
    },
    "jf-w15-2": {
        lessonId: "jf-w15-2",
        background: [
            "【SequencedSet】JEP 431：extends Set and SequencedCollection——有序集合，无重复元素。",
            "【重定位语义】JEP 431：addFirst/addLast repositions if element exists——元素已存在时重定位而非重复。",
            "【SequencedMap】JEP 431：extends Map with entry-level access——有序 Map，支持首尾 Entry 操作。",
            "【Entry 操作】firstEntry()、lastEntry()、pollFirstEntry()、pollLastEntry()。",
            "【现有类改造】LinkedHashSet 现在实现 SequencedSet，LinkedHashMap 实现 SequencedMap。"
        ],
        keyDifficulties: [
            "【重定位】对 SequencedSet 调用 addFirst(existing) 会将元素移到开头，不添加重复。",
            "【视图方法】sequencedKeySet()、sequencedValues()、sequencedEntrySet() 返回有序视图。",
            "【putFirst/putLast】SequencedMap 的 putFirst/putLast 同样有重定位语义。",
            "【poll 操作】pollFirstEntry() 移除并返回首个 Entry，Map 为空时返回 null。"
        ],
        handsOnPath: [
            "SequencedSet：LinkedHashSet<String> set = new LinkedHashSet<>(); set.addFirst(\"a\"); set.getLast();",
            "重定位：set.addLast(existingElement); // 移到末尾",
            "SequencedMap：map.firstEntry(); map.lastEntry();",
            "移除首尾：Entry<K,V> first = map.pollFirstEntry();",
            "有序键集：SequencedSet<K> keys = map.sequencedKeySet();",
            "反向遍历：map.reversed().forEach((k, v) -> ...);"
        ],
        selfCheck: [
            "SequencedSet 与普通 Set 有什么区别？",
            "addFirst() 对已存在元素的处理是什么？",
            "SequencedMap 提供了哪些新方法？",
            "pollFirstEntry() 与 firstEntry() 的区别是什么？",
            "sequencedKeySet() 返回什么？"
        ],
        extensions: [
            "研究 LinkedHashMap 的 accessOrder 与 SequencedMap 的关系。",
            "了解 SequencedSet 在 LRU 缓存中的应用。",
            "探索 SequencedMap 与 NavigableMap 的对比。",
            "学习有序集合在并发场景的注意事项。"
        ],
        sourceUrls: [
            "https://openjdk.org/jeps/431",
            "https://dev.java/learn/sequenced-collections/"
        ]
    },
    "jf-w15-3": {
        lessonId: "jf-w15-3",
        background: [
            "【Collections 工具】Collections 类新增不可变有序集合视图方法。",
            "【unmodifiableSequencedCollection】创建不可修改的 SequencedCollection 视图。",
            "【unmodifiableSequencedSet】创建不可修改的 SequencedSet 视图。",
            "【unmodifiableSequencedMap】创建不可修改的 SequencedMap 视图。",
            "【兼容性】现有集合类的改造保持向后兼容。"
        ],
        keyDifficulties: [
            "【视图语义】unmodifiable 视图不允许修改，但原集合的修改会反映到视图。",
            "【接口层次变化】List 现在 extends SequencedCollection，Deque 也是。",
            "【SortedSet 关系】SortedSet extends SequencedSet，按自然顺序或比较器顺序。",
            "【SortedMap 关系】SortedMap extends SequencedMap，有序 Map 的统一接口。"
        ],
        handsOnPath: [
            "不可变视图：SequencedCollection<String> view = Collections.unmodifiableSequencedCollection(list);",
            "不可变 Set：SequencedSet<String> view = Collections.unmodifiableSequencedSet(set);",
            "不可变 Map：SequencedMap<K,V> view = Collections.unmodifiableSequencedMap(map);",
            "接口层次：List<String> list = ...; SequencedCollection<String> seq = list; // 合法",
            "SortedSet 用法：SortedSet<String> sorted = new TreeSet<>(); sorted.getFirst();",
            "反向 TreeSet：sorted.reversed().forEach(...);"
        ],
        selfCheck: [
            "Collections 类新增了哪些有序集合相关方法？",
            "unmodifiable 视图与原集合的关系是什么？",
            "List 和 SequencedCollection 的关系是什么？",
            "SortedSet 和 SequencedSet 的关系是什么？",
            "如何迁移使用新的 Sequenced 接口？"
        ],
        extensions: [
            "研究集合框架的接口层次变化。",
            "了解 Sequenced Collections 对现有代码的影响。",
            "探索不可变集合与 Sequenced 接口的关系。",
            "学习 Java 21 集合框架的完整变化。"
        ],
        sourceUrls: [
            "https://openjdk.org/jeps/431",
            "https://dev.java/learn/sequenced-collections/"
        ]
    }
}

export const week15Quizzes: Record<string, QuizQuestion[]> = {
    "jf-w15-1": [
        {
            id: "jf-w15-1-q1",
            question: "Sequenced Collections 在哪个 Java 版本成为正式特性？",
            options: [
                "Java 17",
                "Java 19",
                "Java 21",
                "Java 22"
            ],
            answer: 2,
            rationale: "JEP 431 在 Java 21 成为正式特性。"
        },
        {
            id: "jf-w15-1-q2",
            question: "SequencedCollection 解决了什么问题？",
            options: [
                "性能优化",
                "统一有序集合的首尾元素访问方法",
                "线程安全",
                "内存管理"
            ],
            answer: 1,
            rationale: "JEP 431：提供统一的 getFirst/getLast/addFirst/addLast 方法访问有序集合。"
        },
        {
            id: "jf-w15-1-q3",
            question: "reversed() 返回什么？",
            options: [
                "新的集合副本",
                "反向顺序的视图",
                "null",
                "原集合"
            ],
            answer: 1,
            rationale: "JEP 431：reversed() provides a reverse-ordered view——返回视图，不是新集合。"
        },
        {
            id: "jf-w15-1-q4",
            question: "对 reversed() 视图的修改会怎样？",
            options: [
                "不影响原集合",
                "反映到原集合",
                "抛出异常",
                "静默忽略"
            ],
            answer: 1,
            rationale: "reversed() 返回的是视图，修改视图会反映到原集合。"
        },
        {
            id: "jf-w15-1-q5",
            question: "SequencedCollection 继承自什么接口？",
            options: [
                "List",
                "Set",
                "Collection",
                "Iterable"
            ],
            answer: 2,
            rationale: "SequencedCollection extends Collection，新增顺序相关方法。"
        },
        {
            id: "jf-w15-1-q6",
            question: "如何获取反向流？",
            options: [
                "list.stream().reverse()",
                "list.reversed().stream()",
                "Stream.reverse(list)",
                "list.reverseStream()"
            ],
            answer: 1,
            rationale: "JEP 431：使用 list.reversed().stream() 获取反向流。"
        },
        {
            id: "jf-w15-1-q7",
            question: "对不可变集合调用 addFirst() 会怎样？",
            options: [
                "成功添加",
                "抛出 UnsupportedOperationException",
                "返回 false",
                "静默忽略"
            ],
            answer: 1,
            rationale: "不可变集合不支持修改操作，调用 addFirst() 会抛出异常。"
        },
        {
            id: "jf-w15-1-q8",
            question: "以下哪个集合现在实现了 SequencedCollection？",
            options: [
                "HashSet",
                "ArrayList",
                "HashMap",
                "TreeMap"
            ],
            answer: 1,
            rationale: "ArrayList 实现 List，List 现在 extends SequencedCollection。"
        },
        {
            id: "jf-w15-1-q9",
            question: "getFirst() 在空集合上调用会怎样？",
            options: [
                "返回 null",
                "抛出 NoSuchElementException",
                "返回默认值",
                "阻塞等待"
            ],
            answer: 1,
            rationale: "空集合调用 getFirst() 会抛出 NoSuchElementException。"
        },
        {
            id: "jf-w15-1-q10",
            question: "removeFirst() 的作用是什么？",
            options: [
                "返回第一个元素",
                "移除并返回第一个元素",
                "清空集合",
                "移动第一个元素"
            ],
            answer: 1,
            rationale: "removeFirst() 移除并返回集合的第一个元素。"
        },
        {
            id: "jf-w15-1-q11",
            question: "SequencedCollection 的核心理念是什么？",
            options: [
                "高性能",
                "有明确的遍历顺序和首尾访问",
                "线程安全",
                "不可变性"
            ],
            answer: 1,
            rationale: "JEP 431：A collection with a clearly established encounter order。"
        },
        {
            id: "jf-w15-1-q12",
            question: "reversed() 的时间复杂度通常是什么？",
            options: [
                "O(n) - 需要复制",
                "O(1) - 只创建视图",
                "O(log n)",
                "O(n²)"
            ],
            answer: 1,
            rationale: "reversed() 只创建视图，不复制元素，时间复杂度 O(1)。"
        }
    ],
    "jf-w15-2": [
        {
            id: "jf-w15-2-q1",
            question: "SequencedSet 继承自哪些接口？",
            options: [
                "只有 Set",
                "Set 和 SequencedCollection",
                "只有 SequencedCollection",
                "List 和 Set"
            ],
            answer: 1,
            rationale: "JEP 431：SequencedSet extends Set and SequencedCollection。"
        },
        {
            id: "jf-w15-2-q2",
            question: "对 SequencedSet 调用 addFirst(existingElement) 会怎样？",
            options: [
                "抛出异常",
                "元素重定位到开头",
                "添加重复元素",
                "静默忽略"
            ],
            answer: 1,
            rationale: "JEP 431：addFirst/addLast repositions if element exists——重定位而非重复。"
        },
        {
            id: "jf-w15-2-q3",
            question: "SequencedMap 的 firstEntry() 返回什么？",
            options: [
                "第一个键",
                "第一个值",
                "第一个 Entry",
                "null"
            ],
            answer: 2,
            rationale: "firstEntry() 返回 Map 中的第一个 Entry（键值对）。"
        },
        {
            id: "jf-w15-2-q4",
            question: "pollFirstEntry() 与 firstEntry() 的区别是什么？",
            options: [
                "没有区别",
                "pollFirstEntry 移除并返回，firstEntry 只返回",
                "pollFirstEntry 更快",
                "pollFirstEntry 返回 Optional"
            ],
            answer: 1,
            rationale: "pollFirstEntry() 移除并返回第一个 Entry，firstEntry() 只返回不移除。"
        },
        {
            id: "jf-w15-2-q5",
            question: "哪个集合类现在实现了 SequencedSet？",
            options: [
                "HashSet",
                "LinkedHashSet",
                "TreeSet（通过 SortedSet）",
                "B 和 C 都是"
            ],
            answer: 3,
            rationale: "LinkedHashSet 实现 SequencedSet，TreeSet 通过 SortedSet extends SequencedSet。"
        },
        {
            id: "jf-w15-2-q6",
            question: "sequencedKeySet() 返回什么类型？",
            options: [
                "Set<K>",
                "SequencedSet<K>",
                "List<K>",
                "Collection<K>"
            ],
            answer: 1,
            rationale: "sequencedKeySet() 返回 SequencedSet<K>，保持键的顺序。"
        },
        {
            id: "jf-w15-2-q7",
            question: "哪个集合类现在实现了 SequencedMap？",
            options: [
                "HashMap",
                "LinkedHashMap",
                "TreeMap（通过 SortedMap）",
                "B 和 C 都是"
            ],
            answer: 3,
            rationale: "LinkedHashMap 实现 SequencedMap，TreeMap 通过 SortedMap extends SequencedMap。"
        },
        {
            id: "jf-w15-2-q8",
            question: "putFirst(key, value) 对已存在键的处理是什么？",
            options: [
                "抛出异常",
                "更新值并重定位到开头",
                "忽略",
                "创建重复键"
            ],
            answer: 1,
            rationale: "putFirst 更新已存在键的值，并将该 Entry 重定位到开头。"
        },
        {
            id: "jf-w15-2-q9",
            question: "空 Map 调用 pollFirstEntry() 返回什么？",
            options: [
                "抛出异常",
                "null",
                "空 Entry",
                "默认 Entry"
            ],
            answer: 1,
            rationale: "空 Map 调用 pollFirstEntry() 返回 null。"
        },
        {
            id: "jf-w15-2-q10",
            question: "SequencedSet 在 LRU 缓存中有什么用途？",
            options: [
                "没有用途",
                "addLast 可以将访问的元素移到末尾，表示最近使用",
                "加速查找",
                "减少内存"
            ],
            answer: 1,
            rationale: "重定位语义使 SequencedSet 适合实现 LRU：访问时 addLast 移到末尾。"
        },
        {
            id: "jf-w15-2-q11",
            question: "sequencedValues() 返回什么？",
            options: [
                "SequencedSet<V>",
                "SequencedCollection<V>",
                "List<V>",
                "Set<V>"
            ],
            answer: 1,
            rationale: "sequencedValues() 返回 SequencedCollection<V>（值可能重复，所以不是 Set）。"
        },
        {
            id: "jf-w15-2-q12",
            question: "如何反向遍历 LinkedHashMap？",
            options: [
                "无法反向遍历",
                "map.reversed().forEach((k, v) -> ...)",
                "new ReverseIterator(map)",
                "Collections.reverse(map)"
            ],
            answer: 1,
            rationale: "使用 reversed() 获取反向视图，然后 forEach 遍历。"
        }
    ],
    "jf-w15-3": [
        {
            id: "jf-w15-3-q1",
            question: "Collections.unmodifiableSequencedCollection() 返回什么？",
            options: [
                "新的可修改集合",
                "不可修改的 SequencedCollection 视图",
                "null",
                "原集合的副本"
            ],
            answer: 1,
            rationale: "返回不可修改的视图，尝试修改会抛出 UnsupportedOperationException。"
        },
        {
            id: "jf-w15-3-q2",
            question: "unmodifiable 视图与原集合的关系是什么？",
            options: [
                "完全独立",
                "原集合的修改会反映到视图",
                "视图的修改会反映到原集合",
                "互相独立"
            ],
            answer: 1,
            rationale: "视图不允许修改，但原集合的修改会反映到视图。"
        },
        {
            id: "jf-w15-3-q3",
            question: "Java 21 中 List 接口现在继承什么？",
            options: [
                "只有 Collection",
                "SequencedCollection",
                "SequencedSet",
                "SequencedMap"
            ],
            answer: 1,
            rationale: "List 现在 extends SequencedCollection，获得 getFirst/getLast 等方法。"
        },
        {
            id: "jf-w15-3-q4",
            question: "SortedSet 与 SequencedSet 的关系是什么？",
            options: [
                "无关",
                "SortedSet extends SequencedSet",
                "SequencedSet extends SortedSet",
                "相同接口"
            ],
            answer: 1,
            rationale: "SortedSet extends SequencedSet，按自然顺序或比较器顺序。"
        },
        {
            id: "jf-w15-3-q5",
            question: "SortedMap 与 SequencedMap 的关系是什么？",
            options: [
                "无关",
                "SortedMap extends SequencedMap",
                "SequencedMap extends SortedMap",
                "相同接口"
            ],
            answer: 1,
            rationale: "SortedMap extends SequencedMap，有序 Map 的统一接口。"
        },
        {
            id: "jf-w15-3-q6",
            question: "Deque 与 SequencedCollection 的关系是什么？",
            options: [
                "无关",
                "Deque extends SequencedCollection",
                "SequencedCollection extends Deque",
                "相同接口"
            ],
            answer: 1,
            rationale: "Deque extends SequencedCollection，双端队列天然有序。"
        },
        {
            id: "jf-w15-3-q7",
            question: "如何创建不可修改的 SequencedSet？",
            options: [
                "new UnmodifiableSequencedSet(set)",
                "Collections.unmodifiableSequencedSet(set)",
                "set.unmodifiable()",
                "SequencedSet.of(set)"
            ],
            answer: 1,
            rationale: "使用 Collections.unmodifiableSequencedSet(set) 创建不可修改视图。"
        },
        {
            id: "jf-w15-3-q8",
            question: "TreeSet 现在支持什么新方法？",
            options: [
                "没有新方法",
                "getFirst/getLast/reversed 等",
                "只有 reversed",
                "只有 getFirst"
            ],
            answer: 1,
            rationale: "TreeSet 通过 SortedSet extends SequencedSet 获得所有 Sequenced 方法。"
        },
        {
            id: "jf-w15-3-q9",
            question: "接口层次变化对现有代码有什么影响？",
            options: [
                "必须重写代码",
                "保持向后兼容，现有代码无需修改",
                "需要重新编译",
                "会抛出异常"
            ],
            answer: 1,
            rationale: "接口层次变化保持向后兼容，现有代码可以使用新方法但不是必须。"
        },
        {
            id: "jf-w15-3-q10",
            question: "如何将 List 作为 SequencedCollection 使用？",
            options: [
                "需要强制转换",
                "直接赋值：SequencedCollection<E> seq = list;",
                "需要包装",
                "不可能"
            ],
            answer: 1,
            rationale: "List extends SequencedCollection，可以直接赋值给 SequencedCollection 变量。"
        },
        {
            id: "jf-w15-3-q11",
            question: "NavigableSet 与 SequencedSet 的关系是什么？",
            options: [
                "无关",
                "NavigableSet extends SortedSet extends SequencedSet",
                "相同接口",
                "NavigableSet extends SequencedSet 直接"
            ],
            answer: 1,
            rationale: "NavigableSet extends SortedSet，SortedSet extends SequencedSet，形成层次。"
        },
        {
            id: "jf-w15-3-q12",
            question: "Sequenced Collections 的主要设计目标是什么？",
            options: [
                "提高性能",
                "统一有序集合的 API，消除历史不一致",
                "增加并发支持",
                "减少内存使用"
            ],
            answer: 1,
            rationale: "JEP 431 的目标是统一有序集合的首尾访问 API，消除 List/Deque/SortedSet 的不一致。"
        }
    ]
}
