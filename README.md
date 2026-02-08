# Portfolio Website

A modern, responsive portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS. Features smooth animations, dark mode support, and a fully accessible design.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Runtime**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Motion (formerly Framer Motion)
- **UI Components**: Radix UI, Shadcn UI
- **Forms**: React Hook Form + Zod
- **Linting**: Biome
- **CSS Linting**: Stylelint
- **Package Manager**: pnpm

## 📋 Prerequisites

- **Node.js**: >= 22.21.1
- **pnpm**: >= 10.23.0

## 🛠️ Getting Started

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio
```

1. Install dependencies:

```bash
pnpm install
```

1. Set up environment variables:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your configuration:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_EMAIL=your-email@example.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourusername
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/yourusername
NEXT_PUBLIC_PORTFOLIO_URL=https://yourportfolio.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

1. Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📜 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run linters (Biome + Stylelint)
- `pnpm lint:fix` - Fix linting issues automatically
- `pnpm format` - Format code with Biome and Stylelint
- `pnpm type-check` - Run TypeScript type checking
- `pnpm test` - Run tests (when implemented)
- `pnpm docker:build` - Build Docker image
- `pnpm docker:run` - Run Docker container
- `pnpm docker:dev` - Start development with Docker Compose

## 🏗️ Project Structure

```text
portfolio/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── projects/          # Projects page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── assets/           # Site-wide components (Navbar, Footer, Logo)
│   ├── partials/         # Page sections (Hero, About, Showcase, etc.)
│   ├── providers/        # Context providers (Theme, ErrorBoundary)
│   └── ui/               # Reusable UI components (Button, Input, etc.)
├── constants/            # Application constants and configuration
├── data/                 # Static data (projects, skills, hero intro)
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and helpers
├── public/               # Static assets
├── styles/               # Global styles and CSS layers
├── types/                # TypeScript type definitions
└── docker-compose.dev.yml # Docker Compose configuration for development
```

## 🎨 Architecture

### Component Organization

- **UI Components** (`components/ui/`): Reusable, styled components built with Radix UI primitives and CVA for variants
- **Page Sections** (`components/partials/`): Large sections used on pages (Hero, About, Showcase, etc.)
- **Site Components** (`components/assets/`): Site-wide components like Navbar and Footer

### Styling Strategy

The project uses a layered CSS approach with Tailwind CSS:

- **Base Layer**: Global resets and base styles
- **Layout Layer**: Layout utilities and container styles
- **Components Layer**: Component-specific styles
- **Utilities Layer**: Reusable utility classes
- **Overrides Layer**: Theme overrides and customizations

### State Management

Currently using React Context for theme management. For more complex state needs, consider adding:

- Zustand (lightweight state management)
- Jotai (atomic state management)

### Error Handling

- React Error Boundaries catch component errors
- Environment variable validation using Zod
- Graceful error fallbacks for user-facing errors

## 🧪 Testing

Testing infrastructure is in progress. When implemented, it will include:

- **Unit Tests**: Vitest + React Testing Library
- **Integration Tests**: Component and feature testing
- **E2E Tests**: Playwright for critical user journeys

To run tests (once implemented):

```bash
pnpm test
```

## 🐳 Docker

### Development

```bash
pnpm docker:dev
```

This will start the development server in a Docker container with hot reload enabled.

### Production

```bash
pnpm docker:build
pnpm docker:run
```

## 🔒 Environment Variables

All environment variables are validated using Zod. See `lib/env.ts` for the schema.

Required variables:

- None (all are optional with defaults)

Optional variables:

- `NEXT_PUBLIC_SITE_URL` - Your site URL
- `NEXT_PUBLIC_EMAIL` - Your contact email
- `NEXT_PUBLIC_GITHUB_URL` - Your GitHub profile URL
- `NEXT_PUBLIC_LINKEDIN_URL` - Your LinkedIn profile URL
- `NEXT_PUBLIC_TWITTER_URL` - Your Twitter profile URL
- `NEXT_PUBLIC_PORTFOLIO_URL` - Your portfolio URL
- `NEXT_PUBLIC_API_URL` - API base URL (if using API routes)
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID

## 📝 Code Quality

### Linting

- **Biome**: Fast linter and formatter for JavaScript/TypeScript
- **Stylelint**: CSS/SCSS linter with Tailwind support

### Pre-commit Hooks

Husky + lint-staged ensure code quality before commits:

- Auto-format code with Biome
- Run lint checks
- Fix auto-fixable issues

### Type Safety

- TypeScript strict mode enabled
- All components properly typed
- Environment variables validated with Zod

## 🎯 Performance Optimizations

- Next.js Image optimization for all images
- Font optimization with `next/font`
- Code splitting with dynamic imports (where applicable)
- Standalone output for Docker deployments
- Package import optimization for large libraries

## ♿ Accessibility

- Semantic HTML throughout
- ARIA labels where needed
- Keyboard navigation support
- Focus management
- Screen reader friendly
- WCAG AA compliant color contrast (verified with Lighthouse)

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on Vercel
3. Add environment variables
4. Deploy!

### Docker

Build and push your Docker image:

```bash
pnpm docker:build
pnpm docker:push
```

### Other Platforms

The project uses Next.js standalone output, making it compatible with:

- AWS Lambda
- Google Cloud Run
- Azure Functions
- Any Node.js hosting platform

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Motion Documentation](https://motion.dev)
- [Radix UI Documentation](https://www.radix-ui.com)

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Ensure all linting and type checks pass (`pnpm lint` and `pnpm type-check`)
5. Commit your changes using conventional commits (`git commit -m 'feat: add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Commit Message Format

This project uses [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

Mehmed Khan

- Portfolio: [mehmedkhan.dev](https://mehmedkhan.dev)
- GitHub: [@smmehmedkhan](https://github.com/smmehmedkhan)
- LinkedIn: [smmehmedkhan](https://linkedin.com/in/smmehmedkhan)
- Twitter: [@sm_mehmed_khan](https://twitter.com/sm_mehmed_khan)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) team for the amazing framework
- [Vercel](https://vercel.com) for hosting and deployment platform
- [Radix UI](https://www.radix-ui.com) for accessible component primitives
- [Shadcn](https://ui.shadcn.com) for component inspiration
- [Tailwind CSS](https://tailwindcss.com) team for the utility-first CSS framework
