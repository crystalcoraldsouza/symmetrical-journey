# symmetrical-journey

Proxy server for performan-is-fun

## Setting up from scratch

git clone https://github.com/crystalcoraldsouza/symmetrical-journey.git
cd symmetrical-journey
npm init

## Install dependencies

npm install express axios dotenv

npm install -D typescript ts-node-dev @types/node @types/express

## Setup tsc

npx tsc --init

## Set up tsconfig

```js
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "strict": true
  }
}
```

## Setup project structure

```js
symmetrical-journey/
│
├── src/
│   ├── app.ts              # entry point
│   ├── routes/
│   │   └── api.routes.ts
│   ├── controllers/
│   │   └── api.controller.ts
│   ├── services/
│   │   └── external.service.ts
│   ├── config/
│   │   └── env.ts
│
├── .env
├── package.json
├── tsconfig.json
```

## Environment

.env

```js
PORT=3000
THIRD_PARTY_API=https://api.example.com/data
```

src/config/env.ts

```js
import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  apiUrl: process.env.THIRD_PARTY_API || "",
};
```

## External API Service

src/services/external.service.ts

```js
import axios from "axios";
import { config } from "../config/env";

export const fetchExternalData = async () => {
  try {
    const response = await axios.get(config.apiUrl);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch external API");
  }
};
```

## Controller Layer

src/controllers/api.controller.ts

```js
import { Request, Response } from "express";
import { fetchExternalData } from "../services/external.service";

export const getData = async (req: Request, res: Response) => {
  try {
    const data = await fetchExternalData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data" });
  }
};
```

## Routes

src/routes/api.routes.ts

```js
import { Router } from "express";
import { getData } from "../controllers/api.controller";

const router = Router();

router.get("/data", getData);

export default router;
```

## App Entry Point

src/app.ts

```js
import express from "express";
import apiRoutes from "./routes/api.routes";
import { config } from "./config/env";

const app = express();

app.use(express.json());
app.use("/api", apiRoutes);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
```

## Run the Server

package.json:

```js
"scripts": {
  "dev": "ts-node-dev --respawn src/app.ts",
  "build": "tsc",
  "start": "node dist/app.js"
}
```

Run:

```js
npm run dev
```

Test:

```js
`http://localhost:3000/api/data`;
```
