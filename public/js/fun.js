const itemH = document.querySelector('#item-html')
const itemC = document.querySelector('#item-css')
const itemJ = document.querySelector('#item-js')
const itemS = document.querySelector('#item-sass')
const itemB = document.querySelector('#item-boos')
const itemG = document.querySelector('#item-git')
const itemM = document.querySelector('#item-mongo')
const itemSQ = document.querySelector('#item-sql')
const itemR = document.querySelector('#item-react')
const itemA = document.querySelector('#item-aws')
const itemT = document.querySelector('#item-type')

 const chargeImg = (input, observation) => {
     console.log('Mostrando')
     input.forEach((input) => {
         if(!input.isIntersecting){
             
        } else {
            input.target.classList.add('active')
            
         }
     })
 }

const obs = new IntersectionObserver(chargeImg, {
     root: null,
     rootMargin: '0px 0px 0px 0px',
     threshold: 1
 })

obs.observe(itemH)
obs.observe(itemC)
obs.observe(itemJ)
obs.observe(itemS)
obs.observe(itemB)
obs.observe(itemG)
obs.observe(itemM)
obs.observe(itemSQ)
obs.observe(itemR)
obs.observe(itemA)
obs.observe(itemT)

const btnSwitch = document.querySelector('#switch')

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    btnSwitch.classList.toggle('active')
})