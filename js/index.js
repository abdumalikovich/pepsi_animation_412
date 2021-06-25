window.onload = () => {
    let one = document.querySelector('.screen-one')
    let header = document.querySelector('header')
    let animation_one = document.querySelectorAll('.animation-one')
    let bg = document.querySelector('.bg')
    let counter = 0

    let a1 = setInterval(() => {
        animation_one[counter].classList.add('active')

        counter++

        if(counter >= animation_one.length) {
            clearInterval(a1)

            setTimeout(() => {
                header.classList.add('active')
                
                setTimeout(() => {
                    bg.classList.add('active')
                }, 500)
            }, 500)
        }
    }, 250)

}

