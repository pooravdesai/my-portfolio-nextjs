# My Portfolio Website

A modern, responsive portfolio website built with **Next.js**, **Sass**, and **TailwindCSS**.

> This project is based on the [portfolio-nextjs](https://github.com/nixrajput/portfolio-nextjs) template by [nixrajput](https://github.com/nixrajput).

[![GitHub last commit](https://img.shields.io/github/last-commit/poorav/my-portfolio-nextjs?label=Last+Commit&style=flat)][repo]
[![GitHub License](https://img.shields.io/github/license/poorav/my-portfolio-nextjs?label=License&style=flat)][license]

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Styling**: SCSS, TailwindCSS, CSS Modules
- **Animations**: Framer Motion, Custom animations
- **Icons**: FontAwesome
- **Error Tracking**: Sentry
- *Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)
- [Deployment](#deployment)
- [License](#license)
- [Acknowledgments](#acknowledgments
    - [Changing Content](#changing-content)
  - [Deployment](#deployment)
  - [Contributing](#contributing)
  - [License](#license)
  - [Sponsor Me](#sponsor-me)
  - [Connect With Me](#connect-with-me)
  - [Activities](#activities)

## Features

- Responsive design for various screen sizes.
- A customizable portfolio section to showcase your projects.
- An about section to introduce yourself.
- Easily customizable with Sass for styling.

## Screenshots

![Screenshot 1](/screenshot-desktop.png)

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

You need to have the following software installed on your computer:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/) or [Yarn](https://yarnpkg.com/) package manager

### Installation

1. Star the repository.

2. Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/nixrajput/portfolio-nextjs.git
   ```

3. Navigate to the project directory:

   ```bash
   cd portfolio-nextjs
   ```

4. Install the project dependencies:

   If you're using npm:

   ```bash
   npm install:

   ```bash
   git clone https://github.com/yourusername/my-portfolio-nextjs.git
   ```

3. Navigate to the project directory:

   ```bash
   cd my-you're using Yarn:

   ```bash
   yarn install
   ```

## Usage

To start the development server and view the website locally, run the following command:

```bash
npm run dev
#or
pnpm run dev
# or
yarn dev
```

This will start the Next.js development server, and you can access the website in your web browser at `http://localhost:3000`.

## Customization

You can customize various aspects of the portfolio website to make it your own.

### Changing Content

1. Update the content in the `data` directory:

   - Edit the `projects.ts` file to add or modify project details.
   - Edit the `services.ts` file to add or modify services you provide.
   - Edit the `experiences.ts` file to add or modify experiences you have.
   - Edit the `skills.ts` file to add or modify skills you know.
   - Edit the `socialLinks.ts` file to add or modify social media links.

2. Replace or add images in the `public/images` directory to match your projects and profile picture.

## Deployment

To deploy the portfolio website to a hosting service of your choice, follow the deployment instructions for Next.js applications. Some popular hosting options include Vercel, Netlify, and GitHub Pages.

Remember to configure environment variables for sensitive information like email credentials if needed.

## Contributing
To customize the portfolio with your own information:

1. **Update Personal Data**:
   - Edit `src/constants/strings.ts` for personal information
   - Update `src/data/projects.ts` to showcase your projects
   - Modify `src/data/experiences.ts` with your work experience
   - Update `src/data/skills.ts` with your technical skills
   - Edit `src/data/services.ts` for services you offer
   - Update `src/data/socialLinks.ts` with your social media

2. **Update Images**:
   - Replace the profile picture at `public/images/profile.jpg`
 This project is optimized for deployment on [Vercel](https://vercel.com), which is the recommended platform for Next.js applications.

### Deploy to Vercel

1. License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

This project is built upon the excellent [portfolio-nextjs](https://github.com/nixrajput/portfolio-nextjs) template by [nixrajput](https://github.com/nixrajput). Thanks to the original author for creating such a solid foundation for building modern portfolio websites.

---

[repo]: https://github.com/poorav/my-portfolio-nextjs
[license]: https://github.com/poorav/my-portfolio-nextjs/blob/master/LICENSE

