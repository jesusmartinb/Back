# Requisitos mínimos


1. ## Formularios de registro tanto para alumnos como para profesores.

## CREATE NEW TEACHER   (PROFESOR)
POST `https://teachers-groupb.herokuapp.com/api/teachers`

### REQUEST
Header: TOKEN
```json
{
    "usuario_id": 1016,
    "cuota": "65",
    "experiencia": "Experta en enseñanza de idiomas"
}
```

### RESPONSE 

```json
{
  "id": 51,
  "usuario_id": 1016,
  "cuota": "65",
  "experiencia": "Experta en enseñanza de idiomas",
  "status":0
}
```
## CREATE NEW TEACHER  PERSONAL DATA (PROFESOR)
POST `https://teachers-groupb.herokuapp.com/api/personal/teacher`

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
    "codigo_postal": 48001,
    "telefono": "924422879",
    "usuario_id": 1049
}
```
### RESPONSE 
```json
{
    "id":100,
    "nombre": "Laura",
    "apellidos": "González Sánchez",
    "fecha_nacimiento": "1984-06-04 00:00:00",
    "foto": "https://i.pravatar.cc/500?u=josemaria.zapatabravo@peticiones.online",
    "direccion": "Calle Mayor 2",
    "ciudad": "Bilbao",
    "codigo_postal": 48001,
    "telefono": "924422879",
    "usuario_id": 1049
}



## CREATE NEW STUDENT   (ALUMNO)
POST `https://teachers-groupb.herokuapp.com/api/alumno`

### REQUEST
Header: TOKEN
```json
{
    "usuario_id": 291,
    "estudia" : "Ingenieria"
}
```

### RESPONSE 
```json
{
  "id": 371,
    "usuario_id": 291,
    "estudia" : "Ingenieria",
    "status": 1
}
```
## CREATE NEW STUDENT  PERSONAL DATA (ALUMNO)
POST `https://teachers-groupb.herokuapp.com/api/personal/alumno`

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
    "codigo_postal": 48001,
    "telefono": "924422879",
    "usuario_id": 1049
}
```
### RESPONSE 
```json
{
    "id":100,
    "nombre": "Laura",
    "apellidos": "González Sánchez",
    "fecha_nacimiento": "1984-06-04 00:00:00",
    "foto": "https://i.pravatar.cc/500?u=josemaria.zapatabravo@peticiones.online",
    "direccion": "Calle Mayor 2",
    "ciudad": "Bilbao",
    "codigo_postal": 48001,
    "telefono": "924422879",
    "usuario_id": 1049
}



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
POST https://teachers-groupb.herokuapp.com/api/teachers/map

### REQUEST
```json
{
  "direccion" : "Calle Mayor 8"
}
```

### RESPONSE
```json
[
 {
    "id": 1001,
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
    "usuario_id": 1001,
    "username": "dc",
    "email": "dc@gmail.com",
    "role": "profesor"
  }
  ]
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

  ## GET ALL STUDENTS (ADMIN)

  GET `https://teachers-groupb.herokuapp.com/api/alumno`
  GET `https://teachers-groupb.herokuapp.com/api/alumno?page=`**_PAGINA_**
  ### REQUEST
  Header: TOKEN
  ### RESPONSE 
  ```json
  {
    "page": 1,
    "perPage": 5,
    "totalItems": 4,
    "totalPages": 1,
    "results": [
      {
        "id": 201,
        "estudia": "Licenciatura en Historia",
        "usuario_id": 151,
        "status": 1,
        "nombre": "María",
        "apellidos": "García Pérez",
        "fecha_nacimiento": "1999-05-09T22:00:00.000Z",
        "foto": "https://i.pravatar.cc/500?u=norma.torresnevarez@peticiones.online",
        "direccion": "Calle Mayor, 1",
        "ciudad": "Madrid",
        "codigo_postal": 28013,
        "longitud": "-3.703790",
        "latitud": "40.415363",
        "telefono": "911234567"
      }]
  }
  ```

## SET STUDENT INACTIVE (ADMIN)
PUT `https://teachers-groupb.herokuapp.com/api/alumno/inactiv/USUARIO_ID`

