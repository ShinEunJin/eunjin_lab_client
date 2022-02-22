export default class Component {
    constructor($target) {
        this.$target = $target
        this.render()
    }

    template() { return `` }

    render() {
        this.$target.innerHTML = this.template()
        this.setEvent()
    }

    setEvent() { }
}