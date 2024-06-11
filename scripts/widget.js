const tasteButtons = document.querySelectorAll('.taste-button');
const iceCreamImages = document.querySelectorAll('.ice-cream-img');
const names = document.querySelectorAll('.name');

tasteButtons.forEach((tasteButton, buttonIndex) => {
    tasteButton.addEventListener('click', () => {
        //удаляем увеличение всем шарикам мороженого
        iceCreamImages.forEach((iceCream) => {
            iceCream.classList.remove('ice-current');
        })

        //удаляем подписи
        names.forEach((name) => {
            name.classList.remove('name-current');
        });

        //увеличаем шарик мороженого на кнопке которого щёлкнули
        iceCreamImages.forEach((iceCream, iceCreamIndex) => {
            if(iceCreamIndex === buttonIndex){
                iceCream.classList.add('ice-current');
            }
            
        })
        
        //показываем подпись
        names.forEach((name, nameIndex) => {
            if(nameIndex === buttonIndex){
                name.classList.add('name-current');
            }
        })
    })
});