# Website Content Management Plan

This document outlines the discussion and plan for integrating a headless Content Management System (CMS) into the Aireal project to allow for dynamic content updates without changing the source code.

## The Goal

The primary goal is to empower the team to update website content (like blog posts, feature descriptions, testimonials, and navigation links) through a user-friendly interface, without needing developer intervention or a full site redeployment for every content change.

## The Solution: Headless CMS

We decided the best approach is to use a **headless CMS**.

A headless CMS separates the content management backend from the frontend presentation layer (our React application).

- **Backend:** A user-friendly interface for creating, editing, and managing content.
- **Frontend (The "Head"):** Our React application, which fetches content from the CMS via an API and is responsible for displaying it.

This model allows for seamless content updates, which can automatically trigger a rebuild of the site on Vercel to show the new content.

## CMS Options Explored

We considered several leading headless CMS options.

### Top Open-Source Headless CMSs

We researched the top free and open-source options, focusing on those with strong community support and modern developer experiences.

| Feature | Strapi | Payload CMS | Directus |
| :--- | :--- | :--- | :--- |
| **Primary Language** | JavaScript | TypeScript | TypeScript |
| **Content Modeling** | GUI-based Admin Panel | Code-based (TypeScript) | GUI-based Admin Panel |
| **Database** | Supports PostgreSQL, MySQL, SQLite | Supports MongoDB, PostgreSQL | Supports PostgreSQL, MySQL, MS SQL, etc. |
| **GitHub Stars** | ~60,000+ | ~22,000+ | ~26,000+ |
| **Key Strength** | Most popular, huge plugin ecosystem | Developer-first, code-based config | Introspects existing SQL databases |

### The Role of WordPress

We also discussed using WordPress, given its industry dominance. We established a key distinction:

1.  **Traditional WordPress:** A monolithic system where the backend and frontend (themes) are tightly coupled. This is **not** compatible with our React application.
2.  **Headless WordPress:** Using the WordPress admin panel as a backend content source and fetching that content via its API into our React application.

| Feature | Headless WordPress | Modern Headless CMS (Strapi/Payload) |
| :--- | :--- | :--- |
| **Architecture** | Monolithic by origin, with an API added on. | Headless-native. Built to serve content via an API. |
| **Technology** | PHP & MySQL | Node.js & TypeScript (same as our frontend) |
| **Admin Experience** | World-famous, highly familiar to non-technical users. | Modern and clean, but potentially new to some users. |
| **Developer Experience**| Can be clunky; often requires PHP or plugins for customization. | Excellent; streamlined, code-first or clean GUI approach. |
| **Performance** | Can be slower due to PHP/plugin overhead. | Typically much faster and more lightweight. |

## Final Decision: Headless WordPress

**We have decided to proceed with Headless WordPress.**

The deciding factor was that **the team already has significant expertise with WordPress**. Leveraging this existing knowledge is the most efficient and practical path forward, as it minimizes the learning curve for content editors.

## Action Plan for Implementation

Here is the step-by-step plan to integrate Headless WordPress with our project:

1.  **Set Up a WordPress Instance:**
    *   A standard WordPress site will be set up on a hosting provider. This will serve as our content backend.

2.  **Install Key Plugins:**
    *   **Advanced Custom Fields (ACF):** To create the custom content structures (e.g., Features, Testimonials, Pricing Plans) that mirror our current `constants.ts` file.
    *   **WPGraphQL (Recommended):** To provide a more efficient and flexible GraphQL API for our React app to consume, as an alternative to the standard WordPress REST API.

3.  **Model Content in WordPress:**
    *   Using ACF, we will replicate our site's content structure within the WordPress admin panel, creating intuitive forms for the content team.

4.  **Connect React App to WordPress:**
    *   I will write the necessary code within our React application (e.g., in a new `src/lib/wordpress.ts` file) to fetch data from the WordPress API.
    *   Components will be refactored to consume this live data instead of hardcoded constants.

5.  **Enable Automatic Rebuilds on Vercel:**
    *   We will create a "Deploy Hook" in Vercel.
    *   We will configure WordPress to send a request (a webhook) to this URL whenever content is updated, triggering an automatic redeployment of the site with the fresh content. 