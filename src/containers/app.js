import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadApp } from 'actions/app';
import styles from './app.css';
import Menu from './menu';
import Main from './main';

type Props = {
    dispatch: () => void,
    loaded: boolean
}

export class AppContainer extends Component {
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
            <Menu/>
            <this.props.component/>
        </div>
    );
  }
}

function mapStateToProperties(state) {
  return {
    loaded: state.app.loaded
  };
}

export default connect(mapStateToProperties)(AppContainer);
