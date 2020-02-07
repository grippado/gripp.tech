'use strict';

//card.js
var card = new Vue({
    el: '.card',
    data: {
        name: 'gabriel gripp',
        title: 'developer',
        image: './src/img/profile.jpg',
        about: 'javascript ❤️',
        links: {
            linkedin: 'https://www.linkedin.com/in/grippado/',
            github: 'https://github.com/grippado/',
            facebook: 'https://www.facebook.com/grippado/',

        }
    }
});
//links.js