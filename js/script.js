//chiedere all'utente il cognome
//iserirlo in un array
//stampa la lista ordinata alfabeticamente
//scrivi la posizione umana partendo da 1 della lista in cui il nuovo utente si trova





//creazione lista 
var cognomi = [
    "ciancio",
    "leonovo",
    "acer ",
    "samsung",
    "apple",
    "deblasi",
    "perlina",
    "rossi",
    "ciancio paratore",
    "bianchi",
    "verdi",
    "balestreri",

];

//chiedere il cognome
var cognomi = prompt("inserire il vs cognome");
console.log(cognomi);
//console.log(cognomi[4]);

var cognomi = [];



cognomi.sort();
console.log(cognomi);

var surname = cognomi.sort();




for (var i = 0; i < surname; i++) {
    console.log(cognomi[i]);



}




var msgUscita = document.getElementById('lista').innerHTML;
//console.log(msgUscita);

//document.getElementById('lista').innerHTML = msgUscita + "<li>" + surname[i] + "</li>";
document.getElementById('lista').innerHTML = surname;






//var msgUscita = document.getElementById('lista').innerHTML;

//document.getElementById('lista').innerHTML = msgUscita + "<li>" + cognomi + "</li>";



// prendo il contenuto dell'ul per aggiungere il nuovo contenuto (non sostituire)
//var contenuto_precendente = document.getElementById('lista').innerHTML;
//console.log(contenuto_precendente);

//srivo nell'ul la vecchia lista con l'aggiunta del nuovo elemento
//document.getElementById('lista').innerHTML = cognomi + "<li>" + elemento_lista + "</li>";
//console.log("HO SCRITTO L'ELEMENTO CON INDICE: "+i)