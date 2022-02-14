<template>
  <div>
    <v-container>
      <Title>
        <template #title>Todo - Nuxt & Vuex</template>
      </Title>
      <Card />
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Title from "@/components/Title.vue";
import Card from "@/components/Card.vue";

export default Vue.extend({
  name: "Index",
  components: {
    Title,
    Card,
  },
});
</script>
