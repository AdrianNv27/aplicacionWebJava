Vue.createApp({
    data() {
        return{
            fruta:''
        
        }
    },
    computed: {
        frutas() {
            if(this.fruta == 'Manzana'){
                return 'https://th.bing.com/th/id/OIP.COEzsFVh0vqIGwkGLXZZDAHaGp?w=180&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'
            }
            else if(this.fruta == 'Naranja'){
                return 'https://th.bing.com/th/id/OIP.HGQTaASEXv_QrzEBEplz_gHaFj?w=220&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7'

            }
            else if(this.fruta == 'Pera'){
                return 'https://th.bing.com/th/id/OIP.xC6NX1mYk4El_0432RsmjgHaHa?w=191&h=191&c=7&r=0&o=5&dpr=1.5&pid=1.7'
            }


        }
    }

}).mount('#app5')