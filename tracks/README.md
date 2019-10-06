# track

A React Native app that helps track your movement.

Includes an Express server that enables in-app authentication, and ability to maintain the tracks for each user (complete with Login/Sign up flow). Uses MongoDB for the database.

## Setting up the Express server

- Install the necessary dependencies

```bash
cd server
npm install (or yarn install)
```

- You will need to create a cloud instance of mongo db (try visiting [MongoDB Atlas](http://cloud.mongodb.com)). Once you set up a cluster, whitelist your IP and get the connection string.
- Create a new file `config.json` inside the `config` folder, and add the `MONGODB_URI` and `PORT` variables from your production and development environments, like below:

```json
{
  "production": {
    "MONGODB_URI": "YOUR_PRODUCTION_MONGODB_URI_HERE",
    "PORT": "YOUR_PRODUCTION_PORT_HERE"
  },
  "development": {
    "MONGODB_URI": "YOUR_DEVELOPMENT_MONGODB_URI_HERE",
    "PORT": "YOUR_DEVELOPMENT_PORT_HERE"
  }
}
```

- Alternatively, you can set up config variables or environment variables in your remote deployment instance (for eg. Heroku).

To use the included Express server as your backend, start the server using `npm run start` (or `yarn start`). Obtain your local machine's IP and change your API endpoint in the app. If you want to expose your local server across other networks, use tools like [ngrok](https://ngrok.com/).
