### Commands to Deploy on kubernetes Cluster
kubectl create namespace myapp
kubectl apply -f Configmap.yml --namespace=myapp
kubectl apply -f Volume.yml --namespace=myapp
kubectl apply -f Depmysql.yml --namespace=myapp
kubectl apply -f Depser.yml --namespace=myapp
kubectl apply -f Depcli.yml --namespace=myapp
minikube service --all --namespace=myapp

