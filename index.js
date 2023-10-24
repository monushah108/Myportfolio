let slider = document.querySelector('.car-img')
let dotes = document.getElementById('dotes')
let direction = ['0em', '-20em', '-35em']
let go = 0

function slid() {

    if (go < direction.length) {
        slider.style.cssText = `position:relative;left:${direction[go++]};transition:1s;cursor:pointer;`
        // console.log(go)
        

    }
    else {
        go = 0
        // dotes[go++].classList.remove = 'active'


    }
}
setInterval(() => {


    slid()

}, 1000)


let f = document.querySelector('.form-section')

let nam = document.getElementById('name')
let email = document.getElementById('email')
let phone = document.getElementById('phone')
let btn = document.getElementById('submit-btn')
console.log(nam)

nam.addEventListener('blur',()=>{
    let regx = /[a-zA-Z]([0-9a-zA-Z]){0,10}$/
    console.log(regx.test(nam.value))
    namev = regx.test(nam.value)
})

email.addEventListener('blur',()=>{
    let regx = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)|gmail\.([a-zA-Z]){2,7}$/
    console.log(regx.test(email.value))
    mailva =regx.test(email.value)
})

btn.addEventListener('click',function(e){
    e.preventDefault()
    if(namev && mailva){
        alert('abe tu gya beta ')
        nam.value = ""
        email.value = ""
        phone.value = ""
    }
    else{
        console.log('abe saale')
        location.href = 'error.html'
    }
})
