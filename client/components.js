// import components from componentns module
const componentsPath = './componentsModule.js';
import components from './componentsModule.js';

class HeaderComponent extends HTMLElement {

	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = components['header'];
	}
}

class FooterComponent extends HTMLElement {

	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = components['footer'];
	}
}

class MapComponent extends HTMLElement {

	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = components['map'];
	}
}

// define custom elements
customElements.define('app-header', HeaderComponent);
customElements.define('app-footer', FooterComponent);
customElements.define('app-map', MapComponent);

// delete require Cache
delete require.cache[componentsPath];