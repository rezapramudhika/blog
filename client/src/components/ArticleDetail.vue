<template>
    <div class="col-xs-12 col-sm-7 col-md-8">
        <div class="row">
            <div class="thumbnail">
                <div class="caption">
                    <h4><strong>{{article.title}}</strong></h4>
                    <p class="body">{{article.body}}</p>
                    <div class="right">
                      <button class="btn btn-warning" data-toggle="modal" data-target="#edit-article-modal"> Edit </button>
                      <button class="btn btn-danger" @click="deleteData"> Delete </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert2'
export default {
  name: 'ArticleDetail',
  data () {
    return {
      article: {},
      id: this.$route.params.id
    }
  },
  methods: {
    fetchData: function () {
      axios.get(`http://localhost:3000/articles/${this.id}`, {}).then((data) => {
        this.article = data.data.data
      })
    },
    deleteData: function () {
      axios.delete(`http://localhost:3000/articles/${this.id}`, {}).then((data) => {
        swal({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.value) {
            swal(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            ).then(() => {
              this.$router.replace('/')
              this.$router.go()
            })
          }
        })
      })
    }
  },
  created: function () {
    swal({
      title: 'Loading...',
      onOpen: () => {
        swal.showLoading()
        axios.get(`http://localhost:3000/articles/${this.$route.params.id}`, {}).then((data) => {
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
    axios.get(`http://localhost:3000/articles/${this.$route.params.id}`, {}).then((data) => {
      this.article = data.data.data
    })
  },
  watch: {
    '$route' (to, from) {
      axios.get(`http://localhost:3000/articles/${to.params.id}`, {}).then((data) => {
        this.article = data.data.data
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .caption {
        text-align: justify;
    }
    .right {
        text-align: right;
    }
</style>
