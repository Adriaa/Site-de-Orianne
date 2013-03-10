(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['exp_pro.html'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<!DOCTYPE html>\r\n<html>\r\n	<link rel=\"stylesheet\" type=\"text/css\" href=\"bootstrap/css/bootstrap.css\">\r\n	<link rel=\"stylesheet\" type=\"text/css\" href=\"index.css\">\r\n	<head>\r\n	\r\n	</head>\r\n	<body>		\r\n	    <table class =\"table table-bordered\">\r\n			<tr>\r\n				<th> Quand ? </th>\r\n				<th> Quoi ? </th>\r\n				<th> D�tails </th> \r\n			</tr>\r\n			<tr>\r\n				<td> Depuis d�cembre 2010 </td>\r\n				<td> Ing�nieur jeune dipl�m�e dans l��quipe MIMETIC de l�Inria Rennes.\r\nConception d�une plateforme logicielle permettant la simulation de foules gr�ce � des m�thodes de\r\npeuplement massif.\r\n </td>\r\n 				<td> <img src=\"foule.png\"> </td>\r\n			</tr>\r\n			<tr>\r\n				<td> Mars �Septembre 2010 </td>\r\n				<td> Stage dans le d�partement R&D de Mac Guff Ligne, studio d�effets\r\nsp�ciaux et animation. D�veloppement de structures permettant l�am�lioration et l�acc�l�ration du\r\nrendu des images. (C/C++)\r\n				 </td>\r\n				<td> <img src = \"http://www.actucine.com/wp-content/uploads/2012/06/Le-Lorax.jpg\" > </td>\r\n			</tr>\r\n		</table>	\r\n	</body>\r\n</html>";
  });
})();