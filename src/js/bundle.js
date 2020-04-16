'use strict';

//card.js
var card = new Vue({
    el: '.card',
    data: {
        name: 'gabriel gripp',
        title: 'javascript developer & ux',
        image: './src/img/profile.jpg',
        about: 'vue  ❤️ javascript',
        links: {
            linkedin: 'https://www.linkedin.com/in/grippado/',
            github: 'https://github.com/grippado/',
            facebook: 'https://www.facebook.com/grippado/',

        },
        vue: `
            -------   MADE WItH VUE AND ❤️  -------
            ----------------------------------------
            ((((((((%%%%%%%%@@@@@@@@@%%%%%%%((((((((
            @@((((((((%%%%%%%@@@@@@@%%%%%%%((((((((@
            @@@((((((((%%%%%%%%@@@%%%%%%%%((((((((@@
            @@@@@((((((((%%%%%%%@%%%%%%%((((((((@@@@
            @@@@@@((((((((%%%%%%%%%%%%%((((((((@@@@@
            @@@@@@@@((((((((%%%%%%%%%((((((((@@@@@@@
            @@@@@@@@@((((((((%%%%%%%((((((((@@@@@@@@
            @@@@@@@@@@((((((((%%%%((((((((&@@@@@@@@@
            @@@@@@@@@@@@((((((((%((((((((@@@@@@@@@@@
            @@@@@@@@@@@@@(((((((((((((((@@@@@@@@@@@@
            @@@@@@@@@@@@@@@(((((((((((@@@@@@@@@@@@@@
            @@@@@@@@@@@@@@@@(((((((((@@@@@@@@@@@@@@@
            @@@@@@@@@@@@@@@@@@(((((@@@@@@@@@@@@@@@@@
            @@@@@@@@@@@@@@@@@@@(((@@@@@@@@@@@@@@@@@@
            ----------------------------------------
            ----------     gripp.tech     ----------
        `
    },
    mounted() {
        console.log(this.vue)
    },
});
//links.js
