import { poseidonEncrypt, poseidonDecrypt } from './utils/wrappers';

const key = '5d41402abc4b2a76b9719d911017c592';
const msg = 'This is a test message.';
const nonce = 'b9e2a53d6a09c648';

const encryptedMsg = poseidonEncrypt(key, msg, nonce);
console.log('Encrypted Message:', encryptedMsg);

const decryptedMsg = poseidonDecrypt(encryptedMsg, key, nonce);
console.log('Decrypted Message:', decryptedMsg);

// Use the decryptedMsg to ensure the variable is used
if (decryptedMsg === msg) {
    console.log('Decryption successful: The decrypted message matches the original message.');
} else {
    console.log('Decryption failed: The decrypted message does not match the original message.');
}
