from django.shortcuts import render, redirect
from django.urls import reverse_lazy
from django.views.generic import ListView, UpdateView, DeleteView
from rest_framework import generics
from rest_framework.permissions import AllowAny
from django.views.decorators.csrf import csrf_exempt

from .models import CustomUser, NetworkGeneration, SiteGSM
from .serializers import UserSerializer, NetworkGenerationSerializer, SiteGSMSerializer
from .forms import NetworkGenerationForm, SiteGSMForm

# User registration view
class UserCreate(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

# List and create network generations
class NetworkGenerationListCreate(generics.ListCreateAPIView):
    queryset = NetworkGeneration.objects.all()
    serializer_class = NetworkGenerationSerializer

# List and create Site GSMs
class SiteGSMListCreate(generics.ListCreateAPIView):
    queryset = SiteGSM.objects.all()
    serializer_class = SiteGSMSerializer

# Home view
def home(request):
    return render(request, 'home.html')

# Add Network Generation
@csrf_exempt
def add_network_generation(request):
    if request.method == 'POST':
        form = NetworkGenerationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('network-generation-list')  # Redirect to the network generation list view
    else:
        form = NetworkGenerationForm()
    return render(request, 'add_network_generation.html', {'form': form})

# Add Site GSM
@csrf_exempt
def add_site_gsm(request):
    if request.method == 'POST':
        form = SiteGSMForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('site-gsm-list')  # Redirect to the Site GSM list view
    else:
        form = SiteGSMForm()
    return render(request, 'add_site_gsm.html', {'form': form})

# Update Network Generation
class NetworkGenerationUpdateView(UpdateView):
    model = NetworkGeneration
    form_class = NetworkGenerationForm
    template_name = 'network/networkgeneration_form.html'
    success_url = reverse_lazy('network-generation-list')

# Delete Network Generation
class NetworkGenerationDeleteView(DeleteView):
    model = NetworkGeneration
    template_name = 'network/networkgeneration_confirm_delete.html'
    success_url = reverse_lazy('network-generation-list')

# Update Site GSM
class SiteGSMUpdateView(UpdateView):
    model = SiteGSM
    form_class = SiteGSMForm
    template_name = 'network/sitegsm_form.html'
    success_url = reverse_lazy('site-gsm-list')

# Delete Site GSM
class SiteGSMDeleteView(DeleteView):
    model = SiteGSM
    template_name = 'network/sitegsm_confirm_delete.html'
    success_url = reverse_lazy('site-gsm-list')

# List Network Generations
class NetworkGenerationListView(ListView):
    model = NetworkGeneration
    template_name = 'network_generation_list.html'

# List Site GSMs
class SiteGSMListView(ListView):
    model = SiteGSM
    template_name = 'site_gsm_list.html'



from rest_framework import generics
from rest_framework.permissions import AllowAny
from .models import NetworkGeneration, SiteGSM
from .serializers import NetworkGenerationSerializer, SiteGSMSerializer

# Retrieve, update, or delete a NetworkGeneration instance
class NetworkGenerationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = NetworkGeneration.objects.all()
    serializer_class = NetworkGenerationSerializer
    permission_classes = [AllowAny]  # Adjust permission classes as needed

# Retrieve, update, or delete a SiteGSM instance
class SiteGSMDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = SiteGSM.objects.all()
    serializer_class = SiteGSMSerializer
    permission_classes = [AllowAny]  # Adjust permission classes as needed

