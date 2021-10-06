#!/bin/bash
docker-compose stop
/bin/echo -e "y" | docker-compose rm
docker-compose down --rmi all
/bin/echo -e "y" | sudo docker system prune