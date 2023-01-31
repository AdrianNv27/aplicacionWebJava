Vue.createApp({
    data() {
        return{
            progres:[],
                Rango: '0'
            

        }
    },
    computed: {
        color() {
            if(this.Rango > 0 && this.Rango <41){
                return 'success'
            }
            else if(this.Rango >= 41 && this.Rango <81){
                return 'warning'
            }
            else{
                return 'danger'
            }
        }
    }
}).mount('#app21')