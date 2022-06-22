
public class Main {
    // Ejercicio Uno If, else if, else.
    public static void main(String[] args){
        int numeroif = 2 ;
        if(numeroif > 0 ){
            System.out.println("Es Positivo");
        }else if(numeroif < 0 ){
            System.out.println("Es Negativo");
       }else{
            System.out.println("Es 0");
       }

    // Ejercicio Dos While.
      int numeroWhile = 2;
      while(numeroWhile < 3){
          System.out.println(numeroWhile);
          numeroWhile = numeroWhile + 1;
      }

    // Ejercicio Tres DoWhile.
        int numeroDoWhile = 2;

        do {
            System.out.println(numeroDoWhile);
            numeroDoWhile = numeroDoWhile + 1;
        } while (numeroDoWhile < 3);
    }

    // Ejercicio Cuatro For.
        for(int numeroFor = 0; numeroFor <= 3; numeroFor = numeroFor + 1){
             System.out.println(numeroFor);
      
    }

    // Ejercicio Cinco Switch.
        var estacion="INVIERNO";
        switch(estacion){
            case"VERANO"
                System.out.println("es verano");
                break;
            case"PRIMAVERA"
                System.out.println("es primavera");
                break;
            case"OTOÑO"
                System.out.println("es otoño");
                break;
            case"INVIERNO":
                System.out.println("es invierno");
                break;
            default:
                System.out.println("Esto no es una estacion");
    }