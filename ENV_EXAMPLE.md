# Environment Variables Example (.env)

Copy this to `.env` in the server folder and fill in real values.
Do NOT commit `.env` to git.

# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=mtech_solutions

# Server Configuration
PORT=5000
NODE_ENV=production

# JWT Authentication
JWT_SECRET=your_jwt_secret_key_change_in_production

# Client URL (for CORS)
CLIENT_URL=http://localhost:3000

# Email Configuration (optional, for notifications)
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=
EMAIL_PASS=

# AI / LLM Integration (optional)
OPENAI_API_KEY=
ANTHROPIC_API_KEY=
QWEN_API_KEY=
