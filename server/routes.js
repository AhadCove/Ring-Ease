import express from 'express';

// Controller Imports
import quizController from './Controllers/quizController';

const routes = express();

routes.get('/ask', quizController.ask);

// Code Routes
routes.get('/code', quizController.get)
routes.get('/code/check', quizController.check)
routes.get('/code/find', quizController.find)
routes.post('/code', quizController.add)

export default routes;