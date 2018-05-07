'use strict'

const PI2 = Math.PI * 2
let random = (min, max) => Math.random() * (max - min + 1) + min | 0

class Birthday {
    constructor() {
        this.resize()

        // create a lovely place to store the firework
        this.fireworks = []
        this.counter = 0
        this.radius = 30
        this.currTxt = 0
        this.lastTime = 0
        this.standarDelay = 2000
        this.delay = this.standarDelay

    }

    resize() {
        this.width = canvas.width = window.innerWidth
        let center = this.width / 2 | 0
        this.spawnA = center - center / 4 | 0
        this.spawnB = center + center / 4 | 0

        this.height = canvas.height = window.innerHeight
        this.spawnC = this.height * .1
        this.spawnD = this.height * .5

    }

    onClick(evt) {
        let x = evt.clientX || evt.touches && evt.touches[0].pageX
        let y = evt.clientY || evt.touches && evt.touches[0].pageY


        let count = random(3, 5)
        for (let i = 0; i < count; i++) this.fireworks.push(new Firework(
            random(this.spawnA, this.spawnB),
            this.height,
            x,
            y,
            random(300, 450),
            random(30, 110)))

        this.counter = -30

    }

    update() {
        ctx.globalCompositeOperation = 'hard-light'
        ctx.fillStyle = 'rgba(20,20,20,0.15)'
        ctx.fillRect(0, 0, this.width, this.height)

        ctx.globalCompositeOperation = 'lighter'
        for (let firework of this.fireworks) firework.update()

        if(Math.abs(performance.now()-this.lastTime)>this.delay){
            this.generateNextFirework();
            this.lastTime=performance.now()
        }
        // remove the dead fireworks
        if (this.fireworks.length > 100) this.fireworks = this.fireworks.filter(firework => !firework.dead)
    }

