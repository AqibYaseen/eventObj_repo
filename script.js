

document.getElementById("container").addEventListener("mousemove",function(e){
    dxCor = e.clientX;
    dyCor = e.clientY;

    document.getElementById("xCord").innerHTML = "Mouse X Cordinates" +e.clientX +"<br/>";
    document.getElementById("yCord").innerHTML = "Mouse Y Cordinates" +e.clientY +"<br/>";


});

document.getElementById("img1").addEventListener("mousemove", (e)=>{
        ixCor = e.clientX;
        iyCor = e.clientY;
        document.getElementById("ixCord").innerHTML = "Img X Cordinates" +e.clientX +"<br/>";
        document.getElementById("iyCord").innerHTML = "Img Y Cordinates" +e.clientY +"<br/>";
    
        if(dxCor==ixCor&&dyCor==iyCor){
            document.getElementById("img1").style.display= "none";
            document.getElementById("container").innerHTML +='<img src = "https://picsum.photos/200/300">';
            
        }
})
document.getElementById("btn").addEventListener("click",function(e){
    console.log(e.clientX);

    // e.target.client= "byy";
});

