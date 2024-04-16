import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from './Loading';
import Toast from './Toast';
import { GLOBALTYPES } from '../../redux/actions/globalTypes';

const Notify = () => {
  const { alert } = useSelector((state) => state);

  const dispatch = useDispatch();

  return (
    <div>
      {/* loqding */}
      {alert.loading && <Loading />}

      {/* error msg */}
      {alert.error && (
        <Toast
          msg={{ title: 'Error', body: alert.error }}
          handleShow={() => dispatch({ type: GLOBALTYPES.ALERT, payload: {} })}
          bgColor='bg-danger'
        />
      )}

      {/* success msg */}
      {alert.success && (
        <Toast
          msg={{ title: 'Success', body: alert.success }}
          handleShow={() => dispatch({ type: GLOBALTYPES.ALERT, payload: {} })}
          bgColor='bg-success'
        />
      )}
    </div>
  );
};

export default Notify;
