<template>
    <li><router-link :to="{name:'ArticleDetail', params:{id:article._id}}">{{article.title}}</router-link></li>
</template>
<script>
export default {
  name: 'NavList',
  props: ['article'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .caption {
        text-align: left;
    }
    li {
      list-style-type: none;
    }
</style>
