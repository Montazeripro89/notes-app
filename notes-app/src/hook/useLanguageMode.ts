import {
  useEffect,
  useState,
} from "react";

const STORAGE_KEY = "notes-behavior";

export function useLanguageMode() {

  const [
    behavior,
    setBehavior,
  ] = useState<boolean>(() => {

    const saved =
      localStorage.getItem(
        STORAGE_KEY
      );

    if (saved === null) {

      return false;

    }

    return saved === "true";

  });




  useEffect(() => {

    localStorage.setItem(

      STORAGE_KEY,

      String(behavior)

    );

  }, [

    behavior,

  ]);





  const handleBehavior = () => {

    setBehavior(

      previousBehavior =>

        !previousBehavior

    );

  };





  return {

    behavior,

    handleBehavior,

  };

}