// Modification du contenu HTML de la liste : ajout d'un langage
//document.getElementById("langages").innerHTML += '<li id="c">C</li>';

//var Elt = document.getElementById('contenu').innerHTML;

//console.log(Elt)

//var Elt = document.getElementById('langages').classList;

//console.log(Elt)

//var Elt1 = document.getElementById('langages').innerHTML += '<li id = "Julia">Julia</li>';

//console.log(Elt1)

//console.log(document.querySelector('ul').setAttribute('id', 'titre'));


//var Elt = document.querySelector('li').innerHTML;
//var Elt1 = document.getElementsByTagNames('body');

//var titreElt = document.querySelector("h1"); // Accès au premier titre h1
//titreElt.classList.remove("debut"); // Suppression de la classe "debut"
//titreElt.classList.add("titre"); // Ajout de la classe "titre"
//console.log(titreElt);


//var t = document.querySelector('ul').classList.remove('language')
//var t = document.querySelector("h1").classList.remove("debut");
//console.log(t)

//var Elt = document.createElement("li");







var Elt1 = document.createElement("li");
var Elt2 = document.createElement("li");
var Elt3 = document.createElement("li");
var Elt4 = document.createElement("li");
var Elt5 = document.createElement("li");
Elt1.id = 'python1';
Elt2.id = 'python2';
Elt3.id = 'python3';
Elt4.id = 'python4';
Elt5.id = 'python5';
Elt1.textContent = 'Python1';
Elt2.textContent = 'Python2';
Elt3.textContent = 'Python3';
Elt4.textContent = 'Python4';
Elt5.textContent = 'Python5';

document.getElementById('langages').appendChild(Elt1,Elt2,Elt3,Elt4,Elt5);
var list = document.getElementById('langages').innerHTML
//console.log(Elt);
//console.log(list);
//console.log(document.getElementById('langages'))








para = document.createElement('p');
para.id = 'para';
para.textContent = 'En voici une liste plus complète';
console.log(para)
//console.log(document.getElementById('contenu').appendChild(para).innerHTML);









console.log(document.getElementById('contenu').insertAdjacentHTML("beforeend", '<p>En voici une <a href = "///https:fr.wikipedia.org/wiki/Liste_des_langages_de_programmation">liste</a> plus complète</p>'));



console.log(document.body.innerHTML)





