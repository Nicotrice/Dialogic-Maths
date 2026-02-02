const MATH_LISTS = {
    squares: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144],
    cubes: [1, 8, 27, 64, 125, 216, 343, 512, 729, 1000],
    smallprimes: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47],
    multipleof3: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60],
    multipleof4: [4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80],
    multipleof5: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
    multipleof10: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
    // New list for guaranteed a > b subtractions for Level 1 mental math
    subtraction_pairs: [
        {a: 10, b: 3}, {a: 15, b: 7}, {a: 20, b: 12}, {a: 25, b: 9}, {a: 30, b: 14},
        {a: 12, b: 5}, {a: 18, b: 6}, {a: 22, b: 11}, {a: 28, b: 13}, {a: 35, b: 20},
        {a: 14, b: 8}, {a: 19, b: 4}, {a: 21, b: 15}, {a: 27, b: 10}, {a: 33, b: 17}
    ],
    units_digit_0_to_5: [1, 2, 3, 4, 5, 10, 11, 12, 13, 14, 15, 20, 21, 22, 23, 24, 25, 30, 31, 32, 33, 34, 35]
};

const MATH_DATABASE = {
    version: "1.2.2",
    motd: "Level 1 optimized for mental math with new target time! Complex addition moved to Level 2. 🚀",

    1: {
        targetTime: 60,
        questions: [
            {
                // Addition - Small Numbers
                id: "N0100",
                template: "{{a}} + {{b}} = ?",
                vars: { a: { min: 1, max: 19 }, b: { min: 1, max: 19 } },
                answer: "a + b"
            },
            {
                // Addition - Mental Large Numbers (Low units digits to prevent heavy carrying)
                id: "N0101",
                template: "{{a}} + {{b}} = ?",
                vars: { a: { list: "units_digit_0_to_5" }, b: { list: "units_digit_0_to_5" } },
                answer: "a + b"
            },
            {
                // Addition - 3 Variable Addition - Mental
                id: "N0103",
                template: "{{a}} + {{b}} + {{c_var}} = ?",
                vars: { a: { min: 1, max: 9 }, b: { min: 1, max: 9 }, c_var: { min: 1, max: 9 } },
                answer: "a + b + c_var"
            },
            {
                // Subtraction - Mental Subtraction (Guaranteed positive results)
                id: "N0104",
                template: "{{a}} - ? = {{b}}",
                vars: { pair: { list: "subtraction_pairs" } },
                generateVarsFromPair: true, 
                answer: "a - b"
            },
            {
                // Subtraction - Simple result
                id: "N0200",
                template: "{{a}} - {{b}} = ?",
                vars: { pair: { list: "subtraction_pairs" } },
                generateVarsFromPair: true,
                answer: "a - b"
            },
            {
                // Basic Multiplication (Foundational)
                id: "N0400",
                template: "{{a}} \\times {{b}} = ?",
                vars: { a: { min: 1, max: 12 }, b: { min: 1, max: 5 } },
                answer: "a * b"
            },
            {
                // Square Roots (Using list for whole numbers)
                id: "N0600",
                template: "\\sqrt{ {{c}} } = ?",
                vars: { c: { list: "squares" } },
                answer: "Math.sqrt(c)"
            },
            {
                // Division (Using list for clean results)
                id: "N0500",
                template: "{{c}} \\div 5 = ?",
                vars: { c: { list: "multipleof5" } },
                answer: "c / 5"
            }
        ]
    },

    2: {
        targetTime: 120,
        questions: [
            {
                // Addition - Column Addition (Forced Carry)
                id: "N0102",
                template: "{{a}} + {{b}} = ?",
                vars: { a: { min: 21, max: 99 }, b: { min: 21, max: 99 } },
                logic: "(a % 10) + (b % 10) > 10",
                answer: "a + b"
            },
            {
                // Subtraction - Borrowing
                id: "N0201",
                template: "{{a}} - {{b}} = ?",
                vars: { a: { min: 21, max: 99 }, b: { min: 21, max: 99 } },
                logic: "(a % 10) < (b % 10) && a > b",
                answer: "a - b"
            },
            {
                id: "M201",
                template: "{{a}} \\times {{b}} = ?",
                vars: { a: { min: 2, max: 12 }, b: { min: 2, max: 12 } },
                answer: "a * b"
            },
            {
                id: "D202",
                template: "{{c}} \\div {{a}} = ?",
                vars: { a: { min: 2, max: 10 }, x: { min: 2, max: 10 } },
                answer: "x",
                generateC: "a * x"
            }
        ]
    },

    3: {
        targetTime: 120,
        questions: [
            {
                id: "X301",
                template: "x + {{a}} = {{c}}",
                vars: { a: { min: 5, max: 25 }, x: { min: 1, max: 40 } },
                answer: "x",
                generateC: "a + x"
            },
            {
                id: "X302",
                template: "{{a}}x = {{c}}",
                vars: { a: { min: 2, max: 10 }, x: { min: 2, max: 12 } },
                answer: "x",
                generateC: "a * x"
            }
        ]
    },

    4: {
        targetTime: 180,
        questions: [
            {
                id: "X401",
                template: "{{a}}(x + {{b}}) = {{c}}",
                vars: { a: { min: 2, max: 5 }, x: { min: 1, max: 10 }, b: { min: 1, max: 6 } },
                answer: "x",
                generateC: "a * (x + b)"
            },
            {
                id: "X402",
                template: "{{a}}x - {{b}} = {{c}}",
                vars: { a: { min: 3, max: 7 }, x: { min: 2, max: 10 }, b: { min: 5, max: 15 } },
                answer: "x",
                generateC: "a * x - b"
            }
        ]
    },

    5: {
        targetTime: 240,
        questions: [
            {
                id: "X501",
                template: "{{a}}x + {{b}} = {{d}}x + {{c}}",
                vars: { a: { min: 6, max: 10 }, d: { min: 2, max: 5 }, x: { min: 1, max: 8 }, b: { min: 1, max: 10 } },
                answer: "x",
                generateC: "(a * x + b) - (d * x)"
            }
        ]
    },

    ...Object.fromEntries([6, 7, 8, 9, 10].map(lvl => [
        lvl, {
            targetTime: 300,
            questions: [{
                id: `P${lvl}01`,
                template: `Lvl ${lvl} Placeholder`,
                vars: { a: { min: 1, max: 1 }, b: { min: 1, max: 1 } },
                answer: "a + b"
            }]
        }
    ]))
};
