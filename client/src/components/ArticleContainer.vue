<template>
    <div class="container">
        <router-view></router-view>
        <div class="col-xs-12 col-sm-5 col-md-4">
            <div class="panel panel-info">
                <div class="panel-heading">
                    <h4 class="panel-title">Recent Posts</h4>
                </div>
                <div class="panel-body">
                    <ul v-for="(article, i) in articles" :key="i">
                        <nav-list :article="article"></nav-list>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import NavList from './NavList'
import axios from 'axios'
export default {
  name: 'ArticleContainer',
  components: {
    NavList
  },
  data () {
    return {
      articles: []
    }
  },
  methods: {
    fetchData: () => {
      axios.get(`http://localhost:3000/articles/${this.$route.params.id}`, {}).then((data) => {
        this.article = data.data.data
      })
    }
  },
  created: function () {
    axios.get('http://localhost:3000/articles/', {}).then((data) => {
      console.log(data)
      this.articles = data.data.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .panel-body {
        text-align: left;
        cursor: pointer;
    }
</style>
