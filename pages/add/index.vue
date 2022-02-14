<template>
  <div>
    <v-container
      ><v-form ref="form" @submit.prevent="salvar()">
        <v-text-field
          :value="localTodo.title"
          @input="setTitleToLocalTodo"
          label="Titulo"
          required
        ></v-text-field>

        <v-text-field
          :value="localTodo.description"
          @input="setDescriptionToLocalTodo"
          label="Descrição"
          required
        ></v-text-field>

        <v-btn color="success" class="mr-4" type="submit"> Salvar </v-btn>

        <v-btn color="error" class="mr-4" @click="reset" type="reset">
          Reset
        </v-btn>
      </v-form></v-container
    >
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { IToDo } from "~/Interfaces/IToDo";

export default Vue.extend({
  name: "add",
  computed: {
    localTodo(): IToDo {
      return this.$store.state.localTodo;
    },
  },
  methods: {
    setTitleToLocalTodo(title: string) {
      this.$store.commit("setLocalTodoTitle", title);
    },
    setDescriptionToLocalTodo(description: string) {
      this.$store.commit("setLocalTodoDescription", description);
    },
    setIdToLocalTodo(id: string) {
      this.$store.commit("setLocalTodoId", id);
    },
    reset() {
      this.$store.commit("clearLocalTodo");
      this.$router.back();
    },
    salvar() {
      this.$store.commit("addTodo", {
        id: this.localTodo.id,
        title: this.localTodo.title,
        description: this.localTodo.description,
        isCompleted: false,
      } as IToDo);
      this.$store.commit("clearLocalTodo");
      this.$router.push("/");
    },
  },
  mounted() {
    this.setIdToLocalTodo(Date.now().toString());
  },
});
</script>

