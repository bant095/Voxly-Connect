import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loading from './Loading';
import Toast from './Toast';
import { GLOBALTYPES } from '../../redux/actions/globalTypes';

const Notify = () => {
  const selectAlert = (state) => ({ alert: state.alert }); // Create a separate function

  const { alert } = useSelector(
    useMemo(() => selectAlert, [(state) => state.alert]) // Memoize the selector
  );

  const dispatch = useDispatch();

  return (
    <div>
      {/* Loading */}
      {alert.loading && <Loading />}

      {/* Error msg */}
      {alert.error && (
        <Toast
          msg={{ title: 'Error', body: alert.error }}
          handleShow={() => dispatch({ type: GLOBALTYPES.ALERT, payload: {} })}
          bgColor='bg-danger'
        />
      )}

      {/* Success msg */}
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
