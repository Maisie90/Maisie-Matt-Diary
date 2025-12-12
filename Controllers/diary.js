const Diary = require('../Models/Diary');

exports.addEntry = async (req, res) => {
    try {
        const { id, date, time, category, diary_entry } = req.body;
        const newEntry = await Diary.addEntry({ id, date, time, category, diary_entry });
        res.status(201).json(newEntry);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add diary entry' });
    }
}
exports.getAllEntries = async (req, res) => {
    try {
        const entries = await Diary.getAllEntries();
        res.status(200).json(entries);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve diary entries' });
    }
}
exports.deleteEntry = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedEntry = await Diary.deleteEntry(id);
        res.status(200).json(deletedEntry);
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete diary entry' });
    }
}
exports.searchByCategory = async (req, res) => {
    try {
        const { category } = req.query;
        const entries = await Diary.searchByCategory(category);
        res.status(200).json(entries);
    } catch (error) {
        res.status(500).json({ error: 'Failed to search diary entries' });
    }
}
exports.updateEntry = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { diary_entry } = req.body;
        const updatedEntry = await Diary.updateEntry(id, diary_entry);
        res.status(200).json(updatedEntry);
    } catch (error) {
        res.status(500).json({ error: 'Failed to update diary entry' });
    }
}
