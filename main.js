function audio_classifier(){
    navigator.mediaDevices.getUserMedia({audio : true})
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/6HedhTfuW/model.json',model_loaded)
}
function model_loaded(){
    classifier.classify(gotResults)
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1; 
        document.getElementById("sound").innerHTML='I can hear- '+ results[0].label;
        if(results[0].label=="meowing"){
            document.getElementById("img").src="cat.jpg";
        }
       else if(results[0].label=="Barking"){
        document.getElementById("img").src="dog.jpg";
        }else{
            document.getElementById("img").src="ear.jpg";
        }
    }
}
