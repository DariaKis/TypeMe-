// import React, {useState} from 'react';
// import InputText from "./inputText";
// import MyButton from "../../UI/button/MyButton";
// import {useEffect} from "react";
// import * as e from "web-vitals";
//
//
// const ViewText = () => {
//     const [userText, setUserText] = useState("");
//     const [counter, setCounter]=useState(0);
//     const [startTime, setStartTime]=useState(0);
//     const [currentTime, setCurrentTime]=useState(0);
//     function handleChange(e) {
//         if (templateText[counter] === e.target.value[counter]) {
//             setUserText(e.target.value);
//             setCounter(counter => counter + 1);
//             if (counter === 1) {
//                 setStartTime(Date.now())
//             }
//             else{ if (counter === templateText.length - 1) {
//                 setCurrentTime(Math.round(templateText.length / (Date.now()- startTime) * 60000))
//             }}
//         }
//     }
//
//     let text = [];
//     const [templateText, setTemplateText] = useState('');
//     async function getText() {
//         text = await fetch('https://baconipsum.com/api/?type=all-meat&sentences=5&start-with-lorem=1')
//             .then(res => res.json())
//             .then(data => text = data[0])
//             .then(() => setTemplateText (text));
//         return text
//     }
//     useEffect(() => {
//         getText();
//     }, []);
//     return (
//         <div>
//             <textarea className="own_input" onChange={handleChange}   value={userText} ></textarea>
//             <div>
//                 <h2>
//                     {currentTime}
//                 </h2>
//             </div>
//             {/*<input className="own_input" onChange={handleChange}   value={key} type="text" />*/}
//             <div className="random_txt">{templateText}</div>
//             <button className="btn_txt" onClick={getText}>
//                 Try again!
//             </button>
//         </div>
//     );
// };
//
// export default ViewText;