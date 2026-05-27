# RaawaAI

Lightweight assistant project with a Python backend and a Vite React frontend.

## Repository structure

- `backend/` — Python backend (FastAPI) and services
- `fronend/` — Frontend app (Vite + React) (note: folder name is `fronend`)

## Prerequisites

- Python 3.10+ and pip
- Node.js 16+ and npm or pnpm

## Backend (run locally)

1. Create and activate a virtual environment:

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

2. Install dependencies:

```powershell
pip install -r requirements.txt
```

3. Run the backend (common pattern using Uvicorn):

```powershell
uvicorn app.main:app --reload --port 8000
```

See `backend/README.md` for backend-specific details.

## Frontend (run locally)

1. Install dependencies:

```bash
cd fronend
npm install
```

2. Start the dev server:

```bash
npm run dev
```

The frontend dev server typically runs on `http://localhost:5173` (Vite default).

See `fronend/README.md` (if present) for more frontend details.

## Notes

- This README provides a minimal starting guide. Backend and frontend directories include their own READMEs with additional instructions.
- If you want, I can expand this README with architecture diagrams, environment variables, or deployment steps.
