'use strict';

const utils = require('@typescript-eslint/utils');

const createEslintRule = utils.ESLintUtils.RuleCreator(
  (ruleName) => ruleName
);

const RULE_NAME$3 = "generic-spacing";
const genericSpacing = createEslintRule({
  name: RULE_NAME$3,
  meta: {
    type: "suggestion",
    docs: {
      description: "Spaces around generic type parameters",
      recommended: "error"
    },
    fixable: "code",
    schema: [],
    messages: {
      genericSpacingMismatch: "Generic spaces mismatch"
    }
  },
  defaultOptions: [],
  create: (context) => {
    const sourceCode = context.getSourceCode();
    return {
      TSTypeParameterDeclaration: (node) => {
        if (!["TSCallSignatureDeclaration", "ArrowFunctionExpression", "TSFunctionType"].includes(node.parent.type)) {
          const pre = sourceCode.text.slice(0, node.range[0]);
          const preSpace = pre.match(/(\s+)$/)?.[0];
          if (preSpace && preSpace.length) {
            context.report({
              node,
              messageId: "genericSpacingMismatch",
              *fix(fixer) {
                yield fixer.replaceTextRange([node.range[0] - preSpace.length, node.range[0]], "");
              }
            });
          }
        }
        const params = node.params;
        for (let i = 1; i < params.length; i++) {
          const prev = params[i - 1];
          const current = params[i];
          const from = prev.range[1];
          const to = current.range[0];
          const span = sourceCode.text.slice(from, to);
          if (span !== ", " && !span.match(/,\n/)) {
            context.report({
              *fix(fixer) {
                yield fixer.replaceTextRange([from, to], ", ");
              },
              loc: {
                start: prev.loc.end,
                end: current.loc.start
              },
              messageId: "genericSpacingMismatch",
              node
            });
          }
        }
      },
      TSTypeParameter: (node) => {
        if (!node.default)
          return;
        const endNode = node.constraint || node.name;
        const from = endNode.range[1];
        const to = node.default.range[0];
        if (sourceCode.text.slice(from, to) !== " = ") {
          context.report({
            *fix(fixer) {
              yield fixer.replaceTextRange([from, to], " = ");
            },
            loc: {
              start: endNode.loc.end,
              end: node.default.loc.start
            },
            messageId: "genericSpacingMismatch",
            node
          });
        }
      }
    };
  }
});

const RULE_NAME$2 = "if-newline";
const ifNewline = createEslintRule({
  name: RULE_NAME$2,
  meta: {
    type: "problem",
    docs: {
      description: "Newline after if",
      recommended: "error"
    },
    fixable: "code",
    schema: [],
    messages: {
      missingIfNewline: "Expect newline after if"
    }
  },
  defaultOptions: [],
  create: (context) => {
    return {
      IfStatement(node) {
        if (!node.consequent)
          return;
        if (node.consequent.type === "BlockStatement")
          return;
        if (node.test.loc.end.line === node.consequent.loc.start.line) {
          context.report({
            node,
            loc: {
              start: node.test.loc.end,
              end: node.consequent.loc.start
            },
            messageId: "missingIfNewline",
            fix(fixer) {
              return fixer.replaceTextRange([node.consequent.range[0], node.consequent.range[0]], "\n");
            }
          });
        }
      }
    };
  }
});

const RULE_NAME$1 = "import-dedupe";
const importDedupe = createEslintRule({
  name: RULE_NAME$1,
  meta: {
    type: "problem",
    docs: {
      description: "Fix duplication in imports",
      recommended: "error"
    },
    fixable: "code",
    schema: [],
    messages: {
      importDedupe: "Expect no duplication in imports"
    }
  },
  defaultOptions: [],
  create: (context) => {
    return {
      ImportDeclaration(node) {
        if (node.specifiers.length <= 1)
          return;
        const names = /* @__PURE__ */ new Set();
        node.specifiers.forEach((n) => {
          const id = n.local.name;
          if (names.has(id)) {
            context.report({
              node,
              loc: {
                start: n.loc.end,
                end: n.loc.start
              },
              messageId: "importDedupe",
              fix(fixer) {
                const s = n.range[0];
                let e = n.range[1];
                if (context.getSourceCode().text[e] === ",")
                  e += 1;
                return fixer.removeRange([s, e]);
              }
            });
          }
          names.add(id);
        });
      }
    };
  }
});

const RULE_NAME = "prefer-inline-type-import";
const preferInlineTypeImport = createEslintRule({
  name: RULE_NAME,
  meta: {
    type: "suggestion",
    docs: {
      description: "Newline after if",
      recommended: "error"
    },
    fixable: "code",
    schema: [],
    messages: {
      preferInlineTypeImport: "Prefer inline type import"
    }
  },
  defaultOptions: [],
  create: (context) => {
    const sourceCode = context.getSourceCode();
    return {
      ImportDeclaration: (node) => {
        if (node.specifiers.length === 1 && ["ImportNamespaceSpecifier", "ImportDefaultSpecifier"].includes(node.specifiers[0].type))
          return;
        if (node.importKind === "type") {
          context.report({
            *fix(fixer) {
              yield* removeTypeSpecifier(fixer, sourceCode, node);
              for (const specifier of node.specifiers)
                yield fixer.insertTextBefore(specifier, "type ");
            },
            loc: node.loc,
            messageId: "preferInlineTypeImport",
            node
          });
        }
      }
    };
  }
});
function* removeTypeSpecifier(fixer, sourceCode, node) {
  const importKeyword = sourceCode.getFirstToken(node);
  const typeIdentifier = sourceCode.getTokenAfter(importKeyword);
  yield fixer.remove(typeIdentifier);
  if (importKeyword.loc.end.column + 1 === typeIdentifier.loc.start.column) {
    yield fixer.removeRange([
      importKeyword.range[1],
      importKeyword.range[1] + 1
    ]);
  }
}

const index = {
  rules: {
    "if-newline": ifNewline,
    "import-dedupe": importDedupe,
    "prefer-inline-type-import": preferInlineTypeImport,
    "generic-spacing": genericSpacing
  }
};

module.exports = index;
