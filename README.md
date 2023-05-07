# Requisitos mínimos


1. ## Formularios de registro tanto para alumnos como para profesores.

## CREATE NEW TEACHER   (PROFESOR)
POST `https://teachers-groupb.herokuapp.com/api/teachers`

### REQUEST
Header: TOKEN
```json
{
    "nombre": "Laura",
    "apellidos": "González Sánchez",
    "fecha_nacimiento": "1984-06-04 00:00:00",
    "foto": "https://i.pravatar.cc/500?u=josemaria.zapatabravo@peticiones.online",
    "direccion": "Calle Mayor 2",
    "ciudad": "Bilbao",
    "codigo_postal": 48002,
    "longitud": "-2.934614",
    "latitud": "43.262378",
    "telefono": "944123456",
    "cuota": "65",
    "experiencia": "Experta en enseñanza de idiomas"
}
```

### RESPONSE 

```json
{
  "id": 51,
  "nombre": "Laura",
  "apellidos": "González Sánchez",
  "fecha_nacimiento": "1984-06-04T00:00:00.000Z",
  "foto": "https://i.pravatar.cc/500?u=josemaria.zapatabravo@peticiones.online",
  "direccion": "Calle Mayor 2",
  "ciudad": "Bilbao",
  "codigo_postal": 48001,
  "longitud": "-2.934614",
  "latitud": "43.262378",
  "telefono": "944123456",
  "cuota": "65",
  "experiencia": "Experta en enseñanza de idiomas",
  "usuario_id": 1016
}
```

2. ## Login de acceso a usuarios.

## REGISTER USER  (PUBLIC)
POST `https://teachers-groupb.herokuapp.com/api/users/register`

### REQUEST
```json
{
  "username": "dc6",
  "email": "dc6@gmail.com",
  "password": "12345",
  "role" : "alumno"
}
```
 ### RESPONSE 
```json
{
  "insertId": 161
}
```
## LOGIN USER (PUBLIC)
POST `https://teachers-groupb.herokuapp.com/api/users/login`

### REQUEST
```json
{
  "email": "dc6@gmail.com",
  "password": "12345"
}
```
 ### RESPONSE 
```json
{
  "success": "Login correcto",
  "token": "TOKEN"
}
```
## LOGIN PROFILE (LOGEADO)
GET `https://teachers-groupb.herokuapp.com/api/users/profile`

### REQUEST
Header: TOKEN

### RESPONSE
```json
{
  "id": 111,
  "username": "dc5",
  "email": "dc5@gmail.com",
  "role": "profesor"
}
```


3. ## Parte publica de la web, donde veras un mapa con los profesores que tienes cerca de u ubicación y un listado con los profesores mejor puntuados.

