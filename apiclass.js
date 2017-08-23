class Api{

	constructor (){
		this.user = { id: 1, name : 'test' };
		this.friends = [ this.user, this.user, this.user ];
		this.photo = 'is not a real photo';
	}

	getUser(){
		return new Promise( (resolve, reject) => {
			setTimeout( () => resolve(this.user), 1000);
		});
	}

	getFriends(userId){
		return new Promise(( resolve, reject ) => {
			setTimeout( () => resolve(this.friends.slice()), 1000);
		});
	}

	getPhoto(userId){
		return new Promise( (resolve, reject) => {
			setTimeout(() => { resolve(this.photo) }, 1000);
		});
	}

	throwError(){
		return new Promise( (resolve, reject) => {
			setTimeout(() => reject(new Error('Internal Error')), 1000);
		});
	}
}