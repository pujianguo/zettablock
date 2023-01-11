<template>
  <div class="signup-dialog" v-if="visible">
    <div class="signup-dialog-content">
      <div class="close-btn" @click="handleClose">
        <svg class="close-icon">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-close"></use>
        </svg>
      </div>
      <div class="dialog-header">
        <div class="logo">
          <svg class="logo-icon">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo-icon"></use>
          </svg>
          <svg class="logo-text">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo-text"></use>
          </svg>
        </div>
      </div>
      <div v-if="!isSubmit" class="dialog-form">
        <div class="form-item">
          <div class="item-label">Name</div>
          <input class="item-input" v-model="editForm.name" name="NAME" placeholder="What do people call you?" />
        </div>
        <div class="form-item">
          <div class="item-error-wrap">
            <div class="item-label">Email</div>
            <p v-show="emailError" class="item-error">{{emailError}}</p>
          </div>
          <input class="item-input" v-model="editForm.email" name="EMAIL" placeholder="No spam, we promise" />
        </div>
        <div class="form-item">
          <div class="item-error-wrap">
            <div class="item-label">Use Case</div>
            <p v-show="useError" class="item-error">{{useError}}</p>
          </div>
          <select class="item-input item-select" :class="{'select-disabled': editForm.use ===''}" v-model="editForm.use" name="USE" placeholder="What are you working on?">
            <option value="" disabled selected>What are you working on?</option>
            <option value="Data Analysis">Data Analysis</option>
            <option value="App Development">App Development</option>
          </select>
        </div>
        <div class="form-item">
          <div class="item-error-wrap">
            <div class="item-label">License Type</div>
            <p v-show="interestError" class="item-error">{{interestError}}</p>
          </div>
          <select class="item-input item-select" :class="{'select-disabled': editForm.interest ===''}" v-model="editForm.interest" name="INTEREST" placeholder="What type of usage?">
            <option value="" disabled selected>What type of usage?</option>
            <option value="Personal / Individual">Personal / Individual</option>
            <option value="Commercial / Enterprise">Commercial / Enterprise</option>
          </select>
        </div>
        <div class="submit-button button" @click="handleSubmit">
          <span class="button-text">Get Early Access</span>
          <svg class="button-icon">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use>
          </svg>
        </div>
        <!-- <div class="terms">By logging in, you are agreeing to the <a class="menu-item" target="_blank" href="/terms">Terms of Service</a> and confirm that you have read the <a class="menu-item" target="_blank" href="/privacy">Privacy Policy</a>.</div> -->
      </div>
      <div v-else class="submit-success">
        <div class="success-title">Application sent!</div>
        <div class="success-text success-text-pc">
          <p>Thank you for the interest. We’ll be in touch shortly.</p>
          <p>Join our <a href="https://discord.gg/zettablock" target="_blank">discord</a> for higher priority!</p>
        </div>
        <div class="success-text success-text-m">
          <p>Thank you for the interest.</p>
          <p>We’ll be in touch shortly.</p>
          <p>Join our <a href="https://discord.gg/zettablock" target="_blank">discord</a> for higher priority!</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {validateEmail} from '@/utils/util'
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      visible: false,
      editForm: {
        name: '',
        email: '',
        use: '',
        interest: '',
      },
      nameError: '',
      emailError: '',
      useError: '',
      interestError: '',
      isSubmit: false,
      submitLoading: false,
    }
  },
  watch: {
    value: {
      immediate: true,
      handler (val) {
        if (val !== this.visible) {
          this.visible = val
          if (val) {
            this.$router.push('?signup')
            this.init()
          }
        }
      }
    },
    visible (val) {
      this.$emit('input', val)
    }
  },
  methods: {
    init() {
      this.editForm = {
        name: '',
        email: '',
        use: '',
        interest: '',
      }
      this.emailError = ''
      this.isSubmit = false
      this.submitLoading = false
    },
    handleClose () {
      this.visible = false
      if (this.$route.query.hasOwnProperty('signup')) {
        this.$router.push('/')
      }
    },
    handleSubmit () {
      let errFlag = false
      if (this.editForm.email === '') {
        this.emailError = 'Please enter a value'
        errFlag = true
      } else {
        this.emailError = ''
      }
      if (!validateEmail(this.editForm.email)) {
        this.emailError = 'Please check the email format'
        errFlag = true
      } else {
        this.emailError = ''
      }
      if (this.editForm.use === '') {
        this.useError = 'Please select a value'
        errFlag = true
      } else {
        this.useError = ''
      }
      if (this.editForm.interest === '') {
        this.interestError = 'Please select a value'
        errFlag = true
      } else {
        this.interestError = ''
      }
      if (errFlag || this.submitLoading) {
        return
      }

      const data = `NAME=${this.editForm.name}&EMAIL=${this.editForm.email}&USE=${this.editForm.use}&INTEREST=${this.editForm.interest}`
      const url = "https://zettablock.us14.list-manage.com/subscribe/post?u=1ff0f35da3b86da52617aadd6&amp;id=bc40fdafb4&amp;f_id=00d781e0f0"
      this.submitLoading = true
      fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data
      }).then((res) => {
        this.isSubmit = true
        this.submitLoading = false
      }).catch(err => {
        this.submitLoading = false
        this.isSubmit = true
      })
    }
  }
}
</script>

