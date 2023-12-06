const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
	dialect: 'sqlite',
	storage: './db/campaign.db'
});

const Campaign = sequelize.define('Campaign', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: {
		type: Sequelize.STRING,
		validate: {
			is: ["[a-z]", 'i'],
			max: 150
		}
	}
},{ sequelize });

const init = async () => {
	console.log('Initing campaign db');
	try {
		await sequelize.authenticate();
	} catch (error) {
  		console.error('Unable to connect to the campaign database:', error);
	}
};

sequelize.models.Campaign;
module.exports = {
	init
};
