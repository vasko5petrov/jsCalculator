var buttons = document.querySelectorAll('#calculator-wrapper button');
        var input = document.getElementById('screen');
        var actions = ['+', '-', 'x', '/'];

        var isDecimal = false;
        
        buttons.forEach(function(button) {
            button.addEventListener('click', function(e) {
                
                e.preventDefault();
                
                var buttonValue = e.target.innerHTML;
                
                if(buttonValue == "C") {
                    input.innerHTML = "";
                    isDecimal = false;
                } else if(buttonValue == "=") {
                    var toSolve = input.innerHTML;
                    var lastChar = toSolve[toSolve.length - 1];

                    toSolve = toSolve.replace(/x/g, '*');

                    if(actions.indexOf(lastChar) > -1 || lastChar == ".") {
                        toSolve = toSolve.replace(/.$/, '');
                    }

                    if(toSolve) {
                        input.innerHTML = eval(toSolve);
                    }

                    isDecimal = false;
                } else if(actions.indexOf(buttonValue) > -1) {
                    var lastChar = input.innerHTML[input.innerHTML.length - 1];

                    if(input.innerHTML != '' && actions.indexOf(lastChar) == -1) {
                        input.innerHTML += buttonValue;
                    }

                    isDecimal = false;
                } else if(buttonValue == '.') {
                    if(!isDecimal) {
                        input.innerHTML += buttonValue;
                        isDecimal = true;
                    }
                } else {
                    input.innerHTML += buttonValue;
                }
                
            });
        });