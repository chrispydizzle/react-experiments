import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadApp} from 'actions/app';
import styles from './main.css';

type
Props = {
    dispatch: () => void,
    loaded: boolean
}

export class main extends Component {
    componentDidMount() {
        this.props.dispatch(loadApp());
    }

    props: Props;

    render() {
        if (!this.props.loaded) {
            return null;
        }

        return (
            <div className={styles.container}>
                {this.props}
            </div>
        );
    }
}

function mapStateToProperties(state) {
    return {
        loaded: state.app.loaded,
        text: state.app.text
    };
}

export default connect(mapStateToProperties)(main);
