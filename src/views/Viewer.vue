<template>
  <div class="viewer" v-if="post">
    <div class="viewer-section" v-for="(item, index) in post.sections" :key="index">
      <h2 v-if="item.header[0].text" class="project-info full no-margin">
        {{item.header[0].text}}
        <p v-for="(body, index) in item.body" :key="index" class="description no-margin">
          {{body.text}}
        </p>
      </h2>
      <div class="image" v-viewer v-if="item.image.url">
        <img :src="item.image.url" />
      </div>
    </div>
    <a class="source" v-if="post.source_code.url" :href="post.source_code.url">Source Code</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      post: null
    }
  },
  created () {
    this.$prismic.getApi(this.$apiEntryPoint)
      .then(api => api.getByID(this.$route.params.id))
      .then(response => (this.post = response.data))
  },
  watch: {
    post () {
      console.log(this.post)
    }
  }
}
</script>
