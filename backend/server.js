const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Helper: Read JSON file
function readJSONFile(filename) {
  const filePath = path.join(__dirname, 'data', filename);
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
}

// GET Routes
app.get('/api/slides', (req, res) => {
  const slides = readJSONFile('slides.json');
  res.json(slides);
});

app.get('/api/features', (req, res) => {
  const features = readJSONFile('features.json');
  res.json(features);
});

app.get('/api/pricing', (req, res) => {
  const pricing = readJSONFile('pricing.json');
  res.json(pricing);
});

// POST Route
app.post('/api/contact', (req, res) => {
  const formData = req.body;

  // Log to console
  console.log("Contact Form Submission:");
  console.log(formData);

  // Optional: Save to file
  const logPath = path.join(__dirname, 'contact-submissions.txt');
  const logEntry = `${new Date().toISOString()} - ${JSON.stringify(formData)}\n`;
  fs.appendFileSync(logPath, logEntry);

  res.status(200).json({ message: "Form submitted successfully!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});