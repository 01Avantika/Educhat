import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const navigate = useNavigate();
  const [role, setRole] = useState('student');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(role);
    navigate('/dashboard');  // Redirect to dashboard
  };

  return (
    <div className="login-form">
      <h2>Login to EduChat</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="student">Student</option>
          <option value="faculty">Faculty</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
