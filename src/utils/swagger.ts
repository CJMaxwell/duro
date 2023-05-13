import swaggerJSDoc from 'swagger-jsdoc';
import { config } from 'dotenv';

config();


const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Duro API",
      version: "1.0.0",
    },
    servers: [
      {
        url: process.env.APIURL,
        description: "Development server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./src/routes/**/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;

