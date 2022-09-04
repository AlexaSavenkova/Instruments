import { items } from './items'
import { createItemElement } from "./createItemElement";

export const renderGallery = () => {
    const galleryElement = document.getElementById('gallery')

    items.forEach(item=> {
        galleryElement.appendChild(createItemElement(item))
    })
}
