
import { WebApp } from 'meteor/webapp';
import { exec } from 'child_process';

function azureTest (req, res) {
    exec('cd /usr/src/app/byos && touch test.txt', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${ error }`);
            return;
        }
        console.log(`stdout: ${ stdout }`);
        console.log(`stderr: ${ stderr }`);
    });

    if (res) res.end('Result: Done executing! Check logs for result.');
}

WebApp.rawConnectHandlers.use('/azure-test', azureTest)

Meteor.methods({ azureTest });
