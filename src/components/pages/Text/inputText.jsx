import React from 'react';
import MyButton from "../../UI/button/MyButton";
import {useState} from "react";


const InputText = (props) => {
    const [ input, setInput] = useState('');

    return (
        <div>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} />
            <button onSearch={() => props.onChange(setInput)}>Результат</button>
        </div>
    );
};


// function InputText() {
//
//     const [addText, setAddText]=useState('');
//     const txt = Object.values(addText).map(([value]) => ({addText}));
//
//     function add(event){
//         setAddText();
//     }
//
//
//     console.log(add);
//     return (
//         <div>
//
//             <input className="add_text"
//                    type='text'
//                    value={addText}
//                    onChange={event => setAddText(event.target.addText)}/>
//
//
//         </div>
//
//     );
// }

export default InputText;