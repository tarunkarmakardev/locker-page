### `Setup: Prod`

- Run `yarn build` to build frontend
- Run `yarn start` in ./server directory to run server

### `Setup: Dev`

- Run `yarn start` to start dev server
- Run `yarn dev` in ./server directory to run server in dev

## `Environment Variables: Frontend`

- `.env.production` & `.env` maintains backend url variable which can be updated based on enviornment.
- `devEnv.ts` & `prodEnv.ts` in ./server/env maintains prod and dev server variables for the backend. The variable includes allowed origins, port to run server on, and password which will be matched. `prodEnv.ts` can be ignored in git and created during deployments.
