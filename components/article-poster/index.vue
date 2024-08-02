<script setup lang="ts">
import { PostArticle } from '~/composables/article';
import type { ArticleInfo, ArticleNameSplit } from '~/types/article';

interface ArticleInfoPost {
  title: ArticleNameSplit;
  content: string;
}
const article = ref<ArticleInfoPost>({
  title: {
    name: "",
    time: "",
    tag: "",
  },
  content: "",
});

const router = useRouter();
const post = async () => {
  const time = formatedDate(new Date());
  const data: ArticleInfo = {
    title: `${article.value.title.name}@${time}@${article.value.title.tag}`,
    content: article.value.content,
  };
  try {
    await PostArticle(data);
    router.push('/articles');
  } catch (e) {
    console.error(e)
  }
};
</script>

<template>
  <div class="article-poster">
    <h1>文章发布</h1>
    <div class="article-edit">
      <div class="text-input">
        <input v-model="article.title.name" type="text" placeholder="文章标题" >
      </div>
      <div class="text-input">
        <input v-model="article.title.tag" type="text" placeholder="文章标签" >
      </div>
      <div class="text-content">
        <textarea v-model="article.content" placeholder="文章内容"/>
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

.article-edit {
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
