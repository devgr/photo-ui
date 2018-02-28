<template>
  <div class="card-body">
    <a v-on:click="home();" class="btn">&lt; Back</a>
    <h1>Contact</h1>
    <br />
    <input v-model="name" v-on:blur="checkName();"
      :class="{ reject: invalidName }" placeholder="Name" />
    <input v-model="email" v-on:blur="checkEmail();"
      :class="{ reject: invalidEmail }" placeholder="Email" />
    <textarea v-model="message" v-on:blur="checkMessage();"
      :class="{ reject: invalidMessage }" placeholder="Message" />
    <br />
    <a v-on:click="submitContact();" class="btn" :class="{ success: submitSuccess, reject: submitFailure }">Submit</a>
  </div>
</template>

<script>
import dataManager from '@/services/data'
export default {
  name: 'ContactCard',
  props: ['config'],
  data () {
    return {
      name: '',
      email: '',
      message: '',
      invalidName: false,
      invalidEmail: false,
      invalidMessage: false,
      submitSuccess: false,
      submitFailure: false
    }
  },
  methods: {
    home () {
      dataManager.home()
    },
    submitContact () {
      if (this.checkName() || this.checkEmail() || this.checkMessage()) {
        return false
      }
      dataManager.submitContact(this.name, this.email, this.message).then(() => {
        this.submitSuccess = true
        this.submitFailure = false
      }, () => {
        this.submitFailure = true
        this.submitSuccess = false
      })
    },
    checkName () {
      if (!this.name || this.name.length === 0) {
        this.invalidName = true
      } else {
        this.invalidName = false
      }
      return this.invalidName
    },
    checkEmail () {
      // https://stackoverflow.com/questions/46155/how-can-an-email-address-be-validated-in-javascript
      let re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
      this.invalidEmail = !re.test(String(this.email).toLowerCase())
      return this.invalidEmail
    },
    checkMessage () {
      if (!this.message || this.message.length === 0) {
        this.invalidMessage = true
      } else {
        this.invalidMessage = false
      }
      return this.invalidMessage
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input, textarea{
  display: block;
  border-radius: 5px;
  width: 300px;
  margin: 4px auto;
  color: #ddd;
  background-color: #383838;
  border: 1px solid #bbb;
  padding: 4px;
  font-size: 14px;
}
input.reject, textarea.reject{
  border-color: #d46a6a;
}
.card-body{
  margin: 10px;
}
::placeholder{
  color: #ddd;
  font-family: 'Bungee Shade', sans-serif;
  font-size: 16px;
}
a.btn.success{
  border-color: #55aa55;
}
a.btn.waiting{
  color: #999;
}
</style>
