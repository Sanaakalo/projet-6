const var2 = document.getElementsByClassName('h2')[0];
const divmyBooks = document.getElementById('myBooks');
const div = document.createElement('div');
div.setAttribute('id', 'div');
div.style.display = 'none';


const myf = function () {
  if (div.style.display == 'none') {
		div.style.display = 'flex'
		btnAjout.style.display = 'none'
	} 
}
divmyBooks.insertBefore(div, content)


//boutton add book 
const btnAjout = document.createElement("button");
btnAjout.innerText = "Add Book";
btnAjout.id = "btn";
btnAjout.type = "submit";
btnAjout.name = "ajout livre";
btnAjout.class = "ajout";
btnAjout.value = 'click';
var2.after(btnAjout);
btnAjout.addEventListener('click', myf);

const titrelivre = document.createElement('label');
titrelivre.innerText = 'Titre du livre:';
titrelivre.name = 'titre';
titrelivre.id="label-book"
const titreLivreInput = document.createElement('input');
titreLivreInput.type = 'text';
titreLivreInput.name = "titre";
titreLivreInput.id="livre";
div.append(titrelivre);
div.append(titreLivreInput);

// author 
const auteur = document.createElement('label');
auteur.innerText = 'nom de l Auteur:';
auteur.name = "auteur";
auteur.id="autor-label";
const auteurInput = document.createElement('input')
auteurInput.type = 'text';
auteurInput.name = "auteurinput";
auteurInput.id="autor";
div.append(auteur);
div.append(auteurInput);
//button recherche
const searchBnt = document.createElement('button');
searchBnt.innerText = 'Rechercher';
searchBnt.value = 'click';
searchBnt.id = 'btn_search';
div.append(searchBnt);

// boutton annuler
const cancelBnt = document.createElement('button')
cancelBnt.innerText = 'Annuler';
cancelBnt.id = 'btn_cancel';
cancelBnt.value = "click";
div.append(cancelBnt);
cancelBnt.addEventListener('click', function (btn_cancel_click) {window.location = "../P6/index.html"})


searchBnt.addEventListener('click', function (e) {
	e.preventDefault();
	try {
	if (titreLivreInput.value != 0 && auteurInput.value != 0) {

		const res = document.createElement('h2')
		res.className = 'result'
		res.innerText = 'Résultats de recherche'
		div.appendChild(res)}
  
let titleBook = titreLivreInput.value
let authorBook = auteurInput.value
fetch("https://www.googleapis.com/books/v1/volumes?q:${titleBook}+inauthor:${authorBook}")
.then(res=>{
if(res.ok) {
  res.json().then(data=>{
 titleBook.valueOf=titlebook[0].url
})

}else{
  alert("renseignez les donnes correctement svp")
}
})
} catch (error){
  console.error("Erreur :" + error);}
})
const container = document.createElement('div')
container.id = 'containersearch'
div.after(container)
//const cresultSearch = document.createElement('div')
//resultSearch.id = 'resultsearch'
//div.after(resultSearch)