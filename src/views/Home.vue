<template>
  <div class="home">
    <cad />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import cad from "@/components/home/createAndDelete.vue";
import btnCreate from "@/components/home/btnCreate.vue";
import btnDelete from "@/components/home/btnDelete.vue"; // @ is an alias to /src

@Options({
  components: {
    cad,
  },
})
export default class Home extends Vue {}
</script>
<style scoped>
.home {
  margin-left: 58px;
}
</style>
