// ==UserScript==
// @description Removes the recommendations from the main page of YouTube.
// @include http://www.youtube.com/
// @include http://youtube.com/
// @include https://youtube.com/
// @include https://www.youtube.com/
// @name Youtube Cleaner
// @namespace kgnc
// @version 1.2.1
// @grant none
// ==/UserScript==

/*
	A userscript to remove the recommendations on YouTube.
    Copyright (C) 2014  Kaan Genç

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    A copy of the GNU General Public License can be found at:
	<https://raw.githubusercontent.com/SeriousBug/yt-cleaner/master/LICENSE>
	or <https://www.gnu.org/licenses/gpl.html>.
*/

//Recommended and Popular
popular = document.getElementsByClassName("branded-page-module-title-text");
popularLength = popular.length - 1;
for (;popularLength >= 0;popularLength--){
	if ((popular[popularLength].innerHTML.indexOf("Recommended") != -1) || (popular[popularLength].innerHTML.indexOf("Popular on YouTube") != -1)){
			popular[popularLength].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = "None";
	}
}

//Recommended channels
subButtons = document.getElementsByClassName("shelf-subscription-button yt-uix-button-subscription-container");
buttonLength = subButtons.length - 1;
for (;buttonLength >= 0;buttonLength--){
	subButtons[buttonLength].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = "None";
}

//Recommended channels column on the right
document.getElementsByClassName("branded-page-related-channels branded-page-box ")[0].style.display = "None";
