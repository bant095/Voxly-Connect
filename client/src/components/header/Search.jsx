import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDataAPI } from '../../utils/fetchData';
import { GLOBALTYPES } from '../../redux/actions/globalTypes';
import { Link } from 'react-router-dom';
import UserCard from '../UserCard';

const Search = () => {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);

  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  // side effect
  useEffect(() => {
    if (search && auth?.token) {
      setIsLoading(true);
      getDataAPI(`search?username=${search}`, auth.token)
        .then((res) => {
          setUsers(res.data.users);
        })
        .catch((err) => {
          dispatch({
            type: GLOBALTYPES.ALERT,
            payload: { error: err.response.data.msg },
          });
        })
        .finally(() => setIsLoading(false));
    } else {
      setUsers([]);
    }
  }, [search, auth?.token, dispatch]);

  // handleclose
  const handleClose = () => {
    setSearch('');
    setUsers([]);
  };

  return (
    <form className='search_form'>
      <input
        type='text'
        name='search'
        value={search}
        id='search'
        onChange={(e) =>
          setSearch(e.target.value.toLocaleLowerCase().replace(/ /g, ''))
        }
      />

      <div className='search_icon' style={{ opacity: search ? 0 : 0.3 }}>
        <span className='material-icons'>search</span>
        <span>Search</span>
      </div>

      <div
        className='close_search'
        onClick={handleClose}
        style={{ opacity: users.length === 0 ? 0 : 1 }}
      >
        &times;
      </div>

      {isLoading && <div className='loading'>Loading...</div>}

      {users.length > 0 && (
        <div className='users'>
          {search &&
            users.map((user) => (
              <Link
                key={user.id}
                to={`/profile/${user._id}`}
                onClick={handleClose}
              >
                <UserCard user={user} border='border' />
              </Link>
            ))}
        </div>
      )}
    </form>
  );
};

export default Search;
