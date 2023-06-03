import comket from "../../comket/html.js"
import Swiper, {Autoplay, Pagination, Navigation, } from "swiper"


let dataSwiper = [
    { title: "MacBook Pro", category: "Computer", text: 'VR box 360 original complete geme.VR gaming complete set of 2 remotes.', img: "../../media/products/computer_1.png" },
    { title: "Oculus VR", category: "Virtual Reality", text: 'VR box 360 original complete geme.VR gaming complete set of 2 remotes.', img: "../../media/unsplash_Zf0mPf4lG-U.svg" },
    { title: "SoDo SD", category: "Headphones", text: 'VR box 360 original complete geme.VR gaming complete set of 2 remotes.', img: "../../media/products/headphone_4.png" },
]

function madeSlide(object) {
    return comket.div({
        class: "swiper-slide",
        children: [
            comket.div({
                children: [
                    comket.h2({text: object.title }),
                    comket.h4({ text: object.category }),
                    comket.p({ text: object.text }),
                    comket.button({ children: [comket.img({ src: "../../media/buy.svg" }), comket.span({ text: "Order Now" })] })
                ]
            }),
            comket.img({ src: object.img })
        ]
    })
}

function splideSec() {
    let swipCont = comket.div({
        class: "swiper-wrapper",
    })

    for (let obj of dataSwiper) {
        swipCont.append(madeSlide(obj))

    }
    return swipCont
}
function pagination() {
    let paginationBar = comket.div({class:"swiper-pagination"})
    return paginationBar
}

export default function Header() {

    let parent = comket.div({
        class: "swiper",
        children: [splideSec(),pagination()]
    })
    
    new Swiper(parent, {
        modules:[Autoplay, Pagination, Navigation,],
        effect: "slide",
        direction: 'horizontal',
        spaceBetween: 30,
        autoplay:{
            delay:2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        loop: true,
        pagination: {
            el: parent.children[1],
            clickable: true,
        },
    });
    return parent
}
