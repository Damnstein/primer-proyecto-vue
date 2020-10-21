new Vue ({
    el: '#navVue',
    data () {
        return {
            showNav: false,
        }
    },
    methods: {
        toggleShowNav () {
            this.showNav = !this.showNav
            //FUNCION QUE CAMBIA EL VALOR A FALSE
        }
    }
});
