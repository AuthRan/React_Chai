import PropTypes from 'prop-types';

function Details (props) {
    return(
        (props.logIn) ? <h4>Welcome {props.name}</h4> :
                        <h4>Please log in first</h4>
    )
}
Details.PropTypes = {
    name : PropTypes.string,
    logIn : PropTypes.bool,
}
export default Details