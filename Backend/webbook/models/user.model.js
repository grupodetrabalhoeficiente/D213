module.exports = function(sequelize, Sequelize) {
	let User = sequelize.define('user', {
		id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
		profile: { type: Sequelize.STRING, notEmpty: true },
		email: { type: Sequelize.STRING, validate: { isEmail: true } },
		password: { type: Sequelize.STRING, allowNull: false }

	});
	return User;
};