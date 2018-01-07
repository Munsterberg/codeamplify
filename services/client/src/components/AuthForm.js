import React from 'react';
import { string, object, func } from 'prop-types';

const propTypes = {
  formType: string,
  formData: object,
  handleChange: func,
  handleFormSubmit: func
};

const AuthForm = ({
  formType,
  formData,
  handleChange,
  handleFormSubmit
}) => {
  return (
    <div>
      <h1>{ formType }</h1>
      <hr/>
      <form onSubmit={(e) => handleFormSubmit(e)}>
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
                onChange={(event) => handleChange(event)}
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
            onChange={(event) => handleChange(event)}
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
            onChange={(event) => handleChange(event)}
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