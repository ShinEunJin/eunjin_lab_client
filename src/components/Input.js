import Component from '../core/Component.js'

export default class Input extends Component {

    setup() {
        this.$state = ""
    }

    template() {
        return `
            <input class="inputText" type="text" value=${this.$state || ""} />
            <button class="submitBtn">확인</button >
        `
    }

    setEvent() {
        this.$target.querySelector(".submitBtn").addEventListener('click', (e) => {
            e.preventDefault()
            fetch('http://localhost:5000/api/v1/content', { method: 'POST', body: { text: this.$state }, headers: { 'Content-Type': 'application/json' }, mode: 'no-cors' })
        })

        this.$target.querySelector(".inputText").addEventListener('keyup', e => {
            this.setState(e.target.value)
        })
    }
}