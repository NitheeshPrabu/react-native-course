# BlogPost App

A simple React Native app made with Expo. Has screens to create, edit, view, and delete blog posts.

Showcases use of the React Context API and useReducer hook to maintain and direct global state in the application.

To run the app, clone the repo, install the dependencies, and start the Metro bundler provided by Expo:

```bash
yarn install
yarn start
```

To simulate an outside service to store and retrieve blog posts, a simple json-server is attached. To use it, start the json-server (update port in `package.json` if necessary)

```bash
cd json-server
npm install
npm run db
```

By default, the json-server is only available locally. To expose it to the outside world, use `ngrok` (again, update port if necessary).

```bash
npm run tunnel
```

_**Note:** Each instance of `ngrok` lasts only for 8hours. After that, you need to restart the `ngrok` instance. Each restart of the `ngrok` instance will change the forwaring URL (atleast on a free instance), and thus you have to update your endpoint to match the new URL provided._
