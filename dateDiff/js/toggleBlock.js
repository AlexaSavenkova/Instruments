// меняет видимисть двух блоков и текст на кнопке-переключателе
function toggleBlock(block1, block2, btn, btnText1, btnText2) {
    if(block1.classList.contains('hidden')) {
        block1.classList.remove('hidden')
        block2.classList.add('hidden')
        btn.innerText = btnText1
    } else {
        block2.classList.remove('hidden')
        block1.classList.add('hidden')
        btn.innerText = btnText2
    }

}

export default toggleBlock