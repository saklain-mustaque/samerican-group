# GEMINI.md - Samerican Group Website

## Project Overview

This project is a React-based website for the Samerican Group. It is built using Vite for fast development and bundling, and styled with Tailwind CSS. The website appears to be a company landing page, showcasing their services and information.

**Inspiration:**

*   **Content:** The content for this website is based on the content from [w3global.com](https://w3global.com).
*   **Style & Effects:** The visual style and effects are inspired by [www.swoonstaffing.com](https://www.swoonstaffing.com).

**Key Technologies:**

*   **React:** A JavaScript library for building user interfaces.
*   **Vite:** A modern front-end build tool that significantly improves the development experience.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
*   **Framer Motion:** A library for creating animations in React.
*   **Keen Slider:** A library for creating touch-friendly and performant sliders.
*   **Lucide React:** A library of simply designed icons.
*   **React Router:** For client-side routing.

## Building and Running

To get the project up and running, follow these steps:

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Run the Development Server:**
    ```bash
    npm run dev
    ```
    This will start a development server, and you can view the website in your browser at the address provided in the console.

3.  **Build for Production:**
    ```bash
    npm run build
    ```
    This will create a `dist` directory with the optimized production build of the website.

4.  **Deploy to GitHub Pages:**
    ```bash
    npm run deploy
    ```
    This will deploy the contents of the `dist` directory to the `gh-pages` branch of the repository.

## Development Conventions

*   **Component-Based Architecture:** The project follows a component-based architecture, with components located in the `src/components` directory.
*   **Styling:** Tailwind CSS is used for styling. Utility classes are preferred over custom CSS.
*   **Hero Images:** Most pages should feature a prominent hero image to create a visually engaging experience.
*   **Linting:** The project uses ESLint for code quality and consistency. You can run the linter with the following command:
    ```bash
    npm run lint
    ```
*   **File Structure:**
    *   `src/components`: Contains reusable React components like `Navbar.jsx`, `Footer.jsx`, and `Hero.jsx`.
        *   `src/components/home`: Contains components specific to the homepage.
    *   `src/pages`: Contains top-level page components, such as `Home.jsx`, `About.jsx`, and `Contact.jsx`.
    *   `src/assets`: Contains static assets like images and SVGs.
    *   `public`: Contains static assets that are not processed by the build tool.
