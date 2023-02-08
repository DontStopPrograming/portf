const tech = document.getElementById('techIMG')
const techp1 = document.getElementById('p1')
const techp11 = document.getElementById('p11')
const techp12 = document.getElementById('p12')
const techp2 = document.getElementById('p2')
const techp3 = document.getElementById('p3')

 const chargeImg = (input, observation) => {
     console.log('Mostrando')
     input.forEach((input) => {
         if(!input.isIntersecting){
             
             
            } else {
             input.target.classList.add('theTechnologiesImg')
             input.target.classList.add('theP1')
             input.target.classList.add('theP11')
             input.target.classList.add('theP12')
             input.target.classList.add('theP2')
             input.target.classList.add('theP3')
         }
     })
 }

const obs = new IntersectionObserver(chargeImg, {
     root: null,
     rootMargin: '0px 0px 0px 0px',
     threshold: 1
 })

obs.observe(tech)
obs.observe(techp1)
obs.observe(techp11)
obs.observe(techp12)
obs.observe(techp2)
obs.observe(techp3)


const btnSwitch = document.querySelector('#switch')

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    btnSwitch.classList.toggle('active')
})