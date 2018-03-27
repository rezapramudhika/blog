<template>
    <div class="container">
        <article-list></article-list>
        <div class="col-xs-5 col-sm-5 col-sm-4">
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
import ArticleList from './ArticleList'
import axios from 'axios'
import swal from 'sweetalert2'
export default {
  name: 'Home',
  components: {
    NavList,
    ArticleList
  },
  data () {
    return {
      articles: []
    }
  },
  methods: {
    fetchData: () => {
      axios.get(`https://blog-server.rezapramudhika.com/articles/${this.$route.params.id}`, {}).then((data) => {
        this.article = data.data.data
      })
    }
  },
  created: function () {
    swal({
      title: 'Loading...',
      onOpen: () => {
        swal.showLoading()
        axios.get('https://blog-server.rezapramudhika.com/articles/', {}).then((data) => {
          swal.hideLoading()
          swal.clickConfirm()
          this.articles = data.data.data
        }).catch((err) => {
          console.log(err)
          swal.hideLoading()
          swal.clickConfirm()
        })
      }
    })
  },
  watch: {
    id: function () {
      this.fetchData()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .panel-body {
        text-align: left;
        cursor: pointer;
    }
    ul {
    -webkit-padding-start: 0px;
    }
</style>
