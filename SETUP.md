git clone <repository-url>
cd <project-directory>
npm install
```

## Running the Application

### Important: Always run commands from the project root directory!

```bash
# First, make sure you're in the project root directory (where package.json is)
# NOT in client/ or server/ directories

# 1. Install dependencies
npm install

# 2. Start the application
npm run dev
```

### Common Errors

#### ESM URL Scheme Error
If you see this error:
```
Error [ERR_UNSUPPORTED_ESM_URL_SCHEME]: Only URLs with a scheme in: file, data, and node are supported by the default ESM loader
```

This usually happens when:
1. You're running the command from the wrong directory (e.g., from client/ or server/)
2. Node modules are not properly installed

To fix:

```bash
# 1. Make sure you're in the project root directory
cd /path/to/your/project  # where package.json is located

# 2. Clean installation
rm -rf node_modules package-lock.json
npm cache clean --force
npm install

# 3. Start the application again
npm run dev
```

## Project Structure and Commands

The application is set up to run both client and server together:
- Client (Vite frontend): Runs on port 5000
- Server (Express backend): Also runs on port 5000

You don't need to run the client and server separately - they are configured to work together through a single command.

## Development Mode

When you run `npm run dev`, it:
1. Starts the Express server
2. Sets up Vite development server
3. Configures proxy for API requests


## Troubleshooting

If the application won't start:
1. Check you're in the right directory:
```bash
# Should show the package.json
ls package.json
```

2. Verify Node.js version:
```bash
node --version  # Should be v20 or higher
```

3. Clear npm cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

4. Check port availability:
```bash
# Windows (Command Prompt)
netstat -ano | findstr :5000

# Mac/Linux
lsof -i :5000
```

### Project Structure

```
├── client/           # Frontend code
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/      # Page components
│   │   └── ...
├── server/           # Backend code
└── shared/          # Shared code
```

## Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/database_name