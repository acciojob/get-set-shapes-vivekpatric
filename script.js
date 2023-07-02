//complete this code
class Rectangle {
	constructor(width,height){
		this.rect_w = width
		this.rect_h = height
	}

	get width(){
		return this.rect_w
	}

	get height(){
		return this.rect_h;
	}

	getArea(){
		return this.rect_w * this.rect_h
	}
}

class Square extends Rectangle{
	constructor(sq_s){
		super(sq_s,sq_s)
	}

	getArea(){
		return this.sq_s* this.sq_s
	}
	getPerimeter(){
		return sq_s * 4
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;