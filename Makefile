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

test-client:
	docker-compose -f docker-compose-dev.yml run client npm test

cover:
	docker-compose -f docker-compose-dev.yml run users-service python manage.py cov

cover-client:
	docker-compose -f docker-compose-dev.yml run client npm run test:coverage

lint:
	docker-compose -f docker-compose-dev.yml run users-service flake8 project

dev-psql:
	docker exec -ti users-db psql -U postgres -W
