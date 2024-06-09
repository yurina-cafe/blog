<script setup lang="ts">
export interface ArticlePosting {
  title: string; // 文章的标题，会转化成文件名的第一部分
  time: string; // 文章的时间，会转化成文件名的第二部分
  tag: string; // 文章的标签，会转化成文件名的第三部分
  content: string;
}

const article = ref<ArticlePosting>({
  title: "",
  time: "",
  tag: "",
  content: "",
});

const post = () => {
  const time = formatedDate(new Date());
  const data = {
    title: `${article.value.title}@${time}@${article.value.tag}`,
    content: article.value.content,
  };
  debugPostArticle(data);
};
</script>

<template>
  <div class="article-poster">
    <h1>文章发布</h1>
    <div class="article">
      <div class="text-input">
        <input type="text" v-model="article.title" placeholder="文章标题" />
      </div>
      <div class="text-input">
        <input type="text" v-model="article.tag" placeholder="文章标签" />
      </div>
      <div class="text-content">
        <textarea v-model="article.content" placeholder="文章内容"></textarea>
      </div>
      <div>
        <button @click="post">发布</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.article-poster {
  height: 500px;
  width: 500px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.article {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.text-input {
  width: 400px;
}

.text-input input {
  width: 100%;
}

.text-content {
  width: 400px;
}

.text-content textarea {
  width: 100%;
  min-height: 200px;
  resize: vertical;
}
</style>
