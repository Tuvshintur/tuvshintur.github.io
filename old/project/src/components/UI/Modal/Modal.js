import React, { Component } from 'react';

import styles from './Modal.module.css';
import Backdrop from '../BackDrop/BackDrop';

class Modal extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render() {
        const { show, modalClosed } = this.props;
        return (
            <React.Fragment>
                <Backdrop show={show} clicked={modalClosed} />
                <div
                    className={styles.Modal}
                    style={{
                        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: show ? '1' : '0',
                    }}
                >
                    {this.props.children}
                </div>
            </React.Fragment>
        );
    }
}

export default Modal;
