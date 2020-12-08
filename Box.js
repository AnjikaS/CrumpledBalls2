
        class Box {
            constructor(x,y,width,height){
                var box_options = {
                    isStatic: true 
                 }

              this.box = Bodies.rectangle(x,y,width,height, box_options);
              this.width = width;
              this.height = height;
              World.add(world, this.box);
          
            };
           display(){
                rectMode(CENTER);
               fill("green");
               rect(this.box.position.x,this.box.position.y,this.width,this.height)}
           }