<template>
    <div class="modal fade" id="edit-article-modal" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button id="closemodal" type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4>Edit Article</h4>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="titleEdit">Title</label>
                        <input type="text" class="form-control" id="titleEdit" :value="article.title">
                    </div>
                    <div class="form-group">
                        <label for="bodyEdit">Body</label>
                        <textarea class="form-control" rows="8" id="bodyEdit" :value="article.body"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="editData">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert2'
export default {
  name: 'EditArticleModal',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      article: {},
      id: this.$route.params.id
    }
  },
  methods: {
    editData: function () {
      let title = document.querySelector('#titleEdit').value
      let body = document.querySelector('#bodyEdit').value
      axios.put(`http://localhost:3000/articles/${this.id}`, {
        title,
        body
      }).then((data) => {
        swal({
          text: 'Article edited!',
          type: 'success'
        }).then(() => {
          this.$router.go()
        })
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  watch: {
    '$route.params.id': function () {
      if (this.$route.params.id !== undefined) {
        this.id = this.$route.params.id
        axios.get(`http://localhost:3000/articles/${this.id}`, {}).then((data) => {
          this.article = data.data.data
        })
      }
    }
  },
  created: function () {
    if (this.$route.params.id !== undefined) {
      this.id = this.$route.params.id
      axios.get(`http://localhost:3000/articles/${this.id}`, {}).then((data) => {
        this.article = data.data.data
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
