export default class Component {
    constructor($target) {
        this.$target = $target
        this.render()
        this.setup()
    }

    setup() { }
    template() { return `` }

    render() {
        this.$target.innerHTML = this.template()
        this.setEvent()
    }

    setEvent() { }

    setState(newState = "") {
        this.$state = newState
    }
}