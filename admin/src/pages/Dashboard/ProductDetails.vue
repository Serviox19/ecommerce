<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-100">
      <p @click='$router.go(-1)' class='back'>back</p>
    </div>
    <div class="md-layout-item md-size-100">
      <md-card>
        <md-card-header class="md-card-header-text md-card-header-green">
          <div class="card-text">
            <h4 class="title">Form Elements</h4>
          </div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">
              Name
            </label>
            <div class="md-layout-item">
              <md-field>
                <md-input v-model="product.name" type="text"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">
              Slug
            </label>
            <div class="md-layout-item">
              <md-field>
                <md-input v-model="product.slug" type="text"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">
              Price
            </label>
            <div class="md-layout-item">
              <md-field>
                <md-input v-model="product.price" placeholder="Price" type="text"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">
              Checkboxes and Radios
            </label>
            <div class="md-layout-item">
              <md-checkbox>First Checkbox</md-checkbox>
              <md-checkbox>Second Checkbox</md-checkbox>
            </div>
          </div>

        </md-card-content>
      </md-card>
    </div>

    <div class="md-layout-item md-size-25">
      <md-button @click="save">Save</md-button>
    </div>

  </div>
</template>

<script>
import { db } from '@/config/firebaseInit';
import Swal from "sweetalert2";

export default {
  components: {},
  data() {
    return {
      product: {
        name: "",
        slug: "",
        price: 0
      },
      responsive: false
    };
  },
  watch: {
    product: {
      handler(val) {
        if (!this.product.created) {
          this.product.slug = val.name.replace(/[^a-zA-Z0-9]/g, "-");
        }
      },
      deep: true
    }
  },
  // firestore() {
  //   return {
  //     product: db.collection("products").doc(this.$route.params.product_id)
  //   };
  // },
  methods: {
    save() {
      let vm = this;
      if (!this.product.created){
        vm.product.created = Date.now();
      }
      console.log(this.product)
      return db.collection("products")
      .doc(this.$route.params.product_id)
      .set(vm.product, { merge: true })
      .then(() => {
        return Swal.fire("Success", "Page Updated", "success");
      });
    },
    onResponsiveInverted() {
      if (window.innerWidth < 768) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    }
  },
  mounted() {
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  }
};
</script>

<style lang="scss"></style>
