# cs452-pe04-HuuDat

## Input  
Users interact with the app through a basic UI. They can navigate between pages using links. On the "Add City" page, users enter city information such as name, country, and population. On the "Cities List" page, users click on a city name to view its details. All input is handled through form fields and links managed by React Router.

## Process  
This app uses React Router v6 to implement navigation and nested routes. The `useState` hook stores the user’s form input temporarily, and `useParams` is used to fetch the specific city ID when showing city details. The `useNavigate` hook is used to redirect the user back to the list after adding a city. The `<Outlet />` component is used to render city details within the cities list layout.

## Output  
The application displays a city list page, an add-city form, and dynamic city detail views. After a city is added, the user is redirected back to the list automatically.
