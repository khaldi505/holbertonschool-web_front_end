console.log("Start of the execution queue")


setTimeout(function(){ console.log("Final code block to be executed"); }, 0);

    for (x=0; x <= 100; x++){
        console.log(x);
    }
    console.log("End of the loop printing")
