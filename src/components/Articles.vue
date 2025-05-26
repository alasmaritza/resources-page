<script setup lang="ts">
import { ref, toRef, computed } from 'vue'
const props = defineProps({
  articles: Array<any>,
  activeCategory: String,
});
/**
 * showArticles
 * @type {Integer}
 */
let showArticles = ref(6);
/**
 * more
 * @type {Boolean}
 */
let more = ref(true);

/**
 * showMore - Checks whether to increment showArticles or display the Show Less button
 * @returns {void}
 */
function showMore() {
  let length = this.props.articles.length -1;
  if(this.showArticles >= length) {
    this.showArticles = 6;
  } else {
    this.showArticles = this.showArticles + 6;
  }
  this.more = this.showArticles < length;
}

/**
 * bookmarkArticle - mark an article as bookmarked
 * @param {int} id
 * @returns {void}
 */
function bookmarkArticle(id) {
    this.props.articles.forEach(a => {
      if (a.id == id) {
        a.bookmarked = !a.bookmarked;
      }
    });
}
</script>
<template>
  <div class="articles-wrapper">
    <div class="article" 
         v-for="(art, idx) in articles" 
         v-show="idx < showArticles" 
         :key="art.id" :style="{'background-image':'url('+art.bgSrc+')', 'background-size': 'cover'}">
      <div class="btns">
        <font-awesome-icon v-on:click="bookmarkArticle(art.id)" :class="['btn', 'bookmark', {saved: art.bookmarked}]" :icon="['fas', 'bookmark']" title="Bookmark" />
        <font-awesome-icon class="btn menu" :icon="['fas', 'ellipsis-vertical']" title="Menu" />
      </div>
      <div class="info">
        <div class="category">
          <font-awesome-icon :icon="['fas', 'lightbulb']" />
          <span>{{ art.category }}</span>
          <span>&#8226;</span>
          <span>Resources</span></div>
        <h3>{{ art.title }}</h3>
      </div>
    </div>
  </div>
  <div class="show-more" v-on:click="showMore()">
    <div class="handle" v-show="more"><font-awesome-icon :icon="['fas', 'circle-chevron-down']" />Show More</div>
    <div class="handle" v-show="!more"><font-awesome-icon :icon="['fas', 'circle-chevron-up']" />Show Less</div>
  </div>
</template>