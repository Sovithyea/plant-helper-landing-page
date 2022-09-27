<template>
  <div>
    <div class="fixed-top">
      <b-navbar
        toggleable="lg"
        type="dark"
        class="shadow"
        style="
          background-color: rgba(30, 41, 59, 0.5);
          width: 100%;
          backdrop-filter: blur(5px);
        "
      >
        <b-container fluid="md">
          <b-navbar-brand
            href="/"
            class="font-weight-bold px-3 m-2 rounded"
            style="color: #14532d; background-color: white"
            ><b-icon
              icon="tree-fill"
              font-scale="1"
              style="color: #14532d"
            ></b-icon>
            Plant Helper</b-navbar-brand
          >

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-navbar-nav>
                <b-nav-item
                  href="/"
                  class="font-weight-bold"
                  style="color: black"
                  >Home</b-nav-item
                >
                <b-nav-item-dropdown
                  text="Category"
                  right
                  class="font-weight-bold border-0 category"
                >
                  <b-dropdown-item href="#">function-1</b-dropdown-item>
                  <b-dropdown-item href="#">function-2</b-dropdown-item>
                  <b-dropdown-item href="#">function-3</b-dropdown-item>
                  <b-dropdown-item href="#">function-4</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item href="/contact" class="font-weight-bold"
                  >Contact</b-nav-item
                >
                <b-nav-item href="/About" class="font-weight-bold"
                  >About us</b-nav-item
                >
              </b-navbar-nav>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({}),
};
</script>
<style scoped></style>
