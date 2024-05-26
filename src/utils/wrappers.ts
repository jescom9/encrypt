import { poseidonEncrypt as originalPoseidonEncrypt, poseidonDecrypt as originalPoseidonDecrypt } from '@zk-kit/poseidon-cipher';
import { logParams } from '/logParams';

// Wrapper for poseidonEncrypt
export const poseidonEncrypt = (key: any, msg: any, nonce: any) => {
  logParams('poseidonEncrypt', { key, msg, nonce });
  return originalPoseidonEncrypt(key, msg, nonce);
};

// Wrapper for poseidonDecrypt
export const poseidonDecrypt = (ciphertext: any, key: any, nonce: any): PlainText<bigint> => {
  logParams('poseidonDecrypt', { ciphertext, key, nonce });
  return originalPoseidonDecrypt(ciphertext, key, nonce);
};
