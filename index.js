import dotenv from 'dotenv';
import cowsay from 'cowsay';

dotenv.config();

const { NAME, CAMPUS } = process.env;

console.log(
  cowsay.say({
    text: `Salut, je suis ${NAME} du campus ${CAMPUS}!`,
    e: "oO",
    T: "U "
  })
);