## Prueba final Tekman (Front)

Para el desarrollo de la parte front de la prueba, he utilitzado el framework Angular 5.
En esta parte, a nivel de arquitectura no se ha profundizado más allá del uso del propio framework.

### Componentes
Se han desarrollado cuatro componentes, para la solicitud de datos al usuario y para mostrar la lista de tweets. Los componentes son:

- `HeaderComponent`
- `ItemComponent`
- `ListComponent`
- `SearchComponent`

No se ha utilizado ningún tipo de routing para la solución final.
Para el render de los componentes se ha usado `Bootstrap`.

### Servicios
Se ha desarrollado un único servicio para consultar a la parte backend. El servicio TwitterService dispone de un único método,
para la recuperación de los 10 últimos tweets.

## Deuda técnica
Habitualmente, para mejorar la mantenibilidad del desarrollo se crea un Servicio genérico de datos, para acceder a los distintos recursos expuestos
por una API REST. De este modo, sólo es necesario definir las URIs para cada recurso y método, y reutilizar la lógica del servicio para todos ellos, 
evitando el DRY.  
