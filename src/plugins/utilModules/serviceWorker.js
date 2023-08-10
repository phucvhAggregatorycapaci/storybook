var loadedServiceWorker = false;
export const serviceWorker = {
    register(callBack) {
        
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('app-sw.js?v=1024')
                .then((registration) => {
                    if (navigator.serviceWorker.controller === null) {
                        // we get here after a ctrl+f5 OR if there was no previous service worker.
                        navigator.serviceWorker.ready.then(() => {
                            registration.active.postMessage("claimMe");
                        });

                        navigator.serviceWorker.addEventListener('message', (ev) => {
                            // console.log(ev.data);
                            if (!loadedServiceWorker && ev.data == 'you are claimed') {
                                loadedServiceWorker = true;
                                setTimeout(() => {
                                    callBack();
                                }, 200);
                            }
                        })
                    }else{
                        loadedServiceWorker = true;
                        callBack();
                    }
                    console.log('Registered service worker');
                })
                .catch((err) => {
                    console.log('Register service worker failed', err);
                });
        }
    }
};
