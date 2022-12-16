// const color_btn = document.querySelectorAll('.color')

// color_btn.forEach(color => {
//     color.addEventListener('click', () => {
//         let colorClassName = color.className;
//         if (!color.classList.contains("active-color")) {
//             let colorName = colorClassName.slice(colorClassName.indexOf("-") + 1, colorClassName.length);
//             resetColorBtn()
//             color.classList.add('active-color')
//             addItem(colorName)
//             console.log(colorName)
//         }
//     })
// });

// function resetColorBtn() {
//     color_btn.forEach(color => {
//         color.classList.remove("active-color")
//     })
// };

// function addItem(color) {
//     document.querySelector('.display-img img').src = `img/black_watch.png`;
// }

const display_image = document.querySelector('.display-img img');

const black_btn = document.querySelector(".black")
const orange_btn = document.querySelector(".orange")
const purple_btn = document.querySelector(".purple")
const pink_btn = document.querySelector(".pink")

black_btn.addEventListener("click", () => {
    display_image.src = `img/black_watch.png`;
});

orange_btn.addEventListener("click", () => {
    display_image.src = `img/red_watch.png`;
});

purple_btn.addEventListener("click", () => {
    display_image.src = 'img/purple_watch.png';
});

pink_btn.addEventListener("click", () => {
    display_image.src = 'img/pink_watch.png';
});


