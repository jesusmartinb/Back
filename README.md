

# GET ALL TEACHERS

GET https://teachers-groupb.herokuapp.com/teachers
GET https://teachers-groupb.herokuapp.com/teachers?page=PAGINA

# RESPONSE 
{
  "page": 1,
  "perPage": 5,
  "totalItems": 17,
  "totalPages": 4,
  "results": [
    {
      "id": 1,
      "first_name": "John",
      "last_name": "Doe",
      "username": "johndoe",
      "email": "john.doe@example.com"
    },
    {
      "id": 11,
      "first_name": "daniel",
      "last_name": "colmenares",
      "username": "dcdager13",
      "email": "dcdage50@example.com"
    },
    
 # GET TEAHCER BY ID
    
 GET https://teachers-groupb.herokuapp.com/teachers/TEACHERID
 
 # RESPONSE
 
 [
  {
    "id": 11,
    "first_name": "daniel",
    "last_name": "colmenares",
    "username": "dcdager13",
    "email": "dcdage50@example.com"
  }
]

# CREATE NEW TEACHER

POST https://teachers-groupb.herokuapp.com/teachers

# REQUEST

{
    "first_name" : "daniel",
    "last_name" : "colmenares",
    "username" : "dcdager30",
    "email" : "dcdage55@example.com"
}

# RESPONSE 

{
  "id": 211,
  "first_name": "daniel",
  "last_name": "colmenares",
  "username": "dcdager30",
  "email": "dcdage55@example.com"
}
 
 # UPDATE TEACHER
 
 PUT https://teachers-groupb.herokuapp.com/teachers/TEACHERID
 
 # REQUEST
 
 {
    "first_name" : "daniel",
    "last_name" : "colmenares",
    "username" : "dcdager17",
    "email" : "dcdage50@example.com"
}

# RESPONSE 

{
  "id": 11,
  "first_name": "daniel",
  "last_name": "colmenares",
  "username": "dcdager17",
  "email": "dcdage50@example.com"
}

# DELETE TEACHER

DELETE https://teachers-groupb.herokuapp.com/teachers/TEACHERID
 
 # RESPONSE 

{
  "id": 11,
  "first_name": "daniel",
  "last_name": "colmenares",
  "username": "dcdager17",
  "email": "dcdage50@example.com"
}
