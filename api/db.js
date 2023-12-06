const campaign = require('./db/campaign');
const characters = require('./db/characters');
const round = require('./db/round');

// Initialize all of our databases
function init() {
	campaign.init();
	characters.init();
	round.init();
}

module.exports = {
	init
};
