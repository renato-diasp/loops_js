// 1
// function renderUpToTwenty (){
//   for(let i = 0; i <= 20; i++)
//   console.log(i)
// }

// renderUpToTwenty()

// 2
// function tenInTenToAHundred (){
//   for(let i = 10; i <= 100; i+=10)
//   console.log(i)
// }

// tenInTenToAHundred()

// 3
// function oddUpToTwenty (){
//   for(let i = 0; i <= 20; i++)
//   if(i % 2 !== 0) console.log (i)
// }

// oddUpToTwenty()

// 4
// function evenUpToTwenty (){
//   for(let i = 0; i <= 20; i++)
//   if(i % 2 === 0) console.log (i)
// }

// evenUpToTwenty()

// 5
// function fromNegativeToPositive(){
//   for(let i = -10; i <= 0; i++)
//   console.log (i)
// }

// fromNegativeToPositive()

// 6
// function inDescendingDirection(){
//   let numero = 10
//   while(numero >= 0) {
//     console.log (numero) 
//     numero--  
//   }   
// }

// inDescendingDirection()

// 7
// function toSquare(){
//   let numero = 1
//   let square
//   do{
//     square = numero*numero
//     console.log(square)
//     numero++
//   }while(numero<=10)  
// }

// toSquare()

// 8
// function toSquare200(){
//   let numero = 15
//   let square
//   do{
//     square = numero*numero
//     console.log(square)
//     numero++
//   }while(numero<=200)  
// }

// toSquare200()

// 9
// function somaNumero(){
//   let soma = 0
//   for(let i = 1; i <= 100; i++){
//     soma += i
//   }
//   console.log(soma)
// }

// somaNumero()

// 10
// function div4(){
//   let numero = 0
//   do{
//     if(numero % 4 === 0) console.log(numero)
//     numero++
//   }while(numero < 200)
// }

// div4()

// 11
// function somaMedia(){
//   let soma = 0
//   let contadorMedia = 0
//   let media 
//   for(let i = 50; i <= 70; i+=2){
//     soma += i
//     contadorMedia++
//   }
//   media = soma / contadorMedia
//   console.log(`A soma é ${soma} e a média é ${media}`)
// }

//  somaMedia() 

// 12
// function fibonacciNumbers(){
//   let sequenciaFinoncci = []
//   for(let i = 0; i < 15; i++){
//     if(i <= 1){
//       sequenciaFinoncci.push(i)
//     }else{
//       let proximoNumero = sequenciaFinoncci[i - 1] + sequenciaFinoncci[i - 2]
//       sequenciaFinoncci.push(proximoNumero)
//     }
//   }

//   console.log(sequenciaFinoncci)
// }

// fibonacciNumbers()

// 13
// let totalGraos = []
//     let soma = 0
//     for(let i = 1; i <=64; i++){
//         if(i === 1){
//             totalGraos.push(i)
//         }else if(i === 2){
//             totalGraos.push(i)
//         }else{
//             let proximoNumero = totalGraos[i -2] *2
//             // console.log(proximoNumero)
//             totalGraos.push(proximoNumero)
//         }
//     for(let contador = 0; contador < totalGraos.length; contador++){
//         soma += totalGraos[contador]
        
//     }
//     }
//     console.log(totalGraos[63]*2)
//     console.log(soma)

// 14
// let numero = parseFloat(prompt('Por favor, digite um numero:'))
//   while(isNaN(numero) || numero < 0 || numero > 10){
//     alert('Digite um número válido')
//     numero = parseInt(prompt('Por favor, digite um numero:'))
//   }

//   alert(`O número atende aos requesitos, o número digitado é ${numero}`)

// 15
// let user = prompt('Por favor, digite um nome de usuário:')
// let password = prompt('Por favor, cadastre uma senha:')
//   while(user === password){
//     alert('Usuário e senha não podem ser iguais, cadastre novamente')
//     user = prompt('Por favor, digite um nome de usuário:')
//     password = prompt('Por favor, cadastre uma senha:')
//   }

//   alert(`Cadastro realizado com sucesso, usuário ${user} autenticado`)

// 16
// let numero = parseFloat(prompt('Informe um número: '))
// let contadora = 0
// let soma = 0
// while(Number.isInteger(numero) && numero > 0 && numero < 10){
//   soma += numero
//   contadora++
//   numero = parseFloat(prompt('Informe um número: '))
// }
// let media = soma / contadora
// alert(`A soma dos números informados é ${soma} e sua média é ${media.toFixed(2)}`)

// 17
// let votoCandidato = prompt('Vote no candidato escolhido:\n\n "a" Para o candidato A\n "b" Para o candidato B\n "c" Para o candidato C\n\n "x" Para sair do sistema ')

// let votosCandidatoA = 0
// let votosCandidatoB = 0
// let votosCandidatoC = 0

// while(votoCandidato === "a" || votoCandidato === "b" || votoCandidato === "c" || votoCandidato === "x" || votoCandidato != "x"){
//   while(votoCandidato === "a"){
//     alert('Voto computado com sucesso')
//     votosCandidatoA++
//     votoCandidato = prompt('Vote no candidato escolhido:\n\n "a" Para o candidato A\n "b" Para o candidato B\n "c" Para o candidato C\n\n "x" Para sair do sistema ')
//   }

//   while(votoCandidato === "b"){
//     alert('Voto computado com sucesso')
//     votosCandidatoB++
//     votoCandidato = prompt('Vote no candidato escolhido:\n\n "a" Para o candidato A\n "b" Para o candidato B\n "c" Para o candidato C\n\n "x" Para sair do sistema ')
//   }

//   while(votoCandidato === "c"){
//     alert('Voto computado com sucesso')
//     votosCandidatoC++
//     votoCandidato = prompt('Vote no candidato escolhido:\n\n "a" Para o candidato A\n "b" Para o candidato B\n "c" Para o candidato C\n\n "x" Para sair do sistema ')
//   }

//   if(votoCandidato === "x"){
//     alert(`O candidato A tem ${votosCandidatoA} voto(s), O candidato B tem ${votosCandidatoB} voto(s) e o candidato C tem ${votosCandidatoC} voto(s) `)
//      break
//     }else if (votoCandidato != "a" && votoCandidato != "b" && votoCandidato != "c" && votoCandidato != "x"){
//     alert('Candidato inválido, vote novamente')
//     votoCandidato = prompt('Vote no candidato escolhido:\n\n "a" Para o candidato A\n "b" Para o candidato B\n "c" Para o candidato C\n\n "x" Para sair do sistema ')
//   }
//      }