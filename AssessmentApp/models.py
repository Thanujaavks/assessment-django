from django.db import models

# Create your models here.
class School(models.Model):
    id = models.CharField(max_length = 5)
    schoolName = models.CharField(max_length = 255)
   

class Class(models.Model):
    id = models.CharField(max_length = 5)
    className = models.CharField(max_length = 255)
   
class Assessment_Areas(models.Model):
    id = models.CharField(max_length = 5)
    assessmentName = models.CharField(max_length = 255)

class Student(models.Model):
    id = models.CharField(max_length = 5)
    fullname = models.CharField(max_length = 255)
   

class Answer(models.Model):
    id = models.CharField(max_length = 5)
    answers = models.CharField(max_length = 255)
   

class Award(models.Model):
    id = models.CharField(max_length = 5)
    name = models.CharField(max_length = 255)
   

class Subject(models.Model):
    id = models.CharField(max_length = 5)
    subject = models.CharField(max_length = 255)
    subject_Score= models.CharField(max_length = 255)
   