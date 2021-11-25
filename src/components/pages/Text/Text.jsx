import React, {useState}  from 'react';
import ViewText from "./ViewText";


function Text(props) {

    return (
        <div className="txt_cover">
            <div className="txt_title">
                <h2>Type me!</h2>
            </div>
            <div >
                <ViewText/>
            </div>

        </div>

    );
}

export default Text;
