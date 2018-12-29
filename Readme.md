# Tempo teams

Sample application for Tempo to assess quality of code

## Approach

Built using `React` using `webpack` for bundling and `styled-components` for styling. Testing with `jest` and `enzyme`. Development server with hotreloading provided with `webpack-dev-server`.

Previously when I have started projects, whatever the tech being used, I have normally used some sort of bootstrapping toolkit since I wanted to get started as quickly as possible without hassle. This time I decided to build the app and it's stack from scratch and do all the configuring myself to refresh my skills. So this app is totally custom built, if there are any questions about the choices made please contact me.

## How to get going

It's pretty standard. Requirements for running

- Recent version of `node.js`, 8+ should be fine
- Accompanying package manager, `npm` or `yarn`

Install dependencies

```
npm i
```

or 

```
yarn
```

Then run development server

```
npm start
```

It should open a browser automatically. If not you can manually go to (http://localhost:8080)[localhost:8080]

## Tests

Tests are as mentioned previously done with `jest` and `enzyme`. To run tests simply

```
npm test
```

To run specific tests use (as normally when using `jest`)

```
npm test <pattern>
```

where `<pattern>` is matched agains test filenames.

## Building

If you for some reason would like to build for production that is done with 

```
npm build
```

Resulting artifacts are found in `/dist` folder and can be uploaded to server. Further configuration of server to support client side routing is outside of the scope of this readme.

## Author

Written by Eggert Jóhannesson, interested parties should have my email or a way to get it. If not I am listed in the Icelandi phone registry, I'm the farmer not the photographer.

## Contribution

Any questions or comments are welcome. `PR`s as well.
