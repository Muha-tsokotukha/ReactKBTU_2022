import {users} from './logins';

export const checkPassword = ({name, password})=> {
    const user = users.find(item=> item.name === name && item.password ===password  );

    if(user?.isAdmin)document.cookie = 'admin=true';
    else document.cookie = 'user=true';

    return user ? true : false;
}

export const logout = ()=> {
    document.cookie =  "user=; Max-Age=-99999999; path=/";
    document.cookie =  "admin=; Max-Age=-99999999; path=/";
}