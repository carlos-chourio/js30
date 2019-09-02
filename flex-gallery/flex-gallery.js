const panelCollection = [...document.getElementsByClassName('panel')];
console.log(panelCollection);

panelCollection.forEach(panel => {
    panel.addEventListener('click', e => {
        panel.classList.toggle('open-panel');
        const paragraphs = panel.querySelectorAll('p');
        paragraphs.forEach(t => {
            t.classList.toggle('bigger-text');
        });
    })
    panel.addEventListener('transitionend', t => {
        console.log(t.propertyName);
        const paragraphs = panel.querySelectorAll('p');
        if (t.propertyName.includes('flex')) {
            paragraphs.forEach(t => {
                t.classList.toggle('open-active');
            });
        }
    })
});
