<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-100">
      <p @click='$router.go(-1)' class='back'>back</p>
    </div>
    <div class="md-layout-item md-size-100">
      <md-card>
        <md-card-header class="md-card-header-text md-card-header-green">
          <div class="card-text">
            <h4 class="title">Product Edit</h4>
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

          <div class="md-layout" v-if="collections">
            <label class="md-layout-item md-size-15 md-form-label">
              Collection
            </label>
            <div class="md-layout-item">
              <md-field>
                <md-select v-model="product.collection">
                  <md-option value="">None</md-option>
                  <md-option v-for="(c, index) in this.collections" :key="index" :value="c.slug">{{ c.name }}</md-option>
                </md-select>
              </md-field>
            </div>
          </div>

          <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">
              Description
            </label>
            <div class="md-layout-item">
              <md-field>
                <label>Enter Product Description</label>
                <md-textarea v-model="product.description"></md-textarea>
              </md-field>
            </div>
          </div>

          <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">
              Main Image
            </label>
            <div class="md-layout-item">
              <md-field>
                <md-file
                  type="file"
                  ref="upload"
                  accept="image/*"
                  @change="uploadImage"
                  :disabled="hasMainImage"
                  v-model="product.main_image"
                ></md-file>
              </md-field>
            </div>
          </div>

          <div class="md-layout" v-if="product.main_image">
            <div class="md-layout-item md-size-33 mx-auto">
              <md-field>
                <div class="main_image--wrapper">
                  <span class="delete" @click="deleteMainImg">X</span>
                  <img :src="product.main_image" alt="Main Image" />
                </div>
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
import { db, storage } from '@/config/firebaseInit';
import Swal from "sweetalert2";

export default {
  components: {},
  data() {
    return {
      product: {
        name: "",
        slug: "",
        price: 0,
        collection: "",
        description: "",
        main_image: null,
        gallery: []
      },
      collections: [],
      upload_progress: null
    }
  },
  computed: {
    hasMainImage() {
      return this.product.main_image ? true : false
    }
  },
  created() {
  },
  firestore() {
    return {
      product: db.collection("products").doc(this.$route.params.product_id),
      collections: db.collection("collections")
    };
  },
  watch: {
    product: {
      handler(val) {
        this.product.slug = val.name.replace(/[^a-zA-Z0-9]/g, "-");
      },
      deep: true
    }
  },
  methods: {
    uploadImage(e) {
      console.log(e);
      let image = e.target.files[0];
      let imageName = image.name;
      let reader = new FileReader();
      reader.readAsDataURL(image);
      let vm = this;
      reader.onload = e => {
        let storageRef = storage.ref(`images/${this.product.slug}/${Date.parse(new Date())}_${image.name}`);
        let uploadTask = storageRef.put(image);

        uploadTask.on(
          "state_changed",
          snapshot => {
            vm.upload_progress = (vm.upload_transferred / vm.upload_total) * 100;
          },
          error => {
            vm.upload_progress = false;
            alert('could not upload logo, please try again.')
          },
          snapshot => {
            uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
              vm.product.main_image = downloadURL
               console.log(downloadURL)
            });
          }
        );
      };
    },
    deleteMainImg() {
      let vm = this;
      Swal.fire({
        title: 'Are you Sure?',
        text: 'You wont be able to revert back!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        ConfirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          vm.upload_progress = true;
          let productRef = storage.refFromURL(vm.product.main_image);
          productRef.delete()
          .then(() => {
            vm.product.main_image = ""
            Swal.fire('Deleted!', 'Your file has been deleted', 'success')
            //clear form value
            vm.$refs.upload.value = null
            vm.upload_progress = null
          })
          .catch((error) => {
            if (error) {
              console.log(error);
            }
          })
        }
      })
    },
    save() {
      let vm = this;
      if (!vm.product.created){
        vm.product.created = Date.now();
      }
      console.log(this.product)
      return db.collection("products")
      .doc(this.$route.params.product_id)
      .set(vm.product, { merge: true })
      .then(() => {
        return Swal.fire("Success", "Page Updated", "success");
      });
    }
  }
};
</script>

<style lang="scss">

  .main_image--wrapper {
    position: relative;
  }

  .delete {
    position: absolute;
    top: -0.3em;
    left: -0.3em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background: red;
    color: #FFF;
    font-weight: 500;
    height: 2em;
    width: 2em;
    cursor: pointer
  }

</style>
