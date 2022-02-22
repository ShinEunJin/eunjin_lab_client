import Component from '../core/Component.js'

export default class Input extends Component {

    template() {
        return `
            <form class="submit">
                <input type="text" />
            </form>
        `
    }

    setEvent() {
        this.$target.querySelector(".submit").addEventListener('submit', (e) => {
            e.preventDefault()
            console.log(e)
        })
    }
}