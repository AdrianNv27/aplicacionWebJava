Vue.createApp({
    data() {
        return {
            contador: 0
        }
    },
    methods: {
        incrementar() {
            this.contador++;
        },
        decrementar() {
            if(this.contador>0){
                this.contador--;
            }
        }
    },
    
}).mount('#app');