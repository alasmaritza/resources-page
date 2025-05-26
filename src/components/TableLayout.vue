<script setup>
import { ref, watch } from 'vue'
import Articles from './Articles.vue'
import categoriesUrl from '../data/categories.json?url'
import articlesUrl from '../data/articles.json?url'
import { useGet } from '../js/main.js'

/**
 * activeCategory
 * @type {String}
 */
const activeCategory = ref('All');
/**
 * categories
 * @type {Array}
 */
const categories = useGet(categoriesUrl).data;
/**
 * articles
 * @type {Array}
 */
const articles = useGet(articlesUrl).data;
/**
 * filteredArticles
 * @type {Array}
 */
let filteredArts = articles;

/**
 * Watch for a change in activeCategory to filter articles array
 * @returns {Array} filteredArts
 */
watch(activeCategory, (newVal, oldVal) => {
  if (newVal != 'All') {
    filteredArts = articles.value.filter(a => a.category == newVal);
    return filteredArts;
  }
  if (newVal == 'All') {
    return filteredArts = articles;
  }
})

/**
 * toggleActiveCategory - toggles the selected category button active property
 * @param {String} cat
 * @returns {void}
 */
function toggleActiveCategory(cat) {
  this.categories.forEach(a => {
    if (a.name == cat) {
      a.active = true;
    } else {
      a.active = false;
    }
  });
  this.activeCategory = cat;
}
</script>
<template>
  <div class="categories">
    <span :class="['category', {active: category.active}]" 
          v-for="category in categories" 
          v-on:click="toggleActiveCategory(category.name)"
          :title="category.name"
          :key="category.name">
      <font-awesome-icon v-show="category.active" :icon="['fas', 'check']" />
      {{ category.name }}
    </span>
  </div>
  <Articles :articles="filteredArts" :active-category="activeCategory" />
</template>