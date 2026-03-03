# CatCollector

A Django CRUD application used in the Unit 3 coursework for practicing Django views, URLs, templates, and models.

## What You'll Build

A web app to keep track of your cat collection! Users can:

- View all cats
- View a single cat's details
- Add a new cat
- Edit a cat's information
- Delete a cat

## Getting Started

```bash
# Create and activate virtualenv
python3 -m venv .venv
source .venv/bin/activate

# Install Django
pip install django psycopg2-binary

# Create the database
createdb catcollector

# Apply migrations
python manage.py migrate

# Run the server
python manage.py runserver
```

## Project Structure

```
catcollector/
├── manage.py
├── catcollector/          ← project config
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
└── main_app/              ← main application
    ├── migrations/
    ├── templates/
    │   └── main_app/
    │       ├── base.html
    │       ├── home.html
    │       ├── about.html
    │       ├── cats/
    │       │   ├── index.html
    │       │   ├── detail.html
    │       │   └── form.html
    ├── admin.py
    ├── forms.py
    ├── models.py
    ├── urls.py
    └── views.py
```

## Models

```python
class Cat(models.Model):
    name = models.CharField(max_length=100)
    breed = models.CharField(max_length=100)
    description = models.TextField(max_length=250)
    age = models.IntegerField()
```

## URL Routes

| URL                  | View        | Template         | CRUD       |
| -------------------- | ----------- | ---------------- | ---------- |
| `/`                  | home        | home.html        | —          |
| `/about/`            | about       | about.html       | —          |
| `/cats/`             | cats_index  | cats/index.html  | Read (All) |
| `/cats/<id>/`        | cats_detail | cats/detail.html | Read (One) |
| `/cats/create/`      | cats_create | cats/form.html   | Create     |
| `/cats/<id>/update/` | cats_update | cats/form.html   | Update     |
| `/cats/<id>/delete/` | cats_delete | —                | Delete     |
