import { createContext, useContext, useEffect,useState } from "react";


const AppContext = createContext();
export const url=import.meta.env.VITE_API_KEY;
const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [isError, setisError] = useState({ show:"false", msg:" "});
    const [query, setquery] = useState("dragon");
    //getting all ovies from url 
    const getMovies = async (uri) => {
       setLoading(true);
        try {
            const res = await fetch(uri);
            const data = await res.json();
            if(data.Response === "True"){
                setMovie(data.Search);
                setLoading(false);
                setisError({show:"false"})
            }else{
              setisError({
                show:"true",
                msg:data.Error,
              })
              setLoading(false)
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
       let timer= setTimeout(() => {
            getMovies(`${url}&s=${query}`) 
        },800);
       return ()=>clearTimeout(timer);
    }, [query]);

    return <AppContext.Provider value={{isError,movie,loading ,query, setquery}}>
        {children}
    </AppContext.Provider>
}
const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };