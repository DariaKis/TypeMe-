import React, {useState} from 'react';
import {useEffect} from "react";

function highlightText(text, index, highlightError) {

    let html;
    if (highlightError) {

        html = `<span class="success">${text.slice(0, index)}</span><span class="error">${text.slice(index, index + 1)}</span>${text.slice(index + 1)}`;
    } else {
        html = `<span class="success">${text.slice(0, index)}</span>${text.slice(index)}`;
    }

    return {__html: html};
}

const ViewText = () => {

    const [counter, setCounter] = useState(0);
    const [startTime, setStartTime] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [flag, setFlag]=useState(false);


    function handleChange(e) {

        if (templateText[counter] === e.key) {
            setCounter(counter => counter + 1);
            setFlag(flag);
            if (counter === 1) {
                setStartTime(Date.now())
            } else {
                if (counter === templateText.length - 1) {
                    setCurrentTime(Math.round(templateText.length / (Date.now() - startTime) * 60000))
                }
            }

        }else {
           setFlag(true)
        }
    }



    useEffect(() => {
        window.addEventListener('keypress', handleChange);
        return () => window.removeEventListener('keypress', handleChange);
    }, [handleChange]);

    let text = [];
    const [templateText, setTemplateText] = useState('');

    async function getText() {
        text = await fetch('https://baconipsum.com/api/?type=all-meat&sentences=5&start-with-lorem=1')
            .then(res => res.json())
            .then(data => text = data[0])
            .then(() => setTemplateText(text));
        return text
    }


    useEffect(() => {
        getText();
    }, []);
    return (
        <div>
            <div className="result_test">
                <h2>Ваш результат, зн/мин:</h2>
                <h2>
                    {currentTime}
                </h2>
            </div>
            <div className="random_txt" dangerouslySetInnerHTML={highlightText(templateText, counter, flag )}></div>
            <button className="btn_txt" onClick={getText}>Попробовать снова!</button>
        </div>)

};

export default ViewText;