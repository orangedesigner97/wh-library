# William Hill Design System - Design Token Structure Summary

## Overview

The William Hill HELIX Design System (Version 2.1) implements a sophisticated three-tier design token architecture that transforms raw design values into application-ready design decisions through a systematic progression of abstraction levels.

---

## Architecture Overview: Dual Parallel Structures

The William Hill HELIX Design System implements **two parallel color token structures** sharing a common Base→Brand foundation, plus a single-path typography structure:

### Color Token Structures (Dual Parallel Paths)

**Structure 1: Base → Brand → Mapped Variable Tokens** (For Solid Colors)
- **Path:** Primitive colors → Brand context → Semantic variables
- **Technology:** Figma Variables
- **Capability:** Direct theme-ability and dynamic application
- **Application:** Fills, strokes, and any variable-based color properties
- **Advantage:** Supports real-time theme switching and programmatic color application

**Structure 2: Base → Brand → Styles** (For Gradients & Complex Effects)
- **Path:** Primitive colors → Brand context → Gradient/effect styles
- **Technology:** Figma Styles (text, color, and effect styles)
- **Capability:** Gradient definitions, opacity transitions, multi-stop gradients
- **Application:** Any gradient-based color applications
- **Rationale:** Figma variables cannot natively store gradient data; Styles bridge this gap
- **Advantage:** Enables sophisticated color transitions while maintaining consistency

**Shared Foundation:** Both structures originate from identical Base and Brand layers, ensuring color consistency regardless of which path (variables vs. styles) is used.

---

## Architecture Layers

### 1. **Base Layer** - Foundational Raw Values
The Base layer contains the system's atomic building blocks - the most granular, unconstrained design values that serve as the source of truth. Base values are shared across both color structures and typography systems.

#### Base Token Categories:

##### **Color - WH Brand**
The complete color palette for William Hill, organized into graded color families:

- **Blue Families:**
  - **Marine Blue (100-1000):** Foundation blues from `#F2F4FF` (100) to `#060A2A` (1000)
    - 19 grades: 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000
  - **Azure Blue (100-1000):** Bright sky tones from `#F2F9FF` (100) to `#001C33` (1000)
    - 19 grades: 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000
  - **Cerulean Blue (100-1000):** Medium blue range from `#F2FBFF` (100) to `#002333` (1000)
    - 19 grades: 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000
  - **Sky Blue (100-1000):** Light atmospheric blues from `#F2F9FF` (100) to `#001C33` (1000)
    - 19 grades: 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000
  - **Royal Blue (100-1050):** Premium deep blues with extended range from `#DAE8FA` (100) to `#010317` (1050)
    - 21 grades: 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050
  - **Muted Blue (100-1000):** Desaturated blues from `#F2F7FF` (100) to `#122033` (1000)
    - 19 grades: 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000

- **Warm/Metallic Families:**
  - **Gold (100-1000):** Luxury gold palette from `#FFFBF2` (100) to `#332E21` (1000)
    - 19 grades: 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000
  - **Rose (100-1000):** Soft pink/mauve range from `#FFF2FA` (100) to `#330040` (1000)
    - 19 grades: 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000
  - **Sand Yellow (100-1000):** Warm sandy tones from `#FFFBF2` (100) to `#332E21` (1000)
    - 19 grades: 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000
  - **Toffee (100-1000):** Rich caramel browns from `#FFFBF2` (100) to `#332304` (1000)
    - 19 grades: 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000
  - **Mustard (100-1000):** Deep golden yellows from `#FFFDF2` (100) to `#332E14` (1000)
    - 19 grades: 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000

- **Orange Families:**
  - **Shock Orange (100-1000):** Vibrant bright oranges from `#FFF7F2` (100) to `#331607` (1000)
    - 19 grades: 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000
  - **Burnt Orange (100-1000):** Warm deep oranges from `#FFF9F0` (100) to `#332304` (1000)
    - 19 grades: 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000

- **Yellow/Green Families:**
  - **Electric Yellow (100-1000):** Bright vivid yellows from `#FFFFF2` (100) to `#323301` (1000)
    - 19 grades: 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000
  - **Lime (100-1000):** Bright vibrant lime greens from `#F2FFF7` (100) to `#003313` (1000)
    - 19 grades: 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000
  - **Forrest Green (100-1000):** Rich deep forest greens from `#F2FFF7` (100) to `#003313` (1000)
    - 19 grades: 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000

