<template>
    <div class="modal fade" id="create-article-modal" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button id="closemodal" type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4>Create Article</h4>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="title">Title</label>
                        <input type="text" class="form-control" id="title">
                    </div>
                    <div class="form-group">
                        <label for="body">Body</label>
                        <textarea class="form-control" rows="5" id="body"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="createArticle">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert2'
export default {
  name: 'CreateArticleModal',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    createArticle: function () {
      let title = document.querySelector('#title').value
      let body = document.querySelector('#body').value
      axios.post('https://blog-server.rezapramudhika.com/articles/', {
        title,
        body
      }).then((data) => {
        document.querySelector('#closemodal').click()
        swal({
          text: 'New article posted!',
          type: 'success'
        }).then(() => {
          this.$router.replace('/')
          this.$router.go()
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
      text-align: justify;
  }
</style>
