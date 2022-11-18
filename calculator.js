<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Calculator</title>
</head>
<body>
    <div class="hadding">
        <h1>Calculator</h1>
    </div>
    <div class="main">
        <form class="calculatorForm" name="calculatorForm">

            <div class="screen">
                <input type="text" name="screen" readonly>
            </div>

            <div class="button">
                <input type="button" class="clearbutton" name="clear" value="clear" onclick="Clear()">
            </div>

            <div class="button">
                <input type="button" class="Numbers" name="Num1" value="1" onclick="valueButton(this);" >
                <input type="button" class="Numbers" name="Num2" value="2" onclick="valueButton(this);" >
                <input type="button" class="Numbers" name="Num3" value="3" onclick="valueButton(this);" >
                <input type="button" class="Numbers" name="add" value="+" onclick="valueButton(this);" >
            </div>

            <div class="button">
                <input type="button" class="Numbers" name="Num4" value="4" onclick="valueButton(this);" >
                <input type="button" class="Numbers" name="Num5" value="5" onclick="valueButton(this);" >
                <input type="button" class="Numbers" name="Num6" value="6" onclick="valueButton(this);" >
                <input type="button" class="Numbers" name="sub" value="-" onclick="valueButton(this);" >
            </div>

            <div class="button">
                <input type="button" class="Numbers" name="Num7" value="7" onclick="valueButton(this);" >
                <input type="button" class="Numbers" name="Num8" value="8" onclick="valueButton(this);" >
                <input type="button" class="Numbers" name="Num9" value="9" onclick="valueButton(this);" >
                <input type="button" class="Numbers" name="multi" value="*" onclick="valueButton(this);" >
            </div>

            <div class="button">
                <input type="button" class="Numbers" name="Num0" value="0" onclick="valueButton(this);" >
                <input type="button" class="Numbers" name="divi" value="/" onclick="valueButton(this);" >
                <input type="button" class="Numbers" name="point" value="." onclick="valueButton(this);">
                <input type="button" class="Numbers1" name="equal" value="=" onclick="Calculate();" >
            </div>

        </form>
    </div>

    <script>
        function valueButton(e){
            calculatorForm.screen.value +=e.value;
        }
        function Clear(){
            calculatorForm.screen.value = null;
        }
        function Calculate(){
            calculatorForm.screen.value = eval(calculatorForm.screen.value)
        }
    </script>
    
</body>
</html>


