<template>
    <b-container class="mt-5 mb-5">
      <b-row>
        <b-col md="4" class="mb-3" sm="12" v-for="post in posts" :key="post.id">
          <b-card :img-src="post.image" img-top tag="article" class="mb-2 h-100 rounded-lg shadow-sm">
            <div class="mb-2">
              <small class="text-muted"><i class="fa fa-calendar mr-1"></i> {{ post.created_at }}</small>
            </div>
            <h5>
              <nuxt-link :to="{name: 'post-slug', params: {slug: post.slug}}" class="text-bold"> {{ post.title }} </nuxt-link>
            </h5>
            <b-card-text>
              {{ post.description.substr(0, 55) }}...
            </b-card-text>
            <b-card-text>
              <small class="text-muted"><i class="fas fa-pen mr-1"></i> {{ post.user.name }}</small>
              <small class="text-muted">- Dilihat {{ post.views }} kali</small>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <b-row class="mt-4 justify-content-center">
        <b-pagination v-model="pagination.current_page" :total-rows="pagination.total" :per-page="pagination.per_page"
          @input="changePage" aria-controls="my-table">
        </b-pagination>
      </b-row>
    </b-container>
</template>
  
<script>
    export default {
  
      //meta
      head() {
        return {
          title: 'Post Artikel - portal.helmisalsabila.com',
          meta: [{
              hid: 'og:title',
              name: 'og:title',
              content: 'portal.helmisalsabila.com'
            },
            {
              hid: 'og:site_name',
              name: 'og:site_name',
              content: 'portal.helmisalsabila.com'
            },
            {
              hid: 'og:image',
              name: 'og:image',
              content: 'https://i.imgur.com/XkrfJfo.png'
            },
          ]
        }
      },
  
      //watch query URL
      watchQuery: ["page"],
  
      async asyncData({ $axios, query }) {
  
        let page = query.page ? parseInt(query.page) : ''
  
        //fetching posts
        const posts = await $axios.$get(`/api/web/posts?page=${page}`)
  
        return {
          'posts': posts.data.data,
          'pagination': posts.data
        }
      },
  
      methods: {
        //change page pagination
        changePage(page) {
          this.$router.push({
            path: this.$route.path,
            query: {
              page: page
            }
          });
        }
      },
    }
</script>
  
<style>
  
</style>