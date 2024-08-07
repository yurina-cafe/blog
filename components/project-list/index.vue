<script setup lang="ts">

</script>
<template>
  <div class="w-full flex flex-col items-center gpa-6">
    <ProjectItem title="Project 1" img="https://picsum.photos/200/300">
      <template #content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </p>
      </template>
      <template #footer>
        <button class="btn btn-primary">View</button>
      </template>
    </ProjectItem>
  </div>
</template>

<style scoped lang="scss"></style>
