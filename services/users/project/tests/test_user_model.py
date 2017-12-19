from sqlalchemy.exc import IntegrityError
from project import db
from project.api.models import User
from project.tests.base import BaseTestCase
from project.tests.utils import add_user


class TestUserModel(BaseTestCase):
    def test_str(self):
        user = add_user('myuser', 'my@test.com')
        self.assertEqual(str(user), 'myuser')

    def test_add_user(self):
        user = add_user('myuser', 'my@test.com')
        db.session.add(user)
        db.session.commit()
        self.assertTrue(user.id)
        self.assertEqual(user.username, 'myuser')
        self.assertEqual(user.email, 'my@test.com')
        self.assertTrue(user.active)

    def test_add_user_duplicate(self):
        user = User(username='duplicate', email='my@test.com')
        db.session.add(user)
        db.session.commit()
        duplicate_user = User(username='duplicate', email='my2@test.com')
        db.session.add(duplicate_user)
        self.assertRaises(IntegrityError, db.session.commit)

    def test_add_user_duplicate_email(self):
        user = User(username='duplicate111', email='my@test.com')
        db.session.add(user)
        db.session.commit()
        duplicate_user = User(username='duplicate', email='my@test.com')
        db.session.add(duplicate_user)
        self.assertRaises(IntegrityError, db.session.commit)

    def test_to_json(self):
        user = add_user('myuser', 'my@test.com')
        self.assertTrue(isinstance(user.to_json(), dict))
