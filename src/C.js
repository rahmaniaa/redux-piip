import { useState }from 'react';
import { connect } from 'react-redux'

import { setNumberAction } from './action';

const C = ({ counter, setNumber }) => {
    const [numberInput, setNumberInput ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setNumber(numberInput);
        setNumberAction('');
    }

    return (
        <div>
            C<br />
            {counter}<br />
            <form onSubmit={handleSubmit}>
                <input value={numberInput} onChange={(e) => setNumberInput(e.target.value)}/>
                <button type="submit" value="Submit">set</button>
            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({
    counter: state.counter
});

const mapDispatchToProps = (dispatch) => ({
    setNumber: (number) => { dispatch(setNumberAction(number)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(C);