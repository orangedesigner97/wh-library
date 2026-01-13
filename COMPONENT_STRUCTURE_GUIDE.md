# Component Structure Guide

This guide outlines the recommended folder structure for adding new components to the William Hill component library.

## Folder Structure Pattern

```
src/
├── components/
│   ├── PrimaryButton/
│   │   ├── PrimaryButton.jsx          # Component implementation
│   │   ├── PrimaryButton.css          # Component styles
│   │   └── index.ts                   # Export barrel
│   ├── SecondaryButton/               # Coming soon
│   ├── TertiaryButton/                # Coming soon
│   └── [ComponentName]/
│       ├── [ComponentName].jsx        # Always use .jsx (not .tsx)
│       ├── [ComponentName].css        # Component-scoped styles
│       └── index.ts                   # Named export for clean imports
│
├── tokens/                            # Design token definitions
│   ├── colors.ts
│   ├── spacing.ts
│   ├── typography.ts
│   ├── radius.ts
│   ├── stroke.ts
│   └── index.ts
│
├── showcase/                          # Component demonstrations
│   ├── PrimaryButton.showcase.jsx     # Interactive examples
│   ├── index.ts                       # Export barrel for showcases
│   └── README.md                      # Component documentation
│
└── App.js                             # Main app file (or route to showcase)
```

## File Naming Conventions

### Component Files
- **Implementation**: `ComponentName.jsx` (always JavaScript, not TypeScript)
- **Styles**: `ComponentName.css` (BEM naming convention)
- **Export**: `index.ts` (TypeScript allowed for exports)
- **Showcase**: `ComponentName.showcase.jsx` (in `/src/showcase/`)

### CSS Class Naming
Follow BEM (Block Element Modifier) pattern:
```css
.wh-component-name { }                    /* Block */
.wh-component-name__element { }           /* Element */
.wh-component-name--variant { }           /* Modifier */
.wh-component-name__element--state { }    /* Element + Modifier */
```

Example:
```css
.wh-primary-button { }
.wh-primary-button__icon { }
.wh-primary-button__label { }
.wh-primary-button--solid { }
.wh-primary-button__icon--leading { }
```

## Adding a New Component

### Step 1: Create Component Folder
```bash
mkdir -p src/components/ComponentName
```

### Step 2: Create Component File
Create `src/components/ComponentName/ComponentName.jsx`:

```jsx
import React from 'react';
import './ComponentName.css';

/**
 * ComponentName Component
 * 
 * Description of what this component does and its purpose
 * in the William Hill design system.
 */
const ComponentName = ({ 
  prop1,
  prop2,
  // ... other props
}) => {
  // Component logic here
  
  return (
    <div className="wh-component-name">
      {/* Component JSX */}
    </div>
  );
};

export default ComponentName;
```

### Step 3: Create Styles File
Create `src/components/ComponentName/ComponentName.css`:

```css
/* ComponentName Component */

.wh-component-name {
  /* Base styles */
  display: flex;
  transition: all 0.2s ease;
}

.wh-component-name__element {
  /* Element styles */
}

.wh-component-name--variant {
  /* Variant-specific styles */
}

/* Accessibility */
.wh-component-name:focus-visible {
  outline: 2px solid var(--wh-focus-color);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .wh-component-name {
    transition: none;
  }
}
```

### Step 4: Create Export Barrel
Create `src/components/ComponentName/index.ts`:

```typescript
export { default as ComponentName } from './ComponentName.jsx';
```

### Step 5: Create Showcase File
Create `src/showcase/ComponentName.showcase.jsx`:

```jsx
import React from 'react';
import { ComponentName } from '../components/ComponentName';

/**
 * ComponentName Showcase
 * 
 * Interactive demonstrations and examples of all ComponentName variants
 */
const ComponentNameShowcase = () => {
  return (
    <div style={{ padding: '40px', backgroundColor: '#f5f5f5' }}>
      <h1>ComponentName Showcase</h1>
      
      {/* Variant 1 Section */}
      <section style={{ marginBottom: '60px', backgroundColor: 'white', padding: '40px' }}>
        <h2>Variant 1</h2>
        <ComponentName prop1="value1" />
      </section>
      
      {/* Variant 2 Section */}
      <section style={{ marginBottom: '60px', backgroundColor: 'white', padding: '40px' }}>
        <h2>Variant 2</h2>
        <ComponentName prop2="value2" />
      </section>
    </div>
  );
};

export default ComponentNameShowcase;
```

### Step 6: Update Showcase Exports
Update `src/showcase/index.ts`:

