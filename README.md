# AIS-cloud-messaging
Micro server to send messages from AIS dom gate to mobile clients via cloud


## Install

```
git clone https://github.com/sviete/AIS-cloud-messaging.git
cd AIS-cloud-messaging
npm install
```

## Add key from FCM

```
aispushnotification-server-key.json
```

## PM2
AIS-cloud-messaging -> ACM

```
pm2 start app.js --name "ACM"
```

## PM2 logs

```
pm2 logs ACM
/home/dom/.pm2/logs/acm-out.log last 15 lines:
11|ACM     | server started...
```

## Test

```
curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"notification": {"title": "$AIS up 1.43% on the day","body": "$AIS gained 11.80 points to close at 835.67, up 1.43% on the day."},"token": "dnchB4qYQqaq5La-Y-Gno4:APA91bHEthCsc3fT-mdmQZmdkTXtMbR7DIYvIq7vwSSaE30auA6EK7zLi2efnjf8fAEtFTDiyrB3VLhqThMeeDdguQzVmo_5VWQzRUX3-xfsdfsdfsdfsdf"}' \
  http://localhost:8333/acm

```
