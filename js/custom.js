

/* here is a constructor  */
        function Todo(title,location,description)
        {   
            this.id=Math.random();
            this.title=title;
            this.location=location;
            this.description=description;
        }
/* ================ */


function getdata()
{
    // alert("saqi");
    var title=document.getElementById("title").value;
    var location=document.getElementById("location").value;
    var description=document.getElementById("description").value;

    if(title.length===0 || location.length===0 || description.length===0)
    {
        alert("Plz fill all the fields.")
        
    }
    else    
        {  
            var todo1=new Todo(title,location,description);   /* creating an object */  
            if (localStorage.getItem("objects") === null) 
                {
                var objarray=[];
                objarray.push(todo1);
                    var str=JSON.stringify(objarray);
                    localStorage.setItem("objects" , str);
                    taskno=0;
                    var strtaskno=JSON.stringify(taskno);
                    localStorage.setItem("tasks",strtaskno);
                }
            else 
                {
                    var tno=JSON.parse(localStorage.getItem("tasks"));
                    var ntno=tno+1;
                    var strntno=JSON.stringify(ntno);
                    localStorage.setItem("tasks",strntno);
                    var stdata=localStorage.getItem("objects");
                    var objarray=JSON.parse(stdata);
                    objarray.push(todo1);
                    var strtodos=JSON.stringify(objarray);
                    localStorage.setItem("objects" , strtodos );

                }
            alert("New todo added successfully");
        }     
}



