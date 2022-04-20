import React, {Component} from 'react';
import Error from "../Characters/Error";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false
        }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error)
        this.setState({
            error: true
        })
    }

    render() {
        const {error} = this.state
        if (error){
            return(
                <div>
                    <Error/>
                </div>
            )
        }
        return (
            this.props.children
        )
    }
}


export default ErrorBoundary;