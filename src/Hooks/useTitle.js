import { useEffect } from "react";


const useTitle = (title) => {
    useEffect(()=>{
     document.title = `${title} - sellArt`;
    }, [title])

    }

export default useTitle;