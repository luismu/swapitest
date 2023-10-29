import { useNavigate } from "react-router-dom";
export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <main className="main__container">
      <div>
        <button
          style={{ width: 200 }}
          onClick={() => {
            navigate(-1);
          }}
        >
          Go back
        </button>
        <img
          onClick={() => {
            navigate(-1);
          }}
          src="https://cdn.dribbble.com/users/490588/screenshots/3329226/attachments/720733/star_wars_hd.png?resize=800x600&vertical=center"
        />
      </div>
    </main>
  );
}

/*
Usando SWAPI, construye una interfaz de usuario con rutas para cada
 recurso (personas, películas, naves estelares, 
  vehículos, especies y planetas.

Tu app debería tener algún tipo de navegación para acceder
 fácilmente a las rutas de tu app.
Cada recurso debe tener una vista de lista que enumera 
los documentos de la API. La lista debe ser consultable por nombre.
Cree una vista detallada a la que cada elemento de su lista vaya para
 mostrar las propiedades del elemento
Cree un almacenamiento local para realizar un seguimiento de 
cuántas veces se ha visto cada elemento visto (artículos más populares)
Cree una vista de elementos populares que enumere los elementos 
más populares basándose en el recuento de almacenamiento local 
de las vistas de elementos.
Dado que hay 6 recursos, sugerimos crear/ usar componentes 
reutilizables.
*/
