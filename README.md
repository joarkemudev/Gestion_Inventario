inventory-management/
│
├── frontendig/                 # Aplicación React
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── RegistrarInventario.tsx
│   │   │   └── EntregarInventario.tsx
│   │   ├── AppIG.tsx
│   │   └── index.tsx
│   ├── package.json
│   └── tsconfig.json
│
├── backend/                  # Proyecto Django
│   ├── backendIG/
│   │   ├── migrations/
│   │   ├── **init**.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── tests.py
│   │   ├── urls.py
│   │   └── views.py
│   ├── project/
│   │   ├── **init**.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── manage.py
│   └── requirements.txt
│
└── README.md


## Requisitos Previos

- Python 3.8+
- Node.js 14+
- MySQL
- MongoDB

## Configuración del Entorno

### Backend (Django)

1. Navega al directorio del backend:cd backend

2. Crea un entorno virtual:python -m venv venv

3. Activa el entorno virtual:
- En Windows:venv\Scripts\activate

4. Instala las dependencias:pip install -r requirements.txt

5. Configura las bases de datos:
- Crea una base de datos MySQL llamada `igc`
- Asegúrate de que MongoDB esté en ejecución

6. Actualiza la configuración de la base de datos en `backend/project/settings.py` con tus credenciales de MySQL y MongoDB.

7. Realiza las migraciones:python manage.py makemigrations
python manage.py migrate


### Frontend (React)

1. Navega al directorio del frontend:cd frontend

2. Instala las dependencias:npm install


## Ejecución del Proyecto

1. Inicia el servidor de Django:cd backend python manage.py runserver

El servidor de Django estará disponible en `http://localhost:8000`.

2. En una nueva terminal, inicia la aplicación React:cd frontend npm start

La aplicación React estará disponible en `http://localhost:3000`.

3. Abre tu navegador y visita `http://localhost:3000` para ver la aplicación en funcionamiento.

## Uso de la Aplicación

1. En la página de "Registrar Inventario", selecciona un producto de la lista desplegable y ingresa la cantidad. Haz clic en "Guardar y Enviar" para registrar el inventario.

2. En la página de "Entregar Inventario", verás una lista de los productos en inventario. Puedes hacer clic en "Entregar" para marcar un producto como entregado.

## Notas Adicionales

- Asegúrate de que tanto el servidor de Django como la aplicación React estén en ejecución simultáneamente para el funcionamiento completo de la aplicación.
- Para acceder al panel de administración de Django, visita `http://localhost:8000/admin` e ingresa con las credenciales del superusuario que creaste.
