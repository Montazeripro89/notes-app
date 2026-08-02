import {
  useState,
} from "react";

export function useLanguageMode() {
    const [behavior , setBehavior] = useState(false);
    
    const handleBuehavior = () => {
        setBehavior(!behavior)
    }

    return{
        behavior,
        handleBuehavior
    }
}