//inserisci il tuo nome
var name = prompt('Inserisci il tuo nome');



//inserisci il tuo cognome
var lastname = prompt('Inserisci il tuo cognome');



//qual'è il tuo colore preferito
var color = prompt('Il tuo colore preferito');

//classa 40
const classe = prompt('40');



//concatenare tutti i valori in una password
var password = name + lastname + color + classe;



//password nella console
console.log(password);


//inserisco la password all'interno dell tag h1
document.getElementById('password').innerHTML += password;