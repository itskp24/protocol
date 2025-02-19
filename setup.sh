#!/bin/bash

# Color codes for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting setup for the Portfolio Website...${NC}"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}Node.js is not installed. Please install Node.js v20 or later.${NC}"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d "v" -f 2 | cut -d "." -f 1)
if [ "$NODE_VERSION" -lt 20 ]; then
    echo -e "${RED}Node.js version 20 or later is required. Current version: $(node -v)${NC}"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${RED}npm is not installed. Please install npm.${NC}"
    exit 1
fi

echo -e "${GREEN}Installing dependencies...${NC}"
if ! npm install; then
    echo -e "${RED}Failed to install dependencies${NC}"
    exit 1
fi

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo -e "${GREEN}Creating .env file...${NC}"
    cat > .env << EOL
DATABASE_URL=postgresql://username:password@localhost:5432/database_name
EOL
    echo -e "${YELLOW}Please update the DATABASE_URL in .env with your database credentials${NC}"
fi

# Build the project
echo -e "${GREEN}Building the project...${NC}"
if ! npm run build; then
    echo -e "${RED}Build failed. Please check the errors above.${NC}"
    exit 1
fi

echo -e "${GREEN}Setup completed successfully!${NC}"
echo -e "To start the development server:"
echo -e "${YELLOW}1. Update .env file with your database credentials${NC}"
echo -e "${YELLOW}2. Run: npm run dev${NC}"
echo -e "The application will be available at: ${YELLOW}http://localhost:5000${NC}"