- **Cool/Neutral Families:**
  - **Teal (100-1000):** Aquatic cool tones from `#F2FCFF` (100) to `#1A2D33` (1000)
    - 19 grades: 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000
  - **Cool Grey (100-1000):** Blue-tinted neutrals from `#F2F6FF` (100) to `#272A33` (1000)
    - 19 grades: 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000
  - **Dove Grey (100-1050):** Balanced neutrals from `#F3F5F7` (100) to `#151B2A` (1050)
    - 21 grades: 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050
  - **Warm Grey (100-1000):** Warm-tinted neutrals from `#F7F7F7` (100) to `#262626` (1000)
    - 19 grades: 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000
  - **Iron Grey (100-1000):** Cool metallics from `#F8F9FA` (100) to `#2D2D33` (1000)
    - 19 grades: 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000
  - **Jubilee Purple (100-1000):** Heritage purple from `#F1ECF9` (100) to `#190833` (1000)
    - 19 grades: 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000

- **Alert/Semantic Families:**
  - **Pillarbox Red (100-1000):** Error/alert reds from `#FFF2F2` (100) to `#330D0D` (1000)
    - 19 grades: 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000
  - **Watermelon Red (100-1000):** Warm reds from `#FFF2F2` (100) to `#330D0D` (1000)
    - 19 grades: 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000
  - **Neon Pink (100-1000):** Vibrant accent pinks from `#FFF0FA` (100) to `#330B23` (1000)
    - 19 grades: 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000
  - **Fuchsia (100-1000):** Electric magentas from `#FFF2FA` (100) to `#330B23` (1000)
    - 19 grades: 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000

**Grading Structure:** Each color family contains 10-11 graded steps (100, 150, 200, 250, 300, 350, 400, 450, 500, 550... up to 1000/1050), enabling fine-grained control over color application with consistent intervals.

##### **Opacity - Base**
Predefined alpha value tokens for controlled transparency:

- **Dove Grey & Iron Grey Opacity Variants:**
  - 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90% values
  - Applied to darkest neutrals for layering and overlay effects
  - Example: `Dove Grey-1000 @ 70%`, `Iron Grey-1000 @ 50%`
  
- **Accent Color Opacity Variants:**
  - Additional opacity tokens for accent colors (Royal Blue, Sky Blue)
  - Enable semi-transparent treatments of brand colors
  - Example: `Sky Blue-500 @ 10%` through `@ 90%`

##### **Typography - Base**
Font system foundations:

- **Font Families:**
  - `Typography/Family/Heading`: SF Pro
  
- **Font Weights:**
  - `Typography/Weight/Bold`: Bold (700+)

- **Font Sizes:**
  - `Typography/Font Size/5xl`: 40px
  - (Extended range from smaller sizes up to 5xl)

- **Line Heights:**
  - `Typography/Line Height/5xl`: 56px
  - (Proportional line heights matched to each size scale)

- **Composed Typography Tokens:**
  - `Heading/Heading-lg/Bold`: Composite definition combining family, weight, size, and line height
  - Format: `Font(family: "Typography/Family/Heading", style: Typography/Weight/Bold, size: Typography/Font Size/5xl, weight: 700, lineHeight: Typography/Line Height/5xl, letterSpacing: 0)`

---

### 2. **Brand Layer** - Applied Design Decisions
The Brand layer takes Base tokens and maps them into semantic, role-based tokens that communicate design intent. This layer serves as the foundation for both the Variables path (for solid color application) and the Styles path (for gradients and effects).

#### Brand Token Mapping:

**Color Mappings (Base → Brand):**
- Base color families are **curated** into brand-appropriate selections
- Not all 100+ base colors are used—selections reflect William Hill brand identity
- Colors are mapped to semantic roles (primary, secondary, accent, neutral, etc.)
- Multiple opacity levels from Base are combined into overlay tokens
- **Single source:** Brand values feed both Structure 1 (Variables) and Structure 2 (Styles)

**Typography Mappings (Base → Brand):**
- Brand-level variables define all typographic properties:
  - Font family references
  - Size scales
  - Weight selections
  - Line height ratios
  - Letter spacing values
- **Automatic sync:** These brand variables automatically generate corresponding text styles
- One-directional flow: Typography variables → Text styles (no separate definition needed)

**Example Pattern:**
```
Base Layer:       Primary/Core, Primary/Lightest, Primary/Light, Secondary/Core, Secondary/Darkest
                  ↓
Brand Layer:      Color/Primary, Color/Secondary, Neutral colors mapped for specific use cases
                  ↓ 
                  ├─ STRUCTURE 1: Mapped Variables (Solid colors, fills, strokes)
                  └─ STRUCTURE 2: Styles (Gradients, multi-stop blends, effects)
```

