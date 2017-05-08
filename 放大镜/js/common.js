// 通过ID获取DOM节点函数
function $(id) {
	return document.getElementById(id);
}

// 删除CLassName函数
function removeClass(obj, sClass){
	var
		aClassName = obj.className.split(' '),
		aNewClass  = [];

	// 遍历筛选
	for(var i = 0; i < aClassName.length; i++) {
		if(aClassName[i] !== sClass) {
			aNewClass.push(aClassName[i]);
		}
	}

	obj.className = aNewClass.join(' ');
}

// 判断是否已经包含className函数
function hasClass(obj, sClass) {
	var
		aClassName = obj.className.split(' ');

	for(var i = 0; i < aClassName.length; i++) {
		if(aClassName[i] === sClass) {
			return true;
		}
	}
	return false;
}

// 添加className函数
function addClass(obj, sClass) {
	if(!hasClass(obj, sClass)){
		obj.className += ' ' +sClass;
	}
	return true;
}