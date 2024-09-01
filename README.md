# PromptHub

PromptHub is an innovative platform for developing and sharing AI prompts. Built with Next.js, it features a comprehensive CRUD AI Prompt sharing system, utilizes a MongoDB database, and implements NextAuth for authentication.

## Features

- **Next.js**: Utilizes the latest features of Next.js for server-side rendering and static site generation.
- **CRUD Operations**: Comprehensive Create, Read, Update, and Delete operations for managing AI prompts.
- **MongoDB**: Efficient data storage and retrieval using MongoDB.
- **NextAuth**: Secure authentication and authorization with NextAuth.
- **Modern Design with Glassmorphism Trend Style**: A modern and visually appealing design, incorporating the glassmorphism trend style for a sleek and contemporary appearance.
- **Discover and Share AI Prompts**: Allow users to discover AI prompts shared by the community and create their own prompts to share with the world.
- **Edit and Delete Created Prompts**: Users can edit their created prompts at any time and delete them when needed.
- **Profile Page**: Each user gets a dedicated profile page showcasing all the prompts they've created, providing an overview of their contributions.
- - **Copy to Clipboard**: Implement a convenient "Copy to Clipboard" functionality for users to copy the AI prompts for their use easily.
- **Search Prompts by Specific Tag**: Allow users to search for prompts based on specific tags, making finding prompts related to particular topics easier.
- **Google Authentication using NextAuth**: Enable secure Google authentication using NextAuth, ensuring a streamlined and trustworthy login experience.

  ## Installation

To get started with PromptHub, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/prompthub.git
   cd prompthub

2 **Install dependencies:**
    npm install

3 **Set up environment variables: Create a .env.local file in the root directory and add the following variables:**
     - MONGODB_URI=your_mongodb_uri.
     - GOOGLE_ID=.
     - GOOGLE_CLIENT_SECRET=.
     - NEXTAUTH_URL=http://localhost:3000.
     - NEXTAUTH_URL_INTERNAL=http://localhost:3000.
     - NEXTAUTH_SECRET=your_nextauth_secret.

  Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on these corresponding websites from Google Cloud Console, Cryptpool (for random Auth Secret), and MongoDB.

4 **Run the development server:**
    npm run dev


##API Endpoints

GET /api/prompts: Retrieve all prompts.
POST /api/prompts: Create a new prompt.
GET /api/prompts/:id: Retrieve a specific prompt by ID.
PUT /api/prompts/:id: Update a specific prompt by ID.
DELETE /api/prompts/:id: Delete a specific prompt by ID.

