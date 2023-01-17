const localDate = localStorage.getItem('token')
if(!localDate){
    location.replace('login.html')
}