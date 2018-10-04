const usuarios = [
 {
 nome: "Diego",
 habilidades: ["Javascript", "ReactJS", "Redux"]
 },
 {
 nome: "Gabriel",
 habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
 }
];

let func = (array) => {
	array.map(item => console.log(`O ${item.nome} possui as habilidades: ${item.habilidades}`))
}

func(usuarios)
