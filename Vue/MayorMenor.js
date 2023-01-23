Vue.createApp({
    data() {
        return {
            edad: false

        }
    },
    methods: {
        investigar(){
            edad = prompt("Ingresa tu edad perro")
            if (edad<=18){
                this.edad
            }
            else if (edad>18)
            this.edad
        
        }
    },
}).mount('#app')