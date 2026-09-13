import { useState } from "react";

interface User {
  username: string;
  email: string;
}

function UserProfile() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <div>
      {user && (
        <div>
          <h2>Username: {user.username}</h2>
          <p>Email: {user.email}</p>
        </div>
      )}

      {!user && <p>No user logged in.</p>}

      <button
        onClick={() =>
          setUser({
            username: "abdullahi",
            email: "abdullahi@example.com",
          })
        }
      >
        Login
      </button>
    </div>
  );
}

export default UserProfile;