    generateNextFirework() {
if(this.currTxt < 25) {
    let count = random(5, 10)
    for (let i = 0; i < count; i++) {

        let trgX
        let trgY = random(0, this.height)
        if (random(0, 1) === 0) {
            trgX = random(100, this.width / 4)
        } else {
            trgX = random(this.width / 2 + this.width / 4, this.width)
        }

        this.fireworks.push(new Firework(
            random(this.spawnA, this.spawnB),
            this.height,
            trgX,
            trgY,
            random(300, 450),
            random(30, 110)))

    }
}

        var letterCenterX = (this.width / 2);
        var letterCenterY = this.height / 2;
        var letterWidth = this.width / 12;
        var letterHeight = this.width / 8;
        if (this.currTxt === 0) {//С
            this.drawC(letterCenterX, letterCenterY, letterHeight, letterWidth, this.width / 4, this.height - this.height / 8)
            this.drawC(letterCenterX, letterCenterY, letterHeight, letterWidth, this.width / 2 + this.width / 3, this.height - this.height / 8)
            // this.drawC(letterCenterX,letterCenterY,letterHeight,letterWidth,this.width/2,this.height)
        }
        if (this.currTxt === 1) {
            this.drawD(letterCenterX, letterCenterY, letterHeight, letterWidth, this.width / 4, this.height - this.height / 8)
            this.drawD(letterCenterX, letterCenterY, letterHeight, letterWidth, this.width / 2 + this.width / 3, this.height - this.height / 8)
            this.drawD(letterCenterX, letterCenterY, letterHeight, letterWidth, this.width / 2, this.height)
        }

        if (this.currTxt === 2) {
            this.drawN(letterCenterX, letterCenterY, letterHeight, letterWidth, this.width / 4, this.height - this.height / 8)
            this.drawN(letterCenterX, letterCenterY, letterHeight, letterWidth, this.width / 2 + this.width / 3, this.height - this.height / 8)
            this.drawN(letterCenterX, letterCenterY, letterHeight, letterWidth, this.width / 2, this.height)
        }
        if (this.currTxt === 3) {
            this.fireworks.push(new Firework( //П
                this.width / 4,
                this.height - this.height / 8,
                letterCenterX - letterWidth / 1.7,
                letterCenterY - letterHeight - letterHeight / 3,
                random(300, 450),//color
                this.radius //radius
            ))
            this.fireworks.push(new Firework( //П
                this.width / 2 + this.width / 3,
                this.height - this.height / 8,
                letterCenterX + letterWidth / 1.7,
                letterCenterY - letterHeight - letterHeight / 3,
                random(300, 450),//color
                this.radius //radius
            ))
            this.drawE(letterCenterX, letterCenterY, letterHeight, letterWidth, this.width / 4, this.height - this.height / 8)
            this.drawE(letterCenterX, letterCenterY, letterHeight, letterWidth, this.width / 2 + this.width / 3, this.height - this.height / 8)
            this.drawE(letterCenterX, letterCenterY, letterHeight, letterWidth, this.width / 2, this.height)
        }
        if (this.currTxt === 4 || this.currTxt === 5 || this.currTxt === 6) {
            this.delay = 500
            this.drawM(letterCenterX, letterCenterY, letterHeight, letterWidth, random(this.width / 6, this.width - this.width / 6), this.height - this.height / 10)
            if (this.currTxt === 6) this.delay = this.standarDelay
        }
        if (this.currTxt === 7 || this.currTxt === 8) {
            this.delay = 500
            this.drawR(letterCenterX, letterCenterY, letterHeight, letterWidth, random(this.width / 6, this.width - this.width / 6), this.height - this.height / 10)
            if (this.currTxt === 8) this.delay = this.standarDelay
        }
        if (this.currTxt === 9 || this.currTxt === 10 || this.currTxt === 11) {
            this.delay = 500
            this.drawO(letterCenterX, letterCenterY, letterHeight, letterWidth, random(this.width / 6, this.width - this.width / 6), this.height - this.height / 10)
            if (this.currTxt === 11) this.delay = this.standarDelay
        }
        if (this.currTxt === 12 || this.currTxt === 13) {
            this.delay = 500
            this.drawZH(letterCenterX, letterCenterY, letterHeight, letterWidth, random(this.width / 6, this.width - this.width / 6), this.height - this.height / 10)
            if (this.currTxt === 13) this.delay = this.standarDelay
        }
        if (this.currTxt === 14 || this.currTxt === 15 || this.currTxt === 16) {
            this.delay =500
            this.drawD(letterCenterX, letterCenterY, letterHeight, letterWidth, random(this.width / 6, this.width - this.width / 6), this.height - this.height / 10)
            if (this.currTxt === 16) this.delay = this.standarDelay
        }
        if (this.currTxt === 17 || this.currTxt === 18) {
            this.delay = 500
            this.drawE(letterCenterX, letterCenterY, letterHeight, letterWidth, random(this.width / 6, this.width - this.width / 6), this.height - this.height / 10)
            if (this.currTxt === 18) this.delay = this.standarDelay
        }
        if (this.currTxt === 19 || this.currTxt === 20) {
            this.delay = 500
            this.drawN(letterCenterX, letterCenterY, letterHeight, letterWidth, random(this.width / 6, this.width - this.width / 6), this.height - this.height / 10)
            if (this.currTxt === 20) this.delay = this.standarDelay
        }
        if (this.currTxt === 21 || this.currTxt === 22) {
            this.delay = 500
            this.drawI(letterCenterX, letterCenterY, letterHeight, letterWidth, random(this.width / 6, this.width - this.width / 6), this.height - this.height / 10)
            if (this.currTxt === 22) this.delay = this.standarDelay
        }
        if (this.currTxt === 23 || this.currTxt === 24) {
            this.delay = 500
            this.drawYA(letterCenterX, letterCenterY, letterHeight, letterWidth, random(this.width / 6, this.width - this.width / 6), this.height - this.height / 10)
            if (this.currTxt === 24) this.delay = this.standarDelay
        }
        if (this.currTxt === 25 || this.currTxt === 26 || this.currTxt === 27) {
            this.delay = 900
            this.drawName()
            if (this.currTxt === 27) this.delay = this.standarDelay
        }
        if(this.currTxt === 28 || this.currTxt === 29 || this.currTxt ===30 ){
            this.delay = 500
            this.drawAge(letterCenterX, letterCenterY, letterHeight, letterWidth, random(this.width / 6, this.width - this.width / 6), this.height - this.height / 10)
            if (this.currTxt === 30) this.delay = this.standarDelay
        }

        this.currTxt++;
    }

