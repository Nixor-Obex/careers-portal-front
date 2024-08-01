const express = require('express');
const app = express();
const port = 3000;

// Example in-memory data store
let jobs = [
    { id: 1, title: 'Software Engineer' },
    { id: 2, title: 'Product Manager' }
];

// Middleware to parse JSON bodies
app.use(express.json());

// DELETE endpoint to handle job deletion
app.delete('/api/jobs/:id', (req, res) => {
    const jobId = parseInt(req.params.id, 10);
    jobs = jobs.filter(job => job.id !== jobId);

    // Respond with success status
    res.status(200).json({ message: 'Job deleted successfully' });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});



// Ensure your server has the endpoint to handle PUT requests for updating job details.
app.put('/api/jobs/:id', (req, res) => {
    const jobId = parseInt(req.params.id, 10);
    const { title, postedOn, autoPauseOn, candidatesApplied } = req.body;

    // Find and update the job in your database or data store
    const job = jobs.find(job => job.id === jobId);
    if (job) {
        job.title = title;
        job.postedOn = postedOn;
        job.autoPauseOn = autoPauseOn;
        job.candidatesApplied = candidatesApplied;
        res.status(200).json({ message: 'Job updated successfully' });
    } else {
        res.status(404).json({ message: 'Job not found' });
    }
});
