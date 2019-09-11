function bird()
{
this.posx=100;
this.posy=height/2;
this.force=null;
this.velocity=0;
this.gravity=0.1;
this.force=-5;
}
bird.prototype.applygravity=function(h)
{
this.velocity+=this.gravity;
this.posy+=this.velocity;
if(this.posy>h)
{
this.posy=h;
noLoop();
bfx.stop();
}
if(this.posy<0)
{
this.posy=0;
noLoop();
bfx.stop();
}


}
bird.prototype.upthrust=function()
{
this.velocity+=this.force;
this.posy+=this.velocity;

if(random(1)<0.05)
voice.play();


}