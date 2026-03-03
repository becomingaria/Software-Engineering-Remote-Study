from django.shortcuts import render, redirect, get_object_or_404
from .models import Cat
from .forms import CatForm


def home(request):
    return render(request, 'main_app/home.html')


def about(request):
    return render(request, 'main_app/about.html')


def cats_index(request):
    cats = Cat.objects.all()
    return render(request, 'main_app/cats/index.html', {'cats': cats})


def cats_detail(request, cat_id):
    cat = get_object_or_404(Cat, id=cat_id)
    return render(request, 'main_app/cats/detail.html', {'cat': cat})


def cats_create(request):
    if request.method == 'POST':
        form = CatForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('cats_index')
    else:
        form = CatForm()
    return render(request, 'main_app/cats/form.html', {'form': form})


def cats_update(request, cat_id):
    cat = get_object_or_404(Cat, id=cat_id)
    if request.method == 'POST':
        form = CatForm(request.POST, instance=cat)
        if form.is_valid():
            form.save()
            return redirect('cats_detail', cat_id=cat.id)
    else:
        form = CatForm(instance=cat)
    return render(request, 'main_app/cats/form.html', {'form': form})


def cats_delete(request, cat_id):
    cat = get_object_or_404(Cat, id=cat_id)
    cat.delete()
    return redirect('cats_index')
