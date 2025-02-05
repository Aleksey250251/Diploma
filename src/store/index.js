import {createStore} from "vuex";

export default createStore({
    state: {
        isAuth: false,
        role: 0,
        particapants:[
            {
                id:1,
                firstName:'Андрей',
                middleName:'Васильевич',
                lastName:'Баранов',
                email:'lohah_agixu92@yahoo.com',
                role: 'administrator',
                affilation: 'БГТУ',
                lastSeen: '08.07.2023 12:33',
                wasInvitedBy: '2'
            },
            {
                id:2,
                firstName:'Дмитрий',
                middleName:'Петрович',
                lastName:'Васейкин',
                email:'mek_emodene14@hotmail.com',
                role: 'author',
                affilation: 'БГТУ',
                lastSeen: '08.07.2023 12:33',
                wasInvitedBy: '2'
            },
            {
                id:3,
                firstName:'Василиса',
                middleName:'Степановна',
                lastName:'Крупчатникова ',
                email:'bavut-emine85@gmail.com',
                role: 'administrator',
                affilation: 'БГТУ',
                lastSeen: '08.07.2023 12:33',
                wasInvitedBy: '2'
            },
            {
                id:4,
                firstName:'Владислав',
                middleName:'Владимирович',
                lastName:'Куртузанов',
                email:'morekav-owu21@mail.com',
                role: 'PC member',
                affilation: 'БГТУ',
                lastSeen: '08.07.2023 12:33',
                wasInvitedBy: '2'
            },
            {
                id:6,
                firstName:'Афанасий',
                middleName:'Афанасиевич',
                lastName:'Языков',
                email:'hihero-rahe32@gmail.com',
                role: 'author',
                affilation: 'БГТУ',
                lastSeen: '08.07.2023 12:33',
                wasInvitedBy: '2'
            },
            {
                id:9,
                firstName:'Андрей',
                middleName:'Васильевич',
                lastName:'Баранов',
                email:'heya-temisu27@yahoo.com',
                role: 'administrator',
                affilation: 'БГТУ',
                lastSeen: '08.07.2023 12:33',
                wasInvitedBy: '2'
            },
            {
                id:10,
                firstName:'Ольга',
                middleName:'Васильевна',
                lastName:'Опроксина',
                email:'lohah_agixu92@yahoo.com',
                role: 'PC member',
                affilation: 'БГТУ',
                lastSeen: '08.07.2023 12:33',
                wasInvitedBy: '2'
            },
            {
                id:12,
                firstName:'Петр',
                middleName:'Денисович',
                lastName:'Валентанов',
                email:'mek_emodene14@hotmail.com',
                role: 'author',
                affilation: 'БГТУ',
                lastSeen: '08.07.2023 12:33',
                wasInvitedBy: '13'
            },
            {
                id:13,
                firstName:'Дмитрий',
                middleName:'Сергеевич',
                lastName:'Хомяков',
                email:'bavut-emine85@gmail.com',
                role: 'PC member',
                affilation: 'БГТУ',
                lastSeen: '08.07.2023 12:33',
                wasInvitedBy: '31'
            },
            {
                id:14,
                firstName:'Василий',
                middleName:'Андреевич',
                lastName:'Каштанов',
                email:'morekav-owu21@mail.com',
                role: 'administrator',
                affilation: 'БГТУ',
                lastSeen: '08.07.2023 12:33',
                wasInvitedBy: '24'
            },
            {
                id:16,
                firstName:'Максим',
                middleName:'Бахрузович',
                lastName:'Шеинов',
                email:'hihero-rahe32@gmail.com',
                role: 'PC member',
                affilation: 'БГТУ',
                lastSeen: '08.07.2023 12:33',
                wasInvitedBy: '2'
            },
            {
                id:19,
                firstName:'Екатерина',
                middleName:'Васильевна',
                lastName:'Гришович',
                email:'heya-temisu27@yahoo.com',
                role: 'author',
                affilation: 'БГТУ',
                lastSeen: '08.07.2023 12:33',
                wasInvitedBy: '24'
            },
            {
                id:21,
                firstName:'Измаил',
                middleName:'Станиславович',
                lastName:'Устов',
                email:'lohah_agixu92@yahoo.com',
                role: 'administrator',
                affilation: 'БГТУ',
                lastSeen: '08.07.2023 12:33',
                wasInvitedBy: '2'
            },
            {
                id:22,
                firstName:'Андрей',
                middleName:'Максимович',
                lastName:'Молчанов',
                email:'mek_emodene14@hotmail.com',
                role: 'PC member',
                affilation: 'БГТУ',
                lastSeen: '08.07.2023 12:33',
                wasInvitedBy: '2'
            },
            {
                id:23,
                firstName:'Тиль',
                middleName:'Денисович',
                lastName:'Линдеман',
                email:'bavut-emine85@gmail.com',
                role: 'administrator',
                affilation: 'БГТУ',
                lastSeen: '08.07.2023 12:33',
                wasInvitedBy: '24'
            },
            {
                id:24,
                firstName:'Станислав',
                middleName:'Львович',
                lastName:'Петров',
                email:'morekav-owu21@mail.com',
                role: 'administrator',
                affilation: 'БГТУ',
                lastSeen: '08.07.2023 12:33',
                wasInvitedBy: '0'
            },
            {
                id:26,
                firstName:'Евгений',
                middleName:'Михайлович',
                lastName:'Беркутов',
                email:'hihero-rahe32@gmail.com',
                role: 'administrator',
                affilation: 'БГТУ',
                lastSeen: '08.07.2023 12:33',
                wasInvitedBy: '0'
            },
            {
                id:29,
                firstName:'Константин',
                middleName:'Константинович',
                lastName:'Рассказов',
                email:'heya-temisu27@yahoo.com',
                role: 'PC member',
                affilation: 'БГТУ',
                lastSeen: '08.07.2023 12:33',
                wasInvitedBy: '31'
            },
            {
                id:31,
                firstName:'Сергей',
                middleName:'Сергеевич',
                lastName:'Силкин',
                email:'lohah_agixu92@yahoo.com',
                role: 'author',
                affilation: 'БГТУ',
                lastSeen: '08.07.2023 12:33',
                wasInvitedBy: '2'
            },
            {
                id:32,
                firstName:'Дмитрий',
                middleName:'Андреевич',
                lastName:'Шеинов',
                email:'mek_emodene14@hotmail.com',
                role: 'PC member',
                affilation: 'БГТУ',
                lastSeen: '08.07.2023 12:33',
                wasInvitedBy: '2'
            },
            {
                id:33,
                firstName:'Лионид',
                middleName:'Германович',
                lastName:'Хомич',
                email:'bavut-emine85@gmail.com',
                role: 'author',
                affilation: 'БГТУ',
                lastSeen: '08.07.2023 12:33',
                wasInvitedBy: '6'
            },
            {
                id:34,
                firstName:'Иван',
                middleName:'Иванович',
                lastName:'Иванов',
                email:'morekav-owu21@mail.com',
                role: 'administrator',
                affilation: 'БГТУ',
                lastSeen: '08.07.2023 12:33',
                wasInvitedBy: '2'
            },
            {
                id:36,
                firstName:'Вадим',
                middleName:'Вадимович',
                lastName:'Гучков',
                email:'hihero-rahe32@gmail.com',
                role: 'administrator',
                affilation: 'БГТУ',
                lastSeen: '08.07.2023 12:33',
                wasInvitedBy: '2'
            },
            {
                id:39,
                firstName:'Зинаида',
                middleName:'Денисовна',
                lastName:'Нарышникова',
                email:'heya-temisu27@yahoo.com',
                role: 'PC member',
                affilation: 'БГТУ',
                lastSeen: '08.07.2023 12:33',
                wasInvitedBy: '21'
            },
        ],
        currentUserID: "",
        currentConfID: "",
    },
    getters:{
        getParticapants(state){
            return state.particapants;
        },
        getCurrentUserID(state){
            return state.currentUserID;
        },
    },
    mutations: {
        login(state, id){
            this.state.isAuth = true;
            this.state.currentUserID = id;
        },
        logout(state){
            this.state.isAuth = false;
            this.state.currentUserID = "";
            this.state.currentConfID = "";
            document.cookie = 'auth=;expires=Thu, 01 Jan 1970 00:00:01 GMT;'
        }
    },
    modules:{

    },
  })