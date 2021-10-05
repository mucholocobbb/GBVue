<template>
  <div class="wrapper">
    <div class="header">{{ modalWindowSettings.header }}</div>
    <div class="content">
      <!-- <AddPaymentForm v-if="ModalWindoW === 'AddPaymentForm'" />
      <AuthForm v-if="ModalWindoW === 'AuthForm'" /> -->
      <component :is="ModalWindoW" />
    </div>
    <div class="footer">
      <button @click="$modal.hide()">Close</button>
    </div>
  </div>
</template>
 
<script>
import AddPaymentForm from './AddPaymentForm'
import AuthForm from './AuthForm'
 
export default {
  components: {
    AddPaymentForm,
    AuthForm,
  },
  props: {
    ModalWindoW: String,
    modalWindowSettings: Object
  },

}
</script>