### REQUEST
Header: TOKEN
### RESPONSE 
```json
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
  "usuario_id": 151,
  "estudia": "Licenciatura en Historia",
  "status": 0
}
```



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
      "cuota": "50.00",
      "experiencia": "Especialista en física y química",
      "usuario_id": 1006,
      "status": 0,
      "nombre": "Lucía",
      "apellidos": "Hernández Martín",
      "fecha_nacimiento": "1989-09-13T22:00:00.000Z",
      "foto": "https://i.pravatar.cc/500?u=armando.pereasedillo@peticiones.online",
      "direccion": "Calle del Mar 5",
      "ciudad": "Málaga",
      "codigo_postal": 29001,
      "longitud": "-4.421792",
      "latitud": "36.721300",
      "telefono": "952345678"
      },
    ]}
  ```
      

## SET TEACHER ACTIVE (ADMIN)
 PUT https://teachers-groupb.herokuapp.com/api/teachers/active/USUARIO_ID
 
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

## GET TEACHER BY USUARIO_ID (PROFESOR)
GET https://teachers-groupb.herokuapp.com/api/teachers/user/USUARO_ID

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


## GET ALUMNO BY USUARIO_ID (PROFESOR)
GET https://teachers-groupb.herokuapp.com/api/clase/USUARIO_ID

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

## GET ALUMNO BY USUARIO_ID (ALUMNO)
GET https://teachers-groupb.herokuapp.com/api/alumno/USUARIO_ID
### REQUEST
Header: TOKEN
### RESPONSE
```json
{
  "id": 2,
  "nombre": "Pedro",
  "apellidos": "García Pérez",
  "fecha_nacimiento": "1999-05-09T22:00:00.000Z",
  "foto": "https://i.pravatar.cc/500?u=norma.torresnevarez@peticiones.online",
  "direccion": "Calle Mayor, 1",
  "ciudad": "Madrid",
  "codigo_postal": 28013,
  "longitud": "-3.723790",
  "latitud": "40.415363",
  "telefono": "911234867",
  "usuario_id": 161,
  "estudia": "Licenciatura en Historia",
  "status": 1
}
```

## GET ALL TEACHERS ACTIVE (ALUMNO)
GET `https://teachers-groupb.herokuapp.com/api/teachers/active`
### REQUEST
Header: TOKEN
### RESPONSE
```json
{
  "page": 1,
  "perPage": 5,
  "totalItems": 7,
  "totalPages": 2,
  "results": [
    {
      "id": 1,
      "cuota": "50.00",
      "experiencia": "Especialista en matemáticas",
      "usuario_id": 1001,
      "status": 1,
      "nombre": "Juan",
      "apellidos": "García López",
      "fecha_nacimiento": "1985-05-11T22:00:00.000Z",
      "foto": "https://i.pravatar.cc/500?u=norma.torresnevarez@peticiones.online",
      "direccion": "Calle Mayor 10",
      "ciudad": "Madrid",
      "codigo_postal": 28013,
      "longitud": "-3.705307",
      "latitud": "40.416878",
      "telefono": "910123456"
    }]}
```

## GET ALUMNO = TEACHER (ALUMNO)  (DEVUELVE TRUE SI UN ALUMNO HA TENIDO CLASES CON UN PROFESOR)
GET `https://teachers-groupb.herokuapp.com/api/clase/exist`
### REQUEST
Header: TOKEN
### RESPONSE
```json
{
  "profesor_id": 2,
  "alumno_id": 1
}
```
NOTA: El profesor_id es el campo id al llamar "get all teachers active" y alumno_id es el campo id al llamar "get alumno by usuario_id".

## CREATE PUNTUACION (ALUMNO)
POST `https://teachers-groupb.herokuapp.com/api/puntuacion`
### REQUEST
Header: TOKEN
### RESPONSE
```json
{
  "profesor_id": 3,
  "alumno_id": 1,
  "puntuacion": 10,
  "opinion": "excelente"
}
```

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

Nota: Tanto el remitente como destinatario se refiere a Usuario_id

