function calcularSaldoRankeadas(vitorias, derrotas) {
    // Calcula o saldo de ranqueadas (vitórias - derrotas)
    let saldoVitorias = vitorias - derrotas;
    
    // Determina o nível com base no saldo de vitórias
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // Retorna o resultado formatado conforme especificado
    return `O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Exemplo de uso da função
const resultado = calcularSaldoRankeadas(70, 20); // Exemplo com 70 vitórias e 20 derrotas
console.log(resultado); // Saída esperada: "O Herói tem saldo de 50 está no nível de Ouro"