from django.urls import path
from .views import TestAPIView
from rest_framework import routers
from .views import ProjectViewSet, ContractorViewSet, EquipmentViewSet


router = routers.SimpleRouter()

router.register('subject', ProjectViewSet, basename='project')
router.register('author', ContractorViewSet, basename='contractor')
router.register('course', EquipmentViewSet, basename='equipment')


urlpatterns = [
    path('test-api/', TestAPIView.as_view(), name='test-api')

]

urlpatterns += router.urls
