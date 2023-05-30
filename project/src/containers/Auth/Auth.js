import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate  } from 'react-router-dom';

import styles from './Auth.module.css';
import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as actions from '../../store/action';
import { updateObject, checkValidity } from '../../utils/utility';

class Auth extends Component {
  state = {
    form: {
      email: {
        label: 'E-mail',
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Email',
        },
        errormessage: 'Please Enter Valid email',
        value: '',
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        label: 'Password',
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password',
        },
        errormessage: 'Please Enter Valid password',
        value: '',
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
  };

  inputChangedHandler = (event, elementName) => {
    const { form } = this.state;

    const newForm = updateObject(form, {
      [elementName]: updateObject(form[elementName], {
        value: event.target.value,
        valid: checkValidity(event.target.value, form[elementName].validation),
        touched: true,
      }),
    });

    this.setState({ form: newForm });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const email = this.state.form.email.value;
    const password = this.state.form.password.value;

    this.props.onLogin(email, password);
  };

  componentDidUpdate() {
    if (this.props.authRedirectPath !== '/') {
      this.props.onSetAuthRedirectPath();
    }
  }

  render() {
    const { form } = this.state;
    const formArray = [];

    for (let key in form) {
      formArray.push({
        id: key,
        config: form[key],
      });
    }

    let formElements = formArray.map((element) => {
      return (
        <Input
          key={element.id}
          label={element.config.label}
          elementType={element.config.elementType}
          elementConfig={element.config.elementConfig}
          value={element.config.value}
          invalid={!element.config.valid}
          shouldValidate={element.config.validation}
          errormessage={element.config.errormessage}
          touched={element.config.touched}
          changed={(event) => this.inputChangedHandler(event, element.id)}
        />
      );
    });

    if (this.props.loading) {
      formElements = <Spinner />;
    }

    let errorMsg = null;
    if (this.props.error) {
      errorMsg = <p>{this.props.error.message}</p>;
    }

    let authRedirect = null;
    if (this.props.isAuth) {
      authRedirect = <Navigate to={this.props.authRedirectPath} />;
    }

    return (
      <div className={styles.Auth}>
        {authRedirect}
        {errorMsg}
        <form onSubmit={this.onSubmit}>
          {formElements}
          <div className={styles.Center}>
            <Button type="Submit">Login</Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.auth.message,
    isAuth: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (email, password) => dispatch(actions.doLogin(email, password)),
    onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/')),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
