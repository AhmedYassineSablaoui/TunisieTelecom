from django.urls import path
from .views import (
    UserCreate,
    NetworkGenerationListCreate,
    SiteGSMListCreate,
    NetworkGenerationDetail,
    SiteGSMDetail,
    home,
    add_network_generation,
    add_site_gsm,
    NetworkGenerationUpdateView,
    NetworkGenerationDeleteView,
    SiteGSMUpdateView,
    SiteGSMDeleteView,
    NetworkGenerationListView,
    SiteGSMListView,
)

urlpatterns = [
    path('', home, name='home'),
    path('register/', UserCreate.as_view(), name='register'),
    path('network-generations/', NetworkGenerationListCreate.as_view(), name='network-generation-list'),
    path('network-generations/<int:pk>/', NetworkGenerationDetail.as_view(), name='network-generation-detail'),
    path('network-generations/add/', add_network_generation, name='add-network-generation'),
    path('network-generations/<int:pk>/edit/', NetworkGenerationUpdateView.as_view(), name='update-network-generation'),
    path('network-generations/<int:pk>/delete/', NetworkGenerationDeleteView.as_view(), name='delete-network-generation'),
    path('site-gsm/', SiteGSMListCreate.as_view(), name='site-gsm-list'),
    path('site-gsm/<int:pk>/', SiteGSMDetail.as_view(), name='site-gsm-detail'),
    path('site-gsm/add/', add_site_gsm, name='add-site-gsm'),
    path('site-gsm/<int:pk>/edit/', SiteGSMUpdateView.as_view(), name='update-site-gsm'),
    path('site-gsm/<int:pk>/delete/', SiteGSMDeleteView.as_view(), name='delete-site-gsm'),
]