```typescript
export { default as PrimaryButtonShowcase } from './PrimaryButton.showcase';
export { default as ComponentNameShowcase } from './ComponentName.showcase';
```

### Step 7: Add Documentation (Optional but Recommended)
Add a markdown file documenting your component in the showcase README or create a separate doc file.

## Design Token Usage

Always use design tokens for styling instead of hardcoded values:

```jsx
// ❌ Bad - hardcoded values
const buttonStyle = {
  padding: '14px 16px',
  borderRadius: '4px',
  fontSize: '14px',
  color: '#0B52B1'
};

// ✅ Good - using design tokens
import { tokens } from '@/tokens';

const buttonStyle = {
  padding: `${tokens.spacing.md} ${tokens.spacing.lg}`,
  borderRadius: tokens.radius.default,
  fontSize: tokens.typography.body.medium.size,
  color: tokens.colors.primary.default
};
```

## CSS Best Practices

### Do:
- ✅ Use BEM naming convention
- ✅ Keep styles scoped to component (`.wh-component-name`)
- ✅ Use CSS variables for dynamic values
- ✅ Include focus-visible states for accessibility
- ✅ Respect `prefers-reduced-motion`
- ✅ Respect `prefers-contrast`
- ✅ Include comments explaining complex styles

### Don't:
- ❌ Use global classnames (except utility classes)
- ❌ Use `!important` flags
- ❌ Use inline styles for complex styling (keep in CSS files)
- ❌ Use ID selectors for styling
- ❌ Create bare element selectors (always use classes)

## JavaScript/JSX Best Practices

### Do:
- ✅ Use `.jsx` extension (NOT `.tsx`)
- ✅ Use functional components with hooks
- ✅ Document components with JSDoc comments
- ✅ Provide meaningful prop names
- ✅ Include default props or prop defaults
- ✅ Handle edge cases gracefully
- ✅ Support ARIA attributes for accessibility

### Don't:
- ❌ Use TypeScript type annotations (use JSDoc if needed)
- ❌ Create class components
- ❌ Use complex state management for simple components
- ❌ Ignore accessibility (ARIA labels, keyboard navigation, etc.)
- ❌ Create components with too many prop combinations

## Testing Your Component

### Visual Testing
1. Create a showcase file (as shown above)
2. Test all variants and states
3. Test responsive behavior
4. Test with different content lengths
5. Test accessibility with keyboard navigation

### Automated Testing (Future)
Once testing framework is set up:
```jsx
import { render, screen } from '@testing-library/react';
import { ComponentName } from '@/components/ComponentName';

describe('ComponentName', () => {
  it('renders with default props', () => {
    render(<ComponentName />);
    expect(screen.getByRole('...')).toBeInTheDocument();
  });
  
  // More tests...
});
```

## Accessibility Checklist

- [ ] Keyboard navigation works (Tab, Enter, Escape)
- [ ] Focus indicators are visible
- [ ] ARIA labels are appropriate
- [ ] Color contrast meets WCAG AA standard (4.5:1)
- [ ] Component respects `prefers-reduced-motion`
- [ ] Component respects `prefers-contrast`
- [ ] Screen reader announces component correctly
- [ ] Touch targets are at least 48x48px

## Documentation Template

Include this in your showcase README:

```markdown
# ComponentName

## Overview
Brief description of the component and its purpose.

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| prop1 | string | - | Description |
| prop2 | number | 0 | Description |

## Usage
```jsx
<ComponentName prop1="value" prop2={5} />
```jsx

## Variants
- Variant 1: Description
- Variant 2: Description

## Accessibility
- Fully keyboard accessible
- ARIA labels: ...
- Screen reader: ...
```

## Component Checklist

Before considering a component "done":

- [ ] Component file created and working
- [ ] CSS file created with proper styling
- [ ] Export barrel (index.ts) created
- [ ] Showcase file created with examples
- [ ] All variants tested visually
- [ ] Accessibility verified
- [ ] Documentation written
- [ ] No TypeScript/linting errors
- [ ] Responsive behavior verified
- [ ] Touch devices tested (if applicable)

## File Size Guidelines

- **Component file**: < 300 lines of code
- **Stylesheet**: < 500 lines of CSS
- **Showcase**: < 400 lines of code

If a component grows larger, consider breaking it into smaller sub-components.

## Questions?

Refer to the [PrimaryButton](PrimaryButton.showcase.jsx) component as a reference implementation. It demonstrates:
- Proper file structure
- Component patterns
- Design token usage
- Showcase documentation
- Accessibility features

---

**Last Updated**: January 2025
**Current Pattern**: PrimaryButton
**Future Components**: SecondaryButton, TertiaryButton, Icon, Badge, Modal, and more
