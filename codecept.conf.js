const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
    tests: 'e2e_testing/**/*.spec.js',
    output: 'e2e_testing/outputs',
    helpers: {
        Puppeteer: {
            url: 'http://127.0.0.1:1000',
            show: true,
            windowSize: '1200x900',
            browser: 'chromium',
        },
    },
    include: {
        I: './steps_file.js',
    },
    name: 'pwa-restaurant',
    plugins: {
        pauseOnFail: {},
        retryFailedStep: {
            enabled: true,
        },
        tryTo: {
            enabled: true,
        },
        screenshotOnFail: {
            enabled: true,
        },
    },
};
