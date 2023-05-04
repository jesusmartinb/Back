# GET ALL TEACHERS PUBLIC LOCATION
GET https://teachers-groupb.herokuapp.com/api/teachers/map

### RESPONSE
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
  },

# GET ALL TEACHERS

GET https://teachers-groupb.herokuapp.com/api/teachers
GET https://teachers-groupb.herokuapp.com/api/teachers?page=PAGINA

### RESPONSE 
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
      "usuario_id": 1006
    },
    
 # GET TEAHCER BY ID
    
 GET https://teachers-groupb.herokuapp.com/api/teachers/TEACHERID
 
 ### RESPONSE
 
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

# CREATE NEW TEACHER

POST https://teachers-groupb.herokuapp.com/api/teachers

### REQUEST

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

### RESPONSE 


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
 
 # UPDATE TEACHER
 
 PUT https://teachers-groupb.herokuapp.com/api/teachers/TEACHERID
 
 ### REQUEST
 
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

### RESPONSE 

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

# DELETE TEACHER

DELETE https://teachers-groupb.herokuapp.com/api/teachers/TEACHERID
 
 ### RESPONSE 

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

# SEND EMAIL

### REQUEST

{
  "destinatario": "XXXXXXXX@gmail.com",
  "asunto": "TFM",
  "cuerpo": "Este es un correo de teacherapp"
}
