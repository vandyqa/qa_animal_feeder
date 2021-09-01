class Registration {
    Email:string;
    Password:string;
    FirstName:string;
    LastName:string;

    constructor(
        Email:string;
        Password:string;
        FirstName:String;
        LastName:String;
      
    ) {
      this.Email=Email;
      this.Password=Password;
      this.FirstName=FirstName;
      this.LastName=LastName;
      
    }
  }

  class Login{
       Email:string;
       Password:string;

       constructor(
            Email:string;
            Password:string;
       )  {
           this.Email=Email;
           this.Password=Password;
       }

       )

  }
  
  const testData1: Array<Registration> = [
    new Registration(
        "testregression@gmail.com"
        "regression"
        "test"
        "regression"
        
    ),
    new Registration(
                "vkalra"
         "vkalra"
         "esha"
          "kalra"
                 
        ),
 
        new Registration(
            "   "
            "   "
            "   "
            "   "
 
 
        ),

        const testData2: Array<Login> = [
            new Login(
                "vkalra@gmail.com"
                "vkalra"
                "esha"
                "kalra"
                
            ),
            new Login(
                        "vkalra"
                        "vkalra"
                         "esha"
                        "kalra"
                         
                ),
         
                new Login(
                    "   "
                    "   "
                    "   "
                    "   "
         
         
                ),
        
        
         
 
 
 
 
 
 
    ];