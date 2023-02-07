Vue.createApp({
    data(){
        return{ 
            amiibos: []

        }
    },
    methods: {
        async obtener() {
            const responde = await fetch('https://amiiboapi.com/api/amiibo/',{
                method: 'GET'
            });

            const data = await responde.json();
            this.amiibos = data.amiibo;
        }
    },
}).mount('#app6')