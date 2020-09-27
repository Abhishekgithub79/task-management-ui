import { PhonePe } from 'phonepesdk-web'

var sdk

PhonePe.PhonePe.build(PhonePe.Constants.Species.web).then(ppSdk => {
    sdk = ppSdk
})

sdk.createServiceRequestToken().then((res) => {
    console.log('grant token data received = ' + res)
}).catch((err) => {
    console.log('Error occurred while fetching the service request token: ' + err)
})
