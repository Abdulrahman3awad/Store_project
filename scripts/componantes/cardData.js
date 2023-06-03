import comket from "../../comket/html";
import Article from "./article";
import Favorites from "./favorites.js";
import { productsData } from "./products.js";
import {madeCard} from "./products.js"

export let dataFavorite = []
export let  dataCart = []
function clickImages(e) {
    e.target.parentElement.parentElement.children[1].children[1].src = e.target.src
    for (let image of e.target.parentElement.children) {
        image.classList.remove("active")
    }
    e.target.classList.add("active")
}
function closeAcard(e) {
    (e.target.parentElement.parentElement).classList.add("close")
    setTimeout(()=>{
        (e.target.parentElement.parentElement).remove()
        document.body.classList.remove("closeScroll")
    },"1000")
}
export function AddProfilePage(e) {
    let prof = document.querySelector(".profile")
    if ((e.target.nodeName == "BUTTON")) {
            if (dataCart.includes(e.target.id.split("-")[1])) {
                dataCart.splice(dataCart.indexOf(e.target.id.split("-")[1]),1)
                e.target.children[1].textContent = "Cart"
                productsData.reduce((allObj,obj)=>{
                    if(obj.id == e.target.id.split("-")[1]){
                        obj.cart = false;
                    }
                },0)
                if ([...Article().children].includes(prof)) {
                    for (let card of [...prof.children[1].children]) {
                        if (card.id == e.target.id.split("-")[1]) {
                            card.remove();
                        }
                    }
                }
            }
            else {
                dataCart.push(e.target.id.split("-")[1])
                e.target.children[1].textContent = "Remove"
                productsData.reduce((allObj,obj)=>{
                    if(obj.id == e.target.id.split("-")[1]){
                        obj.cart = true;
                    }
                },0)
            }
        }
    else if((e.target.parentElement.nodeName == "BUTTON")){
        if (dataCart.includes(e.target.parentElement.id.split("-")[1])) {
            dataCart.splice(dataCart.indexOf(e.target.parentElement.id.split("-")[1]),1)
            e.target.parentElement.children[1].textContent = "Cart"
            productsData.reduce((allObj,obj)=>{
                if(obj.id == e.target.parentElement.id.split("-")[1]){
                    obj.cart = false;
                }
            },0)
            if ([...Article().children].includes(prof)) {
                for (let card of [...prof.children[1].children]) {
                    if (card.id == e.target.parentElement.id.split("-")[1]) {
                        card.remove();
                    }
                }
            }
        }
        else {
            dataCart.push(e.target.parentElement.id.split("-")[1])
            e.target.parentElement.children[1].textContent = "Remove"
            productsData.reduce((allObj,obj)=>{
                if(obj.id == e.target.parentElement.id.split("-")[1]){
                    obj.cart = true;
                }
            },0)
        }
    }
}
function addFavoritePage(e) {
    let fav = document.querySelector(".favorites")
    if ((e.target.nodeName == "BUTTON")) {
            if (dataFavorite.includes(e.target.id.split("-")[1])) {
                dataFavorite.splice(dataFavorite.indexOf(e.target.id.split("-")[1]),1)
                e.target.children[1].textContent = "Favorite"
                e.target.children[0].style.color = "#fff"
                productsData.reduce((allObj,obj)=>{
                    if(obj.id == e.target.id.split("-")[1]){
                        obj.favorite = false;
                    }
                },0)
                console.log(fav);
                console.log([...document.body.children[3].children]);
                if ([...document.body.children[3].children].includes(fav)) {
                    for (let card of [...fav.children[1].children]) {
                        if (card.id == e.target.id.split("-")[1]) {
                            card.remove();
                        }
                    }
                }
            }
            else {
                dataFavorite.push(e.target.id.split("-")[1])
                e.target.children[1].textContent = "Unfavorite"
                e.target.children[0].style.color = "#DA00FE"
                productsData.reduce((allObj,obj)=>{
                    if(obj.id == e.target.id.split("-")[1]){
                        obj.favorite = true;
                    }
                },0)
            }
        }
    else if((e.target.parentElement.nodeName == "BUTTON")){
        if (dataFavorite.includes(e.target.parentElement.id.split("-")[1])) {
            dataFavorite.splice(dataFavorite.indexOf(e.target.parentElement.id.split("-")[1]),1)
            e.target.parentElement.children[1].textContent = "Favorite"
            e.target.parentElement.children[0].style.color = "#fff"
            productsData.reduce((allObj,obj)=>{
                if(obj.id == e.target.parentElement.id.split("-")[1]){
                    obj.favorite = false;
                }
            },0)
            if ([...document.body.children[3].children].includes(fav)) {
                for (let card of [...fav.children[1].children]) {
                    if (card.id == e.target.parentElement.id.split("-")[1]) {
                        card.remove();  
                    }
                }
            }
        }
        else {
            dataFavorite.push(e.target.parentElement.id.split("-")[1])
            e.target.parentElement.children[1].textContent = "Unfavorite"
            e.target.parentElement.children[0].style.color = "#DA00FE"
            productsData.reduce((allObj,obj)=>{
                if(obj.id == e.target.parentElement.id.split("-")[1]){
                    obj.favorite = true;
                }
            },0)
        }
    }
}
// for (let obj of array) {
//     if ((e.target.id == `fav${obj.id}`) || (e.target.parentElement.id == `fav${obj.id}`)){
//         console.log(Favorites());
//         console.log(madeCard(obj));
//         Favorites().children.push(madeCard(obj))
//     }
// }
// window.addEventListener("keydown",(e)=>{console.log(e);})
export function CartBtn(object) {
    let btn = comket.button({
        id: `cart-${object.id}`,
         onclick: (e) => AddProfilePage(e), 
         children: [
            comket.Element("ion-icon", { name: "cart", }),
            comket.span({text:"Cart"})
        ]
         })
        if (object.cart == true) {
            btn.children[1].textContent = "Remove"
        }
   return btn
}
function favoriteBtn(object) {
   let btn = comket.button({
        id:`fav-${object.id}`,
        onclick: (e) => addFavoritePage(e, productsData),
        children: [
            comket.Element("ion-icon", { name: "star", }),
            comket.span({text:"Favorite"})
        ] 
        })
        if (object.favorite == true) {
            btn.children[1].textContent = "Unfavorite"
            btn.children[0].style.color = "#DA00FE"
        }
   return btn
}
export default function CardData(object, e, array) {
    let card = ".cards .card "
    let button = ".cards .card > button"
    if ((!e.target.matches(button) && !(e.target.parentElement).matches(button)) && ((e.target).matches(card) || (e.target.parentElement).matches(card) || (e.target.parentElement.parentElement).matches(card))) {
        for (let obj of array) {
            if ((obj.id == (e.target).id || (e.target.parentElement) || (e.target.parentElement).parentElement)) {

                let container = comket.div({
                    class: "cardData",
                    id: object.id,
                    onclick:(e)=>{if (e.target.classList == "cardData") {
                        e.target.classList.add("close")
                        document.body.classList.remove("closeScroll")
                        setTimeout(()=>{
                            e.target.remove()
                        },"1000")
                    }},
                    children: [
                        comket.div({
                            class: "container",
                            children: [
                                comket.Element("ion-icon", {name:"close", onclick:(e)=>{closeAcard(e)}},),
                                comket.div({
                                    class: "top",
                                    children: [
                                        comket.div({
                                            class: "left",
                                            children: [
                                                comket.h3({ text: object.name }),
                                                comket.p({ text: object.category }),
                                                comket.span({ text: object.price }),
                                                comket.div({
                                                    class: "btns",
                                                    children: [
                                                        CartBtn(object),
                                                        favoriteBtn(object)
                                                    ]
                                                })
                                            ]
                                        }),
                                        comket.img({ src: object.img })
                                    ]
                                }),
                                comket.div({
                                    class: "bottom",
                                })
                            ]
                        })
                    ]
                })
                for (let src of (object.images)) {
                    (container.children[0].children[2]).append(
                        comket.img({src: src, onclick:(e)=>{clickImages(e)}})
                    )
                }
                window.addEventListener("keydown",(keye)=>{if(keye.code == "Escape"){
                    (container).classList.add("close")
                    document.body.classList.remove("closeScroll")
                    setTimeout(()=>{
                        (container).remove()

                    },"1000")
                } ;})
                    
                    
                return container
            }
        }
    }

}
