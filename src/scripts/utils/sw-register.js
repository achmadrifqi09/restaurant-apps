import { Workbox } from 'workbox-window';

const swRegister = () => {
    if ('serviceWorker' in navigator) {
        const wb = new Workbox('./sw.js');

        wb.addEventListener('waiting', () => {
            console.log('Service workers waiting');
        });

        wb.addEventListener('activated', (event) => {
            if (!event.isUpdate) {
                console.log('Service worker activated');
            }
        });
        wb.register();
    }
};

export default swRegister;
