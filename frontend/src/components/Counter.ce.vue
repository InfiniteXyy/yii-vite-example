<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <ElButton @click="count++">counw is {{ count }}</ElButton>
</template>

<style scoped></style>
