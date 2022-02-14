<template>
  <div>
    <v-card v-for="(todo, index) in todos" :key="index">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title> {{ todo.title }} </v-list-item-title>
          <v-list-item-subtitle> {{ todo.description }}</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar>
          <input
            :checked="todo.isCompleted"
            @click="updateIsComplete(todo, !todo.isCompleted)"
            type="checkbox"
          />
        </v-list-item-avatar>
      </v-list-item>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary">Editar</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { IToDo } from "~/Interfaces/IToDo";

export default Vue.extend({
  name: "Card",
  computed: {
    todos(): IToDo[] {
      return this.$store.getters.todosList as IToDo[];
    },
  },
  methods: {
    updateIsComplete(todo: IToDo, isCompleted: boolean) {
      this.$store.state.updateTodo({ ...todo, isCompleted });
    },
  },
});
</script>

<style scoped>
input[type="checkbox"] {
  transform: scale(2);
}
</style>