    drawAge(letterCenterX, letterCenterY, letterHeight, letterWidth){
        this.drawUpRightLine(letterCenterX-letterWidth, letterCenterX,letterCenterY,letterHeight,100,200)

        this.fireworks.push(new Firework( //O up-left center
            this.width/4,
            this.height-this.height/10,
            letterCenterX-letterWidth,
            letterCenterY+letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //O up-left center
            this.width/4,
            this.height-this.height/10,
            letterCenterX-letterWidth,
            letterCenterY-letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //O up-left center
            this.width/4,
            this.height-this.height/10,
            letterCenterX-letterWidth-letterWidth/2,
            letterCenterY-letterHeight+letterHeight/8,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //O up-left center
            this.width/4,
            this.height-this.height/10,
            letterCenterX-letterWidth*2,
            letterCenterY-letterHeight+letterHeight/4,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //7
            this.width/4,
            this.height-this.height/10,
            letterCenterX+letterWidth/2,
            letterCenterY+letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //7
            this.width/4,
            this.height-this.height/10,
            letterCenterX+3*letterWidth/4,
            letterCenterY+letterHeight/1.35,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //7
            this.width/4,
            this.height-this.height/10,
            letterCenterX+9*letterWidth/8,
            letterCenterY+letterHeight/2,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //7
            this.width/4,
            this.height-this.height/10,
            letterCenterX+letterWidth+letterWidth/4,
            letterCenterY+(letterHeight/3.6),
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //7
            this.width/4,
            this.height-this.height/10,
            letterCenterX+letterWidth+letterWidth/2,
            letterCenterY,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //7
            this.width/4,
            this.height-this.height/10,
            letterCenterX+letterWidth+letterWidth/1.5,
            letterCenterY-(letterHeight/3.5),
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //7
            this.width/4,
            this.height-this.height/10,
            letterCenterX+letterWidth+letterWidth/1.5,
            letterCenterY-(letterHeight/2),
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //7
            this.width/4,
            this.height-this.height/10,
            letterCenterX+letterWidth+letterWidth/1.2,
            letterCenterY-(letterHeight/1.3),
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //7
            this.width/4,
            this.height-this.height/10,
            letterCenterX+2*letterWidth,
            letterCenterY-letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //7
            this.width/4,
            this.height-this.height/10,
            letterCenterX+letterWidth+letterWidth/2,
            letterCenterY-letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //7
            this.width/4,
            this.height-this.height/10,
            letterCenterX+letterWidth,
            letterCenterY-letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //7
            this.width/4,
            this.height-this.height/10,
            letterCenterX+letterWidth+letterWidth/2,
            letterCenterY-letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //7
            this.width/4,
            this.height-this.height/10,
            letterCenterX+letterWidth,
            letterCenterY-letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //7
            this.width/4,
            this.height-this.height/10,
            letterCenterX+letterWidth/2,
            letterCenterY-letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))


    }

