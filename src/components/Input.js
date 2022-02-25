import Component from "../core/Component.js";

export default class Input extends Component {
  constructor(template) {
    this.template = template;
  }

  setup() {
    this.$state = "";
  }

  template() {
    return this.template;
  }

  setEvent() {
    this.$target.querySelector(".submitBtn").addEventListener("click", (e) => {
      e.preventDefault();
      console.log("state", this.$state);
      fetch("http://localhost:8080/api/v1/content", {
        method: "POST",
        body: JSON.stringify({ text: this.$state }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => console.log({ res }))
        .catch((err) => console.log({ err }));
    });

    this.$target.querySelector(".inputText").addEventListener("keyup", (e) => {
      this.setState(e.target.value);
    });
  }
}
