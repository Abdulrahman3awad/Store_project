import comket from "../../comket/html.js";
import Header from './header.js';
import Products from "./products.js";
export let artContainer = 
    comket.div({
        class:"artContainer",
        children:[
            Header(), Products()
        ]
    })
export default function Article() {
    return comket.article({
        children:[ artContainer ]
    })
}



