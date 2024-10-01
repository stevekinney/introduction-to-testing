import { html, render } from 'lit';

/**
 * @typedef {Object} LoginFormProperties
 * @property {string} action;
 * @property {'get' | 'post' | 'dialog'} method;
 * @property {(event: Event) => void} onSubmit;
 */

/**
 * Renders a login form.
 * @param {LoginFormProperties} parameters
 * @returns {HTMLDivElement}
 */
export const createLoginForm = ({
  action = '/login',
  method = 'post',
  onSubmit = () => {},
} = {}) => {
  const template = html`
    <form
      action="${action}"
      method="${method}"
      @submit="${onSubmit}"
      aria-label="Login"
    >
      <label>
        <span>Email</span>
        <input type="email" name="email" placeholder="Email" />
      </label>
      <label>
        <span>Password</span>
        <input type="password" name="password" placeholder="Password" />
      </label>
      <button type="submit">Login</button>
    </form>
  `;

  const container = document.createElement('div');
  render(template, container);

  return container;
};
