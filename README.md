# atlys-dashboard-v1

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Project Description

```
Atlys Dashboard
- 2 dashboard page named Home,Login &  invalid routes redirect to login page.
- Login page redirects to Home on filling up login/signup details.
- Username/email filled up in login/signup modal is set as username on Home page.

```
### Project Assumptions
```
- Only 2 pages (Home, Login) needs to be developed for the assignment with Login as the default page.
- Login data doesnt need to be saved as no use of APIs mentioned.
- Active username is to be stored in localStorage for displaying the user's name on Home page.
- Clicking on Post button on home page triggers the login/signup modal.
- Project resets to its initial state on refresh as no external data storing service is involved.
```
### Compile for production

```
npm run build
```

### Deployed assignment link

```
https://atlys-dash.netlify.app/
```