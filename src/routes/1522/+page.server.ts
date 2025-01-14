import { redirect } from '@sveltejs/kit';

export const load = () => {
  throw redirect(302, 'https://1522.racca.me');
};
