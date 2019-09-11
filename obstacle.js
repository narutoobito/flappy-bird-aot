function obstacle(x)
{
this.posx=x;
this.width=50;
this.height=Math.floor(Math.random()*(400));
this.lower=this.height+150;
this.acceleration=0.01;
this.enemyno=Math.floor(Math.random()*(2));
}
obstacle.prototype.moving=function(speed)
{
this.posx-=speed;
}