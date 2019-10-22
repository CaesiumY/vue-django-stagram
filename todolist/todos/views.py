from django.shortcuts import render
from django.views.generic import ListView

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

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

    def post(self, request, format=None):
        serializer = TodoSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TodoDetailView(APIView):
    def get(self, request, todo_id, format=None):
        todoItem = Todo.objects.get(id=todo_id)
        serializer = TodoSerializer(todoItem)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def delete(self, request, todo_id, format=None):
        todoItem = Todo.objects.get(id=todo_id)
        if todoItem is None:
            return Response(status=status.HTTP_401_UNAUTHORIZED)
        todoItem.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, todo_id, format=None):
        todoItem = Todo.objects.get(id=todo_id)
        if todoItem is None:
            return Response(status=status.HTTP_400_BAD_REQUEST)
        serializer = TodoSerializer(todoItem, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
