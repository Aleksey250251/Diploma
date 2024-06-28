<template>
    <div class = "auth-buttons">
        <button type='button' v-on:click="loginTo">Войти</button>
        <router-link to="/reg">
            <a href="">Нет аккаунта? Зарегистрируйтесь!</a>
        </router-link>
    </div>
</template>

<script>
    import axios from 'axios'
export default {
    props:{
        login: String,
        password: String,
    },
    methods:{
        getCookie(name) {
            let matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        },
        async fetchLogin() {
            try {
                const form = new FormData();
                form.append('login', this.login)
                form.append('password', this.password)
                
                let auth_str = this.getCookie('auth')
                
                if(auth_str == undefined) {
                    
                    auth_str = ''

                    const response = await axios.post(
                        'http://localhost:5152/api/users/login',
                        form,
                        {
                            headers: {
                                'Authorization': auth_str
                            }
                        }
                    )
                    if(response.status === 200)
                        document.cookie = `auth=${response.data.id} ${response.data.hash};`

                }
            }
            catch(e) {
                console.log('Error fetching Posts...', e.message)
            }
        },
        async getData(auth_str) {
            try {
                const response = await axios.get('http://localhost:5152/api/users',
                    {
                        headers: {
                            Authorization: auth_str
                        }
                    }
                );
                console.log(response);
                return response
            } catch (err) {
                console.log(err);
            }
        },
        loginTo(){
            this.fetchLogin()

            let auth_str=this.getCookie('auth')
            
            let id = -1

            if(auth_str == undefined) 
                this.$router.push(`/auth`)
            else {
                debugger
                let response = this.getData(auth_str)
                response.then((response) => {
                    debugger
                    id = response.data.id
                    console.log(id, response);

                    if(id === -1) {
                        debugger
                        this.$router.push(`/`);
                    }
                    else {
                        debugger
                        this.$store.commit('login', id)
                        this.$router.push(`/profile/${id}`);
                    }
                })
                
                
            }
        }
    }
}
</script>

<style scoped>
.auth-buttons{
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    align-items: center;

    margin-top:35px;
}
button{
    width: 200px;
    height: 30px;

    border: 1px solid gray;
    border-radius: 15px;

    cursor:pointer;
}
a{
    margin-top:15px;
    font-size: 0.9em;
    font-weight: 400;
}
</style>