from django.shortcuts import render
from django.views.generic import ListView
from .models import Todo

# Create your views here.


class TodoView(ListView):
    model = Todo
    template_name = "index.html"
    context_object_name = 'todos'
