import { Router } from 'express';
import userRoutes from './userRoutes';

const apiRouter = Router();

apiRouter.use('/user', userRoutes);


apiRouter.get('/', (req, res) => {
res.send('Hello World!')
})

export default apiRouter;