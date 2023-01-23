Vue.createApp({
    data() {
        return {
            edad:'',
            resultado:''
        }
    },
    methods: {
        calcularEdad() {
            if(this.edad >= 18){
                this.resultado = 'Eres mayor de edad pai';
            }else {
                this.resultado = 'Eres menor de edad pai';
            }
            }
            
        }
    },
).mount("#app2")