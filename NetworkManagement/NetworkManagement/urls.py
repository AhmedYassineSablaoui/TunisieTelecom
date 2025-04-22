from django.contrib import admin
from django.urls import path, include
from network.views import NetworkGenerationDetail, SiteGSMDetail, UserCreate
from network.views import NetworkGenerationListCreate, SiteGSMListCreate

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('network.urls')),  # Include URLs from the network app
    path('api/network-generations/', NetworkGenerationListCreate.as_view(), name='network-generation-list-create'),
    path('api/site-gsm/', SiteGSMListCreate.as_view(), name='site-gsm-list-create'),
    path('api/register/', UserCreate.as_view(), name='user-create'),
    path('api/network-generations/<int:pk>/', NetworkGenerationDetail.as_view(), name='network-generation-detail'),
    path('api/site-gsm/<int:pk>/', SiteGSMDetail.as_view(), name='site-gsm-detail'),
    
]

