import Input from './components/Input.js'

class App {
    constructor() {
        const $app = document.querySelector('#app')
        new Input($app)
    }
}

new App()