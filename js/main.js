//нахожу input
let inp1 = document.querySelector('#x')
let inp2 = document.querySelector('#y')


//нахожу кнопки
let _1 = document.querySelector('#_1')
let _2 = document.querySelector('#_2')
let _3 = document.querySelector('#_3')
let _4 = document.querySelector('#_4')
let _5 = document.querySelector('#_5')
let _6 = document.querySelector('#_6')

//вызов функции
_1.addEventListener('click', sin1)
_2.addEventListener('click', cos1)
_3.addEventListener('click', tan1)
_4.addEventListener('click', xx)
_5.addEventListener('click', log1)
_6.addEventListener('click', degree)



//синус
function sin1(){
  let x = inp1.value
  let y = inp2.value

  x = Number(x)
  y = Number(y)

  let sin11 = Math.sin(2*x+3*y)
  alert(sin11)
}

//косинус
function cos1(){
  let x = inp1.value
  let y = inp2.value

  x = Number(x)
  y = Number(y)

  let cos11 = Math.cos(4*x-2*y)
  alert(cos11)
}

//тангенс
function tan1(){
  let x = inp1.value
  let y = inp2.value

  x = Number(x)
  y = Number(y)

  let tan11 = Math.tan(2*x+y)
  alert(tan11)
}

// Z=X! 
function xx(){
  let x = inp1.value
  let y = inp2.value

  x = Number(x)
  y = Number(y)

  let xx = !x

  inp2.value = x 
  inp1.value = 0 

  alert(xx)
}

//логарифм
function log1(){
  let x = inp1.value
  let y = inp2.value

  x = Number(x)
  y = Number(y)

  let log11 = Math.log(2*x+y+3)
  alert(log11)
}

//степень
function degree(){
  let x = inp1.value
  let y = inp2.value

  x = Number(x)
  y = Number(y)

  let degree11 = x ** y
  alert(degree11)
}