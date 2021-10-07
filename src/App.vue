<template>
  <div style="min-height: 100vh" @click="closeSidebar">
    <Sidebar @click.stop :style="{ 'background-color': colorOfSidebar }" />
    <router-view :style="checkToggeling" />
  </div>
</template>
// filter: opacity(75%)
<script lang="ts">
import { defineComponent } from "vue";
import "@fortawesome/fontawesome-free/css/all.css";
import Sidebar from "@/components/sidebar/Sidebar.vue";
import {
  closeSidebar,
  collapsed,
  sidebarWidth,
  toggleSidebar,
} from "@/components/sidebar/state";

export default defineComponent({
  computed: {
    checkToggeling() {
      if (collapsed.value == false)
        return { filter: "opacity(75%)", transition: "0.3s ease" };
      else return {};
    },
  },
  components: { Sidebar },
  setup() {
    return { collapsed, sidebarWidth, toggleSidebar, closeSidebar };
  },
  data() {
    return {
      colorOfSidebar: "#42b983" as any,
    };
  },
  methods: {
    changeColor(color: any) {
      console.log(color);
    },
    test() {
      collapsed;
      console.log("it works");
    },
  },
});
</script>

<style lang="scss">
#app {
  font-family: Courier New;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
/* BTN STYLE */
button {
  background-color: #42b983;
  border-radius: 5px;
  border: 3px solid #2b2b2b;
  display: inline-block;
  cursor: pointer;
  color: #2b2b2b;
  font-family: Courier New;
  font-size: 20px;
  font-weight: bold;
  padding: 2px 5px;
  text-decoration: none;
  margin: 5px;
}
button:active {
  background-color: #42b983;
  transform: scale(1.1);
}
#settingsBtn {
  background-color: grey;
  border-radius: 5px;
}
#cancel {
  background-color: grey;
}
.modalbtn {
  border-radius: 5px;
}
</style>
