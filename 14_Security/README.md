# Security

__**Security**__

- Register : Save User information
- Login : Transfer User information
- Password : Save Password with encryption
- Data : Transfer encryption Data and Analyze decryption Data

## Hash

MD5 Algorithm
SHA(Secure Hash Algorithm)

```javascript
hash(password);
```

__**Check Transfer Data Error : checksum**__

__**Against Attack of Hashed password : SALT**__

```javascript
hash(password + user.salt);
```

## Encryption

- crypto : Basic Module
- bcrypt : External Module

```command
npm install bcrypt
```

__**'crypto' Module**__

- Hash Functions
- Hash Algorithm
- readable / writable stream

## symmetric cryptography

- encryption and decryption Using same Key

Algorithm

- DES(Data Encryptoion Standard)
- AES(Advanced Encryption Standard)

__**'crypto' Module**__

`Encryption`

```javascript
var cipher = crypto.createCipheriv(algorithm, key, iv[,options]);
cipher.update();
cipher.final();

```

`Decryption`

```javascript
var decipher = crypto.createDecipheriv(algorithm, key, iv[, options]);
decipher.update();
decipher.final();

```

## Asymmetric cryptography

- encryption and decryption Using different Key(private key, public key)
- private key is not published
- ecryption with private key - decryption with public key
- ecryption with public key - decryption with private key
- Slower than symmetric cryptography

## Security Server

__**HTTPs(HTTP over SSL)**__

- Communication with Data Encryption

__**SSL**__

- Netscape SSL -> IETF TLS
- symmetric cryptography
  
__**Certification of SSL**__

- Server information
- Server Certification of Trusted CA(Certificate authority)
- Server public key : for asymmetric encryption

__**OpenSSL**__

Custom Certification

refert to [OpenSSL](https://www.openssl.org/)

```command
openssl genrsa -out key.pem 2048

openssl req -new -key key.pem -out req.csr

openssl x509 -req -in req.csr -signkey key.pem -out cert.pem
```

__**Certificate Authority**__

Free

- [startssl](https://www.startssl.com)
- [letsencrypt](https://letsencrypt.org)

Not Free

- verisign
- symantec
- comodo
  