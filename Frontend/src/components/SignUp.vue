<template>   
<section class="vh-100 bg-image"
  style="background-image: size: 100%;" >
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style="border-radius: 15px;">
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5" style="font-family: var(--bs-body-font-family);">Create an account</h2>

              <form>

                <div class="form-outline mb-4">
                  <input type="text" v-model="name" id="form3Example1cg" class="form-control form-control-lg" placeholder="Your Name"/>
                </div>

                <div class="form-outline mb-4">
                  <input type="email" v-model="email" id="form3Example3cg" class="form-control form-control-lg" placeholder="Your Email"/>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" v-model="password" id="form3Example4cg" class="form-control form-control-lg" placeholder="Password"/>
                </div>



                <div class="d-flex justify-content-center">
                  <button type="button" @click="signUp()"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                </div>

                <p class="text-center text-muted mt-5 mb-0">Have already an account?
                <router-link to="/signIn">
                <span id="signin-link" >Sign In.</span></router-link>
                </p>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"> -->
</template>
<script>
import axios from 'axios';
export default {
  name: "SignUp",
  data() {
    return {
      name: '',
      email: '',
      password: '',
    }
  }
  , methods: {
    async signUp() {
      let result = await axios.post('http://localhost:5000/user/signup ', {
        name:this.name,
        email:this.email,
    password: this.password

  });
  console.log(result);
  if(result.status == 201){
        this.$router.push({name: 'signIn'})

  }
 // else if(result.status == 409){
   //       alert('g !!');

 // }
      console.log('signing in **')
}
  }
};
</script>

<style scoped>
body {
  height: 100%;

  font-family: var(--bs-body-font-family);
  /* font-family: 'Times New Roman', Times, serif; */
  /*  */
}
</style>
