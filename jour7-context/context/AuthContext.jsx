import {createContext , useState} from "react"
// createContext => permet de pouvoir partager useState sur plusieurs composants (quelquesoit leur position)
// exporter le context 
export const AuthContext = createContext();
// un composant qui stocke les données  // Provider => Fournisseur 
export function AuthContextProvider({children}){ // {children} // ça doit être écrit
    const [profil, setProfil] = useState({
        email : "toto@yahoo.fr",
        password : "azerty",
        isLogged : false 
    })
    function login(){}
    function logout(){}
    return <AuthContext.Provider value={{ profil , login , logout }}>
        {children}
    </AuthContext.Provider>
}
// cp