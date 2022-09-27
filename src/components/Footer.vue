<template>
  <div class style="background-color: #475569">
    <b-container class="pt-5">
      <b-row class="justify-content-center align-item-center col-12">
        <b-col class="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12 text-center">
          <div class="mb-3">
            <h3 class="font-weight-bold text-light">Plant Helper</h3>
            <img
              src="@/assets/new.png"
              alt=""
              class="rounded"
              style="height: 130px; width: 130px; object-fit: cover"
            />
          </div>
        </b-col>
        <b-col class="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12">
          <div class="my-3">
            <h5 class="text-light font-weight-bold">About Plants</h5>
            <a href="" class="text-light text-decoration-none">All Plants</a
            ><br />
            <a href="" class="text-light text-decoration-none">Pademic Plants</a
            ><br />
            <a href="" class="text-light text-decoration-none"
              >Endemic Plants</a
            >
          </div>
        </b-col>
        <b-col class="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12">
          <div class="my-3 text-start">
            <h5 class="text-light font-weight-bold">Contact US</h5>
            <a href="" class="text-light text-decoration-none">
              <b-icon icon="briefcase-fill"></b-icon> PlantHelper@gmail.com</a
            ><br />
            <a href="" class="text-light text-decoration-none">
              <b-icon icon="geo-alt-fill"></b-icon>
              Battambang,Cambodia</a
            ><br />
            <a href="" class="text-light text-decoration-none">
              <b-icon icon="telephone-fill"></b-icon>
              0963732327</a
            >
          </div>
        </b-col>
      </b-row>
    </b-container>
    <div class="text-center text-light p-4">Copyright 2022-Plant Helper.</div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({}),
};
</script>

<style scoped></style>
