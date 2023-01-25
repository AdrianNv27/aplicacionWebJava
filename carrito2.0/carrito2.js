Vue.createApp({
    data() {
        return {
            productos: [],
            nombre:'',
            precio:'',
            cantidad:''

        }
    },
    methods: {
        agregar() {
            const producto = {
                nombre:this.nombre,
                precio:this.precio,
                cantidad:this.cantidad
            }
            this.productos.push(producto);
        }
    },
}).mount('#app2')