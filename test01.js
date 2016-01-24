
//simple program which creates a file, then renames it if the chosen rename isnt already in use
//if it is it will delete the interfearing file
var fs = require("fs");

if(fs.existsSync("new_message.txt")==false)
{
	if(fs.existsSync("updated_message.txt")==false)
	{

		fs.writeFile("new_message.txt", "Hello!", function(error)
		{
			if (error) throw error;
			 
			console.log("Created new file");
		});

		fs.rename("new_message.txt", "updated_message.txt",function(error)
		{
			if (error) throw error;
			
			console.log("Renamed file");

		});
	}

	else
	{
		fs.unlink("updated_message.txt", function(error)
		{
			if (error) throw error;
			 
			console.log("Deleted file updated_message.txt");
		});
	}
}	

else
{
		fs.unlink("new_message.txt", function(error)
		{
			if (error) throw error;
			 
			console.log("Deleted file new_message.txt");
		});
}

console.log("End of program");