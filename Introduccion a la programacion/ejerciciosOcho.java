
// Privacidad, abstraccion y encapsulacion

public class Main {
    public static void main(String[] args) {
        Persona persona = new Persona();

        persona.setEdad(34);
        Integer edad = persona.getEdad();
        System.out.println(edad);

        persona.setNombre("Jose Eduardo");
        System.out.println(persona.getNombre());

        persona.setTelefono(619675430);
        System.out.println(persona.getTelefono());

        // Otra manera de imprimir todos los datos juntos
        System.out.println(persona.getNombre() + " " + persona.getEdad() + " " + persona.getTelefono());
    }
}

class Persona {
    private Integer edad;

    public void setEdad(Integer edad) {
        this.edad = edad;
    }

    public Integer getEdad() {
        return this.edad;
    }

    private String nombre;

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getNombre() {
        return this.nombre;
    }

    private Integer telefono;

    public void setTelefono(Integer telefono) {
        this.telefono = telefono;
    }

    public Integer getTelefono() {
        return this.telefono;
    }
}
