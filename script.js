new Vue({
    el: '#root',
    data: {
        nuovaAttivita: '',
        attivitaLista: []
    },
    methods: {
        aggiungiAttivita() {
            if (this.nuovaAttivita !== '') {
                this.attivitaLista.push({ testo: this.nuovaAttivita, svolta: false });
                this.nuovaAttivita = '';
            }
        },
        eliminaAttivita(index) {
            this.attivitaLista.splice(index, 1);
        },
        eliminaTutteAttivita() {
            this.attivitaLista = [];
        }
    }
});