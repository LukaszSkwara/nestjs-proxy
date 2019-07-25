export const stage = process.env.STAGE || 'dev';
export const version = process.env.APP_VERSION || 'dev';
export const appName = process.env.APP_NAME || 'NestJS Proxy';
export const port: number = parseInt(process.env.PORT, 10) || 3000;

// tslint:disable-next-line:max-line-length
export const serviceAccountPrivateKey: string = process.env.SERVICE_ACCOUNT_PRIVATE_KEY || '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCJc7uBM5aE9P8D\n2RvDappT8Cb+R17kj6qbMkAEJQCnHKbVIueaAS7AY4e03uCMlqdRfLwJi0DKLa1Z\n6O9t5yQ8Oi2OsaGDIlcrYXdQAh3GE3kIF+dFWmIGodOIdA9HCtdoqn8k2q8V+IVU\nLaZSz218uhnWo/o4Lk/rkUH8RDukGNUb416I071EeAkS72HoxGu+8rJimCdK+CSg\nqYEfuyCyHalILsaXlwCPIl7JcdpaySfu42b2HID132uCaBaZ8QhiGgoJEuD3Wthr\n1e9b6OhZPZlpTegDafdALh9MgWChSS/ARj0fGkJxLQBh+TLeRW0mll5jVStoRcxe\nLBAIx5abAgMBAAECggEAPUkp8Hi1A0FNt0SFeYM9nnF0oWnnKJfaJOqp2m85NEm1\nJVEz3NnsI4H9TysVCfpeThoEqWi6kar+IRmYL/Ogl24FRBt1fUfBgCksDrNy3Q9v\npqkpyCV9kaFz9OJysWVnGFb069TJvk0Z/aeBAmlUUwmTXb2tYoFbxxf0SOuPgCGc\nx8+aXqtxr97Szir1OeRGjWUSgvRI8cn2R0kYt3EB4mvv7os2EtDhw0dxUi/ClShz\nYfSaIEAGSNfo4pORkB/etO4xwP1llGFHGE0dLoqknvdVhG/TDT4XQcKqPF/GbYQZ\ngJMmz+c1AQwVnoMdOSX33X7ah7SvgpOHoovNYZjIiQKBgQDdXYIuUbbcB6VeQq6u\nh57mHVj+TlAifpHyAdRYNsjYajxC4tZTaQgj/fiB522/QvP1+5QlgLju6fKsIY8+\nyobI9nf0P/OimdgDB36b77MjtQjANwCTcQNVhPTorqPJURztdcE4KjxLmWOT7ibC\nelrefSfyRYkhroJYPaK+moWc3QKBgQCe9TFYCiLptOBzazvYAEPW3U8G6Z4urK1V\nxEXrmxLp3tJ+pn+dOY2jhh+C0yptfUYpQ9Ab8i1B6Zki/A7+EAoyD9sKvtFoUGW5\n18WaVffEMHV2ycYRVzqjqPd0Y42vclpd860165bTwOuYAYoYLxzzDEy4HtH1WrwI\nBtHORxYt1wKBgC8efl1Zq3C+d+bOjtw7pgkZah4HkWsmQe6fkRGN58aZJmaeXjy2\n+LKglssf9e5mVAOiH3C0K6k/RxZ4tkMJXRNd0z68diHAWYibicmrhhgtqsUvcAHy\nZmFHwdHdiqOJjnzFOfG4m8kDx3xvjvSKktkVDvG093Gh8cDSrdegkJxJAoGAPnkF\nLKHHOOzCrfn+KhVolCCkd4YHijaJZUTfagqnc00Ek4wiaYt+FD+ZUNRnP2LV2U/y\nkZkrmlURv4Mq7UUmjKhYoS9/o6y9Xj3kRpT07KFS+R2x/4y12i6FGrQpskOSKoyj\njaaKv6x5q2Mnf/u8N/WkjVRnljNT5R+xA45CtD8CgYEAjpQ2hZMZ++ey4Wm2YMtA\na8yCdNRaV1RlvwyqlgwD4deklkq72OXzXLDNdrU2V/dQPWbBpUp8ZREHyT/myFcg\nKuFc8Id2ePJ+EPmanIE6hKyfUdUzc8KpxYbljpDhPXYZr3nJ5jNf1wvQDkQU9NDA\nBBjP73PP6LbI8nylY5znStc=\n-----END PRIVATE KEY-----';
// tslint:disable-next-line:max-line-length
export const serviceAccountPublicKey: string = process.env.SERVICE_ACCOUNT_PUBLIC_KEY || '-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAiXO7gTOWhPT/A9kbw2qa\nU/Am/kde5I+qmzJABCUApxym1SLnmgEuwGOHtN7gjJanUXy8CYtAyi2tWejvbeck\nPDotjrGhgyJXK2F3UAIdxhN5CBfnRVpiBqHTiHQPRwrXaKp/JNqvFfiFVC2mUs9t\nfLoZ1qP6OC5P65FB/EQ7pBjVG+NeiNO9RHgJEu9h6MRrvvKyYpgnSvgkoKmBH7sg\nsh2pSC7Gl5cAjyJeyXHaWskn7uNm9hyA9d9rgmgWmfEIYhoKCRLg91rYa9XvW+jo\nWT2ZaU3oA2n3QC4fTIFgoUkvwEY9HxpCcS0AYfky3kVtJpZeY1UraEXMXiwQCMeW\nmwIDAQAB\n-----END PUBLIC KEY-----';

export const jwtSignOptions = {
  algorithm: 'RS256',
  audience: 'https://identitytoolkit.googleapis.com/google.identity.identitytoolkit.v1.IdentityToolkit',
  expiresIn: 3600,
  issuer: appName,
  subject: appName,
};

export const jwtSecret: string = serviceAccountPrivateKey;

export const apiUrl: string = process.env.API_URL || 'http://localhost:8080/v1/graphql';
export const wsUrl: string = process.env.WS_URL || 'ws://localhost:8080/v1/graphql';
