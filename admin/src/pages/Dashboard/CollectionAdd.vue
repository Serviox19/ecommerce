<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-100">
      <p @click='$router.go(-1)' class='back'>back</p>
    </div>
    <div class="md-layout-item md-size-100">
      <md-card>
        <md-card-header class="md-card-header-text md-card-header-green">
          <div class="card-text">
            <h4 class="title">Collection Add</h4>
          </div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">
              Name
            </label>
            <div class="md-layout-item">
              <md-field>
                <md-input v-model="collection.name" type="text"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">
              Slug
            </label>
            <div class="md-layout-item">
              <md-field>
                <md-input v-model="collection.slug" type="text"></md-input>
              </md-field>
            </div>
          </div>

          <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">
              Featured
            </label>
            <div class="md-layout-item">
              <md-checkbox v-model="collection.featured">Featured ?</md-checkbox>
            </div>
          </div>

          <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">
              Image
            </label>
            <div class="md-layout-item">
              <md-field>
                <md-input v-model="collection.image" placeholder="Image" type="file"></md-input>
              </md-field>
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
import router from "@/router";
import { db } from '@/config/firebaseInit';
import Swal from "sweetalert2";

export default {
  components: {},
  data() {
    return {
      collection: {
        name: "",
        slug: "",
        featured: false
      }
    }
  },
  created() {
  },
  watch: {
    collection: {
      handler(val) {
        this.collection.slug = val.name.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
      },
      deep: true
    }
  },
  methods: {
    save() {
      let vm = this;
      if (!vm.collection.created){
        vm.collection.created = Date.now();
      }
      console.log(this.collection)
      return db.collection("collections")
      .doc(this.$route.params.collection_id)
      .set(vm.collection, { merge: true })
      .then(() => {
        return Swal.fire("Success", "Page Updated", "success").then(result => {
          if (result.value) {
            router.push('/collections');
          }
        });
      })
    }
  }
};
</script>

<style lang="scss"></style>
