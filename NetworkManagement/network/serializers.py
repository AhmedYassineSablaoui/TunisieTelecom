from rest_framework import serializers
from .models import CustomUser, NetworkGeneration, SiteGSM

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'email', 'access_key', 'password']  # Include necessary fields

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
            access_key=validated_data.get('access_key', '')  # Adjust according to your model's requirement
        )
        return user

class NetworkGenerationSerializer(serializers.ModelSerializer):
    class Meta:
        model = NetworkGeneration
        fields = '__all__'

class SiteGSMSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteGSM
        fields = '__all__'
