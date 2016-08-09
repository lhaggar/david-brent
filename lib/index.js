'use strict';

const data = require('./data.json');

const davidBrent = () => data.quotes[~~(Math.random() * data.quotes.length)];

davidBrent.mused = musing => `Brent mused, and then replied; ${musing || davidBrent()}`;
davidBrent.quipped = quip => `David quipped; ${quip || davidBrent()}`;
davidBrent.meltingPot = pot => {
	Object.keys(pot)
		.map(key => ({ name: key, func: () => pot[key][~~(Math.random() * pot[key].length)]}))
		.forEach(mp => {
			davidBrent[mp.name] = mp.func;
		})
}

module.exports = davidBrent;