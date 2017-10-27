//agregar elementos al arreglo en la ultima posicion
var testArray = [];
for(var i = 0; i <= 10; i++){
	testArray.push(i);
}
console.log(testArray);

//eliminar el primer elemento del arreglo
testArray.shift();
console.log(testArray);

//eliminar el ultimo elemento del arreglo
testArray.pop();
console.log(testArray);

//revertir los elementos del arreglo
testArray.reverse();
console.log(testArray);

/*codigo ASCII
para obtener un caracter a partir de su codigo ASCII. 
utilizo el metodo String.fromCharcode*/

var codigo = "c".charCodeAt();


