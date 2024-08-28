document.addEventListener('DOMContentLoaded', function () {
    const numSorteado = document.querySelectorAll('.numSorteado');
    const imgDado = document.querySelectorAll('.imgDado');
    const btnSortear = document.querySelector('.btnSortear');
    const audio = document.querySelector('.audio');

    function sortear(max, min) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    btnSortear.addEventListener('click', function () {
        // Só prosseguir se numSorteado e imgDado tiverem o mesmo comprimento
        if (numSorteado.length === imgDado.length) {
            imgDado.forEach((imgDados, index) => {
                const sorteio = sortear(1, 7);
                imgDados.classList.add('animar');
                numSorteado[index].classList.add('some');
                btnSortear.classList.add('someBtn');
                numSorteado[index].classList.remove('aparece');
                audio.play(); // Reproduzir o áudio

                setTimeout(() => {
                    imgDados.classList.remove('animar');
                    numSorteado[index].classList.remove('some');
                    numSorteado[index].classList.add('aparece');
                    btnSortear.classList.remove('someBtn');
                    imgDados.src = `./img/${sorteio}.png`;
                    numSorteado[index].innerHTML = sorteio;
                }, 2000);
            });
        } else {
            console.error('Os elementos sorteados não conferem');
        }
    });
});