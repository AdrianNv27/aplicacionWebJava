Vue.createApp({
    data() {
        return {
            pokemon: []

        }
    },
    methods: {
        async getPokemon(){
            this.pokemon =[];
            for( i=1; i < 500; i++) {
                const val = Math.floor(Math.random() *  50)
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + val,{
                    method: 'GET'
                })
                const dataPukemon = await response.json();
                this.pokemon.push(dataPukemon)
        }
        }
    },
}
).mount('#Parcial2')