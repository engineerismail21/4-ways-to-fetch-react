import { Fragment, useEffect, useState } from "react";

export default function Quote (){
    const [quote, setQuote] = useState([]);

    useEffect(() => {
        fetchQuote();
    }, []);

    const fetchQuote = async () => {
        const res = await fetch('https://api.quotable.io/random');
        const data = await res.json();
        setQuote(data);
    }

    return(
        <div>
            <Fragment>
                <div>{quote?.content}</div>
            </Fragment>
        </div>
    )
}