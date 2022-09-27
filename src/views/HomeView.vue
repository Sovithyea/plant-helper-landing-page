<template>
  <div class="home">
    <b-container>
      <b-row class="my-5 text-muted"></b-row>
      <!-- sliders -->
      <b-row class="justify-content-center align-item-center my-5">
        <p class="text-center text-muted">
          You may have heard of the Great Resignation, but we prefer to look at
          this new era as an opportunity to truly choose your own future.
        </p>
        <b-col class="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
          <div class="text-center my-4">
            <div>
              <b-carousel
                id="carousel-fade"
                style="text-shadow: 0px 0px 2px #000"
                fade
                v-model="slider"
                indicators
                img-width="1200"
                img-height="600"
              >
                <b-carousel-slide
                  img-src="../assets/slideshow.jpg"
                ></b-carousel-slide>
                <b-carousel-slide
                  img-src="../assets/slideshow2.jpg"
                ></b-carousel-slide>
                <b-carousel-slide
                  img-src="../assets/slideshow3.jpg"
                ></b-carousel-slide>
              </b-carousel>
            </div>
          </div>
        </b-col>
      </b-row>
      <!-- text content -->
      <h6
        class="text-left text-muted rounded px-2 my-2"
        style="background-color: #e7e5e4"
      >
        Informations
      </h6>
      <!-- Digital gift -->
      <b-row class="justify-content-center align-item-center">
        <b-col class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <div class="my-5">
            <h3 class="font-weight-bold text-success text-center">
              Campany's Goals
            </h3>
            <p
              class="text-muted text-center"
              style="font-family: Verdana, Geneva, Tahoma, sans-serif"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              aliquam, facilis non, expedita nulla fuga rem quisquam nam tempora
              delectus itaque in commodi, officiis sapiente natus quia. Est,
              odio consectetur? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eos aliquam, facilis non, expedita nulla fuga
              rem quisquam nam tempora delectus itaque in commodi, officiis
              sapiente natus quia. Est, odio consectetur?
            </p>
            <div class="text-center">
              <b-button variant="primary" class="mx-2">Get Start</b-button>
              <b-button variant="danger" class="mx-2">Community</b-button>
            </div>
          </div>
        </b-col>
        <b-col class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <div class="text-center">
            <img
              src="../assets/Collection.gif"
              alt=""
              style="width: 300px; height: 300px"
            />
          </div>
        </b-col>
      </b-row>
      <!-- Digital gift -->
      <b-row class="justify-content-center align-item-center">
        <b-col class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <div class="text-center">
            <img
              src="../assets/Digital nomad.gif"
              alt=""
              style="width: 300px; height: 300px"
            />
          </div>
        </b-col>
        <b-col class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12">
          <div class="my-5">
            <h3 class="font-weight-bold text-success text-center">
              Description of us
            </h3>
            <p
              class="text-muted text-center"
              style="font-family: Verdana, Geneva, Tahoma, sans-serif"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              aliquam, facilis non, expedita nulla fuga rem quisquam nam tempora
              delectus itaque in commodi, officiis sapiente natus quia. Est,
              odio consectetur? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eos aliquam, facilis non, expedita nulla fuga
              rem quisquam nam tempora delectus itaque in commodi, officiis
              sapiente natus quia. Est, odio consectetur?
            </p>
            <div class="text-center">
              <b-button variant="primary" class="mx-2">Get Start</b-button>
              <b-button variant="danger" class="mx-2">Community</b-button>
            </div>
          </div>
        </b-col>
      </b-row>
      <!-- card row one -->
      <h6
        class="text-left text-muted rounded px-2 my-2"
        style="background-color: #e7e5e4"
      >
        List
      </h6>
      <b-row class="justify-content-center align-items-center my-5" >
          <b-col class="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-12 text-center" v-for="(category, index) in categories" :key="index">
          <b-card
            :title= "category.name"
            :img-src= "`http://www.code4everyone.info/storage/${category.avatar}`" 
            img-alt="Image"
            img-top
            tag="article"
            class="my-3"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

            <b-button :to="{ name: 'cropCategory', params: { category: category.id }, }" variant="primary">view details</b-button>
          </b-card>
        </b-col>
      </b-row>
      <!-- ////////////////// -->
      <!-- <h6
        class="text-left text-muted rounded px-2 my-2"
        style="background-color: #e7e5e4"
      >
        Most popular
      </h6> -->
      <!-- ////////////////// -->
      <b-row class="text-center">
        <b-col class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12"> </b-col>
      </b-row>
      <!-- this is the end of text on footer -->
      <div class="text-center m-5 text-mu">
        <p class="text-center text-muted">
          Join our crew of top-notch editors, designers, programmers, and others
          as we continue to make a difference everyday in the lives of our
          readers.
        </p>
      </div>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "HomeView",
  components: {},
  data: () => ({
    slider: 0,
    categories: [

    ]
  }),
  mounted() {
    this.fetchData()
  },

  methods: {
    fetchData() {
        axios.get('/getCategory', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      })
      .then(response => {
        this.categories = response.data
      })
      .catch(({response}) => {
        console.log(response);
      })
    },
  }
};
</script>
<style></style>
