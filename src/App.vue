<template>
  <Sidebar />
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import "@fortawesome/fontawesome-free/css/all.css";
import Sidebar from "@/components/sidebar/Sidebar.vue";
import { sidebarWidth } from "@/components/sidebar/state";

export default defineComponent({
  components: { Sidebar },
  setup() {
    return { sidebarWidth };
  },
  data() {
    return {};
  },
  methods: {},
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
</style>
