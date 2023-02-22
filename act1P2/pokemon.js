Vue.createApp({
    data() {
        return {
            pokemones: [],
            loading: null,
            limite: 10,
            pokemonData: null

        }
    },
    mounted() {
        this.getPokemon()

    },
    methods: {
        async getPokemon() {
            this.pokemones = []
            this.loading = true;
            var i = 1;
            while (i <= this.limite) {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + i, {
                    method: 'GET'
                });
                const pokemon = await response.json();
                this.pokemones.push(pokemon);
                i++;
            }
            this.loading = false;
        },
    },
    watch: {
        limite() {
            this.getPokemon();
        }
    }
}).mount('#Parcial2')