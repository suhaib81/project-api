docker pull mysql:8
docker run --name hyf-db \
--expose 3306 -p 3306:3306 \
-e MYSQL_ROOT_PASSWORD=hyf_password \
-e MYSQL_DATABASE=hyf_db \
-d mysql:8