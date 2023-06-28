import { createContext , useState } from "react"

export const ArticleContext = createContext();

export function ArticleContextProvider ({children}){
    const [articles , setArticles] = useState([])
    
    function add(article){
        const cloneArticles = [...articles]
        cloneArticles.push(article)
        setArticles(cloneArticles);
    }
    return <ArticleContext.Provider value={{ articles , add }}>
        {children}
    </ArticleContext.Provider>
}