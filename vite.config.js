import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue(),
    ],
    resolve: {
        alias: {
            '@': '/resources/js',
            // Additional useful aliases (examples)
            '@components': '/resources/js/components',
            '@views': '/resources/js/views',
            '@assets': '/resources/js/assets',
            '@utils': '/resources/js/utils'
        },
    },
});
