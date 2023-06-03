import comket from "../../comket/html.js";
import Profile from "./profile.js";


function searchBar() {
    return comket.div({
        class:"searchBar",
        children:[
            comket.label({
                for:"searchInp",
                children:[comket.img({src:"../../media/search.svg"}),]
            }),
            comket.input({id:"searchInp",type:"text"})
        ]
    })
}
function icons() {
    return comket.div({
        class:"icon",
        children:[
            comket.Element("ion-icon",{name:'notifications'}),
            comket.Element("ion-icon",{name:'basket', onclick:()=>{OpenProfile()}}),
            comket.img({src:"../../media/me.jpg"})
        ]
    })
}
function OpenProfile() {
    document.querySelector("article").innerHTML = ""
    document.querySelector("article").append(Profile())
}



export default function NavBar(){
    return comket.nav({
        children:[searchBar(),icons()]
    })
}