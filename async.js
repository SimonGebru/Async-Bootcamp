/*function letsDance(danceStyle) {
    
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            
            if (danceStyle.toLowerCase() === 'polka') {
                
                resolve("Yes, polka is my thing!");
            } else {
                
                reject("Not even if a pandemic roamed the earth");
            }
        }, 2000); 
    });
}

letsDance('polka')
    .then(response => console.log(response)) 
    .catch(diss => console.log(diss)); */



    function researchTargetAudience () {
        return new Promise ((resolve) => {
            setTimeout(() => {
                resolve("Researcha målgruppen klart")

            }, 4000);
        });
    }    
    function sketchDesign () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Skiss på design klart")
            }, 2000);
        });
    }
    function createMockUp (){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve ("Mockup i Fiigma klar")
            }, 3000);
        });
    }
    function codeProject (){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Kodningen är klar")
            }, 3000);
        });
    }
    function stckoverflowErrors (){
        return new Promise ((resolve) => {
            setTimeout (() => {
                resolve("stockoverflow fel är klart")
            }, 1000);
        });
    }
    function testProduct() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Testa produkten klart");
            }, 2000); // 2s
        });
    }
    
    function celebrateProject() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Fira lyckat projekt klart");
            }, 1000); // 1s
        });
    }

    researchTargetAudience()
        .then ((response) => {
            console.log(response);
            return sketchDesign();
        })
        .then ((response) => {
            console.log(response);
            return createMockUp();
        })
        .then ((response) => {
            console.log(response);
            return codeProject();
        })
        .then ((response) => {
            console.log(response);
            return stckoverflowErrors();
        })
        .then ((response) => {
            console.log(response);
            return testProduct();
        })
        .then ((response) => {
            console.log(response);
            return celebrateProject();
        })
        .then ((response) => {
            console.log(response);
        })
        .catch ((error) => {
            console.error("Något gick fel");
            
        });

        async function runWebProject() {
            try {
                console.log(await researchTargetAudience());
                console.log(await sketchDesign());
                console.log(await createMockUp());
                console.log(await codeProject());
                console.log(await stackoverflowErrors());
                console.log(await testProduct());
                console.log(await celebrateProject());
            } catch (error) {
                console.error("Något gick fel:", error);
            }
        }
        
        // Anropa async/await-funktionen
        runWebProject();

    


        
        

