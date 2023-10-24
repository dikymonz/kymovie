import logo from '../../img/logo.png';
class About extends HTMLElement {
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
            display: flex;
            flex-wrap: wrap;
            padding: 20px;
            text-align: center;
            box-sizing: border-box;
            border: 1px solid rgba(255, 255, 255, .25);
            box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
            border-radius: 20px;
            padding: 20px;
            height: fit-content;
            margin-bottom: 32px;
            width: 100%;
        }
        
        h3 {
            font-family: "Space Grotesk";
            text-align: center;
            font-size: 32px;
            width: 100%;
            margin: 0;
        }
        
        .img {
            padding: 16px;
            width: 100px;
        }
        
        .img img {
            width: 100%;
            object-fit: cover;
        }
        
        .legend {
            width: 80%;
        }
        
        .legend h1 {
            font-family: "Space Grotesk";
            text-align: left;
            margin: 20px 0 10px;
            color: #192a56;
        }
        
        .legend h3 {
            font-family: "Space Grotesk";
            text-align: left;
            font-size: 13px
        }

        @media only screen and (max-width: 1200px) {     
            :host {
                width: 100%;
            }
        
            .legend {
                width: 70%;
            }
        }

        @media only screen and (max-width: 600px) {
            .img {
                margin: auto;
                padding-bottom: 5px;
            }
        
            .legend {
                width: 100%;
            }
        
            .legend h1 {
                font-family: "Space Grotesk";
                text-align: center;
                margin: 5px 0;
            }
        
            .legend h3 {
                font-family: "Space Grotesk";
                text-align: center;
            }
        }
        
        </style>
		
        <h3>About</h3>
        <div class="img">
            <img src="${logo}" alt="classicfoodLogo" />
        </div>
        <div class="legend">
            <h1>Movie</h1>
            <h3>"Website guna melengkapi submission Belajar Fundamental Front-End Web Development"</h3>
        </div>

        `;
    }
}

customElements.define('about-card', About);