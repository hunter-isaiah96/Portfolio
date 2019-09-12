<template>
  <div>
    <ul class="projects no-padding">
      <li v-for="(item, index) in projects" :key="index">
          <h1 class="project-info no-margin">
            <router-link class="fade" :to="{ name: 'viewer', params: { id: item.id }}">{{item.data.sections[0].header[0].text}}</router-link>
            <p>{{item.data.project_type}} - {{item.data.year}}</p>
          </h1>
          <router-link class="image" :to="{ name: 'viewer', params: { id: item.id }}"><img class="fade" :src="item.data.sections[0].image.url" /></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      projects: []
    }
  },
  mounted () {
    this.$prismic.getApi(this.$apiEntryPoint)
      .then(api => api.query(this.$prismic.Predicates.at('document.type', 'project'), { orderings: '[document.first_publication_date desc]' }))
      .then(response => (this.projects = response.results))
  },
  watch: {
    projects () {
      console.log(this.projects)
    }
  }
}
</script>
