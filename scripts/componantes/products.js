import comket from "../../comket/html.js";
import CardData, { AddProfilePage } from "./cardData.js";
let sortingBarData = [
    {title: "Recommended",class:""},
    {title: "Popullar",class:""},
    {title: "Top",class:""},
    {title: "All",class:"active"},
]
export let productsData = [
    {id:"c_1",favorite:false, cart:false, sorting: [ "Recommended"], category: ["Computer"], name:"Lexma G88", price: "$100", img: "/media/products/computer_1.png",images: ["/media/products/computer_2.png","/media/products/headphone_3.png","/media/products/mouse_1.png"],},
    {id:"c_2",favorite:false, cart:false, sorting: ["Popullar", "Recommended"], category: ["Computer"], name:"Lexma G88", price: "$100", img: "/media/products/computer_2.png",images: ["/media/products/computer_2.png","/media/products/headphone_3.png","/media/products/mouse_1.png"]},
    {id:"c_3",favorite:false, cart:false, sorting: ["Recommended"], category: ["Computer"], name:"Lexma G88", price: "$100", img: "/media/products/computer_3.png",images: ["/media/products/computer_2.png","/media/products/headphone_3.png","/media/products/mouse_1.png"]},
    {id:"c_4",favorite:false, cart:false, sorting: ["Top","Recommended"], category: ["Computer"], name:"Lexma G88", price: "$100", img: "/media/products/computer_4.png",images: ["/media/products/computer_2.png","/media/products/headphone_3.png","/media/products/mouse_1.png"]},
    {id:"c_5",favorite:false, cart:false, sorting: ["Popullar",], category: ["Game Headphones"], name:"Lexma G88", price: "$100", img: "/media/products/headphone_1.png",images: ["/media/products/computer_2.png","/media/products/headphone_3.png","/media/products/mouse_1.png"]},
    {id:"c_6",favorite:false, cart:false, sorting: ["Top", "Popullar",], category: ["Game Headphones"], name:"Lexma G88", price: "$100", img: "/media/products/headphone_2.png",images: ["/media/products/computer_2.png","/media/products/headphone_3.png","/media/products/mouse_1.png"]},
    {id:"c_7",favorite:false, cart:false, sorting: ["Top", "Popullar",], category: ["Game Headphones"], name:"Lexma G88", price: "$100", img: "/media/products/headphone_3.png",images: ["/media/products/computer_2.png","/media/products/headphone_3.png","/media/products/mouse_1.png"]},
    {id:"c_8",favorite:false, cart:false, sorting: ["Top", "Popullar",], category: ["Game Headphones"], name:"Lexma G88", price: "$100", img: "/media/products/headphone_4.png",images: ["/media/products/computer_2.png","/media/products/headphone_3.png","/media/products/mouse_1.png"]},
    {id:"c_9",favorite:false, cart:false, sorting: ["Top",  "Recommended"], category: ["VR Glasses"], name:"Lexma G88", price: "$100", img: "/media/products/VR_1.png",images: ["/media/products/computer_2.png","/media/products/headphone_3.png","/media/products/mouse_1.png"]},
    {id:"c_10",favorite:false, cart:false, sorting: ["Top",  "Recommended"], category: ["VR Glasses"], name:"Lexma G88", price: "$100", img: "/media/products/VR_2.png",images: ["/media/products/computer_2.png","/media/products/headphone_3.png","/media/products/mouse_1.png"]},
    {id:"c_11",favorite:false, cart:false, sorting: ["Top",  "Recommended"], category: ["VR Glasses"], name:"Lexma G88", price: "$100", img: "/media/products/VR_3.png",images: ["/media/products/computer_2.png","/media/products/headphone_3.png","/media/products/mouse_1.png"]},
    {id:"c_12",favorite:false, cart:false, sorting: ["Popullar", "Recommended"], category: ["Keyboard"], name:"Lexma G88", price: "$100", img: "/media/products/keyboard_1.png",images: ["/media/products/computer_2.png","/media/products/headphone_3.png","/media/products/mouse_1.png"]},
    {id:"c_13",favorite:false, cart:false, sorting: ["Popullar", "Recommended"], category: ["Keyboard"], name:"Lexma G88", price: "$100", img: "/media/products/keyboard_2.png",images: ["/media/products/computer_2.png","/media/products/headphone_3.png","/media/products/mouse_1.png"]},
    {id:"c_14",favorite:false, cart:false, sorting: ["Popullar", "Recommended"], category: ["Keyboard"], name:"Lexma G88", price: "$100", img: "/media/products/keyboard_3.png",images: ["/media/products/computer_2.png","/media/products/headphone_3.png","/media/products/mouse_1.png"]},
    {id:"c_15",favorite:false, cart:false, sorting: ["Top",  "Recommended"], category: ["Mouse Gaming"], name:"Lexma G88", price: "$100", img: "/media/products/mouse_1.png",images: ["/media/products/computer_2.png","/media/products/headphone_3.png","/media/products/mouse_1.png"]},
    {id:"c_16",favorite:false, cart:false, sorting: ["Top",  "Recommended"], category: ["Mouse Gaming"], name:"Lexma G88", price: "$100", img: "/media/products/mouse_2.png",images: ["/media/products/computer_2.png","/media/products/headphone_3.png","/media/products/mouse_1.png"]},
    {id:"c_17",favorite:false, cart:false, sorting: ["Top",  "Recommended"], category: ["Mouse Gaming"], name:"Lexma G88", price: "$100", img: "/media/products/mouse_3.png",images: ["/media/products/computer_2.png","/media/products/headphone_3.png","/media/products/mouse_1.png"]},
    {id:"c_18",favorite:false, cart:false, sorting: ["Top",  "Recommended"], category: ["Mouse Gaming"], name:"Lexma G88", price: "$100", img: "/media/products/mouse_4.png",images: ["/media/products/computer_2.png","/media/products/headphone_3.png","/media/products/mouse_1.png"]},
]
function madeSortingBar(object){
    let btn = comket.button({
        text:(object.title),
        class:(object.class)
    })
    btn.addEventListener("click",(e)=>{sortingBtnCheck(e)})
    btn.addEventListener("click", (e)=>{appearanceCategory(e)})
    return btn
}
function sortingBtnCheck(e) {
    let buttons = [...document.querySelectorAll(".sortingBtns button")]
    for (let element of buttons) {
        if (element.classList.contains("active") == true) {
            element.classList.remove("active")
        }
    }
    if (!e.target.classList.contains("active")) {
        e.target.classList.add("active")
    }
    
}
function appearanceCategory(e) {
        if (((e.target).textContent == "All")) {
            document.querySelector(".cards").innerHTML = "" 
            for (let object of productsData) {
                document.querySelector(".cards").append(madeCard(object))
            }
        }
        else {
            document.querySelector(".cards").innerHTML = "" 
            for (let object of productsData) {
                object.sorting.forEach((i)=>{if(i == (e.target).textContent) {
                    document.querySelector(".cards").append(madeCard(object))
                }})
            }
        }
    }
