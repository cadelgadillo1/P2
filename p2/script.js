//user clicks on the first button
//that button value is stored
//user selects an operator(+,-,*,/)
//user clicks on the second number
//second number is stored
//function is used to do calculation
//answer is stored
//answer is then displayed

const getButtons = () => {
  const buttons = document.querySelectorAll('button')
  return buttons
}

const addEventListenersToButtons  = () => {
  const btns = getButtons()
  const screen = getScreen()
  const clear =  () => screen.innerHTML = ''
  const evaluateExpression = () => {
    return eval(screen.innerHTML)
  }

 btns.forEach((btn)=> {
   if(btn.className === 'clear'){
    btn.addEventListener('click', () => {
      clear()
    })
    return
  }

  if(btn.className === 'equals'){
    btn.addEventListener('click', ()=>{
      let val = evaluateExpression()
      clear()
      screen.innerHTML = val
    })
    return
  }

  btn.addEventListener('click', (e) => {
      screen.innerHTML += e.target.value
    })
  })
}

function getScreen(){
  return document.querySelector('.inner-screen')
}

addEventListenersToButtons()