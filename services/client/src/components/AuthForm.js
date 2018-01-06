import React from 'react';
import { string, object } from 'prop-types';

const propTypes = {
  formType: string,
  formData: object
};

const AuthForm = ({ formType, formData }) => {
  return (
    <div>
      <h1>{ formType }</h1>
      <hr/>
      <form>
        {
          formType === 'Register' &&
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control input-lg"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={() => {}}
              />
            </div>
        }
        <div className="form-group">
          <input
            type="text"
            name="username"
            className="form-control input-lg"
            placeholder="Username"
            required
            value={formData.username}
            onChange={() => {}}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            className="form-control input-lg"
            placeholder="Password"
            required
            value={formData.password}
            onChange={() => {}}
          />
        </div>
        <input
          type="submit"
          className="btn btn-primary btn-lg btn-block"
          value="Submit"
        />
      </form>
    </div>
  );
};

AuthForm.propTypes = propTypes;


export default AuthForm;