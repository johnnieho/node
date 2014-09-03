console.log('a');
module.exports = Person;

function Person(data){
	this.data = data; 
};

Person.prototype.show = function(){
	console.log('my data is : '+this.data);
}