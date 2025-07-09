const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const Candidate = require('../models/Candidate');

// Multer config
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext !== '.pdf') {
      return cb(new Error('Only PDFs allowed'), false);
    }
    cb(null, true);
  }
});

// POST candidate
router.post('/', upload.single('resume'), async (req, res) => {
  const { name, email, phone, jobTitle } = req.body;
  const resume = req.file ? req.file.path : '';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;

  if (!emailRegex.test(email) || !phoneRegex.test(phone)) {
    return res.status(400).json({ message: 'Invalid email or phone' });
  }

  try {
    const candidate = new Candidate({ name, email, phone, jobTitle, resume });
    await candidate.save();
    res.status(201).json(candidate);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET all candidates
router.get('/', async (req, res) => {
  const candidates = await Candidate.find();
  res.json(candidates);
});

// PUT status update
router.put('/:id/status', async (req, res) => {
  const { status } = req.body;
  try {
    const candidate = await Candidate.findByIdAndUpdate(req.params.id, { status }, { new: true });
    res.json(candidate);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Optional: DELETE
router.delete('/:id', async (req, res) => {
  try {
    await Candidate.findByIdAndDelete(req.params.id);
    res.json({ message: 'Candidate deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
