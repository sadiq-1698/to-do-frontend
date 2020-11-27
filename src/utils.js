import { ACCESS_TOKEN } from './constants/constants';

export const getAccessToken = () => sessionStorage.getItem(ACCESS_TOKEN)
