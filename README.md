# Md Ranju Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14.x-black.svg?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-orange.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-blue.svg?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-1.32x-lightblue.svg?logo=shadcn&logoColor=white)](https://ui.shadcn.com/)

A modern, responsive personal portfolio website showcasing skills, projects, and experiences. Built with Next.js for optimal performance and SEO, featuring sleek UI components from shadcn/ui and DevUI, all styled with Tailwind CSS. This site is currently under active development—stay tuned for more features!

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Responsive Design**: Fully adaptive layout for desktop, tablet, and mobile devices.
- **Dynamic Sections**: About me, projects showcase, skills highlights, and contact form with smooth animations.
- **SEO Optimized**: Server-side rendering via Next.js for better search engine visibility.
- **Modern UI Components**: Customizable, accessible elements from shadcn/ui and DevUI for an engaging user experience.
- **Type-Safe Code**: Powered by TypeScript for robust development and fewer runtime errors.
- **Under Development**: Ongoing enhancements including blog integration, resume download, and advanced animations.

## Tech Stack

| Category          | Technology       |
| ----------------- | ---------------- |
| **Framework**     | Next.js 14       |
| **Language**      | TypeScript 5     |
| **Styling**       | Tailwind CSS 3   |
| **UI Components** | shadcn/ui, DevUI |
| **Build Tool**    | npm/bun          |
| **Other**         | ESLint, Prettier |

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/muhammadranju/mdranju-portfolio-nextjs.git
   cd mdranju-portfolio-nextjs
   ```

2. **Install Dependencies**

   ```bash
   npm install
   # or
   bun install
   ```

3. **Run the Development Server**
   ```bash
   npm run dev
   # or
   bun dev
   ```
   The site will be available at `http://localhost:3000`.

## Usage

- **Explore Sections**: Navigate through the homepage to view the about section, featured projects, skills, and contact form.
- **Customize Content**: Edit data in `src/data/` (e.g., projects.json) to personalize your portfolio.
- **Add Projects**: Follow the component patterns in `src/components/` to integrate new work showcases.
- For production build:
  ```bash
  npm run build
  npm start
  ```

## Deployment

- **Vercel (Recommended)**: Push to GitHub and deploy directly via Vercel for automatic builds and previews.
- **Netlify**: Drag-and-drop the built files or connect your repo.
- **Custom Server**: Use Node.js with the `out` folder from `npm run build`.

Environment variables are minimal; no API keys required for basic setup.

## Project Structure

```
mdranju-portfolio-nextjs/
├── src/
│   ├── api/         # API routes
│   ├── app/         # App Router pages and layouts
│   ├── components/  # Reusable components (e.g., ProjectCard, ContactForm)
│   ├── config/      # Site configuration (e.g., metadata)
│   ├── data/        # Static data (e.g., projects, skills)
│   ├── lib/         # Utilities and helpers
│   ├── ui/          # shadcn/ui and DevUI components
│   └── utils/       # Shared utilities
├── public/          # Static assets (images, icons)
├── README.md
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Contributing

Contributions are welcome, especially as the project evolves! Please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/add-blog-section`).
3. Commit your changes (`git commit -m 'feat: add blog integration'`).
4. Push to the branch (`git push origin feature/add-blog-section`).
5. Open a Pull Request.

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines on code style, testing, and more.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Author**: Muhammad Ranju ([@muhammadranju](https://github.com/muhammadranju))
- **Email**: [mdranju23@gmail.com](mailto:mdranju23@gmail.com)
- **Issues**: Report bugs or suggest features [here](https://github.com/muhammadranju/mdranju-portfolio-nextjs/issues)

---

_Crafted with passion for code and design. 🚀 Let's connect and collaborate!_
