# Build and remote deployment.

# Build
./frontend-build.sh

docker push hysunhe/botfront:ceair

# Remote deployment
# ssh -i /home/hysunhe/projects/BetterBot/credentials/sehub/id_rsa opc@o100.odainfra.com -t "sudo su - oracle -c ./deploy-ceair-frontend.sh"

ssh -i /home/hysunhe/projects/ceair/id_rsa opc@oracle.doitchina.com -t "sudo su - oracle -c ./deploy-ceair-frontend.sh"