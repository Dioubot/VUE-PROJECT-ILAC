const app = Vue.createApp({
  data() {
    return {
      currentCoffee: {
        title: "",
        desc: "",
        img: ""
      },
      showTitle: true
    };
  },

  methods: {
    async loadCoffee(url) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        this.currentCoffee = data.item;
        this.showTitle = true;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    nextCoffee() {
      this.loadCoffee("http://localhost:3000/item/next");
    },

    prevCoffee() {
      this.loadCoffee("http://localhost:3000/item/prev");
    },

    toggleText() {
      this.showTitle = !this.showTitle;
    }
  },

  mounted() {
    this.loadCoffee("http://localhost:3000/item");
  }
});

app.mount("#app");
