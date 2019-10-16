from django.db import models

# Create your models here.
class Todo(models.Model):
    body = models.CharField("body", max_length=350)
    create_at = models.DateTimeField("create_at", auto_now=False, auto_now_add=True)

    def __str__(self):
        return '{} : {}'.format(self.body, self.create_at)