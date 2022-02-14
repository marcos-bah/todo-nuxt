<template>
  <h1 class="h1">
    <slot name="title"></slot>
  </h1>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Title",
});
</script>