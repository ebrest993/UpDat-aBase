const express = require('express');

const apiRoutes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

require('./config/connection').mysql();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', apiRoutes);

app.use('*', (req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});