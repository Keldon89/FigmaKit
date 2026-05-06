# PrimeReact Kit — General Guidelines

This kit provides a complete set of UI components powered by **PrimeReact v10**. Always use PrimeReact components instead of native HTML elements or Tailwind-only solutions.

## General Rules

- Always wrap the root of any app in `<PrimeReactProvider>` from `primereact/api`
- Import each component directly from its own subpath: `import { Button } from 'primereact/button'`
- Never import from `primereact` root barrel — always use the subpath
- Use `severity` prop for semantic color variants (e.g. `severity="success"`, `severity="danger"`)
- Use Tailwind only for **layout** (flex, grid, gap, padding, margin). Never override PrimeReact component internals with Tailwind classes
- Prefer `outlined`, `text`, and `raised` props over custom CSS for button variants
- Use `size="large"` or `size="small"` props instead of custom font-size overrides
- Never hardcode colors — always use PrimeReact severity system or CSS variables (e.g. `var(--primary-color)`)
- Use `className` only to add layout spacing around a component, not to restyle its internals

## Theming

The active theme is **Lara Light Blue** (`primereact/resources/themes/lara-light-blue/theme.css`).
Do not switch themes at runtime unless explicitly requested.

## Icons

Use **PrimeIcons** via the `icon` prop: `icon="pi pi-check"`. Full icon list at https://primereact.org/icons.
Do not use lucide-react or other icon libraries unless there is no PrimeIcon equivalent.

## Forms

- Use `react-hook-form` for form state management
- Pair each input with a `<label>` element
- Use the `invalid` prop on inputs to show error state — never use custom red borders
- Use `FloatLabel` wrapper when floating labels are needed

## Responsive

- Use Tailwind flex/grid for responsive layout
- PrimeReact components are inherently responsive — do not restrict their width unless needed
- Use `fluid` prop on inputs/buttons when they should take full width
