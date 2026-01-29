<!-- adding sample data here instead of getting it from the database -->
<script setup>
import Task from './components/Task.vue';

const getTasks = () => {
  return [
    { _id: 1, text: 'Install Node.js'},
    { _id: 2, text: 'Install Meteor 3'},
    { _id: 3, text: 'Create and run your project'},
  ];
}
</script>

<template>
  <div class="container">
    <header>
      <h1 class="text-4xl font-bold text-gray-800 my-4"">Todo List</h1>
    </header>
    <ul class="list-disc list-inside p-4">
      <Task v-for="task in getTasks()" :key="task._id" :task="task" />
    </ul>
  </div>
  <div class="p-8">
    <h1>Hello Meteor</h1>
  </div>
</template>