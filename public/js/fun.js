let foto = document.getElementById('imgder')
let textone = document.getElementById('izq')
let texttwo = document.getElementById('presentacion')
let textthree = document.getElementById('cero')

let mostrarSecSix = document.getElementById('sectionSix')

let sectionback = document.getElementById('sectionTwo')

let efectoletraj = document.getElementById('javascript')
let efectoletrac = document.getElementById('css')
let efectoletrah = document.getElementById('html')

let aboutanimacion = document.getElementById('about')

let aniNode = document.getElementById('node')
let aniSql = document.getElementById('sql')
let aniScss = document.getElementById('scss')

let aniTy = document.getElementById('typescript')
let aniReact = document.getElementById('react')
let aniAws = document.getElementById('aws')

const chargeImg = (input, observation) => {
    console.log('Mostrando')
    input.forEach((input) => {
        if(!input.isIntersecting){
            input.target.classList.add('circle')
            input.target.classList.remove('mostrartextTwo')
            input.target.classList.add('mostrartextOne')
            
            

        } else {
            input.target.classList.remove('mostrartextOne')
            input.target.classList.add('mostrartextTwo')
            input.target.classList.add('mostrartextThree')
            input.target.classList.add('changebackOne')

            input.target.classList.add('efectoC')
            input.target.classList.add('efectoh')
            input.target.classList.add('efectoJ')
            input.target.classList.add('aniabout')

            input.target.classList.add('animationNode')
            input.target.classList.add('animationSql')
            input.target.classList.add('animationScss')

            input.target.classList.add('animationTypescript')
            input.target.classList.add('animationReact')
            input.target.classList.add('animationAws')
            
            input.target.classList.add('mostrarSectionSix')

            
        }
    })
}

const obs = new IntersectionObserver(chargeImg, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1
})

obs.observe(foto)
obs.observe(textone)
obs.observe(texttwo)
obs.observe(textthree)

obs.observe(mostrarSecSix)

obs.observe(sectionback)

obs.observe(efectoletraj)
obs.observe(efectoletrac)
obs.observe(efectoletrah)

obs.observe(aboutanimacion)

obs.observe(aniNode)
obs.observe(aniSql)
obs.observe(aniScss)

obs.observe(aniTy)
obs.observe(aniReact)
obs.observe(aniAws)


const btnSwitch = document.querySelector('#switch')

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark')
    btnSwitch.classList.toggle('active')
})