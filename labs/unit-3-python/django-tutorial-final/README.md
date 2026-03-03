# Django Tutorial — Final Code

This is the completed code from the official [Django Getting Started Tutorial](https://docs.djangoproject.com/en/4.1/intro/tutorial01/).

## What Was Built

A simple **polls application** where:

- Users can see a list of available polls.
- Users can vote on a poll.
- An admin can manage polls, questions, and choices.

## Getting Started

```bash
# Create and activate a virtual environment
python3 -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate

# Install dependencies
pip install django

# Apply migrations
python manage.py migrate

# Create a superuser for the admin panel
python manage.py createsuperuser

# Run the dev server
python manage.py runserver
```

Visit [http://127.0.0.1:8000/polls/](http://127.0.0.1:8000/polls/) for the app and [http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/) for the admin panel.

## Project Structure

```
django-tutorial-final/
├── manage.py
├── mysite/
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
└── polls/
    ├── admin.py
    ├── apps.py
    ├── migrations/
    ├── models.py
    ├── templates/
    │   └── polls/
    │       ├── index.html
    │       ├── detail.html
    │       └── results.html
    ├── tests.py
    ├── urls.py
    └── views.py
```
