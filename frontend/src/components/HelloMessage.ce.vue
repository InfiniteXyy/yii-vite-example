<script setup lang="ts">
defineProps<{ msg: string }>();
</script>

<template>
  <ElContainer style="gap: 8px; margin-bottom: 4px">
    <ElText>Hello {{ msg }} from vue</ElText>
    <ElTag>Tag</ElTag>
  </ElContainer>
</template>

<style scoped></style>
