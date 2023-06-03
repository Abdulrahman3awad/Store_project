import comket from "../../comket/html";
import { dataFavorite } from "./cardData.js";
import { madeCard, productsData } from "./products.js";
 
function madeCardInFav(array) {
    let container = comket.div({
        class:"cards"
    })
    for (let obj of array) {
        if (dataFavorite.includes(obj.id)) {
            container.append(madeCard(obj))
        }
    }
    return container
}
export default function Favorites(){
    return comket.div({
        class:"favorites",
        children:[
            comket.h2({text:"Favorite Products"}),
            madeCardInFav(productsData)]
    })
}