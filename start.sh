#!/bin/bash

npm run build
NODE_ENV=development pm2 start server/index.js --name justlifeinsurance