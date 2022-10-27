import { useEffect, useState } from "react"


//Este hook lo que hace es recibir una url, hace un fetch y devuelve la informacion
export const useFetch = (url) => {

    const [state, setState] = useState({  ///Por defecto debemos mandarle data, isLoading, hasError
        data: null,
        isLoading: true,
        hasError: null,
    })



    const getFecth = async () => {  //Haga hace la peticion
        const resp = await fetch(url);
        const data = await resp.json();
        setState({
            data, 
            isLoading: false,
            hasError:null
        })
    }

    useEffect(() => {  
        getFecth();

    }, [url]) //Dependencia, cada vez que la url cambie se dispara el useeffect
    


  return { //Exponemos la informacion para usarla en el componente
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  };
}
