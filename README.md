# mern-stack-records

https://github.com/coding-to-music/mern-stack-records

https://mern-stack-records.herokuapp.com

By Andrew Bateman https://github.com/AndrewJBateman

https://github.com/AndrewJBateman/mern-stack-records

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/mern-stack-records.git
git push -u origin main

```

## Heroku

```java
heroku create mern-stack-records
```

## Heroku MongoDB Environment Variables

```java
heroku config:set

heroku config:set MONGODB_URI="mongodb+srv://<userid>:<password>@cluster0.zadqe.mongodb.net/mern-stack-records?retryWrites=true&w=majority"
heroku config:set MAPBOX_API_ACCESS_TOKEN=""


heroku config:set PUBLIC_URL="https://mern-stack-records.herokuapp.com"
```

## Push to Heroku

```java
git push heroku

# or

npm run deploy
```

### Push to Heroku

```
git push heroku
```

### Heroku config

```java
heroku config:set JS_RUNTIME_TARGET_BUNDLE=./client/build/static/js/*.js

heroku config:set JS_RUNTIME_TARGET_BUNDLE=/build/static/js/*.js

# and to remote it:

heroku config:unset JS_RUNTIME_TARGET_BUNDLE

heroku config:set JS_RUNTIME_TARGET_BUNDLE='/app/react-ui/build/static/js/*.js'
```

### Heroku Buildpack

See this repo for more info about setting up a node/react app on heroku:

https://github.com/mars/heroku-cra-node

```java
heroku buildpacks

heroku buildpacks --help

heroku buildpacks:clear

```

```java
heroku buildpacks
```

Output:

```java
=== mern-stack-records Buildpack URL
heroku/nodejs
```

### Notice we are doing a SET and then and ADD

```java
heroku buildpacks:set heroku/nodejs

heroku buildpacks:add mars/create-react-app
```

Output:

```java
Buildpack added. Next release on mern-stack-records will use:
  1. heroku/nodejs
  2. mars/create-react-app
Run git push heroku main to create a new release using these buildpacks.
```

Looks like it worked!

```java
2022-04-11T06:38:03.000000+00:00 app[api]: Build succeeded
2022-04-11T06:38:03.776013+00:00 heroku[web.1]: Starting process with command `bin/boot`
2022-04-11T06:38:04.700263+00:00 app[web.1]: Injecting runtime env into ./client/build/static/js/2.7304d9d9.chunk.js (from .profile.d/inject_react_app_env.sh)
2022-04-11T06:38:04.810248+00:00 app[web.1]: Injecting runtime env into ./client/build/static/js/main.ffafc86e.chunk.js (from .profile.d/inject_react_app_env.sh)
2022-04-11T06:38:04.901827+00:00 app[web.1]: Injecting runtime env into ./client/build/static/js/runtime-main.c012fedc.js (from .profile.d/inject_react_app_env.sh)
2022-04-11T06:38:05.215167+00:00 app[web.1]: Starting log redirection...
2022-04-11T06:38:05.215343+00:00 app[web.1]: Starting nginx...
2022-04-11T06:38:05.597744+00:00 heroku[web.1]: State changed from starting to up
```

### Lets try reversing the order

```java
heroku buildpacks:set mars/create-react-app

heroku buildpacks:add heroku/nodejs
```

```java
heroku buildpacks
```

Output:

```java
=== mern-stack-records Buildpack URL
heroku/nodejs
```

### Push to Heroku

```
git push heroku
```

## Error:

```java
2022-04-09T03:12:56.076028+00:00 app[web.1]: ls: cannot access '/app/build/static/js/*.js': No such file or directory
2022-04-09T03:12:56.076252+00:00 app[web.1]: Error injecting runtime env: bundle not found '/app/build/static/js/*.js'. See: https://github.com/mars/create-react-app-buildpack/blob/master/README.md#user-content-custom-bundle-location
2022-04-09T03:12:56.253505+00:00 app[web.1]: Starting log redirection...
2022-04-09T03:12:56.253698+00:00 app[web.1]: Starting nginx...
```

Attempted this:

```java
heroku config:set JS_RUNTIME_TARGET_BUNDLE=./client/build/static/js/*.js

heroku config:set JS_RUNTIME_TARGET_BUNDLE=/build/static/js/*.js

# and to remote it:

heroku config:unset JS_RUNTIME_TARGET_BUNDLE

```

## update npm packages

```java
npm install -g npm-check-updates
```

Output:

```java
removed 3 packages, changed 263 packages, and audited 264 packages in 10s

29 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

```java
ncu -u
```

Output:

```java
Upgrading /mnt/volume_nyc1_01/mern-stack-records/package.json
[====================] 6/6 100%

 body-parser  ^1.19.0  →  ^1.20.0
 dotenv        ^8.6.0  →  ^16.0.0
 express      ^4.17.1  →  ^4.17.3
 mongoose     ^5.11.8  →  ^6.2.10
 nodemon       ^2.0.6  →  ^2.0.15

Run npm install to install new versions.
```

```java
npm install
```

Output:

```java
added 58 packages, removed 42 packages, changed 89 packages, and audited 299 packages in 7s

32 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## Client directory

```java
cd client

ncu -u
```

```java
Upgrading /mnt/volume_nyc1_01/mern-stack-records/client/package.json
[====================] 15/15 100%

 @material-ui/core            ^4.11.2  →  ^4.12.4
 @material-ui/icons           ^4.11.2  →  ^4.11.3
 @testing-library/jest-dom    ^5.11.6  →  ^5.16.4
 @testing-library/react       ^11.2.2  →  ^13.0.0
 @testing-library/user-event  ^12.6.0  →  ^14.0.4
 axios                        ^0.21.0  →  ^0.26.1
 moment                       ^2.29.1  →  ^2.29.2
 react                        ^17.0.1  →  ^18.0.0
 react-dom                    ^17.0.1  →  ^18.0.0
 react-redux                   ^7.2.2  →   ^7.2.8
 react-scripts                  4.0.1  →    5.0.0
 redux                         ^4.0.5  →   ^4.1.2
 redux-thunk                   ^2.3.0  →   ^2.4.1
 web-vitals                    ^1.0.1  →   ^2.1.4

Run npm install to install new versions.
```

# :zap: MERN Full Stack Records

- Mongo Express React Node (MERN) full-stack app to perform CRUD operations on records
- Tutorial code from [JavaScript Mastery](https://www.youtube.com/channel/UCmXmlB4-HJytD7wek0Uo97A) with some frontend changes - see 'Inspiration' below.
- **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/mern-stack-records?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/mern-stack-records?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/mern-stack-records?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/mern-stack-records?style=plastic)

## :page_facing_up: Table of contents

- [:zap: MERN Full Stack Records](#zap-mern-full-stack-records)
  - [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  - [:books: General info](#books-general-info)
    - [:books: Backend](#books-backend)
    - [:books: Frontend](#books-frontend)
  - [:camera: Screenshots](#camera-screenshots)
  - [:signal_strength: Backend Technologies](#signal_strength-backend-technologies)
  - [:signal_strength: Frontend Technologies](#signal_strength-frontend-technologies)
  - [:floppy_disk: Setup - Backend](#floppy_disk-setup---backend)
    - [:floppy_disk: Setup - Frontend](#floppy_disk-setup---frontend)
  - [:computer: Code Examples](#computer-code-examples)
  - [:cool: Backend Features](#cool-backend-features)
    - [:cool: Frontend Features](#cool-frontend-features)
  - [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  - [:clap: Inspiration](#clap-inspiration)
  - [:envelope: Contact](#envelope-contact)

## :books: General info

### :books: Backend

- Node.js, Express & MongoDB cloud Atlas used to create the backend.

### :books: Frontend

- React frontend form to add text/image data to backend database
- Text & image data is displayed in ui-material cards
- Display is responsive: uses Material-UI [Grid](https://material-ui.com/api/grid/)
- Material-UI [makeStyles](https://material-ui.com/styles/api/#makestyles-styles-options-hook) used to link a style sheet with a function component using a hook. `Grow`
- User can add likes to a record but there is no limit on the times they can add likes - a time delay could be added, or the user ip could be used to limit likes

## :camera: Screenshots

![screenshot](./img/front.png)
![screenshot](./img/back.png)

## :signal_strength: Backend Technologies

- [Mongoose v5](https://mongoosejs.com/) object modelling for Node.js
- [npm mongodb v3](https://www.npmjs.com/package/mongodb) official MongoDB driver for Node.js
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) NoSQL cloud database service
- [Express.js middleware v4](https://expressjs.com/): Note, as of version 4.16+, their own body-parser implementation is now included by default
- [Node.js v14](https://nodejs.org/es/)
- [Nodemon](https://www.npmjs.com/package/nodemon) npm module so backend server will automatically restart afdter code changes

## :signal_strength: Frontend Technologies

- [React framework v17](https://reactjs.org/)
- [React-Redux v7](https://react-redux.js.org/) store interaction logic, re-render only changed data
- [Redux-Thunk v2](https://www.npmjs.com/package/redux-thunk) middleware for Redux to write action creators that return an (asynchronous) function instead of an action.
- [Material-UI v4](https://www.npmjs.com/package/@material-ui/core) npm module for React components
- [Material-UI Official Site](https://material-ui.com/)
- [Bootstrap v4](https://getbootstrap.com/) component library
- [react-file-base64 v1](https://www.npmjs.com/package/react-file-base64) to convert files to base64
- [Axios v0.21.0](https://www.npmjs.com/package/axios) promise-based http client
- [SVG Backgrounds](https://www.svgbackgrounds.com/) source of custom backgrounds with compact file-size (~5KB) & supported by all modern browsers

## :floppy_disk: Setup - Backend

- Change to `/server` directory
- Install dependencies using `npm i`
- Install [nodemon](https://www.npmjs.com/package/nodemon) globally if you don't already have it
- Register with [MongoDB Atlas](www.mongodb.com), create & configure a database cluster and add cluster connection string to .env file - there is an example `.env.example` file to help.
- Run `npm start` for a dev server
- Navigate to `http://localhost:5000/`. The server will automatically reload if you change any of the source files

### :floppy_disk: Setup - Frontend

- Change to `/client` directory
- Install dependencies using `npm i`
- Run `npm start`. Frontend will open at `http://localhost:3000/`

## :computer: Code Examples

- Extract from `server/controllers/posts.js` - to delete a post. The post id is [read from the route "parameter"](https://expressjs.com/en/guide/routing.html). A check is made to verify it is a valid id. If it is valid then the post is removed using the mongoose `findByIdAndRemove()` command

```javascript
export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  await PostMessage.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully." });
};
```

## :cool: Backend Features

- All data stored in collections in a mongoDB Atlas database that costs nothing to use in the free tier option. Data can be edited from the mongoDB Atlas collection or from within the React frontend

### :cool: Frontend Features

- Uses [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- UI-Material cards look good.

## :clipboard: Status & To-Do List

- Status: Working. Not deployed
- To-Do: Complete tutorial to deploy app to Heroku (video 2: 1.11.10)

## :clap: Inspiration

- [Javascript Mastery: Build and Deploy a Full Stack MERN Project - React + Redux, Node, Express, MongoDB [Part 1/2]](https://www.youtube.com/watch?v=ngc9gnGgUdA&t=3589s)
- [Javascript Mastery: Build and Deploy a Full Stack MERN Project - React + Redux, Node, Express, MongoDB [Part 2/2]](https://www.youtube.com/watch?v=aibtHnbeuio&t=171s)
- [React documentation](https://reactjs.org/docs/getting-started.html)
- [REST API Tutorial website: HTTP Status Codes](https://www.restapitutorial.com/httpstatuscodes.html)

## :file_folder: License

- N/A.

## :envelope: Contact

- Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
