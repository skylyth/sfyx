window.onload = function () {
	var
		oTop		= $('top'),
		oRight		= $('right'),
		oZoom		= $('zoom'),
		oList 		= $('list'),
		oMiddleImg  = $('middle-img'),
		oBigImg  	= $('big-img'),
		aListImg 	= oList.getElementsByTagName('img');

	// 给缩略图添加onmouseenter事件
	for(var i = 0; i < aListImg.length; i++) {
		aListImg[i].onmouseenter = function () {
			// 修改中型图片的SRC
			oMiddleImg.src = this.src;
			// 修改大型图片的SRC
			oBigImg.src    = this.src;

			// 添加缩略图的className
			for(var j = 0; j < aListImg.length; j++) {
				removeClass(aListImg[j], 'active');
			}

			addClass(this, 'active');
		}
	}

	// 获取Top距离文档左侧和顶部的距离
	var oDis = getOffset(oTop);

	// 给top添加onmouseenter事件
	oTop.onmouseenter = function () {
		oRight.style.display = 'block';
		oZoom.style.display = 'block';
		
	}
	// 给top添加onmouseleave事件
	oTop.onmouseleave = function () {
		oRight.style.display = 'none';
		oZoom.style.display = 'none';
		
	}
	// 给oTop添加move事件
	oTop.onmousemove = function (ev) {
		var
			ev = ev || window.event,
			iX = ev.clientX,
			iY = ev.clientY,
			iL = iX - oDis.left - oZoom.offsetWidth / 2,
			iT = iY - oDis.top  - oZoom.offsetHeight / 2;

		// 范围判断
		if(iL < 0) {
			iL = 0;
		}
		if(iT < 0) {
			iT = 0;
		}
		if(iL > oTop.offsetWidth - oZoom.offsetWidth) {
			iL = oTop.offsetWidth - oZoom.offsetWidth;
		}
		if(iT > oTop.offsetHeight - oZoom.offsetHeight) {
			iT = oTop.offsetHeight - oZoom.offsetHeight;
		}

		// 修改遮罩层的位置
		oZoom.style.top  = iT + 'px';
		oZoom.style.left = iL + 'px';

		// 修改大图的位置
		oBigImg.style.top  = -iT * 2 + 'px';
		oBigImg.style.left = -iL * 2 + 'px';
	}


	// 循环获取元素距离文档左侧和顶部的距离
	function getOffset(obj) {
		var oDis = {left: 0, top: 0};

		do{
			oDis.left += obj.offsetLeft;
			oDis.top  += obj.offsetTop;
			obj = obj.offsetParent;
		}while(obj);

		return oDis;
	}
};