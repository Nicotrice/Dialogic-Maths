const MATH_DATABASE = {
  version: "1.2.1",
  motd:"Keep testing Lvl 1 for me. Lvl 2 coming soon 🎉",

1: {
    targetTime: 120,
    questions: [
      {
        id: "N0100",
        template: "{{a}} + {{b}} = ?",
        vars: { a: { min: 1, max: 19 }, b: { min: 1, max: 19 } },
        answer: "a + b"
      },
      {
        id: "N0101",
        template: "{{a}} + {{b}} = ?",
        vars: { a: { min: 21, max: 99 }, b: { min: 21, max: 99 } },
        logic: "(a % 10) + (b % 10) <= 10",
        answer: "a + b"
      },
      {
        id: "N0102",
        template: "{{a}} + {{b}} = ?",
        vars: { a: { min: 21, max: 99 }, b: { min: 21, max: 99 } },
        logic: "(a % 10) + (b % 10) > 10",
        answer: "a + b"
      },
      {
        id: "N0103",
        template: "{{a}} + {{b}} + {{c_var}} = ?",
        vars: { a: { min: 1, max: 9 }, b: { min: 1, max: 9 }, c_var: { min: 1, max: 9 } },
        answer: "a + b + c_var"
      },
      {
        id: "N0104",
        template: "{{a}} - ? = {{b}}",
        vars: { a: { min: 1, max: 19 }, b: { min: 1, max: 19 } },
        logic: "a > b",
        answer: "a - b"
      },
      {
        id: "N0200",
        template: "{{a}} - {{b}} = ?",
        vars: { a: { min: 1, max: 29 }, b: { min: 1, max: 29 } },
        logic: "a > b",
        answer: "a - b"
      },
      {
        id: "N0201",
        template: "{{a}} - {{b}} = ?",
        vars: { a: { min: 21, max: 99 }, b: { min: 21, max: 99 } },
        logic: "(a % 10) > (b % 10) && a > b",
        answer: "a - b"
      },
      {
        id: "N0202",
        template: "{{a}} + ? = {{b}}",
        vars: { a: { min: 1, max: 19 }, b: { min: 1, max: 19 } },
        logic: "a < b",
        answer: "b - a"
      },
      {
        id: "N0203",
        template: "{{a}} - {{b}} - {{c_var}} = ?",
        vars: { a: { min: 1, max: 9 }, b: { min: 1, max: 9 }, c_var: { min: 1, max: 9 } },
        logic: "(a - b) > 0 && (a - b) > c_var",
        answer: "a - b - c_var"
      },
      {
        id: "N0300",
        template: "{{a}} + {{b}} - {{c_var}} = ?",
        vars: { a: { min: 1, max: 9 }, b: { min: 1, max: 9 }, c_var: { min: 1, max: 9 } },
        logic: "a + b > c_var",
        answer: "a + b - c_var"
      },
      {
        id: "N0301",
        template: "{{a}} - {{b}} + {{c_var}} = ?",
        vars: { a: { min: 1, max: 9 }, b: { min: 1, max: 9 }, c_var: { min: 1, max: 9 } },
        logic: "a - b > 0",
        answer: "a - b + c_var"
      },
      {
        id: "N0400",
        template: "{{a}} \\times {{b}} = ?",
        vars: { a: { min: 1, max: 14 }, b: { min: 1, max: 14 } },
        answer: "a * b"
      },
      {
        id: "N0401",
        template: "{{a}}^2 = ?",
        vars: { a: { min: 1, max: 14 } },
        answer: "a * a"
      },
      {
        id: "N0402",
        template: "{{a}}^3 = ?",
        vars: { a: { min: 1, max: 9 } },
        answer: "a * a * a"
      },
      {
        id: "N0403",
        template: "{{a}}^0 = ?",
        vars: { a: { min: 1, max: 19 } },
        answer: "1"
      },
      {
        id: "N0404",
        template: "{{a}}^1 = ?",
        vars: { a: { min: 1, max: 19 } },
        answer: "a"
      },
      {
        id: "N0500",
        template: "{{c}} \\div {{b}} = ?",
        vars: { b: { min: 3, max: 9 }, x: { min: 5, max: 25 } },
        generateC: "b * x",
        answer: "x"
      },
      {
        id: "N0501",
        template: "{{c}} \\div {{b}} = ?",
        vars: { b: { min: 11, max: 14 }, x: { min: 2, max: 12 } },
        generateC: "b * x",
        answer: "x"
      },
      {
        id: "N0600",
        template: "\\sqrt{ {{c}} } = ?",
        vars: { x: { min: 2, max: 12 } },
        generateC: "x * x",
        answer: "x"
      }
    ]
  },

  2: {
    targetTime: 90,
    questions: [
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

