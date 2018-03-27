<template>
  <div id="app">
    <navbar></navbar>
    <router-view/>
    <create-article-modal></create-article-modal>
    <edit-article-modal></edit-article-modal>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import CreateArticleModal from './components/CreateArticleModal'
import EditArticleModal from './components/EditArticleModal'
export default {
  name: 'App',
  components: {
    Navbar,
    CreateArticleModal,
    EditArticleModal
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 75px;
}
</style>
