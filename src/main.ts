import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initializeApp, ServiceAccount, cert } from 'firebase-admin/app';
import { config } from 'dotenv';
config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const serviceAccount = {
    type: 'service_account',
    project_id: 'test-dynamic-link-fdca2',
    private_key_id: '221177ced41078ce227fab619cc9d5c28f159853',
    private_key:
      '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC1gRIAymCxT9pm\nEhCRD5b5vuWwuoMn86NfTz2huOGccTcnnfbxycBxnm96FIlX8lnFWLW4nXUe2kGg\ndLJW0icndypdWW5Z5ZFeTQopVtbDTCHBCudJ3H6hxzCnu9WRp1HJ58O27KIz3zvV\nY5oWHEqOGhbgLZQU+n8k3JwJ90cbP5Z3XeyYsnss0x1RtP5bogZbFGUWxpju4oMr\n6hPXjnOAoECe+5N21lc0/E5l0dzP3wzZNAcDhvfGwnmyg4U4nxij2womG5I3JVUt\n9Av50ons+6RsZ8fuAR8wnSolzz06FDyQGkywz+/sOLHvR8UfF1DlYZsEjMHQ94VM\nJWwIEXWnAgMBAAECggEAAN6LRsCU8cDoRItUDMMlkzDeGIpDQlRISpaudaoqd8uv\nBWM4oXQOCARkIks3/2eAv63HbJcMeRyUDeN2h6XseIddByL8Z/xDYhaTQuJQl3Te\nOWhcEpAoWOMf5qTfjcR7DenztCFc5toIhzgdPSYX+/yyAHbeiCSGHAmkrh/72N5V\nIlXZrGTC8e3qT1RKwUVnqypYqW74iH/dzXzHmMyM+iTWC5eRhJM4CjrNF08Wr2f8\njwTHVBWyNQbAJ2DBnrvO39VHeTPT9G6dv1yjEUo+B0kpqmpTYdky245gi/hLpKSg\nDa2OTgwTxSFoET2vPBuu9qZHnWM9aqNjgw8x3Eb7MQKBgQDuUQ09PLWWQtL/8uu0\nCPfnDUgN4zdFCdvGH+LUpRNV/TLaRq6TGJiD4mPNl1VWDei1IeMqBFrmIyNbjxcu\nJZXlfXyWOjnlG7QFifvi14NNGDYQYaiFlzsPSg5+kVXnsPNPSJ2XGna8C7buF/BR\nTJX5pKOtCMruLkwhCYGwrVi/zwKBgQDC+NZAPgAm9LeDwIbjX34hYEW6+MaKyfe4\nlwRHPlKE4y7mOOYmOHyThezhUTHFJ0VNBMrTaXLgYyKM3HNo+tqUIip1hbBXcOJZ\nLGaMJmgUWL0wtGTOBdRwP3HcJA2hnZItR/ytkvSsaabB9C4DiFrE5xolWfBK/XKh\nybh1X6dKqQKBgQDfdVpvoBw4j+IfIp1GS95/ZOG6O+JYNt0/Uiiz8TFHQMpNB1es\nD7T6fO3OGedncFVSejrx6/F7t1jxAiPfHlkGPXrzthcRL7/GLdLkqeWxBVG0XI3S\n7bHwLSWYIhilzjLmlZVG2QaaXnWhnQq2gJRj56+dkRAO85RoqexUSMZd2wKBgG3W\n9BTjGQDZUt2lxBgqPwucigwohOnBmI5kfaOJR8HXnx9SJM6Zeg0+INJbBLf2RMN8\nFKv/txkUoG1M8LPOxv83NEZbF5pbXRkxu1/vbykvSP48UqIChMjr5UBJC2jmNWjP\nKlm69Z6AMtMHtjiFQ+Wz8HXkckw89qyQ0RtG1R9pAoGAH9gkjYrlKmeV0hy9pKyI\nxc2ePRXyojxFH4LsY3c/JGnaT+DnY3xb6kKLBWKEE7m8fjt3oAcKR8Po5Tk2Ib26\nkG2bORLbg8s33VZo94yslMsJi2+kB/QanXMcnUXfJu1X2abZ22V1RnQYO9/GLx0q\nG8M0QhywHnJXSQD6LOhQp6U=\n-----END PRIVATE KEY-----\n',
    client_email:
      'firebase-adminsdk-8s8v7@test-dynamic-link-fdca2.iam.gserviceaccount.com',
    client_id: '117226590836862789852',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url:
      'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-8s8v7%40test-dynamic-link-fdca2.iam.gserviceaccount.com',
  };

  initializeApp({
    credential: cert(<ServiceAccount>serviceAccount),
    databaseURL: 'https://test-dynamic-link-fdca2.firebaseio.com',
  });

  await app.listen(3000);
}

bootstrap();
