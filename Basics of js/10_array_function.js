const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash","batman"];

marvel_heros.push(dc_heros);
console.log(marvel_heros);  // array inside a array
console.log(marvel_heros[3][0]) // superman

const all_hero = marvel_heros.concat(dc_heros)
console.log(all_hero)  // merge in a single array


const all_new_heros = [...marvel_heros, ...dc_heros]  // spread operator (no limitation)
console.log(all_new_heros)  // same as concat


const another_array = [1,2,3,[4,5,6,[5,8,[9,8]]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("mekochan"))
console.log(Array.from("mekochan"))
console.log(Array.from({name:"mekochan"}))  // return empty array interesting na!


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3))
