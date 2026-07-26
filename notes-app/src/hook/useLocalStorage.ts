import {
  useEffect,
  useState,
} from "react";



export function useLocalStorage<T>(

  key: string,

  initialValue: T

) {



  const [
    storedValue,
    setStoredValue,
  ] = useState<T>(() => {


    try {


      const item =
        localStorage.getItem(key);



      if (item) {


        return JSON.parse(item) as T;


      }



      return initialValue;



    } catch {


      return initialValue;


    }


  });







  useEffect(() => {


    try {


      localStorage.setItem(

        key,

        JSON.stringify(
          storedValue
        )

      );



    } catch {


      console.error(
        "Unable to save data to localStorage"
      );


    }



  }, [

    key,

    storedValue,

  ]);







  return [

    storedValue,

    setStoredValue,

  ] as const;


}