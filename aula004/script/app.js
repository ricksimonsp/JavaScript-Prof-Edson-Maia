//Array JS
//var codigos = Array(10, 20, 30)  NÃO SE USA MAIS ESSA SINTAXE!!!
let produtos = ['Arroz', 'Feijão', 'Leite']
let codigos = ['10', '20', '30']
let meses = ['Jan', 'Fev', 'Mar', 'Abr']

// ADICIONAR no final - PUSH
produtos.push('Açucar', 'Sal')
codigos.push(40, 50, 60, 70)
meses.push('Mai', 'Jun', 'Jul', 'Ago', '07')

// REMOVER do final - POP
produtos.pop('Sal')
codigos.pop()
meses.pop()

// ADICIONAR no início UNSHIFT
produtos.unshift('Uva')

// REMOVER do início SHIFT
produtos.shift()

// REMOVER de uma posição específica SPLICE
// Splice = emendar
// Posição inicial, quantos remover
codigos.splice(1, 3)

// COPIAR array slice = fatiar porção
// Posição inicial, quanto copiar
let meses1 = meses.slice()
let meses2 = meses.slice(0, 3)

// VER TAMANHO DO ARRAY - LENGHT 
meses.length
meses1.length
meses2.length

// Spread Operator ... (usar reticências) Copiando
let teste = [...produtos, 'Ovo', 'Pera']

