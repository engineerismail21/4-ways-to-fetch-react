import { Fragment, useEffect, useState } from "react";
import axios from "axios";

export default function Quote(){
    const [quote, setQuote] = useState([]);

    useEffect(() => {
        fetchQuote();
    }, []);

    const fetchQuote = () => {
        axios.get('https://api.quotable.io/random').then(res => {
            setQuote(res.data);
        });
    }

    return(        
        <div>
            <Fragment>
                <div>{quote?.content}</div>
            </Fragment>
        </div>
    )
}