import tseslint from "@typescript-eslint/eslint-plugin";
import pluginJs from "eslint-plugin-js";
import pluginReact from "eslint-plugin-react";
import globals from "globals";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "no-console": "warn", // Beispiel: Warnungen bei console.log-Aufrufen
      eqeqeq: "error", // Beispiel: Strikter Vergleich (===) erzwingen
      "@typescript-eslint/explicit-function-return-type": "on",
      "react/react-in-jsx-scope": "on",
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  tseslint.configs.stylisticTypeChecked({
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // Zusätzliche oder überschreibende Regeln für den stylisticTypeChecked-Teil
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ], // Beispiel: Fehler bei ungenutzten Variablen, mit Ausnahme von Argumenten, die mit _ beginnen
      indent: ["error", 4],
      ...React.configs.recommended.rules,
      ...React.configs["jsx-runtime"].rules,
    },
  }),
  pluginReact.configs.flat.recommended,
];
