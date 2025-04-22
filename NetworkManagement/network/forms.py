from django import forms
from .models import NetworkGeneration, SiteGSM

class NetworkGenerationForm(forms.ModelForm):
    class Meta:
        model = NetworkGeneration
        fields = '__all__'


class SiteGSMForm(forms.ModelForm):
    class Meta:
        model = SiteGSM
        fields = '__all__'
