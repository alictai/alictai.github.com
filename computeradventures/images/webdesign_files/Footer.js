var nav_Footer = new Object();

nav_Footer.mouseoverBold="false";
nav_Footer.selectedBgcolor="";
nav_Footer.importedImageMouseOver="";
nav_Footer.numLinks="4";
nav_Footer.textColor="#000000";
nav_Footer.mouseoverBgcolor="";
nav_Footer.tabCategory="basic";
nav_Footer.border="";
nav_Footer.selectedItalic="false";
nav_Footer.graphicMouseover="false";
nav_Footer.type="Navigation";
nav_Footer.basicTab="White";
nav_Footer.horizontalSpacing="20";
nav_Footer.horizontalWrap="6";
nav_Footer.shinyButton="Shiny_Aqua";
nav_Footer.mouseoverEffect="true";
nav_Footer.modernButton="Basic_Black";
nav_Footer.orientation="horizontal";
nav_Footer.funButton="Arts_and_Crafts";
nav_Footer.darkButton="Basic_Black";
nav_Footer.selectedTextcolor="#585858";
nav_Footer.lineWidth="1";
nav_Footer.mouseoverTextcolor="#585858";
nav_Footer.bold="false";
nav_Footer.texturedButton="Brick";
nav_Footer.accentStyle="Square";
nav_Footer.style="text";
nav_Footer.holidayButton="Christmas_Ornaments";
nav_Footer.textSize="8";
nav_Footer.lineColor="#000000";
nav_Footer.brightButton="Chicky";
nav_Footer.mouseoverUnderline="false";
nav_Footer.accentColor="Black";
nav_Footer.imageHeight="";
nav_Footer.background="";
nav_Footer.textFont="Arial";
nav_Footer.hasLinks="true";
nav_Footer.sophisticatedButton="Antique";
nav_Footer.underline="false";
nav_Footer.simpleButton="Autumn_Leaves";
nav_Footer.italic="false";
nav_Footer.importedImageSelected="";
nav_Footer.basicButton="Gray";
nav_Footer.navID="nav_Footer";
nav_Footer.buttonCategory="basic";
nav_Footer.dirty="false";
nav_Footer.selectedBold="false";
nav_Footer.selectedEffect="true";
nav_Footer.graphicSelected="false";
nav_Footer.version="5";
nav_Footer.verticalSpacing="10";
nav_Footer.squareTab="Camel";
nav_Footer.mouseoverItalic="false";
nav_Footer.justification="left";
nav_Footer.imageWidth="";
nav_Footer.selectedUnderline="false";
nav_Footer.accentType="lines";
nav_Footer.importedImage="";
nav_Footer.width="370";
nav_Footer.height="13";

nav_Footer.navName = "Footer";
nav_Footer.imagePath = "null";
nav_Footer.selectedImagePath = "/~media/elements/LayoutClipart/";
nav_Footer.mouseOverImagePath = "/~media/elements/LayoutClipart/";
nav_Footer.imageWidth = "16";
nav_Footer.imageHeight = "16";
nav_Footer.fontClass = "size8 Arial8";
nav_Footer.fontFace = "Arial, Helvetica, sans-serif";


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


nav_Footer.links=new Array(4);
var nav_Footer_Link1 = new Object();
nav_Footer_Link1.type = "url";
nav_Footer_Link1.displayName = "HOME";
nav_Footer_Link1.linkWindow = "_self";
nav_Footer_Link1.linkValue = "http:\/\/www.computeradventures.com";
nav_Footer_Link1.linkIndex = "1";
nav_Footer.links[0] = nav_Footer_Link1;
var nav_Footer_Link2 = new Object();
nav_Footer_Link2.type = "existing";
nav_Footer_Link2.displayName = "SUMMER CAMP";
nav_Footer_Link2.linkWindow = "_self";
nav_Footer_Link2.linkValue = "2015Camp.html";
nav_Footer_Link2.linkIndex = "2";
nav_Footer.links[1] = nav_Footer_Link2;
var nav_Footer_Link3 = new Object();
nav_Footer_Link3.type = "existing";
nav_Footer_Link3.displayName = "ENRICHMENT CLASSES";
nav_Footer_Link3.linkWindow = "_self";
nav_Footer_Link3.linkValue = "Classes.html";
nav_Footer_Link3.linkIndex = "3";
nav_Footer.links[2] = nav_Footer_Link3;
var nav_Footer_Link4 = new Object();
nav_Footer_Link4.type = "existing";
nav_Footer_Link4.displayName = "PARTIES\/EVENTS";
nav_Footer_Link4.linkWindow = "_self";
nav_Footer_Link4.linkValue = "event.html";
nav_Footer_Link4.linkIndex = "4";
nav_Footer.links[3] = nav_Footer_Link4;
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

