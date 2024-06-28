<template>
    <h1>Это вы! User = {{ this.id }}</h1>
</template>

<script>
import axios from 'axios';


export default {
    
    components:{
    },
    props:{
        id: String,
    },
    methods: {
        getCookie(name) {
            let matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        },
        async getProfile() {
            const response = await axios.get('api/users', {
                method: 'GET',
                headers: {
                    Authorization: this.getCookie('auth')
                }
            })
            return response
        },
        mounted() {
            debugger
            let response = this.getProfile()
            response.then(response => {
                console.log(response);
            })
        }   
    }
}
</script>

<style scoped>
h1{
    margin: 25px 0 25px 6px;
    
    text-align: left;
}
</style>