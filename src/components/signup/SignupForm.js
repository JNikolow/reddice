import React from 'react'
import timezones from '../../data/timezones'
import map from 'lodash/map'
import axios from 'axios'

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
      axios.post('/api/users', { user: this.state });
    }

    render() {
      const options = map(timezones, (val, key) => 
        <option key={val} value={val}>{key}</option>
      );

      return (
        <form onSubmit={this.onSubmit}>
            <h1>Join our community!</h1>

            <div className="form-group">
                <label className="control-label">Username</label>
                <input
                  value={this.state.username}
                  onChange={this.onChange}
                  type="text"
                  name="username"
                  className="form-control"/>
            </div>
            
            <div className="form-group">
                <label className="control-label">Email</label>
                <input
                  value={this.state.Email}
                  onChange={this.onChange}
                  type="text"
                  name="email"
                  className="form-control"/>
            </div>

            <div className="form-group">
                <label className="control-label">Password</label>
                <input
                  value={this.state.Password}
                  onChange={this.onChange}
                  type="text"
                  name="password"
                  className="form-control"/>
            </div>

            <div className="form-group">
                <label className="control-label">Password Confirmation</label>
                <input
                  value={this.state.passwordConfirmation}
                  onChange={this.onChange}
                  type="text"
                  name="passwordConfirmation"
                  className="form-control"/>
            </div>

            <div className="form-group">
                <label className="control-label">Timezone</label>
                <select
                    className="form-control"
                    name="timezone"
                    onChange={this.onChange}
                    value={this.state.timezone}>
                    <option value="" disabled>Choose Your Timezone</option>
                    {options}
                </select>
            </div>

            <div className="form-group">
              <button className="btn btn-primary btn-lg">
                Sign up
              </button>
            </div>
        </form>
        )
    };
}

export default SignupForm;