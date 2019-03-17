import React from 'react';

export const ContactItem = ({ avatarUrl, name, phone }) => {
  return (
    <li className="item">
      <img src={avatarUrl} alt="" />
      <div className="content">
        <h4 className="header">{name}</h4>
        <div className="description">{phone}</div>
      </div>
    </li>
  );
};