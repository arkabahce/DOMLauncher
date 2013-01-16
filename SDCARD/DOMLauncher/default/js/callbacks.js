function applistCallback(appList){
	//Parse the appList
		
		appListArray = JSON.parse(appList);
		//For each item in the JSON Array
			// @ appName - Application Name ('DOMLauncher')
			// @ appLaunch - Package class name ('com.awaa.domlauncher')
			// @ appActivity - Acivity Intent ('.DialtactsContactsEntryActivity')
		$appPanel = $('.appPanel_Content');
		$appPanel.empty();
		$.each(appListArray, function(e) {
			var appName = this.name
			var appLaunch = this.package
			var appActivity = this.intent
			
			if(this.package === "com.android.settings"){
				$appPanel.append('<div class="app" appLaunch="com.android.settings" appActivity=".Settings" appName="'+appName+'"><span>'+appName+'</span></div>');
				$appPanel.append('<a href="tel:" class="app dialer" appName="default_Dialer"><span>Dialer</span></a>');
			}else if(this.package === "com.android.contacts"){
				$appPanel.append('<div class="app" appLaunch="com.android.contacts" appActivity=".DialtactsContactsEntryActivity" appName="'+appName+'"><span>'+appName+'</span></div>');
			}else{
				$appPanel.append('<div class="app" appLaunch="'+appLaunch+'" appActivity="'+appActivity+'" appName="'+appName+'"><span>'+appName+'</span></div>');
			}
			 appName = null
			 appLaunch = null
			 appActivity = null
		});
		appListArray = null;
		$appPanel = null
}


	//Clock Timer 
	clockTimer = null;
 function clock() {
	var seconds = new Date().getSeconds();
	var hours = new Date().getHours();
	var mins = new Date().getMinutes();
	var sdegree = seconds * 6;
	var srotate = "rotate(" + sdegree + "deg)";
	var mdegree = mins * 6;
	var mrotate = "rotate(" + mdegree + "deg)";
	var hdegree = hours * 30 + (mins / 2);
	var hrotate = "rotate(" + hdegree + "deg)";
	
	$("#sec").css({"-webkit-transform" : srotate});
	$("#hour").css({"-webkit-transform" : hrotate});
	$("#min").css({"-webkit-transform" : mrotate});
}
















    // Handle the pause event
    function onPause() {
		clearInterval(clockTimer);
	}

	
	// Handle the resume event
	function onResume() {
		clockTimer = setInterval(clock, 1000);
	}
