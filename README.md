# EcoDrop - Sustainable Living & Eco-Friendly Dropshipping

EcoDrop is a modern e-commerce platform dedicated to sustainable living and eco-friendly products. Built with [Next.js](https://nextjs.org), [React](https://react.dev), and [Tailwind CSS](https://tailwindcss.com), it offers a seamless shopping experience for conscious consumers.

## 🚀 Features

-   **Product Catalog**: Browse a curated selection of eco-friendly products.
-   **Shopping Cart**: Fully functional cart with persistent state management using Zustand.
-   **Responsive Design**: Optimized for mobile, tablet, and desktop devices.
-   **Checkout Process**: Simulated multi-step checkout flow with form validation.
-   **Email Notifications**: Integration with [Resend](https://resend.com) for order confirmation emails.
-   **SEO Optimized**: Server-side rendering and meta tags for better search engine visibility.
-   **Analytics**: Google Tag Manager integration for tracking user interactions.

## 🛠 Tech Stack

-   **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **State Management**: [Zustand](https://github.com/pmndrs/zustand)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Email**: [Resend](https://resend.com/)
-   **Testing**: [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/)

## 📂 Project Structure

```
src/
├── app/                 # Next.js App Router pages and API routes
│   ├── api/             # Backend API routes (e.g., email sending)
│   ├── data/            # Static data (e.g., product list)
│   ├── [pages]/         # Individual pages (about, checkout, etc.)
│   └── layout.tsx       # Root layout component
├── components/          # Reusable React components (Navbar, Footer, etc.)
├── store/               # Global state management (Zustand stores)
├── types/               # TypeScript type definitions
└── __tests__/           # Unit and integration tests
```

## 🏁 Getting Started

### Prerequisites

-   Node.js 18.x or higher
-   npm, yarn, pnpm, or bun

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/ecofriendlydropshipping-site.git
    cd ecofriendlydropshipping-site
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  Set up environment variables:
    Create a `.env.local` file in the root directory and add the following:
    ```env
    RESEND_API_KEY=your_resend_api_key
    ```

### Running the Project

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🧪 Testing

This project uses Jest and React Testing Library for testing.

To run tests:
```bash
npm test
```

To run tests in watch mode:
```bash
npm run test:watch
```

To generate a coverage report:
```bash
npm run test:coverage
```

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📄 License

This project is licensed under the MIT License.
