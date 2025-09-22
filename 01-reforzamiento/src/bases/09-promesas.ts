const myPromise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        //!Yo quiero mi Dinero
        // resolve(100);
        reject('Mi amigo no volvio');
    }, 2000); // 2 segundos
});

myPromise
    .then((myMoney) => {
        console.log(`My Money is back ${myMoney}`);
    }
    ).catch(reason => {
        console.warn(reason);
    }).finally(() => {
        console.log("Debemos continuar.")
    });

