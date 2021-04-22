const secreatValue =
  process.env.SECRET_AUTH_INTERNAL || '63240e6240df26a53dc78b15e719511c';
console.log(secreatValue);
export const jwtConstants = { secret: secreatValue };
