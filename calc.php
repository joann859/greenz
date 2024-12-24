<!DOCTYPE html>
<!--[if lt IE 7]><html lang="ru" class="lt-ie9 lt-ie8 lt-ie7"><![endif]-->
<!--[if IE 7]><html lang="ru" class="lt-ie9 lt-ie8"><![endif]-->
<!--[if IE 8]><html lang="ru" class="lt-ie9"><![endif]-->
<!--[if gt IE 8]><!-->
<html lang="ru">
<!--<![endif]-->
<?php include "includes/head.php"; ?>
<body>
<?php include "includes/nav.php"; ?>
<div class="togglePage">
	<div class="main container">
		<h1 class="headline">Расчитать стоимость онлайн<br><h4 class="headline">винтового фундамента</h4></h1>
	    <div class="calc col-md-9" id="calc">
           <h4>Тип строения</h4>
	    	<select id="building" >
	    		<option name="building" value="1000">1500</option>
	    		<option name="building" value="1230">2000</option>
	    		<option name="building" value="1280">2500</option>
	    	</select><br>
            <h4>Свая</h4>
 	    	<select id="material" >
	    		<option name="material" value="990">76</option>
	    		<option name="material" value="1390">89</option>
	    		<option name="material" value="1590">108</option>
	    	
	    	</select><br>
	    	<h4>Длина строения</h4>
	    	<input type="range" name="width"  id="width" class="size width" min="0" max="30" step="3" value="3" >
	    	<div class="valw"><div id="valw"></div></div><br>
	    	<h4>Ширина строения</h4>
	    	<input type="range" name="height" id="height" class="size height" min="0" max="30" step="3" value="3"><br>
	    	<div class="valh"><div id="valh"></div></div><br>
	    	<img src="img/schemes/6x6.jpg">
	    	<span id="cost"><h4 id="buildingSpecs"><br><h2 id="price"></h2></h4></span>
	    	<button>Заказать</button>
	    	<?php include "includes/audio.php"; ?>
	    </div> 
	</div>
</div>
<?php include "includes/footer.php"; ?>
 <?php include "includes/scripts.php"; ?>
 <script type="text/javascript">
      var width = document.getElementById("width");
      var height = document.getElementById("height");
      var valh = document.getElementById("valh");
      var valw = document.getElementById("valw");
    valw.innerHTML = width.value;
    valh.innerHTML = height.value;
    width.oninput=function(){
    	valw.innerHTML=this.value;
    }
    height.oninput=function(){
    	valh.innerHTML=this.value;
    }
  </script>
</body>
</html>