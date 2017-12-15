build-dev:
	docker-compose -f docker-compose-dev.yml up -d --build

run-dev:
	docker-compose -f docker-compose-dev.yml up -d

stop-dev:
	docker-compose -f docker-compose-dev.yml stop

run-prod:
	docker-compose -f docker-compose-prod.yml up -d

stop-prod:
	docker-compose -f docker-compose-prod.yml stop

create-db:
	docker-compose -f docker-compose-dev.yml run users-service python manage.py recreate_db

seed-db:
	docker-compose -f docker-compose-dev.yml run users-service python manage.py seed_db

test:
	docker-compose -f docker-compose-dev.yml run users-service python manage.py test

cover:
	docker-compose -f docker-compose-dev.yml run users-service python manage.py cov

lint:
	docker-compose -f docker-compose-dev.yml run users-service flake8 project

dev-psql:
	docker exec -ti users-db psql -U postgres -W
