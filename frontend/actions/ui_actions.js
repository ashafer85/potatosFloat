import React from 'react';

export const SWITCH_USER_DROP_STATUS = 'RECEIVE_CURRENT_USER';

export const switchUserDropStatus = (oldDropStatus) => {
  const userDropStatus = !oldDropStatus;
  return {
    type: SWITCH_USER_DROP_STATUS,
    userDropStatus
  };
};
