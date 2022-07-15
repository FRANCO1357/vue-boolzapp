console.log('Vs ok', Vue);

Vue.config.devtools = true;

const root = new Vue({
    name: 'whatsapp',
    el: '#container',
    data: {
        user: {
            name: 'Nome Utente',
            avatar: '_io'
        },
        contacts: [
        {
            name: 'Michele',
            avatar: '_1',
        },
        {
            name: 'Fabio',
            avatar: '_2',
        },
        {
            name: 'Samuele',
            avatar: '_3',
        },
        {
            name: 'Luisa',
            avatar: '_4',
        },
        ]
    },
    
});

