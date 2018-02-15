import React from 'react';

export const SWITCH_USER_DROP_STATUS = 'SWITCH_USER_DROP_STATUS';
export const CLOSE_USER_DROP_STATUS = 'CLOSE_USER_DROP_STATUS';


export const switchUserDropStatus = (oldDropStatus) => {
  const userDropStatus = !oldDropStatus;

  return {
    type: SWITCH_USER_DROP_STATUS,
    userDropStatus
  };
};

export const closeUserDropStatus = () => {
  const userDropStatus = false;
  return {
    type: CLOSE_USER_DROP_STATUS,
    userDropStatus
  };
}
