# React-Bootstrap to Tailwind CSS Migration Plan

> **For agentic workers:** Execute this plan inline using executing-plans skill. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate all UI from react-bootstrap (Bootstrap 5 CSS) to Tailwind CSS with 1:1 visual parity.

**Architecture:** Remove Bootstrap CSS import and react-bootstrap components. Replace with Tailwind CSS utility classes in all components. The grid system (Container/Row/Col) becomes Tailwind flexbox utilities. Navbar/Card/Figure become semantic HTML with Tailwind classes.

**Tech Stack:** React 17, Tailwind CSS 3 (via PostCSS), FontAwesome icons (unchanged)

---

### Task 1: Install and Configure Tailwind CSS

**Files:**
- Modify: `package.json` (add tailwind + postcss + autoprefixer)
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Modify: `src/index.css` (new file for Tailwind directives)
- Modify: `src/index.js` (replace Bootstrap CSS import)

- [ ] Step 1: Install dependencies
```
npm install --save-dev tailwindcss@3 postcss autoprefixer
```

- [ ] Step 2: Create tailwind.config.js
```js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- [ ] Step 3: Create postcss.config.js
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

- [ ] Step 4: Create src/index.css with Tailwind directives
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- [ ] Step 5: Update src/index.js — replace bootstrap CSS import with tailwind index.css import
```diff
- import 'bootstrap/dist/css/bootstrap.min.css';
+ import './index.css';
```

### Task 2: Migrate App.js

**Files:**
- Modify: `src/App.js`

Bootstrap classes to replace:
- `Container` -> `max-w-6xl mx-auto px-4`
- `Row justify-content-md-center` -> flex + centering utilities  
- `Col lg={10}` -> `w-full max-w-5xl` (10/12 of ~960px ≈ 800px)

- [ ] Step 1: Remove react-bootstrap import
- [ ] Step 2: Replace Container/Row/Col grid with Tailwind grid
```jsx
// Old:
<Container>
  <Row className="justify-content-md-center header">
    <Col lg={10}><Header /></Col>
  </Row>
  ...
</Container>

// New:
<div className="max-w-6xl mx-auto px-4">
  <div className="header">
    <div className="w-full">
      <Header />
    </div>
  </div>
  ...
</div>
```

### Task 3: Migrate Header.js

**Files:**
- Modify: `src/components/header/Header.js`

Navbar mapping:
- `Navbar variant="light" collapseOnSelect expand="lg"` -> flex container with responsive visibility + useState for mobile toggle
- `Navbar.Brand` -> link with styling
- `Navbar.Toggle` -> hamburger button visible on mobile
- `Navbar.Collapse` -> conditional render or flex with mobile hidden/shown
- `Nav` -> flex container
- `Nav.Link` -> styled anchor/link
- `Navbar.Text` with Container/Row/Col -> flex layout for social icons
- `Container right_side_container` -> flex wrapper
- `Row/Col` inside -> flex items

- [ ] Step 1: Convert Navbar to div-based layout with useState toggle
- [ ] Step 2: Use `useState` for mobile menu collapse
- [ ] Step 3: Implement responsive behavior with Tailwind breakpoints

### Task 4: Migrate Footer.js

**Files:**
- Modify: `src/components/footer/Footer.js`

- `Nav fill` -> `flex justify-between w-full`

### Task 5: Migrate Main.js

**Files:**
- Modify: `src/pages/Main.js`

- `Row` -> `flex flex-wrap -mx-2`
- `Col xs={12} sm={12} md={6}` -> `w-full md:w-1/2 px-2`

### Task 6: Migrate Merch.js

**Files:**
- Modify: `src/pages/merch/Merch.js`

- `Row` -> flex container
- `Col xs={12} sm={6} md={3}` -> `w-full sm:w-1/2 md:w-1/4 px-2`
- `Card rounded` -> div with rounded-[15px] shadow border
- `Card.Body` -> div with padding
- `Card.Title` -> h3 with font styling
- `Card.Text` -> p element
- `className="mb-4"` -> `mb-4` (Tailwind class)

### Task 7: Migrate Contact.js

**Files:**
- Modify: `src/pages/contact/Contact.js`

- `Row` -> flex container
- `Col xs={12} sm={12} md={12} lg={6}` -> `w-full lg:w-1/2 px-2`
- `Figure` -> div container
- `Figure.Image fluid` -> img with w-full

### Task 8: Migrate Presskit.js

**Files:**
- Modify: `src/pages/presskit/Presskit.js`

- Same Row/Col/Figure pattern as other pages

### Task 9: Update CSS Files

**Files:**
- Modify: `src/app.css`
- Modify: `src/components/header/header.css`
- Modify: `src/components/footer/footer.css`
- Modify: `src/pages/merch/merch.css`
- Modify: `src/pages/contact/contact.css`
- Modify: `src/pages/presskit/presskit.css`

Ensure custom classes still work (brand_name, video-container, etc.)

### Task 10: Remove Bootstrap and React-Bootstrap

**Files:**
- Modify: `package.json`

- [ ] Remove `bootstrap` and `react-bootstrap` from dependencies
- [ ] Run install to clean up
- [ ] Verify build succeeds

### Task 11: Verify Build

- [ ] Run `npm run build` and ensure no errors
- [ ] Visual verification of key pages

---

## Grid Mapping Reference

| Bootstrap | Tailwind |
|-----------|----------|
| `Col lg={10}` | `w-full` (parent handles max-width) |
| `Col xs={12} md={6}` | `w-full md:w-1/2` |
| `Col xs={12} sm={6} md={3}` | `w-full sm:w-1/2 md:w-1/4` |
| `Col xs={12} sm={12} md={4}` | `w-full md:w-1/3` |
| `Col xs={12} sm={12} md={12} lg={6}` | `w-full lg:w-1/2` |
| `Row` | `flex flex-wrap` |
| `Container` | `max-w-6xl mx-auto px-4` |
| `Nav fill` | `flex justify-between w-full` |
| `mb-4` | `mb-4` (Tailwind utility) |
| `rounded` | `rounded-[15px]` (from merch.css card style) |