function header(){
    let headerBar = comket.div({
        class:"productsHeader",
        children:[
            comket.h2({text:"Product"}),
            comket.div({
                class:"sortingBtns",
                children:[
                    comket.button({class:"filterBtn", children:[comket.img({src:"/media/filter.svg"}),"Filter"]})
                ]
            })
        ]
    })
    for (let obj in sortingBarData) {
        if (obj == (sortingBarData.length - 1)) {
           ( madeSortingBar(sortingBarData[obj]).classList.value) = "active"
        }
        headerBar.children[1].prepend(madeSortingBar(sortingBarData[obj]))
    }
    return headerBar
}
export function madeCard(object){
    let card = comket.div({
        id: object.id,
        class:"card",
        category: object.category,
        sorting: object.sorting,
        children:[
            comket.div({children:[comket.img({src:object.img}),]}),
            comket.h3({text: object.name}),
            comket.p({text: object.category}),
            comket.span({text: object.price}),
            comket.button({onclick:(e)=>AddProfilePage(e),children: [comket.Element("ion-icon",{name:"cart",}),comket.span({text:"Cart"})]}),
        ]
    })
    card.addEventListener("click", (e)=>{
        if ((e.target.nodeName != "BUTTON" ) && (e.target.parentElement.nodeName != "BUTTON")) {
            console.log(e.target.nodeName);
            document.body.prepend(CardData(object, e , productsData))
            document.body.classList.add("closeScroll")
        }
    })
    return card
}
function clickAddCart(e) {
    if (e.target.nodeName == "BUTTON") {
        e.target.parentElement.classList.toggle("added")
    }
    else if (e.target.nodeName == "ION-ICON") {
        e.target.parentElement.parentElement.classList.toggle("added")
    }
}
function cards() {
    let cardsContainer = comket.div({
        class:"cards",
        children:[]
    })
    for (let obj of productsData) {
        cardsContainer.append(madeCard(obj))
    }
    return cardsContainer
}


export default function Products(){
    return comket.div({
        class:"products",
        children:[header(), cards(), ]
    })
}