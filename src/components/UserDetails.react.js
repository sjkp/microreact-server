import React from 'react';

const UserDetails = props => {
  const { user } = props;
  return (
    <h6>
      Projects uploaded by <strong>{ user.name }</strong> ({ user.email })
    </h6>
  );
};

UserDetails.displayName = 'UserDetails';

export default UserDetails;
