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

//Stampiamo tutti i cognomi in pagina 
for (var i = 0; i < cognomi.length; i++) {
    var cognomeCorrente = cognomi[i];
    console.log("elemento corrente dentro il for", cognomeCorrente)

    //Stampo ciascun cognome nella lista
    var contenutoPrecedente = document.getElementById('lista-non-ordinata').innerHTML;
    document.getElementById('lista-non-ordinata').innerHTML = contenutoPrecedente + "<li>" + cognomeCorrente + "</li>";
}

//Ordiniamo alfabeticamente l'array 
cognomi.sort();

//Stampiamo tutti i cognomi in pagina 
for (var i = 0; i < cognomi.length; i++) {
    var cognomeCorrente = cognomi[i];
    console.log("elemento corrente dentro il for", cognomeCorrente)

    //Stampo ciascun cognome nella lista
    var contenutoPrecedente = document.getElementById('lista-ordinata').innerHTML;
    document.getElementById('lista-ordinata').innerHTML = contenutoPrecedente + "<li>" + cognomeCorrente + "</li>";
}



//correzione esercizio 

//creo la lista

var cognomiList = ["ciancio", "tommasi", "balestreri", "de ughi", ];



var cognomeUtente = prompt("cognome");

//aggiungo il cogonme alla lista
cognomiList.push(cognomeUtente);

var cognomiSorted = cognomiList.slice(); //per memorizzare e non perdere i contenuti ho coiato tutto su cognomiSorted

console.log(cognomiSorted);
console.log(cognomiList); // verifica 


//flag per il ciclo while
var cognome_trovato = false;

var counter = 0;

var posUtente;

//cerco il cognome fino a che il flag e true

while (!cognome_trovato) {
    var cognome = cognomiSorted[counter]; //l'eggo l'array
    console.log(cognomiSorted);

    //quando trovo il cognome interrompo il ciclo 
    if (cognome === cognomeUtente) {
        cognome_trovato = true;
        posUtente = counter + 1;
        console.log("trovato" + counter);
        console.log("sei in " + (counter + 1) + "posizione");


    }
    counter++;





}

//salvi il contenitore di una lista in una variabile

var containerLista = document.getElementById("exit");
console.log(containerLista);

//stampo tutta la lista

for (var i = 0; i < cognomiSorted.length; i++) {
    var cognomelista = cognomiSorted[i];
    console.log(cognomelista)
    containerLista.innerHTML += "<li>" + cognomelista + "</li>";
}

document.getElementById("posizione").innerHTML = cognomeUtente + " è in posizione " + posUtente;














// prove fatte


// for (var i = 0; i < surname; i++) {
//     console.log(cognomi[i]);



// }




//var msgUscita = document.getElementById('lista').innerHTML;
//console.log(msgUscita);

//document.getElementById('lista').innerHTML = msgUscita + "<li>" + surname[i] + "</li>";
//document.getElementById('lista').innerHTML = surname;






//var msgUscita = document.getElementById('lista').innerHTML;

//document.getElementById('lista').innerHTML = msgUscita + "<li>" + cognomi + "</li>";



// prendo il contenuto dell'ul per aggiungere il nuovo contenuto (non sostituire)
//var contenuto_precendente = document.getElementById('lista').innerHTML;
//console.log(contenuto_precendente);

//srivo nell'ul la vecchia lista con l'aggiunta del nuovo elemento
//document.getElementById('lista').innerHTML = cognomi + "<li>" + elemento_lista + "</li>";
//console.log("HO SCRITTO L'ELEMENTO CON INDICE: "+i)