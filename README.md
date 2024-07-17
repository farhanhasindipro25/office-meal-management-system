# Office Meal Management System

### TECHNOLOGIES USED

- Frontend

  - TailwindCSS
  - Javascript
  - ReactJS
  - React Router DOM
  - React Select
  - HeadlessUI
  - HeroIcons
  - tailwind-merge
  - clsx
  - formik
  - yup
  - Tanstack Query
  - Redux Toolkit
  - React Hot Toast

- Backend
  - NodeJS
  - ExpressJS
  - pg
  - PostGreSQL
  - JSON Web Token

### ATTRACTIONS & ADVANCEMENTS

- Colocated frontend codebase architecture and modular MVC backend codebase architecture.
- Maintainable and reusable components.
- Maintainable and reusable route -> controller -> service -> repository design pattern.
- Maintainable and reusable middleware checker patterns for Authentication and Authorization.
- Reusable styling kits, utility functions, service providers, static data organized separately for easier refactoring and debugging.
- Usage of commit-conventions for meaningful commit messages
  - doc: Documentation
  - chore: File/folder setup
  - feat: Feature
  - refactor: Changes that are not features.
  - fix: Fixation of issues/errors
  - etc

### CODEBASE ARCHITECTURE BREAKDOWN

- `README.md/:` Project documentation and setup instructions.
- `client/:` Frontend Codebase.
- `client/src/:` Contains source code for the application.
- `client/src/_libs:` All necessities and helpers colocated together.
- `client/src/_libs/assets:` Contains all assets of the project.
- `client/src/_libs/components:` Contains all components of the project.
- `client/src/_libs/form-initial-values:` Contains all formik initial values.
- `client/src/_libs/formik-schema:` Contains all form validation schemas.
- `client/src/_libs/routes:` Contains routing setup of the project.
- `client/src/_libs/services:` Contains providers and api endpoints.
- `client/src/_libs/styles:` Contains defined styles for the project.
- `client/src/_libs/utils:` Contains defined utilities for the project.
- `client/src/pages:` Contains page related components.
- `client/src/app.jsx:` Root component of the project.
- `client/src/app/main.jsx:` Root file of the project.
- `server:` Backend Codebase.
- `server/src/:` Contains source code for the application.
- `server/src/app.js:` Root application file.
- `server/src/db.js:` Entry point to establish database connection.
- `server/src/app/:` Contains colocated belongings.
- `server/src/app/config/`: Contains configuration setup as per the `.env` file.
- `server/src/app/middlewares/`: Contains middlewares of the project context.
- `server/src/app/routes/`: Contains reusable routing setup of the project context
- `server/src/app/modules/`: Contains entities of the project context as modules.
- `server/src/app/modules/auth`: Contains layers of Software Architectures for the auth module.
- `server/src/app/modules/categories`: Contains layers of Software Architectures for the categories module.
- `server/src/app/modules/items`: Contains layers of Software Architectures for the items module.
- `server/src/app/modules/orders`: Contains layers of Software Architectures for the orders module.
- `server/src/app/modules/roles`: Contains layers of Software Architectures for the roles module.
- `server/src/app/modules/scheduled-meals`: Contains layers of Software Architectures for the scheduled-meals module.
- `server/src/app/modules/users`: Contains layers of Software Architectures for the users module.
- `server/src/app/modules/weekly-schedules`: Contains layers of Software Architectures for the weekly-schedules module.
- `server/src/app/modules/**/**.utils.js`: Contains related utility functions.
- `server/src/app/modules/**/**.repository.js`: Contains database queries.
- `server/src/app/modules/**/**.services.js`: Contains business logic and database calls.
- `server/src/app/modules/**/**.controller.js`: Handles the application logic, processing requests from the routes and sending back a response to the routes.
- `server/src/app/modules/**/**.routes.js`: Defines the endpoints and routes for handling the HTTP requests.

# HOW TO SETUP THIS PROJECT IN YOUR LOCAL DEVICE

### GETTING THE FILES

**Clone this GitHub Repository to your desired location : https://github.com/farhanhasindipro25/office-meal-management-system.git**

### DATABASE SETUP

1. Open PGAdmin
2. Create a new database called "office_meal_management".
3. Right click on the database name and select restore.
4. Click on browse and select the 'office_meal_management.sql' file located inside the 'server' directory.
5. Select 'postgres' as the role.
6. Click Restore.
7. Now open up psql (SQL Shell).
8. Input the following:

```

Server [localhost]: localhost
Database [postgres]: postgres
Port [5432]: 5432
Username [postgres]: postgres
Password for user postgres: **ENTER PASSWORD FOR YOUR DEVICE'S POSTGRESQL ROLE**

```

9. Now you to see all databases, run:

```

 \l

```

10. Then to navigate to the database, run:

```

\c office_meal_management

```

11. Now to check all tables, run:

```

\dt

```

### SERVER-SIDE SETUP

1. Open the project in VSCode and open the terminal
2. Run: `cd server` to access the server side codebase
3. Now create a `.env` file in the root directory of the server directory.
4. Include the following in the `.env` file:

```
PORT=5000
ENVIRONMENT=development
ACCESS_TOKEN_SECRET=cafdsrgerverer
REFRESH_TOKEN_SECRET=nmfpqbfpfwqbpbp
ACCESS_TOKEN_EXPIRATION_TIME="1h"
REFRESH_TOKEN_EXPIRATION_TIME="4h"

```

5. Now run:

```

yarn install
yarn start

```

6. To check from the browser, run: 'http://localhost:5000'. You will get a success message of the server running'.
7. To check the API endpoints, open Postman
8. Import the 'Office Meal Management System.postman_collection.json' file and access the full collection.

### CLIENT-SIDE SETUP

1. Open up another terminal in VSCode and run `cd client` to access the client side codebase.
2. Now create a `.env.local` file in the root directory of the client directory.
3. Include the following in the `.env.local` file:

```
VITE_PUBLIC_BASE_URL=http://localhost:5000/api/v1

```

4. Run:

```

yarn install
yarn vite

```

5. To check from the browser, run: 'http://localhost:5173'.

**YOU ARE ALL SETUP TO VIEW AND INTERACT WITH THE PROJECT**
