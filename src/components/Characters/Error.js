import error from '../../images/error.gif'

const Error = () => {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '5px 5px 20px rgba(0, 0, 0, 0.25)'}}>
            <img src={error} alt="error" style={{width: '200px'}}/>
        </div>
    )
}

export default Error