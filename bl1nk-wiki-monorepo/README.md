# bl1nk-wiki-monorepo

## Overview
The **bl1nk-wiki-monorepo** is a monorepo structure designed to manage multiple applications and shared packages efficiently. This project primarily focuses on a frontend application built with Next.js, along with a shared UI package.

## Project Structure
```
bl1nk-wiki-monorepo
├── apps
│   └── frontend          # Frontend application using Next.js
│       ├── package.json  # Frontend dependencies and scripts
│       ├── next.config.js # Next.js configuration
│       ├── app           # Contains application pages and components
│       │   ├── generator  # Generator feature components
│       │   │   ├── page.tsx
│       │   │   └── layout.tsx
│       │   └── page.tsx   # Main entry point for the frontend
│       └── public        # Static assets (images, icons, etc.)
├── packages
│   └── ui               # Shared UI components package
│       └── package.json  # UI package dependencies and scripts
├── package.json         # Root package configuration
├── turbo.json           # Turborepo configuration
├── vercel.json          # Vercel deployment configuration
└── README.md            # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- pnpm (version 9.0.0 or higher)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd bl1nk-wiki-monorepo
   ```

2. Install dependencies:
   ```
   pnpm install
   ```

### Running the Frontend Application
To start the frontend application in development mode, navigate to the `apps/frontend` directory and run:
```
pnpm dev
```

### Building the Application
To build the frontend application for production, run:
```
pnpm build
```

### Deployment
The frontend application is configured to deploy automatically using Vercel. Changes to the `apps/frontend` directory will trigger a deployment.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.