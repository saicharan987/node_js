import java.util.Scanner;
public class MyClass {
    public static void main(String args[]) {
    Scanner sc=new Scanner (System.in);
    //System.out.println("Enter the value of n: ");
    //int n=sc.nextInt();
    int esum=0,eodd=0;
    boolean i=true;
    while(i);{
        System.out.println("Enter the value of n: ");
        int n=sc.nextInt();
        if(n%2==0){
            esum+=esum;
        }
        else{
            eodd+=eodd;
        }
        System.out.println("Do you wish to continue: 'Y'+'N'");
        char a = sc.next().charAt(1);
        if(a=='N'){
            i=false;;
        }
        
        
    }
    System.out.print(esum);
    System.out.print(eodd);
    
    }
}




