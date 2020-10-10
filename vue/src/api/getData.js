import fetch from '@/config/fetch'

/**
 * 登陆
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
export const login = data => fetch('/admin/login', data, 'POST');

/**
 * 获取用户信息
 */

export const getAdminInfo = () => fetch('/admin/info');

// export const getUserList = data => fetch('../datajson/userList.json', data);
// export const getUserList = data => fetch('/v1/users/list', data);

// export const getUserCount = data => fetch('../datajson/count.json', data);
// export const getUserCount = data => fetch('/v1/users/count', data);
