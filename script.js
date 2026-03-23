const heroExplanationEl = document.getElementById('hero-explanation');
const exampleGifsEl = document.getElementById('example-gifs')
const exampleSectionEl = document.getElementById('examples')

window.addEventListener('load', e => {
    const children = heroExplanationEl.children;
    for (let i = 0; i < children.length; i++) {
        const child = children[i];
        const words = child.textContent.split(' ');
        child.textContent = '';
        words.forEach(word => {
            const wordSpan = document.createElement('span');
            const spaceSpan = document.createElement('span');
            spaceSpan.textContent = ' ';
            child.appendChild(spaceSpan);
            wordSpan.textContent = word;
            wordSpan.classList.add('hoverable-word')
            child.appendChild(wordSpan);
        })
    }

    const exampleGifs = exampleGifsEl.children;
    const centerX = exampleSectionEl.offsetWidth / 2;
    const centerY = exampleSectionEl.offsetHeight / 2;
    const safeWidth = 450;
    const safeHeight = 200;
    for (let i = 0; i < exampleGifs.length; i++) {
        const exampleGif = exampleGifs[i];
        const gifWidth = exampleGif.offsetWidth;
        const gifHeight = exampleGif.offsetHeight;
        let randomX, randomY;
        do {
            randomX = Math.random() * (exampleSectionEl.offsetWidth - gifWidth);
            randomY = Math.random() * (exampleSectionEl.offsetHeight - gifHeight);
        } while (
            randomX + gifWidth > centerX - safeWidth / 2 &&
            randomX < centerX + safeWidth / 2 &&
            randomY + gifHeight > centerY - safeHeight / 2 &&
            randomY < centerY + safeHeight / 2
        )
        exampleGif.style.top = `${randomY}px`;
        exampleGif.style.left = `${randomX}px`;
    }
})