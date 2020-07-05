### Option 1 (local):

1. Launch MYSQL DB (on Open Server or separate)
2. Create file .env.local
3. Copy settings from .env.example into .env.local
4. Set preferred settings, below my sample settings

- MYSQL_USER=root
- MYSQL_PASSWORD=
- MYSQL_DATABASE=scraper-app
- DB_HOST=localhost
- DB_PORT=3306

5. Install it and run development:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

6. Production:

```bash
npm install
npm run build && npm start
# or
yarn
yarn build && yarn start
```

7. Navigate http://localhost:3000

### Option 2 (docker):

1. Run:

```bash
  docker-compose up
```

#### Demo screeshots

![no articles](https://github.com/dmitrychurkin/scraper-app/blob/master/screenshots/Screenshot_6.png?raw=true)

![clisk to fetch articles](https://github.com/dmitrychurkin/scraper-app/blob/master/screenshots/Screenshot_1.png?raw=true)

![after page refresh](https://github.com/dmitrychurkin/scraper-app/blob/master/screenshots/Screenshot_2.png?raw=true)
