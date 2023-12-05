'use strict';

const { createApp } = Vue

createApp({
  data() {
    return {
        'apiUru':'https://flynn.boolean.careers/exercises/api/random/mail',
        'mail': '',
    };
  },
  created(){
    axios.get(this.apiUru).then((response)=>{
        console.log(response.data);
        this.mail = response.data.response;
    });
  }
}).mount('#app')