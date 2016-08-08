'use strict';

const data = require('./data.json');

const davidBrent = () => data.quotes[~~(Math.random() * data.quotes.length)];

davidBrent.mused = musing => `Brent mused, and then replied; ${musing || davidBrent()}`;
davidBrent.quipped = quip => `David quipped; ${quip || davidBrent()}`;

module.exports = davidBrent;




