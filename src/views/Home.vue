<template>
  <div class="home row">
    <btnCreate class="col" style="margin-top: 30px" />
    <btnDelete class="col" style="margin-top: 30px" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import btnCreate from "@/components/home/btnCreate.vue";
import btnDelete from "@/components/home/btnDelete.vue"; // @ is an alias to /src

@Options({
  components: {
    btnCreate,
    btnDelete,
  },
})
export default class Home extends Vue {}
</script>
