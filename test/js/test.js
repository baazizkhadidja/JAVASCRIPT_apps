




/*
function computeJoinPoint(s1,s2)
{

		while (0 < s1,s2 < 70000000){var c1 = 0; var c2 = 0;

		s22 = s2.toString().split("");		
		s11 = s1.toString().split("");
		
			for (var i =0; i<s11.length; i++ )
			{c1 = c1 + Number(s11[i]);r1 = s1+c1; }
		
			for (var i =0; i<s22.length; i++ )
			{c2 = c2 + Number(s22[i]);r2 = s2+c2; }
		console.log(s1,c1,r1, '/', s2,c2,r2)
		var s1 = r1;

		var s2 = r2;
		if(r1 == r2){return r1; break}
		}		
}



console.log(computeJoinPoint(48,480))




!!!! Méthode 02:

function computeJoinPoint(s1,s2)
{

while (s1 != s2){
if(s1<s2){


	s1.toString().split("").forEach(elt =>{s1 = s1+Number(elt)});		
	s2.toString().split("").forEach(elt =>{s2 = s2+Number(elt)});		
		
		
			
			{c1 = c1 + Number(s11[i]);r1 = s1+c1; }



}
else{

} 
}

}




console.log(computeJoinPoint(471,480))




function change(cash){
	var two = 0;
	var five = 0;
	var ten = 0;
	if (cash ==1 || cash == 3){return null}

	if (cash >=20){
	ten = Math.floor((cash / 10) - 1)
	cash = (cash % 10) + 10	
	console.log("if cash >20", cash)
}
	if (cash % 2 == 0){
        ten += Math.floor(cash / 10)
        two =Math.floor((cash % 10) / 2)
	console.log("if cash%2 == 0", cash)
}

	else if((cash % 5) ==1||(cash % 5) ==3 ){
        	five = 1
        	two = Math.floor((cash - 5) / 2)
		console.log("if cash%5 == 1|3", cash)
}
	else{
        ten += Math.floor(cash / 10)
        five = Math.floor((cash % 10) / 5)
        two = Math.floor((cash % 5) / 2)
	console.log("if other cases", cash)
}
	return {'two': two,'five': five,'ten': ten}
}


console.log(change(42).ten)
console.log(change(42).five)
console.log(change(42).two)

----------------------------------------------------------
Question Angular Senior

function reshape(n, str) {
for(let i; i<=n ; i++){
	a = str[i]
	return a
}
}


console.log(reshape(8, "1234"))

t = "abcd"
console.log(t[0])


function calc(array, n1, n2){

	var c =0; 
	for(let i= n1; i<=n2 ;i++){
	c = c +array[i]}
	return c
}

Q28: La fonction reshape(n, str) retourne la chaine str sans les espaces et formaté en lignes de n caractères maximum.

Exemple1: reshape(3, "abc de fghij") --> 
abc
def
ghi
j


}


- str.trim() : les blanc retiré
- str.substr(0,n): donne une nouvelle str de 0 à l indice n

for (var i =0; i<s11.length; i++ )
{c1 = c1 + Number(s11[i]);var r1 = s1+c1; }
*/



/*



function reshape(n, str)
{

while(n<str.length)
{str1 = str.substr(0,n);
str = str1.slice(0,n);
console.log(str);}

}

reshape(4,"abcdef")












function reshape(n, str)
{
str = str.replace(/ /g, "")
deb = str.replace(/ /g,"")
for(var i=0; i<deb.length/n; i++)
	{str1 = str.substr(0,n);
	
	str = str.slice(n,str[-1]);
	console.log(str1) ;
	console.log(deb.length)
	}
	
}


console.log(reshape(2,"abcdef"))







function reshape(n, str)
{
str = str.replace(/ /g,"")
str1 = str.substr(0,n);
for(var i=0; i<str.length; i=i+n)
{
str1 = str1 + "\n" + str.substr(i, n);
}
return str1;
}

console.log(reshape(2,"ab c dgfds"))



console.log("courage doody on va commencer")

*/
function duble(a)
{
return 2*a
}

console.log(duble(6))


tab = ['a','b','c','d','e','f','g']

for(i in tab){
console.log(i)
} 


class Car{
	constructor(price, color, year)
	{
		this.price = price;
		this.color = color;
		this.year = year; 
	} 
	rep()
	{
		console.log("hello i am a car, my price is " + this.price)
	}

	rep1(n_price)
	{
		console.log('on a ajouter' + this.n_price);
		this.price+= n_price;
		this.rep();
	}
}







let car2 = new Car(150, 'blue', 2000)


car2.rep1(20)
















