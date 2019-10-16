from django.shortcuts import render
from django.views.generic import ListView
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Todo
from .serializers import TodoSerializer

# Create your views here.


class TodoView(ListView):
    model = Todo
    template_name = "index.html"
    context_object_name = 'todos'


class TodoListView(APIView):
    def get(self, request, format=None):
        todos = Todo.objects.all()
        serializer = TodoSerializer(todos, many=True)
        return Response(serializer.data)
