ssh -i ~/.ssh/something some-user@digital-ocean-droplet 'bash -s' <<'ENDSSH'
	pushd ~/justlifeinsurance
	echo "[DEPLOY] Starting at $(date)" >> ~/server-logs.txt
	sudo killall node
	git pull
	yarn build
	sudo PORT=80 yarn start
ENDSSH