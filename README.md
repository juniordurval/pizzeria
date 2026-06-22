# 🍕 Ñam Ñam - Food Ordering App

A modern, high-performance, and visually stunning food ordering application built with **Next.js 14**, **Firebase**, and **Tailwind CSS**.

## ✨ Features

- 🚀 **Fast & Responsive:** Optimized for mobile-first experience.
- 🛒 **Real-time Cart:** Seamless adding, updating, and removing of items.
- 📱 **WhatsApp Integration:** One-click ordering via WhatsApp.
- 🔐 **Secure Auth:** Firebase Authentication for customers and admins.
- 🛡️ **Admin Dashboard:** Manage products, view orders, and update status.
- 📍 **Interactive Map:** Let customers know exactly where you are.
- 🎬 **Smooth Animations:** Polished UI with Framer Motion.

## 🛠️ Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript)
![Firebase](https://img.shields.io/badge/Firebase-orange?style=for-the-badge&logo=firebase)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge)
![Lucide Icons](https://img.shields.io/badge/Lucide_Icons-blue?style=for-the-badge)

## 🚀 Getting Started

### 1. Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Firebase Account](https://firebase.google.com/)
- [Vercel Account](https://vercel.com/) (for deployment)

### 2. Installation

Clone the repository and install dependencies:

```bash
git clone <your-repo-url>
cd nam-nam
npm install
```

### 3. Configuration

1. Create a `.env.local` file in the root directory.
2. Copy the contents from `.env.example` and fill in your Firebase credentials:

```bash
cp .env.example .env.local
```

3. **Firebase Setup:**
   - Go to [Firebase Console](https://console.firebase.google.com/).
   - Create a new project.
   - Enable **Authentication** (Email/Password).
   - Enable **Cloud Firestore**.
   - Go to Project Settings and copy your Web App configuration into `.env.local`.
   - **Crucial:** Update `NEXT_PUBLIC_WHATSAPP_NUMBER` with your number (including country code, e.g., `56912345678`).

### 4. Development

Start the development server:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the app.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket.
2. Connect your repository to [Vercel](https://vercel.com/).
3. Add your environment variables from `.env.local` in the Vercel project settings.
4. Click **Deploy**.

### Firebase Hosting

If you prefer Firebase Hosting, you can use the Firebase CLI to deploy the project after running `npm run build`.

## 👑 Admin Role

To assign the admin role to a user:
1. Register a user in the app.
2. Go to the **Firebase Console** -> **Firestore**.
3. Find the user document in the `users` collection.
4. Manually change the `role` field from `"customer"` to `"admin"`.

## 📁 Project Structure

```text
src/
├── app/            # Next.js App Router (Pages, Layouts)
├── components/     # UI Components (Atomic design)
├── context/        # React Contexts (Auth, Cart)
├── data/           # Static data (Menu)
├── hooks/          # Custom React Hooks
├── lib/           # Utility functions & Firebase config
├── styles/         # Global styles
└── types/          # TypeScript Interfaces
```

## 📄 License

This project is licensed under the MIT License.
"# pizzeria" 
