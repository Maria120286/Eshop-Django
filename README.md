### Instalare
**1. Creați un folder în care doriți să salvați proiectul**

**2. Creați un mediu virtual și activați**

Instalați mai întâi mediul virtual
```
$ pip install virtualenv
```

Creați un mediu virtual

Pentru Windows
```
$ python -m venv venv
```
Pentru Mac
```
$ python3 -m venv venv
```

Activați Mediul Virtual

Pentru Windows
```
$ sursă venv/scripts/activate
```

Pentru Mac
```
$ sursă venv/bin/activate
```


**4. Instalați cerințele din „requirements.txt”**
```python
$ pip install -r requirements.txt
```

**5. Adăugați gazdele**

- Am ajuns la fișierul settings.py 
- Apoi, Pe gazde permise, Adăugați [‘*’]. 
```python
ALLOWED_HOSTS = ['*']
```
*Nu este nevoie să faceți modificări pe Mac.*


**6. Acum rulați serverul**

Comanda pentru PC:
```python
$ python manage.py runserver
```

Comanda pentru Mac:
```python
$ python3 manage.py runserver
```

**7. Date de conectare**

Creați super utilizator (administrator)

Comanda pentru PC:
```
$ python manage.py createsuperuser
```

Comanda pentru MAC:
```
$ python3 manage.py createsuperuser
```
Apoi adăugați e-mail, nume de uti![Captură ecran (12)](https://github.com/Maria120286/Eshop-Django/assets/157504181/3bcdd5c5-dbba-4690-b8fa-56aa922f7a4e)
lizator și parolă![Captură ecran (3)](https://github.com/Maria120286/Eshop-Django/assets/157504181/65e390e3-9e65-466f-a9ed-cd714b1c4c66)
![Captură ecran (11)](https://github.com/Maria120286/Eshop-Django/assets/157504181/7a09c828-0639-47db-9ce7-29668d5f704c)
