## JobTask Store (Next.js + Express)

A simple Next.js 16 (App Router) application with:
- Public landing page (7 sections + navbar/footer)
- Public items list + item details pages (fetched from an Express API)
- Mock authentication (hardcoded credentials) stored in cookies
- Protected route: **Add Item** (only accessible when logged in)
- Toast notification on successful product creation

## Setup & Installation

From `jobtask-nextjs/`:

```bash
npm install
npm install --prefix server
```

## Run (Dev)

Run both Next.js and the Express API together:

```bash
npm run dev:all
```

- Next.js: `http://localhost:3000`
- Express API: `http://localhost:4000`

## Mock Login Credentials

- Email: `admin@example.com`
- Password: `password123`

## Route Summary

- `/`: Landing page (public)
- `/login`: Login page (public)
- `/items`: Items list (public)
- `/items/[id]`: Item details (public)
- `/add-item`: Add item (protected by middleware)

## API Endpoints (Express)

- `GET /items`: List all items
- `GET /items/:id`: Get one item
- `POST /items`: Create item (**requires cookie `auth=1`**)
- `GET /health`: Health check

## Environment

The Next.js app reads the API base URL from:

- `NEXT_PUBLIC_API_URL` (defaults to `http://localhost:4000`)

## Tech Used

- Next.js 16 (App Router)
- React 19
- Tailwind CSS
- Express.js + JSON file storage
- Cookie auth + middleware route protection
- Sonner (toast notifications)
# scicjobtask
