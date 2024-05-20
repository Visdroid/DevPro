import java.io.File;
import java.io.IOException;

public class CreateWebsiteDirectories {

    public static void main(String[] args){
        //Define the root project directory
        String root = "my-profile-website";

        //Define Directory Structure
        String[] directories = {
            root,
            root + "/public",
            root + "/public/css",
            root + "/public/js",
            root + "/server",
            root + "/models",
            root + "/routes"

        };
        //Create all the directories
        for( String dir: directories){
            createDirectory(dir);
        }
        //Create the files
        createFile(root + "/public/css/styles.css");
        createFile(root + "/public/js/scripts.js");
        createFile(root + "/public/index.html");
        createFile(root + "/server/server.js");
        createFile(root + "/models/contact.js");
        createFile(root + "/routes/contact.js");
        createFile(root + "/.env");
        createFile(root + "/package.json");
        createFile(root + "/package-lock.json");

    }
    //The method that creates the directory
    private static void createDirectory(String path){
        File directory = new File(path);
        if(!directory.exists()){
            if(directory.mkdirs())
            {
                System.out.println("Directory created: " + path);
            }
            else
            {
                System.err.println("Failed to create directory: " + path);
            }
        }else{
            System.out.println("Directory already exists: " + path);
        }
       
    }
    //The method that creates the actual files
    private static void createFile(String path){
        //create exceptions to handle all possible errors
        try{
            File file = new File(path);
            if(file.createNewFile()){
                System.out.println("File created: " + path);
            }else{
                System.out.println("File already exists: " + path);
            }
        }
        catch(IOException e){
            System.err.println("Failed to create file: " + path);
            e.printStackTrace();
        }
    }
}
