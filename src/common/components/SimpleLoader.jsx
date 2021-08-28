import React from 'react';
import Loader from 'react-loader-spinner';

export const SimpleLoader = ({ isLoading = true }) => {
  return (
    <React.Fragment>
      {isLoading && (
        <React.Fragment>
          <div
            style={{
              position: 'fixed',
              height: '100vh',
              width: '100%',
              zIndex: 1000,
              opacity: '.0',
              backgroundColor: '#000',
              overflowX: 'hidden',
            }}></div>
          <div
            style={{
              width: 80,
              marginRight: 'auto',
              marginLeft: 'auto',
              position: 'absolute',
              top: '45%',
              right: '45%',
              zIndex: 2000,
              overflowX: 'hidden',
            }}>
            <Loader type='Puff' color='crimson' height={80} width={80} />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
