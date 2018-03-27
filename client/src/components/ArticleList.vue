<template>
    <div class="col-xs-7 col-sm-7 col-md-8">
        <div class="row" v-for="(article, i) in articles" :key="i">
            <div class="thumbnail">
                <div class="caption">
                    <h4 class="left"><strong>{{article.title}}</strong></h4>
                    <p class="body">{{article.body}}</p>
                    <router-link :to="{name:'ArticleDetail', params:{id:article._id}}"><button class="btn btn-info">View more</button></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ArticleList',
  data () {
    return {
      articles: []
    }
  },
  created: function () {
    axios.get('https://blog-server.rezapramudhika.com/articles/', {}).then((data) => {
      this.articles = data.data.data
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .left {
        text-align: left !important;
    }
    .caption {
        text-align: justify;
    }
    .body {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-height: 16px;     /* fallback */
        max-height: 48px;      /* fallback */
        -webkit-line-clamp: 3; /* number of lines to show */
        -webkit-box-orient: vertical;
    }
</style>
