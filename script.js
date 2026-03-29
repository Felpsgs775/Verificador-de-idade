var nascimento = document.getElementById(`Ano`)
var genero1 = document.getElementById(`genero1`)
var genero2 = document.getElementById(`genero2`)
function verificar()
{
    var idade = 2026 - Number(nascimento.value)
    if(genero1.checked)
    {
        var sexo = `Homem`
    }
    else
    {
        var sexo = `Mulher`
    }
    var resultado = document.getElementById(`resultado`)
    resultado.innerHTML = `Detectamos um(a) ${sexo} de ${idade} anos `
}