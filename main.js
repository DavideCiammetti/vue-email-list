'use strict';

const { createApp } = Vue

createApp({
  data() {
    return {
        'apiUru':'https://flynn.boolean.careers/exercises/api/random/mail',
        'mail': '',
        'mailArr': [],
    };
  },
  methods:{
  },
  created(){
    for(let i = 0; i < 10; i++){
        axios.get(this.apiUru).then((response)=>{
            console.log(response.data);
            this.mail = response.data.response;
            this.mailArr.push( this.mail);
        });
    }
  }
}).mount('#app')