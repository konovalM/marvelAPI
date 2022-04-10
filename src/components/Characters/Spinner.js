import spinner from '../../images/Spinner-2.gif'
import {Fragment} from "react";

const Spinner = () => {
    return (
        <Fragment>
            <div style={{display: 'flex', alignItems: 'center', boxShadow: '5px 5px 20px rgba(0, 0, 0, 0.25)'}}>
                <img src={spinner} alt="loading" style={{width: '100px', display: 'block', margin: '0 auto'}}/>
            </div>
        </Fragment>
    )
}

export default Spinner