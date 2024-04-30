 var start=new Date().getTime();
        function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
         }
        return color;
        }
        function move(){
            var left;
            var top;
            var wh;
            left=   Math.random()*300;//box should change height and width randomly ,to generate number between o to 300
            right =  Math.random()*300;
            wh= ((Math.random() *400) +100);//width and height,range between 100 to 400
            document.getElementById("shape").style.left=left;//add margin
            document.getElementById("shape").style.top=top;
            document.getElementById("shape").style.width=wh;
            document.getElementById("shape").style.height=wh;
            document.getElementById("shape").style.display="block";
            document.getElementById("shape").style.backgroundColor=getRandomColor();
            start=new Date().getTime();
         }
         move();
         document.getElementById("shape").onclick=  function(){
            document.getElementById("shape").style.display="none";
            var end=new Date().getTime();//to note the time when user clicked the button
            var timeTaken=(end-start)/1000;//to convert time to sec
            alert(timeTaken);
            move();
        }