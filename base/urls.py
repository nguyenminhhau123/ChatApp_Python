from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [

 path('',views.lobbyPage),
 path('room/',views.roomPage)
]