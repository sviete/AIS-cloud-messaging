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
