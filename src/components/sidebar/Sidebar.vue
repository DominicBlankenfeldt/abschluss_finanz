<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed" @click="toggleSidebar">
        <div><b>F</b></div>
        <div><b>P</b></div>
      </span>
      <span v-else @click="toggleSidebar"
        ><b>F</b><i>inanz</i> <b>P</b><i>laner</i></span
      >
    </h1>
    <SidebarLink to="/Home" icon="fas fa-home">Home</SidebarLink>
    <SidebarLink to="/Overview" icon="fas fa-stream">Übersicht</SidebarLink>
    <SidebarLink to="/Open" icon="far fa-clipboard">Offen</SidebarLink>
    <SidebarLink to="/Closed" icon="fas fa-clipboard"
      >Abgeschlossen</SidebarLink
    >
    <SidebarLink to="/Settings" icon="far fa-edit">Einstellungen</SidebarLink>
    <SidebarLink to="/MoneyChecker" icon="far fa-money-bill-alt"
      >MoneyChecker</SidebarLink
    >
    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left"></i>
    </span>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { collapsed, toggleSidebar, sidebarWidth } from "./state";
import "@fortawesome/fontawesome-free/js/all.js";
import SidebarLink from "./SidebarLink.vue";

export default defineComponent({
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
});
</script>

<style>
:root {
  --sidebar-bg-color: #42b983;
  --sidebar-item-hover: #3ba174;
  --sidebar-item-active: #338a64;
  --sidebar-item-focus: #338a64;
}
</style>
<style scoped>
.sidebar {
  box-sizing: border-box;
  height: 100vh;
  font-family: Courier New;
  color: #2b2b2b;
  background-color: var(--sidebar-bg-color);
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
  border: 5px solid #2b2b2b;
  border-left: 0;
  border-top: 0;
  border-bottom: 0;
}
.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: #2b2b2b;
  transition: 0.2s linear;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2 linear;
}
h1 {
  border: solid;
}
SidebarLink {
  display: flex-start;
}
</style>
