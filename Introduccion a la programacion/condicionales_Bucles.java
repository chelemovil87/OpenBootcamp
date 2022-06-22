package com.open_bootcamp;

public class Main {
    public static void main(String[] args){
        int numeroif = 2 ;
        if(numeroif > 0 ){
            System.out.println("Es Positivo");
        }else if(numeroif < 0 ){
            System.out.println("Es Negativo");
       }else{
            System.out.println("Es 0");
       }

    public static void main(String[] args){
      int numeroWhile = 2;
      while(numeroWhile < 3){
          System.out.println(numeroWhile);
          numeroWhile = numeroWhile + 1;
      }

    public static void main(String[] args) {
        int numeroDoWhile = 2;

        do {
            System.out.println(numeroDoWhile);
            numeroDoWhile = numeroDoWhile + 1;
        } while (numeroDoWhile < 3);
    }

    public static void main(String[] args){
        for(int numeroFor = 0; numeroFor =< 3; numeroFor = numeroFor + 1){
             System.out.println(numeroFor);
      
    }

    public static void main(String[]args){
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