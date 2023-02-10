Vue.createApp({
    data() {
        return {
            cursos: [],
            nombre: '',
            descripcion: '',
            precio: '',
            cantidad: '',
            Img:'',
            
        }
    },
    methods: {
        agregar() {

            const curso = {
                nombre:this.nombre,
                descripcion:this.descripcion,
                precio:this.precio,
                cantidad:this.cantidad,
                Img:this.Img,

            }
            this.cursos.push(curso);
        
        }
    }
}).mount('#examen')