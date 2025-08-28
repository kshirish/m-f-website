# My Choice Mortgage and Finance

This is a code bundle for My Choice Mortgage and Finance. The original project is available at https://www.figma.com/design/XCEFBKq8fYwuRxLGwyQSTx/Professional-Mortgage-Brokerage-Website.

## Features

- **React Router DOM**: Proper client-side routing with clean URLs
- **Responsive Design**: Works on all devices
- **Modern UI Components**: Built with Radix UI and Tailwind CSS
- **TypeScript**: Full type safety

## Routes

The application uses React Router for navigation with the following routes:

- `/` or `/home` - Home page with hero, services, and contact sections
- `/services` - Services overview (redirects to home)
- `/services/home-loans` - Home loans and mortgages page
- `/services/personal-finance` - Personal finance page
- `/services/commercial-finance` - Commercial finance page
- `/areas/sydney` - Sydney area page
- `/areas/melbourne` - Melbourne area page
- `/areas/perth` - Perth area page
- `/areas/adelaide` - Adelaide area page
- `/areas/sydney/suburbs/:suburb` - Sydney suburb pages (cbd, parramatta, bondi, manly, chatswood, penrith)
- `/calculator` - Loan calculator page
- `/about` - About section (scrolls to home page about section)
- `/contact` - Contact section (scrolls to home page contact section)

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Recent Updates

- **Migrated from hash-based routing to React Router DOM** for proper URL routing
- **Updated all navigation links** to use clean paths instead of hash fragments
- **Added proper SPA routing support** for production deployments
- **Maintained backward compatibility** with existing navigation patterns