    drawName(){
        var letterCenterX = (this.width/6);
        var letterCenterY = this.height/2;
        var letterWidth = this.width/12;
        var letterHeight = this.width/8;

        this.drawUpRightLine(letterCenterX - letterWidth, letterCenterX, letterCenterY, letterHeight, this.width / 4, this.height - this.height / 10)
        //UPPER SIDE
        this.fireworks.push(new Firework( //П
            random(this.width/4 - 150,this.width/4 + 150),
            this.height - this.height / 10,
            letterCenterX - letterWidth / 1.5,
            letterCenterY - (letterHeight / 1.3),
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //П
            random(this.width/4 - 150,this.width/4 + 150),
            this.height - this.height / 10,
            letterCenterX - letterWidth / 3.5,
            letterCenterY - (letterHeight / 1.3),
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //П
            random(this.width/4 - 150,this.width/4 + 150),
            this.height - this.height / 10,
            letterCenterX + letterWidth / 4,
            letterCenterY - (letterHeight / 1.3),
            random(300, 450),//color
            this.radius //radius
        ))


        //RIGHT SIDE
        this.drawUpRightLine(letterCenterX + letterWidth / 4, letterCenterX, letterCenterY, letterHeight, this.width / 4, this.height - this.height / 10)


//            LEFT SIDE
        letterCenterX=letterCenterX/2+letterCenterX;//O left center
        this.fireworks.push(new Firework( //O
            this.width/4,
            this.height-this.height/10,
            letterCenterX,
            letterCenterY,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //O
            this.width/4,
            this.height-this.height/10,
            letterCenterX,
            letterCenterY-letterHeight/5,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //O
            this.width/4,
            this.height-this.height/10,
            letterCenterX,
            letterCenterY+letterHeight/5,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //O right center
            this.width/4,
            this.height-this.height/10,
            letterCenterX+letterWidth,
            letterCenterY,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //O right
            this.width/4,
            this.height-this.height/10,
            letterCenterX+letterWidth,
            letterCenterY-letterHeight/5,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //O right
            this.width/4,
            this.height-this.height/10,
            letterCenterX+letterWidth,
            letterCenterY+letterHeight/5,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //O down center
            this.width/4,
            this.height-this.height/10,
            letterCenterX+letterWidth/2,
            letterCenterY+letterHeight/1.3,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //O up center
            this.width/4,
            this.height-this.height/10,
            letterCenterX+letterWidth/2,
            letterCenterY-letterHeight/1.3,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //O up-left center
            this.width/4,
            this.height-this.height/10,
            letterCenterX+letterWidth/9,
            letterCenterY-letterHeight/2,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //O up-right center
            this.width/4,
            this.height-this.height/10,
            letterCenterX+letterWidth/1.2,
            letterCenterY-letterHeight/2,
            random(100, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //O down-left center
            this.width/4,
            this.height-this.height/10,
            letterCenterX+letterWidth/9,
            letterCenterY+letterHeight/2,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //O down-right center
            this.width/4,
            this.height-this.height/10,
            letterCenterX+letterWidth/1.2,
            letterCenterY+letterHeight/2,
            random(300, 450),//color
            this.radius //radius
        ))


        letterCenterX=letterCenterX/2+letterCenterX;
        this.drawLetterL(letterCenterX,letterCenterY,letterHeight,letterWidth,this.width/2,this.height-this.height/10)// Л

        //И
        letterCenterX=letterCenterX/2+letterCenterX;

        this.drawUpRightLine(letterCenterX-letterWidth+letterWidth/4,letterCenterX,letterCenterY,letterHeight,this.width/2,this.height-this.height/10)//И-left
        this.drawUpRightLine(letterCenterX+letterWidth-letterWidth/3,letterCenterX,letterCenterY,letterHeight,this.width/2,this.height-this.height/10)//И-right
        this.fireworks.push(new Firework( //И -line
            this.width/2,
            this.height-this.height/10,
            letterCenterX+letterWidth/3,
            letterCenterY-(letterHeight/2),
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //И -line
            this.width/2,
            this.height-this.height/10,
            letterCenterX+letterWidth/6,
            letterCenterY - letterHeight/6,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //И -line
            this.width/2,
            this.height-this.height/10,
            letterCenterX,
            letterCenterY + letterHeight/6,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //И -line
            this.width/2,
            this.height-this.height/10,
            letterCenterX-letterWidth/4,
            letterCenterY + letterHeight/2,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //И -line
            this.width/2,
            this.height-this.height/10,
            letterCenterX-letterWidth/2,
            letterCenterY + letterHeight/2 +letterHeight/4,
            random(300, 450),//color
            this.radius //radius
        ))

        //Н
        letterCenterX=letterCenterX/2+letterCenterX;

        this.drawUpRightLine(letterCenterX - letterWidth*2,letterCenterX,letterCenterY,letterHeight,this.width/2+this.width/4, this.height-this.height/10)///H-left
        this.drawUpRightLine(letterCenterX  - letterWidth/1.5,letterCenterX,letterCenterY,letterHeight,this.width/2+this.width/4, this.height-this.height/10)//H-right
        this.fireworks.push(new Firework( //Н - line
            this.width/2+this.width/4,
            this.height-this.height/10,
            letterCenterX -letterWidth,
            letterCenterY,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            this.width/2+this.width/4,
            this.height-this.height/10,
            letterCenterX -letterWidth -letterWidth/2,
            letterCenterY,
            random(300, 450),//color
            this.radius //radius
        ))

        //A
        this.drawLetterL(letterCenterX,letterCenterY,letterHeight,letterWidth,this.width/2+this.width/4,this.height-this.height/10)
        this.fireworks.push(new Firework( //A- line
            this.width/2+this.width/4,
            this.height-this.height/10,
            letterCenterX+letterWidth/2.5 ,
            letterCenterY,
            random(300, 450),//color
            this.radius //radius
        ))
    }

    drawC(letterCenterX,letterCenterY,letterHeight, letterWidth, spawnX,spawnY){
        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            letterCenterX,
            letterCenterY + letterHeight/1.1,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            letterCenterX + letterWidth/1.5,
            letterCenterY + letterHeight/1.3,
            random(300, 450),//color
            this.radius //radius
        ))
        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            letterCenterX + 1.2*letterWidth,
            letterCenterY + letterHeight/3,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            letterCenterX + letterWidth,
            letterCenterY + letterHeight/2,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            letterCenterX - letterWidth+letterWidth/8,
            letterCenterY + letterHeight/1.5,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            letterCenterX - letterWidth/1.5,
            letterCenterY + letterHeight/1.3,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            letterCenterX - letterWidth,
            letterCenterY + letterHeight/3,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            letterCenterX - letterWidth-letterWidth/6,
            letterCenterY ,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            letterCenterX - letterWidth-letterWidth/6,
            letterCenterY - letterHeight/4,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            letterCenterX - letterWidth-letterWidth/8,
            letterCenterY - letterHeight/2,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            letterCenterX - letterWidth+letterWidth/6,
            letterCenterY - letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            letterCenterX - letterWidth/3,
            letterCenterY - 1.2*letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            letterCenterX+letterWidth/6,
            letterCenterY - 1.2*letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            letterCenterX+letterWidth/6,
            letterCenterY - 1.2*letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            letterCenterX+letterWidth/1.8,
            letterCenterY - 1.2*letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            letterCenterX-letterWidth,
            letterCenterY - letterHeight/1.4,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            letterCenterX+letterWidth,
            letterCenterY - letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))
    }

    drawD(letterCenterX,letterCenterY,letterHeight, letterWidth, spawnX,spawnY){
        this.fireworks.push(new Firework(
            spawnX,
            spawnY,
            letterCenterX,
            letterCenterY - letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            letterCenterX + letterWidth/2,
            letterCenterY - letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))


        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            letterCenterX - letterWidth/2,
            letterCenterY - letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            letterCenterX - letterWidth,
            letterCenterY - letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            letterCenterX - letterWidth,
            letterCenterY - letterHeight/2,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            letterCenterX - letterWidth,
            letterCenterY - letterHeight/8,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            letterCenterX - letterWidth,
            letterCenterY + letterHeight/3 ,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            letterCenterX + letterWidth/2,
            letterCenterY - letterHeight/2,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            letterCenterX + letterWidth/2,
            letterCenterY - letterHeight/8,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            letterCenterX + letterWidth/2,
            letterCenterY + letterHeight/3 ,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            letterCenterX + letterWidth,
            letterCenterY + letterHeight/2 ,
            random(300, 450),//color
            this.radius //radius
        ))
        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            letterCenterX - letterWidth*1.5,
            letterCenterY + letterHeight/2 ,
            random(300, 450),//color
            this.radius //radius
        ))
        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            letterCenterX + letterWidth,
            letterCenterY + letterHeight ,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            letterCenterX - letterWidth*1.5,
            letterCenterY + letterHeight ,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            letterCenterX - letterWidth/4,
            letterCenterY + letterHeight/3  ,
            random(300, 450),//color
            this.radius //radius
        ))
    }

    drawN(letterCenterX, letterCenterY, letterHeight, letterWidth, spawnX, spawnY) {
        this.drawUpRightLine(letterCenterX - letterWidth, letterCenterX, letterCenterY, letterHeight, spawnX, spawnY)
        this.drawUpRightLine(letterCenterX + letterWidth, letterCenterX, letterCenterY, letterHeight, spawnX, spawnY)
        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX + letterCenterX / 12,
            letterCenterY,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX - letterWidth / 12,
            letterCenterY,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX - letterWidth / 2,
            letterCenterY,
            random(300, 450),//color
            this.radius //radius
        ))}

    drawE(letterCenterX, letterCenterY, letterHeight, letterWidth, spawnX, spawnY){
        this.drawUpRightLine(letterCenterX-letterWidth,letterCenterX,letterCenterY,letterHeight,spawnX,spawnY)

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX-letterWidth/2 ,
            letterCenterY-letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX-letterWidth ,
            letterCenterY-letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX-letterWidth/8 ,
            letterCenterY-letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX+letterWidth/6 ,
            letterCenterY-letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX+letterWidth/1.8 ,
            letterCenterY-letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))

        //next line
        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX-letterWidth/2 ,
            letterCenterY,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX-letterWidth ,
            letterCenterY,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX-letterWidth/8 ,
            letterCenterY,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX+letterWidth/6 ,
            letterCenterY,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX+letterWidth/1.8 ,
            letterCenterY,
            random(300, 450),//color
            this.radius //radius
        ))

        //next line
        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX-letterWidth/2 ,
            letterCenterY+letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX-letterWidth ,
            letterCenterY+letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX-letterWidth/8 ,
            letterCenterY+letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX+letterWidth/6 ,
            letterCenterY+letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX+letterWidth/1.8 ,
            letterCenterY+letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))
    }

    drawM(letterCenterX, letterCenterY, letterHeight, letterWidth, spawnX, spawnY){
        this.drawUpRightLine(letterCenterX-letterWidth,letterCenterX,letterCenterY,letterHeight,spawnX,spawnY)
        this.drawUpRightLine(letterCenterX+letterWidth,letterCenterX,letterCenterY,letterHeight,spawnX,spawnY)
        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX ,
            letterCenterY,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX+letterWidth/1.5 ,
            letterCenterY-letterHeight/2,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX-letterWidth/1.5 ,
            letterCenterY-letterHeight/2,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX+letterWidth/2.5 ,
            letterCenterY-letterHeight/4.5,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX-letterWidth/3 ,
            letterCenterY-letterHeight/4,
            random(300, 450),//color
            this.radius //radius
        ))
    }

    drawR(letterCenterX, letterCenterY, letterHeight, letterWidth, spawnX, spawnY){
        this.drawUpRightLine(letterCenterX-letterWidth,letterCenterX,letterCenterY,letterHeight,spawnX,spawnY)
        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX-letterWidth/2 ,
            letterCenterY-letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))
        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX-letterWidth/8 ,
            letterCenterY-letterHeight-letterHeight/12,
            random(300, 450),//color
            this.radius //radius
        ))
        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX+letterWidth/4 ,
            letterCenterY-letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX+letterWidth/2 ,
            letterCenterY-letterHeight/1.5,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX+letterWidth/4 ,
            letterCenterY-letterHeight/3,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX-letterWidth/4 ,
            letterCenterY-letterHeight/4,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX-letterWidth/1.8 ,
            letterCenterY-letterHeight/4,
            random(300, 450),//color
            this.radius //radius
        ))
    }

    drawO(letterCenterX, letterCenterY, letterHeight, letterWidth, spawnX, spawnY){
        this.drawC(letterCenterX, letterCenterY, letterHeight, letterWidth, spawnX, spawnY)
        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX+letterWidth*1.3 ,
            letterCenterY-letterHeight/4,
            random(300, 450),//color
            this.radius //radius
        ))
        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX+letterWidth*1.3 ,
            letterCenterY+letterHeight/10,
            random(300, 450),//color
            this.radius //radius
        ))
        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX+letterWidth*1.2 ,
            letterCenterY-letterHeight/1.5,
            random(300, 450),//color
            this.radius //radius
        ))
    }

    drawZH(letterCenterX, letterCenterY, letterHeight, letterWidth, spawnX, spawnY){
        this.drawUpRightLine(letterCenterX,letterCenterX,letterCenterY,letterHeight,spawnX,spawnY)
        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX+letterWidth/2 ,
            letterCenterY-letterHeight/4,
            random(300, 450),//color
            this.radius //radius
        ))
        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX+letterWidth ,
            letterCenterY-letterHeight/2,
            random(300, 450),//color
            this.radius //radius
        ))
        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX+letterWidth*1.4 ,
            letterCenterY-letterHeight/1.4,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX-letterWidth/2 ,
            letterCenterY-letterHeight/4,
            random(300, 450),//color
            this.radius //radius
        ))
        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX-letterWidth ,
            letterCenterY-letterHeight/2,
            random(300, 450),//color
            this.radius //radius
        ))
        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX-letterWidth*1.4 ,
            letterCenterY-letterHeight/1.4,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX+letterWidth/2 ,
            letterCenterY+letterHeight/4,
            random(300, 450),//color
            this.radius //radius
        ))
        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX+letterWidth ,
            letterCenterY+letterHeight/2,
            random(300, 450),//color
            this.radius //radius
        ))
        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX+letterWidth*1.4 ,
            letterCenterY+letterHeight/1.4,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX-letterWidth/2 ,
            letterCenterY+letterHeight/4,
            random(300, 450),//color
            this.radius //radius
        ))
        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX-letterWidth ,
            letterCenterY+letterHeight/2,
            random(300, 450),//color
            this.radius //radius
        ))
        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX-letterWidth*1.4 ,
            letterCenterY+letterHeight/1.4,
            random(300, 450),//color
            this.radius //radius
        ))
    }

    drawSoftWild(letterCenterX, letterCenterY, letterHeight, letterWidth, spawnX, spawnY){
        this.drawUpRightLine(letterCenterX,letterCenterX,letterCenterY,letterHeight,spawnX,spawnY)
        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX ,
            letterCenterY+letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))
        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX+letterWidth/2 ,
            letterCenterY+letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))
        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX+letterWidth ,
            letterCenterY+letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))
        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX+letterWidth*1.3 ,
            letterCenterY+letterHeight/1.5,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX+letterWidth ,
            letterCenterY+letterHeight/3,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX+letterWidth/2 ,
            letterCenterY+letterHeight/4,
            random(300, 450),//color
            this.radius //radius
        ))
    }

    drawYA(letterCenterX, letterCenterY, letterHeight, letterWidth, spawnX, spawnY){
        this.drawUpRightLine(letterCenterX+letterWidth,letterCenterX,letterCenterY,letterHeight,spawnX,spawnY)
        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX+letterWidth ,
            letterCenterY-letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX+letterWidth/2 ,
            letterCenterY-letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX ,
            letterCenterY-letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX ,
            letterCenterY- letterHeight/6,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX+letterWidth/2 ,
            letterCenterY- letterHeight/6,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX-letterWidth/4 ,
            letterCenterY- letterHeight/1.8,
            random(300, 450),//color
            this.radius //radius
        ))
        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX-letterWidth/4 ,
            letterCenterY- letterHeight/1.2,
            random(300, 450),//color
            this.radius //radius
        ))
        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX-letterWidth/7 ,
            letterCenterY- letterHeight/3,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX+letterWidth/3,
            letterCenterY+letterHeight/4,
            random(300, 450),//color
            this.radius //radius
        ))
        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX,
            letterCenterY+letterHeight/2,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX+letterWidth,
            letterCenterY+letterHeight,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Н - line
            spawnX,
            spawnY,
            letterCenterX-letterWidth/4,
            letterCenterY+letterHeight/1.3,
            random(300, 450),//color
            this.radius //radius
        ))
    }

    drawI(letterCenterX, letterCenterY, letterHeight, letterWidth, spawnX, spawnY){
        this.drawUpRightLine(letterCenterX-letterWidth,letterCenterY,letterCenterY,letterHeight,spawnX,spawnY)//И-left
        this.drawUpRightLine(letterCenterX+letterWidth,letterCenterY,letterCenterY,letterHeight,spawnX,spawnY)//И-right
        this.fireworks.push(new Firework( //И -line
            this.width/2,
            this.height-this.height/10,
            letterCenterX+letterWidth/3,
            letterCenterY-(letterHeight/2),
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //И -line
            this.width/2,
            this.height-this.height/10,
            letterCenterX+letterWidth/6,
            letterCenterY - letterHeight/6,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //И -line
            this.width/2,
            this.height-this.height/10,
            letterCenterX,
            letterCenterY + letterHeight/6,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //И -line
            this.width/2,
            this.height-this.height/10,
            letterCenterX-letterWidth/4,
            letterCenterY + letterHeight/2,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //И -line
            this.width/2,
            this.height-this.height/10,
            letterCenterX-letterWidth/2,
            letterCenterY + letterHeight/2 +letterHeight/4,
            random(300, 450),//color
            this.radius //radius
        ))
    }

    drawUpRightLine(posX,letterCenterX,letterCenterY,letterHeight, spawnX, spawnY){
        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            posX,
            letterCenterY+letterHeight/1.35,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            posX,
            letterCenterY+(letterHeight/2),
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            posX,
            letterCenterY+(letterHeight/3.6),
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            posX,
            letterCenterY,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            posX,
            letterCenterY-(letterHeight/2),
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            posX,
            letterCenterY-(letterHeight/1.3),
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //П
            spawnX,
            spawnY,
            posX,
            letterCenterY-(letterHeight/3.5),
            random(300, 450),//color
            this.radius //radius
        ))
    }

    drawLetterL(letterCenterX,letterCenterY,letterHeight, letterWidth, spawnX,spawnY){
        this.fireworks.push(new Firework( //Л upper
            spawnX,
            spawnY,
            letterCenterX+letterWidth/2-letterWidth/12,
            letterCenterY-letterHeight/1.3,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Л left-down
            spawnX,
            spawnY,
            letterCenterX-letterWidth/3+letterWidth/8,
            letterCenterY+letterHeight/1.3,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Л
            spawnX,
            spawnY,
            letterCenterX-letterWidth/3+letterWidth/3,
            letterCenterY+letterHeight/5,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Л - left-center
            spawnX,
            spawnY,
            letterCenterX+letterWidth/22,
            letterCenterY,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Л - upper-center-left
            spawnX,
            spawnY,
            letterCenterX+letterWidth/6,
            letterCenterY-letterHeight/2,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Л right-down
            spawnX,
            spawnY,
            letterCenterX+letterWidth-letterWidth/8,
            letterCenterY+letterHeight/1.3,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Л left-down
            spawnX,
            spawnY,
            letterCenterX+letterWidth/1.3,
            letterCenterY+letterHeight/5,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Л right-center-down
            spawnX,
            spawnY,
            letterCenterX+letterWidth-letterWidth/6,
            letterCenterY+letterHeight/2,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Л - right
            spawnX,
            spawnY,
            letterCenterX+letterWidth/2+letterWidth/5,
            letterCenterY - letterHeight/5,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Л - right-
            spawnX,
            spawnY,
            letterCenterX+letterWidth/7,
            letterCenterY - letterHeight/5,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Л - right-center
            spawnX,
            spawnY,
            letterCenterX+letterWidth/2+letterWidth/4,
            letterCenterY,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Л - upper-center-right
            spawnX,
            spawnY,
            letterCenterX+letterWidth/6+letterWidth/2,
            letterCenterY-letterHeight/2,
            random(300, 450),//color
            this.radius //radius
        ))

        this.fireworks.push(new Firework( //Л left-center-down
            spawnX,
            spawnY,
            letterCenterX-letterWidth/11,
            letterCenterY+letterHeight/2,
            random(300, 450),//color
            this.radius //radius
        ))
    }

}

