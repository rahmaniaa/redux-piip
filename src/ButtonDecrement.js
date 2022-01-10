import { connect } from 'react-redux';

import { decrementAction } from './action';

function ButtonDecrement({ counter, decrement }) {
    const decrementFn = () => {
        decrement(counter);
    }
    return (
        <div>
            B<br />
            {counter}<br />
            <button onClick={decrement}>-</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
};

const mapDispatchToProps = (dispatch) => ({
    decrement: (counter) => {
        if (counter > 0) {
            dispatch(decrementAction)
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonDecrement);