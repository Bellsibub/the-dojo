import { useState } from 'react';

// hooks
import { useSignup } from 'hooks/useSignup';

// components
import { CardCentral, BtnMain, Loading } from 'components';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [error, setError] = useState(null);

  const { signup, loading, error: requestError } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, displayName, profilePic);
    signup(email, password, displayName, profilePic);
  };

  const handleFileChange = (e) => {
    setProfilePic(null);
    let selected = e.target.files[0];
    if (!selected) {
      setError('Please select an image');
      return;
    }
    if (!selected.type.includes('image')) {
      setError('The file must be an image');
      return;
    }
    if (selected.size > 100000) {
      setError('Image file size must be less than 100kb');
      return;
    }
    setError(null);
    setProfilePic(selected);
  };

  return (
    <CardCentral>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label>
          <span>Email</span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <span>Display Name</span>
          <input
            required
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label>
          <span>Profile picture</span>
          <input
            required
            type="file"
            onChange={handleFileChange}
          />
        </label>
        {(error || requestError) && <p className="error">{error || requestError}</p>}
        <BtnMain type="submit" disabled={loading}>{loading ? 'Loading...' : 'Signup'}</BtnMain>
      </form>
    </CardCentral>
  );
};

export default Signup;
