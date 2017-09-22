const myfunction1 = function(num1,num2,num3){
	const value = num1 + num2 + num3
	return value;
}
myfunction1(num1,num2,num3)

const myfunction2 = function() {

	const value = "Some Values"
	return value;
}

myfunction2();

const myfunction3 = function(a,c,b){

	const result = (a*b*c);
}
myfunction3(1,2,3);

const fullName = function(FirstName,LastName){
	return (FirstName + " " +LastName);
}
fullname("Hakob","Hakobyan")


const myfunction4 = function(a,b,c)

	if(a.lenght > b.length && a.length > c.length){
	return a;
	}
	if(b.length > a.length && b.length > c.length){
	return b;

	}
	if(b.length > a.length && c.length > b.length){
	return c;
	}
}
myfuntion4("Hakob","Hakobyan","Gevorg");

const myfunction5 = function(x,y) {
	if (x === y) {
	return 0;
	}
	if (x > y) {
	return 1;
	}
	if (x < y) {
	return -1;
	}
myfunction5(23,24);

const myfunction6 = function(a,b,c){
	if(a) {
	return a;
	}
	if (b) {
	return b;
	}
	if(c) {
	return c;
	}
	myfuntion6(0, '',1);