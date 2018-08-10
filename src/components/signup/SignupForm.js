import React from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: '',
            errors: {},
            isLoading: false,
            invalid: false
        }

    // Explicit event subscription
    this.onSubmit = this.onSubmit.bind(this);
    }

    // Implicit event subscription
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
      e.preventDefault();
      this.setState({ errors: {}, isLoading: true});
      this.props.userSignupRequest(this.state).then(
          () => {},
          (error) =>  this.setState({ errors: error.response.data, isLoading: false })
      );
    }

    render() {
      const { errors } = this.state;
      const options = map(timezones, (val, key) => 
        <option key={val} value={val}>{key}</option>
      );

      return (
        <form onSubmit={this.onSubmit}>
            <h1>Join our community!</h1>

            <div className={classnames("form-group", {'has-error': errors.username})}>
                <label className="control-label">Username</label>
                <input
                  value={this.state.username}
                  onChange={this.onChange}
                  type="text"
                  name="username"
                  className="form-control"/>
                  {errors.username && <span className="help-block">{errors.username}</span>}
            </div>
            
            <div className={classnames("form-group", {'has-error': errors.email})}>
                <label className="control-label">Email</label>
                <input
                  value={this.state.Email}
                  onChange={this.onChange}
                  type="text"
                  name="email"
                  className="form-control"/>
                  {errors.email && <span className="help-block">{errors.email}</span>}
            </div>

            <div className={classnames("form-group", {'has-error': errors.password})}>
                <label className="control-label">Password</label>
                <input
                  value={this.state.Password}
                  onChange={this.onChange}
                  type="text"
                  name="password"
                  className="form-control"/>
                  {errors.password && <span className="help-block">{errors.password}</span>}
            </div>

            <div className={classnames("form-group", {'has-error': errors.passwordConfirmation})}>
                <label className="control-label">Password Confirmation</label>
                <input
                  value={this.state.passwordConfirmation}
                  onChange={this.onChange}
                  type="text"
                  name="passwordConfirmation"
                  className="form-control"/>
                  {errors.passwordConfirmation && <span className="help-block">{errors.passwordConfirmation}</span>}
            </div>

            <div className={classnames("form-group", {'has-error': errors.timezone})}>
                <label className="control-label">Timezone</label>
                <select
                    className="form-control"
                    name="timezone"
                    onChange={this.onChange}
                    value={this.state.timezone}>
                    <option value="" disabled>Choose Your Timezone</option>
                    {options}
                </select>
                {errors.timezone && <span className="help-block">{errors.timezone}</span>}
            </div>

            <div className="form-group">
              <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
                Sign up
              </button>
            </div>
        </form>
        )
    };
}

SignupForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
}

export default SignupForm;