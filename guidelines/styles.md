# PrimeReact Style Guidelines

## Layout

- Use **Tailwind flex/grid** for page layout and component arrangement
- PrimeReact components manage their own internal layout — do not nest Tailwind inside component internals
- Default container max-width: `max-w-6xl mx-auto`
- Page padding: `p-6` or `p-8`

## Spacing Scale (4px base)

| Class | Value | Use |
|---|---|---|
| `gap-1` | 4px | Tight inline spacing |
| `gap-2` | 8px | Between icon and label |
| `gap-3` | 12px | Between related items |
| `gap-4` | 16px | Default component gap |
| `gap-6` | 24px | Section spacing |
| `gap-8` | 32px | Large section spacing |

## Typography

PrimeReact sets base typography via `var(--font-family)`. Use these Tailwind classes for hierarchy:

| Role | Class |
|---|---|
| Page title | `text-3xl font-bold` |
| Section title | `text-xl font-semibold` |
| Card title | `text-lg font-medium` |
| Body | `text-base` (default) |
| Caption / muted | `text-sm text-[var(--text-color-secondary)]` |

## Border Radius

All PrimeReact components use `var(--border-radius)`. For custom wrappers:

- Cards and panels: `rounded-lg` (8px)
- Buttons: managed by PrimeReact — do not override
- Inputs: managed by PrimeReact — do not override
- Custom chips/badges: `rounded-full`

## Shadows

- Use `shadow-sm` for subtle card lift
- Use `shadow-md` for elevated overlays
- PrimeReact dialogs and overlays manage their own shadow via `var(--card-shadow)` — do not add extra shadow

## Responsive Behavior

- Stack vertically on mobile: `flex-col md:flex-row`
- DataTable scrolls horizontally on small screens: wrap in `overflow-x-auto`
- Dialogs: use `style={{ width: '90vw', maxWidth: '450px' }}` for responsive modal width
- Use `fluid` prop on inputs and buttons for full-width behavior in forms

## Dark Mode

Not active by default. If dark mode is requested, switch the theme import to:
```css
@import 'primereact/resources/themes/lara-dark-blue/theme.css';
```
