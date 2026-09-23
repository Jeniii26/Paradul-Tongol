# paradu'l

## 1. Overview

**paradu'l** is a web application that helps users digitally organize their wardrobe, mix and match outfits, and use personalized data insights to make smarter fashion choices.

It aims to address impulsive shopping and wardrobe underutilization by providing users with a visual inventory of the clothing items they already own, allowing them to better understand and manage their personal style.

## 2. Setup and Installation

> **Note:** The application is currently in **Week 1 scaffolding (Demo Mode)**. No database or backend API is required to run this version.

### Prerequisites

* [Node.js](https://nodejs.org/) installed on your machine.
* Git installed on your machine.

### Clone the Repository

```bash
git clone https://github.com/Jeniii26/Paradul-Tongol.git
cd Paradul-Tongol
```

### Install Dependencies

Run the following command inside the project folder:

```bash
npm install
```

### Environment Variables

No environment variables are required for Week 1.

The current prototype uses mock data and local React state. Environment variable placeholders will be added once the backend server is implemented.

### Database

Database setup is currently pending and is planned for **Week 2** using PostgreSQL.

## 3. How to Run

Start the local development server:

```bash
npm run dev
```

After starting the server, open the local URL shown in the terminal, typically:

```text
http://localhost:5173
```

The current version displays a basic prototype UI demonstrating the initial React state logic and application structure.

## 4. Features and Usage

### Current Prototype Features

The current Week 1 prototype operates in **Demo Mode** using local React state.

#### View Inventory

Upon loading the application, users can view the current clothing items rendered from local React state.

#### Add Item

Clicking **"+ Add Item"** adds a mock clothing item to the local state array and immediately updates the Wardrobe Gallery UI.

#### Log Outfit

Under the **Saved Outfits** section, clicking **"Log as Worn Today"** adds the selected outfit's ID to the wear logs state. The analytics section is then updated based on the logged outfit.

> **Note:** There is currently no backend API or database connection. All data is stored temporarily in React state and will be reset when the browser page is refreshed.

### Planned Features

The following features are planned for **Weeks 2-3**:

* **Digital Wardrobe Gallery**

  * View individual clothing items.
  * Filter wardrobe items.
  * Upload photos of clothing items.
  * Organize items by category and other attributes.

* **Outfit Builder**

  * Mix and match wardrobe items.
  * Create outfits.
  * Save created outfits for future use.

* **Calendar Planner**

  * Assign saved outfits to specific dates.
  * Plan outfits for upcoming occasions.

* **Closet Insights**

  * View wardrobe-related analytics.
  * Display visualizations such as cost-per-wear.
  * Analyze wardrobe value and usage.

## 5. Project Structure

```text
Paradul-Tongol/
├── src/
│   ├── App.jsx        # Core state logic, mock data, and prototype UI
│   └── main.jsx       # Application entry point
│
├── project/           # Internal workspace documentation and screenshots
├── journal/           # Weekly reflection journals
│
├── package.json       # Project dependencies and scripts
└── README.md          # Project documentation
```

## 6. Screenshots

Screenshots will be added as the application's UI development progresses.

<!-- Add screenshots here when available. -->

## 7. Known Issues and Next Steps

### Known Issues

* **Missing Styles:**
  The current prototype is minimally styled. The Figma design system, including typography, spacing, colors, and layout grids, still needs to be translated into the application's CSS.

* **No Data Persistence:**
  There is currently no server, database, or backend API connected. Inventory items, outfits, and wear logs are stored only in local React state and are lost when the page is refreshed.

* **Mock Data:**
  The current prototype uses mock clothing items and outfit data instead of persistent user data.

### Next Steps

Week 2 will focus on:

1. Setting up the Express backend API.
2. Configuring the PostgreSQL database.
3. Connecting the frontend to the backend.
4. Implementing data persistence.
5. Beginning CSS implementation based on the Figma design.
6. Developing the Wardrobe Gallery.

## 8. AI Usage

AI tools may be used during development as a supporting resource for:

* Understanding programming concepts and documentation.
* Debugging and troubleshooting errors.
* Generating suggestions for implementation approaches.
* Reviewing and improving code.
* Assisting with documentation.

AI-generated code and suggestions should be reviewed, tested, and understood before being incorporated into the project.

The project developers remain responsible for the final implementation and functionality of the application.
