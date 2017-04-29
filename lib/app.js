const logger = require('winston');
const app = require('express')();
require('./db');

// -----
// Middlewares
app.use(require('cors')());
app.use(require('morgan')('dev'));
app.use(require('body-parser').json());

// -----
// Routers
app.get('/api/v1', (req, res) => res.send('Api up and running'));
app.use('/api/v1/students', require('./routers/students'));
app.use('/api/v1/teachers', require('./routers/teachers'));

// -----
// Start
app.listen(3000, () => logger.info('app initialized and listening at 3000'));
