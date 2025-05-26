<script setup>
const props = defineProps({
  title: String,
  subTitle: String,
})
</script>
<template>
  <header>
    <h1>{{ title }}</h1>
    <div class="options">
      <font-awesome-icon class="icon" :icon="['fas', 'pen']" />
      <font-awesome-icon class="icon" :icon="['fas', 'plus']" />
      <font-awesome-icon class="icon" :icon="['fas', 'list-ul']" />
      <font-awesome-icon class="icon" :icon="['fas', 'arrow-up-wide-short']" />
    </div>
  </header>
  <p>{{ subTitle }}</p>
</template>