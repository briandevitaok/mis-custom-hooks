import { useState } from "react"





//Nuestro customHooks se encarga de incrementar, decrementar, y resetear.
export const useCounter = (initialValue=10) => {
    
    const [counter, setCounter] = useState(initialValue)


    const increment = () => {  //Funcion que se encarga de incrementar.
        setCounter(counter +1)
    }

    const decrement = () => {  //Funcion que se encarga de decrementar.
        if ( counter == 0) return;
        setCounter(counter - 1)
    }

    const reset = () => {    //Funcion que se encarga de resetear.
        setCounter( initialValue)
    }

    return {   //Los customHooks son una funcion que devuelve algo, en este caso un objecto
        //Donde le pasamos cada una de las funciones.
        counter,
        increment,
        decrement,
        reset
    }
}
