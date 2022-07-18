console.log('Vs ok', Vue);

Vue.config.devtools = true;

const root = new Vue({
    name: 'whatsapp',
    el: '#container',
    data: {
        currentContact: '0',
        currentMessageIndex: '',
        showMessageMenu: false,
        newMessage: '',
        search: '',
        user: {
            name: 'Chiara',
            avatar: '_io',
        },
        contacts: [
            {
              name: 'Michele',
              avatar: '_1',
              visible: true,
              messages: [{
                date: '10/01/2020 15:30:55',
                text: 'Hai portato a spasso il cane?',
                status: 'sent'
              },
              {
                date: '10/01/2020 15:50:00',
                text: 'Ricordati di dargli da mangiare',
                status: 'sent'
              },
              {
                date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received'
              }
              ],
            },
            {
              name: 'Fabio',
              avatar: '_2',
              visible: true,
              messages: [{
                date: '20/03/2020 16:30:00',
                text: 'Ciao come stai?',
                status: 'sent'
              },
              {
                date: '20/03/2020 16:30:55',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
              },
              {
                date: '20/03/2020 16:35:00',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'received'
              }
              ],
            },
            {
              name: 'Samuele',
              avatar: '_3',
              visible: true,
              messages: [{
                date: '28/03/2020 10:10:40',
                text: 'La Marianna va in campagna',
                status: 'received'
              },
              {
                date: '28/03/2020 10:20:10',
                text: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
              },
              {
                date: '28/03/2020 16:15:22',
                text: 'Ah scusa!',
                status: 'received'
              }
              ],
            },
            {
              name: 'Luisa',
              avatar: '_4',
              visible: true,
              messages: [{
                date: '10/01/2020 15:30:55',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
              },
              {
                date: '10/01/2020 15:50:00',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received'
              }
              ],
            },
          ]
    },
    computed: {
        filteredContacts(){
            return this.contacts.filter((contact) =>{
                return contact.name.toLowerCase().includes(this.search.toLowerCase());
            });
        },
    },
    methods: {
        getContactChat(i){
          this.currentContact = i;
        },      
        showMenu(index){
          this.showMessageMenu = !this.showMessageMenu;
          this.currentMessageIndex = index;
          console.log(this.showMessageMenu)
        },
        deleteMessage(index){
          this.contacts[this.currentContact].messages.splice(index, 1);
        },
        sendMessage(){
            this.contacts[this.currentContact].messages.push({date: '10/01/2020 15:30:55', text: this.newMessage, status: 'sent',});
            this.newMessage = '';
            setTimeout(this.receivedMessage, 2000);
        },
        receivedMessage() {
            this.contacts[this.currentContact].messages.push({date: '10/01/2020 15:30:55', text: 'Ok', status: 'received',});
        },
        lastMessageDate(contact) {
            return contact.messages[contact.messages.length - 1].date;
        },
        lastMessage(contact) {
            return contact.messages[contact.messages.length - 1].text;
        },
        lastMessageMaxLength(contact){
            const maxLength = 20;

            return this.lastMessage(contact).length > maxLength ? this.lastMessage(contact).substring(0, maxLength) + "..." : this.lastMessage(contact);
        },
    },
    
});

