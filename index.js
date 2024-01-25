const boxs = document.getElementsByClassName('box');
const lower_content = document.getElementsByClassName('lower-content');
const close_icon = document.getElementsByClassName('close');
const open_icon = document.getElementsByClassName('open');


for (let i = 0; i < boxs.length; i++) {
    boxs[i].addEventListener('click', () => {
        const val = lower_content[i].classList.toggle('active');
        if (val) {
            open_icon[i].style.display = 'none'
            close_icon[i].style.display = 'block'
        }
        else {
            close_icon[i].style.display = 'none'
            open_icon[i].style.display = 'block'
        }
    });
}
