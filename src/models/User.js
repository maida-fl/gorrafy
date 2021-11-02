const fs = require('fs');

const User = {
	fileName: '../grupo_9_GorrasYAccesorios/src/data/usersDataBase.json',
// Para traer todo el db de users:
	getData: function () {
		return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
	},  

	generateId: function () {
		let allUsers = this.findAll();
		let lastUser = allUsers.pop();
		if (lastUser) {
			return lastUser.id + 1;
		}
		return 1;
	},

	findAll: function () {
		return this.getData();
	},

	findByPk: function (id) {
		let allUsers = this.findAll();
		let userFound = allUsers.find(oneUser => oneUser.id === id);
		return userFound;
	},

	findByField: function (field, text) {
		let allUsers = this.findAll();
		let userFound = allUsers.find(oneUser => oneUser[field] === text);
		return userFound;
	},
// Recordar que findByField solo devuelve el primer resultado, no todos
	create: function (userData) {
		let allUsers = this.findAll();
		let newUser = {
			id: this.generateId(),
			...userData
		}
		allUsers.push(newUser);
		fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null,  ' '));
		return newUser;
	},

	delete: function (id) {
		let allUsers = this.findAll();
		let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
		fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
		return true;
	}
}

//console.log(User.create({firstName: "Xavi", lastName: "Hernandez", email: "xavidh@gmail.com", password: "123451238", category: 1982, image: null }));
// console.log(User.delete(101));
//console.log(User.findByPk(2));

module.exports = User;