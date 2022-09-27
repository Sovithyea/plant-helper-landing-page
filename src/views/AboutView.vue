<template>
  <div>
    <b-container>
      <b-row class="my-5"></b-row>
      <b-row class="text-center">
        <b-col col-12>
          <h2 class="text-center font-weight-bold title" style="color: #22c55e">
            Plant Helper
            <h6 class="text-center text-muted">Developers</h6>
          </h2>
        </b-col>
      </b-row>
      <b-row class="justify-content-center align-items-center my-5">
        <b-col class="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-12 text-center">
          <b-card
            title="Kid Developer"
            img-src="../assets/person.jpg"
            img-alt="Image"
            img-top
            tag="article"
            class="my-3"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">view details</b-button>
          </b-card>
        </b-col>
        <b-col class="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-12 text-center">
          <b-card
            title="Srey Pov"
            img-src="../assets/person2.jpg"
            img-alt="Image"
            img-top
            tag="article"
            class="my-3"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">view details</b-button>
          </b-card>
        </b-col>
        <b-col class="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-12 text-center">
          <b-card
            title="Phiro"
            img-src="../assets/person3.jpg"
            img-alt="Image"
            img-top
            tag="article"
            class="my-3"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">view details</b-button>
          </b-card>
        </b-col>
        <b-col class="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-12 text-center">
          <b-card
            title="Noreak Kun"
            img-src="../assets/person4.jpg"
            img-alt="Image"
            img-top
            tag="article"
            class="my-3"
          >
            <b-card-text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">view details</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "AboutVeiw",
  data: () => ({
    name: "",
  }),
};
</script>
<style></style>
