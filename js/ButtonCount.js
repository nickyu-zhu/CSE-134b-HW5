class ButtonCount extends HTMLElement{

    constructor(){
        super();

        let btn = document.createElement('button');
        btn.textContent = 'Time Clicked: ';

        let count = document.createElement('output');
        count.textContent = 0;
        btn.append(count);

        btn.addEventListener('click', () => {
            let curr = Number(count.textContent);
            count.textContent = curr + 1;
        });

        this.attachShadow({mode: 'open'});
        this.shadowRoot.append(btn);
    }
}

customElements.define('button-count', ButtonCount);