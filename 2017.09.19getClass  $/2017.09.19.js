/*
* @Author: Administrator
* @Date:   2017-09-19 15:34:10
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-19 23:13:07
*/
	//兼容性----用getElementsByTagName来模拟getElementsByClassName
			function getClass(classname){
				// if(document.getElementsByClassName){
				if(false){    //当电脑中没有不支持的浏览器时，这行用于测试
					return document.getElementsByClassName(classname);
				}else{
					var newarr=[];
					var all=document.getElementsByTagName('*');
					for(var i=0;i<all.length;i++){
						if(all[i].className == classname){
							newarr.push(all[i]);
						}
					}
					return newarr;
				}
			}

			// console.log(getClass('box'));


		//当一个div 有多个类名时
		function getClass1(classname){
			// if(document.getElementsByClassName){
			if(false){         //当电脑中没有不支持的浏览器时，这行用于测试
				return document.getElementsByClassName(classname);
			}else{
				var newarr=[];
				var all=document.getElementsByTagName('*');
				for(var i=0;i<all.length;i++){
					if(checkclass(all[i].className,classname)){
						newarr.push(all[i]);
					}
				}
				return newarr;
			}
		}

		function checkclass(className,classname){
			var arr = className.split(' ');
			for(var i=0;i<arr.length;i++){
				if(arr[i]==classname){
					return true;
				}
			}
			return false;
		}
		// console.log(getClass1('box'));
		// 
		// 当有指定范围(ranger)时
		function getClass2(classname,ranger){
            ranger = ranger ? ranger:document;
			// if(document.getElementsByClassName){
			if(false){         //当电脑中没有不支持的浏览器时，这行用于测试
				return ranger.getElementsByClassName(classname);
			}else{
				var newarr=[];
				var all= ranger.getElementsByTagName('*');
				for(var i=0;i<all.length;i++){
					if(checkclass(all[i].className,classname)){
						newarr.push(all[i]);
					}
				}
				return newarr;
			}
		}

		function checkclass(className,classname){
			var arr = className.split(' ');
			for(var i=0;i<arr.length;i++){
				if(arr[i]==classname){
					return true;
				}
			}
			return false;
		}

//获取指定元素 $(select)
		
		function $(select,ranger){
			ranger = ranger ? ranger:document;
			var first = select.charAt(0);
			if(first == '.'){
				// class
				return getClass1(select.substring(1));                   //数组
			}else if(first == '#'){
				//id
				return ranger.getElementById(select.substring(1))      //元素
			}else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
				//tagName规则---字符串：以字符开头[a~z]
				return ranger.getElementsByTagName(select)
			}
		}