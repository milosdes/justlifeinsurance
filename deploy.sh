#!/bin/bash

echo "Connecting to justlifeinsurance.ca..."

ssh -i ~/.ssh/justlifeinsurance root@206.189.71.171 'bash -s' <<'ENDSSH'
	echo "We are in!"
	cd /var/www/justlifeinsurance.ca

	echo "============================="
	echo "PULLING CODE!"
	echo "============================="

	git checkout -- "*"
	git pull
	
	echo "============================="
	echo "NPM INSTALL"
	echo "============================="

	npm install

	echo "============================="
	echo "BUILDING..."
	echo "============================="

	npm run build

	echo "============================="
	echo "RELOADING..."
	echo "============================="

	pm2 reload justlifeinsurance
	pm2 flush

	echo "============================="
	echo "SHOWING LOGS (Ctrl-C to exit)"
	echo "============================="

	pm2 logs justlifeinsurance
ENDSSH

# In case the server is not running (so reload fails)
#		run `npm start` (in the DO server)
