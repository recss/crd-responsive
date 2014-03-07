$(function() {
	var celeb_data = [
	  { celeb_name: "Mark-Paul Gosselaar", url_photo: "" },
	  { celeb_name: "Delta Burke", url_photo: "img/avatars/delta.png" },
	  { celeb_name: "Alf", url_photo: "img/avatars/alf.png" },
	  { celeb_name: "Jaleel White", url_photo: "img/avatars/jaleel.png" },
	  { celeb_name: "Ralph Macchio", url_photo: "img/avatars/ralph.png" },
	  { celeb_name: "Candace Cameron", url_photo: "img/avatars/candace.png" },
	  { celeb_name: "Patrick Duffy", url_photo: "img/avatars/pduff.png" },
	  { celeb_name: "Arnold Schwartzengger", url_photo: "img/avatars/arnold.png" }
	];

	function create(createName, createPhoto) {
		celeb_data.push({
			celeb_name	: createName,
			url_photo	: createPhoto
		});
	};

	function createCard(createName, createPhoto) {
		var $celebCard = $("<section class='celeb-card'></section>");
		var imgSrc = (createPhoto || "img/default.png");

		$celebCard.wrapInner("<div class='celeb-pic-holder'></div>");
		$(".celeb-pic-holder", $celebCard)
			.wrapInner("<img class='celeb-pic' src='" + imgSrc + "'>");
		$celebCard.append("<p>" + createName + "</p>");
		$celebCard.append("<img class='close-pic' src='img/close.png'>");
		$(".celeb-card-holder").prepend($celebCard);

		return $celebCard;
	}

	function list() {
		$(".celeb-card-holder").empty();
		for(var i in celeb_data) {
			var c = celeb_data[i];

			var $celebCard = createCard(c.celeb_name, c.url_photo);
			$celebCard.data("index", i);
		};

		$(".close-pic").click(function() {
			var hunterKiller = $(this).parent().data("index");
			celeb_data.splice(hunterKiller, 1);
			list();
		});
	};

	list();

	$("#celeb-form").submit(function(e) {
		create($("#txtName").val(), $("#txtUrl").val());
		list();
		e.preventDefault();
	});
});