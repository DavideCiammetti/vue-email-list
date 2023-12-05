'use strict';

const { createApp } = Vue

createApp({
  data() {
    return {
        'apiUru':'https://flynn.boolean.careers/exercises/api/random/mail',
        'mail': '',
        'mailArr': [],
        'showMailClick': false,
        'notShowMail': null,
    };
  },
  methods:{
    // funzione mostra lista e chiudi lista 
    showMail(){
        this.showMailClick = !this.showMailClick;
        this.notShowMail += 1;
        if(this.notShowMail === 2){
            this.showMailClick = false;
        }
    }
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