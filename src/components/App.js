// create your App component here
 
import React, {useEffect, useState} from "react";

function App(){
    const [dogImage, setdoImage] = useState([]);
    const [status, setstatus] = useState(false);


    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) =>{
            setdoImage(data.message)
            setstatus(true)
        })

        


    }, []);
    if(!status)
         return <p>Loading...</p>

    return (
        <img src={dogImage} alt="A Random Dog"></img>
    )
}

export default App