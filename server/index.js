const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Ruta para obtener el valor del dólar oficial
app.get('/oficial', async (req, res) => {
  try {
    // Hacer una solicitud a la API de dólar oficial
    const response = await axios.get('https://dolarapi.com/v1/dolares/oficial');
    const data = response.data;

    // Procesar la respuesta y enviarla como JSON
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el valor del dólar oficial.' });
  }
});

// Ruta para obtener el valor del dólar blue
app.get('/blue', async (req, res) => {
  try {
    // Hacer una solicitud a la API de dólar blue
    const response = await axios.get('https://dolarapi.com/v1/dolares/blue');
    const data = response.data;

    // Procesar la respuesta y enviarla como JSON
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el valor del dólar blue.' });
  }
});

app.listen(port, () => {
  console.log(`Aplicación escuchando en el puerto ${port}`);
});
