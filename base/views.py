from django.shortcuts import render

# Create your views here.
def lobbyPage (request): 
    return render(request, "base/lobby.html")
def roomPage (request): 
    return render(request, "base/room.html")