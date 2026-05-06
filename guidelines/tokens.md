# PrimeReact Design Tokens

PrimeReact exposes all design tokens as CSS custom properties. Always use `var(--token-name)` instead of hardcoded values.

## Color Tokens

### Primary (Brand)
```css
var(--primary-color)           /* main brand color (blue in Lara Light Blue) */
var(--primary-color-text)      /* text on primary background */
var(--primary-100) to var(--primary-900)  /* color scale */
```

### Surface (Backgrounds & Borders)
```css
var(--surface-ground)          /* page background */
var(--surface-section)         /* section background */
var(--surface-card)            /* card background */
var(--surface-overlay)         /* overlay/dialog background */
var(--surface-border)          /* border color */
var(--surface-hover)           /* hover state background */
var(--surface-0)               /* white */
var(--surface-50) to var(--surface-900)   /* gray scale */
```

### Text
```css
var(--text-color)              /* default text */
var(--text-color-secondary)    /* muted/secondary text */
```

### Semantic
```css
var(--green-500)               /* success */
var(--yellow-500)              /* warning */
var(--red-500)                 /* danger/error */
var(--blue-500)                /* info */
```

## Typography Tokens

```css
var(--font-family)             /* base font family */
var(--font-feature-settings)   /* font features */
```

## Spacing

PrimeReact uses a 4px base unit:

| Token | Value |
|---|---|
| `var(--inline-spacing)` | 0.5rem (8px) — space between icon and label |
| `var(--border-radius)` | border radius on components |
| `var(--focus-ring)` | focus ring style |

## Component Tokens

Each component exposes its own tokens. Examples:

```css
/* Button */
var(--button-bg)
var(--button-text-color)
var(--button-border)

/* Input */
var(--inputtext-bg)
var(--inputtext-border-color)
var(--inputtext-color)
var(--input-error-border-color)

/* Card */
var(--card-bg)
var(--card-border)
var(--card-shadow)
```

## Usage Rules

- OK: `color: var(--text-color)`
- OK: `background: var(--surface-card)`
- NEVER: `color: #333333` — never hardcode colors
- NEVER: `background: white` — never hardcode backgrounds
- NEVER: override PrimeReact component token values unless changing the theme