<style lang="scss">
.signup-dialog{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(240, 240, 245, 0.6);
  backdrop-filter: blur(25px);
  // display: none;
  .signup-dialog-content{
    width: 600px;
    height: 700px;
    background: #FFFFFF;
    box-shadow: 0px 20px 45px rgba(50, 28, 242, 0.05), 0px 0px 0px rgba(50, 28, 242, 0.05);
    padding: 50px 120px;
    position: relative;
    display: flex;
    flex-direction: column;
    .dialog-header{
      width: 100%;
      .logo{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .logo-icon{
          width: 26px;
          height: 26px;
          margin-right: 16px;
        }
        .logo-text{
          width: 140px;
          height: 22px;
          color: #000;
        }
      }
    }
    .dialog-form{
      width: 100%;
      margin-top: 30px;
      .form-item{
        width: 100%;
        margin-bottom: 22px;
        .item-error-wrap{
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .item-label{
          font-weight: 500;
          color: #000000;
        }
        .item-input{
          margin-top: 10px;
          width: 100%;
          height: 52px;
          border: 1px solid rgba(40, 26, 240, 0.1);
          box-shadow: 0px 2px 4px rgba(40, 27, 240, 0.04), 0px 0px 0px rgba(40, 27, 240, 0.04);
          border-radius: 4px;
          padding: 0 18px;
          color: #281AF0;
          &::placeholder{
            color: #281AF0;
            opacity: 0.2;
          }
        }
        .item-select{
          appearance: none;
          background: url("/icon/select_arrow.svg") no-repeat right 15px center;
          &:focus-visible{
            outline: none;
          }
        }
        .select-disabled{
          color: rgba(40,26,240, 0.2);
        }
        .item-error{
          color: #e85c41;
        }
      }
    }
    .submit-button{
      width: 100%;
      height: 52px;
      margin: 50px auto 0;
      background: radial-gradient(129.53% 327.88% at 69.76% 0%, #962EFF 0%, rgba(150, 46, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */, #2914F7;
      box-shadow: 0px 27px 11px rgba(40, 27, 240, 0.01), 0px 15px 9px rgba(40, 27, 240, 0.02), 0px 7px 7px rgba(40, 27, 240, 0.04), 0px 2px 4px rgba(40, 27, 240, 0.04), 0px 0px 0px rgba(40, 27, 240, 0.04);
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      .button-text{
        font-family: 'Basier Square';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 100%;
      }
      .button-icon{
        width: 24px;
        height: 24px;
        margin-left: 5px;
        margin-right: 0;
      }
    }
    .submit-success{
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      .success-title{
        font-weight: 700;
        font-size: 32px;
        line-height: 120%;
        color: #000;
        text-align: center;
      }
      .success-text{
        margin-top: 26px;
        P{
          font-weight: 500;
          color: #000;
          text-align: center;
          a{
            color: #281AF0;
          }
        }
      }
      .success-text-pc{
        display: block;
      }
      .success-text-m{
        display: none;
      }
    }
    .close-btn{
      position: absolute;
      top: 10px;
      right: 10px;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      .close-icon{
        width: 20px;
        height: 20px;
      }
    }
    .terms{
      font-size: 14px;
      color: rgba(90, 32, 251, 0.4);
      text-align: center;
      margin-top: 40px;
      font-weight: 600;
      a{
        color: rgba(90, 32, 251, 0.7);
        text-decoration: underline;
        &:hover{
          color: rgba(90, 32, 251, 1);
        }
      }
    }
  }
}
@media screen and (max-width: 1200px) {
  .signup-dialog{
    .signup-dialog-content{
      width: 500px;
      height: 520px;
      padding: 40px 100px;
      .dialog-header{
        .logo{
          .logo-icon{
            width: 20px;
            height: 20px;
            margin-right: 6px;
          }
          .logo-text{
            width: 140px;
            height: 18px;
          }
        }
      }
      .dialog-form{
        margin-top: 20px;
        .form-item{
          margin-bottom: 10px;
          .item-label{
            font-size: 14px;
          }
          .item-input{
            height: 38px;
            font-size: 12px;
            padding: 0 12px;
          }
        }
      }
      .submit-button{
        width: 248px;
        height: 44px;
        margin: 40px auto 0;
        .button-text{
          font-size: 16px;
        }
        .button-icon{
          width: 20px;
          height: 20px;
          margin-left: 5px;
        }
      }
      .terms{
        font-size: 12px;
      }
    }
  }
}
//small screen
@media screen and (max-height: 750px) {
  .signup-dialog{
    .signup-dialog-content{
      width: 500px;
      height: 520px;
      padding: 40px 100px;
      .dialog-header{
        .logo{
          .logo-icon{
            width: 20px;
            height: 20px;
            margin-right: 6px;
          }
          .logo-text{
            width: 140px;
            height: 18px;
          }
        }
      }
      .dialog-form{
        margin-top: 20px;
        .form-item{
          margin-bottom: 10px;
          .item-label{
            font-size: 14px;
          }
          .item-input{
            height: 38px;
            font-size: 12px;
            padding: 0 12px;
          }
        }
      }
      .submit-button{
        width: 248px;
        height: 44px;
        margin: 40px auto 0;
        .button-text{
          font-size: 16px;
        }
        .button-icon{
          width: 20px;
          height: 20px;
          margin-left: 5px;
        }
      }
      
    }
    
  }
}
// mobile
@media screen and (max-width: 767px) {
  .signup-dialog{
    .signup-dialog-content{
      width: 335px;
      height: 580px;
      padding: 40px 20px;
      .dialog-header{
        .logo{
          .logo-icon{
            width: 18px;
            height: 18px;
          }
          .logo-text{
            width: 97px;
            height: 15px;
          }
        }
      }
      .dialog-form{
        .form-item{
          margin-bottom: 20px;
          .item-label{
            font-size: 14px;
          }
          .item-input{
            height: 44px;
            font-size: 14px;
          }
        }
      }
      .submit-button{
        width: 100%;
        height: 48px;
        margin-top: 40px;
      }
      .close-btn{
        top: 5px;
        right: 5px;
        width: 26px;
        height: 26px;
        .close-icon{
          width: 16px;
          height: 16px;
        }
      }
      .submit-success{
        .success-text-pc{
          display: none;
        }
        .success-text-m{
          display: block;
        }
      }
      .terms{
        margin-top: 30px;
        font-size: 10px;
      }
    }
  }
}


</style>
