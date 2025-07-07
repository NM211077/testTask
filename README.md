# Brilliant Test Task

## Technologies
- **Next.js** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS** (with custom gradients, colors, border-radius)
- **SCSS Modules** (with @use for variables)
- **Framer Motion** (animations)
- **react-scroll-parallax** (parallax effects)

## Folder Structure
```
src/
  app/                # Next.js entrypoints (page.tsx, layout.tsx, globals.css)
  components/
    HeroSection/
      HeroSection.tsx
      HeroSection.module.scss
      index.ts
    StaticButtonsSection/
      StaticButtonsSection.tsx
      StaticButtonsSection.module.scss
      index.ts
    IntegratedProjectsSection/
      IntegratedProjectsSection.tsx
      IntegratedProjectsSection.module.scss
      index.ts
    ui/
      GradientButton.tsx
      BackgroundLayer.tsx
      ObserverSection.tsx
  data/               # Static data for sections, buttons, projects
  hooks/              # Custom hooks
  styles/
    _variables.scss   # SCSS variables for unique styles
  types/
    components.ts     # Component prop types
```

## Best Practices
- **Each component** is in its own folder with a style module and index.ts
- **SCSS variables** are imported via `@use` (modern syntax)
- **Tailwind config** contains custom gradients, colors, border-radius
- **Types** are in the `types` folder for autocompletion and scalability
- **Data** for sections, buttons, projects is in the `data` folder
- **UI components** (buttons, layout) are in the `ui` folder

## How to Run
1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
3. Open [http://localhost:3000](http://localhost:3000)

## Deployment
The project is deployed on Vercel:
👉https://test-task-gilt-one.vercel.app

## Additional Notes
- You need the `sass` package for SCSS (`npm install sass`)
- Animations use Framer Motion
- Parallax effects use react-scroll-parallax

---

**The project is organized according to modern best practices for scalable UI/landing pages.**
