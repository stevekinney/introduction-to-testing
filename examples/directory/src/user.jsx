import { useEffect, useState } from 'react';
import { getUser } from './get-user';

export const User = ({ id }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser(id).then(setUser);
  }, [setUser]);

  if (!user) {
    return <p>Loading…</p>;
  }

  return (
    <article data-testid={`user-${id}`}>
      <h2>{user.name}</h2>
      <table>
        <tbody>
          <tr>
            <th>Company</th>
            <td>{user.company.name}</td>
          </tr>
          <tr>
            <th>Username</th>
            <td>{user.username}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{user.email}</td>
          </tr>
          <tr>
            <th>Phone</th>
            <td>{user.phone}</td>
          </tr>
          <tr>
            <th>Website</th>
            <td>{user.website}</td>
          </tr>
        </tbody>
      </table>
    </article>
  );
};
