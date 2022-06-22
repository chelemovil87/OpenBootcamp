public class Main {

    public static void main(String[] args) {
        int sumar;
        sumar = sum(20, 10, 50);
        System.out.println(sumar);

        coche miCoche = new coche();
        miCoche.Aumentar();
        System.out.println(miCoche.puerta);
    }

    public static int sum(int a, int b, int c) {
        return a + b + c;
    }

}

class coche {
    public int puerta = 3;

    public void Aumentar() {
        this.puerta++;
    }
}