var nav_NavCamp = new Object();

nav_NavCamp.mouseoverBold="false";
nav_NavCamp.selectedBgcolor="#217CE5";
nav_NavCamp.importedImageMouseOver="";
nav_NavCamp.numLinks="3";
nav_NavCamp.textColor="#000000";
nav_NavCamp.mouseoverBgcolor="#FCA705";
nav_NavCamp.tabCategory="basic";
nav_NavCamp.border="";
nav_NavCamp.selectedItalic="false";
nav_NavCamp.graphicMouseover="false";
nav_NavCamp.type="Navigation";
nav_NavCamp.basicTab="White";
nav_NavCamp.horizontalSpacing="20";
nav_NavCamp.horizontalWrap="6";
nav_NavCamp.shinyButton="Shiny_Aqua";
nav_NavCamp.mouseoverEffect="true";
nav_NavCamp.modernButton="Basic_Black";
nav_NavCamp.orientation="vertical";
nav_NavCamp.funButton="Arts_and_Crafts";
nav_NavCamp.darkButton="Basic_Black";
nav_NavCamp.selectedTextcolor="";
nav_NavCamp.lineWidth="2";
nav_NavCamp.mouseoverTextcolor="";
nav_NavCamp.bold="false";
nav_NavCamp.texturedButton="Brick";
nav_NavCamp.accentStyle="Square";
nav_NavCamp.style="text";
nav_NavCamp.holidayButton="Christmas_Ornaments";
nav_NavCamp.textSize="11";
nav_NavCamp.lineColor="#000000";
nav_NavCamp.brightButton="Chicky";
nav_NavCamp.mouseoverUnderline="false";
nav_NavCamp.accentColor="Black";
nav_NavCamp.imageHeight="";
nav_NavCamp.background="";
nav_NavCamp.textFont="Verdana";
nav_NavCamp.hasLinks="true";
nav_NavCamp.sophisticatedButton="Antique";
nav_NavCamp.underline="false";
nav_NavCamp.simpleButton="Autumn_Leaves";
nav_NavCamp.italic="false";
nav_NavCamp.importedImageSelected="";
nav_NavCamp.basicButton="Gray";
nav_NavCamp.navID="nav_NavCamp";
nav_NavCamp.buttonCategory="basic";
nav_NavCamp.dirty="false";
nav_NavCamp.selectedBold="false";
nav_NavCamp.selectedEffect="true";
nav_NavCamp.graphicSelected="false";
nav_NavCamp.version="5";
nav_NavCamp.verticalSpacing="25";
nav_NavCamp.squareTab="Camel";
nav_NavCamp.mouseoverItalic="false";
nav_NavCamp.justification="center";
nav_NavCamp.imageWidth="";
nav_NavCamp.selectedUnderline="false";
nav_NavCamp.accentType="none";
nav_NavCamp.importedImage="";
nav_NavCamp.width="133";
nav_NavCamp.height="126";

nav_NavCamp.navName = "NavCamp";
nav_NavCamp.imagePath = "null";
nav_NavCamp.selectedImagePath = "/~media/elements/LayoutClipart/";
nav_NavCamp.mouseOverImagePath = "/~media/elements/LayoutClipart/";
nav_NavCamp.imageWidth = "16";
nav_NavCamp.imageHeight = "16";
nav_NavCamp.fontClass = "size11 Verdana11";
nav_NavCamp.fontFace = "Verdana, Arial, Helvetica, sans-serif";


var baseHref = '';
// this will only work if getElementsByTagName works
if (document.getElementsByTagName)
{
    // this will only work if we can find a base tag
    var base = document.getElementsByTagName('base');
    // Verify that the base object exists
    if (base && base.length > 0)
    {
        // if you don't specify a base href, href comes back as undefined
        if (base[0].href != undefined)
        {
            // get the base href
            baseHref = base[0].href;
            // add a trailing slash if base href doesn't already have one
            if (baseHref != '' && baseHref.charAt(baseHref.length - 1) != '/')
            {
                baseHref += '/';
            }
        }
    }
}