#### Key Brand-Level Decisions:
- **Primary Colors:** Selected core brand hues with supporting tints/shades
- **Secondary Colors:** Accent and supporting colors from base palette
- **Neutral Colors:** Greys curated from Dove Grey, Iron Grey, Cool Grey
- **Semantic Colors:** Success (greens), Error (reds), Warning (ambers), Info (blues)
- **Overlay Tokens:** Semi-transparent overlays for modals, backdrops
  - Example: `Overlay-Light @ 40%`, `Overlay-Dark @ 70%`

---

### 3. **Mapped Variable Tokens** - Direct Application (Structure 1)
Mapped variable tokens apply Brand colors to semantic roles that can be directly applied to component properties in code and design systems.

#### Semantic Variable Pattern:
- **Naming:** `[Purpose]/[State]/[Variant]` (e.g., `Color/Primary/Default`, `Color/Background/Hover`)
- **References:** Point to Brand-level color tokens
- **Themeable:** Can be reassigned for light/dark mode or brand variants
- **Use Cases:** 
  - Fill colors on components
  - Stroke colors on borders
  - Text colors
  - Any property requiring dynamic theme application

---

### 4. **Styles Layer** - Gradient & Complex Effects (Structure 2)
The Styles layer exists specifically to handle gradient and effect applications that Figma Variables cannot support.

#### Style Categories:

**Text Styles:**
- Automatically generated from Brand-level typography variables
- Structure: `Category/Role/Variant` (e.g., `Heading/Heading-lg/Bold`)
- Include font family, weight, size, and line height as a single composed unit
- Enable designers to apply consistent typography without manual adjustment
- **Direct relationship:** Typography variables → Text styles (automatic sync)

**Color Styles (Gradient & Effect Layers):**
- Handle gradient definitions that variables cannot support
- Map Brand colors into gradient transitions and multi-stop effects
- Structure: `Purpose/State/Variant`
- Examples: `Background/Primary/Gradient`, `Overlay/Dark/MultiStop`
- Support opacity transitions and sophisticated color blending

**Effect Styles:**
- Define shadows, blurs, and other visual treatments
- Reference opacities from Base layer
- Enable consistent depth and elevation systems
- Support complex compositions beyond solid colors

---

## Variable Collections & Mapping Flow

### Collection Structure & Technology Selection:

**1. Global Variables Collection (Base)**
   - Name: Typically "Base" or "Foundations"
   - Contains: All primitive colors, opacity values, and typography base tokens
   - Format: Variables (Figma native)
   - Accessibility: Foundation-level, not directly used by designers
   - Update Strategy: Managed by system maintainers
   - Properties:
     - Read-only for most users
     - Version-controlled source of truth
     - Organized in hierarchical groups by token type

**2. WH Brand Variables Collection (Brand)**
   - Name: "WH" (distinguishing from "888" brand variant)
   - Contains: Mapped tokens referencing Base values
   - Format: Variables (Figma native) for semantic color mapping
   - Accessibility: Available to designers for component creation
   - References: Variables in this collection use Base tokens as source values
   - Properties:
     - Primary brand color mapping
     - Contextual color selections
     - Role-based semantic meanings
     - Direct application to component properties

**3. Mapped Variable Tokens Collection (Brand → Application)**
   - Technology: Figma Variables
   - References: Brand-level color variables
   - Purpose: Semantic roles ready for direct component application
   - Themeable: Can be swapped for light/dark mode variants
   - Use: Code generation, component property binding

**4. Styles Collection (Brand → Gradient/Effect Application)**
   - Technology: Figma Styles
   - References: Brand-level color and typography variables
   - Purpose: Handle gradients, opacity transitions, and complex effects
   - Categories:
     - Text Styles (directly from Brand typography variables)
     - Color Styles (gradients, multi-stop blends)
     - Effect Styles (shadows, blur effects)
   - Rationale: Styles exist because Figma variables cannot encode gradient data
   - Sync: Text styles automatically update when typography variables change

### Dual-Structure Reference Chain:

```
Figma Collections Architecture:
│
├─ Base Variables Collection
│  ├─ Colour/Primary/Core → #17e58f
│  ├─ Colour/Secondary/Core → #8d0ae2
│  ├─ Neutral/Grey-1000 → #171F33
│  ├─ Typography/Font Size/5xl → 40px
│  ├─ Typography/Line Height/5xl → 56px
│  └─ Opacity values (10%-90%)
│
├─ WH Brand Collection (Variables)
│  ├─ Brand/Primary → Base/Colour/Primary/Core
│  ├─ Brand/Secondary → Base/Colour/Secondary/Core
│  ├─ Brand/Neutral → Base/Neutral/Grey-1000
│  └─ Typography values (reference to Base)
│
├─ STRUCTURE 1: Mapped Variable Tokens
│  ├─ Color/Primary/Default → Brand/Primary (Variable)
│  ├─ Color/Primary/Hover → Brand/Primary (modified)
│  ├─ Color/Background → Brand/Neutral (Variable)
│  └─ [Direct application to component properties]
│
└─ STRUCTURE 2: Styles Collection
   ├─ Text Styles
   │  └─ Heading/Heading-lg/Bold → Auto-sync from Brand Typography Variables
   ├─ Color Styles (Gradients)
   │  ├─ Background/Primary/Gradient → Brand/Primary + opacity blend
   │  └─ Overlay/Dark/MultiStop → Complex multi-step gradient
   └─ Effect Styles
      └─ Shadow/Elevation-1 → Brand colors + opacity
```

---

## Design Token Hierarchy Visual

```
COLOR TOKENS - DUAL PARALLEL STRUCTURES

┌─────────────────────────────────────────────────────────┐
│ BASE LAYER (Shared Foundation)                          │
│ Marine Blue-500: #334AFF                                │
│ Dove Grey-1000: #171F33                                 │
│ Opacity: 10%-90% variants                               │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│ BRAND LAYER (Semantic Decisions)                        │
│ Primary Color: Marine Blue-500                          │
│ Overlay-Dark: Dove Grey-1000 @ 70%                      │
│ (Single source feeding both structures)                 │
└─────────────────────────────────────────────────────────┘
                          ↓
          ┌─────────────────────────┬──────────────────────────┐
          │                         │                          │
   ┌──────▼──────────┐      ┌──────▼──────────────┐            │
   │ STRUCTURE 1     │      │ STRUCTURE 2         │            │
   │ Variables       │      │ Styles              │            │
   └────────────────┘      └─────────────────────┘            │
   │                       │                                   │
   ├─ Mapped Variables    ├─ Solid Color Variables           │
   │  Color/Primary       │  (fills, strokes)                 │
   │  Color/Background    │                                   │
   │  (Themeable,        ├─ Gradient Styles                  │
   │   direct to props)   │  (multi-stop blends)             │
   │                      │                                   │
   │  Use: Code           ├─ Text Styles                     │
   │  generation,         │  (auto-sync from Brand          │
   │  component props     │   typography variables)          │
   │                      │                                   │
   │                      ├─ Effect Styles                   │
   │                      │  (shadows, blur)                 │
   │                      │                                   │
   │                      │  Use: Gradient/effect           │
   │                      │  applications                    │
   └─────────────────────┘      └──────────────────────────┘
        ↓                              ↓
   Applied to              Applied to components
   component               with gradient/effect
   properties              requirements


TYPOGRAPHY TOKENS - SINGLE PATH STRUCTURE

┌─────────────────────────────────────────────────────────┐
│ BASE LAYER                                               │
│ Font Families, Weights, Sizes, Line Heights             │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│ BRAND LAYER (Typography Variables)                      │
│ Heading/Heading-lg: SF Pro, Bold, 40px, 56px LH        │
│ Body/Body-md: SF Pro, Regular, 16px, 24px LH           │
└─────────────────────────────────────────────────────────┘
                          ↓ (Auto-sync)
┌─────────────────────────────────────────────────────────┐
│ TEXT STYLES (Auto-generated)                            │
│ Heading/Heading-lg/Bold → Complete text treatment       │
│ Body/Body-md → Consistent typography application        │
└─────────────────────────────────────────────────────────┘
                          ↓
        Applied to text elements in designs
```

---

## Key Design Patterns & Principles

### 1. **Dual-Structure Color System**
- **Structure 1 (Variables):** Handles all solid color applications
  - Direct application to fills, strokes, and component properties
  - Supports real-time theme switching
  - Enables code generation and programmatic theming
  
- **Structure 2 (Styles):** Handles gradients, opacity transitions, and effects
  - Necessary because Figma variables cannot encode gradient data
  - Maintains consistency with Structure 1 through shared Brand layer
  - Supports multi-stop gradients and sophisticated blends
  
