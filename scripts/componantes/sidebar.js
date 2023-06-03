import comket from "../../comket/html.js"
import Favorites from './favorites.js'
import { artContainer } from "./article.js"
function logo() {
    return comket.div({
        class:"logo",
        children:[
            comket.img({src:"/media/logo_1.svg"}),
            comket.img({src:"/media/logo_2.svg"})
        ]
    })
}
function madeBtnMenu(object) {
    let btn = comket.button({
        children : [
            comket.img({src: object.icon}),
            comket.span({text: object.title})
        ],
    })
    return btn
}
function menuTop() {
    let menuArray = [
        {icon: "/media/home.png", title: "Home"},
        {icon: "/media/profile.svg", title: "Profile"},
        // {icon: "/media/search.svg", title: "Search"},
        {icon: "/media/favorite.svg", title: "Favorite"},
        // {icon: "/media/balance.svg", title: "Balance"},
    ]
    let buttons = [];  
    for (let object of menuArray) {
        buttons.push(madeBtnMenu(object))
        
    }
    buttons[0].addEventListener("click", ()=>{OpenHome()})
    buttons[2].addEventListener("click", ()=>{OpenFavorites()})
     return comket.div({
        class:"menuTop",
        children:buttons
    })
}
function menuBottom() {
    let menuArray = [
        {icon: "/media/Computer.svg", title: "Computer"},
        {icon: "/media/headphones.svg", title: "Game Headphones"},
        {icon: "/media/VR.svg", title: "VR Glasses"},
        {icon: "/media/mouse.svg", title: "Mouse Gaming"},
        {icon: "/media/keyboard.svg", title: "Keyboard"},
    ]
    let buttons = [];  
    buttons.push(
        comket.div({
            class:"category",
            children:[comket.span({text:"Category"}),comket.img({src:"/media/arrow.svg"}) ]
        })
    )
    for (let object of menuArray) {
        buttons.push(madeBtnMenu(object))
    }
    return comket.div({
       class:"menuBottom",
       children:buttons
   })
}
function OpenFavorites() {
    document.querySelector("article").innerHTML = ""
    document.querySelector("article").append(Favorites())
}
export function OpenHome() {
    document.querySelector("article").innerHTML = ""
    document.querySelector("article").append(artContainer)
}










export default function Sidebar() {
    
    let sidebar = comket.aside({
        children:[logo(),menuTop(),menuBottom()]
    })
    
    return sidebar
}