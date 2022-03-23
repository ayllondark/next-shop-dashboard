// Aqui iniciamos la logica d nuestra aplicacion
import react, { useState, useContext, createContext } from "react";
import Cookie from 'js-cookie';
import axios from 'axios';
import endPoints from '@services/api/';  // Traemos las opciones de url de nuestra api

const AuthContext = createContext();

export function ProviderAuth({ children }) {
    const auth = useProviderAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
    return useContext(AuthContext);
};

// Creamos nuestra logica particular
function useProviderAuth() {
    const [user, setUser] = useState(null);

    const signIn = async(email, password) => { // Podremos retornar el usuario y poder habe rleido el token
        const options = {
            Headers: {
                accept: '*/*',  // K va a trabajar de forma correcta con todas las solicitudes
                'Content-Type': 'application/json',
            },
        };
        //Leer un acces token q nos regresa desde la informacion del servidor
        // Cuando tengamos una autorizacion correcta vamos a recibir esta informacion
        const { data: varaccess_token } = await axios.post(endPoints.auth.login, {email,password}, options);
        //console.log(access_token);
        if(varaccess_token) {
            const token = varaccess_token.access_token;
            Cookie.set('token', token, { expires: 5 }); // Si existe access_token lo agregamos como cookies

            axios.defaults.headers.Authorization = `Bearer ${token}`; // Enviamosla informacion necesaria y agregandola a axios para que pueda definir este valor por defecto por el valor que ahora queremos hacer
            const {data: user} = await axios.get(endPoints.auth.profile);
            //console.log(user);
            setUser(user);
        }
    };

    const logout = () => {
        Cookie.remove('token');
        setUser(null);
        delete axios.defaults.headers.Authorization;
        window.location.href = '/login';
    };

    return {
        user,
        signIn,
        logout,
    };
};