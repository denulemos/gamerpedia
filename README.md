# Gamerpedia App ❤️

![pantalla1](docuAssets/screen.jpg)

## ¿Qué es esto? 👀️

Es una aplicación muy simple donde, usando la API **RAWG VideoGames Database** podemos ver detalles sobre los juegos mas recientes del mercado, sus desarrolladores y de algunas plataformas históricas (y mas actuales) de gaming.
Tendremos 3 categorías:

* **Juegos** -> Podremos ver una lista enorme de juegos y, si ingresamos al detalle de los mismos, podremos ver Screenshots y las fechas de estreno de cada uno.
* **Desarrolladores** -> Podremos ver las empresas de Videojuegos mas famosas. En el detalle de los mismos, podremos acceder al detalle de algunos juegos desarrollados por ellos.
* **Plataformas** -> Una lista de las plataformas mas conocidas de Videojuegos, podremos ver algunos nombres de juegos que pueden ser ejecutados en ellos y una breve descripción (no disponible en todas las plataformas).

Para usar esta aplicación es necesario registrarse solo con Email y Contraseña. (¿Dispositivo Xiaomi? Ver Known Issues!)

## Set up 🚀️

### Antes que nada...

### Ahora si... ¿Cómo comenzamos?

1. Clonar el proyecto
2. Correr un `npm install` para instalar las dependencias correspondientes para ejecutar el proyecto (En la carpeta raíz de este proyecto, donde se encuentra el archivo `package.json`).
3. Si quiero correr el Metro Bundler de manera independiente `react-native start`. El primer bundle puede tardar un poco.
4. Y, si quiero correr este mismo proyecto en un device Android (Virtual o conectado con el debugging habilitado) `react-native run-android`, lo mismo con iOS `react-native run-ios`. Probablemente nos tire un error de `API Keys Invalidas`.

Luego, debemos configurar **Firebase** para poder logearnos!

1. Vamos a firebase.google.com, y creamos una cuenta (si aun no la tenemos hecha).
2. Vamos a la consola y creamos un proyecto, o usamos uno ya existente.
3. Ya en la consola, habilitamos el Sign-in method de Correo electrónico/contraseña
4. Volvemos a la información general y creamos una nueva aplicación de proyecto llamada `com.gamerpedia`
5. Firebase nos proveerá un SDK Snippet. Tomamos solo lo que esta en `firebaseConfig` y lo pegamos dentro del archivo `firebaseConfig.js` que dejo en la carpeta `services`
6. En mi caso personal, también me encargué de configurar Firebase en mi instancia de Android Nativa, pero no creo que sea necesario. 
   
   **Y listo! A disfrutar :) ❤️**

## Herramientas usadas

* Visual Studio code como IDE principal.
* Postman para probar los servicios.
* RAWG VideoGames Database como API.
* Git.
* Firebase.
* Typora para la escritura de la documentación.
* React Native con Navigation y Axios.
* NodeJS y NPM para el manejo de dependencias.
* Android Studio para AVD y el build de Gradle.
* Firebase para el registro de usuarios. 

## Known Issues 😕

* En dispositivos Xiaomi con Android 10 (chequeado en un Xiaomi Note 9 Pro) la aplicación crashea al momento de autocompletar el campo "Email" en el login. Se probó el fix de setear el `caretHidden = {true}` pero el error puede seguir sucediendo. 

