<template>
  <h3>MiddleComponent.vue(중간 컴포넌트)</h3>
  <GrandChildComponent />
</template>

<script>
import GrandChildComponent from "./child/GrandChildComponent.vue";
export default {
  components: { GrandChildComponent },
};
</script>

<style scoped></style>