nav_NavCamp.links=new Array(3);
var nav_NavCamp_Link1 = new Object();
nav_NavCamp_Link1.type = "existing";
nav_NavCamp_Link1.displayName = "Course Description";
nav_NavCamp_Link1.linkWindow = "_self";
nav_NavCamp_Link1.linkValue = "2015Camp-CourseDescription.html";
nav_NavCamp_Link1.linkIndex = "1";
nav_NavCamp.links[0] = nav_NavCamp_Link1;
var nav_NavCamp_Link2 = new Object();
nav_NavCamp_Link2.type = "existing";
nav_NavCamp_Link2.displayName = "Camp Schedule";
nav_NavCamp_Link2.linkWindow = "_self";
nav_NavCamp_Link2.linkValue = "2015Camp-Schedule.html";
nav_NavCamp_Link2.linkIndex = "2";
nav_NavCamp.links[1] = nav_NavCamp_Link2;
var nav_NavCamp_Link3 = new Object();
nav_NavCamp_Link3.type = "existing";
nav_NavCamp_Link3.displayName = "Camp Registration";
nav_NavCamp_Link3.linkWindow = "_self";
nav_NavCamp_Link3.linkValue = "2015Camp-Registration.html";
nav_NavCamp_Link3.linkIndex = "3";
nav_NavCamp.links[2] = nav_NavCamp_Link3;
function backgroundMouseOn(tdElement, newColor)
{
	if(tdElement != null) {
		tdElement.oldBGColor = tdElement.style.backgroundColor;
		tdElement.style.backgroundColor = newColor;
	}
}
function backgroundMouseOff(tdElement)
{
	if(tdElement != null) {
		tdElement.style.backgroundColor = tdElement.oldBGColor;
	}
} 

function doMouseChange(Navigation,tdElement,linkIndex,bisMouseOver) {
	if (Navigation.mouseoverEffect != 'true') {
		return;
	}	
	var link = Navigation.links[linkIndex-1];
	var bIsCurrentPage = isCurrentPage(link);
	var bShowMouseoverBg = !(bIsCurrentPage
			&& 'true' == Navigation.selectedEffect && Navigation.selectedBgcolor);
	var fontElement = getLinkFontElement(tdElement);
	if(fontElement != null) {
		doFontChange(Navigation,fontElement,bIsCurrentPage,bisMouseOver);
	}
	
	if (Navigation.mouseoverBgcolor && bShowMouseoverBg) {
		if(bisMouseOver) {
			backgroundMouseOn(tdElement,Navigation.mouseoverBgcolor);
		} else {
			backgroundMouseOff(tdElement);
		}
	}
}
function addStyle(Navigation, Link, tdElement,vNavTrElement) {
	if (tdElement == null) {
		return;
	}
	var strFontColor = Navigation.textColor;
	if ('true' == Navigation.selectedEffect) {
		if (Navigation.selectedTextcolor) {
			strFontColor = Navigation.selectedTextcolor;
		}
		if (Navigation.selectedBgcolor) {
			if (Navigation.orientation == 'horizontal') {
				tdElement.style.backgroundColor = Navigation.selectedBgcolor;
			} else {
				if (vNavTrElement != null) {
					vNavTrElement.style.backgroundColor = Navigation.selectedBgcolor;
				}
			}
		}
	}
	var fontElement = getLinkFontElement(tdElement);
	if (fontElement != null) {
		fontElement.style.color = strFontColor;
	}
	tdElement.style.color = strFontColor;
	if ('true' == Navigation.selectedEffect) {
		if ('true' == Navigation.selectedBold) {
			tdElement.style.fontWeight = "bold";
		}
		if ('true' == Navigation.selectedItalic) {
			tdElement.style.fontStyle = "italic";
		}
		if ('true' == Navigation.selectedUnderline) {
			tdElement.style.textDecoration = "underline";
		}
	}
}

// Combined escape html and javascript
function escapeHtmlInlineScript(s, escapeSingleQuotes, escapeDoubleQuotes){
	return htmlEncode(escapeScript(s, escapeSingleQuotes, escapeDoubleQuotes));
}

function htmlEncode(s){
	if (typeof(s) != "string") return "";
	
	var result = "";
	for (var i = 0; i < s.length; i++) {
		var ch = s.charAt(i);
		switch (ch) {
		case '<':
			result += "&lt;";
			break;
		case '>':
			result += "&gt;";
			break;
		case '&':
			result += "&amp;";
			break;
		case '"':
			result += "&quot;";
			break;
		case "'":
			result += "&#39;";
			break;
		default:
			result += ch;
		}
	}
	return result;
}

/* escapes slashes and quotes. the default is to escape quotes,
 * but this can be turned off.
 * this function is used for javascript and also for escaping urls
 * within background-image css.	 
 */
function escapeScript(s, escapeSingleQuotes, escapeDoubleQuotes){
	if (typeof(s) != "string") return "";
	
	var result = "";
	for (var i = 0; i < s.length; i++) {
		var ch = s.charAt(i);
		switch (ch) {
		case '\'':
			if (escapeSingleQuotes == null || escapeSingleQuotes)
				result += "\\\'";
			break;
		case '\"':
			if (escapeDoubleQuotes == null || escapeDoubleQuotes)
				result += "\\\"";
			break;
		case '\\':
			result += "\\\\";
			break;
		default:
			result += ch;
		}
	}
	return result;
}

