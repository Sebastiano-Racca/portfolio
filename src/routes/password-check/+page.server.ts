import { redirect } from '@sveltejs/kit';

export const load = () => {
  throw redirect(302, 'https://github.com/Sebastiano-Racca/password-check');
};
