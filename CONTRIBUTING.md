# Contributing to mdranju Portfolio

Thank you for considering contributing to the **mdranju Portfolio**! As a personal portfolio site, contributions are especially appreciated for bug fixes, performance improvements, accessibility enhancements, or new feature ideas that align with showcasing developer work. Whether it's refining the UI, adding a new section, or optimizing SEO, your input helps make this site a better reflection of modern web development practices.

By participating, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## Table of Contents

- [Reporting Issues](#reporting-issues)
- [Setting Up the Development Environment](#setting-up-the-development-environment)
- [How to Contribute](#how-to-contribute)
- [Code Style and Linting](#code-style-and-linting)
- [Testing](#testing)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Questions?](#questions)

## Reporting Issues

Before opening a new issue, please check the [issue tracker](https://github.com/muhammadranju/mdranju-portfolio-nextjs/issues) to avoid duplicates. If a similar issue exists, add your insights or upvote it.

When creating a new issue:

1. Use a clear, descriptive title (e.g., "Accessibility: Add ARIA labels to navigation").
2. Describe the current behavior vs. expected behavior.
3. Provide reproduction steps, including browser/OS details.
4. Include screenshots, console errors, or code snippets if relevant.
5. For feature requests, explain the use case and reference any design inspirations.

Label issues as "bug", "enhancement", or "question" for better triage.

## Setting Up the Development Environment

To contribute effectively:

1. **Fork the Repository**  
   Visit the [repository](https://github.com/muhammadranju/mdranju-portfolio-nextjs) and click "Fork" to create your copy.

2. **Clone Your Fork**

   ```bash
   git clone https://github.com/YOUR_USERNAME/mdranju-portfolio-nextjs.git
   cd mdranju-portfolio-nextjs
   ```

3. **Install Dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

4. **Run the Development Server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   View the site at [http://localhost:3000](http://localhost:3000).

5. **Optional: Build for Production**
   ```bash
   npm run build
   npm start
   ```

No environment variables or database setup is required for this static portfolio.

## How to Contribute

1. **Create a Feature Branch**  
   Branch from `main` with a descriptive name:

   ```bash
   git checkout -b feature/add-resume-download
   ```

2. **Make Your Changes**

   - Implement the fix or feature.
   - Update documentation if needed (e.g., README.md or data files in `src/data/`).
   - Ensure the site renders correctly across devices.

3. **Commit Your Changes**  
   Use conventional commit messages for clarity:

   ```bash
   git commit -m "feat: add resume download button with PDF export"
   ```

4. **Push to Your Branch**

   ```bash
   git push origin feature/add-resume-download
   ```

5. **Open a Pull Request**
   - Create a PR from your fork to the original repo.
   - Describe the changes, motivation, and how to test (e.g., "Test on mobile: swipe gestures now smoother").
   - Reference any related issues (e.g., "Fixes #45").

PRs will be reviewed based on alignment with the portfolio's clean, minimal aesthetic.

## Code Style and Linting

Consistency is key for a polished site. We enforce:

- **ESLint & TypeScript**: Strict typing and linting. Run `npm run lint` to check.
- **Prettier**: Auto-formatting. Run `npm run format` to apply.
- **Tailwind**: Use utility classes; avoid custom CSS unless necessary.
- **shadcn/ui & DevUI**: Extend components following their docs.

Before committing:

```bash
npm run lint:fix
npm run format
```

New components go in `src/components/` or `src/ui/`, following existing patterns.

## Testing

While this is a portfolio, we encourage manual testing for responsiveness and performance:

- **Browser Testing**: Chrome, Firefox, Safari; use DevTools for mobile emulation.
- **Accessibility**: Run Lighthouse audits for AA compliance.
- **Performance**: Aim for <2s load times; optimize images in `public/`.

For automated tests (future), we'll add Jest for components.

## Pull Request Guidelines

- **Focused Scope**: One PR per change (e.g., UI tweak vs. new section).
- **Clear Title**: Action-oriented (e.g., "fix: resolve Tailwind purge issues on build").
- **Description Checklist**:
  - [ ] What does this change?
  - [ ] Why is it needed?
  - [ ] How to test?
  - [ ] Screenshots/GIFs for visual changes?
- **Up-to-Date Branch**: Rebase on `main` before submitting.
- **No Breaking Changes**: Maintain backward compatibility.

Reviews aim for quick turnaround—expect feedback within 1-2 days.

## Questions?

For codebase questions, setup help, or ideas:

- Start a GitHub Discussion.
- Email the maintainer at [mdranju23@gmail.com](mailto:mdranju23@gmail.com).
- Check the [README](README.md) for quick starts.

Happy contributing! Let's make this portfolio shine. ✨
