# react-task1

### Basic Routing

1. **Basic Setup:**
   - Create a new React application using `create-react-app`.
   - Install `react-router-dom` using `npm install react-router-dom`.
   - Set up a basic router with two routes: Home (`/`) and About (`/about`).

2. **Nested Routes:**
   - Create a route for a dashboard (`/dashboard`) with nested routes for a profile (`/dashboard/profile`) and settings (`/dashboard/settings`).

3. **404 Page:**
   - Implement a 404 page that is displayed for any route that does not match the defined routes.

### Advanced Routing

4. **Dynamic Routes:**
   - Create a route that can handle dynamic parameters, such as a user profile page (`/user/:userId`).
   - Fetch and display user data based on the `userId` parameter.

5. **Query Parameters:**
   - Implement a route that can read query parameters from the URL and display them, such as a search page (`/search?query=react`).

6. **Redirects:**
   - Set up a redirect from `/old-path` to `/new-path`.

### Navigation

7. **Link Component:**
   - Use the `Link` component to navigate between the routes you have created.
   - Create a navigation bar with links to Home, About, and Dashboard.

8. **Programmatic Navigation:**
   - Use the `useHistory` hook to navigate programmatically within a component (e.g., redirect to the home page after a form submission).

### Project Task

13. **Mini Project:**
    - Combine all the above tasks into a small project. Create a multi-page application with the following routes: Home, About, User Profile, Dashboard (with nested routes for Profile and Settings), and a 404 page.
