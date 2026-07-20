# Server Environment Variables

Create a `.env` file in the `server/` directory with the following variables.
This file is git-ignored for security. DO NOT commit real secrets.

```env
# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_db_password
DB_NAME=mtech_solutions

# Server Configuration
PORT=5000
NODE_ENV=development

# JWT Authentication
JWT_SECRET=use_a_long_random_string_here

# Client URL (for CORS)
CLIENT_URL=http://localhost:3000

# Email Configuration (optional)
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password

# AI / LLM Integration (optional - for AI Assistant)
OPENAI_API_KEY=
ANTHROPIC_API_KEY=
QWEN_API_KEY=
```

## Installation

```bash
cd server
npm install
cp ENV_SETUP.md .env  # then edit .env with real values
npm run dev
```
