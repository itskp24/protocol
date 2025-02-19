git clone <your-repo-url>
cd <project-directory>
```

2. Run the setup script:
```bash
chmod +x setup.sh
./setup.sh
```

## Manual Setup

If you prefer to set up manually, follow these steps:

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```env
DATABASE_URL=postgresql://username:password@localhost:5432/database_name
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Project Structure

```
├── client/           # Frontend code
│   ├── src/
│   │   ├── components/  # React components
│   │   │   ├── sections/  # Page sections
│   │   │   └── ui/        # UI components
│   │   ├── hooks/      # Custom React hooks
│   │   ├── lib/        # Utility functions
│   │   └── pages/      # Page components
├── server/           # Backend code
│   ├── routes.ts    # API routes
│   └── storage.ts   # Data storage logic
└── shared/          # Shared code
    └── schema.ts    # Database schema