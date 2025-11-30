var names=new Array();
names[0]="Eris";
names[1]="Roxy";
names[2]="Elinalise";
names[3]="Lilia";
names[4]="Paul";
names[5]="Rudius";
names[6]="Ren";
names[7]="aisha";
names[8]="Zenith";
names[9]="Sylphie";

for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}