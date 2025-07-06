# Brilliant Test Task

## Технології
- **Next.js** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS** (з кастомними градієнтами, кольорами, border-radius)
- **SCSS Modules** (з використанням @use для змінних)
- **Framer Motion** (анімації)
- **react-scroll-parallax** (паралакс-ефекти)

## Структура папок
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
  data/               # Статичні дані для секцій, кнопок, проектів
  hooks/              # Кастомні хуки
  styles/
    _variables.scss   # SCSS-змінні для унікальних стилів
  types/
    components.ts     # Типи пропсів компонентів
```

## Основні best practices
- **Кожен компонент** у власній папці з модулем стилів та index.ts
- **SCSS-змінні** підключаються через `@use` (сучасний синтаксис)
- **Tailwind config** містить кастомні градієнти, кольори, border-radius
- **Типи** винесені у папку `types` для автодоповнення та масштабування
- **Дані** для секцій, кнопок, проектів — у папці `data`
- **UI-компоненти** (кнопки, layout) — у папці `ui`

## Запуск проєкту
1. Встановіть залежності:
   ```bash
   npm install
   # або
   yarn install
   ```
2. Запустіть dev-сервер:
   ```bash
   npm run dev
   # або
   yarn dev
   ```
3. Відкрийте [http://localhost:3000](http://localhost:3000)

## Додатково
- Для SCSS потрібен пакет `sass` (`npm install sass`)
- Для анімацій використовується Framer Motion
- Для паралаксу — react-scroll-parallax

---

**Проєкт організовано за сучасними best practices для масштабованих UI/landing page.**