- **Single Brand Source:** Both structures originate from identical Brand mappings, ensuring visual consistency regardless of application path

### 2. **Graded Color System**
- Every color exists in 10-11 weighted grades (100-1000)
- Enables accessibility (contrast ratios) and visual hierarchy
- Supports dark/light mode implementation naturally
- Provides smooth transitions without custom values
- Only selected grades appear in Brand layer for design decisions

### 3. **Opacity Layering**
- Base opacities (10%-90%) enable overlay effects
- Semi-transparent versions of neutral colors used for:
  - Modal backdrops
  - Hover states
  - Disabled states
  - Depth indicators
- Combined with Brand colors for overlay tokens
- Reduces token count while maximizing flexibility

### 4. **Typography: Single-Path with Auto-Sync**
- **One definition point:** Brand-level typography variables
- **Automatic propagation:** These variables auto-generate text styles
- **Direct relationship:** Changes to Brand variables automatically update text styles
- **Consistency guarantee:** No manual style definition needed; always in sync with variables
- Applies to:
  - Font families
  - Weight selections
  - Size scales
  - Line height ratios
  - Letter spacing values

### 5. **Separation of Concerns**
- **Base:** "What primitive values exist?"
- **Brand:** "Which values represent our brand? What do they mean semantically?"
- **Application (Variables or Styles):** "How do we apply these meanings to components?"
- **Technology choice:** Variables for themes/solid colors, Styles for gradients/effects
- Clear ownership and update boundaries

### 6. **WH vs 888 Brand Variants**
- System supports multiple brand implementations
- WH is the active William Hill brand
- 888 is available as alternative brand variant
- Different collections enable rapid brand switching
- Architecture allows for future brand variants without system redesign
- Brand layer remains the single switching point

### 7. **Variable-to-Code Translation**
- Mapped variable tokens enable direct code generation
- Semantic naming (e.g., `Color/Primary/Default`) translates to design system tokens in code
- Theme switching possible through variable reassignment
- Reduces manual prop mapping in component implementations

---

## Token Usage Guidelines

### When to Use Variables vs Styles

**Use Mapped Variable Tokens When:**
- Applying solid fill colors to components
- Setting stroke colors on elements
- Applying text colors
- Needing real-time theme switching capability
- Building themeable component systems
- Enabling programmatic color application (code generation)

**Use Styles (Gradient/Effect Layer) When:**
- Creating gradient color transitions
- Defining multi-stop color blends
- Building opacity transition effects
- Applying complex visual effects (shadows, blur)
- Gradient backgrounds need to be consistent across designs

**Use Brand-Level Variables/Tokens When:**
- Creating new component definitions
- Establishing semantic color roles
- Building component libraries
- Ensuring accessibility considerations

**Use Base Tokens When:**
- Building new Brand-level tokens
- Creating new semantic categories
- Documenting full color specification
- System maintainers extending the palette

---

## Update & Maintenance Flow

1. **System Refresh Cycle:**
   - Base tokens updated (color refinements, new families)
   - Brand collection updated if mappings change
   - Styles regenerated or manually updated
   - All components automatically inherit new values

2. **Adding New Colors:**
   - New color family added to Base
   - Multiple grades (100-1000) created automatically
   - Selectively mapped to Brand layer
   - No need to update individual component styles

3. **Brand Evolution:**
   - WH collection modified without touching Base
   - 888 variant can diverge independently
   - Rollback to previous versions maintains consistency
   - Clear audit trail of changes

---

## Summary

The William Hill HELIX Design System implements a **sophisticated dual-structure color system plus single-path typography system** that provides:

**Color Architecture:**
- **Shared Base→Brand foundation** ensures consistency across both application paths
- **Structure 1 (Variables)** enables themeable solid colors and code generation
- **Structure 2 (Styles)** enables gradients and effects that variables cannot support
- **Technology choice** based on functional requirement, not arbitrary duplication

**Typography Architecture:**
- **Single-path approach** from Brand variables to text styles
- **Automatic sync** ensures typography variables always match their generated styles
- **Direct relationship** between token definitions and applied styles

**Unified Benefits:**
- **Flexibility** through 100+ carefully graded base colors and systematic opacity levels
- **Control** via semantic brand mapping that feeds both color structures
- **Consistency** through reusable styles and unified variable references
- **Scalability** by separating raw values from applied meanings from technology choices
- **Maintainability** through clear layer separation and single source of truth per layer
- **Code Integration** through mapped semantic variables that translate directly to design tokens
