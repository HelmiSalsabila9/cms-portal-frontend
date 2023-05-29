<template>
    <b-container class="mt-5 mb-5">
      <b-row>
        <b-col md="12" class="mb-3">
          <h4>KATEGORI : <strong class="text-danger">{{ category.name.toUpperCase() }}</strong></h4>
        </b-col>
        <b-col md="4" class="mb-3" sm="12" v-for="post in posts" :key="post.id">
          <b-card :img-src="post.image" img-top tag="article" class="mb-2 h-100 rounded-lg">
            <div class="mb-2">
              <small class="text-muted"><i class="fa fa-calendar mr-1"></i> {{ post.created_at }}</small>
            </div>
            <h5>
              <nuxt-link :to="{name: 'post-slug', params: {slug: post.slug}}" class="text-bold">{{ post.title }}</nuxt-link>
            </h5>
            <b-card-text>
              {{ post.description.substr(0, 55) }}...
            </b-card-text>
            <b-card-text>
              <small class="text-muted mr-3"><i class="fa fa-eye mr-1"></i>{{ post.views }}x Dilihat</small>
              <small class="text-muted"><i class="fa fa-comments mr-1"></i>{{ post.comments.length }} Komentar</small>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
</template>
  
<script>
    export default {
  
      //meta
      head() {
        return {
          title: this.category.name + ' - portal.helmisalsabila.com',
          meta: [{
              hid: 'og:title',
              name: 'og:title',
              content: this.category.name
            },
            {
              hid: 'og:site_name',
              name: 'og:site_name',
              content: this.category.name
            },
            {
              hid: 'og:image',
              name: 'og:image',
              content: this.category.image
            },
          ]
        }
      },
  
      async asyncData({params, $axios}) {
  
        //fetching posts by category
        const category = await $axios.$get(`/api/web/categories/${params.slug}`)
  
        return {
          'category': category.data,
          'posts': category.data.posts
        }
      }
  
    }
</script>
  
<style>
  
</style>