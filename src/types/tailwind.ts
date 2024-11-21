// Based on Tailwind CSS v3.0.23

// Requires TypeScript 4.1 or later (Template Literal Types)
// Reference https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#template-literal-types

type Name =
  | "amber"
  | "blue"
  | "cyan"
  | "emerald"
  | "fuchsia"
  | "gray"
  | "green"
  | "indigo"
  | "lime"
  | "neutral"
  | "orange"
  | "pink"
  | "purple"
  | "red"
  | "rose"
  | "sky"
  | "slate"
  | "stone"
  | "teal"
  | "violet"
  | "yellow"
  | "zinc";

type Level = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

type Color =
  | `${Name}-${Level}`
  | "inherit"
  | "current"
  | "transparent"
  | "black"
  | "white";

export type BackgroundColor = `bg-${Color}`;

export type TextColor = `text-${Color}`;
