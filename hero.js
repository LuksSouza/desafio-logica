/**
    ## Objetivo

    Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

    Se XP for menor do que 1.000 = Ferro
    Se XP for entre 1.001 e 2.000 = Bronze
    Se XP for entre 2.001 e 5.000 = Prata
    Se XP for entre 5.001 e 7.000 = Ouro
    Se XP for entre 7.001 e 8.000 = Platina
    Se XP for entre 8.001 e 9.000 = Ascendente
    Se XP for entre 9.001 e 10.000= Imortal
    Se XP for maior ou igual a 10.001 = Radiante

    ## Saída

    Ao final deve se exibir uma mensagem:
    "O Herói de nome **{nome}** está no nível de **{nivel}**"
 */

const nome = "Batman";

main();

function main() {
    for (let power = 2; power < 10002; power=power+1000) {
        let nivel = '';

        if (power < 1000)
            nivel = 'Ferro';
        if (power > 1001 && power < 2000)
            nivel = 'Bronze';
        if (power > 2001 && power < 5000)
            nivel = 'Prata';
        if (power > 5001 && power < 7000)
            nivel = 'Ouro';
        if (power > 7001 && power < 8000)
            nivel = 'Platina';
        if (power > 8001 && power < 9000)
            nivel = 'Ascendente';
        if (power > 9001 && power < 10000)
            nivel = 'Imortal';
        if (power >= 10001)
            nivel = 'Radiante';
        
        console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
    }
}