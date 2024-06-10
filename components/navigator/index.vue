<script setup lang="ts">

</script>
<template>
  <div class="navigator">
    <div class="navigator-content">
      <div class="content-home">
        <NuxtLink to="/">
          <span class="title">
            Home
          </span>
        </NuxtLink>
      </div>
      <div class="content-list">
        <NuxtLink to="/articles">Articles</NuxtLink>
        <NuxtLink to="/post">Post</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style coped>
.navigator {
  height: 50px;
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  padding: 0;
}

.navigator-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 20px;
  font-weight: bold;
}

.content-home {
  display: flex;
  flex: 1;
}

.content-list {
  display: flex;
  gap: 20px;
}
</style>
