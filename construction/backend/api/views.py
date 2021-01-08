from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import viewsets
from .serializers import ProjectSerializer, ContractorSerializer, EquipmentSerializer
from ..models import Project, Contractor, Equipment


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class ContractorViewSet(viewsets.ModelViewSet):
    queryset = Contractor.objects.all()
    serializer_class = ContractorSerializer


class EquipmentViewSet(viewsets.ModelViewSet):
    queryset = Equipment.objects.all()
    serializer_class = EquipmentSerializer


class TestAPIView(APIView):

    @staticmethod  # instead of "self," below in brackets
    def get(request, *args, **kwargs):  # self
        data = [
            {"id": 1, "name": " user 1", "age": 21, "rate": 8},
            {"id": 2, "name": " user 2", "age": 34, "rate": 9.5},
            {"id": 3, "name": " user 3", "age": 18, "rate": 8}
        ]
        return Response(data)


