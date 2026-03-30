import express, { Request, Response } from 'express';

import router from './products/router';

const app = express();
app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
	res.send('Welcome to the Products API');
});

app.use('/products', router);

const port = 3000;

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});

