

document.getElementById("container").addEventListener("mousemove",function(e){
    dxCor = e.clientX;
    dyCor = e.clientY;

    document.getElementById("xCord").innerHTML = "Mouse X Cordinates : " +e.clientX ;
    document.getElementById("yCord").innerHTML = "Mouse Y Cordinates : " +e.clientY ;


});

document.getElementById("img1").addEventListener("mousemove", (e)=>{
        ixCor = e.clientX;
        iyCor = e.clientY;
        document.getElementById("ixCord").innerHTML = "Img X Cordinates : " +e.clientX ;
        document.getElementById("iyCord").innerHTML = "Img Y Cordinates : " +e.clientY ;
    
        if(dxCor==ixCor&&dyCor==iyCor){
            document.getElementById("img1").style.display= "none";
            // document.getElementById("container").innerHTML +='<img src = "https://picsum.photos/200/300">';
            
        }
})
document.getElementById("btn").addEventListener("click",function(e){
    
        document.location.reload();
});

