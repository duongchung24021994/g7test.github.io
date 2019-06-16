<template>

<div>
  <b-navbar toggleable="lg" type="dark" variant="info" sticky>
    <b-navbar-brand size="10px" href="#" class="logo">
      <img src="http://g7taxi.vn/wp-content/themes/goda-caro/assets/images/logo-md.png" class="d-inline-block align-top" alt="g">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav >
      <b-navbar-nav >
        <b-nav-item href="#">Trang chủ</b-nav-item>
        <b-nav-item href="#">Giới thiệu</b-nav-item>
        <b-nav-item-dropdown text="Dịch vụ" right>
          <b-dropdown-item href="#">Thẻ taxi doanh nghiệp</b-dropdown-item>
          <b-dropdown-item href="#">Taxi sân bay</b-dropdown-item>
          <b-dropdown-item href="#">Xe tuyến dài</b-dropdown-item>
          <b-dropdown-item href="#">Bảng giá cước</b-dropdown-item>
          <b-dropdown-item href="#">Dịch vụ quảng cáo</b-dropdown-item>
          <b-dropdown-item href="#">App G7 Taxi</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="#">Tin tức</b-nav-item>
        <b-nav-item href="#">Trở thành lái xe</b-nav-item>
        <b-nav-item href="#">Câu hỏi thường gặp</b-nav-item>

        
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content"><em>User</em></template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>     
  <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="https://picsum.photos/1024/480/?image=55"
          alt="image slot"
        >
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>
  <b-container class="bv-example-row" width="1024"
          height="480">
    <b-row>
      <b-col>
        <b-embed class="video-ember"
    type="iframe"
    aspect="16by9"
    src="https://www.youtube.com/embed/yVSvPYPbhp0"
    allowfullscreen
  ></b-embed>
      </b-col>
         <b-col>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, nisi ad magnam iure doloremque quisquam error harum. Nobis dignissimos autem minima fuga earum voluptate iure, illum corrupti? Fugiat dolorum corporis quae dolore sequi officiis impedit, saepe voluptates hic voluptatem at necessitatibus earum rerum quibusdam dignissimos blanditiis quaerat voluptate facere quidem!  </b-col>
      
    </b-row>
    <b-container fluid class="p-4 bg-dark">
  <b-row>
    <b-col>
      <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
    </b-col>
    <b-col>
      <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=58" alt="Image 2"></b-img>
    </b-col>
    <b-col>
      <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
    </b-col>
  </b-row>
</b-container>
</b-container>

    <b-col  offset-md="5">
    <b-button v-b-modal.modal-1>Liên hệ với chúng tôi</b-button>
    </b-col>

  <b-modal id="modal-1" title="Liên hệ với chúng tôi">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      

      

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    
  
  </b-modal>
</div>


  
</template>
  

<script>
export default {
data() {
      return {
        form: {
          email: '',
          name: '',
          food: null,
          checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }

</script>

<style>
.d-inline-block{
  max-height: 30px
}
.bv-example-row{
  background-image: ""
}
.video-ember{
  margin-left: 0px;
}
</style>

