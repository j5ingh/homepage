#!/bin/sh
#write out current crontab
crontab -l > asciijob
#echo new cron into cron file
echo "0 0 1 * * python3 $PWD/$(dirname $0)/ascii.py" >> asciijob
#install new cron file
crontab asciijob
rm asciijob
