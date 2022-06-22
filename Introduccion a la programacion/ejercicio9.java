
// Herencia, polimorfismo e interfaces
public class Main {
    public static void main(String[] args) {
        Persona persona = new Persona();
        persona.setEdad(35);
        persona.setNombre("Jose Eduardo");
        persona.setTelefono(619675430);
        Cliente cliente = new Cliente();
        cliente.setCredito(2000);
        System.out.println(
                "Datos Cliente" + persona.getNombre() + "" + persona.getEdad() + " " + persona.getTelefono() + " "
                        + cliente.getCredito());
        Trabajador trabajador = new Trabajador();
        trabajador.setSalario(1000);
        System.out.println(
                "Datos Trabajador" + persona.getNombre() + "" + persona.getEdad() + " " + persona.getTelefono() + " "
                        + trabajador.getSalario());
    }

    class Persona {
        Integer edad;

        public void setEdad(Integer edad) {
            this.edad = edad;
        }

        public Integer getEdad() {
            return this.edad;
        }

        String nombre;

        public void setNombre(String nombre) {
            this.nombre = nombre;
        }

        public String getNombre() {
            return this.nombre;
        }

        Integer telefono;

        public void setTelefono(Integer telefono) {
            this.telefono = telefono;
        }

        public Integer getTelefono() {
            return this.telefono;
        }
    }

    // class cliente hereda de class Persona (con final no se puede heredar de esta
    // clase)
    final class Cliente extends Persona {
        Integer credito;

        public void setCredito(Integer credito) {
            this.credito = credito;
        }

        public Integer getCredito() {
            return this.credito;
        }
    }

    // class Trabajador hereda de class Persona (con final no se puede heredar de
    // esta clase)
    final class Trabajador extends Persona {
        Integer salario;

        public void setSalario(Integer salario) {
            this.salario = salario;
        }

        public Integer getSalario() {
            return this.salario;
        }
    }
}
