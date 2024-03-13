import GhostContentAPI from '@tryghost/content-api';

// Crea una instancia de API con las credenciales del sitio
export const ghostClient = new GhostContentAPI({
    url: 'https://thiagoagency.ghost.io', // Esto es la URL predeterminada si tu sitio se está ejecutando en un entorno local
    key: '3a3f2ba7a67f62dfd29f904e06',
    version: 'v5.0',
});