## Insert Message (LOGEADO)
POST `https://teachers-groupb.herokuapp.com/api/chat/enviarMensaje`

### REQUEST
Header: TOKEN
```json
{
  "remitente": 201,
  "destinatario": 121,
  "contenido": "tiene un segundo"
}
```

## Get Message (LOGEADO)
### REQUEST
Header: TOKEN
```json
{
  "remitente": 201,
  "destinatario": 121
 
}
```
### RESPONSE
```json
[
  {
    "id": 21,
    "remitente": 201,
    "destinatario": 121,
    "mensaje": "tiene un segundo",
    "fecha_act": "2023-05-10T11:35:56.000Z"
  },
  {
    "id": 11,
    "remitente": 201,
    "destinatario": 121,
    "mensaje": "buenas tardes",
    "fecha_act": "2023-05-10T11:35:48.000Z"
  }]
  ```

  # OTROS

  ## GET nivel (LOGEADO)
GET `https://teachers-groupb.herokuapp.com/api/clase/nivel`

### REQUEST
Header: TOKEN
### RESPONSE
```json
[
  {
    "id": 1,
    "nivel": "bajo",
    "usuario_id": 201
  },
  {
    "id": 11,
    "nivel": "alto",
    "usuario_id": 202
  }
]
```

  ## GET rama (LOGEADO)
GET `https://teachers-groupb.herokuapp.com/api/clase/rama`

### REQUEST
Header: TOKEN
### RESPONSE
```json
[
  {
    "id": 1,
    "usuario_id": 202,
    "materia": "literatura"
  },
  {
    "id": 11,
    "usuario_id": 201,
    "materia": "Matematica"
  }
]
```

## create nivel (LOGEADO)
POST `https://teachers-groupb.herokuapp.com/api/clase/nivel`

### REQUEST
Header: TOKEN
```json
{
  "usuario_id": 202,
  "nivel": "alto"
}
```
### RESPONSE
```json
{
  "fieldCount": 0,
  "affectedRows": 1,
  "insertId": 21,
  "info": "",
  "serverStatus": 2,
  "warningStatus": 0
}
```


## create nivel (LOGEADO)
POST `https://teachers-groupb.herokuapp.com/api/clase/rama`

### REQUEST
Header: TOKEN
```json
{
  "usuario_id": 201,
  "materia": "Matematica"
}

```

### RESPONSE
```json
{
  "fieldCount": 0,
  "affectedRows": 1,
  "insertId": 21,
  "info": "",
  "serverStatus": 2,
  "warningStatus": 0
}
```


## Otros

## GET admin by ID (ADMIN)
GET `https://teachers-groupb.herokuapp.com/api/admin/USUARIO_ID`

### REQUEST
Header: TOKEN

### RESPONSE
```json
{
  "id": 91,
  "nombre": "Daniel",
  "apellidos": "Perez",
  "usuario_id": 91,
  "username": "dc1",
  "email": "dc1@gmail.com",
  "role": "admin"
}
```

## GET teachers by alumno (ALUMNO)
GET  `https://teachers-groupb.herokuapp.com/api/alumno/teachers/USUARIO_ID`

### REQUEST
Header: TOKEN

```json
  {
    "id": 1,
    "profesor_id": 1,
    "alumno_id": 1,
    "rama_co_id": 1,
    "nivel_id": 1,
    "cuota": "50.00",
    "experiencia": "Especialista en matemáticas",
    "usuario_id": 1001,
    "status": 1,
    "datos_per": {
      "id": 1001,
      "nombre": "Juan",
      "apellidos": "García López",
      "fecha_nacimiento": "1985-05-12T00:00:00.000Z",
      "foto": "https://i.pravatar.cc/500?u=norma.torresnevarez@peticiones.online",
      "direccion": "Calle Mayor 10",
      "ciudad": "Madrid",
      "codigo_postal": 28013,
      "longitud": "-3.705307",
      "latitud": "40.416878",
      "telefono": "910123456",
      "usuario_id": 1001,
      "username": "dc20",
      "email": "dc20@gmail.com",
      "role": "profesor"
    }
  }

```