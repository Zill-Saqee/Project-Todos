function showtasks()
{
    if(localStorage.getItem("objects")===null)
        {
        var node=document.createElement("h5");
        var msg=document.createTextNode("No tasks added.");
        node.appendChild(msg);
        var cntnr=document.getElementById("tasks");
        cntnr.appendChild(node);
        }
    else    
        {
           
            var array=JSON.parse(localStorage.getItem("objects"));
            for (var i=0;i<array.length;i++)
                {
                    // alert("Click at any task to edit");
                    var n=document.createElement("a");
                    n.setAttribute("id",i);
                    // n.setAttribute("onclick",helpedittask(this));
                    n.href="edit.html";
                    var node=document.createElement("li");
                    node.setAttribute("id",array[i].id)

                    node.addEventListener('click', taskdetailsinlocalstorage(array[i].id));
                    node.onclick=gettaskid;

                    /* span tag x having same id as li        */
                    var s=document.createElement("span");
                    s.onclick=remove;
                    var x=document.createTextNode("X");
                    s.appendChild(x);
                    s.setAttribute("id",array[i].id);
                    node.appendChild(s);

                    /*          */
                    
                //    node.onclick=taskdetailsinlocalstorage(array[i].id);
                    var msg=document.createTextNode(array[i].title);
                    
                    n.appendChild(msg);
                    node.appendChild(n);
                    var cntnr=document.getElementById("tasks");
                    cntnr.appendChild(node);
                }
        }

}


function taskdetailsinlocalstorage(elemid) 
    {
        var data=JSON.parse(localStorage.getItem("objects"));
        for (var i=0;i<data.length;i++)
            {
                if(data[i].id===elemid)
                    {
                        var td=JSON.stringify(data[i]);
                        localStorage.setItem(elemid,td);
                    }
            }
    }

function gettaskid() 
    {
        var id = this.getAttribute('id');
        localStorage.setItem("editme",JSON.stringify(id));
    }

function edit()
    {
        var reqid=JSON.parse(localStorage.getItem("editme"));
        var reqobj=JSON.parse(localStorage.getItem(reqid));
        document.getElementById("t").value=reqobj.title;
        document.getElementById("l").value=reqobj.location;
        document.getElementById("d").value=reqobj.description;
    }


function updateme()   
    {
       var reqid=JSON.parse(localStorage.getItem("editme"));
       var reqobj=JSON.parse(localStorage.getItem(reqid));
       var t=document.getElementById("t").value; 
       var l=document.getElementById("l").value; 
       var d=document.getElementById("d").value; 

      

        var updatedobj=new Todo(t,l,d);
        // var strupdated=JSON.stringify(updatedobj);
        // updatedobj.id=reqid;
        try 
        {
 
         var array=JSON.parse(localStorage.getItem("objects"));
                for (var i=0;i<array.length;i++)
                    {
                        if(array[i].id==reqid)
                            {

                                var update=i;
                                // alert("hurrah we found " + update);
                                alert("task updated");
                            }
                    }
        array.splice(update,1);
        array.push(updatedobj);
        var strobjs=JSON.stringify(array);
        localStorage.setItem("objects",strobjs);

       }
       catch(err){alert("Plz select some task again and try");}
      



    //    var final=JSON.stringify(updatedobj.id);
    //    localStorage.setItem((final,updatedobj);
       return true;

    }


    function remove()
        {
           var confrm=confirm("Are you sure to remove this task?");
           if(confrm==true)
                {
                    var id=this.getAttribute("id");
                    var array=JSON.parse(localStorage.getItem("objects"));
                    for(var i=0;i<array.length;i++)
                        {
                            if(array[i].id==id)
                            {
                                if(array.length===1)
                                {
                                    localStorage.clear();
                                    location.reload();
                                }
                                else
                                {
                                    // alert("found at index " + i);
                                    array.splice(i,1);
                                    var str=JSON.stringify(array)
                                    localStorage.setItem("objects",str);
                                    location.reload();
                                }
                            }
                        }
                }
            else
                {
                    alert("task removal cancelled.");
                }
        }


        function about()
    {
        alert("Developed By Muhammad Ishaq Section C R#4895");
        return false;
    }


  function removeall()
    {
        var cnfrm=confirm("Are you sure to remove all tasks?");
        if(cnfrm==true)
            {
                localStorage.clear();
                alert("All tasks cleared.");
                location.assign("index.html");
            }
        else
        {
            location.assign("dashboard.html");
            location.reload();
        }
    }

    function removeall2()
    {
        var cnfrm=confirm("Are you sure to remove all tasks?");
        if(cnfrm==true)
            {
                localStorage.clear();
                alert("All tasks cleared.");
                location.assign("index.html");
            }
        else
        {
            // location.assign("edit.html");
            location.reload();
        }
    }
