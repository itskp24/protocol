git clone <your-repo-url>
cd <project-directory>
npm install
```

3. Start the application:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Detailed Setup Instructions

For detailed setup instructions, common issues, and troubleshooting steps, please see [SETUP.md](SETUP.md).

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Express.js backend
- PostgreSQL database

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
├── shared/          # Shared code between frontend and backend
└── SETUP.md        # Detailed setup instructions