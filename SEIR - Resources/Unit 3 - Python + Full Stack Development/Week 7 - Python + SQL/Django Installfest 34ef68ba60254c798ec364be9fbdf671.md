# Django Installfest

### 1. Create Project Folder

In terminal:

```
mkdir cat_collector_django && cd cat_collector_django
```

### 2. Set up your Django environment

This has been super frustrating today so I’ll add to this section as we go today.

```bash
brew install pipenv #pip3 install pipenv will not work on mac systems
pipenv shell #activates your pipenv environment
pipenv install Django
```

<aside>
⚠️ *If you are receiving the error `zsh: command not found: pipenv` when running `pipenv shell`, try `python3 -m pipenv shell` instead.*

If you’re still running into `*zsh: command not found: pipenv*` Setup your Python PATH with the following commands:

- `PYTHON_BIN_PATH="$(python3 -m site --user-base)/bin"`
- `PATH="$PATH:$PYTHON_BIN_PATH"`
</aside>

### 3. Use Django Start Project to generate settings

Django has incredible superpowers where it can create all the startup code for our application. To get started we must run the django-admin command.

In Terminal:

```
django-admin startproject catcollector . # DO NOT FORGET THE 'dot' AT THE END
```

Take a minute to look at the generated files. Your file structure should look something like this:

```
cat_collector_django
├── manage.py
├── Pipfile
├── Pipfile.lock
└── catcollector
    ├── __init__.py
    ├── asgi.py
    ├── settings.py
    ├── urls.py
    └── wsgi.py
```

The only file we will need to configure is going to be the [`settings.py`](http://settings.py/) when we start the configuration. As for now, we will move on to the next step.

To close the `pipenv`shell, type `exit` in the terminal and hit enter.