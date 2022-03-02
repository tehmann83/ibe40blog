const router = require('express').Router();
const Category = require('../models/Category');

// POST CATEGORY
router.post('/', async (req, res) => {
	const newCat = new Category(req.body);

	try {
		const savedCat = await newCat.save();

		res.status(200).json(savedCat);
	} catch (error) {
		// todo: error handling
		res.status(500).json(error);
	}
});

// GET CATEGORY
router.get('/', async (req, res) => {
	try {
		const cats = await Category.find();

		res.status(200).json(cats);
	} catch (error) {
		// todo: error handling
		res.status(500).json(error);
	}
});

module.exports = router;
