function get_one(id)
{
	fetch(id)
	.then (response => 
	{
		return response.json()
	})
	.then (data =>
	{
		document.getElementById("result").innerHTML = "ID: "+data.id+"<br>Név: "+data.name+"<br>Leírás: "+data.description
													+"<br><br>"+JSON.stringify(data)
	})
	.catch (error =>
	{
		document.getElementById("result").innerHTML = "Nem található ilyen azonosítószámú elem!"
		alert(error)
	});
}

function put_one(id, name, desc)
{
	var data1 = "name="+name;
	var data2 = "&";
	var data3 = "desc="+desc; 
	fetch(id,
	{
		method: "PUT",
		headers: 
		{
			"Accept": "application/json",
			"Content-Type": "application/x-www-form-urlencoded"
		},
		body: data1+data2+data3
	})
  .then((response) => 
	{
		var stat = response.status
		var statTxt = response.statusText
		if (stat != "404")
		{
			response.json().then((response) => 
			{
				document.getElementById("result").innerHTML = "Szerver Válasza: "+stat+" - "+statTxt+"<br>Sikeres Módosítás!"
			})
		}
		else
		{
			document.getElementById("result").innerHTML = "Szerver Válasza: "+stat+" - "+statTxt+"<br>Hiba Történt!"
		}
	})
}

function delete_one(id)
{
	fetch(id, 
	{
		method: 'DELETE'
	})
	.then (response => 
	{
		return response.json()
	})
  .then(() => 
	{
		document.getElementById("result").innerHTML = "Sikeres Törlés!"
	})
  .catch(err => 
	{
		document.getElementById("result").innerHTML = "Nem található ilyen azonosítószámú elem!"
		alert(error)
	});
}

function get(url)
{
	var sum = "";
	fetch(url)
	.then (response => 
	{
		return response.json()
	})
	.then (data =>
	{
		if (data.length != 0)
		{
			for (i = 0; i<data.length; i++)
			{
				sum += JSON.stringify(data[i])+"<br>"
			}
			document.getElementById("result").innerHTML = sum
		}
		else
		{
			document.getElementById("result").innerHTML = "Nem található ilyen azonosítószámú elem!"
		}
	})
	.catch (error =>
	{
		alert(error)
	});
}

function post(url,name,desc)
{	
	var data1 = "name="+name;
	var data2 = "&";
	var data3 = "desc="+desc; 
	
	fetch(url, 
	{
		method: "post",
		headers: 
		{
			"Accept": "application/json",
			"Content-Type": "application/x-www-form-urlencoded"
		},
	  body: data1+data2+data3
	})
	.then((response) => { 
	   document.getElementById("result").innerHTML = "Sikeres feltöltés";
	})
	.catch (error =>
	{
		document.getElementById("result").innerHTML = error;
	});
}