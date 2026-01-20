# NextStore

A modern e-commerce platform built with Next.js 16 (App Router) featuring authentication, product browsing, and item management.

## Features

- **Landing Page**: 5 sections showcasing the platform
- **Public Browsing**: Browse items and view detailed product information
- **Authentication**: Mock login with hardcoded credentials stored in cookies
- **Protected Routes**: Add items page (only accessible when logged in)
- **Toast Notifications**: Feedback on successful actions
- **Responsive Design**: Clean, modern UI with Tailwind CSS

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Sonner** (toast notifications)
- **Cookie-based authentication**

## Setup & Installation

```bash
npm install
```

## Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Mock Login Credentials

- **Email**: `admin@example.com`
- **Password**: `password123`

## Routes

| Route         | Access    | Description                   |
| ------------- | --------- | ----------------------------- |
| `/`           | Public    | Landing page                  |
| `/login`      | Public    | Login page                    |
| `/items`      | Public    | Browse all items              |
| `/items/[id]` | Public    | View item details             |
| `/add-item`   | Protected | Add new item (requires login) |

## API Endpoints

All API routes are built-in Next.js API routes:

- `GET /api/items` - List all items
- `GET /api/items/[id]` - Get single item
- `POST /api/items` - Create item (requires auth cookie)

## Environment Variables

No environment variables are required. The app works out of the box with relative API paths.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New" → "Project"
4. Select your GitHub repository
5. Click "Deploy"

Your app will be live at `https://your-project.vercel.app`

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── items/          # API routes
│   ├── items/              # Items pages
│   ├── login/              # Login page
│   ├── add-item/           # Add item page
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Landing page
│   └── globals.css         # Global styles
├── components/
│   ├── NavBar.tsx          # Navigation
│   ├── Footer.tsx          # Footer
│   └── Toaster.tsx         # Toast notifications
└── lib/
    └── api.ts              # API utilities
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

MIT
