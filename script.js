function filterGallery(category){
    let items=document.querySelectorAll(".gallery-item")

    items.forEach(item=>{
        if(category == 'all' || item.classList.contains(category))
            item.style.display="block"
        else item.style.display="none"
    })
}

function openLightBox(src){
    document.getElementById("lightbox").style.display="flex"
    document.getElementById("lightbox-img").src=src
}

function closeLightBox(){
    document.getElementById('lightbox').style.display='none'
}







let backToTop = document.getElementById('backToTop')

window.onscroll=function(){
    if(document.body.scrollTop>300 || document.documentElement.scrollTop>300){
        backToTop.style.display='flex'
    }else{
        backToTop.style.display='none'
    }
}

backToTop.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}





let words = ["Designer", "Developer", "Programmer", "Digital Marketer"]
let i = 0
let j = 0

let currentWord = ""
let isDeleting = false

function type(){
    currentWord = words[i]

    if(isDeleting){
        j--
    }else{
        j++
    }

    document.getElementById('typing').textContent = currentWord.substring(0,j)

    if(!isDeleting && j === currentWord.length){
        isDeleting = true
        setTimeout(type,1000)
        return
    }

    if(isDeleting && j === 0){
        isDeleting = false
        i++
        if(i === words.length){
            i = 0
        }
    }
    setTimeout(type,isDeleting ? 60 : 120)
}

type()




window.addEventListener('scroll', function(){
    let scrollTop = window.scrollY
    let docHeight = this.document.documentElement.scrollHeight - window.innerHeight
    let scrollPercent = (scrollTop / docHeight) * 100
    this.document.getElementById('scrollIndicator').style.width = scrollPercent + "%"
})




const toggleBtn = document.getElementById('themeToggle')
const body = document.body

if(localStorage.getItem("theme") == "dark"){
    body.classList.add("dark-mode")
    toggleBtn.innerHTML = '<i class="bi bi-sun-fill"></i>'
}else{
    body.classList.add('light-mode')
}

toggleBtn.addEventListener("click", () =>{
    if(body.classList.contains("dark-mode")){
        body.classList.replace("dark-mode", "light-mode")
        toggleBtn.innerHTML = '<i class="bi bi-moon-fill"></i>'
        localStorage.setItem("theme", "light")
    }else{
        body.classList.replace("light-mode", "dark-mode")
        toggleBtn.innerHTML = '<i class="bi bi-sun-fill"></i>'
        localStorage.setItem("theme", "dark")
    }
})