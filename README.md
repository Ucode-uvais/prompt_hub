# PromptHub

**PromptHub** is an innovative platform designed for creating, sharing, and managing AI prompts. Built using Next.js, this platform provides a full-featured CRUD system, integrates MongoDB for data management, and secures user authentication with NextAuth.

## Features

- **Next.js**: Leverages the latest features of Next.js for server-side rendering and static site generation.
- **CRUD Operations**: Full support for Create, Read, Update, and Delete operations to manage AI prompts.
- **MongoDB**: Utilizes MongoDB for efficient data storage and retrieval.
- **NextAuth**: Implements secure authentication and authorization using NextAuth.
- **Modern Design**: Incorporates the glassmorphism trend for a sleek and modern UI.
- **Prompt Discovery**: Allows users to explore AI prompts shared by the community and contribute their own.
- **Prompt Management**: Users can edit or delete their prompts as needed.
- **Profile Page**: Each user has a dedicated profile page showcasing all their created prompts.
- **Copy to Clipboard**: Provides a "Copy to Clipboard" feature for easy use of AI prompts.
- **Tag-Based Search**: Users can search prompts by specific tags for easier discovery of related content.
- **Google Authentication**: Secure Google authentication through NextAuth for a seamless login experience.

## Installation

To get started with PromptHub, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/prompthub.git
   cd prompthub
   ```
2. **Install dependencies:**

- npm install

3. **Set up environment variables:**

- Create a .env.local file in the root directory and add the following variables:

- MONGODB_URI=your_mongodb_uri
- GOOGLE_ID=your_google_id
- GOOGLE_CLIENT_SECRET=your_google_client_secret
- NEXTAUTH_URL=http://localhost:3000
- NEXTAUTH_URL_INTERNAL=http://localhost:3000
- NEXTAUTH_SECRET=your_nextauth_secret

Replace the placeholder values with your actual credentials. These can be obtained from Google Cloud Console, Cryptpool (for a random Auth Secret), and MongoDB.

4.  **Run the development server:**

- npm run dev

## API Endpoints

- GET /api/prompts: Retrieve all prompts.
- POST /api/prompts: Create a new prompt.
- GET /api/prompts/: Retrieve a specific prompt by ID.
- PUT /api/prompts/: Update a specific prompt by ID.
- DELETE /api/prompts/: Delete a specific prompt by ID.

