Vue.createApp({
    data() {
        return {
            cursos: [],
            nombre: "",
            precio: 0,
            descripcion: "",
            cantidad:0,
            imagen: "",
            total: 0
            
        }
    },
    methods: {
        agregarCurso(){
            const curso = {
                nombre: this.nombre,
                precio: this.precio,
                descripcion: this.descripcion,
                cantidad: this.cantidad,
                imagen: this.imagen,
            }
            this.cursos.push(curso)
            this.total = this.total + curso.precio * curso.cantidad
            
        }

    },

}).mount("#app")