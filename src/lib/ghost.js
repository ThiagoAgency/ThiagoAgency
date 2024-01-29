import GhostContentAPI from '@tryghost/content-api';

// Crea una instancia de API con las credenciales del sitio
export const ghostClient = new GhostContentAPI({
    url: 'https://thiagoagency.ghost.io', // Esto es la URL predeterminada si tu sitio se está ejecutando en un entorno local
    key: '13beb18f407d388b1170be0d74',
    version: 'v5.0',
});