class Firework {
    constructor(x, y, targetX, targetY, shade, offsprings) {
        this.dead = false
        this.offsprings = offsprings

        this.x = x
        this.y = y
        this.targetX = targetX
        this.targetY = targetY

        this.shade = shade
        this.history = []
    }
    update() {
        if (this.dead) return;

        let xDiff = this.targetX - this.x
        let yDiff = this.targetY - this.y
        if (Math.abs(xDiff) > 3 || Math.abs(yDiff) > 3) { // is still moving
            this.x += xDiff / 20
            this.y += yDiff / 20

            this.history.push({
                x: this.x,
                y: this.y
            })

            if (this.history.length > 20) this.history.shift()

        } else {
            if (this.offsprings && !this.madeChilds) {

                let babies = this.offsprings / 2;
                for (let i = 0; i < babies; i++) {
                    let targetX = this.x + this.offsprings * Math.cos(PI2 * i / babies) | 0
                    let targetY = this.y + this.offsprings * Math.sin(PI2 * i / babies) | 0

                    birthday.fireworks.push(new Firework(this.x, this.y, targetX, targetY, this.shade, 0))

                }

            }
            this.madeChilds = true
            this.history.shift()
        }

        if (this.history.length === 0) this.dead = true
        else if (this.offsprings) {
            for (let i = 0; this.history.length > i; i++) {
                let point = this.history[i]
                ctx.beginPath()
                ctx.fillStyle = 'hsl(' + this.shade + ',100%,' + i + '%)'
                ctx.arc(point.x, point.y, 1, 0, PI2, false)
                ctx.fill()
            }
        } else {
            ctx.beginPath()
            ctx.fillStyle = 'hsl(' + this.shade + ',100%,50%)'
            ctx.arc(this.x, this.y, 1, 0, PI2, false)
            ctx.fill()
        }

    }
}

let canvas = document.getElementById('birthday')
let ctx = canvas.getContext('2d')

let birthday = new Birthday
window.onresize = () => birthday.resize()
document.onclick = evt => birthday.onClick(evt)
document.ontouchstart = evt => birthday.onClick(evt)
//setTimeout(birthday.generateNextFirework(),50)
;(function update() {
    requestAnimationFrame(update)
    birthday.update()

}())

//setTimeout(birthday.generateNextFirework(),50)