//
// This .js file includes utility functions used by both graphical and text navs
// in their rendering.  User pages including a nav element will import this file, along
// with TextNavigation.js and GraphicNavigation.js.  The functions within will
// be called by the [navname].js file generated at publish time.

function fixLinkValue(Link)
{
	if(Link.type!='existing')
	{
		return Link.linkValue;
	}
	else
	{
		return baseHref + strRelativePathToRoot + Link.linkValue;
	}
}

function isCurrentPage(Link)
{
	if(Link.type!='existing')
	{
		return false;
	}
	var strLinkValue = Link.linkValue.toLowerCase();
	return (strRelativePagePath == strLinkValue);
}

function toggleOnMouseChange(fontElement,newColor, bold, underline, italic)
{
	if(fontElement == null) {
		return;
	}
	if(newColor)
	{
		fontElement.style.color=newColor;
	}
	fontElement.style.fontWeight = (bold=='true' ? 'bold' : 'normal');
	fontElement.style.textDecoration = (underline=='true' ? 'underline' : 'none');
	fontElement.style.fontStyle = (italic=='true' ? 'italic' : 'normal');

}

function doFontChange(Navigation,fontElement,bIsCurrentPage,bisMouseOver) {
	if(fontElement == null) {
		return;
	}
	var textColor;
	var baseTextColor = Navigation.textColor;
	var bold;
	var baseBold = Navigation.bold;
	var underline;
	var baseUnderline = Navigation.underline;
	var italic;
	var baseItalic = Navigation.italic;
	if (bIsCurrentPage && 'true' == Navigation.selectedEffect) {
		textColor = Navigation.selectedTextcolor ? Navigation.selectedTextcolor
				: (Navigation.mouseoverTextColor ? Navigation.mouseoverTextcolor
						: Navigation.textColor);
		baseTextColor = Navigation.selectedTextcolor ? Navigation.selectedTextcolor
				: Navigation.textColor;
		baseBold = bold = Navigation.selectedBold;
		baseUnderline = underline = Navigation.selectedUnderline;
		baseItalic = italic = Navigation.selectedItalic;
	} else {
		textColor = Navigation.mouseoverTextcolor ? Navigation.mouseoverTextcolor
				: Navigation.textColor;
		bold = Navigation.mouseoverBold;
		underline = Navigation.mouseoverUnderline;
		italic = Navigation.mouseoverItalic;
	}
	
	if(bisMouseOver) {
		toggleOnMouseChange(fontElement,textColor,bold,underline,italic);
	} else {
		toggleOnMouseChange(fontElement,baseTextColor,baseBold,baseUnderline,baseItalic);
	}
	

}

function addMouseAndStyleSupportNavCamp(Navigation,navTbId) {
	var startNode;

	if(typeof(nav_element_id) != 'undefined' && document.getElementById(nav_element_id) != null) {
		startNode = document.getElementById(nav_element_id);
			
	} else if(navTbId != null) {
		startNode = document.getElementById(navTbId);
			
	}
	
	if(startNode != null) {
	  searchForCurrentPageTd(Navigation,startNode);
	}
	

}

function searchForCurrentPageTd(Navigation,startNode) {
	
	if(startNode.childNodes != null) {
		for(var i=0;i<startNode.childNodes.length;i++){
			if(addStyleForCurrentPageTd(Navigation,startNode.childNodes[i])){
			   return;	
			} else {
			   searchForCurrentPageTd(Navigation,startNode.childNodes[i]);
			}
		}
	}

}

function addStyleForCurrentPageTd(Navigation,currentNode) {
	if(Navigation.orientation == 'horizontal') {
		if(currentNode.tagName == 'TD' && currentNode.id != '' && currentNode.id.indexOf(Navigation.navName+navTDLinkPart) != -1){
			var currentTDIdPrefix = Navigation.navName+navTDLinkPart;
			var linkId = currentNode.id.substring(currentTDIdPrefix.length,currentNode.id.length);
			if(isCurrentPage(Navigation.links[linkId-1]) == true) {
				addStyle(Navigation, Navigation.links[linkId-1],currentNode);
				return true;
			}
		}
	} else {
		if(currentNode.tagName == 'TR' && currentNode.id != '' && currentNode.id.indexOf(navTRLinkPrefix) != -1){	
			var currentTRIdPrefix = navTRLinkPrefix+Navigation.navName;
			var linkId = currentNode.id.substring(currentTRIdPrefix.length,currentNode.id.length);
			if(isCurrentPage(Navigation.links[linkId-1]) == true && currentNode.childNodes != null) {
				var currentPageTd;
				for(var i=0;currentNode.childNodes.length;i++) {
					if(typeof(currentNode.childNodes[i].tagName) != 'undefined' && currentNode.childNodes[i].tagName == 'TD' && currentNode.childNodes[i].id.indexOf(Navigation.navName+navTDLinkPart) != -1) {
						currentPageTd = currentNode.childNodes[i];
						addStyle(Navigation, Navigation.links[linkId - 1],currentPageTd,currentNode);
						return true;
					}
				}
			}
		}
	}
	return false;
}

