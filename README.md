# Meera Works – Responsive React Landing Page

## 1. Project Overview

Meera Works is a responsive marketing landing page designed for a digital planning and workspace product concept.

The page introduces a workspace that helps small teams, founders and creators plan their priorities, track progress and grow together.

The application is developed using React and Vite, with responsive styling implemented through CSS Modules.

## 2. Technologies Used

- React
- Vite
- JavaScript (ES6+)
- HTML5
- CSS3
- CSS Modules
- ESLint

## 3. Key Features

- Responsive header with navigation links.
- Hero section with Meera Works branding and illustration.
- Feature cards highlighting the product benefits.
- How It Works section with three simple steps.
- Registration form with full name and email fields.
- Native required-field validation.
- Native email format validation.
- Accessible registration success message.
- Responsive mobile, tablet and desktop layouts.
- Keyboard-accessible navigation and form controls.

**Note:** The registration form demonstrates local success feedback. It does not connect to a backend or store submitted information on a remote server.

## 4. Project Structure

```text
SkillNexa_Project/
│
├── public/
│   ├── Meera_Works_Logo.svg
│   ├── Workspace_Hero.svg
│   ├── Icon_Plan.svg
│   ├── Icon_Track.svg
│   └── Icon_Grow.svg
│
├── src/
│   ├── App.jsx
│   ├── App.module.css
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── package-lock.json
├── eslint.config.js
└── README.md
```

## 5. Application Sections

### Header
Displays the Meera Works brand identity and navigation links.

### Hero
Introduces the product with the headline:

"Make room for your best work."

### Features
Highlights three product benefits:
- Plan with clarity
- Keep momentum
- Grow together

### How It Works
Explains the three-step workflow:
1. Capture priorities.
2. Make progress visible.
3. Review and refine.

### Registration Form
Collects:
- Full name
- Email address

The form validates required fields and email format and displays a local confirmation message after successful submission.

### Footer
Displays the Meera Works copyright and privacy-related messaging.

## 6. Setup Instructions

### Prerequisites
- Node.js
- npm

### Install Dependencies

Run the following command from the project directory:

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

Open the local address displayed in the terminal.

### Run ESLint

```bash
npm run lint
```

### Create Production Build

```bash
npm run build
```

The production-ready files are generated inside the `dist` directory.

## 7. Testing and Verification

The following checks were completed:

| Test | Result |
|---|---|
| Desktop layout – 1440px | PASS |
| Tablet layout – 768px | PASS |
| Mobile layout – 390px | PASS |
| Keyboard navigation | PASS |
| Invalid email validation | PASS |
| Registration success message | PASS |
| Semantic HTML landmarks | PASS |
| ESLint validation | PASS |
| Production build | PASS |
| Navigation links | PASS |
| Google Chrome | PASS |
| Mozilla Firefox | PASS |
| Microsoft Edge | PASS |

## 8. Accessibility

The application includes:

- Semantic HTML elements for page structure.
- Accessible labels for registration fields.
- Native browser form validation.
- Accessible live status feedback for successful registration.
- Keyboard navigation support.
- Visible keyboard focus indicators.

## 9. Responsive Design

The application was tested at the following viewport sizes:

- Mobile: 390px
- Tablet: 768px
- Desktop: 1440px

CSS media queries are used to adapt the layout across different screen sizes.

## 10. Design and Branding

The landing page follows the supplied Meera Works design direction, using the provided logo, illustrations and feature icons.

The implementation uses the specified brand palette and system-based typography.

## 11. Build and Code Quality

The following project validation commands completed successfully:

- `npm run lint`
- `npm run build`

The production build was generated successfully using Vite.

## 12. Project Completion

The landing page implementation, responsive layout checks, form validation, browser testing, lint validation and production build have been completed.

**GitHub Repository:** To be added after publishing.

**Live Website:** To be added after deployment.