Vue.createApp({
    data() {
        return {
            producto:'',
            carrito:[
                'cebolla',
                'tomates',
                'repollo',
                'brocoli'
            ]

        }

    },
    methods: {
        borrar(){
            this.carrito=[]           
        },
        agregar(){
            this.carrito.push(this.producto),
            this.producto=''
        }
    },
},).mount("#app2")