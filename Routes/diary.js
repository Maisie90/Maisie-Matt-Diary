const { Router } = require('express');
const diaryController = require('../Controllers/diary');

const diaryRouter = Router();   

diaryRouter.get('/', diaryController.getAllEntries);
diaryRouter.get('/search', diaryController.searchByCategory);
diaryRouter.post('/', diaryController.addEntry);
diaryRouter.put('/:id', diaryController.updateEntry);
diaryRouter.delete('/:id', diaryController.deleteEntry);

module.exports = diaryRouter;