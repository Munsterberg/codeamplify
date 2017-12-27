import unittest
import coverage
from flask_script import Manager
from flask_migrate import MigrateCommand
from project import db, create_app
from project.api.models import User

COV = coverage.coverage(
    branch=True,
    include='project/*',
    omit=[
        'project/tests/*'
    ]
)

COV.start()

app = create_app()

manager = Manager(app)


@manager.command
def cov():
    tests = unittest.TestLoader().discover('project/tests')
    result = unittest.TextTestRunner(verbosity=2).run(tests)
    if result.wasSuccessful():
        COV.stop()
        COV.save()
        print('Coverage summary:')
        COV.report()
        COV.html_report()
        COV.erase()
        return 0
    return 1


@manager.command
def recreate_db():
    db.drop_all()
    db.create_all()
    db.session.commit()


@manager.command
def seed_db():
    db.session.add(User(username='jake', email='jake@myemail.com', password='mypassword'))
    db.session.add(User(username='jakenumber', email='jake21@myemail.com', password='mypassword'))
    db.session.commit()


@manager.command
def test():
    tests = unittest.TestLoader().discover('project/tests', pattern='test*.py')
    result = unittest.TextTestRunner(verbosity=2).run(tests)
    if result.wasSuccessful():
        return 0
    return 1


manager.add_command('db', MigrateCommand)


if __name__ == '__main__':
    manager.run()