## GET TEACHERS 5 NEAR LOCATION (PUBLIC)
GET `https://teachers-groupb.herokuapp.com/api/teachers/map/`**_LATITUD_**/**_LONGITUD_**

### RESPONSE
```json
[
  {
    "nombre": "Juan",
    "apellidos": "García López",
    "longitud": "-3.705307",
    "latitud": "40.416878"
  },
  {
    "nombre": "María",
    "apellidos": "Martínez Sánchez",
    "longitud": "2.202375",
    "latitud": "41.403633"
  }]
```
## GET BEST SCORE TEACHERS (PUBLIC)
GET `https://teachers-groupb.herokuapp.com/api/puntuacion`

### RESPONSE
```json
[
  {
    "id_profesor": 2,
    "promedio_puntuacion": "9.0000",
    "teacher": {
      "nombre": "María",
      "apellidos": "Martínez Sánchez",
      "foto": "https://i.pravatar.cc/500?u=graciela.ponceabeyta@peticiones.online"
    }
  }
]
```
4. ## Los administradores podrán ver el listado de alumnos y darlos de baja (baja lógica no borrarlos).

PENDIENTE

5. ## Los administradores podrán ver un listado de los profesores y validarlos para que puedan aparecer en el directorio
  
  ## GET ALL TEACHERS INACTIVE (ADMIN)
  GET `https://teachers-groupb.herokuapp.com/api/teachers`
  GET `https://teachers-groupb.herokuapp.com/api/teachers?page=`**_PAGINA_**
  
  ### REQUEST
  Header: TOKEN
  
  ### RESPONSE 
  ```json
  {
    "page": 2,
    "perPage": 5,
    "totalItems": 14,
    "totalPages": 3,
    "results": [
      {
        "id": 6,
        "nombre": "Lucía",
        "apellidos": "Hernández Martín",
        "fecha_nacimiento": "1989-09-14T00:00:00.000Z",
        "foto": "https://i.pravatar.cc/500?u=armando.pereasedillo@peticiones.online",
        "direccion": "Calle del Mar 5",
        "ciudad": "Málaga",
        "codigo_postal": 29001,
        "longitud": "-4.421792",
        "latitud": "36.721300",
        "telefono": "952345678",
        "cuota": "50",
        "experiencia": "Especialista en física y química",
        "usuario_id": 1006,
        "status": 0
      },
    ]}
 ```
      

## SET TEACHER ACTIVE (ADMIN)
 PUT `https://teachers-groupb.herokuapp.com/api/teachers/active/`**_TEACHERID_**
 
 ### REQUEST
Header: TOKEN

 ### RESPONSE 

### RESPONSE 
```json
{
  "id": 51,
  "nombre": "Laura",
  "apellidos": "González Sánchez",
  "fecha_nacimiento": "1984-06-04T00:00:00.000Z",
  "foto": "https://i.pravatar.cc/500?u=josemaria.zapatabravo@peticiones.online",
  "direccion": "Calle Mayor 2",
  "ciudad": "Bilbao",
  "codigo_postal": 48002,
  "longitud": "-2.934614",
  "latitud": "43.262378",
  "telefono": "944123456",
  "cuota": "65",
  "experiencia": "Experta en enseñanza de idiomas",
  "usuario_id": 1016,
  "status":1
}
```

6. ## Los profesores podrán ver su perfil y los datos de los alumnos que están inscritos con ellos.

## GET TEACHER BY USERID (PROFESOR)
GET `https://teachers-groupb.herokuapp.com/api/teachers/user/`**_USERID_**

### REQUEST
Header: TOKEN

 ### RESPONSE 
```json
{
  "id": 1,
  "nombre": "Juan",
  "apellidos": "García López",
  "fecha_nacimiento": "1985-05-11T22:00:00.000Z",
  "foto": "https://i.pravatar.cc/500?u=norma.torresnevarez@peticiones.online",
  "direccion": "Calle Mayor 10",
  "ciudad": "Madrid",
  "codigo_postal": 28013,
  "longitud": "-3.705307",
  "latitud": "40.416878",
  "telefono": "910123456",
  "cuota": "50",
  "experiencia": "Especialista en matemáticas",
  "usuario_id": 1001,
  "status": 1
}
```


## GET ALUMNO BY TEACHERID (PROFESOR)
GET `https://teachers-groupb.herokuapp.com/api/`**_TEACHERID_**

### REQUEST
Header: TOKEN

 ### RESPONSE
```json
 [
  {
    "id": 1,
    "nombre": "María",
    "apellidos": "García Pérez",
    "fecha_nacimiento": "1999-05-09T22:00:00.000Z",
    "foto": "https://i.pravatar.cc/500?u=norma.torresnevarez@peticiones.online",
    "direccion": "Calle Mayor, 1",
    "ciudad": "Madrid",
    "codigo_postal": 28013,
    "longitud": "-3.703790",
    "latitud": "40.415363",
    "telefono": "911234567",
    "estudia": "Licenciatura en Historia",
    "usuario_id": 151,
    "status": 1,
    "profesor_id": 1,
    "alumno_id": 1,
    "rama_co_id": 1,
    "nivel_id": 1
  }]
```



7. ## El alumno solo podrá acceder a su perfil y puntuar y opinar sobre los diferentes profesores siempre y cuando haya sido alumno suyo en algún momento.

PENDIENTE

# Deseables:

1. ## Envío de notificaciones por email a los administradores cuando un nuevo profesor se registra para que el administrador vaya a validarlo.

## SEND EMAIL  (PROFESOR)
POST `https://teachers-groupb.herokuapp.com/api/mail`

### REQUEST
Header: TOKEN
```json
{ "destinatario": "XXXXXXXX@gmail.com", "asunto": "TFM", "cuerpo": "Este es un correo de teacherapp" }
```
2. ## Sistema de mensajes (no chat en tiempo real) donde un alumno se puede
comunicar con su profesor y viceversa, tipo Wallapop.

PENDIENTE


# OTROS

 ## GET TEAHCER BY ID
 GET https://teachers-groupb.herokuapp.com/api/teachers/TEACHERID
 
 ### RESPONSE
 ```json
[
  {
    "id": 6,
    "nombre": "Lucía",
    "apellidos": "Hernández Martín",
    "fecha_nacimiento": "1989-09-14T00:00:00.000Z",
    "foto": "https://i.pravatar.cc/500?u=armando.pereasedillo@peticiones.online",
    "direccion": "Calle del Mar 5",
    "ciudad": "Málaga",
    "codigo_postal": 29001,
    "longitud": "-4.421792",
    "latitud": "36.721300",
    "telefono": "952345678",
    "cuota": "50",
    "experiencia": "Especialista en física y química",
    "usuario_id": 1006
  }
]
```


 ## UPDATE TEACHER (ADMIN)
 PUT https://teachers-groupb.herokuapp.com/api/teachers/TEACHERID
 
 ### REQUEST
 ```json
{
    "nombre": "Laura",
    "apellidos": "González Sánchez",
    "fecha_nacimiento": "1984-06-04 00:00:00",
    "foto": "https://i.pravatar.cc/500?u=josemaria.zapatabravo@peticiones.online",
    "direccion": "Calle Mayor 2",
    "ciudad": "Bilbao",
    "codigo_postal": 48002,
    "longitud": "-2.934614",
    "latitud": "43.262378",
    "telefono": "944123456",
    "cuota": "65",
    "experiencia": "Experta en enseñanza de idiomas"
}
```
### RESPONSE 
```json
{
  "id": 51,
  "nombre": "Laura",
  "apellidos": "González Sánchez",
  "fecha_nacimiento": "1984-06-04T00:00:00.000Z",
  "foto": "https://i.pravatar.cc/500?u=josemaria.zapatabravo@peticiones.online",
  "direccion": "Calle Mayor 2",
  "ciudad": "Bilbao",
  "codigo_postal": 48002,
  "longitud": "-2.934614",
  "latitud": "43.262378",
  "telefono": "944123456",
  "cuota": "65",
  "experiencia": "Experta en enseñanza de idiomas",
  "usuario_id": 1016
}
```
## DELETE TEACHER (ADMIN)
DELETE https://teachers-groupb.herokuapp.com/api/teachers/TEACHERID
 
 ### RESPONSE 
```json
{
  "id": 51,
  "nombre": "Laura",
  "apellidos": "González Sánchez",
  "fecha_nacimiento": "1984-06-04T00:00:00.000Z",
  "foto": "https://i.pravatar.cc/500?u=josemaria.zapatabravo@peticiones.online",
  "direccion": "Calle Mayor 2",
  "ciudad": "Bilbao",
  "codigo_postal": 48002,
  "longitud": "-2.934614",
  "latitud": "43.262378",
  "telefono": "944123456",
  "cuota": "65",
  "experiencia": "Experta en enseñanza de idiomas",
  "usuario_id": 1016
}
}
```
