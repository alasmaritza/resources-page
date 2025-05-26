<script setup>
import { ref } from 'vue'
import Header from './components/Header.vue'
import TableLayout from './components/TableLayout.vue'
</script>

<template>
  <Header :title="'Your Resources'" :sub-title="'You may add more or edit your existing resources.'" />
  <TableLayout></TableLayout>
</template>
