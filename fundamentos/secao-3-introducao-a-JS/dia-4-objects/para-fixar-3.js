//Após ter conhecido diferentes maneiras de associar chaves e valores a um objeto, que tal praticar? Adicione suas informações ao objeto student = {}, como nome, e-mail, telefone, GitHub e LinkedIn, usando os métodos abordados no conteúdo.

let student = {
    name: "Matheus",
    email: 'matheus2002fernando@gmail.com',
    cellNumber: 12997051904,
    github: "matheus-f-s-freitas"
};
for(let index in student){
    console.log(index, student[index])
}