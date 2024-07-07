# e2_tingeso2024


Kubernetes
minikube start

deployments
kubectl apply -f config-server-deployment.yaml
kubectl apply -f eureka-server-deployment.yaml
kubectl apply -f gateway-server-deployment.yaml
kubectl apply -f reparaciones-db-deployment.yaml
kubectl apply -f reparaciones-deployment.yaml
kubectl apply -f vehiculos-db-deployment.yaml
kubectl apply -f vehiculos-deployment.yaml

services
kubectl apply -f config-server-service.yaml
kubectl apply -f eureka-server-service.yaml
kubectl apply -f gateway-server-service.yaml
kubectl apply -f reparaciones-db-service.yaml
kubectl apply -f vehiculos-db-service.yaml