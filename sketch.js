let wall=[];
let point=0;
let img;
let enemy=[];
let bfx;
let speed=1;
let acceleration=0.001;
let distance=300;
function preload()
{
player =loadImage('levi.png');
city=loadImage('aotcity.jpg');
enemy[0]=loadImage('titan.jpg');
enemy[1]=loadImage('ctitan.jpg');
pillar=loadImage('pillar.jpg');
bfx=loadSound('bfx.mp3');
voice=loadSound('playervoice.mp3');
}

function setup(){
birdy=new bird;
createCanvas(1000,600);
bfx.play();
bfx.setVolume(0.1);
voice.setVolume(0.4);
for(let i=0;i<5;i++)
{
if(i!=0)
wall[i]=new obstacle(wall[i-1].posx+300);
else
wall[i]=new obstacle(500);
}

showpoint=document.getElementById("score");
}
function draw()
{
point++;
background(0,0,125);
image(city,0,0, width,height);
fill(255,0,0);
image(player, birdy.posx,birdy.posy,30,30);
stroke(500);
line( birdy.posx,birdy.posy,wall[0].posx,wall[0].height);
distance+=0.5;

//ellipse(birdy.posx,birdy.posy,30,30);
birdy.applygravity(height);
for(let i=wall.length-1;i>=0;i--)
{fill(255);
image(pillar,wall[i].posx,0,wall[i].width,wall[i].height);
image(enemy[wall[i].enemyno],wall[i].posx,wall[i].lower,wall[i].width,height-wall[i].lower);
if(wall[i].posx<0)
{
wall.splice(i,1);
wall.push(new obstacle(wall[wall.length-1].posx+distance));

}

//showpoint.textContent=point;
textSize(45)
stroke(50);;
fill(0);
text('points- '+point,50,50);
}
for(let j=0;j<wall.length;j++)
{
speed+=acceleration;
wall[j].moving(speed);
}
for(let i=0;i<wall.length;i++)
{
if(((birdy.posx+20>=wall[i].posx && birdy.posx<=wall[i].posx+wall[i].width) && birdy.posy<wall[i].height) ||((birdy.posx+20>=wall[i].posx && birdy.posx<=wall[i].posx+wall[i].width) && birdy.posy+20>wall[i].lower))
{
noLoop();
console.log('44');
bfx.stop();
}
}

}
function keyPressed()
{
if(keyCode==UP_ARROW)
birdy.upthrust();


}
function jump()
{
birdy.upthrust();

}