function getChildElementFromTree(startNode,nodesToTraverse) {
	var currentChildNode = startNode;
	
	for(var n= 0;n<nodesToTraverse.length;n++) {
		currentChildNode = getMatchingChildByTag(currentChildNode.childNodes,nodesToTraverse[n]);
	}
	
	return currentChildNode;
}


function getMatchingChildByTag(childNodes,tagName) {
	var child;
	for(var i=0;childNodes.length;i++) {
		if(childNodes[i].tagName == tagName) {
			child = childNodes[i];
			break;
		}
	}
	return child;
}
function getLinkFontElement(tdElement){
	var fontElement;
	var aElement = getChildElementFromTree(tdElement,['A']);
	for(var i=0;i < aElement.childNodes.length;i++) {
		if(aElement.childNodes[i].tagName == 'DIV') {
		 	fontElement = getChildElementFromTree(aElement.childNodes[i],['FONT']);
		 	break;
		} else if(aElement.childNodes[i].tagName == 'FONT'){
		 	fontElement = 	aElement.childNodes[i];
		 	break;
		}
	
	}
	return fontElement;
}



	if(typeof(navTRLinkPrefix) == 'undefined') {
		navTRLinkPrefix = 'vNavTR_Link_';
	}
	if(typeof(navTDLinkPart) == 'undefined') {
		navTDLinkPart = '_Link';
	}
	if(document.getElementById('nav_version') == null) {
	if (typeof(navTBSuffix) == 'undefined') {
	navTBSuffix = 0;
	} else {navTBSuffix++;}
		document.write('<TABLE ID="ntb'+navTBSuffix+'"  CELLSPACING=\"0\" CELLPADDING=\"0\" BORDER=\"0\" ><TR id=\"vNavTR_Link_NavCamp1\"><TD ALIGN=\"center\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"NavCamp_Link1\" style=\"cursor: pointer;cursor: hand;color:#000000;font-size: 1px; line-height: 1px;\" onmouseover=\"doMouseChange(nav_NavCamp,this,\'1\',true);\" onmouseout=\"doMouseChange(nav_NavCamp,this,\'1\',false);\"><A HREF=\"\/2015Camp-CourseDescription.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"Course Description\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"12.0\" BORDER=\"0\"><FONT ID=\"NavCamp_f1\" FACE=\"Verdana, Arial, Helvetica, sans-serif\" CLASS=\"size11 Verdana11\" STYLE=\"color:#000000\">Course&nbsp;Description<\/FONT><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"13.0\" BORDER=\"0\"><\/A><\/TD><\/TR><TR id=\"vNavTR_Link_NavCamp2\"><TD ALIGN=\"center\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"NavCamp_Link2\" style=\"cursor: pointer;cursor: hand;color:#000000;font-size: 1px; line-height: 1px;\" onmouseover=\"doMouseChange(nav_NavCamp,this,\'2\',true);\" onmouseout=\"doMouseChange(nav_NavCamp,this,\'2\',false);\"><A HREF=\"\/2015Camp-Schedule.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"Camp Schedule\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"12.0\" BORDER=\"0\"><FONT ID=\"NavCamp_f2\" FACE=\"Verdana, Arial, Helvetica, sans-serif\" CLASS=\"size11 Verdana11\" STYLE=\"color:#000000\">Camp&nbsp;Schedule<\/FONT><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"13.0\" BORDER=\"0\"><\/A><\/TD><\/TR><TR id=\"vNavTR_Link_NavCamp3\"><TD ALIGN=\"center\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"NavCamp_Link3\" style=\"cursor: pointer;cursor: hand;color:#000000;font-size: 1px; line-height: 1px;\" onmouseover=\"doMouseChange(nav_NavCamp,this,\'3\',true);\" onmouseout=\"doMouseChange(nav_NavCamp,this,\'3\',false);\"><A HREF=\"\/2015Camp-Registration.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"Camp Registration\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"12.0\" BORDER=\"0\"><FONT ID=\"NavCamp_f3\" FACE=\"Verdana, Arial, Helvetica, sans-serif\" CLASS=\"size11 Verdana11\" STYLE=\"color:#000000\">Camp&nbsp;Registration<\/FONT><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\" HEIGHT=\"13.0\" BORDER=\"0\"><\/A><\/TD><\/TR><\/TABLE><script type="text/javascript">addMouseAndStyleSupportNavCamp(nav_NavCamp,"ntb'+navTBSuffix+'");'+'</scri'+'pt>');
	}

