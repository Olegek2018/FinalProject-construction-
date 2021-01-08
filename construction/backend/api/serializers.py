# from rest_framework.views import APIView
# from rest_framework.response import Response
#
#
# class TestAPIView(APIView):
#
#     @staticmethod
#     def get(request, *args, **kwargs): # self
#         data = [
#             {"id": 1, "name": " user 1", "age": 21, "rate": 8},
#             {"id": 1, "name": " user 2", "age": 34, "rate": 9.5},
#             {"id": 1, "name": " user 3", "age": 18, "rate": 8}
#         ]
#         return Response(data)
#
#
from rest_framework import serializers
from ..models import Project, Contractor, Equipment


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'


class ContractorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contractor
        fields = '__all__'


class EquipmentSerializer(serializers.ModelSerializer): # serializers = class + envelope
    class Meta:
        model = Equipment
        fields = '__all__'