<template>
  <div>
    <b-row class="justify-content-center align-items-center my-5" >
          <b-col class="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-12 text-center" v-for="(crop, index) in crops" :key="index">
          <b-card
            :title= "crop.name"
            :img-src= "`http://www.code4everyone.info/storage/${crop.avatar}`" 
            img-alt="Image"
            img-top
            tag="article"
            class="my-3"
          >
            <b-button variant="primary">view details</b-button>
            <!-- :to="{ name: 'cropCategory', params: { category: category.id }, }" -->
          </b-card>
        </b-col>
      </b-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            crops: [

            ]
        }
    },
    mounted() {
        this.fetchData()
    },

    methods: {
        fetchData() {
            axios.get(`/getCrop/${ this.$route.params.category }`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        })
        .then(response => {
            this.crops = response.data
            console.log(crops);
        })
        .catch(({response}) => {
            console.log(response);
        })
        },
    }
}
</script>

<style>

</style>