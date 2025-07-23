const express = require('express');
const app = express();
require('dotenv').config();

//Importar la definición con Swagger
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger/swagger.yaml');

const sequelize = require('./config/db');
const clientesRoutes = require('./routes/cliente');


app.use(express.json());
app.use('/api/v1/clientes', clientesRoutes);

// Documentación Swagger disponible en /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



const PORT = process.env.PORT || 3000;


sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos exitosa');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en puerto http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });
