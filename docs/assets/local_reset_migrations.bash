rm -R -f ./migrations &&
pipenv run init &&
docker exec -ti postgresql psql -U postgres -c 'DROP DATABASE IF EXISTS example;' || true &&
docker exec -ti postgresql psql -U postgres -c  'CREATE DATABASE example;' &&
docker exec -ti postgresql psql -U postgres -c  'CREATE EXTENSION unaccent;' -d example
pipenv run migrate &&
pipenv run upgrade &&
pipenv run start