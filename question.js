class Question {

  constructor() {
    
    
    this.input2 = createInput("Enter Correct Option No..");
    this.button = createButton('Submit');
    this.button2 = createButton('Reset');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }

  hide(){
    
    
    this.button.hide();
    //this.button2.hide();
    this.input2.hide();
  }

  display(){
    

    this.question.html("Question:- What goes up and down but cannot walk? " );
    this.question.position(150, 80);
    this.option1.html("1: Stairs " );
    this.option1.position(150, 100);
    this.option2.html("2: Time " );
    this.option2.position(150, 120);
    this.option3.html("3: Balloon " );
    this.option3.position(150, 140);
    this.option4.html("4: Houses" );
    this.option4.position(150, 160);

    
    this.input2.position(350, 230);
    this.button.position(290, 300);
    this.button2.position(360, 300);

    this.button.mousePressed(()=>{
      
      
      this.input2.hide();
      this.button.hide();
    
      
    });

    if(this.input2.value === 1){
      ans = true
    }
    else {
      ans = false;
    }
    
  }
}