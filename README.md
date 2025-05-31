<!DOCTYPE html>
<html lang="en">
<head>

</head>
<body>

  <h1>🍽️ MERN Stack Recipe App – Client Side</h1>

  <p>This is the <strong>frontend</strong> of the MERN Stack Recipe App, built using <strong>React.js</strong>. It allows users to register, login, create recipes, view recipes, and save their favorite ones.</p>

  <h2>📁 Folder Structure</h2>
  <pre><code>/client/my-app
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   └── navbar.js
│   ├── hooks/
│   │   └── useGetUserID.js
│   ├── pages/
│   │   ├── auth.js
│   │   ├── create-recipe.js
│   │   ├── home.js
│   │   └── saved-recipe.js
│   ├── App.css
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
  </code></pre>

  <h2>⚙️ Installation & Setup</h2>
  <ol>
    <li><strong>Navigate to the client folder:</strong>
      <pre><code>cd client/my-app</code></pre>
    </li>
    <li><strong>Install dependencies:</strong>
      <pre><code>npm install</code></pre>
    </li>
    <li><strong>Start the development server:</strong>
      <pre><code>npm start</code></pre>
    </li>
  </ol>

  <p>App runs at: <code>http://localhost:3000</code></p>

  <h2>📦 Dependencies</h2>
  <ul>
    <li><code>axios</code> – For making API requests</li>
    <li><code>react</code> – Core React library</li>
    <li><code>react-dom</code> – DOM bindings for React</li>
    <li><code>react-router-dom</code> – For routing</li>
    <li><code>react-cookie</code> – For managing cookies</li>
    <li><code>react-scripts</code> – Scripts and configuration used by Create React App</li>
    <li><code>web-vitals</code> – For measuring performance</li>
    <li><code>@testing-library/*</code> – For unit and integration testing</li>
  </ul>

  <h2>🧭 Routing Pages</h2>
  <table>
    <thead>
      <tr>
        <th>Page</th>
        <th>Path</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Home</td><td><code>/</code></td><td>Displays all recipes</td></tr>
      <tr><td>Login / Register</td><td><code>/auth</code></td><td>User authentication page</td></tr>
      <tr><td>Create Recipe</td><td><code>/create-recipe</code></td><td>Form to submit a new recipe</td></tr>
      <tr><td>Saved Recipes</td><td><code>/saved-recipe</code></td><td>Displays user's saved recipes</td></tr>
    </tbody>
  </table>

  <h2>🧠 Custom Hook</h2>
  <p><code>useGetUserID.js</code> – A custom hook used to retrieve the current user ID from cookies or local storage.</p>

  <h2>💡 Features</h2>
  <ul>
    <li>User authentication (login/register)</li>
    <li>Create, view, and save recipes</li>
    <li>Uses cookies for storing tokens</li>
    <li>Modular folder structure with reusable components and hooks</li>
  </ul>

  <h2>🤝 Contributing</h2>
  <p>Want to enhance this app? Feel free to fork, clone, and create a pull request!</p>



  <h2>👩‍💻 Author</h2>
  <p><strong>Anushka Kalpund</strong><br>
    🔗 <a href="https://github.com/AnushkaKalpund" target="_blank">GitHub Profile</a>
  </p>

</body>
</html>