function addMouseAndStyleSupportFooter(Navigation,navTbId) {
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
		document.write('<TABLE ID="ntb'+navTBSuffix+'"  CELLSPACING=\"0\" CELLPADDING=\"0\" BORDER=\"0\" ><TR ALIGN=\"CENTER\" VALIGN=\"MIDDLE\"><TD><TABLE CELLSPACING=\"0\" CELLPADDING=\"0\" BORDER=\"0\"><TR><TD ALIGN=\"center\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"Footer_Link1\" style=\"cursor: pointer;cursor: hand;color:#000000;font-size: 1px; line-height: 1px;\" onmouseover=\"doMouseChange(nav_Footer,this,\'1\',true);\" onmouseout=\"doMouseChange(nav_Footer,this,\'1\',false);\"><A HREF=\"http:\/\/www.computeradventures.com\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"HOME\"><FONT ID=\"Footer_f1\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size8 Arial8\" STYLE=\"color:#000000\">HOME<\/FONT><IMG SRC=\"\/tp.gif\" WIDTH=\"10.0\" HEIGHT=\"1\" BORDER=\"0\"><\/A><\/TD><TD WIDTH=\"1\" BGCOLOR=\"#000000\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\"><\/TD><TD ALIGN=\"center\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"Footer_Link2\" style=\"cursor: pointer;cursor: hand;color:#000000;font-size: 1px; line-height: 1px;\" onmouseover=\"doMouseChange(nav_Footer,this,\'2\',true);\" onmouseout=\"doMouseChange(nav_Footer,this,\'2\',false);\"><A HREF=\"\/2015Camp.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"SUMMER CAMP\"><IMG SRC=\"\/tp.gif\" WIDTH=\"10.0\" HEIGHT=\"1\" BORDER=\"0\"><FONT ID=\"Footer_f2\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size8 Arial8\" STYLE=\"color:#000000\">SUMMER&nbsp;CAMP<\/FONT><IMG SRC=\"\/tp.gif\" WIDTH=\"10.0\" HEIGHT=\"1\" BORDER=\"0\"><\/A><\/TD><TD WIDTH=\"1\" BGCOLOR=\"#000000\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\"><\/TD><TD ALIGN=\"center\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"Footer_Link3\" style=\"cursor: pointer;cursor: hand;color:#000000;font-size: 1px; line-height: 1px;\" onmouseover=\"doMouseChange(nav_Footer,this,\'3\',true);\" onmouseout=\"doMouseChange(nav_Footer,this,\'3\',false);\"><A HREF=\"\/Classes.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"ENRICHMENT CLASSES\"><IMG SRC=\"\/tp.gif\" WIDTH=\"10.0\" HEIGHT=\"1\" BORDER=\"0\"><FONT ID=\"Footer_f3\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size8 Arial8\" STYLE=\"color:#000000\">ENRICHMENT&nbsp;CLASSES<\/FONT><IMG SRC=\"\/tp.gif\" WIDTH=\"10.0\" HEIGHT=\"1\" BORDER=\"0\"><\/A><\/TD><TD WIDTH=\"1\" BGCOLOR=\"#000000\"><IMG style=\"display: block;\" SRC=\"\/tp.gif\" WIDTH=\"1\"><\/TD><TD ALIGN=\"center\" VALIGN=\"MIDDLE\" NOWRAP=\"NOWRAP\" id=\"Footer_Link4\" style=\"cursor: pointer;cursor: hand;color:#000000;font-size: 1px; line-height: 1px;\" onmouseover=\"doMouseChange(nav_Footer,this,\'4\',true);\" onmouseout=\"doMouseChange(nav_Footer,this,\'4\',false);\"><A HREF=\"\/event.html\" TARGET=\"_self\" STYLE=\"text-decoration:none;\" NAME=\"PARTIES\/EVENTS\"><IMG SRC=\"\/tp.gif\" WIDTH=\"10.0\" HEIGHT=\"1\" BORDER=\"0\"><FONT ID=\"Footer_f4\" FACE=\"Arial, Helvetica, sans-serif\" CLASS=\"size8 Arial8\" STYLE=\"color:#000000\">PARTIES\/EVENTS<\/FONT><\/A><\/TD><\/TR><\/TABLE><\/TD><\/TR><\/TABLE><script type="text/javascript">addMouseAndStyleSupportFooter(nav_Footer,"ntb'+navTBSuffix+'");'+'</scri'+'pt>');
	}

