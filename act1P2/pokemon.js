Vue.createApp({
    data() {
        return {
            pokemon: null

        }
    },
    methods: {
        //POST CREAR
        //GET OBTENER
        //PUT MODIFICAR
        //DELETE ELIMINAR
        async getpokemon() {
            const valor = Math.floor(Math.random() * 905);
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + valor, {
                method: 'GET'
            }); 
            const dataPokemon = await response.json();
            this.pokemon = dataPokemon;
        }
    }
}).mount('#Parcial2')