import comket from "../../comket/html";
import { dataCart } from "./cardData.js";
import { madeCard, productsData } from "./products.js";
 
function madeCardInCart(array) {
    let container = comket.div({
        class:"cards"
    })
    for (let obj of array) {
        if (dataCart.includes(obj.id)) {
            container.append(madeCard(obj))
        }
    }
    return container
}
export default function Profile(){
    return comket.div({
        class:"profile",
        children:[
            comket.h2({text:"My Products"}),
            madeCardInCart(productsData)]
    })
}