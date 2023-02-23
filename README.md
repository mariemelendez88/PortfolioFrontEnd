# Proyecto Integrador Portfolio Web FrontEnd
## Tabla de contenidos
1. [Resumen](#resumen)
2. [Desarrollo](#desarrollo)
3. [Tecnologías](#tecnologias)
4. [Visualización](#visualizacion)
5. [Agradecimientos](#agradecimientos)



## Resumen

Proyecto integrador que muestra una aplicación full stack incluyendo: datos personales, estudios cursados, experiencia laboral, conocimiento de las tecnologías y mucho más.


### ¿Qué incluye?

Este proyecto final es parte del curso Argentina Programa: Yo Programo, diseñado de forma autogestionada.
Se desarrolla una **web principal** que puede ser visualizada por cualquier usuario y una web de admin, estilo **dashboard** al cual se accede con usuario y contraseña definidos en la base de datos, y en el cual se puede realizar CRUD (Create-Read-Update-Delete) de datos en los formularios creados.



## Desarrollo

Se implementa como arquitectura distribuida. El contenido de la misma es:
 * **Frontend**: Diseño de interfaz de usuario que muestra la info.
 * **Base de datos**: que almacena los datos mencionados. Para mayor info, haga click [aquí](https://github.com/mariemelendez88/PortfolioDatabase).
 * **Backend**: APIs necesarias para proveer a través de internet la información. Para mayor info, haga click [aquí](https://github.com/mariemelendez88/PortfolioBackEnd).
![Image text](https://i.ibb.co/LYPRjwG/Arquitectura.png)


### Frontend

Este repositorio desarrolla la primera parte **Frontend**.
Para ello se incluyen varias ramas dentro del repo, que tiene las etapas necesarias para seguir la evolución del proyecto desde que se inició hasta que fue implementado.

a. [Repo Estático](https://github.com/mariemelendez88/PortfolioFrontEnd/tree/RepoEstatico): incluye un primer desarrollo del portfolio frontend. 

b. [Repo Dinámico](https://github.com/mariemelendez88/PortfolioFrontEnd/tree/RepoDinamico): incluye el portafolio estático, pero esta vez, implementado en Angular, dividiendo en componentes. A su vez, se diseñaron varios archivos .json en los que se desplegó la información del repo estático, para que así cada componente lea la info y la cargue.

c. Pruebas de implementación con el backend:

* [main](https://github.com/mariemelendez88/PortfolioFrontEnd): Repo final implementado en la arquitectura distribuida.

* [Develop](https://github.com/mariemelendez88/PortfolioFrontEnd/tree/develop): Rama de desarrollo, ensayo y error, para definir nuevas funcionalidades al repo dinámico.

* [backupWithExperienceWorking](https://github.com/mariemelendez88/PortfolioFrontEnd/tree/backupWithExperienceWorking): incluye la conexión del componente ***experiencia*** con el backend y se prueban funcionalidades de CRUD, revisando exitosamente la modificación de la base de datos.

* [backupwithExpeEstuWork](https://github.com/mariemelendez88/PortfolioFrontEnd/tree/backupwithExpeEstuWork): incluye la conexión de los componentes ***experiencia y estudios*** con el backend y se prueban funcionalidades de CRUD, revisando exitosamente la modificación de la base de datos.

* [backupExpeProyEstuWorks](https://github.com/mariemelendez88/PortfolioFrontEnd/tree/backupExpeProyEstuWorks): incluye la conexión de los componentes ***experiencia, estudios y proyectos*** con el backend y se prueban funcionalidades de CRUD, revisando exitosamente la modificación de la base de datos.

* [backupExpEstSkiRedProWorking](https://github.com/mariemelendez88/PortfolioFrontEnd/tree/backupExpEstSkiRedProWorking): incluye la conexión de los componentes ***experiencia, estudios, proyectos, skills y referencias*** con el backend y se prueban funcionalidades de CRUD, revisando exitosamente la modificación de la base de datos.

Una vez desarrollado el frontend, se realizó el despliegue en **Firebase**, utilizando el [video 78](https://www.youtube.com/watch?v=mKqndHmy5v8&list=PL1oXSbt2OIbGud1tuMPMZrkXZSDifUcEU&index=78) y para actualizar cualquier modificación realizada luego del despliegue, se utilizan los siguientes comandos:

```$ ng build```

```$ firebase deploy```


## Tecnologías

Las tecnologías y lenguajes utilizados en el ***frontend*** se listan a continuación:
* [Visual Studio Code](https://code.visualstudio.com/): Version 1.75
* [HTML5](https://developer.mozilla.org/es/docs/Web/HTML)
* [CSS3](https://developer.mozilla.org/es/docs/Web/CSS)
* [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/): Version 5.0
* [TypeScript](https://www.typescriptlang.org/)
* [Angular](https://angular.io/): Version 14
* [Firebase](https://firebase.google.com/)


## Visualización

Para visualizar la página web, haga click [aquí](https://portfoliofrontend-mariem.web.app/index).

Para entrar en el segmento de dashboard, hacer click en el **login** en la parte superior derecha de la web y utilizar los siguientes datos:


**Email**: ```mail@mail.com```

**Contraseña**:  ```123456789```

Una vez terminado de usar el dashboard, hacer click en el **logout** en la parte superior derecha de la web y de forma automática, se redirige al index.


## Agradecimientos
**A Dios** que me permitió entrar en este gran mundo del saber, pues la programación requiere tiempo y esfuerzo.

**A mi mom y mi familia** que me han apoyado, y siempre están a mi lado en todo lo que hago! Gracias ma

**A ProgramaTK** gracias Gaby, Cintia, Heber, Migue... Me llevo gratos recuerdos porque no fue posible sin los meets de los martes y jueves.

**A todas...** aquellas personas que estuvieron en este camino.
