new Vue({
    el: '#desafio',
    data: {
        nome: 'Robinson Silva',
        idade: 24,
        image: 'https://avatars.githubusercontent.com/u/25044919'
    },
    methods: {
        idadeMultiplicada: function() {
            return this.idade * 3
        },
        random: function() {
            return Math.random()
        },
    }
})