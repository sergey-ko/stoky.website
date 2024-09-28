### Project Guidelines for STOKY-PRO Website

**Overview**:
STOKY-PRO is the website for an AI-powered trading assistant, developed to help active stock and crypto traders with strategy backtesting, technical analysis, and real-time data insights. The website is built using React (TypeScript) and styled with Tailwind CSS, utilizing **shadcn** for UI components to ensure a clean, modern, and responsive design.

**File Structure**:
- `src/app`: Contains the core app files like layouts, global styles (`globals.css`), and the main pages.
- `src/components/ui`: Houses reusable UI components such as buttons, cards, forms, and specialized sections (e.g., FAQ, testimonials), all built with **shadcn**.
- `lib`: Utility functions or shared libraries for various features across the project.
- Configuration files (`next.config.mjs`, `tailwind.config.ts`, etc.) handle the project’s build, style settings, and package management.

**Best Practices**:
- Use **shadcn** components to maintain a consistent and professional UI design throughout the website.
- Modularize UI components for reusability and maintainability.
- Ensure TypeScript types are strictly enforced across all components for enhanced reliability and scalability.
- Regularly update the `README.md` with the latest development instructions and project setup information.
- Follow a mobile-first approach using Tailwind CSS for responsive layouts.

**Version Control**:
- Utilize `.gitignore` to manage unnecessary files and keep the repository clean.
- Ensure all commits are descriptive and made frequently to track progress and changes effectively.

These guidelines are designed to ensure the project stays organized, scalable, and easy to maintain while delivering a professional and user-friendly website for the AI trading assistant.



STOKY-PRO
│
├── ai-trading-assistant
│   └── node_modules
│
├── src
│   ├── app
│   │   ├── fonts
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   └── components
│       └── ui
│           ├── accordion.tsx
│           ├── button.tsx
│           ├── card.tsx
│           ├── input.tsx
│           ├── BestPractices.tsx
│           ├── CallToAction.tsx
│           ├── FAQ.tsx
│           ├── Features.tsx
│           ├── Footer.tsx
│           ├── Hero.tsx
│           ├── RealTimeData.tsx
│           ├── SubscriptionPlans.tsx
│           └── Testimonials.tsx
│
├── lib
│
├── .gitignore
├── components.json
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
└── tailwind.config.ts
