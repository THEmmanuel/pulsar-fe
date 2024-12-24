const { randomBytes, createCipheriv, createDecipheriv, generateKeyPairSync, publicEncrypt, privateDecrypt } = require('crypto');

class Instinct {
    // AES Encryption
    static async encrypt(data, key) {
        try {
            const keyBuffer = Buffer.isBuffer(key) ? key : Buffer.from(key, 'utf-8');
            const iv = randomBytes(12); // Generate a 12-byte IV
            const jsonString = typeof data === 'string' ? data : JSON.stringify(data);
            const encodedData = Buffer.from(jsonString, 'utf-8');

            const cipher = createCipheriv('aes-256-gcm', keyBuffer, iv);
            const encrypted = Buffer.concat([cipher.update(encodedData), cipher.final()]);
            const authTag = cipher.getAuthTag();

            return {
                iv: iv.toString('base64'),
                data: encrypted.toString('base64'),
                authTag: authTag.toString('base64'),
            };
        } catch (error) {
            throw new Error(`Encryption failed: ${error.message}`);
        }
    }

    // AES Decryption
    static async decrypt(encryptedData, key) {
        try {
            const keyBuffer = Buffer.isBuffer(key) ? key : Buffer.from(key, 'utf-8');
            const iv = Buffer.from(encryptedData.iv, 'base64');
            const data = Buffer.from(encryptedData.data, 'base64');
            const authTag = Buffer.from(encryptedData.authTag, 'base64');

            const decipher = createDecipheriv('aes-256-gcm', keyBuffer, iv);
            decipher.setAuthTag(authTag);
            const decrypted = Buffer.concat([decipher.update(data), decipher.final()]);

            const decodedString = decrypted.toString('utf-8');
            try {
                return JSON.parse(decodedString);
            } catch {
                return decodedString;
            }
        } catch (error) {
            throw new Error(`Decryption failed: ${error.message}`);
        }
    }

    // RSA Encryption
    static async encryptRSA(data, publicKey) {
        try {
            const jsonString = typeof data === 'string' ? data : JSON.stringify(data);
            const encodedData = Buffer.from(jsonString, 'utf-8');
            const encrypted = publicEncrypt(publicKey, encodedData);
            return encrypted.toString('base64');
        } catch (error) {
            throw new Error(`RSA encryption failed: ${error.message}`);
        }
    }

    // RSA Decryption
    static async decryptRSA(encryptedData, privateKey) {
        try {
            const data = Buffer.from(encryptedData, 'base64');
            const decrypted = privateDecrypt(privateKey, data);
            const decodedString = decrypted.toString('utf-8');
            try {
                return JSON.parse(decodedString);
            } catch {
                return decodedString;
            }
        } catch (error) {
            throw new Error(`RSA decryption failed: ${error.message}`);
        }
    }

    // RSA Key Pair Generation
    static generateRSAKeyPair() {
        try {
            const { publicKey, privateKey } = generateKeyPairSync('rsa', {
                modulusLength: 4096,
                publicKeyEncoding: { type: 'pkcs1', format: 'pem' },
                privateKeyEncoding: { type: 'pkcs1', format: 'pem' },
            });

            return { publicKey, privateKey };
        } catch (error) {
            throw new Error(`RSA key pair generation failed: ${error.message}`);
        }
    }
}

module.exports = Instinct;