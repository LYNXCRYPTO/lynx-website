## Development server

- https://dev.lynxprotocol.org

\*\* We are using yarn instead of npm. please use yarn for adding modules and installing

### How to run

- install modules: yarn
- server: npm run devserver
- clent: npm run dev
- build: npm run build **This is what is run in prod**.
- start: npm run start **This is serving the client from our node backend**

### Images/Videos/Assets

- All images are stored in Public. You can then access them with just src={./\${imagePathFromRelative}}
  - This resolves the path to start at public no matter where you reference from

### Styles

- We are using scss. Same as css but better features
- For colors used more than once we create a variable in styles components.
- For responsive we use material designs built in Break points and grid system.
