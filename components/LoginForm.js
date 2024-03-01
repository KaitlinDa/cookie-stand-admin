export default function LoginForm({ onLogin }) {
    const handleSubmit = (event) => {
      event.preventDefault();
      const { username, password } = event.target.elements;
      onLogin(username.value, password.value);
    };
  
  }
  