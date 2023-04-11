import mysql.connector

mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="qbox123456789",
    database="world"
)
mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM City")

myresult = mycursor.fetchall()

for x in myresult:
  print(x)