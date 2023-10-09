# 1er-Parcial-Seminario

Entrar a la carpeta "server" e instalar las dependencias:
```sh
cd server
```
```sh
npm i
```

Luego crear la imagen para poder usarla con el servicio:
```sh
docker build -t dolarparcial .
```

Luego salir de esa ruta con:
```sh
cd ..
```

Para poder hacer el servio con
```sh
docker stack deploy -c servicio.yml dolarparcial
```

Una vez que se crean todos los contenedores, podras ocuparlos con

Para saber el precio del dolar oficial es con
```sh
http://localhost:3001/oficial
```

Y para saber del blue es con 
```sh
http://localhost:3001/blue
```
