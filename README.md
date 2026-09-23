# paradu'l

## 1. Overview
paradu'l is a web application that helps users digitally organize their wardrobe, mix and match outfits, and use personalized data insights to make smarter fashion choices. It solves the problem of impulsive shopping and wardrobe underutilization by giving people a visual inventory of what they already own to better understand their personal style.

## 2. Setup and installation
*Note: The application is currently in Week 1 scaffolding (Demo Mode). No database or API is required to run this version.*

*   **Prerequisites:** Node.js installed on your machine.
*   **Clone the repository:** `git clone https://github.com/Jeniii26/Paradul-Tongol.git`
*   **Install dependencies:** Run `npm install` inside the project folder.
*   **Environment variables:** None required for Week 1 (Mock API mode). Placeholders will be added when the server is built.
*   **Database setup:** Pending for Week 2 (PostgreSQL).

## 3. How to run it
Start the local development server:
```bash
npm run dev
Open http://localhost:5173 in your browser. You will see a plain-text skeleton UI proving the initial React state logic is functioning.

4. Features and usage
Current Prototype Features (Demo Mode):

View Inventory: Upon loading the app, users see their current clothing items rendered from local React state.

Add Item: Clicking "+ Add Item" pushes a new mock clothing item into the state array, immediately updating the Wardrobe Gallery UI.

Log Outfit: Under the Saved Outfits section, clicking "Log as Worn Today" pushes the outfit's ID into the wear logs state, updating the analytics section at the bottom of the page.

(Note: There is no backend API yet. All data is handled via local React state and will reset upon refreshing the browser).

Planned Features (Weeks 2-3):

Digital Wardrobe Gallery: View, filter, and upload photos of individual clothing items.

Outfit Builder: Mix and match uploaded items to create and save specific outfits.

Calendar Planner: Assign saved outfits to specific dates or upcoming occasions.

Closet Insights: Analytics page displaying visualizations like cost-per-wear and wardrobe value.

5. Project structure
src/ - React front end, built by Vite

src/App.jsx - Core state logic, mock database arrays, and skeleton UI

src/main.jsx - Application entry point

project/ - Internal workspace documentation and screenshots

journal/ - Weekly reflection journals

6. Screenshots
7. Known issues and next steps
Missing Styles: The application is entirely unstyled. The Figma design system (including custom typography and layout grids) still needs to be translated into CSS.

Data Persistence: There is no server, database, or API connected. The app forgets all inventory and wear logs upon refreshing the page.

Next Steps: Week 2 focuses on setting up the Express API, configuring the PostgreSQL database, and beginning the CSS styling for the Wardrobe Gallery.

AI Usage
AI was used to help structure the initial project proposal, refine the design system tokens, and format this documentation. For full details, see AI-USAGE.md.
