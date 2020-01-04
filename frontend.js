function load()
{
	label[0].style.backgroundColor = "lightsteelblue";
	categ = category[0].value;
	document.getElementById("categText").innerHTML = label[0].innerHTML;
	$('[data-toggle="tooltip"]').tooltip(); 
}
function categoryChange()
{
	categ = event.target.value;
	for (i = 0; i<= category.length; i++)
	{
		if (category[i] == event.target)
		{
			label[i].style.backgroundColor = "lightsteelblue";
			document.getElementById("categText").innerHTML = label[i].innerHTML;
		}
		else
		{
			label[i].style.backgroundColor = "lightblue";
		}
	}
}
function methodRead()
{
	method = event.target.value;
	switch(method)
	{
		case "get_one":
		{
			document.getElementById("p_id").style.display = "block";
			document.getElementById("p_name").style.display = "none";
			document.getElementById("p_desc").style.display = "none";
			document.getElementById("p_count").style.display = "none";
			document.getElementById("p_order").style.display = "none";
			document.getElementById("p_orderdir").style.display = "none";
			document.getElementById("button").disabled = false;
		}
		break;
		case "put_one":
		{
			document.getElementById("p_id").style.display = "block";
			document.getElementById("p_name").style.display = "block";
			document.getElementById("p_desc").style.display = "block";
			document.getElementById("p_count").style.display = "none";
			document.getElementById("p_order").style.display = "none";
			document.getElementById("p_orderdir").style.display = "none";
			document.getElementById("button").disabled = false;
		}
		break;
		case "delete_one":
		{
			document.getElementById("p_id").style.display = "block";
			document.getElementById("p_name").style.display = "none";
			document.getElementById("p_desc").style.display = "none";
			document.getElementById("p_count").style.display = "none";
			document.getElementById("p_order").style.display = "none";
			document.getElementById("p_orderdir").style.display = "none";
			document.getElementById("button").disabled = false;
		}
		break;
		case "get":
			document.getElementById("p_id").style.display = "block";
			document.getElementById("p_name").style.display = "none";
			document.getElementById("p_desc").style.display = "none";
			document.getElementById("p_count").style.display = "block";
			document.getElementById("p_order").style.display = "block";
			document.getElementById("p_orderdir").style.display = "block";
			document.getElementById("button").disabled = false;
			document.getElementById("p_id").placeholder = "Kezdő érték";
		break;
		case "post":
		{
			document.getElementById("p_id").style.display = "none";
			document.getElementById("p_name").style.display = "block";
			document.getElementById("p_desc").style.display = "block";
			document.getElementById("p_count").style.display = "none";
			document.getElementById("p_order").style.display = "none";
			document.getElementById("p_orderdir").style.display = "none";
			document.getElementById("button").disabled = false;
		}
		break;
	}
}
function api()
{
	switch(method)
	{
		case "get_one":
		{
			var id = document.getElementById("p_id").value;
			if (id != "")
			{
				url = url + categ + "/" + id;
				get_one(url);
				url = "http://81.2.241.234:8080/";
			}
		}
		break;
		case "put_one":
		{
			var id = document.getElementById("p_id").value;
			var name = document.getElementById("p_name").value;
			var desc = document.getElementById("p_desc").value;
			if (id != "")
			{
				url = url + categ + "/" + id;
				put_one(url,name,desc);
				url = "http://81.2.241.234:8080/";
			}
		}
		break;
		case "delete_one":
		{
			var id = document.getElementById("p_id").value;
			if (id != "")
			{
				url = url + categ + "/" + id;
				delete_one(url);
				url = "http://81.2.241.234:8080/";
			}
		}
		break;
		case "get":
		{
			var id = document.getElementById("p_id").value;
			var count = document.getElementById("p_count").value;
			var order = document.getElementById("p_order").value;
			var orderdir = document.getElementById("p_orderdir").value;
			if (id != "")
			{
				url = url + categ+"?start="+id+"&count="+count+"&orderfield="+order+"&orederdirection="+orderdir;
				get(url);
				url = "http://81.2.241.234:8080/";
			}
		}
		break;
		case "post":
		{
			var name = document.getElementById("p_name").value;
			var desc = document.getElementById("p_desc").value;
			url = url + categ;
			post(url,name, desc);
			url = "http://81.2.241.234:8080/";
		}
		break;
	}
}