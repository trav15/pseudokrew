import React from 'react';

export default function Profile(props) {
  return(
    <h2 className="capitalize-name">{props.username}'s Profile Page</h2>
  );
}