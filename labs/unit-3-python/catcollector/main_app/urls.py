from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('cats/', views.cats_index, name='cats_index'),
    path('cats/<int:cat_id>/', views.cats_detail, name='cats_detail'),
    path('cats/create/', views.cats_create, name='cats_create'),
    path('cats/<int:cat_id>/update/', views.cats_update, name='cats_update'),
    path('cats/<int:cat_id>/delete/', views.cats_delete, name='cats_delete'),
]
