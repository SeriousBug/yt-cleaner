// ==UserScript==
// @description Removes the recommendations from the main page of YouTube.
// @include http://www.youtube.com/
// @include http://youtube.com/
// @include https://youtube.com/
// @include https://www.youtube.com/
// @name Youtube Cleaner
// @namespace kgnc
// @version 2.0.0
// @grant none
// @downloadURL https://raw.githubusercontent.com/SeriousBug/yt-cleaner/master/YoutubeCleaner.user.js
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


//All annotations
annotations = document.getElementsByClassName("shelf-annotation shelf-title-annotation");
annotationsLength = annotations.length - 1;
for (;annotationsLength >= 0;annotationsLength--){
    annotations[annotationsLength].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = "None";
}

//Try to disable auto-loading of the page
document.getElementsByClassName("yt-uix-load-more")[0].setAttribute("data-uix-load-more-href", "");
document.getElementsByClassName("yt-uix-load-more")[0].setAttribute("data-scrolldetect-callback", "");
document.getElementsByClassName("yt-uix-load-more")[0].style.display="None";
