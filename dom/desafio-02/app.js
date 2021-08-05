new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alerta1() {
            alert("Alerta 1")
        },
        pegarValor(valor) {
            this.valor = valor
        },
    }
})