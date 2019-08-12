export const greetingMessage = {
    computed:{
        greetingMessage(){
            let message = 'welcome to the app, '
            return message + this.AdminUserName + '!'
        }
    }
}