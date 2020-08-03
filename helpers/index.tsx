export const getCurrentUser = () => {
    if(localStorage.getItem('User')){
        return localStorage.getItem('User');
    }else{
        return null;
    }
}