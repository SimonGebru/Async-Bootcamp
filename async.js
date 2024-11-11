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



   /* function researchTargetAudience () {
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
            }, 2000); 
        });
    }
    
    function celebrateProject() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Fira lyckat projekt klart");
            }, 1000); 
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
                console.log(await stckoverflowErrors());
                console.log(await testProduct());
                console.log(await celebrateProject());
            } catch (error) {
                console.error("Något gick fel:", error);
            }
        }
        
        // Anropa async/await-funktionen
        runWebProject(); */

        /* Övning 3 - Skapa en funktion brewCoffee(coffeeType) som bygger på ett Promise. Om kaffetypen är "espresso", ska det godkännas med "Your espresso is ready!". Om kaffetypen är något annat, ska det avvisas med "We only serve espresso here!". Använd setTimeout för att simulera bryggtiden på 3 sekunder.

        function brewCoffee(coffeeType) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                   if(coffeeType.toLowerCase() === 'espresso'){
                    resolve ("Your espresso is ready!")
                   } else {
                    reject ("We only serve espresso here")
                   }
                },3000);
            });
        }
        brewCoffee('americano')
        .then(response => console.log(response)) 
        .catch(diss => console.log(diss)); */

        /* Övning 4 -  Skapa en kedja av Promise-funktioner för följande matlagningssteg: Förbereda ingredienser - 2s Koka upp vatten - 4s Laga maten - 5s Servera maten - 1s Testa att använda både .then() och async/await för att hantera dessa steg.

        function prepIng () {
            return new Promise ((resolve) => {
                setTimeout(() => {
                    resolve("Ingredienser förberedda")
    
                }, 2000);
            });
        }    
        function boilWater () {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve("Redo med kokat vatten")
                }, 4000);
            });
        }
        function cookFood (){
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve ("Nu är maten lagad!")
                }, 5000);
            });
        }
        function serveFood (){
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve("Maten är klar och redo att ätas, varsågoda!")
                }, 1000);
            });
        }

        async function followRecipe() {
            try {
                console.log(await prepIng());
                console.log(await boilWater());
                console.log(await cookFood());
                console.log(await serveFood());
                
            }catch (error){
                console.error("Jag råka bränna maten, det blir inget idag!:", error);
                
            }
        }

        followRecipe(); */

        // Skapa en funktion readBook(bookTitle) som bygger på ett Promise. Om boken är "JavaScript: The Good Parts", ska det godkännas med "Great choice!". Om boken är något annat, ska det avvisas med "Maybe try a different book?". Använd setTimeout för att simulera lästiden på 2 sekunder.

    


        
        

