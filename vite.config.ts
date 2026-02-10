import { defineConfig } from 'vite'

export default defineConfig({
    build: {
    rollupOptions: {
        input: {
        main: 'index.html',
        contact: 'Body/contact_body.html',
        about: 'Body/about_body.html',
        project: 'Body/proyect_body.html', 
    },
    },
},
})