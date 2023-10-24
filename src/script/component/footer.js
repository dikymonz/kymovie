
class Footer extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap');
        :host {
            font-family: "Space Grotesk";
            background-color: #eee;
            padding: 16px 7%;
            display: flex;
            justify-content: space-between;
            align-items:center;
        }
        
        h3 {
            font-family: "Space Grotesk";
            margin: 5px 0 0;
            font-size: 12px;
        }
        
        img {
            margin-right: 10px;
            width: 20px;
            fill: #00AFEF;
        }
        
        </style>
	
        <div class="credit">
            <h3>Dikymonz &copy;2023 All Right Reserved.</h3>
        </div>
        

        `;
    }
}

customElements.define('foot-bar', Footer);