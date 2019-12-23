# ex-next-sequelize-redux

Boilerplate with Next.js + Sequelize + Redux + Eslint + Prettier

## Instructions

- `npm install`
- Place `.env` file in project root
- set `format on save` to true for vs code editor preferences
- `npm run dev` for dev env
- `npm run build` to build front end for prod env
- `npm run start` to start next in prod env

## `.env` file variables

- Replace `*` with data
  - `DB_HOST=*`
  - `DB_DATABASE=*`
  - `DB_PASSWORD=*`
  - `DB_USERNAME=*`

## Notes

- do not import files in `api` and `lib` to files in `components` or `pages`. Webpack will build the backend code + env vars to the front end and people can inspect it.
- `jsconfig.json` is cross IDE settings
- `.eslintrc` and `.prettierrc` use airbnb + prettier defaults respectively.
- `.babelrc` and `browserlistrc` is used by next's internal webpack config
