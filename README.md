<br>

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101339887/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101339887?branch=main)

# INTRODUCCIÓN

En esta práctica resolveremos distintos ejercicios centrándonos, sobretodo, en el uso de interfaces, clases, herencias de clases y aplicando el concepto **SOLID**. En este caso tendremos que realizar dos ejercicios, en los que tendremos que crear varios ficheros para cada uno de ellos. Todos estos ficheros podremos encontrarlos dentro de los directorios _/Ejercicio-01_, _/Ejercicio-02_, _/Ejercicio-03_ y _Ejercicio-04_ (siendo este últmino el ejercicio propuesto en la hora de prácticas), que a su vez, estarán ubicados dentro del directorio /src.

Por otro lado, también se creará la documentación, de forma automática, de todos los ejercicios que hayamos realizado haciendo uso de TypeDoc. Podremos consultar la documentación pulsando sobre el siguiente [_enlace_](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101339887/tree/main/docs) que le llevará al fichero o accediendo manualmente al directorio /docs.

Además, podrá acceder a la página web del informe pulsando sobre este [_enlace_](https://ull-esit-inf-dsi-2122.github.io/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101339887/).

# DESARROLLO

## Ejercicio 1. El combate definitivo.

Para este primer ejercicio, cumpliendo con las normas del concepto SOLID, tendremos que crear varias clases para poder llevar a cabo un combate entre tres tipos de luchadores distintos (```Pokemon```, ```Marvel``` y ```Destiny```).

### Clase ```Combat```

Esta clase se encargará de guardar la información sobre el combate entre distintos tipos de luchadores.

- ```getMsj```. Retornará el mensaje que se debe mostrar por pantalla.

```
getMsj(): string {
  return this.msj;
}
```

- ```getTurno```. Función para retornar el turno del combate.

```
getTurno(): number {
  return this.numTurno;
}
```

- ```setMsj```. Asignará el mensaje que se debe mostrar por pantalla.

```
setMsj(msj: string): void {
  this.msj = msj;
}
```

- ```setTurno```. Función para asignar el turno del combate.

```
setTurno(num: number): void{
  this.numTurno = num;
}
```

### Clase ```CombatCalc```

**CombatCalc** realizará todos los cálculos necesarios para que se pueda llevar a cabo el combate entre dos luchadores.

#### ```aumentarTurno```. 

Esta función nos será util a la hora de querer aumentar el turno o la ronda del combate para así poder determinar a cuál de los dos luchadores le tocará atacar.

Para ello, haciendo uso de las dos funciones nombradas anteriormente, le asignaremos al turno su valor en ese momento más 1:

```
aumentarTurno(): void {
  this.combat.setTurno(this.combat.getTurno() + 1);
}
```

#### ```combate()```.

Esta función es la principal de nuestra clase ya que en ella se encuentra el conjunto de funciones organizadas de forma que el combate se pueda llevar a cabo. Para ello primero calcularemos el daño que producirán ambos luchadores el uno sobre el otro y lo guardaremos en una constante:

```
const DAMAGE_A = this.fighterA.damage(this.fighterB);
const DAMAGE_B = this.fighterB.damage(this.fighterA);
```

Posteriormente crearemos un bucle while hasta que haya un ganador. Dentro de este bucle, estaremos comprobando contínuamente varias cuestiones:

- El turno para saber a cuál de los dos luchadores le toca atacar.

```
if (this.combat.getTurno() % 2 === 0) {
  this.vida(DAMAGE_A);
  this.print.mostrarTurno(true);
}
else {
  this.vida(DAMAGE_B);
  this.print.mostrarTurno(false);
}
```

- Mostrar la vida que le queda a los luchadores.

```
this.print.mostrarVida();
```

- Aumentar el turno.

```
this.aumentarTurno();
```

Finalmente, comprobaremos dos condiciones más, si alguno de los dos luchadores se ha debilitado o no.

```
if (this.fighterB.getHP() === 0) {
  this.print.mostrarGanador(true);
  // console.log(this.msj);
  return this.fighterA.getNombre();
}
if (this.fighterA.getHP() === 0) {
  this.print.mostrarGanador(false);
  // console.log(this.msj);
  return this.fighterB.getNombre();
}
```

>> También es importante comentar que todos los mensajes que se deberían mostrar por pantalla se guardarán todos en el mismo atributo privado de la clase para así no hacer interferencias a la hora de realizar el testing de cada una de las funciones de la clase. En caso de querer visualizar por pantalla todo el proceso, simplemente se deberá decomentar las dos líneas que contienen el método console.log().

#### ```vida()```

La función principal de este método es asignarle al luchador que sufre el ataque una nueva cantidad de vida (HP) tras ese ataque. Podremos encontrarnos con dos casos distintos:

- Tras recibir el daño su vida es mayor que 0: Se le asignará la diferencia del HP anterior con el daño recibido.

```
let aux = this.fighterB.getHP() - damage;
------------------------------------------
this.fighterB.setHP(aux);
```

- Tras recibir el daño su vida es menor o igual que 0: Se le asignará como HP 0 ya que no se puede llegar a tener un valor negativo de vida. Esto significaría estar debilitado.

```
let aux = this.fighterB.getHP() - damage;
------------------------------------------
this.fighterB.setHP(0);
```

### Clase ```CombatPrinter```

CombatPrinter se encargará de imprimir los mensajes que deben salir por pantalla.

- ```mostrarVida()```. Función para mostrar la vida que tiene cada uno de los luchadores.

```
mostrarVida(): void {
  this.combat.setMsj(this.combat.getMsj() + `\n\n· HP de ${this.fighterA.getNombre()}: ${this.fighterA.getHP()}`);
  this.combat.setMsj(this.combat.getMsj() + `\n· HP de ${this.fighterB.getNombre()}: ${this.fighterB.getHP()}`);
}
```

- ```mostrarInicioCombate()```. Función para mostrar el inicio del combate.

```
mostrarInicioCombate(): void {
  this.combat.setMsj(this.combat.getMsj() + "\n*************************************************");
  this.combat.setMsj(this.combat.getMsj() + "\n\n\t-- COMIENZA EL COMBATE --");
  this.combat.setMsj(this.combat.getMsj() + `\n\n\t  ${this.fighterA.getNombre().toUpperCase()} Vs. ${this.fighterB.getNombre().toUpperCase()}`);
  this.combat.setMsj(this.combat.getMsj() + `\n\t       ${this.fighterA.getHP()}     ${this.fighterB.getHP()}`);
  this.combat.setMsj(this.combat.getMsj() + "\n\n*************************************************");
}
```

- ```mostrarTurno()```. Función para mostrar el turno del combate.

```
mostrarTurno(aux: boolean): void {
  if (aux)
    this.combat.setMsj(this.combat.getMsj() + `\n\n\t-- TURNO ${this.combat.getTurno() + 1} · Ataca ${this.fighterA.getNombre()} --`);
  else
    this.combat.setMsj(this.combat.getMsj() + `\n\n\t-- TURNO ${this.combat.getTurno() + 1} · Ataca ${this.fighterB.getNombre()} --`);
}
```

- ```mostrarGanador()```. Función para mostrar el final del combate.

```
mostrarGanador(aux: boolean): void {
  this.combat.setMsj(this.combat.getMsj() + "\n\n-------------------------------------------------");
  if (aux)
    this.combat.setMsj(this.combat.getMsj() + `\n\n\t -- FINAL --\n\n>> El ganador es: ${this.fighterA.getNombre()}`);
  else
    this.combat.setMsj(this.combat.getMsj() + `\n\n\t -- FINAL --\n\n>> El ganador es: ${this.fighterB.getNombre()}`);
  this.combat.setMsj(this.combat.getMsj() + "\n\n-------------------------------------------------");
}
```

>> Se ha tomado la decisión de crear tres clases distintas, implementadas en ficheros distintos cada una, para así respetar el concepto **SOLID**. 

### Clase ```Fighter```

En esta clase abstracta nos centraremos en crear todas aquellas funciones necesarias para almacenar, añadir y modificar los datos de cada uno de los luchadores que tengamos en nuestra pokedex. Entre todas esas funciones podemos encontras las siguientes:

- ```setHP()```. Asigna la vida que tiene el luchador.

```
setHP(hp: number): void {
  this.HP = hp;
}
```

- ```getNombre()```. Función que devuelve el nombre del luchador.

```
getNombre(): string {
  return this.nombre;
}
```

- ```getAtaque()```. Función que devuelve el ataque del luchador.

```
getAtaque(): number {
  return this.ataque;
}
```

- ```getDefensa()```. Función que devuelve la defensa del luchador.

```
getDefensa(): number {
  return this.defensa;
}
```

- ```getVelocidad()```. Función que devuelve la velocidad del luchador.

```
getVelocidad(): number {
  return this.velocidad;
}
```

- ```getHP()```. Función que devuelve la vida del luchador.

```
getHP(): number {
  return this.HP;
}
```

- ```abstract efectividad()```. Función abstracta para calcular la efectividad del ataque. 

```
abstract efectividad(caractA: string, caractB: string): number;
```

- ```abstract damage()```. Función abstracta para calcular el daño del ataque. 

```
abstract damage(fighter: Fighter): number;
```

### Clase ```Destiny```

Esta clase se encargará principalmente de definir la información de cada soldado.

- ```getNaturaleza()```. Función que devuelve el naturaleza del soldado.

```
getNaturaleza(): string {
  return this.naturaleza;
}
```

- ```getAtaqueEspecial()```. Función que devuelve el arma del soldado.

```
getAtaqueEspecial(): number {
  return this.ataqueEspecial;
}
```

### Clase ```Marvel```

Esta clase se encargará principalmente de definir la información de cada superhéroe.

- ```getPoder()```. Función que devuelve el poder del superhéroe.

```
getPoder(): string {
  return this.poder;
}
```

- ```getExperiencia()```. Función que devuelve el experiecia del superhéroe.

```
getExperiencia(): number {
  return this.experiencia;
}
```

### Clase ```Pokemon```

Esta clase se encargará principalmente de definir la información de cada pokémon.

- ```getTipo()```. Función que devuelve el tipo del pokémon.

```
getTipo(): string {
  return this.tipo;
}
```

- ```getPeso()```. Función que devuelve el peso del pokémon.

```
getPeso(): number {
  return this.peso;
}
```

- ```getAltura()```. Función que devuelve la altura del pokémon.

```
getAltura(): number {
  return this.altura;
}
```

### Clases ```DestinyCalc```, ```MarvelCalc``` y ```PokemonCalc```

Estas clases serán heredadas de la clase Fighter ya que tendrán en común la mayoría de las funciones que se encuentran en la clase Fighter. 

Por otro lado, las dos funciones abstractas que se encuentran declaradas en la clase Fighter tendrán que ser definidas en cada una de las subclases, en este caso se definirían de la siguiente manera:

#### ```efectividad()```. 

Función para calcular la efectividad que tiene el primer luchador sobre el segundo.

- ```DestinyCalc```

```
efectividad (naturalezaA: string, naturalezaB: string): number {
  if ((naturalezaA === 'mago' && naturalezaB === 'tanque') || 
      (naturalezaA === 'ágil' && naturalezaB === 'mago')) { 
    return 2;
  } 
  if ((naturalezaA === 'tanque' && naturalezaB === 'ágil') || 
      (naturalezaA === 'ágil' && naturalezaB === 'tanque')) {
    return 1;
  } 
  return 0.5;
}
```

>> La efectividad del ataque dependerá de la naturaleza del soldado.

- ```MarvelCalc```

```
efectividad (poderA: string, poderB: string): number {
  if ((poderA === 'martillo' && poderB === 'fuerza') || 
      (poderA === 'armas' && poderB === 'fuerza') || 
      (poderA === 'magia' && poderB === 'telaraña')) { 
    return 2;
  } 
  if ((poderA === 'fuerza' && poderB === 'telaraña') || 
      (poderA === 'telaraña' && poderB === 'fuerza') ||
      (poderA === 'armas' && poderB === 'telaraña') || 
      (poderA === 'telaraña' && poderB === 'armas') ||
      (poderA === 'martillo' && poderB === 'magia') || 
      (poderA === 'magia' && poderB === 'martillo')) {
    return 1;
  } 
  return 0.5;
}
```

>> La efectividad del ataque dependerá del poder del superhéroe.

- ```PokemonCalc```

```
efectividad (tipoA: string, tipoB: string): number {
  if ((tipoA === 'fuego' && tipoB === 'hierba') || 
      (tipoA === 'agua' && tipoB === 'fuego') || 
      (tipoA === 'hierba' && tipoB === 'agua')  || 
      (tipoA === 'electrico' && tipoB === 'agua')) { 
    return 2;
  } 
  if ((tipoA === 'fuego' && tipoB === 'electrico') || 
      (tipoA === 'hierba' && tipoB === 'electrico') ||
      (tipoA === 'electrico' && tipoB === 'fuego') || 
      (tipoA === 'electrico' && tipoB === 'hierba')) {
    return 1;
  } 
  return 0.5;
}
```

>> La efectividad del ataque dependerá del tipo del pokémon.

#### ```damage()```. 

Función para calcular el daño que hace un luchador sobre su enemigo.

- ```DestinyCalc```

```
damage (fighter: Fighter): number {
  if (fighter instanceof Destiny) 
    return Number((this.destiny.getAtaqueEspecial() * (this.getAtaque() / fighter.getDefensa()) * this.efectividad(this.getNombre(), fighter.getNombre())).toFixed(2));
  else
    return Number((10 * (this.getAtaque() / fighter.getDefensa())).toFixed(2));
}
```

- ```MarvelCalc```

```
damage (fighter: Fighter): number {
  if (fighter instanceof Marvel)
    return Number((this.marvel.getExperiencia() * (this.getAtaque() / fighter.getDefensa()) * this.efectividad(this.getNombre(), fighter.getNombre())).toFixed(2));
  else
    return Number((10 * (this.getAtaque() / fighter.getDefensa())).toFixed(2));
}
```

- ```PokemonCalc```

```
damage (fighter: Fighter): number {
  if (fighter instanceof Pokemon)
    return Number((50 * (this.getAtaque() / fighter.getDefensa()) * this.efectividad(this.getNombre(), fighter.getNombre())).toFixed(2));
  else
    return Number((10 * (this.getAtaque() / fighter.getDefensa())).toFixed(2));
}
```

>> Dependiendo del tipo que sea el enemigo, el daño se calculará con una fórmula u otra. 

### Clase ```Pokedex````

En esta clase nos centraremos en el almacenamiento de todos los luchadores, para ello crearemos dos funciones:

- ```add()```. Esta función se encargará de añadir nuevos luchadores a nuestra pokedex.

```
add(fighter: Fighter): void {
  this.fighters.push(fighter);
}
```

- ```getFighters()```. A partir de esta función podremos obtener todos los luchadores que tenemos en nuestra pokedex.

```
getFighters(): Fighter[] {
  return this.fighters;
}
```

## Ejercicio 2. DSIflix.

En este segundo ejercicio tendremos que crear un conjunto de clases e interfaces que guarden la información de una plataforma de vídeo en streaming.

### Interfaces ```StreamableCol```, ```StreamableSearch``` y ```Streamable```

- ```StreamableCol```. Almacenará todas las funciones necesarias para manejar los elementos de nuestra colección de contenido audiovisual.

```
export interface StreamableCol <T> {
  addItem(item: T): void;
  getAllItems(): T[];
  getItem(index: number): T;
  removeItem(index: number): void;
  getNumberOfItems(): number;
}
```

- ```StreamableSearch```. Se encargará de almacenar las funciones que tendrán como objetivo realizar búsquedas en nuestra colección. 

```
export interface StreamableSearch <T> {
  searchByName(name: string): T | string;
  searchByGenre(genre: string): T[] | string;
  searchByYear(year: number): T[] | string;
  searchBy(element: string): T[] | string;
}
```

- ```Streamable```. Esta interfaz contendrá a las dos anteriores y será la que se implementará en nuestra clase para poder definir cada uno de los métodos. 

```
export interface Streamable <T> extends StreamableCol <T>, StreamableSearch <T> {}
```

### Clase ```BasicStreamableCollection```

BasicStreamableCollection es una clase abstracta que almacenará una colección de películas, series y documentales. Además, en ella se implementará la interfaz ```Streamable```, por lo que se tendrán que definir todas las funciones que esta contenga. 

- ```addItem()```. Añade un item de tipo T a la colección.

```
addItem(item: T): void {
  this.items.push(item);
}
```

- ```getAllItems()```. Devuelve todos los elementos de la colección.

```
getAllItems(): T[] {
  return this.items;
}
```

- ```getItem()```. Devuelve el elemento que se encuentre el la posición que se especifique de la colección.

```
getItem(index: number): T {
  return this.items[index];
}
```

- ```removeItem()```. Elimina un elemento de la colección por su índice.

```
removeItem(index: number): void {
  this.items.splice(index, 1);
}
```

- ```getNumberOfItems()```.  Devuelve el número de elementos de la colección.

```
getNumberOfItems(): number {
  return this.items.length;
}
```

- ```abstract searchByName()```. Busca un elemento según su nombre y lo devuelve en caso de existir, en otro caso se muestra un mensaje de error.

```
abstract searchByName(name: string): T | string;
```

- ```abstract searchByGenre()```. Busca elementos según su género y los devuelve en caso de existir, en otro caso se muestra un mensaje de error.

```
abstract searchByGenre(genre: string): T[] | string;
```

- ```abstract searchByYear()```. Busca elementos según su año de estreno y los devuelve en caso de existir, en otro caso se muestra un mensaje de error.

```
abstract searchByYear(year: number): T[] | string;
```

- ```abstract searchBy()```. Método abstracto de búsqueda.

```
abstract searchBy(element: string): T[] | string;
```

### Clases ```DocumentaryCollection```, ```MoviesCollection``` y ```SeriesCollection```

Estas clases serán heredadas de la clase BasicStreamableCollection ya que tendrán en común la mayoría de las funciones que se encuentran en la clase BasicStreamableCollection. 

Por otro lado, las funciones abstractas que se encuentran declaradas en la clase BasicStreamableCollection tendrán que ser definidas en cada una de las subclases, en este caso se definirían de la siguiente manera:

#### ```searchByName()```

En todos los casos se realizará la búsqueda de la misma forma, sin embargo, cambiará el tipo de objeto que se busque en cada caso. 

```
searchByName(name: string): Documentary | string {
  for (let i = 0; i < this.items.length; i++) {
    if (this.items[i].getName() === name) return this.items[i];
  }
  return "No se ha encontrado ningún elemento con este nombre";
}
-----------------------------------------------------------------
searchByName(name: string): Movies | string {
  ...
}
-----------------------------------------------------------------
searchByName(name: string): Series | string {
  ...
}
```

#### ```searchByGenre()```

En todos los casos se realizará la búsqueda de la misma forma, sin embargo, cambiará el tipo de objeto que se busque en cada caso. 

```
searchByGenre(genre: string): Documentary[] | string {
  let genreItems: Documentary[] = [];
  for (let i = 0; i < this.items.length; i++) {
    if (this.items[i].getGenre() === genre) genreItems.push(this.items[i]);
  }
  if (genreItems.length === 0) return "No se ha encontrado ningún elemento de este género";
  else return genreItems;
}
-----------------------------------------------------------------
searchByGenre(genre: string): Movies[] | string {
  ...
}
-----------------------------------------------------------------
searchByGenre(genre: string): Series[] | string {
  ...
}
```

#### ```searchByYear()```

En todos los casos se realizará la búsqueda de la misma forma, sin embargo, cambiará el tipo de objeto que se busque en cada caso. 

```
searchByYear(year: number): Documentary[] | string{
  let yearItems: Documentary[] = [];
  for (let i = 0; i < this.items.length; i++) {
    if (this.items[i].getYear() === year) yearItems.push(this.items[i]);
  }
  if (yearItems.length === 0) return "No se ha encontrado ningún elemento de este año";
  else return yearItems;
}
-----------------------------------------------------------------
searchByYear(year: number): Movies[] | string {
  ...
}
-----------------------------------------------------------------
searchByYear(year: number): Series[] | string {
  ...
}
```

#### ```searchBy()```

- ```DocumentaryCollection```. Busca elementos según la duración del documental y los devuelve en caso de existir, en otro caso se muestra un mensaje de error.

```
searchBy(element: string): Documentary[] | string{
  let timeItems: Documentary[] = [];
  for (let i = 0; i < this.items.length; i++) {
    if (this.items[i].getTime() === Number(element))
      timeItems.push(this.items[i]);
  }
  if (timeItems.length === 0) return "No se ha encontrado ningún elemento que dure esa cantidad de tiempo";
  else return timeItems;
}
```

- ```MoviesCollection```. Busca elementos según el tipo de película (Independiente, Saga, etc.) y los devuelve en caso de existir, en otro caso se muestra un mensaje de error.

```
searchBy(element: string): Movies[] | string{
  let typeItems: Movies[] = [];
  for (let i = 0; i < this.items.length; i++) {
    if (this.items[i].getType() === element)
      typeItems.push(this.items[i]);
  }
  if (typeItems.length === 0) return "No se ha encontrado ningún elemento con esa característica";
  else return typeItems;
}
```

- ```SeriesCollection```. Busca elementos según el número de capítulos que tenga la serie y los devuelve en caso de existir, en otro caso se muestra un mensaje de error.

```
searchBy(element: string): Series[] | string{
  let capNumItems: Series[] = [];
  for (let i = 0; i < this.items.length; i++) {
    if (this.items[i].getCapNumber() === Number(element))
      capNumItems.push(this.items[i]);
  }
  if (capNumItems.length === 0) return "No se ha encontrado ningún elemento con esa cantidad de capítulos";
  else return capNumItems;
}
```

### Clase ```Content```

Content es una clase abstracta que almacenará las funciones comunes que serán necesarias para manejar la información de cada tipo de contenido (películas, series y documentales). 

- ```getName()```. Devuelve el nombre del elemento.

```
getName(): string {
  return this.name;
}
```

- ```getGenre()```. Devuelve el género del elemento.

```
getGenre(): string {
  return this.genre;
}
```

- ```getYear()```. Devuelve el año de estremo del elemento.

```
getYear(): number {
  return this.year;
}
```

### Clases ```Documentary```, ```Movies``` y ```Series```

Estas clases serán heredadas de la clase Content ya que tendrán en común la mayoría de las funciones que se encuentran en la clase Content. 

Por otro lado, cada una de estas subclases tendrán  definidas unas funciones específicas para cada una de ellas, en este caso se definirían de la siguiente manera:

#### ```Documentary```

- ```getTime()```. Devuelve el tiempo que dura el documental.

```
getTime() {
  return this.time;
}
```

#### ```Movies```

- ```getType()```. Devuelve el tipo de película.

```
getType(): string {
  return this.type;
}
```

#### ```Series```

- ```getCapNumber()```. Devuelve el número de capítulos que tiene la serie.

```
getCapNumber(): number {
  return this.capNumber;
}
```

## Ejercicio 3. El cifrado indescifrable.

En este último ejercicio tendremos que crear una clase que realice el cifrado y el descifrado de un mensaje. Para ello crearemos los siguiente métodos:

### ```getCadena()```

Este método retornará el valor del mensaje introducido.

```
getCadena(): string {
  return this.cadena;
}
```

### ```eliminarEspacios()```

Este método se encargará de eliminar los espacios del mensaje en caso de tener.

```
eliminarEspacios(): void {
  let str = "";
  for (let i = 0; i < this.cadena.length; i++)
    if (this.cadena[i] !== " ") str = str + this.cadena[i];
  this.cadena = str;
}
```

### ```cifrado()```

Con este método podremos tanto cifrar y como descifrar el mensaje introducido dependiendo de lo que el usuario indique.

Lo primero que se deberá hacer es eliminar los espacios que pueda haber en la cadena introducida, esto se hará llamando a la función ```eliminarEspacios()```.

A continuación, tendremos que recorrer tanto la cadena introducida como la clave para realizar el desplazamiento y asignación de las nuevas letras que tendrán que formar el mensaje resultante. 

```
for (let i = 0; i < this.cadena.length; i++) {
  for (let j = 0; j < this.clave.length; j++) {
    if (this.result.length === this.cadena.length) break;
    if (this.alfabeto.search(this.cadena[i]) !== -1) {
      desplazamiento = this.alfabeto.indexOf(this.clave[j]) + 1;
      if (aux) nuevaPos = (desplazamiento + this.alfabeto.indexOf(this.cadena[i])) % this.alfabeto.length;
      else nuevaPos = (this.alfabeto.indexOf(this.cadena[i]) - desplazamiento + this.alfabeto.length) % this.alfabeto.length;
      this.result = this.result + this.alfabeto[nuevaPos];
    }
    else {
      this.result = this.result + this.cadena[i];
      j--;
    }
    i++;
  }
  i--;
} 
```

Sin embargo, antes de realizar los cálculos del desplazamiento, primero se verificará si el usuario quiere cifrar o descifrar el mensaje:

- ```aux === true```: Cifrar.
- ```aux === false```: Descifrar.

Es importante comentar que en caso de que la cadena resultante y la original sean del mismo tamaño el proceso acabará. 

```
if (this.result.length === this.cadena.length) break;
```

### ```cifrar()```

Este método llamará a la función de cifrado indicando que se quiere cifrar el mensaje y retornará la cadena resultante, es decir, el texto cifrado.

```
cifrar(): string {
  this.cifrado(true);
  return this.result;
}
```

### ```descifrar()```

Este método llamará a la función de cifrado indicando que se quiere descifrar el mensaje y retornará la cadena resultante, es decir, el texto descifrado.

```
descifrar(): string {
  this.cifrado(false);
  return this.result;
}
```

# CONCLUSIÓN

En conclusión, podemos comentar que una clase tiene atributos, que son variables internas de la clase (aveces a estos se les llama estado de la clase) y métodos, que son las acciones a realizar dentro de la clase.

Asimismo, es importante destacar que los objetos que se crean a partir de la clase se llaman instancia de la clase y, además, se usa el ```this``` para acceder a los atributos y métodos de la clase ya que hace referencia al objeto de la clase.

Además, tal y como hemos podido observar en los ejercicio resueltos, para poder implementar **interfaces** a una clase, es necesario emplear ```implements```, mientras que para extender una **clase** a otra se hace a partir de ```extends```.

Por último, la función ```constructor``` es un método propio de la clase y nos permite construir el objeto.